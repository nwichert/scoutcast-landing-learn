# Credentials setup (one-time)

The publish-and-index pipeline works immediately without any of this — deploy + IndexNow
+ sitemap/llms.txt regeneration all run with zero credentials, and the Google/Bing
scripts fall back to printing manual steps. Set these up only to upgrade the Google and
Bing steps from "manual prompt" to "fully automated."

Store secrets in a gitignored env file (e.g. `.env.local`, already ignored by Next) or
your shell profile. Never commit the service-account JSON or the Bing key. The IndexNow
key file in `public/` is the one credential that is *supposed* to be public.

---

## Google Search Console (sitemap submit + index status)

What you get: programmatic `sitemaps.submit` and read-only URL index-status checks.
What you still can't do: "Request Indexing" per URL — Google has no API for that on
articles, so that stays a manual button in the GSC UI.

1. **Google Cloud project + API**
   - Go to console.cloud.google.com → create or pick a project.
   - APIs & Services → Library → enable **Google Search Console API**.
2. **Service account + key**
   - APIs & Services → Credentials → Create credentials → **Service account**.
   - Once created, open it → Keys → Add key → **JSON**. A `.json` file downloads. This is
     a secret.
3. **Grant it access to the property**
   - In Search Console (search.google.com/search-console) open the `scoutcast.ai`
     property → Settings → Users and permissions → Add user.
   - Add the service account's email (looks like
     `name@project-id.iam.gserviceaccount.com`) as an **Owner** (full).
4. **Wire it up** — set both:
   ```bash
   export GOOGLE_APPLICATION_CREDENTIALS="/absolute/path/to/service-account.json"
   export GSC_SITE_URL="sc-domain:scoutcast.ai"   # domain property
   # or, if it's a URL-prefix property:  export GSC_SITE_URL="https://scoutcast.ai/"
   ```
   (Alternatively put the JSON contents inline in `GSC_SERVICE_ACCOUNT_JSON`.)

Verify which property type you have in GSC — `sc-domain:` for a domain property,
`https://scoutcast.ai/` for a URL-prefix property. The wrong one returns 403.

---

## Bing Webmaster (optional — IndexNow already covers Bing)

IndexNow already notifies Bing instantly, so this is only worth it if you want
submissions tracked in the Bing Webmaster dashboard or want to watch your quota.

1. Verify `scoutcast.ai` in Bing Webmaster Tools (bing.com/webmasters). The fastest path
   is "Import from Google Search Console."
2. Settings → **API access** → generate an API key.
3. Wire it up:
   ```bash
   export BING_WEBMASTER_API_KEY="<your-key>"
   export BING_SITE_URL="https://scoutcast.ai"   # optional; this is the default
   ```

---

## IndexNow (no account, public key)

Nothing to set up by hand. On the first run, `scripts/indexnow-ping.mjs` generates
`public/<key>.txt` (a random 32-char key whose file body is the key). Commit it, deploy
so it's reachable at `https://scoutcast.ai/<key>.txt`, then pings work from then on. It's
public by design — that's how IndexNow verifies you own the domain.
