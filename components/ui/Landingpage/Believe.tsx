"use client";

import React from "react";

const Believe = () => {
  return (
    <div className="flex justify-center py-20 px-4">
      {/* Yellow container */}
      <div className="w-full max-w-6xl px-6 sm:px-10 md:px-16 py-7 bg-yellow-300 rounded-[30px] flex flex-col items-center gap-8">
        {/* Content Wrapper */}
        <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-12 md:gap-20 w-full">
          {/* Left Column - Cards */}
          <div className="relative flex flex-col md:flex-row gap-6 md:gap-10 w-full justify-center">
            {/* First Column */}
            <div className="flex flex-col gap-6 md:mt-0 items-center md:items-start">
              {/* Card - Community */}
              <div className="p-3 bg-amber-50 rounded-[20px] flex flex-col gap-3 shadow-md w-full max-w-xs">
                <div className="w-14 h-14 bg-stone-300 rounded-full mx-auto md:mx-0" />
                <div className="flex flex-col gap-1 text-center md:text-left">
                  <h3 className="text-blue-950 text-xl sm:text-2xl font-semibold font-['Quicksand']">
                    Community
                  </h3>
                  <p className="text-blue-950 text-xs sm:text-sm font-medium font-['Quicksand']">
                    Building strong connections between families, teachers, and
                    children to create a supportive learning environment.
                  </p>
                </div>
              </div>

              {/* Card - Respect */}
              <div className="p-3 bg-amber-50 rounded-[20px] flex flex-col gap-3 shadow-md w-full max-w-xs">
                <div className="w-14 h-14 bg-stone-300 rounded-full mx-auto md:mx-0" />
                <div className="flex flex-col gap-1 text-center md:text-left">
                  <h3 className="text-blue-950 text-xl sm:text-2xl font-semibold font-['Quicksand']">
                    Respect
                  </h3>
                  <p className="text-blue-950 text-xs sm:text-sm font-medium font-['Quicksand']">
                    Teaching children to value themselves, others, and their
                    environment through positive interactions.
                  </p>
                </div>
              </div>
            </div>

            {/* Second Column */}
            <div className="flex flex-col gap-6 md:mt-10 items-center md:items-start">
              {/* Card - Creativity */}
              <div className="p-3 bg-amber-50 rounded-[20px] flex flex-col gap-3 shadow-md w-full max-w-xs">
                <div className="w-14 h-14 bg-stone-300 rounded-full mx-auto md:mx-0" />
                <div className="flex flex-col gap-1 text-center md:text-left">
                  <h3 className="text-blue-950 text-xl sm:text-2xl font-semibold font-['Quicksand']">
                    Creativity
                  </h3>
                  <p className="text-blue-950 text-xs sm:text-sm font-medium font-['Quicksand']">
                    Encouraging imagination and artistic expression through
                    various creative activities and programs.
                  </p>
                </div>
              </div>

              {/* Card - Growth */}
              <div className="p-3 bg-amber-50 rounded-[20px] flex flex-col gap-3 shadow-md w-full max-w-xs">
                <div className="w-14 h-14 bg-stone-300 rounded-full mx-auto md:mx-0" />
                <div className="flex flex-col gap-1 text-center md:text-left">
                  <h3 className="text-blue-950 text-xl sm:text-2xl font-semibold font-['Quicksand']">
                    Growth
                  </h3>
                  <p className="text-blue-950 text-xs sm:text-sm font-medium font-['Quicksand']">
                    Fostering continuous learning and development at every stage
                    of a child&apos;s educational journey.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Text */}
          <div className="w-full md:w-96 flex flex-col gap-5 text-center md:text-left">
            <h2 className="text-blue-950 text-3xl sm:text-4xl md:text-5xl font-normal font-['Sandy_Kids'] tracking-widest whitespace-nowrap">
              What we believe in
            </h2>
            <p className="text-blue-950 text-base sm:text-lg font-semibold font-['Quicksand']">
              Lorem ipsum dolor sit amet consectetur. Mauris donec quam maecenas
              arcu adipiscing integer vulputate interdum pellentesque. Vitae
              interdum sed id convallis.
            </p>
            <p className="text-blue-950 text-base sm:text-lg font-semibold font-['Quicksand']">
              Lorem ipsum dolor sit amet consectetur. Mauris donec quam maecenas
              arcu adipiscing integer vulputate interdum pellentesque. Vitae
              interdum sed id convallis. Integer vulputate interdum
              pellentesque. Vitae interdum sed id convallis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Believe;
