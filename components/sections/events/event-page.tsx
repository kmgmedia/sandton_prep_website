"use client";

import { useRouter } from "next/navigation";
import React from "react";
import SelectionBtn from "../blog/selection-btn";
import EventCard from "./event-cards";
import Footer from "../shared/footer";
import SubFooter from "../about/sub-footer";

const EventPage = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/contact");
  };

  const handleNavigation = (label: string) => {
    switch (label) {
      case "Read our Blog":
        router.push("/blog");
        break;
      case "Explore Classes":
        router.push("/classes");
        break;
      case "Book a Visit":
        router.push("/bookpage");
        break;
    }
  };

  return (
    <>
      {/* Top Section */}
      <section className="bg-slate-50 py-16 sm:py-20 md:py-24 px-4 sm:px-6 flex justify-center">
        <div className="max-w-6xl w-full text-center">
          {/* Heading */}
          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 font-sandyKids tracking-wide"
            style={{ WebkitTextStroke: 0 }}
          >
            School Event
          </h2>
          <p className="text-gray-600 font-medium max-w-3xl mx-auto mb-12 sm:mb-16 text-base sm:text-lg leading-relaxed font-['Quicksand']">
            Join us for exciting educational activities, celebrations, and
            community gatherings
          </p>

          {/* CTA Button */}
          <div
            data-badge="false"
            data-icon="false"
            data-size="56"
            data-state="Focused"
            data-type="Secondary"
            className="h-14 px-6 py-3 bg-yellow-300 rounded-[10px] shadow-[0px_0px_0px_1px_rgba(0,0,0,0.22)] inline-flex justify-center items-center gap-2.5 overflow-hidden"
          >
            <div className="flex justify-start items-center gap-2">
              <div className="text-blue-950 text-lg font-semibold font-['Quicksand']">
                Get Event Updates
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Featured Section */}
      <section className="flex justify-center px-4 sm:px-6">
        <div className="max-w-4xl w-full bg-amber-300/5 rounded-3xl outline outline-1 outline-offset-[-1px] outline-amber-300/10 flex flex-col justify-start items-start gap-5 p-6 sm:p-8">
          {/* Badge */}
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 flex items-center justify-center">
              <div className="w-4 h-4 outline outline-[1.5px] outline-offset-[-0.5px] outline-amber-300"></div>
            </div>
            <span className="text-amber-300 text-base font-bold font-['Quicksand']">
              Featured Post
            </span>
          </div>

          {/* Content */}
          <div className="flex flex-col gap-3.5 w-full">
            <h3 className="text-slate-700 text-2xl sm:text-3xl md:text-4xl font-bold font-['Quicksand'] leading-snug">
              The Importance of Play-Based Learning in Early Childhood
            </h3>
            <p className="text-slate-500 text-base sm:text-lg font-medium font-['Quicksand'] leading-relaxed">
              Discover how play-based learning approaches foster creativity,
              social skills, and cognitive development in young children.
            </p>
          </div>

          {/* Footer Info */}
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center w-full gap-4">
            {/* Author + Date */}
            <div className="flex flex-wrap items-center gap-5 text-sm text-slate-500 font-normal font-['Quicksand']">
              <span>Sarah Johnson</span>
              <span>March 15, 2024</span>
              <span>5 min read</span>
            </div>

            {/* Button */}
            <div className="flex gap-2">
              <button className="h-10 px-4 py-2.5 bg-yellow-300 rounded-lg shadow-sm text-blue-950 text-sm sm:text-base font-semibold font-['Quicksand'] hover:bg-yellow-400 transition">
                Read More
              </button>
              <button className="h-10 px-4 py-2.5 bg-yellow-100 rounded-lg shadow-sm text-blue-950 text-sm sm:text-base font-semibold font-['Quicksand'] hover:bg-yellow-200 transition">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-8 sm:pt-10 md:pt-12 pb-16 sm:pb-20 md:pb-24 px-4 sm:px-6">
        <div>
          <SelectionBtn />
        </div>

        <div className="w-full flex justify-center items-center px-4">
          <div className="max-w-lg flex flex-col justify-start items-center gap-2 text-center">
            <div className="text-slate-700 text-2xl sm:text-3xl md:text-4xl font-bold font-['Quicksand'] leading-snug sm:leading-[44px] md:leading-[56px]">
              Upcoming Events list
            </div>
            <div className="text-slate-500 text-sm sm:text-base md:text-lg font-medium font-['Quicksand'] leading-relaxed">
              Don&apos;t miss these exciting upcoming activities
            </div>
          </div>
        </div>

        {/* Event Cards*/}
        <div className="pt-6 pb-12 grid grid-cols-1 sm:grid-cols-2 justify-items-center gap-6 px-4 max-w-[1000px] mx-auto">
          <div className="w-full max-w-[480px]">
            <EventCard
              categoryLabel="Academic"
              title="Parent-Teacher Conference Week"
              description="One-on-one meetings to discuss your child's progress and development."
              classroomInfo="Individual Classrooms"
              ageInfo="All Ages"
              dateInfo="April 22-26, 2025"
              readButtonText="Read Article"
              detailsButtonText="Details"
            />
          </div>

          <div className="w-full max-w-[480px]">
            <EventCard
              categoryLabel="Educational"
              title="Nature Discovery Day"
              description="Outdoor exploration activities focusing on environmental awareness and nature appreciation."
              classroomInfo="School Garden & Playground"
              ageInfo="2-10 years"
              dateInfo="May 3, 2025"
              readButtonText="Read Article"
              detailsButtonText="Details"
            />
          </div>

          <div className="w-full max-w-[480px]">
            <EventCard
              categoryLabel="Celebration"
              title="Mother's Day Celebration"
              description="Special performance and activities to celebrate the wonderful mothers in our community."
              classroomInfo="School Garden & Playground"
              ageInfo="All Ages"
              dateInfo="May 10, 2025"
              readButtonText="Read Article"
              detailsButtonText="Details"
            />
          </div>

          <div className="w-full max-w-[480px]">
            <EventCard
              categoryLabel="Performance"
              title="Summer Music Recital"
              description="Students showcase their musical talents learned throughout the year."
              classroomInfo="Performance Hall"
              ageInfo="Music program students"
              dateInfo="May 17, 2025"
              readButtonText="Read Article"
              detailsButtonText="Details"
            />
          </div>

          <div className="w-full max-w-[480px]">
            <EventCard
              categoryLabel="Sports"
              title="Family Fun Sports Day"
              description="Active family day with games, races, and healthy competition for all ages."
              classroomInfo="Sports Field"
              ageInfo="All Ages"
              dateInfo="May 24, 2025"
              readButtonText="Read Article"
              detailsButtonText="Details"
            />
          </div>

          <div className="w-full max-w-[480px]">
            <EventCard
              categoryLabel="Cultural"
              title="International Food Festival"
              description="Celebrate diversity with food, music, and cultural performances from around the world."
              classroomInfo="Main Hall"
              ageInfo="All Ages"
              dateInfo="June 5, 2025"
              readButtonText="Read Article"
              detailsButtonText="Details"
            />
          </div>

          <div className="w-full max-w-[480px]">
            <EventCard
              categoryLabel="Educational"
              title="Science Fair Exhibition"
              description="Students present their science projects and experiments in an interactive showcase."
              classroomInfo="Science Lab & Corridor"
              ageInfo="5-10 years"
              dateInfo="June 12, 2025"
              readButtonText="Read Article"
              detailsButtonText="Details"
            />
          </div>

          <div className="w-full max-w-[480px]">
            <EventCard
              categoryLabel="Creative"
              title="Art Gallery Opening"
              description="Exhibition of student artwork including paintings, sculptures, and digital creations."
              classroomInfo="Art Studio"
              ageInfo="All Ages"
              dateInfo="June 19, 2025"
              readButtonText="Read Article"
              detailsButtonText="Details"
            />
          </div>

          <div className="w-full max-w-[480px]">
            <EventCard
              categoryLabel="Celebration"
              title="End of Year Concert"
              description="A grand finale featuring performances from all classes to celebrate the school year."
              classroomInfo="Auditorium"
              ageInfo="All Ages"
              dateInfo="June 28, 2025"
              readButtonText="Read Article"
              detailsButtonText="Details"
            />
          </div>

          <div className="w-full max-w-[480px]">
            <EventCard
              categoryLabel="Community"
              title="Summer Reading Challenge"
              description="Kick off our summer reading program with fun activities and reading goals for all age groups."
              classroomInfo="Library"
              ageInfo="All Ages"
              dateInfo="July 3, 2025"
              readButtonText="Read Article"
              detailsButtonText="Details"
            />
          </div>
        </div>
        <div className="w-full mt-4 flex justify-center items-center">
          {/* Load More Posts Button */}
          <button
            data-badge="false"
            data-icon="false"
            data-size="56"
            data-state="Focused"
            data-type="Secondary"
            className="h-14 px-6 py-3 bg-yellow-300 rounded-[10px] 
               shadow-[0px_0px_0px_1px_rgba(0,0,0,0.22)] 
               flex justify-center items-center gap-2.5 
               overflow-hidden mx-auto"
          >
            <span className="text-blue-950 text-lg font-semibold font-['Quicksand']">
              Load More Posts
            </span>
          </button>
        </div>
      </section>

      <section className="flex justify-center items-center w-full py-16 pt-0">
        <div className="w-full max-w-5xl flex flex-col justify-center items-center gap-12">
          {/* Stay Updated Section */}
          {/* Subfooter Section */}
          <SubFooter
            heading="Never Miss an Event"
            subheading={
              <>
                Subscribe to our event calendar and get notifications about
                <br className="hidden sm:block" />
                all upcoming activities
              </>
            }
            primaryBtnText="Subscribe to Calendar"
            secondaryBtnText="Contact Event Coordinator"
            containerClass="bg-[var(--secondary-500)]"
            maxWidth="max-w-5xl"
            paddingY="py-24"
            onSecondaryClick={handleClick}
          />

          {/* Explore More Section */}
          <div className="w-full p-14 bg-gray-200/60 flex flex-col justify-center items-center gap-10">
            <h3 className="text-4xl font-bold text-gray-900 text-center font-['Quicksand']">
              Stay Connected
            </h3>

            {/* Single line row for cards */}
            <div className="flex flex-row flex-wrap justify-center items-center gap-4">
              {["Read our Blog", "Explore Classes", "Book a Visit"].map(
                (label) => (
                  <button
                    key={label}
                    onClick={() => handleNavigation(label)}
                    className="w-45 px-4 py-3 bg-yellow-300 rounded-[10px] flex justify-center items-center hover:scale-105 hover:bg-yellow-400 transition-transform cursor-pointer"
                  >
                    <span className="text-blue-950 text-lg font-semibold font-['Quicksand'] text-center">
                      {label}
                    </span>
                  </button>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <div>
        <Footer />
      </div>
    </>
  );
};

export default EventPage;
