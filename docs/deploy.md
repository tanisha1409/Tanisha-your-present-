# Deploying to Vercel (GitHub flow)

1) Push your changes
- In v0, press "Push Changes" to push to `main`.

2) Import the repo into Vercel
- Open: https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Ftanisha1409%2FTanisha-your-present-
- Select your account and project name.

3) Build settings (auto)
- Framework: Next.js (auto-detected)
- Install/Build/Output: automatic
- Env vars: none required
- Click "Deploy"

4) After deploy
- Open your live URL: `/` should go to `/main`
- If audio doesn’t auto-play, tap once on the page (browser policy)

5) Optional
- Project → Settings → Domains → Add a custom domain
- Project → Settings → Git → Production Branch = `main`
