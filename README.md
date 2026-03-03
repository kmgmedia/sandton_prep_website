, bootstrapped using create-next-app
.
pnpm dev
in your browser to see it live.
, Vercel’s new font family.
— full guide to features and APIs.
— hands-on practice.
— explore, contribute, or drop feedback.

# Sandton Preparatory School Website

## Project Architecture & Stack

- **Framework:** Next.js (React, TypeScript)
- **Database:** Supabase (PostgreSQL, RLS enforced)
- **Email:** Resend (HTML templates, notifications, auto-responders)
- **Styling:** Tailwind CSS, custom fonts (Geist, Sandy Kids, Quicksand)
- **Hosting:** Vercel (HTTPS, CORS, edge functions)
- **Rate Limiting:** In-memory (5 req/15min/IP), scalable to Redis
- **Error Tracking:** Sentry (optional)

## Major Flows

### Contact & Booking Forms

- Client-side validation (lib/validation.ts)
- API routes: [app/api/contact/route.ts](app/api/contact/route.ts), [app/api/booking/route.ts](app/api/booking/route.ts)
- Rate limiting, input validation, DB insert, email notification, auto-responder
- DB tables: `contact_submissions`, `visit_bookings` (see [supabase/schema.sql](supabase/schema.sql))
- All inserts use UUIDs, timestamps, IP/user agent tracking, status fields

### Email

- Notifications and auto-responders use HTML templates ([lib/email.ts](lib/email.ts))
- Reply-to set to user email

### Security

- HTTPS (Vercel)
- CORS: Next.js same-origin
- RLS on all DB tables
- Secrets in `.env.local`, never in code

### Error Handling

- API routes return 429 (rate limit), 400 (validation), 500 (server error)

## Developer Workflow

- Start dev server: `pnpm dev`
- Install dependencies: `pnpm install`
- Environment setup: Copy `.env.example` to `.env.local` and fill in keys
- Test: Submit forms, check modals, email delivery, logs
- Deploy: Push to GitHub, deploy via Vercel, set env vars

## References

- [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md): Diagrams, flows, rationale
- [docs/SCALABILITY_ANALYSIS.md](docs/SCALABILITY_ANALYSIS.md): Scaling strategies
- [docs/PRODUCTION_SETUP.md](docs/PRODUCTION_SETUP.md): Setup & deployment
- [lib/validation.ts](lib/validation.ts): Input validation rules
- [app/api/contact/route.ts](app/api/contact/route.ts), [app/api/booking/route.ts](app/api/booking/route.ts): Backend logic
  ☁️ Deployment

The easiest way to deploy is with Vercel
, the team behind Next.js.

Check the deployment docs
for more details.
