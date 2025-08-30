"use client";

import React from "react";

interface CardProps {
  categoryLabel: string;
  title: string;
  description: string;
  ageInfo: string;
  classroomInfo: string;
  dateInfo: string;
  readButtonText?: string;
  detailsButtonText?: string;
}

const EventCard: React.FC<CardProps> = ({
  categoryLabel,
  title,
  description,
  classroomInfo,
  ageInfo,
  dateInfo,
  readButtonText = "Read Article",
  detailsButtonText = "Details",
}) => {
  return (
    <section className="flex flex-col items-center px-4 sm:px-0">
      {/* Card */}
      <div className="w-full max-w-md bg-neutral-100 rounded-xl outline outline-[1.5px] outline-zinc-300 p-4 sm:p-6 flex flex-col gap-4">
        {/* Category + Title */}
        <div className="flex flex-col gap-1.5">
          {/* Category */}
          <div className="w-fit px- py-1 bg-amber-300/10 rounded-full">
            <span className="text-amber-500 text-xs font-semibold font-['Quicksand']">
              {categoryLabel}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-slate-700 text-lg sm:text-xl md:text-2xl font-bold font-['Quicksand']">
            {title}
          </h3>

          {/* Description */}
          <p className="text-slate-500 text-sm sm:text-base font-medium font-['Quicksand'] leading-snug">
            {description}
          </p>
        </div>

        {/* Bottom Info */}
        <div className="flex flex-wrap justify-between items-center gap-2 text-slate-500 text-xs sm:text-sm font-normal font-['Inter']">
          <span>{ageInfo}</span>
          <span>{classroomInfo}</span>
          <span>{dateInfo}</span>
        </div>

        {/* Buttons */}
        <div className="flex gap-2 mt-4">
          <button className="flex-1 h-10 bg-amber-300 rounded-md outline outline-1 outline-amber-300/20 text-black text-sm sm:text-base font-bold font-['Quicksand'] hover:bg-amber-400 transition">
            {readButtonText}
          </button>

          <button className="flex-1 h-10 bg-amber-200 rounded-md outline outline-1 outline-amber-300/20 text-black text-sm sm:text-base font-medium font-['Inter'] hover:bg-amber-300 transition">
            {detailsButtonText}
          </button>
        </div>
      </div>
    </section>
  );
};

export default EventCard;
