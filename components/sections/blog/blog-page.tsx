"use client";

import React from "react";
import BlogCard from "./blog-cards";
import Footer from "../shared/footer";
import SelectionBtn from "./selection-btn";

const Blogpage = () => {
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
            School Blog
          </h2>
          <p className="text-gray-600 font-medium max-w-3xl mx-auto mb-12 sm:mb-16 text-base sm:text-lg leading-relaxed font-['Quicksand']">
            Educational insights, parenting tips, and updates from our learning
          </p>
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
            <div className="flex flex-wrap items-center gap-5 text-sm text-slate-500 font-normal font-['Inter']">
              <span>Sarah Johnson</span>
              <span>March 15, 2024</span>
              <span>5 min read</span>
            </div>

            {/* Button */}
            <button className="h-10 px-4 py-2.5 bg-yellow-300 rounded-lg shadow-sm text-blue-950 text-sm sm:text-base font-semibold font-['Quicksand'] hover:bg-yellow-400 transition">
              Read More
            </button>
          </div>
        </div>
      </section>

      {/* Blog Cards Section */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6">
        <div>
          <SelectionBtn />
        </div>
        <div className="w-full flex justify-center items-center px-4 py-10">
          <div className="max-w-lg flex flex-col justify-start items-center gap-2 text-center">
            <div className="text-slate-700 text-2xl sm:text-3xl md:text-4xl font-bold font-['Quicksand'] leading-snug sm:leading-[44px] md:leading-[56px]">
              All Blog Posts
            </div>
            <div className="text-slate-500 text-sm sm:text-base md:text-lg font-medium font-['Quicksand'] leading-relaxed">
              Stay updated with our latest insights and tips
            </div>
          </div>
        </div>

        <div className="max-w-6xl w-full mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <BlogCard
              category="Parenting"
              readTime="4 min read"
              title="Preparing Your Toddler for Their First School Experience"
              description="Tips and strategies to help make the transition to school a positive experience for both children and parents."
              author="Emma Williams"
              date="March 10, 2025"
              onClick={() => console.log("Clicked!")}
            />

            <BlogCard
              category="Education"
              readTime="6 min read"
              title="Why Early Reading Habits Shape Future Success"
              description="Learn why starting reading early can give your child lifelong learning advantages."
              author="David Miller"
              date="April 2, 2025"
            />

            <BlogCard
              category="Development"
              readTime="5 min read"
              title="Understanding Social Skills Development in Preschoolers"
              description="Explore how children develop crucial social skills through play and interaction with peers."
              author="Sarah Johnson"
              date="March 28, 2025"
            />

            <BlogCard
              category="Health"
              readTime="7 min read"
              title="Nutrition Tips for Growing Minds: What Your Child Needs"
              description="Discover the essential nutrients that support cognitive development and learning in young children."
              author="Dr. Michael Chen"
              date="April 5, 2025"
            />

            <BlogCard
              category="Activities"
              readTime="4 min read"
              title="Creative Art Projects to Try at Home This Weekend"
              description="Fun and educational art activities that promote creativity and fine motor skills development."
              author="Emma Williams"
              date="April 8, 2025"
            />

            <BlogCard
              category="Parenting"
              readTime="5 min read"
              title="Managing Screen Time: A Balanced Approach for Families"
              description="Practical guidelines for healthy screen time habits that support your child's development."
              author="Lisa Martinez"
              date="April 12, 2025"
            />

            <BlogCard
              category="Education"
              readTime="6 min read"
              title="The Role of Music in Early Childhood Development"
              description="How musical activities enhance language skills, memory, and emotional expression in young learners."
              author="David Miller"
              date="April 15, 2025"
            />

            <BlogCard
              category="Development"
              readTime="5 min read"
              title="Building Emotional Intelligence from an Early Age"
              description="Strategies to help your child recognize, understand, and manage their emotions effectively."
              author="Sarah Johnson"
              date="April 18, 2025"
            />

            <BlogCard
              category="Activities"
              readTime="4 min read"
              title="Outdoor Play Ideas for Every Season"
              description="Year-round activities that encourage physical development and connection with nature."
              author="Emma Williams"
              date="April 20, 2025"
            />

            <BlogCard
              category="Parenting"
              readTime="6 min read"
              title="Fostering Independence: Age-Appropriate Responsibilities"
              description="Learn how to encourage self-reliance and confidence through developmentally suitable tasks."
              author="Dr. Michael Chen"
              date="April 22, 2025"
            />

            <BlogCard
              category="Education"
              readTime="5 min read"
              title="STEM Activities for Curious Little Minds"
              description="Simple science and math activities that spark curiosity and critical thinking skills."
              author="Lisa Martinez"
              date="April 25, 2025"
            />

            <BlogCard
              category="Health"
              readTime="6 min read"
              title="Sleep Routines: The Foundation of Learning Readiness"
              description="Understanding the connection between quality sleep and your child's ability to learn and grow."
              author="Dr. Michael Chen"
              date="April 28, 2025"
            />

            <BlogCard
              category="Activities"
              readTime="5 min read"
              title="Rainy Day Indoor Activities That Inspire Learning"
              description="Creative ways to keep children engaged and learning when outdoor play isn't possible."
              author="Emma Williams"
              date="May 1, 2025"
            />

            <BlogCard
              category="Parenting"
              readTime="7 min read"
              title="Positive Discipline Techniques for Young Children"
              description="Effective strategies to guide behavior while building trust and respect with your child."
              author="Sarah Johnson"
              date="May 5, 2025"
            />

            <BlogCard
              category="Education"
              readTime="5 min read"
              title="Language Development Milestones: What to Expect"
              description="A guide to understanding normal language development stages and supporting your child's communication."
              author="David Miller"
              date="May 8, 2025"
            />
          </div>
          <div className="w-full mt-16 flex justify-center items-center">
            {/* Load More Posts Button */}
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
                  Load More Posts
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="flex justify-center items-center w-full py-16 pt-8">
        <div className="w-full max-w-5xl flex flex-col justify-center items-center gap-12">
          {/* Stay Updated Section */}
          <div className="w-full px-8 py-14 bg-yellow-300 flex flex-col justify-center items-center gap-8">
            <div className="text-center">
              <h2 className="text-4xl font-bold font-['Quicksand'] text-black leading-[56px]">
                Stay Updated
              </h2>
              <p className="text-lg font-medium font-['Quicksand'] text-gray-900 mt-2">
                Get the latest educational insights and school updates delivered
                to your inbox
              </p>
            </div>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-6">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-80 h-12 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <button className="w-32 h-12 bg-gray-500 text-amber-300 font-bold rounded-md hover:bg-gray-600 transition">
                Subscribe
              </button>
            </div>
          </div>

          {/* Explore More Section */}
          <div className="w-full p-14 bg-gray-200/60 flex flex-col justify-center items-center gap-6">
            <h3 className="text-4xl font-bold text-gray-900 text-center font-['Quicksand']">
              Explore More
            </h3>

            {/* Single line row for cards */}
            <div className="flex flex-row flex-wrap justify-center items-center gap-4">
              {["Upcoming Event", "Our Classes", "Contact Us"].map((label) => (
                <div
                  key={label}
                  className="w-45 px-4 py-3 bg-yellow-300 rounded-[10px] flex justify-center items-center hover:scale-105 transition-transform"
                >
                  <span className="text-blue-950 text-lg font-semibold font-['Quicksand'] text-center">
                    {label}
                  </span>
                </div>
              ))}
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

export default Blogpage;
