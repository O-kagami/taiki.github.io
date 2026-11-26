# taiki.

A personal portfolio, built as a dependency-free static site (HTML, CSS and JavaScript).

## Design

Visual inspiration: https://www.not-here.jp/ — a white canvas, thin blue grid lines, generous opening whitespace, and a responsive mosaic of project visuals. The implementation and illustrations are original; no third-party artwork, source code, or proprietary fonts are included. The app illustrations are concepts, not verified screenshots or official logos.

## Preview locally

Open `index.html` in a browser, or run `python -m http.server 8000` in the repository and open http://localhost:8000/.

## GitHub Pages

In Settings → Pages, select **Deploy from a branch**, then `main` and `/ (root)`. Save. No build step is necessary. The project-site URL is expected to be https://o-kagami.github.io/taiki.github.io/ once published. For a user-site URL at https://o-kagami.github.io/, the repository must instead be named `O-kagami.github.io`.

## Editing

`index.html` contains the responsive layout, inline SVG concept illustrations, project notes, and accessible project dialogs. Replace the concept illustrations with actual project assets as they become available. All asset references are local or inline; the site works from a repository subdirectory.
