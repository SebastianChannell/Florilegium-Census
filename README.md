# Census

**Census** is the statistics and analytics layer for Sacrum Florilegium.

Version 1 implements the **Librarium** module. The application is a mobile-first Cloudflare Worker that reads the existing Airtable Librarium base server-side and renders live collection statistics without exposing the Airtable token to the browser.

## Current Librarium dashboard

- Total books
- Total authors
- Total subjects
- Total languages
- Books by classification
- Top 5 subjects
- Language distribution
- Top 5 authors
- Recently added books
- Metadata health: searchable text, OCR, cover, author, classification, subjects, edition year, publisher
- Published and draft record counts

## Architecture

`Airtable Librarium → Cloudflare Worker → census.sacrumflorilegium.com`

The Worker uses the existing Airtable base and Books table IDs configured in `wrangler.jsonc`.

## Required secret

Set the Airtable personal access token as a Cloudflare Worker secret named:

```sh
npx wrangler secret put AIRTABLE_TOKEN
```

The token should have read access to the Librarium base. Do not put the token in source control.

## Development

```sh
npm install
npm run dev
```

## Deploy

```sh
npm run deploy
```

After deployment, attach the custom domain `census.sacrumflorilegium.com` to the `florilegium-census` Worker in Cloudflare.

## Future modules

Census is intentionally structured as an umbrella dashboard. Orarium, Officium, Biblia, and Propria can be added later without changing Librarium's Airtable source of truth.
