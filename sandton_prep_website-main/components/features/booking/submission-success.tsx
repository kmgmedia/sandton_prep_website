"use client";

import React from "react";
import Link from "next/link";

interface SubmissionSuccessProps {
  isOpen: boolean;
  onClose: () => void;
  variant?: "booking" | "contact";
}

const SubmissionSuccess: React.FC<SubmissionSuccessProps> = ({
  isOpen,
  onClose,
  variant = "booking",
}) => {
  if (!isOpen) return null;

  const content =
    variant === "contact"
      ? {
          title: "Message Sent!",
          body: "Thanks for reaching out to Sandton Prep. We've received your message and will get back to you shortly.",
          bullets: [
            "We have your message logged",
            "Expect a reply within one business day",
            "For urgent matters, please call our office",
          ],
          email: "info@sandtonprep.co.za",
        }
      : {
          title: "Request Submitted!",
          body: "Thank you for scheduling a visit to Sandton Prep. Your booking request has been successfully submitted.",
          bullets: [
            "We will receive your booking request",
            "Our admissions team will contact you shortly",
            "We'll confirm your visit date and time",
          ],
          email: "info@sandtonprep.edu.ng",
        };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-2xl max-w-md w-full p-8 text-center">
        {/* Success Icon */}
        <div className="mb-6 flex justify-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
            <svg
              className="w-8 h-8 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold text-slate-900 mb-2 font-['Quicksand']">
          {content.title}
        </h2>

        {/* Message */}
        <p className="text-slate-600 text-sm leading-relaxed mb-2 font-['Quicksand']">
          {content.body}
        </p>

        {/* Additional Info */}
        <div className="bg-amber-50 rounded-md p-4 mb-6 border border-amber-200">
          <p className="text-slate-700 text-xs font-semibold font-['Quicksand'] mb-2">
            What happens next?
          </p>
          <ul className="text-slate-600 text-xs font-['Quicksand'] space-y-1 text-left">
            {content.bullets.map((item, idx) => (
              <li key={idx}>✓ {item}</li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="mb-6 text-xs text-slate-500 font-['Quicksand']">
          <p className="mb-1">If you have questions, reach out to us:</p>
          <p className="font-semibold text-slate-700">{content.email}</p>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 flex-col sm:flex-row">
          <button
            onClick={onClose}
            className="flex-1 h-10 bg-amber-300 hover:bg-amber-400 text-black font-semibold rounded-md transition"
          >
            Continue Browsing
          </button>
          <Link href="/" className="flex-1">
            <button className="w-full h-10 bg-slate-700 hover:bg-slate-800 text-white font-semibold rounded-md transition">
              Back to Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SubmissionSuccess;
