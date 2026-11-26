# Benny Musonda Portfolio

Personal portfolio for Benny Musonda, a Zambia-based full-stack developer.

## Live demo

[Click Here To View the Live Site](https://bennymusonda.vercel.app/)

## Project structure
```text
.
├── frontend/          # Portfolio website
│   ├── index.html
│   ├── css/            # Stylesheets
│   ├── js/             # Browser-side JavaScript
│   ├── imgs/           # Images used by the website
│   └── robots.txt
├── backend/           # Planned API and database server
└── README.md
```
## Technologies

### Frontend

- **HTML** defines the portfolio content and page structure.
- **CSS** controls presentation, responsive layouts, and visual styling.
- **JavaScript** powers browser interactions such as navigation, project filters, dialogs, and enquiry form submission.

The frontend is currently a static site and has no build step. Open `frontend/index.html` in a browser to view it.

### Backend (planned)

- **Node.js** will run the server-side JavaScript application.
- **Express** will provide the HTTP server and API routes.
- **MySQL** will store structured application data.

The backend has not been implemented yet. See [`backend/README.md`](backend/README.md) for its planned role.

## Contact forms

The frontend enquiry forms currently submit to Formspree. Their endpoint is set in `frontend/index.html`, and submission feedback is handled in `frontend/js/main.js`. The planned backend does not handle form submissions yet.

## Deployment

The frontend can be hosted as a static website. Because the site files are inside `frontend/`, configure the hosting workflow to publish that directory. The backend will require a Node.js-compatible host and a MySQL database once implemented.
