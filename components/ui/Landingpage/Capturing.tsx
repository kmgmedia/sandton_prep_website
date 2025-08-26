"use client";

import React from "react";
import Image from "next/image";

export default function Capturing() {
  const stats = [
    { number: "05+", label: "Years of Experience" },
    { number: "10+", label: "Expert Teachers" },
    { number: "100+", label: "Kids & Students" },
    { number: "95%", label: "Parents Satisfaction" },
  ];

  return (
    <div className="w-full flex flex-col justify-start items-center gap-10 mt-16 px-4">
      {/* Title */}
      <div className="text-center text-gray-900 text-3xl sm:text-4xl md:text-6xl font-normal font-['Sandy_Kids'] tracking-wide max-w-4xl">
        Capturing moment of <br /> Joy and Learning
      </div>

      {/* Shapes & Clouds */}
      <div className="relative w-full max-w-6xl h-[300px] sm:h-[400px] md:h-[473px]">
        {/* Shape Left */}
        <div className="absolute w-60 sm:w-80 md:w-[480px] h-40 sm:h-56 md:h-72 -rotate-12 bg-neutral-600 rounded-3xl left-4 sm:left-20 md:left-40 top-20 sm:top-24"></div>

        {/* Shape Right */}
        <div className="absolute w-52 sm:w-72 md:w-96 h-40 sm:h-52 md:h-64 rotate-12 bg-zinc-400 rounded-3xl right-4 sm:right-20 md:right-40 top-10 sm:top-16"></div>

        {/* Cloud Left */}
        <div className="absolute w-24 sm:w-28 md:w-32 left-6 sm:left-20 md:left-14 top-24 sm:top-12">
          <Image
            src="https://res.cloudinary.com/ds2h3iwys/image/upload/v1755915410/Sandton%20Preparatory%20School%20Web%20Images/Hero-page-images/cloud-1_uyf0ti.png"
            alt="cloud"
            width={200}
            height={160}
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Cloud Right */}
        <div className="absolute w-24 sm:w-28 md:w-32 right-6 sm:right-20 md:right-14 top-60 sm:top-30">
          <Image
            src="https://res.cloudinary.com/ds2h3iwys/image/upload/v1755915410/Sandton%20Preparatory%20School%20Web%20Images/Hero-page-images/cloud-1_uyf0ti.png"
            alt="cloud"
            width={200}
            height={160}
            className="w-full h-auto object-contain"
          />
        </div>
      </div>

      {/* Stats */}
      <div className="w-full px-2 py-5 flex flex-col justify-center items-center gap-8">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-6">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="w-36 sm:w-44 md:w-52 flex flex-col justify-start items-center gap-3"
            >
              <div className="text-center text-slate-700 text-2xl sm:text-3xl md:text-4xl font-semibold font-['Quicksand']">
                {stat.number}
              </div>
              <div className="w-full h-12 relative bg-yellow-300 rounded-[10px] shadow-[0px_0px_0px_1px_rgba(0,0,0,0.22)] flex items-center justify-center px-2">
                <div className="text-center text-gray-900 text-sm sm:text-base md:text-lg font-semibold font-['Quicksand']">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
