import * as Sentry from "@sentry/nextjs";

const dsn = process.env.SENTRY_DSN;

if (dsn) {
  Sentry.init({
    dsn,
    environment: process.env.NODE_ENV || "development",

    // Performance Monitoring
    tracesSampleRate: process.env.NODE_ENV === "production" ? 0.1 : 1.0,

    // Allowed URLs for error reporting
    allowUrls: [
      /^https?:\/\/sandtonprep/i,
      /^http:\/\/(127\.0\.0\.1|localhost)/,
    ],

    // Ignore certain errors
    ignoreErrors: [
      // Browser extensions
      "chrome-extension://",
      "moz-extension://",
      // Network errors
      "NetworkError",
      "Network request failed",
    ],
  });
} else {
  console.warn("Sentry DSN not configured. Error tracking disabled.");
}

export default Sentry;
