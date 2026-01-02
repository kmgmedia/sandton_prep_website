"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, Timer, Facebook, Instagram } from "lucide-react";
import { SiTiktok } from "react-icons/si";

const Footer = () => {
  return (
    <div className="w-full bg-neutral-600 px-6 py-12 flex flex-col items-center gap-10 mt-10">
      {/* Top section */}
      <div className="w-full max-w-[1200px] flex flex-col md:flex-row flex-wrap justify-between gap-12">
        {/* Logo & description */}
        <div className="flex flex-col gap-4 md:w-64">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/assets/school-logo2.png"
              alt="Sandton"
              width={128}
              height={32}
              className="w-auto"
            />
          </Link>
          <p className="text-neutral-100 text-xs font-medium font-['Quicksand']">
            Nurturing bright minds and shaping great futures for children aged 6
            months to 10 years.
          </p>
          {/* Social Icons */}
          <div className="flex gap-2">
            <div className="w-6 h-6 bg-yellow-300 rounded flex items-center justify-center">
              <Facebook className="w-4 h-4 text-[var(--primary-800)]" />
            </div>
            <div className="w-6 h-6 bg-yellow-300 rounded flex items-center justify-center">
              <Instagram className="w-4 h-4 text-[var(--primary-800)]" />
            </div>
            <div className="w-6 h-6 bg-yellow-300 rounded flex items-center justify-center">
              <SiTiktok className="w-4 h-4 text-[var(--primary-800)]" />
            </div>
          </div>
        </div>


        {/* Quick Links */}
        <div className="flex flex-col gap-4 md:w-32">
          <h3 className="text-neutral-100 text-xl font-bold font-['Quicksand']">
            Quick Links
          </h3>
          <div className="flex flex-col gap-2">
            {[
              "Home",
              "About Us",
              "Classes & Programs",
              "Events",
              "Blog",
              "Contact",
            ].map((link, i) => (
              <span
                key={i}
                className="text-neutral-100 text-xs font-medium font-['Quicksand']"
              >
                {link}
              </span>
            ))}
          </div>
        </div>


        {/* Our Programs */}
        <div className="flex flex-col gap-4 md:w-52">
          <h3 className="text-neutral-100 text-xl font-bold font-['Quicksand']">
            Our Programs
          </h3>
          <div className="flex flex-col gap-2">
            {[
              "Toddler Care (6-18 months)",
              "Early Learning (2-4 years)",
              "Primary Education (5-10 years)",
              "Art & Craft Classes",
              "Science & Nature",
              "Music & Movement",
            ].map((program, i) => (
              <span
                key={i}
                className="text-neutral-100 text-xs font-medium font-['Quicksand']"
              >
                {program}
              </span>
            ))}
          </div>
        </div>


        {/* Contact Info */}
        <div className="flex flex-col gap-6 md:w-60">
          <h3 className="text-neutral-100 text-xl font-bold font-['Quicksand']">
            Contact Us
          </h3>
          <div className="flex flex-col gap-2 text-neutral-100 text-xs font-medium font-['Quicksand']">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-yellow-300 rounded flex items-center justify-center">
                <MapPin className="w-4 h-4 text-[var(--primary-800)]" />
              </div>
              <span>1 Egbeyemi Close, Folarin Street, Alimosho, Lagos.</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-yellow-300 rounded flex items-center justify-center">
                <Phone className="w-4 h-4 text-[var(--primary-800)]" />
              </div>
              <span>+234 915 911 6203</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-yellow-300 rounded flex items-center justify-center">
                <Mail className="w-4 h-4 text-[var(--primary-800)]" />
              </div>
              <span>info@sandtonprep.edu.ng</span>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-6 h-6 bg-yellow-300 rounded flex items-center justify-center">
                <Timer className="w-4 h-4 text-[var(--primary-800)]" />
              </div>
              <span className="leading-tight">
                Mon - Fri: 7:00 AM - 6:00 PM
                <br />
                Sat: 8:00 AM - 12:00 PM
              </span>
            </div>
          </div>
        </div>
      </div>


      {/* Bottom section */}
      <div className="w-full max-w-[1200px] border-t border-gray-500 pt-4 flex flex-col md:flex-row flex-wrap justify-between items-center gap-4 text-neutral-100 text-xs font-medium font-['Quicksand']">
        <span>© 2025 Sandton Preparatory School. All rights reserved.</span>
        <div className="flex gap-6">
          {["Privacy Policy", "Terms of Service", "Admissions Policy"].map(
            (policy, i) => (
              <span key={i}>{policy}</span>
            )
          )}
        </div>
      </div>

    </div>
  );
};

export default Footer;
