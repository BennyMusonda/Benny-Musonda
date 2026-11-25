# Benny Musonda Portfolio

A responsive personal portfolio for Benny Musonda, a Zambia-based full-stack developer. The site presents selected projects, hackathon work, certifications, and contact options in a single-page layout.

## Live Demo

Check out the [Live Demo](https://bennymusonda.github.io/Benny-Musonda/).

## Contents

- [Features](#features)
- [Technology](#technology)
- [Run locally](#run-locally)
- [Project structure](#project-structure)
- [Contact forms](#contact-forms)
- [Deployment](#deployment)

## Features

- Responsive, mobile-first portfolio layout
- About, projects, hackathons, certifications, and contact sections
- Category filters for selected projects
- Scroll-aware navigation, reading progress, and reveal effects
- Accessible navigation controls, skip link, and enquiry dialogs
- Contact and project enquiry forms submitted through Formspree
- SEO and social sharing metadata

## Technology

This is a static website built with HTML, CSS, and vanilla JavaScript. It has no package manager, build step, or framework requirement. Inter and Font Awesome are loaded from external CDNs; one project image is loaded from Unsplash, so those resources require an internet connection.

## Run locally

Open index.html in a web browser. The site is built with HTML, CSS, and JavaScript and does not require a build step.

## Project structure

.
├── index.html   # Portfolio page
├── assets/      # Images and other media
├── css/         # Stylesheets
└── js/          # JavaScript


## Contact forms

Both enquiry forms post to the Formspree endpoint configured in `index.html` (`https://formspree.io/f/mrblenzj`). The JavaScript in `js/main.js` submits the forms asynchronously and displays success or error feedback. To use a different Formspree form, update the `action` on both forms and verify the endpoint in the Formspree dashboard. The email links can also be updated in `index.html`.

## Deployment

Deploy the project root to any static web host, such as GitHub Pages or another service that serves static files. Keep the `assets`, `css`, and `js` folders alongside `index.html` so the relative stylesheet, script, and image paths continue to resolve. No compilation or server-side runtime is needed.

