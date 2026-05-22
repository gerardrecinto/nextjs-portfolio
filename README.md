# Portfolio — Gerard Recinto

![Next.js 15](https://img.shields.io/badge/Next.js-15-000000?logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.x-06B6D4?logo=tailwindcss&logoColor=white)
![Deployed](https://img.shields.io/badge/Deployed-AWS%20S3%20%2B%20CloudFront-FF9900?logo=amazonaws&logoColor=white)

![Demo](docs/assets/demo.gif)

Personal portfolio site for a Senior DevOps / Platform Engineer with 8 years of experience. Built with Next.js 15 App Router, TypeScript, and Tailwind CSS. Deployed to AWS S3 + CloudFront for global edge delivery.

## Tech stack

| Layer | Choice |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Components | Hero UI |
| Runtime | Node.js 20 |
| Hosting | AWS S3 + CloudFront (CDN) |

## Structure

```
app/
├── layout.tsx       root layout with font config and theme provider
├── page.tsx         landing page — renders Hero section
└── provider.tsx     client-side theme context (dark/light)

components/
├── Hero.tsx         above-the-fold section with intro and links
└── ui/              shared UI primitives
```

## Running locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Building for production

```bash
npm run build
npm start
```

## Deployment

Static export via `next export`, pushed to an S3 bucket with public website hosting enabled, served through a CloudFront distribution with a custom domain and HTTPS.
