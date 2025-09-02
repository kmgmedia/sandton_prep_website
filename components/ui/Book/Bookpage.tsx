"use client";

import React from "react";
import Schedule from "../Schedule/Schedule";
import Footer from "../Landingpage/Footer";

const Bookpage = () => {
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
            Book A Visit
          </h2>
          <p className="text-gray-600 font-medium max-w-3xl mx-auto mb-12 sm:mb-16 text-base sm:text-lg leading-relaxed font-['Quicksand']">
            Experience our nurturing environment firsthand. Schedule <br /> your
            personalized campus tour today.
          </p>
        </div>
      </section>
      {/* Schedule Section called from Calendar Card.tsx */}
      <div>
        <Schedule />
      </div>
      {/* Footer Section */}
      <div className="mt-24">
        <Footer />
      </div>
    </>
  );
};

export default Bookpage;
