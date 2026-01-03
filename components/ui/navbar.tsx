"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close mobile menu on ESC
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, []);

  const navItems = ["about", "classes", "blog", "events", "gallery", "contact"];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-200 bg-[#FFFDEB] shadow-sm">
      <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between px-4 py-3 sm:px-6 sm:py-4 md:px-8">
        {/* Left - Logo + Name */}
        <Link
          href="/"
          className="flex items-center gap-3 sm:gap-4 min-w-[160px]"
        >
          <Image
            src="/assets/school-logo.png"
            alt="Sandton"
            width={128}
            height={32}
            className="w-auto"
          />
        </Link>

        {/* Middle - Links (Desktop) */}
        <div className="hidden lg:flex flex-1 justify-center items-center gap-6 xl:gap-10 text-base font-semibold text-gray-700">
          {navItems.map((item) => (
            <Link
              key={item}
              href={`/${item}`}
              className="hover:text-gray-900 transition-colors"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          ))}
        </div>

        {/* Right - Phone + CTA (Desktop) */}
        <div className="hidden lg:flex items-center gap-3 xl:gap-5">
          <a
            href="tel:+2349159116203"
            className="flex items-center gap-2 text-base text-gray-700 hover:text-gray-900 transition-colors"
          >
            <Phone className="h-5 w-5" />
            <span className="hidden sm:inline">+234 915 911 6203</span>
          </a>
          <Link
            href="/bookpage"
            className="rounded-full border border-yellow-300 bg-[#FFE066] px-4 py-2 text-base font-semibold text-black shadow-sm transition hover:bg-[#FFD43B] sm:px-6"
          >
            Book A Visit
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="ml-auto rounded-md p-2 text-gray-700 transition hover:bg-gray-200 lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="lg:hidden w-full border-t border-gray-200 bg-[#FFFDEB] p-6 shadow-lg">
          <div className="flex flex-col gap-4 text-base font-medium text-gray-700">
            {navItems.map((item) => (
              <Link
                key={item}
                href={`/${item}`}
                onClick={() => setMenuOpen(false)}
                className="hover:text-gray-900 transition-colors"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            ))}
            <a
              href="tel:+2349159116203"
              className="flex items-center gap-2 hover:text-gray-900 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              <Phone className="h-4 w-4" />
              +234 915 911 6203
            </a>
            <Link
              href="/bookpage"
              onClick={() => setMenuOpen(false)}
              className="rounded-full border border-yellow-300 bg-[#FFE066] px-5 py-2 text-center font-semibold text-black shadow-sm transition hover:bg-[#FFD43B]"
            >
              Book A Visit
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
