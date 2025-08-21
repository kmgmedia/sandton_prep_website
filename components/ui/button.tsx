"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full bg-[#FFFEF4] border border-gray-200 rounded-full shadow-sm mt-4 px-6 py-3 flex items-center justify-between max-w-7xl mx-auto font-sans">
      {/* Logo + Brand */}
      <div className="flex items-center gap-2">
        <Image
          src="/logo.png"
          alt="Sandton Prep School"
          width={40}
          height={40}
          className="rounded-md"
        />
        <div className="flex flex-col leading-tight">
          <span className="text-lg font-semibold">Sandton</span>
          <span className="text-sm text-gray-600">Prep. School</span>
        </div>
      </div>

      {/* Nav Links */}
      <nav className="hidden md:flex gap-8 text-gray-700 font-medium">
        <Link href="/about" className="hover:text-black">
          About
        </Link>
        <Link href="/classes" className="hover:text-black">
          Classes
        </Link>
        <Link href="/blog" className="hover:text-black">
          Blog
        </Link>
        <Link href="/events" className="hover:text-black">
          Events
        </Link>
        <Link href="/contact" className="hover:text-black">
          Contact
        </Link>
      </nav>

      {/* Phone + CTA */}
      <div className="flex items-center gap-4">
        <a
          href="tel:+2349159116203"
          className="flex items-center gap-1 text-sm text-gray-700 hover:text-black"
        >
          <Phone className="w-4 h-4" />
          +234 915 911 6203
        </a>
        <Link
          href="/visit"
          className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium px-4 py-2 rounded-full transition"
        >
          Book A Visit
        </Link>
      </div>
    </header>
  );
}
