# SoniTechno — React Redesign

Modern React rebuild of [sonitechno.com](https://sonitechno.com) — same content, new design.

## Stack
- Vite + React 18
- React Router v6
- Tailwind CSS 3

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in /dist
npm run preview  # preview the build
```


## Design system

Colours are taken straight from the SoniTechno logo (sampled from `logo-1.png`):

| Token | Value | Use |
| --- | --- | --- |
| `brand-500` | `#e62e2e` | the logo red — primary actions, accents, hover |
| `ink-950` | `#0a0a0c` | the logo black — dark sections, headings |
| `sand-50` | `#faf9f7` | warm off-white for alternating sections |

Type: **Plus Jakarta Sans** (UI + headings, tight tracking) with **Instrument Serif italic**
as the editorial accent — used for the rotating hero word, section numbers and pull quotes.

Motifs used throughout: film-grain overlay on dark sections (`.grain`), a faint blueprint
grid (`.grid-lines`), hairline dividers instead of heavy cards, numbered editorial lists,
and a red glow behind dark blocks.

Reusable classes live in `src/index.css`: `.btn-primary` `.btn-dark` `.btn-ghost` `.btn-light`,
`.card` `.card-dark`, `.label`, `.h1` `.h2` `.h3` `.lead` `.accent-serif`, `.link-underline`.

## Structure

```
src/
  data/
    site.js         nav menu, contact details, footer links
    itSolutions.js  9 IT Solutions page contents
    software.js     11 Software page contents
    apis.js         5 API Solution page contents
    index.js        combines all pages + route helpers
  components/
    Navbar.jsx  Footer.jsx  Layout.jsx  Logo.jsx
    PageHero.jsx  CTA.jsx  Icons.jsx  ScrollToTop.jsx
  pages/
    Home.jsx  About.jsx  Contact.jsx  Blog.jsx
    Privacy.jsx  ServicePage.jsx  NotFound.jsx
```

## Editing content

All 25 service/product/API pages are data-driven. To change wording, edit the
matching entry in `src/data/itSolutions.js`, `software.js` or `apis.js` — the
layout picks it up automatically. To add a new page, add an entry with a slug
and it appears in the catalogue and sidebar; add it to `nav` in `site.js` to
show it in the menu.

## Routes

| Old (.aspx) | New |
| --- | --- |
| `/` | `/` |
| `about.aspx` | `/about` |
| `contact.aspx` | `/contact` |
| `blog-grid.aspx` | `/blog` |
| `privacy.aspx` | `/privacy` |
| `android.aspx` | `/it-solutions/android-app-development` |
| `mobile-recharge-software.aspx` | `/software/mobile-recharge-software` |
| `recharge-api.aspx` | `/api/recharge-api` |

…and so on for all 25 solution pages.

## Notes
- The contact and newsletter forms are front-end only — wire them to your
  backend or an email service.
- Fonts (Inter + Sora) load from Google Fonts in `index.html`.
