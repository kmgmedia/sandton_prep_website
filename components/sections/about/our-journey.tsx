"use client";

import React from "react";

const timelineData = [
  { year: "2019", text: "Sandton Preparatory School founded", side: "left" },
  { year: "2020", text: "Achieved Outstanding Ofsted rating", side: "right" },
  { year: "2021", text: "Expanded to include infant care", side: "left" },
  { year: "2022", text: "Introduced forest school program", side: "right" },
  { year: "2023", text: "Opened second campus location", side: "left" },
  { year: "2024", text: "Celebrated 100+ happy families", side: "right" },
  { year: "2025", text: "Launched innovative learning programs", side: "left" },
  { year: "2026", text: "Recognized for community impact", side: "right" },
];

export default function JourneyTimeline() {
  return (
    <section className="w-full bg-neutral-100 py-16 px-6 flex justify-center">
      <div className="w-full max-w-5xl flex flex-col items-center gap-12">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-2">
          <h2 className="text-slate-700 text-4xl font-bold font-['Quicksand'] leading-tight">
            Our Journey
          </h2>
          <p className="text-slate-500 text-lg font-medium font-['Quicksand']">
            Growing stronger every year
          </p>
        </div>

        {/* Timeline */}
        <div className="relative w-full">
          {/* Center line (desktop only) */}
          <div className="hidden md:block absolute left-1/2 top-0 -translate-x-1/2 h-full w-1 bg-amber-300/30"></div>

          {/* Vertical line (mobile only) */}
          <div className="absolute md:hidden left-3 top-0 h-full w-1 bg-amber-300/30"></div>

          <div className="flex flex-col gap-12">
            {timelineData.map((item, index) => (
              <div
                key={index}
                className={`relative flex w-full items-center ${
                  item.side === "left"
                    ? "md:justify-start md:pr-12"
                    : "md:justify-end md:pl-12"
                }`}
              >
                {/* Circle Marker */}
                {/* Mobile: circle sits on vertical line */}
                <div className="md:hidden relative z-10 flex-shrink-0 w-6 h-6 mr-4 bg-amber-300 rounded-full border-4 border-yellow-400"></div>

                {/* Desktop: circle sits in center line */}
                <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-amber-300 rounded-full border-4 border-yellow-400"></div>

                {/* Card */}
                <div className="text-start w-full max-w-sm bg-yellow-300 rounded-lg shadow p-3 flex flex-col gap-1 border-2 border-amber-300/10">
                  <h3 className="text-3xl font-semibold text-neutral-600 font-['Quicksand']">
                    {item.year}
                  </h3>
                  <p className="text-base text-slate-800 font-['Quicksand']">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
