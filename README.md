# Shuhong Gu Cybersecurity Portfolio

A professional cybersecurity portfolio built with Next.js 15, TypeScript, and Tailwind CSS. The site is written for SOC Analyst, Cybersecurity Intern, Security Operations, IT Support, and Junior Security Analyst recruiting conversations.

## Features

- Next.js 15 App Router
- TypeScript
- Tailwind CSS
- Dark mode by default
- Responsive navigation with mobile menu
- Animated cybersecurity hero section
- Recruiter-focused About, Projects, Skills, Experience, Certifications, and Contact pages
- Project filtering
- SEO metadata and Open Graph metadata
- Resume download from `public/resume.pdf`
- Vercel configuration

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build

```bash
npm run build
npm run start
```

## Vercel Deployment

1. Push this project to GitHub.
2. Import the repository in Vercel.
3. Vercel will detect Next.js automatically.
4. Use the included `vercel.json` defaults:
   - Install: `npm install`
   - Build: `npm run build`
   - Dev: `npm run dev`
5. Deploy.

## GitHub Pages Alternative

This repository includes `.github/workflows/pages.yml`. After pushing to the `main` branch:

1. Open the GitHub repository settings.
2. Go to **Pages**.
3. Set **Build and deployment** to **GitHub Actions**.
4. Push to `main` or run the workflow manually.

The workflow automatically builds a static export and publishes the site.

To test the static export locally:

```bash
npm install
npm run build
```

When running inside GitHub Actions, `next.config.ts` automatically sets the correct `basePath` and `assetPrefix` for a project site such as `username.github.io/repo-name`.

## Content Notes

The copy is based on Shuhong Gu's resume and reframed for cybersecurity hiring audiences. It emphasizes security operations, SIEM monitoring, Active Directory lab work, endpoint support, and network troubleshooting while staying aligned with the resume facts.
