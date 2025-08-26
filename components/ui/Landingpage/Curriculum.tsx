"use client";

import React from "react";

const Curriculum = () => {
  const curriculumCards = [
    {
      title: "Infants",
      age: "6-18 months",
      desc: "Sensory exploration and bonding",
    },
    {
      title: "Toddlers",
      age: "18 months - 3 years",
      desc: "Language and motor development",
    },
    {
      title: "Preschool",
      age: "3-5 years",
      desc: "School readiness and creativity",
    },
    {
      title: "Primary",
      age: "6-10 years",
      desc: "Academic foundation and character",
    },
  ];

  const infoCards = [
    {
      title: "Upcoming Events",
      desc: "Join us for special activities and community celebrations",
      btn: "View Events",
    },
    {
      title: "School Blog",
      desc: "Educational insights and parenting tips from our experts",
      btn: "Read Blogs",
    },
    {
      title: "Get in Touch",
      desc: (
        <>
          Have questions? We&apos;d love to <br /> hear from you
        </>
      ),
      btn: "Contact Us",
    },
  ];

  return (
    <div className="flex flex-col items-center gap-16 px-4 py-12">
      {/* Title Section */}
      <div className="flex flex-col items-center gap-4 max-w-5xl text-center">
        <h2 className="text-gray-900 text-4xl sm:text-5xl md:text-6xl font-normal font-['Sandy_Kids'] tracking-widest">
          Curriculum
        </h2>
        <p className="text-slate-500 text-base sm:text-lg md:text-xl font-medium font-['Quicksand'] leading-relaxed">
          Age-appropriate learning paths designed to nurture every aspect of
          your child&apos;s development
        </p>
      </div>

      {/* Curriculum Cards - horizontal scroll on small screens */}
      <div className="flex gap-5 overflow-x-auto px-2 py-4 w-full md:flex-wrap md:justify-center md:overflow-x-visible">
        {curriculumCards.map((card, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-52 sm:w-56 md:w-64 lg:w-72 p-3 bg-neutral-100 rounded-2xl shadow-lg flex flex-col items-center gap-2"
          >
            <div className="w-14 h-14 p-3 bg-amber-300/10 rounded-2xl flex justify-center items-center">
              <div className="w-7 h-7 bg-amber-300 rounded-full"></div>
            </div>
            <div className="flex flex-col items-center gap-1 text-center">
              <h3 className="text-slate-700 text-lg sm:text-xl font-bold font-['Quicksand']">
                {card.title}
              </h3>
              <p className="text-amber-500 text-sm font-bold font-['Quicksand']">
                {card.age}
              </p>
              <p className="text-blue-950 text-xs sm:text-sm font-semibold font-['Quicksand'] leading-tight break-words">
                {card.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Explore Button */}
      <div className="flex justify-center gap-6 flex-wrap">
        <button className="px-6 py-3 bg-yellow-300 rounded-lg shadow hover:shadow-md text-gray-900 text-lg font-semibold font-['Quicksand']">
          Explore Full Curriculum
        </button>
      </div>

      {/* Info Cards on full yellow background */}
      <div className="w-full bg-yellow-300 py-10 flex justify-center gap-6 overflow-x-auto px-4">
        {infoCards.map((card, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-72 sm:w-80 md:w-96 p-4 bg-white rounded-3xl shadow-md flex flex-col items-center gap-4"
          >
            <div className="w-20 h-20 bg-amber-300/20 rounded-full flex items-center justify-center"></div>
            <h3 className="text-gray-900 text-xl sm:text-2xl font-bold font-['Quicksand'] text-center">
              {card.title}
            </h3>
            <p className="text-slate-700 text-base sm:text-lg font-medium font-['Quicksand'] text-center leading-relaxed break-words">
              {card.desc}
            </p>
            <button className="px-5 py-3 bg-yellow-400 hover:bg-yellow-500 rounded-lg shadow text-gray-900 font-semibold font-['Quicksand']">
              {card.btn}
            </button>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="flex flex-col items-center gap-6 max-w-3xl text-center px-4 mt-8">
        <h2 className="text-black text-2xl sm:text-3xl md:text-4xl font-bold font-['Quicksand'] leading-snug">
          Ready to Begin Your child&apos;s Journey?
        </h2>
        <p className="text-stone-700/80 text-base sm:text-lg md:text-xl font-medium font-['Quicksand'] leading-relaxed">
          Join the Sandton Preparatory School community and give your
          child&apos;s foundation for lifelong learning and success.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <button className="px-6 py-3 bg-yellow-300 rounded-lg shadow text-blue-950 font-semibold font-['Quicksand']">
            Explore Programs
          </button>
          <button className="px-6 py-3 bg-neutral-100 rounded-lg shadow text-gray-900 font-semibold font-['Quicksand']">
            Book a Visit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Curriculum;
