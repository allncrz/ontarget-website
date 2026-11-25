# On-Target IT Solutions — Multi-page static website

Each page has its own folder and `index.html`. Shared design and scripts live in `css/` and `js/`; all imagery is in `assets/`.

- `/index.html` — Home overview
- `/services/index.html` — Services
- `/products/index.html` — Full product brand gallery
- `/projects/index.html` — Projects and image viewer
- `/contact/index.html` — Contact information
- `/request-quote/index.html` — Quotation form

Deploy the **entire folder** as a static site (Cloudflare Pages or GitHub Pages). Keep directory structure intact. No build command required.

The quote form is static: it prepares/copies the inquiry; it does not send an email or save data without a backend. Some client logos are externally hosted and may fail to load; fallback text is provided.


Hero enhancement: The home hero fills almost the entire first viewport (minus the navigation), with a sequential post-spinner reveal of image, heading, supporting copy, buttons, and highlights. Reduced-motion preferences are respected.
