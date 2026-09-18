# ArtisanAI — Handmade Marketplace Frontend

A working Next.js 14 (App Router) frontend for ArtisanAI, an Indian artisan marketplace.
Built with Tailwind CSS and Framer Motion, using mock data so it runs immediately with
no backend required.

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3000. Requires an internet connection on first run (npm install,
and next/font pulling Fraunces + Work Sans from Google Fonts).

## What's included

- **Home** — hero, why-choose, shop-by-craft, featured artisans, featured products, our story, AI teaser
- **Shop** (`/shop`) — search, category/price filters, sort, all client-side over mock data
- **Product details** (`/product/[id]`) — gallery, quantity, add to cart, artisan cross-link, related products
- **Artisan directory & profile** (`/artisans`, `/artisans/[id]`) — bio, craft process, their products
- **Stories** (`/stories`, `/stories/[id]`) — editorial long-form pages per artisan
- **About**, **Contact** (working client-side form validation, no email actually sent)
- **Cart** (`/cart`) — persisted to localStorage, quantity controls
- **Checkout** (`/checkout`) — 3-step flow (address → summary → payment), mock payment methods styled after Razorpay, no real payment processing
- **Login / Register** (`/login`) — UI only, no real auth
- **AI Discovery** (`/ai-discovery`) — a lightweight local heuristic (budget + category + keyword matching over the mock catalog) standing in for a real AI-recommendation call. Swap `matchProducts()` in `app/ai-discovery/AIDiscoveryClient.js` for a real API call when you wire up a backend.

## Wiring up a real backend

All product/artisan/story data lives in `lib/data.js`. Replace those exports with fetch
calls to your API (or a CMS) and the components above will keep working — they don't care
where the data comes from. The cart uses React Context + localStorage
(`context/CartContext.js`); swap in real auth/session-based cart storage when ready.
Checkout's "Pay" button currently just clears the cart and shows a confirmation screen —
wire it to Razorpay (or your processor of choice) in `app/checkout/page.js`.

## Stack

Next.js 14, React 18, Tailwind CSS, Framer Motion, lucide-react icons.
