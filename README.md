# Brun — Portfolio

A React + Vite personal portfolio with client-side routing (React Router), inspired by the
layout of kobina.me, built around Brun's own background as a DevOps / Cloud Engineer.

## Getting started

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

The production build is written to `dist/` — deploy that folder to any static host
(Netlify, Vercel, GitHub Pages, S3, etc.).

## Structure

```
src/
  theme.js         theme tokens, nav items, work/skills data
  App.jsx          theme provider, layout, routes
  main.jsx         React Router + app mount
  components/
    Header.jsx     sticky nav with NavLink active-state highlighting
    Footer.jsx     contact + social links
    Bits.jsx       small shared pieces (SkillPill, IconLink, SectionShell)
  pages/
    Home.jsx       hero section
    About.jsx      bio + stats
    Work.jsx       project list
    Community.jsx  UMB + teaching cards
    Contact.jsx    contact details
public/
  brun.jpg         avatar photo used in the header
```

## Before you publish

- Replace the placeholder phone, email, and social links in `Footer.jsx` and `Contact.jsx`.
- Wire the "Download résumé" button in `Header.jsx` to a real PDF.
- Swap `public/brun.jpg` for a higher-resolution photo if you have one.
