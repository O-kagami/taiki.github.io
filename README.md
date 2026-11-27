# taiki.

A personal portfolio, built as a dependency-free static site (HTML and CSS).

## Design

Visual inspiration: https://www.not-here.jp/ — a white canvas, thin blue grid lines, generous opening whitespace, and a mosaic of large and small tiles. The gallery uses this layout with the portfolio's own project assets.

## Preview locally

Open `index.html` in a browser, or run `python3 -m http.server 8000` in the repository and open http://localhost:8000/.

## GitHub Pages

The site is live at https://o-kagami.github.io/taiki.github.io/. In Settings → Pages, the source is **Deploy from a branch** with `main` and `/ (root)`. Publishing a commit to `main` on GitHub automatically triggers the **pages build and deployment** workflow. No custom workflow or build step is needed.

After publishing an update, verify that the deployment for that commit succeeded and that the live site serves the changes.

## Editing

- `index.html` holds the gallery, project notes, and experiments. Each tile shows one screenshot, app icon, or portfolio wordmark. Project tiles jump to the corresponding project note rather than opening an image viewer.
- `assets/` holds the app screenshots and icons from the Microsoft Store, App Store, and Trace Log's sample and simulator screens. The HOKUDAI GUIDE images were captured from its public GitHub source, and the おでかけノート images from its public demo. The two web projects use typographic wordmarks in the gallery.
- Use a `.project-action` link to the official store, public demo, or repository. While an app is not public, show `coming soon` as a non-interactive `.project-status` instead of a support or store link.
- `about.html` holds the profile and career timeline. Use `datetime="YYYY-MM"` for dated entries and keep the newest entries first.
- `styles.css` holds the shared layout and typography. Use document-relative paths for links and assets so the site also works from a GitHub Pages repository subdirectory.
