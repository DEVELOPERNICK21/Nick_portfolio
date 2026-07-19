# Demo site deployment

The demo portfolio uses the **same codebase** as your personal site. Switch personas with one env var — no duplicate repo to maintain.

## Local preview

```bash
# Personal site (default)
yarn dev

# Demo site
yarn dev:demo
```

Open http://localhost:3000 — demo mode shows **Arjun Mehta** (placeholder), a sticky demo banner, and contact flows routed to your email.

## Vercel (recommended)

Deploy the repo **twice** as two Vercel projects:

| Project | URL | Env |
|---------|-----|-----|
| Personal | `nick-portfolio-nine.vercel.app` | *(no `NEXT_PUBLIC_SITE_MODE`)* |
| Demo | `modelportfolio-demo.vercel.app` | `NEXT_PUBLIC_SITE_MODE=demo` |

### Demo project env vars

```env
NEXT_PUBLIC_SITE_MODE=demo
NEXT_PUBLIC_SITE_URL=https://modelportfolio-demo.vercel.app
NEXT_PUBLIC_CONTACT_EMAIL=nikhilkubde21@gmail.com
NEXT_PUBLIC_WHATSAPP_NUMBER=91XXXXXXXXXX
NEXT_PUBLIC_WHATSAPP_MESSAGE=Hi! I saw the demo portfolio and want one for myself.
```

Optional: copy other vars from `.env.local.example` (stats, measurements, etc.) — demo uses the same placeholder images until you swap per-client.

## Shareable pricing link (demo only)

After deploy, send prospects:

| Link | Use |
|------|-----|
| `https://modelportfolio-demo.vercel.app/pricing` | Nice page with PDF viewer + CTAs |
| `https://modelportfolio-demo.vercel.app/downloads/model-portfolio-pricing.pdf` | Direct PDF file |

The pricing page and nav link only appear when `NEXT_PUBLIC_SITE_MODE=demo`. Your personal site redirects `/pricing` → home.

Update the PDF by replacing `public/downloads/model-portfolio-pricing.pdf`.

## What changes in demo mode

- Model name → **Arjun Mehta** (config in `src/config/site.ts`)
- Agency → **Elite Talent Agency** (generic)
- Instagram → placeholder / contact CTA
- Tech-savvy sections → hidden
- Testimonials → generic copy (no “Nikhil”)
- Sticky banner → “Demo portfolio — Get yours”
- Contact page → sales-focused (“Get Your Portfolio”)
- SEO → `noindex` so demo doesn’t compete with your live site

## Swapping demo photos later

Reuse your existing shots for now (alt text uses the demo name). For stock or relabeled assets, replace files under `public/main/` and `public/nikhil-kubde-extra-*.jpg`, or point `src/data/media.ts` at new paths.

## Customizing the demo persona

Edit `demoProfile` in `src/config/site.ts` — name, agency, bio paragraphs, brands list.
