# Census — Sacrum Florilegium

Census is the statistics and analytics layer for Sacrum Florilegium.
It runs as a mobile-first Cloudflare Worker.

## Source of data

Census does **not** call Airtable on page views. Its `/api/stats` route reads
the shared, precomputed JSON snapshot in the existing Cloudflare R2 bucket:

- R2 bucket: `sacrum-assets`
- R2 key: `system/librarium/catalog-snapshot-v1.json`
- Source of truth: Airtable Librarium base
- Snapshot producer: Florilegium-Librarium's daily (06:00 UTC) import or its
  authorized **Import & refresh** button

The R2 bucket is bound to Census as `LIBRARY_BUCKET`. There are **no Airtable
credentials required for Census**.

## Available statistics

The precomputed snapshot preserves the existing dashboard output: totals for
books, authors, subjects, and languages; published and draft counts; classifications,
top subjects and authors; recent books; and metadata completeness checks.
The snapshot stores these statistics instead of the full unpublished book records.

If the snapshot has never been created, `/api/stats` responds with HTTP 503 and
a clear message. This is expected while Airtable's monthly API quota is exhausted
and the initial snapshot cannot be generated. The Librarium daily sync (or
authorized manual refresh) will initialize it once API access becomes available.

## Deployment

```sh
npm install
npm run deploy
```

Cloudflare Worker: `florilegium-census`.
