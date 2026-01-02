"use client";

import React from "react";

const Calender = () => {
  return (
    <>
      {/* Top Section */}
      <section className="flex justify-center px-4 py-2 bg-gray-50">
        <div className="w-full max-w-5xl flex flex-col lg:flex-row gap-8 lg:gap-16">
          {/* Left Form Section */}
          <div className="flex-1 flex flex-col gap-8 bg-white p-6 rounded-lg shadow-lg">
            {/* Schedule Your Visit */}
            <div className="flex flex-col gap-6">
              <h2 className="text-2xl font-bold text-slate-700 font-['Quicksand'] leading-loose text-center lg:text-left">
                Schedule Your Visit
              </h2>

              {/* Personal Info */}
              <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                {/* First Column */}
                <div className="flex-1 flex flex-col gap-4">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-slate-700">
                      First Name *
                    </label>
                    <input
                      type="text"
                      placeholder="Your first name"
                      className="h-10 px-3 py-2 bg-amber-50 rounded-md outline outline-1 outline-offset-[-1px] outline-amber-300/20 text-sm text-neutral-400 w-full"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-slate-700">
                      Email *
                    </label>
                    <input
                      type="email"
                      placeholder="your.email@example.com"
                      className="h-10 px-3 py-2 bg-amber-50 rounded-md outline outline-1 outline-offset-[-1px] outline-amber-300/20 text-sm text-neutral-400 w-full"
                    />
                  </div>
                </div>

                {/* Second Column */}
                <div className="flex-1 flex flex-col gap-4">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-slate-700">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      placeholder="Your last name"
                      className="h-10 px-3 py-2 bg-amber-50 rounded-md outline outline-1 outline-offset-[-1px] outline-amber-300/20 text-sm text-neutral-400 w-full"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-slate-700">
                      Phone *
                    </label>
                    <input
                      type="text"
                      placeholder="+234 11 xxx xxxx"
                      className="h-10 px-3 py-2 bg-amber-50 rounded-md outline outline-1 outline-offset-[-1px] outline-amber-300/20 text-sm text-neutral-400 w-full"
                    />
                  </div>
                </div>
              </div>

              {/* Child Information */}
              <div className="flex flex-col gap-6">
                <h3 className="text-lg font-semibold text-slate-700">
                  Child Information
                </h3>
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1 flex flex-col gap-2">
                    <label className="text-sm font-medium text-slate-700">
                      Child&apos;s Name
                    </label>
                    <input
                      type="text"
                      placeholder="Child&apos;s full name"
                      className="h-10 px-3 py-2 bg-amber-50 rounded-md outline outline-1 outline-offset-[-1px] outline-amber-300/20 text-sm text-neutral-400 w-full"
                    />
                  </div>
                  <div className="flex-1 flex flex-col gap-2">
                    <label className="text-sm font-medium text-slate-700">
                      Child&apos;s Age *
                    </label>
                    <select className="h-10 px-3 py-2 bg-amber-50 rounded-md outline outline-1 outline-offset-[-1px] outline-amber-300/20 text-sm text-black w-full">
                      <option>Select age</option>
                      {Array.from({ length: 12 }, (_, i) => i + 1).map(
                        (age) => (
                          <option key={age} value={age}>
                            {age}
                          </option>
                        )
                      )}
                    </select>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-slate-700">
                    Current School/Childcare (if any)
                  </label>
                  <input
                    type="text"
                    placeholder="Current educational setting"
                    className="h-10 px-3 py-2 bg-amber-50 rounded-md outline outline-1 outline-offset-[-1px] outline-amber-300/20 text-sm text-neutral-400 w-full"
                  />
                </div>
              </div>

              {/* Preferred Date & Time */}
              <div className="flex flex-col gap-4">
                <label className="text-sm font-medium text-slate-700">
                  Select Date *
                </label>
                <input
                  type="date"
                  className="p-3 bg-white rounded-md shadow-sm w-full"
                />

                <label className="text-sm font-medium text-slate-700 mt-4">
                  Preferred Time *
                </label>
                <div className="flex flex-wrap gap-2">
                  {["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM"].map(
                    (time, idx) => (
                      <div
                        key={idx}
                        className="w-28 h-10 px-4 py-2 bg-amber-50 rounded-md outline outline-1 outline-offset-[-1px] outline-amber-300/20 flex items-center justify-center text-xs text-slate-500 font-medium"
                      >
                        {time}
                      </div>
                    )
                  )}
                </div>
              </div>

              {/* Additional Information */}
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-slate-700">
                    Number of Adults Attending
                  </label>
                  <input
                    type="number"
                    placeholder="Select number"
                    className="h-10 px-3 py-2 bg-amber-50 rounded-md outline outline-1 outline-offset-[-1px] outline-amber-300/20 text-sm text-black w-full"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-slate-700">
                    Special Requirements or Questions
                  </label>
                  <textarea className="h-20 bg-amber-50 rounded-md border border-amber-300/20 p-2 w-full"></textarea>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mt-4">
                  <button className="flex-1 h-10 bg-amber-300 rounded-md font-medium text-black">
                    Book Visit
                  </button>
                  <button className="flex-1 h-10 bg-amber-50 rounded-md outline outline-1 outline-amber-300 font-medium text-black">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>

          
          {/* Right Side Info Box */}
          <div className="w-full lg:w-96 flex-shrink-0 flex flex-col gap-7 mt-8 lg:mt-0">
            <div className="h-auto px-6 py-6 bg-white rounded-lg shadow-sm flex flex-col gap-3">
              <h3 className="text-xl font-bold text-slate-700">
                What to Expect
              </h3>
              {[
                "Tour our beautiful, secure facilities",
                "Meet our experienced teachers",
                "See children engaged in learning",
                "Discuss curriculum and approach",
                "Ask questions about enrollment",
                "Get a feel for our community",
              ].map((item, idx) => (
                <div key={idx} className="flex gap-3 items-center">
                  <div className="w-4 h-4 border border-amber-300 rounded-sm"></div>
                  <p className="text-base font-medium text-slate-500 leading-snug">
                    {item}
                  </p>
                </div>
              ))}

              {/* Need Help Card */}
              <div className="mt-6 w-full bg-gray-300/20 rounded-lg shadow-[0_1px_2px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] outline-neutral-200 p-4 flex flex-col gap-3">
                <h4 className="text-xl font-bold text-slate-700 font-['Quicksand']">
                  Need Help?
                </h4>
                <div className="flex flex-col gap-2">
                  <div>
                    <div className="text-black text-sm font-semibold font-['Quicksand'] leading-tight">
                      Call us directly:
                    </div>
                    <div className="text-slate-500 text-sm font-semibold font-['Quicksand'] leading-tight">
                      Monday to Friday: 7:00 AM - 6:00 PM
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-black text-sm font-semibold font-['Quicksand'] leading-tight">
                      Email:
                    </span>
                    <span className="text-slate-500 text-sm font-medium font-['Quicksand']">
                      info@sandtonprep.edu.ng
                    </span>
                  </div>
                  <div className="text-slate-500 text-xs font-semibold font-['Quicksand'] leading-tight">
                    Monday to Friday: 7:00 AM - 6:00 PM
                  </div>
                </div>
                <button className="mt-2 w-full h-9 bg-amber-200 rounded-md outline outline-1 outline-offset-[-1px] outline-amber-300/20 text-black text-xs font-semibold font-['Quicksand']">
                  Contact Us Instead
                </button>
              </div>

              {/* Parent Reviews Card and Testimonials Dynamically */}
              <div className="mt-6 w-full bg-white rounded-lg shadow-[0_1px_2px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] outline-neutral-200 p-4 flex flex-col gap-3">
                <h4 className="text-xl font-bold text-slate-700 font-['Quicksand']">
                  Parent Reviews
                </h4>
                <div className="flex flex-col gap-6">
                  {[
                    {
                      review:
                        "The visit gave us complete confidence in our choice. The staff were welcoming and the facilities are outstanding.",
                      name: "Sarah Mitchell",
                    },
                    {
                      review:
                        "Seeing the classes in action was exactly what we needed. Our daughter started the next month!",
                      name: "David Chen",
                    },
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-2 items-start">
                      <div className="w-1 h-16 border-l-4 border-amber-300/20"></div>
                      <div className="flex flex-col gap-2">
                        <div className="flex gap-1">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <div
                              key={i}
                              className="w-3 h-3 bg-amber-300 rounded-full"
                            ></div>
                          ))}
                        </div>
                        <p className="text-slate-500 text-sm font-medium font-['Quicksand'] leading-none">
                          {item.review}
                        </p>
                        <p className="text-slate-500 text-sm font-semibold font-['Quicksand'] leading-none">
                          - {item.name}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Calender;
