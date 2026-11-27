# taiki.

A personal portfolio, built as a dependency-free static site (HTML and CSS).

## Design

Visual inspiration: https://www.not-here.jp/ — a white canvas, thin blue grid lines, generous opening whitespace, and a responsive grid of project screenshots.

## Preview locally

Open `index.html` in a browser, or run `python3 -m http.server 8000` in the repository and open http://localhost:8000/.

## GitHub Pages

In Settings → Pages, select **Deploy from a branch**, then `main` and `/ (root)`. Save. No build step is necessary. The project-site URL is expected to be https://o-kagami.github.io/taiki.github.io/ once published. For a user-site URL at https://o-kagami.github.io/, the repository must instead be named `O-kagami.github.io`.

## Editing

- `index.html` holds the project grid and text notes for experiments and studies. The grid uses local copies of the Fluent Weather App Microsoft Store screenshot, the Audio Tracker App Store screenshot, and the Trace Log sample timeline screenshot.
- `about.html` holds the profile and career timeline. Use `datetime="YYYY-MM"` for dated entries and keep the newest entries first.
- `styles.css` holds the shared layout and typography. Use document-relative paths for links and assets so the site also works from a GitHub Pages repository subdirectory.
