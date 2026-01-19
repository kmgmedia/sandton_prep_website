/**
 * Simple in-memory rate limiter for API routes
 * For production with multiple servers, use Redis or Vercel Edge Config
 */

interface RateLimitStore {
  [key: string]: {
    count: number;
    resetTime: number;
  };
}

const store: RateLimitStore = {};

// Cleanup old entries every 10 minutes
setInterval(() => {
  const now = Date.now();
  Object.keys(store).forEach((key) => {
    if (store[key].resetTime < now) {
      delete store[key];
    }
  });
}, 10 * 60 * 1000);

interface RateLimitOptions {
  maxRequests?: number; // Default: 5 requests
  windowMs?: number; // Default: 15 minutes
}

export function rateLimit(identifier: string, options: RateLimitOptions = {}) {
  const maxRequests =
    options.maxRequests || parseInt(process.env.RATE_LIMIT_MAX_REQUESTS || "5");
  const windowMs =
    options.windowMs ||
    parseInt(process.env.RATE_LIMIT_WINDOW_MS || (15 * 60 * 1000).toString());

  const now = Date.now();
  const record = store[identifier];

  // First request or expired window
  if (!record || record.resetTime < now) {
    store[identifier] = {
      count: 1,
      resetTime: now + windowMs,
    };
    return {
      success: true,
      remaining: maxRequests - 1,
      resetTime: now + windowMs,
    };
  }

  // Within rate limit
  if (record.count < maxRequests) {
    record.count++;
    return {
      success: true,
      remaining: maxRequests - record.count,
      resetTime: record.resetTime,
    };
  }

  // Rate limit exceeded
  return {
    success: false,
    remaining: 0,
    resetTime: record.resetTime,
    retryAfter: Math.ceil((record.resetTime - now) / 1000), // seconds
  };
}

// Helper to get client IP from request headers
export function getClientIp(request: Request): string {
  // Check common headers in order of preference
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0].trim();
  }

  const realIp = request.headers.get("x-real-ip");
  if (realIp) {
    return realIp;
  }

  // Fallback to 'unknown' if no IP found
  return "unknown";
}
