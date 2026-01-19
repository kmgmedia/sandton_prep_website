"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Classcards from "./class-cards";
import SubFooter from "../about/sub-footer";
import Footer from "../shared/footer";

const Classpage = () => {
  const router = useRouter();

  const handleScheduleVisit = () => {
    router.push("/bookpage");
  };

  const handleGetInfo = () => {
    router.push("/contact");
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
            Our Classes
          </h2>
          <p className="text-gray-600 font-medium max-w-3xl mx-auto mb-12 sm:mb-16 text-base sm:text-lg leading-relaxed font-['Quicksand']">
            Age-appropriate programs designed to nurture every aspect of your
            child&apos;s development
          </p>

          {/* CTA Button */}
          <button
            onClick={handleScheduleVisit}
            data-badge="false"
            data-icon="false"
            data-size="56"
            data-state="Focused"
            data-type="Secondary"
            className="h-14 px-6 py-3 bg-yellow-300 rounded-[10px] shadow-[0px_0px_0px_1px_rgba(0,0,0,0.22)] inline-flex justify-center items-center gap-2.5 overflow-hidden hover:bg-yellow-400 transition cursor-pointer"
          >
            <div className="flex justify-start items-center gap-2">
              <div className="text-blue-950 text-lg font-semibold font-['Quicksand']">
                Schedule a Visit
              </div>
            </div>
          </button>
        </div>
      </section>

      {/* All Classes Section */}
      <section className="py-8 sm:py-20 md:py-8 px-4 sm:px-6 flex justify-center bg-white">
        <div className="max-w-3xl w-full text-center">
          <h3 className="text-slate-700 text-4xl font-bold font-['Quicksand'] leading-[56px] mb-4">
            All Classes
          </h3>
          <p className="text-slate-500 text-lg font-medium font-['Quicksand'] leading-relaxed">
            Comprehensive programs for every age and interest
          </p>
        </div>
      </section>

      {/* All Classes Section */}
      <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 flex justify-center bg-white">
        <div className="max-w-5xl w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-items-center">
            {/* Card 1 */}
            <Classcards
              title="Toddler Class"
              ageRange="6-18 Months"
              description="A gentle introduction to structured learning through sensory play and exploration."
              schedule="9:00 AM - 12:00 PM"
              maxChildren="Max 8 children"
              keyFeatures={[
                "Sensory play activities",
                "Motor skill development",
                "Music and movement",
                "Social interaction",
                "Safe exploration",
              ]}
              curriculumHighlights="Tummy time and crawling, Sensory bins and textures, Simple songs and rhymes"
              primaryBtnText="Book Class"
              secondaryBtnText="Visit First"
            />

            {/* Card 2 */}
            <Classcards
              title="Early Learning"
              ageRange="2-4 Years"
              description="Creative exploration and foundational skills development through play-based learning."
              schedule="8:00 AM - 3:00 PM"
              maxChildren="Max 12 children"
              keyFeatures={[
                "Art and craft activities",
                "Pre-literacy skills",
                "Number recognition",
                "Creative expression",
                "Independence building",
              ]}
              curriculumHighlights="Story time and phonics, Arts and crafts, Basic mathematics and more..."
              primaryBtnText="Book Class"
              secondaryBtnText="Visit First"
            />

            {/* Card 3 */}
            <Classcards
              title="Art & Craft"
              ageRange="5-10 Years"
              description="Specialized creative program focusing on artistic expression and fine motor skills."
              schedule="After school & Weekends"
              maxChildren="Max 15 children"
              keyFeatures={[
                "Advanced art techniques",
                "Mixed media projects",
                "Portfolio development",
                "Art history exposure",
                "Exhibition opportunities",
              ]}
              curriculumHighlights="Drawing and painting, Sculpture and ceramics, Digital art basics and more..."
              primaryBtnText="Book Class"
              secondaryBtnText="Visit First"
            />

            {/* Card 4 */}
            <Classcards
              title="Science & Nature"
              ageRange="4-10 Years"
              description="Hands-on exploration of the natural world and basic scientific concepts."
              schedule="2:00 PM - 4:00 PM"
              maxChildren="Max 12 children"
              keyFeatures={[
                "Nature exploration",
                "Simple experiments",
                "Environmental awareness",
                "Scientific method basics",
                "Garden-to-table program",
              ]}
              curriculumHighlights="Plant life cycles, Weather observation, Animal habitats and more..."
              primaryBtnText="Book Class"
              secondaryBtnText="Visit First"
            />

            {/* Card 5 */}
            <Classcards
              title="Music"
              ageRange="18 Months - 10 Years"
              description="Musical development through singing, rhythm, and instrument exploration."
              schedule="Various times"
              maxChildren="Max 20 children"
              keyFeatures={[
                "Instrument introduction",
                "Rhythm and beat",
                "Singing and vocal skills",
                "Music theory basics",
                "Performance opportunities",
              ]}
              curriculumHighlights="Percussion instruments, Simple melodies, Cultural music exploration and more..."
              primaryBtnText="Book Class"
              secondaryBtnText="Visit First"
            />

            {/* Card 6 */}
            <Classcards
              title="Leadership"
              ageRange="6-10 Years"
              description="Building confidence, communication skills, and leadership qualities."
              schedule="3:00 PM - 5:00 PM"
              maxChildren="Max 8 children"
              keyFeatures={[
                "Public speaking",
                "Team building",
                "Problem solving",
                "Decision making",
                "Community projects",
              ]}
              curriculumHighlights="Presentation skills, Conflict resolution, Goal setting and more..."
              primaryBtnText="Book Class"
              secondaryBtnText="Visit First"
            />
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20 md:py-24 px-4 sm:px-6 flex justify-center">
        <div className="w-full max-w-6xl p-8 bg-gray-200 rounded-3xl flex flex-col justify-center items-center gap-8">
          {/* Heading */}
          <div className="text-center text-slate-700 text-3xl sm:text-4xl font-bold font-['Quicksand'] leading-snug">
            Special Program Options
          </div>

          {/* Cards wrapper */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            {/* Card 1 */}
            <div className="px-6 py-5 bg-white rounded-lg shadow-md outline outline-1 outline-amber-300/20 flex flex-col gap-3">
              <div className="text-slate-700 text-xl sm:text-2xl font-bold font-['Quicksand'] leading-snug">
                All Classes by Section Optional
              </div>
              <div className="text-slate-500 text-base font-medium font-['Quicksand'] leading-snug">
                Flexible program allowing children to explore different
                activities based on interest
              </div>
              <ul className="flex flex-col gap-2">
                <li className="flex items-center gap-2 text-slate-500 text-sm font-medium font-['Quicksand']">
                  <span className="w-3 h-3 border border-amber-300"></span>{" "}
                  Mixed-age interaction
                </li>
                <li className="flex items-center gap-2 text-slate-500 text-sm font-medium font-['Quicksand']">
                  <span className="w-3 h-3 border border-amber-300"></span>{" "}
                  Flexible scheduling
                </li>
                <li className="flex items-center gap-2 text-slate-500 text-sm font-medium font-['Quicksand']">
                  <span className="w-3 h-3 border border-amber-300"></span>{" "}
                  Interest-based learning
                </li>
              </ul>
            </div>

            {/* Card 2 */}
            <div className="px-6 py-5 bg-white rounded-lg shadow-md outline outline-1 outline-amber-300/20 flex flex-col gap-3">
              <div className="text-slate-700 text-xl sm:text-2xl font-bold font-['Quicksand'] leading-snug">
                Teacher&apos;s Name and Class Rating
              </div>
              <div className="text-slate-500 text-base font-medium font-['Quicksand'] leading-snug">
                Meet our expert educators and see program ratings from families
              </div>
              <ul className="flex flex-col gap-2">
                <li className="flex items-center gap-2 text-slate-500 text-sm font-medium font-['Quicksand']">
                  <span className="w-3 h-3 border border-amber-300"></span>{" "}
                  Mixed-age interaction
                </li>
                <li className="flex items-center gap-2 text-slate-500 text-sm font-medium font-['Quicksand']">
                  <span className="w-3 h-3 border border-amber-300"></span>{" "}
                  Flexible scheduling
                </li>
                <li className="flex items-center gap-2 text-slate-500 text-sm font-medium font-['Quicksand']">
                  <span className="w-3 h-3 border border-amber-300"></span>{" "}
                  Interest-based learning
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Subfooter Section */}
      <SubFooter
        heading="Ready to Enroll Your Child?"
        subheading="Join our community of learning and discovery. Book a visit to see our classes in action."
        primaryBtnText="Book A Visit"
        secondaryBtnText="Get More Info"
        containerClass="bg-[var(--secondary-500)]"
        maxWidth="max-w-5xl"
        paddingY="py-24"
        onPrimaryClick={handleScheduleVisit}
        onSecondaryClick={handleGetInfo}
      />
      {/* Footer Section */}
      <div className="mt-24">
        <Footer />
      </div>
    </>
  );
};

export default Classpage;
