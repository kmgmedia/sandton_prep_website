"use client";

import React from "react";

const SubFooter = ({
  heading = "Ready to Join Our Community?",
  subheading = "Experience the difference of quality early childhood education.<br />Schedule a visit to see our approach in action.",
  primaryBtnText = "Book A Visit",
  secondaryBtnText = "Contact Us",
  containerClass = "bg-yellow-300",
  maxWidth = "max-w-4xl",
  paddingY = "py-12",
}) => {
  return (
    <div className={`w-full ${containerClass} ${paddingY} mt-12 flex justify-center`}>
      <div
        className={`${maxWidth} w-full px-6 flex flex-col items-center text-center`}
      >
        {/* Heading */}
        <h2 className="text-gray-900 text-3xl sm:text-4xl font-bold font-['Quicksand'] leading-snug">
          {heading}
        </h2>

        {/* Subheading */}
        <p
          className="text-gray-900 text-base sm:text-lg font-medium font-['Quicksand'] leading-relaxed mt-2"
          dangerouslySetInnerHTML={{ __html: subheading }}
        />

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 mt-4">
          <button className="px-6 py-3 rounded-lg border-2 border-blue-950 text-blue-950 font-semibold text-lg font-['Quicksand'] hover:bg-blue-50 transition">
            {primaryBtnText}
          </button>
          <button className="px-6 py-3 rounded-lg bg-neutral-100 shadow text-gray-900 font-semibold text-lg font-['Quicksand'] hover:bg-neutral-200 transition">
            {secondaryBtnText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubFooter;
