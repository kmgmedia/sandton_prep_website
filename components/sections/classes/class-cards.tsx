"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Clock, Star, User2Icon } from "lucide-react";

const ClassCard = ({
  title = "Toddler Class",
  ageRange = "6-18 Months",
  description = "A gentle introduction to structured learning through sensory play and exploration.",
  schedule = "9:00 AM - 12:00 PM",
  maxChildren = "Max 8 children",
  keyFeatures = [
    "Sensory play activities",
    "Motor skill development",
    "Music and movement",
    "Social interaction",
    "Safe exploration",
  ],
  curriculumHighlights = "Tummy time and crawling, Sensory bins and textures, Simple songs and rhymes",
  primaryBtnText = "Book Class",
  secondaryBtnText = "Visit First",
  containerClass = "bg-amber-50/60",
}) => {
  const router = useRouter();

  const handleBookClass = () => {
    router.push("/contact");
  };

  const handleVisitFirst = () => {
    router.push("/bookpage");
  };
  return (
    <div
      className={`w-full max-w-[453px] p-4 ${containerClass} rounded-xl outline outline-[1.6px] outline-zinc-300 flex justify-center`}
    >
      <div className="h-full flex flex-col justify-between gap-4  px-2">
        {/* Top section */}
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 p-4 bg-amber-300/10 rounded-2xl flex justify-center items-center">
            {/* Placeholder for icon */}
            <div className="w-8 h-8 relative overflow-hidden">
              <div className="w-0 h-5 absolute left-[16px] top-[9.33px] outline outline-[2.67px] outline-offset-[-1.33px] outline-amber-300"></div>
              <div className="w-7 h-6 absolute left-[2.67px] top-[4px] outline outline-[2.67px] outline-offset-[-1.33px] outline-amber-300"></div>
            </div>
          </div>
          <div className="flex flex-col gap-1 items-start">
            <div className="text-slate-700 text-2xl font-bold font-['Quicksand']">
              {title}
            </div>
            <div className="text-amber-500 text-lg font-bold font-['Quicksand']">
              {ageRange}
            </div>
          </div>
        </div>

        {/* Description and schedule */}
        <div className="flex flex-col gap-4">
          <p className="text-slate-500 text-start font-medium font-['Quicksand']">
            {description}
          </p>
          <div className="flex gap-4">
            <div className="flex items-center gap-2 text-slate-500 text-base font-medium font-['Quicksand']">
              <div>
                <Clock className="w-4 h-4 relative overflow-hidden" />
                <div className="w-3.5 h-3.5 absolute left-[1.33px] top-[1.33px] outline outline-[1.33px] outline-offset-[-0.67px] outline-slate-500"></div>
                <div className="w-[2.67px] h-1.5 absolute left-[8px] top-[4px] outline outline-[1.33px] outline-offset-[-0.67px] outline-slate-500"></div>
              </div>
              {schedule}
            </div>
            <div className="flex items-center gap-2 text-slate-500 text-base font-medium font-['Quicksand']">
              <div>
                <User2Icon className="w-4 h-4 relative overflow-hidden" />
                <div className="w-3.5 h-3.5 absolute left-[1.33px] top-[1.33px] outline outline-[1.33px] outline-offset-[-0.67px] outline-slate-500"></div>
                <div className="w-[2.67px] h-1.5 absolute left-[8px] top-[4px] outline outline-[1.33px] outline-offset-[-0.67px] outline-slate-500"></div>
              </div>
              {maxChildren}
            </div>
          </div>
        </div>

        {/* Key features */}
        <div className="flex flex-col gap-3">
          <div className="text-slate-700 text-start font-bold font-['Quicksand']">
            Key Features:
          </div>
          <ul className="flex flex-col gap-1.5">
            {keyFeatures.map((feature, index) => (
              <li
                key={index}
                className="flex items-center gap-1.5 text-slate-500 text-xs font-medium font-['Quicksand']"
              >
                <div className=" text-yellow-500 w-3 h-3 relative overflow-hidden">
                  <Star className="w-full h-full" />
                </div>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Curriculum Highlights */}
        <div className="flex flex-col gap-2">
          <div className="text-slate-700 text-start font-bold font-['Quicksand']">
            Curriculum Highlights:
          </div>
          <p className="text-slate-500 text-start font-medium font-['Quicksand'] leading-snug">
            {curriculumHighlights}
          </p>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-4">
          <button
            onClick={handleBookClass}
            className="flex-1 h-10 bg-[var(--secondary-500)] rounded-md flex justify-center items-center text-black font-bold font-['Quicksand'] hover:bg-yellow-400 transition cursor-pointer"
          >
            {primaryBtnText}
          </button>
          <button
            onClick={handleVisitFirst}
            className="w-24 h-10 bg-amber-200 rounded-md outline outline-1 outline-amber-300/20 flex justify-center items-center text-black text-sm font-medium hover:bg-amber-300 transition cursor-pointer"
          >
            {secondaryBtnText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
