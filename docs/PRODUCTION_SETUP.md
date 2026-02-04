# Production Backend Setup Guide

This guide will help you set up the production-ready backend for form submissions.

## 🎯 What We've Implemented

✅ **API Routes**: Replaced `mailto:` with proper REST API endpoints  
✅ **Database**: Supabase PostgreSQL for storing submissions  
✅ **Email Service**: Resend for sending notification and auto-responder emails  
✅ **Rate Limiting**: IP-based rate limiting (5 requests per 15 minutes)  
✅ **Server-Side Validation**: Email domain validation, input sanitization, XSS prevention  
✅ **Security**: Environment variables, CORS, input sanitization

## 📦 Step 1: Install Dependencies

Dependencies have been added to `package.json`. Install them:

```bash
pnpm install
```

This will install:

## 🗄️ Step 2: Set Up Supabase Database

### 2.1 Create a Supabase Account

1. Go to [https://supabase.com](https://supabase.com)
2. Sign up for a free account
3. Create a new project

### 2.2 Run the Database Schema

1. In your Supabase dashboard, go to **SQL Editor**
2. Copy the contents of `supabase/schema.sql`
3. Paste and run the SQL script

This creates:

### 2.3 Get Your Supabase Credentials

1. Go to **Settings** → **API**
2. Copy:
   - **Project URL** (e.g., `https://xxxxx.supabase.co`)
   - **Service Role Key** (secret key - keep this private!)

## 📧 Step 3: Set Up Resend Email Service

### 3.1 Create a Resend Account

1. Go to [https://resend.com](https://resend.com)
2. Sign up for a free account (100 emails/day free tier)
3. Verify your email address

### 3.2 Add Your Domain (Recommended for Production)

1. Go to **Domains** in Resend dashboard
2. Add your domain (e.g., `sandtonprep.co.za`)
3. Add the DNS records they provide to your domain registrar
4. Wait for verification (usually 5-30 minutes)

**For Testing:** You can skip domain setup and use `onboarding@resend.dev` as the sender for testing.

### 3.3 Get Your API Key

1. Go to **API Keys** in Resend dashboard
2. Create a new API key
3. Copy the key (starts with `re_`)

## 🔐 Step 4: Configure Environment Variables

### 4.1 Create `.env.local` File

Copy the example file and fill in your credentials:

```bash
cp .env.example .env.local
```

### 4.2 Edit `.env.local`

Open `.env.local` and fill in:

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here

# Resend Email Service
RESEND_API_KEY=re_your_api_key_here

# School Contact Information
SCHOOL_EMAIL=noreply@sandtonprep.co.za
SCHOOL_ADMISSIONS_EMAIL=admissions@sandtonprep.co.za

# Rate Limiting (Optional - defaults shown)
RATE_LIMIT_MAX_REQUESTS=5
RATE_LIMIT_WINDOW_MS=900000
```

**Important Notes:**

### 4.3 Verify `.gitignore`

Make sure `.env.local` is in `.gitignore` (it should be already):

```gitignore
.env.local
.env*.local
```

## 🚀 Step 5: Test Your Setup

### 5.1 Start the Development Server

```bash
pnpm dev
```

### 5.2 Test the Contact Form

1. Go to [http://localhost:3000/contact](http://localhost:3000/contact)
2. Fill out the form
3. Submit

**Expected Results:**

### 5.3 Test the Booking Form

1. Go to [http://localhost:3000/bookpage](http://localhost:3000/bookpage)
2. Fill out the visit booking form
3. Submit

**Expected Results:**

### 5.4 Test Rate Limiting

1. Submit the same form 6 times rapidly
2. On the 6th attempt, you should see:
   ```
   Too many requests. Please try again in a few minutes.
   ```

## 🔍 Troubleshooting

### Forms Submit But No Email Received

**Check:**

1. Verify `RESEND_API_KEY` is correct in `.env.local`
2. Verify `SCHOOL_EMAIL` matches your verified Resend domain
3. Check Resend dashboard → **Logs** for email delivery status
4. Check spam folder

**For Testing:** Use `onboarding@resend.dev` as `SCHOOL_EMAIL`

### Database Errors

**Check:**

1. Verify `NEXT_PUBLIC_SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` are correct
2. Verify you ran the `supabase/schema.sql` script
3. Check Supabase dashboard → **Table Editor** to see if tables exist
4. Check browser console for detailed error messages

### Rate Limiting Not Working

**Check:**

1. In-memory rate limiting resets when server restarts
2. For production, consider using Redis or Vercel Edge Config
3. Check `.env.local` for `RATE_LIMIT_MAX_REQUESTS` and `RATE_LIMIT_WINDOW_MS`

### TypeScript Errors

**Run:**

```bash
pnpm build
```

This will catch any TypeScript issues before deployment.

## 📊 View Submissions in Supabase

### Method 1: Supabase Dashboard

1. Go to your Supabase project
2. Click **Table Editor**
3. Select `contact_submissions` or `visit_bookings`
4. View all submissions with timestamps, status, IP addresses

### Method 2: SQL Queries

In the SQL Editor, run:

```sql
SELECT * FROM contact_submissions ORDER BY created_at DESC;

SELECT * FROM visit_bookings ORDER BY created_at DESC;

SELECT status, COUNT(*) as count
FROM contact_submissions
GROUP BY status;

SELECT * FROM visit_bookings
WHERE created_at > NOW() - INTERVAL '7 days'
ORDER BY created_at DESC;
```

## 🚢 Deploying to Production (Vercel)

### 1. Push to GitHub

```bash
git add .
git commit -m "Add production backend with API routes, database, and email service"
git push origin main
```

### 2. Deploy to Vercel

1. Go to [https://vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Add environment variables in Vercel dashboard:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `SUPABASE_SERVICE_ROLE_KEY`
   - `RESEND_API_KEY`
   - `SCHOOL_EMAIL`
   - `SCHOOL_ADMISSIONS_EMAIL`
   - `RATE_LIMIT_MAX_REQUESTS` (optional)
   - `RATE_LIMIT_WINDOW_MS` (optional)

### 3. Deploy

Click **Deploy** and wait for deployment to complete.

### 4. Test Production

Visit your deployed site and test both forms.

## 📈 Scaling Considerations

### Current Setup (Good for < 10,000 requests/month)

### For Higher Traffic (> 10,000 requests/month)

1. **Upgrade Supabase Plan** ($25/month for Pro)
2. **Upgrade Resend Plan** ($20/month for 50,000 emails)
3. **Use Redis for Rate Limiting** (Upstash free tier available)
4. **Add Cloudflare** for DDoS protection
5. **Monitor with Sentry** for error tracking

## 🛡️ Security Features Implemented

✅ **Input Sanitization**: All inputs are sanitized to prevent XSS attacks  
✅ **Email Validation**: Domain whitelist + typo detection  
✅ **Rate Limiting**: IP-based (5 requests per 15 minutes)  
✅ **Environment Variables**: Sensitive data not in code  
✅ **Row Level Security**: Supabase RLS enabled on all tables  
✅ **Service Role**: Only server-side API can write to database  
✅ **HTTPS Only**: Production uses HTTPS (via Vercel)

## 📝 Files Created

```
supabase/
  └── schema.sql               # Database schema

lib/
  ├── supabase.ts             # Supabase client + types
  ├── email.ts                # Email service + templates
  ├── rate-limit.ts           # Rate limiting logic
  └── validation.ts           # Shared validation functions

app/api/
  ├── contact/route.ts        # Contact form API endpoint
  └── booking/route.ts        # Booking form API endpoint

.env.example                  # Environment variables template
PRODUCTION_SETUP.md          # This file
```

## 🎓 For Junior Developers

### What Changed?

**Before:** Forms used `mailto:` links (unreliable, no tracking, spam filters block it)  
**After:** Forms POST to API routes → Save to database → Send emails

### API Flow

```
User submits form
    ↓
POST /api/contact (or /api/booking)
    ↓
Rate limit check (prevent spam)
    ↓
Validate data (server-side)
    ↓
Sanitize inputs (prevent XSS)
    ↓
Save to Supabase database
    ↓
Send email to school
    ↓
Send auto-responder to user
    ↓
Return success response
    ↓
Show success modal
```

### Key Concepts

## 🆘 Need Help?

1. Check browser console for errors (F12 → Console tab)
2. Check terminal for server errors
3. Check Supabase logs (Dashboard → Logs)
4. Check Resend logs (Dashboard → Logs)
5. Verify all environment variables are set correctly

## ✅ Next Steps (Future Enhancements)

Priority 2 (Optional):

Priority 3 (Nice to Have):

**Questions?** Check the code comments in each file for detailed explanations.
