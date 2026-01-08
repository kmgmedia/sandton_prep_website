"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import SubmissionSuccess from "@/components/features/booking/submission-success";
import Maps from "./maps";
import Footer from "../shared/footer";
import SubFooter from "../about/sub-footer";

const Contactus = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    childAge: "",
    message: "",
  });

  const [missingFields, setMissingFields] = useState<string[]>([]);
  const [showSuccess, setShowSuccess] = useState(false);
  const fieldRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const requiredFields = [
    { key: "firstName", label: "First Name" },
    { key: "lastName", label: "Last Name" },
    { key: "email", label: "Email" },
    { key: "message", label: "Message" },
  ];

  const handleChange = (key: string, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const inputErrorClass = (key: string) =>
    missingFields.includes(key)
      ? "placeholder:text-red-500 outline outline-1 outline-red-400 text-red-600"
      : "";

  const labelErrorClass = (key: string) =>
    missingFields.includes(key) ? "text-red-600" : "";

  const isValidEmail = (email: string): boolean => {
    if (!email) return false;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return false;

    const domain = email.split("@")[1].toLowerCase();
    const validDomains = [
      "gmail.com",
      "yahoo.com",
      "yahoo.co.uk",
      "yahoo.co.in",
      "outlook.com",
      "hotmail.com",
      "aol.com",
      "icloud.com",
      "mail.com",
      "protonmail.com",
      "tutanota.com",
      "yandex.com",
      "zoho.com",
      "mailbox.org",
      "fastmail.com",
      "gmx.com",
      "live.com",
      "msn.com",
      "edu.ng",
      "gov.ng",
      "co.za",
    ];

    const commonTypos: { [key: string]: string } = {
      "gmai.com": "gmail.com",
      "gmil.com": "gmail.com",
      "gmal.com": "gmail.com",
      "yahooo.com": "yahoo.com",
      "yaho.com": "yahoo.com",
      "outlok.com": "outlook.com",
      "hotmil.com": "hotmail.com",
    };

    if (commonTypos[domain]) return false;

    return (
      validDomains.includes(domain) || /^[a-z0-9.-]+\.[a-z]{2,}$/i.test(domain)
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const missing = requiredFields
      .filter((f) => !form[f.key as keyof typeof form])
      .map((f) => f.key);

    const invalidEmail =
      form.email && !isValidEmail(form.email) ? ["email"] : [];
    const errors = [...missing, ...invalidEmail];

    setMissingFields(errors);
    if (errors.length) {
      const first = errors[0];
      const el = fieldRefs.current[first];
      if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }

    setMissingFields([]);
    setShowSuccess(true);

    const email = "info@sandtonprep.co.za";
    const subject = encodeURIComponent("New Contact Message");
    const body = encodeURIComponent(`First Name: ${form.firstName}
Last Name: ${form.lastName}
Email: ${form.email}
Phone: ${form.phone || "N/A"}
Child Age: ${form.childAge || "N/A"}
Message: ${form.message}`);

    setTimeout(() => {
      window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    }, 500);
  };

  return (
    <>
      <SubmissionSuccess
        isOpen={showSuccess}
        onClose={() => setShowSuccess(false)}
        variant="contact"
      />
      {/* Top Section */}
      <section className="bg-slate-50 py-16 sm:py-20 md:py-24 px-4 sm:px-6 flex justify-center">
        <div className="max-w-6xl w-full text-center">
          {/* Heading */}
          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 font-sandyKids tracking-wide"
            style={{ WebkitTextStroke: 0 }}
          >
            Contact Us
          </h2>
          <p className="text-gray-600 font-medium max-w-3xl mx-auto mb-12 sm:mb-16 text-base sm:text-lg leading-relaxed font-['Quicksand']">
            We&apos;d love to hear from you. Get in touch with our friendly team
            today.
          </p>
        </div>
      </section>

      <section className="px-4 py-12 bg-neutral-100">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* LEFT: Contact Info */}
          <div className="flex flex-col gap-8">
            <h2 className="text-slate-700 text-4xl font-bold font-quicksand">
              Get in Touch
            </h2>

            {/* Contact Cards */}
            <div className="flex flex-col gap-6">
              {/* Phone */}
              <div className="p-6 bg-white rounded-lg shadow-sm border border-zinc-300 flex gap-4">
                <div className="w-12 h-12 flex items-center justify-center bg-amber-300/10 rounded-2xl">
                  📞
                </div>
                <div className="flex flex-col">
                  <h3 className="text-lg font-bold text-slate-700">Phone</h3>
                  <a
                    href="tel:+2349159116332"
                    className="text-slate-500 hover:text-amber-600 transition"
                  >
                    +234 915 911 6332
                  </a>
                  <a
                    href="tel:+2349159116203"
                    className="text-slate-500 hover:text-amber-600 transition"
                  >
                    +234 915 911 6203 (Emergency)
                  </a>
                  <a
                    href="tel:+2349159116332"
                    className="text-amber-500 text-xs font-semibold mt-2 hover:text-amber-600"
                  >
                    Call us
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="p-6 bg-white rounded-lg shadow-sm border border-zinc-300 flex gap-4">
                <div className="w-12 h-12 flex items-center justify-center bg-amber-300/10 rounded-2xl">
                  📧
                </div>
                <div className="flex flex-col">
                  <h3 className="text-lg font-bold text-slate-700">Email</h3>
                  <a
                    href="mailto:info@sandtonprep.co.za"
                    className="text-slate-500 hover:text-amber-600 transition"
                  >
                    info@sandtonprep.co.za
                  </a>
                  <a
                    href="mailto:admissions@sandtonprep.co.za"
                    className="text-slate-500 hover:text-amber-600 transition"
                  >
                    admissions@sandtonprep.co.za
                  </a>
                  <a
                    href="mailto:info@sandtonprep.co.za"
                    className="text-amber-500 text-xs font-semibold mt-2 hover:text-amber-600"
                  >
                    Send email
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="p-6 bg-white rounded-lg shadow-sm border border-zinc-300 flex gap-4">
                <div className="w-12 h-12 flex items-center justify-center bg-amber-300/10 rounded-2xl">
                  📍
                </div>
                <div className="flex flex-col">
                  <h3 className="text-lg font-bold text-slate-700">Address</h3>
                  <p className="text-slate-500">1 Egbeyemi Close, Folarin Street,</p>
                  <p className="text-slate-500">Egbeda/ Alimosho 100267, Lagos</p>
                  <a
                    href="https://maps.google.com/?q=1+Egbeyemi+Close,+Folarin+Street,+Egbeda,+Lagos"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-500 text-xs font-semibold mt-2 hover:text-amber-600"
                  >
                    Get directions
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="p-6 bg-white rounded-lg shadow-sm border border-zinc-300 flex gap-4">
                <div className="w-12 h-12 flex items-center justify-center bg-amber-300/10 rounded-2xl">
                  ⏰
                </div>
                <div className="flex flex-col">
                  <h3 className="text-lg font-bold text-slate-700">
                    Operating Hours
                  </h3>
                  <p className="text-slate-500">Mon–Fri: 6:30 AM - 6:00 PM</p>
                  <p className="text-slate-500">Sat: 8:00 AM - 1:00 PM</p>
                  <Link
                    href="/bookpage"
                    className="text-amber-500 text-xs font-semibold mt-2 hover:text-amber-600"
                  >
                    Book a Visit
                  </Link>
                </div>
              </div>
            </div>

            {/* Department Contacts */}
            <div className="p-6 bg-amber-200 rounded-2xl border border-stone-300">
              <h3 className="text-lg font-bold text-slate-700 mb-4">
                Department Contacts
              </h3>
              <ul className="space-y-2 text-sm text-slate-500">
                <li className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
                  <span className="font-semibold text-slate-700">Admissions:</span>
                  <a
                    href="mailto:admissions@sandtonprep.co.za"
                    className="hover:text-amber-600"
                  >
                    admissions@sandtonprep.co.za
                  </a>
                  <span className="hidden sm:inline">•</span>
                  <a
                    href="tel:+27112345680"
                    className="hover:text-amber-600"
                  >
                    +27 11 234 5680
                  </a>
                </li>
                <li className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
                  <span className="font-semibold text-slate-700">Finance:</span>
                  <a
                    href="mailto:finance@sandtonprep.co.za"
                    className="hover:text-amber-600"
                  >
                    finance@sandtonprep.co.za
                  </a>
                  <span className="hidden sm:inline">•</span>
                  <a
                    href="tel:+27112345681"
                    className="hover:text-amber-600"
                  >
                    +27 11 234 5681
                  </a>
                </li>
                <li className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
                  <span className="font-semibold text-slate-700">General:</span>
                  <a
                    href="mailto:info@sandtonprep.co.za"
                    className="hover:text-amber-600"
                  >
                    info@sandtonprep.co.za
                  </a>
                  <span className="hidden sm:inline">•</span>
                  <a
                    href="tel:+27112345678"
                    className="hover:text-amber-600"
                  >
                    +27 11 234 5678
                  </a>
                </li>
                <li className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
                  <span className="font-semibold text-slate-700">Principal:</span>
                  <a
                    href="mailto:principal@sandtonprep.co.za"
                    className="hover:text-amber-600"
                  >
                    principal@sandtonprep.co.za
                  </a>
                  <span className="hidden sm:inline">•</span>
                  <a
                    href="tel:+27112345682"
                    className="hover:text-amber-600"
                  >
                    +27 11 234 5682
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* RIGHT: Contact Form */}
          <div className="bg-white rounded-lg shadow-sm border border-zinc-300 p-8">
            <h3 className="text-3xl font-bold text-slate-700 mb-6 flex items-center gap-2">
              ✉️ Send Message
            </h3>

            <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
              {/* First + Last name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div
                  ref={(el) => {
                    if (el) fieldRefs.current["firstName"] = el;
                  }}
                >
                  <label
                    className={`block text-sm font-medium text-slate-700 ${labelErrorClass(
                      "firstName"
                    )}`}
                  >
                    First Name *
                  </label>
                  <input
                    type="text"
                    placeholder="Your first name"
                    value={form.firstName}
                    onChange={(e) => handleChange("firstName", e.target.value)}
                    className={`w-full px-3 py-2 rounded-md bg-amber-50 border border-amber-200 text-sm ${inputErrorClass(
                      "firstName"
                    )}`}
                  />
                </div>
                <div
                  ref={(el) => {
                    if (el) fieldRefs.current["lastName"] = el;
                  }}
                >
                  <label
                    className={`block text-sm font-medium text-slate-700 ${labelErrorClass(
                      "lastName"
                    )}`}
                  >
                    Last Name *
                  </label>
                  <input
                    type="text"
                    placeholder="Your last name"
                    value={form.lastName}
                    onChange={(e) => handleChange("lastName", e.target.value)}
                    className={`w-full px-3 py-2 rounded-md bg-amber-50 border border-amber-200 text-sm ${inputErrorClass(
                      "lastName"
                    )}`}
                  />
                </div>
              </div>

              {/* Email */}
              <div
                ref={(el) => {
                  if (el) fieldRefs.current["email"] = el;
                }}
              >
                <label
                  className={`block text-sm font-medium text-slate-700 ${labelErrorClass(
                    "email"
                  )}`}
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  placeholder="your.email@example.com"
                  value={form.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  className={`w-full px-3 py-2 rounded-md bg-amber-50 border border-amber-200 text-sm ${inputErrorClass(
                    "email"
                  )}`}
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-slate-700">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="+234 11 xxx xxxx"
                  value={form.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  className="w-full px-3 py-2 rounded-md bg-amber-50 border border-amber-200 text-sm"
                />
              </div>

              {/* Child’s Age */}
              <div>
                <label className="block text-sm font-medium text-slate-700">
                  Child&apos;s Age (if applicable)
                </label>
                <input
                  type="text"
                  placeholder="e.g., 3 years old"
                  value={form.childAge}
                  onChange={(e) => handleChange("childAge", e.target.value)}
                  className="w-full px-3 py-2 rounded-md bg-amber-50 border border-amber-200 text-sm"
                />
              </div>

              {/* Message */}
              <div
                ref={(el) => {
                  if (el) fieldRefs.current["message"] = el;
                }}
              >
                <label
                  className={`block text-sm font-medium text-slate-700 ${labelErrorClass(
                    "message"
                  )}`}
                >
                  Message *
                </label>
                <textarea
                  rows={4}
                  placeholder="Type your message..."
                  value={form.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  className={`w-full px-3 py-2 rounded-md bg-amber-50 border border-amber-200 text-sm ${inputErrorClass(
                    "message"
                  )}`}
                />
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  className="flex-1 bg-amber-300 text-black font-medium py-2 rounded-md hover:bg-amber-400 transition"
                >
                  Send Message
                </button>
                <Link href="/bookpage" className="flex-1">
                  <button
                    type="button"
                    className="w-full bg-amber-200 border border-amber-200 text-black font-medium py-2 rounded-md hover:bg-amber-300 transition"
                  >
                    Book a Visit Instead
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Maps Section */}
      <div>
        <Maps />
      </div>
      <section className="flex justify-center items-center w-full py-16 pt-0">
        <div className="w-full max-w-5xl flex flex-col justify-center items-center gap-12">
          {/* Stay Updated Section */}
          {/* Subfooter Section */}
          <SubFooter
            heading="Ready to Get Started?"
            subheading={
              <>
                The best way to understand our approach is to experience it
                <br className="hidden sm:block" />
                firsthand. Book a visit today.
              </>
            }
            primaryBtnText="Book A Visit"
            secondaryBtnText="Explore Programs"
            containerClass="bg-[var(--secondary-500)]"
            maxWidth="max-w-5xl"
            paddingY="py-24"
          />
        </div>
      </section>
      {/* Footer Section */}
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Contactus;
