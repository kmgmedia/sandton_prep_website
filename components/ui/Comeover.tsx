    "use client";

    import { ArrowRight } from "lucide-react";
    import Button from "./button";

    export default function VisitSection() {
    return (
      <section className="bg-[var(--neutrals-700)] w-screen py-16 flex justify-center">
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
              <button className="px-6 py-3 border border-white rounded-lg hover:bg-white hover:text-gray-700 transition">
                Let’s Get in Touch
              </button>
              <Button
                label="Book a Visit"
                onClick={() => alert("Book a Visit pressed!")}
                showArrow
              />
            </div>
          </div>

          {/* Right Column - Placeholder for Image */}
          <div className="w-full h-64 md:h-80 bg-gray-400 rounded-2xl"></div>
        </div>
      </section>
    );
    }
