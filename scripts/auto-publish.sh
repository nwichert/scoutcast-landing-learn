#!/bin/zsh
# Scheduled blog publish for scoutcast.ai.
#
# Runs daily via launchd (~/Library/LaunchAgents/ai.scoutcast.blog-autopublish.plist).
# lib/posts.ts date-gates future posts out of the build, so "publishing" a
# scheduled post is just: rebuild + redeploy on/after its date. This script:
#   1. regenerates sitemap.xml + llms.txt, then exits quietly unless that
#      sitemap contains URLs the live site isn't serving yet
#   2. builds the static export
#   3. deploys to Firebase Hosting, pings IndexNow + GSC sitemap submit
#   4. posts a macOS notification listing the URLs to manually
#      "Request Indexing" in Google Search Console (no API for that step)
#
#   scripts/auto-publish.sh          # normal scheduled behavior
#   scripts/auto-publish.sh --force  # rebuild + redeploy even with nothing new
set -uo pipefail

export PATH="/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin"
REPO="/Users/nickwichert/Documents/dev/scoutcast-landing-learn/scoutcast-landing-learn"
LOG_DIR="$HOME/Library/Logs/scoutcast-blog"
mkdir -p "$LOG_DIR"
LOG="$LOG_DIR/auto-publish-$(date +%F).log"
exec >>"$LOG" 2>&1

echo "=== auto-publish run $(date '+%F %T') ==="
cd "$REPO" || exit 1

# The sitemap has to exist before we can diff it, so regenerate first. It is
# derived wholly from lib/posts.ts, so doing this on a no-op day rewrites the
# same bytes.
node scripts/generate-seo-files.mjs || { echo "SEO file generation FAILED"; exit 1; }

# What this deploy would add, measured against what the live site actually
# serves. This used to be `posts.filter((p) => p.date === TODAY)`, which meant a
# single failed run dropped a post forever: on 2026-08-13 the build died on an
# offline Google Fonts fetch, and on 2026-08-14 the script said "nothing to
# publish" and left both draft-party posts at 404. Diffing against the live
# sitemap is date-independent, so a missed day heals itself on the next run.
NEW_URLS=$(node scripts/newly-live-urls.mjs | tr '\n' ' ')

if [[ -z "${NEW_URLS// /}" && "${1:-}" != "--force" ]]; then
  echo "Live site already serves every URL in the sitemap — nothing to publish."
  exit 0
fi
echo "Publishing:${NEW_URLS:- (forced run, no new URLs)}"
npm run build || { echo "Build FAILED"; osascript -e 'display notification "Blog auto-publish BUILD FAILED — check ~/Library/Logs/scoutcast-blog" with title "Scoutcast blog"'; exit 1; }
firebase deploy --only hosting --project scoutcast-8d5fa --account nick@scoutcast.ai --non-interactive || {
  echo "Deploy FAILED"
  osascript -e 'display notification "Blog auto-publish DEPLOY FAILED — check ~/Library/Logs/scoutcast-blog" with title "Scoutcast blog"'
  exit 1
}

# newly-live-urls.mjs already emits absolute URLs, and covers any new route —
# not just /blog/<slug>/ — so a new top-level page gets submitted too.
URLS="$NEW_URLS"

if [[ -n "${URLS// /}" ]]; then
  node scripts/indexnow-ping.mjs ${(z)URLS} || echo "IndexNow ping failed (non-fatal)"
  node scripts/gsc-submit.mjs ${(z)URLS} || echo "GSC submit failed or no credentials (non-fatal)"
  node scripts/bing-submit.mjs ${(z)URLS} 2>/dev/null || true
fi

osascript -e "display notification \"Live:${URLS:- (no new URLs)} — now Request Indexing in GSC.\" with title \"Scoutcast blog published\""
echo "Done. Live URLs: $URLS"
