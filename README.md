# Etsy Market Research Intelligence (MVP Mock)

## What is included in Phase 1
- Next.js + TypeScript app structure with Tailwind-ready styling.
- API-first adapter architecture (`EtsyDataAdapter` + `MockEtsyDataAdapter`).
- Mock dataset for 10 target keywords and related listings/shops.
- Pure scoring functions for Demand, Competition Weakness, and Opportunity scoring.
- Dashboard page and Keyword Explorer page.
- API route for keyword report retrieval.

## Run locally
1. `npm install`
2. `npm run dev`
3. Open `http://localhost:3000`

## Guardrails implemented
- No scraping/crawling/proxy bypass logic.
- All competitor sales/revenue outputs are explicitly labeled as estimates.
- Data design separates mock raw data, snapshots, and calculated scoring outputs.

## Phase 2 remaining work
- Product/Listing Research Table screen with full filtering controls.
- Listing Inspector page.
- Shop Analyzer page.
- Opportunity Report page with richer charting.
- Saved Opportunities persistence (Supabase/Postgres tables + user scoping).
- Trend history charts and confidence model expansion.
