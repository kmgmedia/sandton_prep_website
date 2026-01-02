"use client";

import Link from "next/link";
import Image from "next/image";
import Button from "@/components/ui/button";




export default function VisitSection() {
  return (
    <main className="bg-[var(--neutrals-700)] w-screen py-16 flex justify-center">
      <div className="max-w-6xl w-full px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Column */}
        <div className="text-white lg:items-start flex flex-col gap-6">
          <h2
            className="text-4xl md:text-5xl font-sandyKids font-bold tracking-wide text-white"
            style={{ WebkitTextStroke: 0 }}
          >
            Come Over And <br />
            Look Around
          </h2>
          <p className="text-gray-300 text-lg font-['Quicksand'] text-left">
            Lorem ipsum dolor sit amet consectetur. Mauris donec quam maecenas
            arcu adipiscing integer vulputate interdum pellentesque. Vitae
            interdum sed id convallis.
          </p>
          <div className="flex gap-4 mt-4 flex-wrap">
            <Link href="/contact">
              <button className="px-6 py-3 border border-white rounded-lg hover:bg-white hover:text-gray-700 transition">
                Let&apos;s Get in Touch
              </button>
            </Link>
            <Link href="/bookpage">
              <Button label="Book a Visit" showArrow />
            </Link>
          </div>
        </div>

        {/* Right Column - Placeholder for Image */}
        <div>
          <Image
            src="/assets/kids.jpg" // remove /public
            alt="Kids playing"
            width={800} // set your desired width
            height={320} // set your desired height
            className="rounded-2xl object-cover"
          />
        </div>
      </div>
    </main>
  );
}
