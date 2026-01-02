"use client";

import React from "react";
import Maps from "./maps";
import Footer from "../shared/footer";
import SubFooter from "../about/sub-footer";


const Contactus = () => {


  return (
    <>
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
                  <p className="text-slate-500">+234 915 911 6332</p>
                  <p className="text-slate-500">
                    +234 915 911 6203 (Emergency)
                  </p>
                  <span className="text-amber-500 text-xs font-semibold mt-2">
                    Call us
                  </span>
                </div>
              </div>

              {/* Email */}
              <div className="p-6 bg-white rounded-lg shadow-sm border border-zinc-300 flex gap-4">
                <div className="w-12 h-12 flex items-center justify-center bg-amber-300/10 rounded-2xl">
                  📧
                </div>
                <div className="flex flex-col">
                  <h3 className="text-lg font-bold text-slate-700">Email</h3>
                  <p className="text-slate-500">info@sandtonprep.co.za</p>
                  <p className="text-slate-500">admissions@sandtonprep.co.za</p>
                  <span className="text-amber-500 text-xs font-semibold mt-2">
                    Send email
                  </span>
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
                  <span className="text-amber-500 text-xs font-semibold mt-2">
                    Get directions
                  </span>
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
                  <span className="text-amber-500 text-xs font-semibold mt-2">
                    View schedule
                  </span>
                </div>
              </div>
            </div>

            {/* Department Contacts */}
            <div className="p-6 bg-amber-200 rounded-2xl border border-stone-300">
              <h3 className="text-lg font-bold text-slate-700 mb-4">
                Department Contacts
              </h3>
              <ul className="space-y-2 text-sm text-slate-500">
                <li>
                  <span className="font-semibold text-slate-700">
                    Admissions:
                  </span>{" "}
                  admissions@sandtonprep.co.za • +27 11 234 5680
                </li>
                <li>
                  <span className="font-semibold text-slate-700">Finance:</span>{" "}
                  finance@sandtonprep.co.za • +27 11 234 5681
                </li>
                <li>
                  <span className="font-semibold text-slate-700">General:</span>{" "}
                  info@sandtonprep.co.za • +27 11 234 5678
                </li>
                <li>
                  <span className="font-semibold text-slate-700">
                    Principal:
                  </span>{" "}
                  principal@sandtonprep.co.za • +27 11 234 5682
                </li>
              </ul>
            </div>
          </div>

          {/* RIGHT: Contact Form */}
          <div className="bg-white rounded-lg shadow-sm border border-zinc-300 p-8">
            <h3 className="text-3xl font-bold text-slate-700 mb-6 flex items-center gap-2">
              ✉️ Send Message
            </h3>

            <form className="flex flex-col gap-5">
              {/* First + Last name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700">
                    First Name *
                  </label>
                  <input
                    type="text"
                    placeholder="Your first name"
                    className="w-full px-3 py-2 rounded-md bg-amber-50 border border-amber-200 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    placeholder="Your last name"
                    className="w-full px-3 py-2 rounded-md bg-amber-50 border border-amber-200 text-sm"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-slate-700">
                  Email Address *
                </label>
                <input
                  type="email"
                  placeholder="your.email@example.com"
                  className="w-full px-3 py-2 rounded-md bg-amber-50 border border-amber-200 text-sm"
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
                  className="w-full px-3 py-2 rounded-md bg-amber-50 border border-amber-200 text-sm"
                />
              </div>

              {/* Subject */}
              <div>
                <label className="block text-sm font-medium text-slate-700">
                  Subject *
                </label>
                <input
                  type="text"
                  placeholder="What is this regarding?"
                  className="w-full px-3 py-2 rounded-md bg-amber-50 border border-amber-200 text-sm"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-slate-700">
                  Message *
                </label>
                <textarea
                  rows={4}
                  placeholder="Type your message..."
                  className="w-full px-3 py-2 rounded-md bg-amber-50 border border-amber-200 text-sm"
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
                <button
                  type="button"
                  className="flex-1 bg-amber-200 border border-amber-200 text-black font-medium py-2 rounded-md hover:bg-amber-300 transition"
                >
                  Book a Visit Instead
                </button>
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
