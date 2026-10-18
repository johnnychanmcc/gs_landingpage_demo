# Global Sources Hong Kong Shows — buyer landing

A buyer landing page that follows [globalsources.com](https://www.globalsources.com/) visual patterns: red CTAs, tight sans type, white/gray bands, and a short path to register.

1. **Why visit** — five titles plus show scale (products, exhibitors, booths, countries)
2. **Phases** — April Phase 1 and Phase 2 product categories
3. **Register** — form that hands off to the official buyer form at [globalsources.com/tradeShows/HK/register](https://www.globalsources.com/tradeShows/HK/register)

A floating **Register now** bar stays on screen until the form is in view.

## Run locally

Node.js 20 or newer.

```bash
npm install
npm run dev -- --port 43147
```

Open [http://localhost:43147](http://localhost:43147).

## Form behaviour

- Required: name, work email, company, country, business type, at least one show phase
- The page does **not** store buyer data
- Submit opens the official Global Sources registration page
