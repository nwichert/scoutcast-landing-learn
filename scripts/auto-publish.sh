#!/bin/zsh
# Scheduled blog publish for scoutcast.ai.
#
# Runs daily via launchd (~/Library/LaunchAgents/ai.scoutcast.blog-autopublish.plist).
# lib/posts.ts date-gates future posts out of the build, so "publishing" a
# scheduled post is just: rebuild + redeploy on/after its date. This script:
#   1. exits quietly unless a post's date == today (nothing to publish)
#   2. regenerates sitemap.xml + llms.txt, builds the static export
#   3. deploys to Firebase Hosting, pings IndexNow + GSC sitemap submit
#   4. posts a macOS notification listing the URLs to manually
#      "Request Indexing" in Google Search Console (no API for that step)
#
#   scripts/auto-publish.sh          # normal scheduled behavior
#   scripts/auto-publish.sh --force  # publish even if no post is dated today
set -uo pipefail

export PATH="/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin"
REPO="/Users/nickwichert/Documents/dev/scoutcast-landing-learn/scoutcast-landing-learn"
LOG_DIR="$HOME/Library/Logs/scoutcast-blog"
mkdir -p "$LOG_DIR"
LOG="$LOG_DIR/auto-publish-$(date +%F).log"
exec >>"$LOG" 2>&1

echo "=== auto-publish run $(date '+%F %T') ==="
cd "$REPO" || exit 1

TODAY=$(date +%F)

# Slugs whose publish date is today (they enter `posts` in this build).
DUE_SLUGS=$(node --input-type=module -e "
  const { posts } = await import('$REPO/lib/posts.ts');
  const due = posts.filter((p) => p.date === '$TODAY').map((p) => p.slug);
  process.stdout.write(due.join(' '));
")

if [[ -z "$DUE_SLUGS" && "${1:-}" != "--force" ]]; then
  echo "No post dated $TODAY — nothing to publish."
  exit 0
fi
echo "Publishing: ${DUE_SLUGS:-(forced run, no new posts)}"

node scripts/generate-seo-files.mjs || { echo "SEO file generation FAILED"; exit 1; }
npm run build || { echo "Build FAILED"; osascript -e 'display notification "Blog auto-publish BUILD FAILED — check ~/Library/Logs/scoutcast-blog" with title "Scoutcast blog"'; exit 1; }
firebase deploy --only hosting --project scoutcast-8d5fa --non-interactive || {
  echo "Deploy FAILED"
  osascript -e 'display notification "Blog auto-publish DEPLOY FAILED — check ~/Library/Logs/scoutcast-blog" with title "Scoutcast blog"'
  exit 1
}

URLS=""
for slug in ${(z)DUE_SLUGS}; do
  URLS="$URLS https://scoutcast.ai/blog/$slug/"
done

if [[ -n "$URLS" ]]; then
  node scripts/indexnow-ping.mjs ${(z)URLS} || echo "IndexNow ping failed (non-fatal)"
  node scripts/gsc-submit.mjs ${(z)URLS} || echo "GSC submit failed or no credentials (non-fatal)"
  node scripts/bing-submit.mjs ${(z)URLS} 2>/dev/null || true
fi

osascript -e "display notification \"Live:${URLS:- (no new URLs)} — now Request Indexing in GSC.\" with title \"Scoutcast blog published\""
echo "Done. Live URLs:$URLS"
