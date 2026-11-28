# taiki.

A dependency-free static portfolio using HTML, CSS, and a small script for pointer-driven tile motion.

## Design

Visual inspiration: https://www.not-here.jp/ — a white canvas, thin blue grid lines, generous opening whitespace, and a mosaic of large and small tiles. The gallery uses this layout with the portfolio's own project assets.

## Preview locally

Open `index.html` in a browser, or run `python3 -m http.server 8000` in the repository and open http://localhost:8000/.

## GitHub Pages

The site is live at https://o-kagami.github.io/taiki.github.io/. In Settings → Pages, the source is **Deploy from a branch** with `main` and `/ (root)`. Publishing a commit to `main` on GitHub automatically triggers the **pages build and deployment** workflow. No custom workflow or build step is needed.

After publishing an update, verify that the deployment for that commit succeeded and that the live site serves the changes.

## Editing

- `index.html` holds the gallery. Keep each project's tiles in a `.project-tiles` group: lead screenshot first, then the other screenshot and the icon. Link each face directly to the official store, public demo, or repository. Use a non-interactive face with a `coming soon` label for unreleased apps.
- `assets/` holds the app screenshots and icons. The Color Editorial and Dobutsu Shogi screenshots come from their public websites. The Dobutsu Shogi lion mark was drawn for the portfolio.
- `about.html` holds the profile, career timeline, and numbered Q&A. Keep the timeline in chronological order and use `<time>` only for known dates.
- `styles.css` holds the shared layout, typography, and transitions. `tile-motion.js` uses the fixed `.tile-media` slot to tilt its image without moving the caption. The gallery links work without JavaScript, and the animations respect reduced-motion preferences.
- Use document-relative paths for links and assets so the site also works from a GitHub Pages repository subdirectory.
