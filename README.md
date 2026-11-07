# Game Developer Portfolio

A premium, dark, neon-styled portfolio for a game developer, built with React, Vite, Tailwind CSS, Framer Motion and Lucide icons. It is fully static and deploys free on GitHub Pages.

## 1. Personalise it

All content lives in **`src/data/siteData.js`**:

- `profile`: your name, email, GitHub, LinkedIn, X/Twitter. Empty links are hidden automatically.
- `projects`: NeonDistrict is included. Update its `status`, `features`, add a screenshot (`public/images/...` then `image: "./images/neondistrict.jpg"`) and an optional `link`.
- `services`, `skillGroups`, `process`: edit freely.

Only list work and features that are real. Without a screenshot, a generated neon-city illustration is shown.

Also update the `<title>` and meta tags in `index.html`.

## 2. Run locally

Requires Node.js 18+.

```bash
npm install
npm run dev      # http://localhost:5173
```

## 3. Build

```bash
npm run build    # outputs to dist/
npm run preview  # serve the production build locally
```

`vite.config.js` uses `base: "./"`, so assets load correctly under any repository name on GitHub Pages without further edits.

## 4. Deploy to GitHub Pages

1. Create a GitHub repository and push this project to the `main` branch.
2. In the repository go to **Settings → Pages**, and under **Build and deployment** set **Source** to **GitHub Actions**.
3. Every push to `main` runs `.github/workflows/deploy.yml`, which builds the site and publishes it.
4. Your site appears at `https://<your-username>.github.io/<repository-name>/`.

If you name the repository `<your-username>.github.io`, the site is served from the root URL.

## Project structure

```
src/
  main.jsx, App.jsx, index.css
  data/siteData.js        all editable content
  components/             Navbar, Hero, About, Services, Projects,
                          Skills, Process, Contact, Footer, Section
public/favicon.svg
.github/workflows/deploy.yml
```

## Notes

- The contact form has no backend: it opens the visitor's email app with the message pre-filled.
- Animations respect the visitor's reduced-motion setting.
