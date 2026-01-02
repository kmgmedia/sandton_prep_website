"use client";

import React from "react";

const SelectionBtn = () => {
  return (
    <section className="w-full flex justify-center px-4 pb-8">
      <div className="flex flex-wrap justify-center items-center gap-3">
        {/* All Button */}
        <div
          data-badge="false"
          data-icon="false"
          data-size="40"
          data-state="Focused"
          data-type="Secondary"
          className="px-4 py-2.5 bg-yellow-300 rounded-lg shadow-[0px_0px_0px_1px_rgba(0,0,0,0.22)] outline outline-2 outline-gray-400 flex justify-center items-center"
        >
          <span className="text-blue-950 text-sm sm:text-base md:text-lg font-semibold font-['Quicksand']">
            All
          </span>
        </div>

        {/* Other Categories */}
        {[
          "Education",
          "Parenting",
          "Development",
          "Activities",
          "Health",
          "Language",
        ].map((category, index) => (
          <div
            key={index}
            className="px-3 py-2 bg-amber-100 rounded-md outline outline-1 outline-gray-300 flex justify-center items-center"
          >
            <span className="text-black text-xs sm:text-sm md:text-base font-medium font-['Inter']">
              {category}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SelectionBtn;
