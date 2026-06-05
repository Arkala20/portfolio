# Arkala Sai Vikas — Data Portfolio

A free, static portfolio site (HTML / CSS / JavaScript) for Data Analyst,
Data Engineer, BI, and Reporting roles. Multi-section "resume portfolio"
layout — hero with photo + stat counters, About, Résumé timeline, What-I-do,
Skills with bars, Projects, and a dark Contact section with a form. Hosted free
on GitHub Pages, no build step, no dependencies.

**Live site (after deploy):** `https://Arkala20.github.io/portfolio/`

---

## Folder structure

```
portfolio/
├── index.html              # All page sections
├── style.css               # Styling (warm, professional, responsive)
├── script.js               # Projects, skills, counters, contact form, nav
├── README.md               # This file
├── assets/
│   ├── profile.png         # Your headshot (already added)
│   └── resume.pdf          # ← add your real resume here
└── project-readmes/        # Polished README templates for your repos
    ├── customer-behavior-README.md
    ├── real-time-pipeline-README.md
    ├── telecom-churn-README.md
    └── garagepulse-README.md
```

---

## Before you deploy — quick fill-in

| Where | Placeholder | Replace with |
|-------|-------------|--------------|
| `index.html` (3 spots: hero, contact, footer) | `your-linkedin` | your real LinkedIn URL |
| `assets/` | `resume.pdf` | your real one-page resume PDF |
| `index.html` résumé section | `20XX — 20XX` dates | your real employment / degree dates |

Already wired for you:
- **GitHub** → `https://github.com/Arkala20`
- **Email** → `arkalasaivikas20@gmail.com` (change in `index.html` + `script.js` if needed)
- **Photo** → `assets/profile.png`

### Editing content in `script.js`
- `PROJECTS` — your projects (only `live: true` ones show).
- `SKILLS` — the skill bars. **The percentages are your own self-assessment** —
  set them to whatever feels accurate.
- `CONTACT_EMAIL` — where the contact form sends.

---

## How the contact form works

It has **no backend**. When someone clicks *Send message*, it opens *their*
email app with a message pre-addressed to you. That's 100% free and needs no
account.

Want messages to land in an inbox automatically instead? Create a free
[Formspree](https://formspree.io) form and change the `<form>` tag in
`index.html` to:
```html
<form class="contact__form" id="contactForm" action="https://formspree.io/f/YOUR_ID" method="POST">
```
(and remove the `e.preventDefault()` mailto handler in `script.js`).

---

## Deploy to GitHub Pages (free)

1. Create a public repo named **`portfolio`**.
2. Upload the **contents** of this folder to the repo root (so `index.html` is
   at the top level — not inside a nested folder). Or push with git:
   ```bash
   git init && git add . && git commit -m "Portfolio"
   git branch -M main
   git remote add origin https://github.com/Arkala20/portfolio.git
   git push -u origin main
   ```
3. **Settings → Pages → Source:** Deploy from a branch → **`main`** / **`/ (root)`** → Save.
4. Live in ~1 min at **`https://Arkala20.github.io/portfolio/`**.

Cleaner URL option: name the repo exactly **`Arkala20.github.io`** → serves at
`https://Arkala20.github.io/`.

Test locally first: `python3 -m http.server 8000` → open `http://localhost:8000`.

> This is a static site, so it also deploys for free on Vercel or Netlify if you
> prefer — but GitHub Pages keeps everything in one place with your code.

---

## Notes on the design choices

- **No testimonials section.** The reference template has one, but inventing
  quotes would mislead recruiters. When you collect real LinkedIn
  recommendations, we can add a genuine testimonials block.
- **The headshot** is used as-is. If you want the "cut-out" look from the
  reference (person floating on a colored shape), run it through a free
  background remover (e.g. remove.bg) and replace `assets/profile.png`.

## Recommended GitHub housekeeping

1. Delete the empty `cyberBullying_ddetection` repo.
2. Remove the committed `.env` from `garagepulse_service`, add it to
   `.gitignore`, and rotate any password it contained.
3. Rename the two `-main` repos for a cleaner look (then update the `repo`
   fields in `script.js`).
4. Reconcile the `Arkala20` vs `arkalasaivikas20` username split in the
   customer-behavior README so your identity is consistent.
