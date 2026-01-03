"use client";

import React from "react";
import Image from "next/image";

const Believe = () => {
  return (
    <div className="flex justify-center py-20 px-4">
      {/* Yellow container */}
      <div className="w-full max-w-6xl px-6 sm:px-10 md:px-20 py-7 bg-yellow-300 rounded-[30px] flex flex-col items-center gap-8">
        {/* Content Wrapper */}
        <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-12 md:gap-20 w-full">
          {/* Left Column - Cards */}
          <div className="relative flex flex-col md:flex-row gap-6 md:gap-10 w-full justify-center">
            {/* First Column */}
            <div className="flex flex-col gap-6 md:mt-0 items-center md:items-start">
              {/* Card - Community */}
              <div className="p-3 bg-amber-50 rounded-[20px] flex flex-col gap-3 shadow-md w-full max-w-xs">
                <div className="w-14 h-14 bg-stone-300 rounded-full mx-auto md:mx-0 overflow-hidden border-4 border-yellow-400">
                  <Image
                    src="https://res.cloudinary.com/ds2h3iwys/image/upload/v1767394612/Sandton%20Preparatory%20School%20Web%20Images/Hero-page-images/ChatGPT_Image_Jan_2_2026_11_56_32_PM_eeipz9.png"
                    alt="Community"
                    width={56}
                    height={56}
                    className="w-full h-full object-cover"
                  />
                </div>
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
                <div className="w-14 h-14 bg-stone-300 rounded-full mx-auto md:mx-0 overflow-hidden border-4 border-yellow-400">
                  <Image
                    src="https://res.cloudinary.com/ds2h3iwys/image/upload/v1767397178/Sandton%20Preparatory%20School%20Web%20Images/Hero-page-images/Gemini_Generated_Image_g73rljg73rljg73r_aqaydk.png"
                    alt="Respect"
                    width={56}
                    height={56}
                    className="w-full h-full object-cover"
                  />
                </div>
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
                <div className="w-14 h-14 bg-stone-300 rounded-full mx-auto md:mx-0 overflow-hidden border-4 border-yellow-400">
                  <Image
                    src="https://res.cloudinary.com/ds2h3iwys/image/upload/v1767397026/Sandton%20Preparatory%20School%20Web%20Images/Hero-page-images/Gemini_Generated_Image_elauolelauolelau_ughlyu.png"
                    alt="Creativity"
                    width={56}
                    height={56}
                    className="w-full h-full object-cover"
                  />
                </div>
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
                <div className="w-14 h-14 bg-stone-300 rounded-full mx-auto md:mx-0 overflow-hidden border-4 border-yellow-400">
                  <Image
                    src="https://res.cloudinary.com/ds2h3iwys/image/upload/v1767397548/Sandton%20Preparatory%20School%20Web%20Images/Hero-page-images/ChatGPT_Image_Jan_3_2026_12_45_29_AM_n7k8so.png"
                    alt="Growth"
                    width={56}
                    height={56}
                    className="w-full h-full object-cover"
                  />
                </div>
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
            <h4
              className="font-sandyKids font-bold text-4xl md:text-5xl text-gray-900 mb-2 tracking-wider"
              style={{ WebkitTextStroke: 0 }}
            >
              What we believe in
            </h4>
            <p className="text-blue-950 text-base sm:text-md font-semibold font-['Quicksand']">
              Lorem ipsum dolor sit amet consectetur. Mauris donec quam maecenas
              arcu adipiscing integer vulputate interdum pellentesque. Vitae
              interdum sed id convallis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Believe;
