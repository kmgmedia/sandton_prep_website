"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import SubmissionSuccess from "@/components/features/booking/submission-success";

const Calender = () => {
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [missingFields, setMissingFields] = useState<string[]>([]);
  const [showSuccess, setShowSuccess] = useState<boolean>(false);
  
  // Create refs for error fields
  const fieldRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    childName: "",
    childAge: "",
    school: "",
    date: "",
    adults: "",
    notes: "",
  });

  const requiredFields = [
    { key: "firstName", label: "First Name" },
    { key: "lastName", label: "Last Name" },
    { key: "email", label: "Email" },
    { key: "phone", label: "Phone" },
    { key: "childAge", label: "Child's Age" },
    { key: "date", label: "Preferred Date" },
    { key: "adults", label: "Adults Attending" },
    { key: "time", label: "Preferred Time" },
  ];

  const handleChange = (key: string, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const inputErrorClass = (key: string) =>
    missingFields.includes(key)
      ? "placeholder:text-red-500 outline-red-400 text-red-600"
      : "";

  const labelErrorClass = (key: string) =>
    missingFields.includes(key) ? "text-red-600" : "";

  // Email validation function
  const isValidEmail = (email: string): boolean => {
    if (!email) return false;
    // Basic email regex pattern
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return false;

    // Check for common domain typos and validate domain format
    const domain = email.split("@")[1].toLowerCase();
    
    // List of valid email domains
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
      "education.gov.ng",
      "edu.ng",
      "gov.ng",
      // Add more domains as needed
    ];

    // Check if domain is in valid list or has a known structure
    const isKnownDomain = validDomains.includes(domain);
    
    // Check for common typos
    const commonTypos: { [key: string]: string } = {
      "gmai.com": "gmail.com",
      "gmil.com": "gmail.com",
      "gmal.com": "gmail.com",
      "yahooo.com": "yahoo.com",
      "yaho.com": "yahoo.com",
      "outlok.com": "outlook.com",
      "hotmil.com": "hotmail.com",
    };

    if (commonTypos[domain]) {
      return false; // Typo detected
    }

    // If it's not a known domain, check if it at least has a valid structure
    // Allow custom domains if they have proper format
    return isKnownDomain || /^[a-z0-9.-]+\.[a-z]{2,}$/i.test(domain);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const missing = requiredFields
      .filter((f) => {
        if (f.key === "time") return !selectedTime;
        return !form[f.key as keyof typeof form];
      })
      .map((f) => f.key);

    // Validate email domain separately
    const invalidEmail = form.email && !isValidEmail(form.email) ? ["email"] : [];
    const allErrors = [...missing, ...invalidEmail];

    setMissingFields(allErrors);
    if (allErrors.length) {
      // Scroll to first error field
      const firstErrorKey = allErrors[0];
      const errorElement = fieldRefs.current[firstErrorKey];
      if (errorElement) {
        errorElement.scrollIntoView({ behavior: "smooth", block: "center" });
      }
      return;
    }

    setMissingFields([]);

    try {
      // Submit to API route
      const response = await fetch('/api/booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: form.firstName,
          lastName: form.lastName,
          email: form.email,
          phone: form.phone,
          childName: form.childName,
          childAge: form.childAge,
          currentSchool: form.school,
          preferredDate: form.date,
          preferredTime: selectedTime,
          adultsAttending: parseInt(form.adults),
          specialRequirements: form.notes,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        // Handle errors
        if (response.status === 429) {
          alert('Too many requests. Please try again in a few minutes.');
        } else if (data.details) {
          alert(`Validation errors:\n${data.details.join('\n')}`);
        } else {
          alert(data.error || 'Failed to submit booking. Please try again.');
        }
        return;
      }

      // Show success modal and reset form
      setShowSuccess(true);
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        childName: "",
        childAge: "",
        school: "",
        date: "",
        adults: "",
        notes: "",
      });
      setSelectedTime("");
      
    } catch (error) {
      console.error('Submission error:', error);
      alert('Network error. Please check your connection and try again.');
    }
  };

  return (
    <>
      <SubmissionSuccess
        isOpen={showSuccess}
        onClose={() => setShowSuccess(false)}
      />
      <section className="flex justify-center px-4 py-2 bg-gray-50">
        <div className="w-full max-w-5xl flex flex-col lg:flex-row gap-8 lg:gap-16">
          <form
            className="flex-1 flex flex-col gap-8 bg-white p-6 rounded-lg shadow-lg"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col gap-6">
              <h2 className="text-2xl font-bold text-slate-700 font-['Quicksand'] leading-loose text-center lg:text-left">
                Schedule Your Visit
              </h2>

              <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                <div className="flex-1 flex flex-col gap-4">
                  <div
                    ref={(el) => {
                      if (el) fieldRefs.current["firstName"] = el;
                    }}
                    className="flex flex-col gap-2"
                  >
                    <label
                      className={`text-sm font-medium text-slate-700 ${labelErrorClass(
                        "firstName"
                      )}`}
                    >
                      First Name *
                    </label>
                    <input
                      type="text"
                      placeholder="Your first name"
                      value={form.firstName}
                      onChange={(e) =>
                        handleChange("firstName", e.target.value)
                      }
                      className={`h-10 px-3 py-2 bg-amber-50 rounded-md outline outline-1 outline-offset-[-1px] outline-amber-300/20 text-sm text-neutral-400 w-full ${inputErrorClass(
                        "firstName"
                      )}`}
                    />
                  </div>
                  <div
                    ref={(el) => {
                      if (el) fieldRefs.current["email"] = el;
                    }}
                    className="flex flex-col gap-2"
                  >
                    <label
                      className={`text-sm font-medium text-slate-700 ${labelErrorClass(
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
                      className={`h-10 px-3 py-2 bg-amber-50 rounded-md outline outline-1 outline-offset-[-1px] outline-amber-300/20 text-sm text-neutral-400 w-full ${inputErrorClass(
                        "email"
                      )}`}
                    />
                  </div>
                </div>

                <div className="flex-1 flex flex-col gap-4">
                  <div
                    ref={(el) => {
                      if (el) fieldRefs.current["lastName"] = el;
                    }}
                    className="flex flex-col gap-2"
                  >
                    <label
                      className={`text-sm font-medium text-slate-700 ${labelErrorClass(
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
                      className={`h-10 px-3 py-2 bg-amber-50 rounded-md outline outline-1 outline-offset-[-1px] outline-amber-300/20 text-sm text-neutral-400 w-full ${inputErrorClass(
                        "lastName"
                      )}`}
                    />
                  </div>
                  <div
                    ref={(el) => {
                      if (el) fieldRefs.current["phone"] = el;
                    }}
                    className="flex flex-col gap-2"
                  >
                    <label
                      className={`text-sm font-medium text-slate-700 ${labelErrorClass(
                        "phone"
                      )}`}
                    >
                      Phone *
                    </label>
                    <input
                      type="text"
                      placeholder="+234 11 xxx xxxx"
                      value={form.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      className={`h-10 px-3 py-2 bg-amber-50 rounded-md outline outline-1 outline-offset-[-1px] outline-amber-300/20 text-sm text-neutral-400 w-full ${inputErrorClass(
                        "phone"
                      )}`}
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-6">
                <h3 className="text-lg font-semibold text-slate-700">
                  Child Information
                </h3>
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1 flex flex-col gap-2">
                    <label className="text-sm font-medium text-slate-700">
                      Child&apos;s Name
                    </label>
                    <input
                      type="text"
                      placeholder="Child's full name"
                      value={form.childName}
                      onChange={(e) =>
                        handleChange("childName", e.target.value)
                      }
                      className="h-10 px-3 py-2 bg-amber-50 rounded-md outline outline-1 outline-offset-[-1px] outline-amber-300/20 text-sm text-neutral-400 w-full"
                    />
                  </div>
                  <div
                    ref={(el) => {
                      if (el) fieldRefs.current["childAge"] = el;
                    }}
                    className="flex-1 flex flex-col gap-2"
                  >
                    <label
                      className={`text-sm font-medium text-slate-700 ${labelErrorClass(
                        "childAge"
                      )}`}
                    >
                      Child&apos;s Age *
                    </label>
                    <select
                      className={`h-10 px-3 py-2 bg-amber-50 rounded-md outline outline-1 outline-offset-[-1px] outline-amber-300/20 text-sm text-black w-full ${inputErrorClass(
                        "childAge"
                      )}`}
                      value={form.childAge}
                      onChange={(e) => handleChange("childAge", e.target.value)}
                    >
                      <option value="">Select age</option>
                      {Array.from({ length: 12 }, (_, i) => i + 1).map(
                        (age) => (
                          <option key={age} value={age}>
                            {age}
                          </option>
                        )
                      )}
                    </select>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-slate-700">
                    Current School/Childcare (if any)
                  </label>
                  <input
                    type="text"
                    placeholder="Current educational setting"
                    value={form.school}
                    onChange={(e) => handleChange("school", e.target.value)}
                    className="h-10 px-3 py-2 bg-amber-50 rounded-md outline outline-1 outline-offset-[-1px] outline-amber-300/20 text-sm text-neutral-400 w-full"
                  />
                </div>
              </div>

              <div
                ref={(el) => {
                  if (el) fieldRefs.current["date"] = el;
                }}
                className="flex flex-col gap-4"
              >
                <label
                  className={`text-sm font-medium text-slate-700 ${labelErrorClass(
                    "date"
                  )}`}
                >
                  Select Date *
                </label>
                <input
                  type="date"
                  value={form.date}
                  onChange={(e) => handleChange("date", e.target.value)}
                  className={`p-3 bg-white rounded-md shadow-sm w-full ${inputErrorClass(
                    "date"
                  )}`}
                />
              </div>

              <div
                ref={(el) => {
                  if (el) fieldRefs.current["time"] = el;
                }}
              >
                  <label
                    className={`text-sm font-medium text-slate-700 mt-4 ${labelErrorClass(
                      "time"
                    )}`}
                  >
                    Preferred Time *
                  </label>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM"].map(
                      (time, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => setSelectedTime(time)}
                          className={`w-28 h-10 px-4 py-2 rounded-md outline outline-1 outline-offset-[-1px] flex items-center justify-center text-xs font-medium transition-all cursor-pointer ${
                            selectedTime === time
                              ? "bg-yellow-400 outline-yellow-500 text-slate-900"
                              : missingFields.includes("time")
                              ? "bg-amber-50 outline-red-400 text-red-600"
                              : "bg-amber-50 outline-amber-300/20 text-slate-500 hover:bg-amber-100"
                          }`}
                        >
                          {time}
                        </button>
                      )
                    )}
                  </div>
                </div>

              <div className="flex flex-col gap-4">
                <div
                  ref={(el) => {
                    if (el) fieldRefs.current["adults"] = el;
                  }}
                  className="flex flex-col gap-2"
                >
                  <label
                    className={`text-sm font-medium text-slate-700 ${labelErrorClass(
                      "adults"
                    )}`}
                  >
                    Number of Adults Attending
                  </label>
                  <input
                    type="number"
                    placeholder="Select number"
                    value={form.adults}
                    onChange={(e) => handleChange("adults", e.target.value)}
                    className={`h-10 px-3 py-2 bg-amber-50 rounded-md outline outline-1 outline-offset-[-1px] outline-amber-300/20 text-sm text-black w-full ${inputErrorClass(
                      "adults"
                    )}`}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-slate-700">
                    Special Requirements or Questions
                  </label>
                  <textarea
                    className="h-20 bg-amber-50 rounded-md border border-amber-300/20 p-2 w-full"
                    value={form.notes}
                    onChange={(e) => handleChange("notes", e.target.value)}
                  ></textarea>
                </div>

                <div className="mt-4">
                  <button
                    type="submit"
                    className="w-full h-10 bg-amber-300 rounded-md font-medium text-black hover:bg-amber-400 transition"
                  >
                    Book Visit
                  </button>
                </div>
              </div>
            </div>
          </form>

          <div className="w-full lg:w-96 flex-shrink-0 flex flex-col gap-7 mt-8 lg:mt-0">
            <div className="h-auto px-6 py-6 bg-white rounded-lg shadow-sm flex flex-col gap-3">
              <h3 className="text-xl font-bold text-slate-700">
                What to Expect
              </h3>
              {[
                "Tour our beautiful, secure facilities",
                "Meet our experienced teachers",
                "See children engaged in learning",
                "Discuss curriculum and approach",
                "Ask questions about enrollment",
                "Get a feel for our community",
              ].map((item, idx) => (
                <div key={idx} className="flex gap-3 items-center">
                  <div className="w-4 h-4 border border-amber-300 rounded-sm"></div>
                  <p className="text-base font-medium text-slate-500 leading-snug">
                    {item}
                  </p>
                </div>
              ))}

              <div className="mt-6 w-full bg-gray-300/20 rounded-lg shadow-[0_1px_2px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] outline-neutral-200 p-4 flex flex-col gap-3">
                <h4 className="text-xl font-bold text-slate-700 font-['Quicksand']">
                  Need Help?
                </h4>
                <div className="flex flex-col gap-2">
                  <div>Call us directly:</div>
                  <div className="text-slate-500 text-sm font-semibold font-['Quicksand'] leading-tight">
                    Monday to Friday: 7:00 AM - 6:00 PM
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-black text-sm font-semibold font-['Quicksand'] leading-tight">
                    Email:
                  </span>
                  <span className="text-slate-500 text-sm font-medium font-['Quicksand']">
                    info@sandtonprep.edu.ng
                  </span>
                </div>
                <div className="text-slate-500 text-xs font-semibold font-['Quicksand'] leading-tight">
                  Monday to Friday: 7:00 AM - 6:00 PM
                </div>
                <Link href="/contact">
                  <button className="mt-2 w-full h-9 bg-amber-200 rounded-md outline outline-1 outline-offset-[-1px] outline-amber-300/20 text-black text-xs font-semibold font-['Quicksand'] hover:bg-amber-300 transition">
                    Contact Us Instead
                  </button>
                </Link>
              </div>

              <div className="mt-6 w-full bg-white rounded-lg shadow-[0_1px_2px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] outline-neutral-200 p-4 flex flex-col gap-3">
                <h4 className="text-xl font-bold text-slate-700 font-['Quicksand']">
                  Parent Reviews
                </h4>
                <div className="flex flex-col gap-6">
                  {[
                    {
                      review:
                        "The visit gave us complete confidence in our choice. The staff were welcoming and the facilities are outstanding.",
                      name: "Sarah Mitchell",
                    },
                    {
                      review:
                        "Seeing the classes in action was exactly what we needed. Our daughter started the next month!",
                      name: "David Chen",
                    },
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-2 items-start">
                      <div className="w-1 h-16 border-l-4 border-amber-300/20"></div>
                      <div className="flex flex-col gap-2">
                        <div className="flex gap-1">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <div
                              key={i}
                              className="w-3 h-3 bg-amber-300 rounded-full"
                            ></div>
                          ))}
                        </div>
                        <p className="text-slate-500 text-sm font-medium font-['Quicksand'] leading-none">
                          {item.review}
                        </p>
                        <p className="text-slate-500 text-sm font-semibold font-['Quicksand'] leading-none">
                          - {item.name}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Calender;
