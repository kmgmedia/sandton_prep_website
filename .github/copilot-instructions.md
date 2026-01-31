# Copilot Instructions for Sandton Prep Website

## Big Picture Architecture

- **Stack:** Next.js (React), Supabase (PostgreSQL), Resend (email), Vercel (hosting), TypeScript, Tailwind CSS.
- **Major Flows:**
  - **Contact & Booking Forms:** Client-side validation → API route (`app/api/contact/route.ts` or `app/api/booking/route.ts`) → rate limiting → input validation → DB insert → email notification (Resend) → auto-responder.
  - **Database:** Tables `contact_submissions` and `visit_bookings` (see `supabase/schema.sql`). All inserts use UUIDs, timestamps, IP/user agent tracking, and status fields. Row Level Security (RLS) is enforced.
  - **Email:** All notifications and auto-responders use HTML templates in `lib/email.ts`. Reply-to is set to user email.
  - **Rate Limiting:** IP-based, 5 requests/15min, in-memory (see `lib/rate-limit.ts`). For scaling, move to Redis.

## Developer Workflows

- **Start Dev Server:** `pnpm dev` (see `README.md`).
- **Install Dependencies:** `pnpm install`.
- **Environment Setup:** Copy `.env.example` to `.env.local` and fill in all required keys (Supabase, Resend, Redis, Sentry, emails).
- **Testing:**
  - Submit forms and check for success modals and email delivery.
  - Monitor queue health with `redis-cli` and check logs for email events.
  - Sentry is optional but recommended for error tracking.
- **Production Deploy:** Push to GitHub, deploy via Vercel, set environment variables in dashboard.

## Project-Specific Conventions

- **Validation:** All user input is validated both client- and server-side. Use shared functions in `lib/validation.ts`.
- **Security:**
  - HTTPS enforced by Vercel.
  - CORS: Next.js same-origin.
  - RLS on all DB tables.
  - Secrets in `.env.local`, never in code.
- **Error Handling:** API routes return 429 (rate limit), 400 (validation), or 500 (server error) as appropriate.
- **Styling:** Tailwind CSS, custom fonts loaded in `app/fonts/` and configured in `tailwind.config.ts`.
- **Component Structure:** Features and sections are modularized under `components/features/` and `components/sections/`.

## Integration Points & External Dependencies

- **Supabase:** DB client in `lib/supabase.ts`, types defined here.
- **Resend:** Email service in `lib/email.ts`.
- **Redis:** Used for queueing and rate limiting (see `lib/queue.ts` and `lib/rate-limit.ts`).
- **Sentry:** Error tracking (optional, see `.env.example`).

## Key References

- **Architecture:** See `docs/ARCHITECTURE.md` for diagrams, flows, and rationale.
- **Scalability:** See `docs/SCALABILITY_ANALYSIS.md` and `docs/SCALING_ROADMAP.md` for scaling strategies and breaking points.
- **Setup & Checklist:** See `docs/PRODUCTION_SETUP.md` and `docs/archive/IMPLEMENTATION_CHECKLIST.md` for step-by-step setup and deployment.
- **Validation Logic:** See `lib/validation.ts` for all input validation rules.
- **API Handlers:** See `app/api/contact/route.ts` and `app/api/booking/route.ts` for main backend logic.

---

**For questions or deeper context, review the referenced docs above.**
