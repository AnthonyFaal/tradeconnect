# TradeConnect — two-page fintech concept site

A responsive, mobile-first concept website for a fictional Ghanaian WhatsApp-based trader record-keeping service. It is designed to demonstrate the exact front-end skills requested in the TradeBase developer brief.

## Pages
- `index.html` — marketing homepage with benefits, process steps and calls to action.
- `contact.html` — contact page with a Netlify Forms-ready form.

## Stack
- Semantic HTML5
- Plain CSS (no framework)
- Vanilla JavaScript
- Local SVG artwork; no external font, icon or JavaScript dependencies

## Run locally
Because this is a static site, you can open `index.html` directly, or serve the folder with any static server. For example:

```bash
npx serve .
```

## Deploy to Netlify
1. Push this folder to its own GitHub repository.
2. In Netlify, choose **Add new site → Import an existing project** and connect the repository.
3. Set the publish directory to `.` (no build command is needed).
4. Deploy. Netlify detects the `tradeconnect-contact` form from the HTML form attributes.
5. Submit a test enquiry on the deployed contact page and confirm it appears under **Forms** in the Netlify dashboard.

## Before using as a real business site
- Replace the fictional brand, copy and sample contact details.
- Change `233200000000` in the WhatsApp links to the correct international-format number (digits only).
- Replace `hello@tradeconnect.example` with a monitored email address.
- Add the correct privacy notice and consent language for the actual business and its data practices.
- Test the deployed contact form and all links.

## Performance and accessibility notes
The site uses local SVG artwork, system fonts, no third-party JavaScript, responsive layouts, a skip link, labelled form fields, visible focus styles and reduced-motion support. These choices are intended to support a strong Lighthouse score; they do not guarantee a particular PageSpeed score. Measure the deployed URL with Google PageSpeed Insights and record the actual mobile result before putting a score in a portfolio or job application.

## Portfolio disclosure
This is a fictional demonstration project, not an operating financial service and not affiliated with TradeBase.
