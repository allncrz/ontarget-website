# On-Target IT Solutions — Static Website

Responsive corporate website based on the approved homepage mockup.

## Run locally
Open `index.html` in a browser, or use VS Code Live Server. No build tools or dependencies are required. Google Fonts loads from the internet.

## Deploy
Upload the contents of this folder to any static host (GitHub Pages, Cloudflare Pages, Netlify). For Cloudflare Pages with a Git repo: framework preset `None`, build command blank, output directory `/` (repository root).

## Pages / sections
Home, About, Services, Products, Projects, Clients, Quote and Contact. The navigation links to sections on the same page.

## Important before going live
- The quotation form currently copies inquiry details because the source profile does not supply a verified company email address. Set `contactEmail` in `script.js` to a confirmed business email to enable `mailto:` submission, or connect a backend/form service.
- Project visuals and office/hero imagery are crops of the approved mockup, not verified original project photographs. Replace with original licensed photos for production.
- The clients section contains names sourced from the provided company profile; obtain approval before adding or changing client logos.
- Brand names are text treatments, not official brand logo files.
- Update the phone number, address and business information if they have changed since the supplied company profile.

## Files
- `index.html` — content and page structure
- `styles.css` — responsive styles and animations
- `script.js` — loader, mobile menu, scroll effects, project lightbox, inquiry interaction
- `assets/` — supplied logo images and mockup-based visual assets

Updated: pronounced About Us entrance; full brand catalog from PDF page 2; redesigned client directory.


Client showcase revised with grouped corporate logo gallery and community/organization cards. Five brand logos cropped from the supplied company profile PDF.
