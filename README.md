# Sajmal Yousef — Portfolio

Personal portfolio site. Product Manager building and scaling checkout for SMBs, from 0 to 1 and beyond.

Built with **Next.js 16**, **TypeScript**, **Tailwind CSS v4**, and **motion**.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build

```bash
npm run build
npm start
```

## Structure

- `app/` — routes: home (`/`), about (`/about`), case studies (`/work/[slug]`)
- `components/` — Nav, Footer, Hero, CaseStudyView, and helpers
- `lib/content.ts` — all copy and metrics live here
- `public/resume.pdf` — downloadable résumé

## Deploy

Zero-config on [Vercel](https://vercel.com): import this repo and deploy. No environment variables required.
