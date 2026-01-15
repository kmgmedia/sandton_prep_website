/**
 * Server-side validation utilities
 * Shared validation logic between client and server
 */

// Email validation with domain whitelist
const VALID_DOMAINS = [
  "gmail.com",
  "yahoo.com",
  "outlook.com",
  "hotmail.com",
  "icloud.com",
  "live.com",
  "msn.com",
  "aol.com",
  "protonmail.com",
  "zoho.com",
  "mail.com",
  "yandex.com",
  "gmx.com",
  "fastmail.com",
];

// Common typos mapping
const COMMON_TYPOS: { [key: string]: string } = {
  "gmai.com": "gmail.com",
  "gmial.com": "gmail.com",
  "gmil.com": "gmail.com",
  "yahooo.com": "yahoo.com",
  "yaho.com": "yahoo.com",
  "outloo.com": "outlook.com",
  "outlok.com": "outlook.com",
  "hotmial.com": "hotmail.com",
  "hotmai.com": "hotmail.com",
};

export function validateEmail(email: string): {
  valid: boolean;
  suggestion?: string;
  error?: string;
} {
  // Basic format check
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { valid: false, error: "Invalid email format" };
  }

  const domain = email.split("@")[1].toLowerCase();

  // Check for common typos
  if (COMMON_TYPOS[domain]) {
    return {
      valid: false,
      suggestion: email.replace(domain, COMMON_TYPOS[domain]),
      error: `Did you mean ${email.replace(domain, COMMON_TYPOS[domain])}?`,
    };
  }

  // Check if domain is in whitelist
  if (!VALID_DOMAINS.includes(domain)) {
    return {
      valid: false,
      error: "Please use a common email provider (Gmail, Yahoo, Outlook, etc.)",
    };
  }

  return { valid: true };
}

export function validatePhone(phone: string): {
  valid: boolean;
  error?: string;
} {
  // Check if phone starts with + followed by numbers, or just numbers
  const phoneRegex = /^\+?\d+$/;

  if (!phoneRegex.test(phone)) {
    return {
      valid: false,
      error:
        "Phone number can only contain numbers and an optional + at the start",
    };
  }

  // Remove the + sign for length validation
  const digits = phone.replace(/\+/g, "");

  // Phone numbers should have at least 9 digits and at most 15 (international standard)
  if (digits.length < 9 || digits.length > 15) {
    return {
      valid: false,
      error: "Phone number must be between 9 and 15 digits",
    };
  }

  return { valid: true };
}

export function validateRequired(
  value: string,
  fieldName: string
): { valid: boolean; error?: string } {
  if (!value || value.trim() === "") {
    return { valid: false, error: `${fieldName} is required` };
  }
  return { valid: true };
}

export function validateDate(dateString: string): {
  valid: boolean;
  error?: string;
} {
  const date = new Date(dateString);
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  if (isNaN(date.getTime())) {
    return { valid: false, error: "Invalid date format" };
  }

  if (date < today) {
    return { valid: false, error: "Date cannot be in the past" };
  }

  // Limit to 3 months in the future
  const threeMonthsLater = new Date();
  threeMonthsLater.setMonth(threeMonthsLater.getMonth() + 3);

  if (date > threeMonthsLater) {
    return {
      valid: false,
      error: "Please select a date within the next 3 months",
    };
  }

  return { valid: true };
}

export function sanitizeInput(input: string): string {
  // Basic XSS prevention - remove HTML tags and script content
  return input
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "")
    .replace(/<[^>]+>/g, "")
    .trim();
}

// Validate contact form data
export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  childAge?: string;
  message: string;
}

export function validateContactForm(data: ContactFormData): {
  valid: boolean;
  errors: string[];
} {
  const errors: string[] = [];

  // Required fields
  const firstNameCheck = validateRequired(data.firstName, "First name");
  if (!firstNameCheck.valid) errors.push(firstNameCheck.error!);

  const lastNameCheck = validateRequired(data.lastName, "Last name");
  if (!lastNameCheck.valid) errors.push(lastNameCheck.error!);

  const messageCheck = validateRequired(data.message, "Message");
  if (!messageCheck.valid) errors.push(messageCheck.error!);

  // Email validation
  const emailCheck = validateEmail(data.email);
  if (!emailCheck.valid) errors.push(emailCheck.error!);

  // Phone validation (if provided)
  if (data.phone) {
    const phoneCheck = validatePhone(data.phone);
    if (!phoneCheck.valid) errors.push(phoneCheck.error!);
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}

// Validate booking form data
export interface BookingFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  childName?: string;
  childAge: string;
  currentSchool?: string;
  preferredDate: string;
  preferredTime: string;
  adultsAttending: number;
  specialRequirements?: string;
}

export function validateBookingForm(data: BookingFormData): {
  valid: boolean;
  errors: string[];
} {
  const errors: string[] = [];

  // Required fields
  const firstNameCheck = validateRequired(data.firstName, "First name");
  if (!firstNameCheck.valid) errors.push(firstNameCheck.error!);

  const lastNameCheck = validateRequired(data.lastName, "Last name");
  if (!lastNameCheck.valid) errors.push(lastNameCheck.error!);

  const phoneCheck = validatePhone(data.phone);
  if (!phoneCheck.valid) errors.push(phoneCheck.error!);

  const childAgeCheck = validateRequired(data.childAge, "Child's age");
  if (!childAgeCheck.valid) errors.push(childAgeCheck.error!);

  const timeCheck = validateRequired(data.preferredTime, "Preferred time");
  if (!timeCheck.valid) errors.push(timeCheck.error!);

  // Email validation
  const emailCheck = validateEmail(data.email);
  if (!emailCheck.valid) errors.push(emailCheck.error!);

  // Date validation
  const dateCheck = validateDate(data.preferredDate);
  if (!dateCheck.valid) errors.push(dateCheck.error!);

  // Adults attending must be at least 1
  if (data.adultsAttending < 1) {
    errors.push("At least one adult must be attending");
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}
