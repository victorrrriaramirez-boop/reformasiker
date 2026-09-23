# Premium Product Showcase

Clean-room Next.js landing page inspired by the visual language of premium technology product pages: large typography, generous spacing, sticky scroll storytelling and modular feature cards.

This project does **not** copy Apple source code, proprietary assets, product photography, logos or exact marketing copy.

## Run locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Deploy to GitHub

```bash
git init
git add .
git commit -m "Initial premium product landing"
git branch -M main
git remote add origin https://github.com/YOUR-USER/YOUR-REPO.git
git push -u origin main
```

## Deploy to Vercel

1. Push the repository to GitHub.
2. Open Vercel and click **Add New > Project**.
3. Import the GitHub repository.
4. Framework preset: **Next.js**.
5. Click **Deploy**.

No environment variables are required.

## Main files

- `app/page.tsx` — page structure and content
- `app/globals.css` — complete visual system and responsive styling
- `components/ScrollFeature.tsx` — sticky scroll animation with Framer Motion
- `components/PhoneMockup.tsx` — original CSS-based device mockup
- `components/NavBar.tsx` — floating navigation

## Adapt it

Replace:
- `Nova X Pro` with your product or brand.
- Burgundy gradients in `app/globals.css` with your palette.
- The CSS phone mockup with real project images using `next/image`.
- Placeholder specifications with real product data.

For production, update `metadataBase` in `app/layout.tsx` to the final domain.
