# Benny.dev Brand Identity

## Identity overview

Benny.dev is a personal software development brand based in Zambia. The visual system pairs a concise geometric mark and lowercase wordmark with clean typography, generous spacing, and restrained green and blue accents. It is designed to feel practical, confident, approachable, and contemporary.

## Logo meaning and symbolism

The logomark is a compact, monochrome arrangement of three diagonal forms and a separate small diamond. The diamond represents the first idea or starting point. The longer rising forms suggest forward movement, steady progress, and the process of shaping an idea into something useful. Their alignment also hints at structure and collaboration.

The mark is intentionally abstract: it does not rely on a literal coding symbol or a circle, so it can represent a broad range of digital work. Its single ink color keeps the silhouette clear at small sizes and across different backgrounds.

The wordmark is lowercase `benny.dev`. The period connects the personal name to the developer identity and keeps the domain-like name easy to recognize.

### Logo files

- `Logos/benny-dev-mark.svg` — standalone logomark used as the site icon and beside the name.
- `Logos/benny-dev-wordmark.svg` — horizontal mark and wordmark lockup.

### Clear space and use

- Keep clear space around the mark at least equal to the height of the small diamond.
- Use the mark in its supplied single ink color; do not add a circle, gradients, shadows, or extra colors.
- Keep the SVG aspect ratio intact. Avoid stretching, rotating, or separating the pieces.
- Use the wordmark lockup when the full name is needed; use the standalone mark for small icon placements.
- On dark backgrounds, place the supplied dark mark on a light field or prepare a deliberate one-color reversed version. Do not add a second accent color to the mark.

## Color palette

| Token | Hex | Role |
| --- | --- | --- |
| Ink | `#142433` | Main text, logo, high-contrast surfaces |
| Paper | `#F7F9F8` | Main page background |
| White | `#FFFFFF` | Cards and open space |
| Green | `#4D963F` | Primary action and growth accent |
| Soft green | `#EAF3E8` | Gentle accent backgrounds |
| Blue | `#347FC1` | Secondary highlight and link accent |
| Deep blue | `#1D4F77` | Strong blue text and surfaces |
| Soft blue | `#EAF2F9` | Quiet supporting background |
| Yellow | `#F3C843` | Small illustrative accent |
| Muted | `#617181` | Secondary copy |
| Line | `#DFE7EB` | Dividers and subtle borders |

Green is the main interface accent. Blue supports headings, links, and emphasis. Yellow is reserved for small visual details. Keep large areas neutral to preserve readability.

The matching CSS custom properties are in `color-palette.css`. The active site stylesheet keeps its own live values; update both when changing the palette.

## Typography

- **Primary family:** Inter, loaded from Google Fonts in the site head.
- **Fallback stack:** system sans-serif (`-apple-system`, BlinkMacSystemFont, SF Pro Display, SF Pro Text, then Inter and sans-serif).
- **Weights used:** 400 for body copy, 500–600 for supporting labels and controls, 700–800 for headings and brand emphasis.
- **Character:** modern, neutral, and highly legible. Large headings use tight tracking; paragraphs use comfortable line spacing.

Inter is a linked web font, not bundled font files. If offline font delivery is needed, add licensed font files and update the `@font-face` declarations.

## Visual assets

### Illustrations

The PNG illustrations retain transparent backgrounds for flexible placement on light or colored sections.

- `Illustrations/portfolio-character.png` — current hero character.
- `Illustrations/about-character-curious.png` — current About section illustration.
- `Illustrations/portfolio-character-standing.png` — alternate standing pose.
- `Illustrations/intro-character.png` — alternate character artwork.
- `Illustrations/yellow-beanbag.png` — isolated yellow beanbag variation.

### Personal photography

- `Photography/about-portrait.jpg`
- `Photography/about-workstation.png`
- `Photography/about-workspace.jpg`

These assets support Benny's personal brand story. Project screenshots, hackathon photos, and certificates remain with the portfolio content in `img/`.
