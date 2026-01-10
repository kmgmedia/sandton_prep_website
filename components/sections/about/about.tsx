"use client";

import React from "react";
import { motion } from "framer-motion";
import Team from "./team";
import Ourjourney from "./our-journey";
import SubFooter from "./sub-footer";
import Footer from "../shared/footer";
import { useRouter } from "next/navigation"; // Import useRouter for navigation

const About = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/contact");
  };

  const handleBookVisit = () => {
    router.push("/bookpage");
  };

  return (
    <>
      <section className="bg-slate-50 py-16 sm:py-20 md:py-24 px-4 sm:px-6 flex justify-center">
        <div className="max-w-6xl w-full text-center">
          {/* Heading */}
          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 font-sandyKids tracking-wide"
            style={{ WebkitTextStroke: 0 }}
          >
            About
          </h2>
          <p className="text-gray-600 font-medium max-w-3xl mx-auto mb-12 sm:mb-16 text-base sm:text-lg leading-relaxed font-['Quicksand']">
            For over 5 years, we’ve been dedicated to providing exceptional
            early childhood education, nurturing young minds in a caring,
            creative, and stimulating environment.
          </p>

          {/* Mission and Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-12 items-start mb-16 sm:mb-20 mt-10">
            {/* Mission */}
            <div className="text-left px-2 sm:px-0">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 font-['Quicksand']">
                Our Mission
              </h3>
              <p className="text-gray-600 mb-4 text-sm sm:text-base leading-relaxed font-['Quicksand']">
                To provide a nurturing, safe, and stimulating environment where
                every child can develop their full potential through play-based
                learning, creative expression, and meaningful social
                interactions.
              </p>
              <div className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base">
                <span className="text-yellow-500 text-lg sm:text-2xl">💛</span>
                <p className="text-gray-700">
                  <span className="font-semibold">Child-Centered Approach</span>{" "}
                  — Every decision we make puts the wellbeing of your child
                  first.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="bg-yellow-300 rounded-2xl p-6 sm:p-8 shadow-lg text-left font-['Quicksand']">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                Our Vision
              </h3>
              <p className="text-gray-800 text-sm sm:text-base leading-relaxed font-['Quicksand']">
                To be the leading early childhood education provider, recognized
                for our innovative approach, exceptional care, and commitment to
                developing confident, creative, and compassionate young
                learners.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 font-['Quicksand']">
            {[
              { title: "Excellence", desc: "Highest standards in education" },
              { title: "Community", desc: "Strong family partnerships" },
              { title: "Learning", desc: "Continuous growth & curiosity" },
              { title: "Compassion", desc: "Nurturing environment" },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="bg-white rounded-2xl shadow-md p-6 sm:p-8 flex flex-col items-center text-center hover:shadow-2xl transition"
              >
                <div className="bg-yellow-100 rounded-full p-4 sm:p-5 mb-3 sm:mb-4">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-yellow-400 rounded-full animate-pulse"></div>
                </div>
                <h4 className="font-bold text-gray-900 text-base sm:text-lg">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-xs sm:text-sm mt-1 sm:mt-2">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Team + Journey + SubFooter */}
          <Team />
          <Ourjourney />
          <SubFooter
            heading="Never Miss an Event"
            subheading={
              <>
                Experience the difference of quality early childhood education.
                <br className="hidden sm:block" />
                Schedule a visit to see our approach in action.
              </>
            }
            primaryBtnText="Book A Visit"
            secondaryBtnText="Contact Us"
            containerClass="bg-[var(--secondary-500)]"
            maxWidth="max-w-5xl"
            paddingY="py-24"
            onPrimaryClick={handleBookVisit}
            onSecondaryClick={handleClick}
          />
        </div>
      </section>

      {/* Footer lives outside the main section */}
      <Footer />
    </>
  );
};

export default About;
