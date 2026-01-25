"use client";

import React from "react";
import Link from "next/link";
import BlogCard from "./blog-cards";
import Footer from "../shared/footer";
import SelectionBtn from "./selection-btn";
import { getAllBlogs, getFeaturedBlog } from "@/lib/blog-data";

const Blogpage = () => {
  const featuredBlog = getFeaturedBlog();
  const allBlogs = getAllBlogs().filter((blog) => !blog.featured);

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
      {featuredBlog && (
        <section className="flex justify-center px-4 sm:px-6 mt-12">
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
                {featuredBlog.title}
              </h3>
              <p className="text-slate-500 text-base sm:text-lg font-medium font-['Quicksand'] leading-relaxed">
                {featuredBlog.description}
              </p>
            </div>

            {/* Footer Info */}
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center w-full gap-4">
              {/* Author + Date */}
              <div className="flex flex-wrap items-center gap-5 text-sm text-slate-500 font-normal font-['Inter']">
                <span>{featuredBlog.author}</span>
                <span>{featuredBlog.date}</span>
                <span>{featuredBlog.readTime}</span>
              </div>

              {/* Button */}
              <Link
                href={`/blog/${featuredBlog.slug}`}
                className="h-10 px-4 py-2.5 bg-yellow-300 rounded-lg shadow-sm text-blue-950 text-sm sm:text-base font-semibold font-['Quicksand'] hover:bg-yellow-400 transition inline-flex items-center justify-center"
              >
                Read More
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Blog Cards Section */}
      <section className="py-16 sm:py-20 md:py-2 px-4 sm:px-6">
        <div>
          <SelectionBtn />
        </div>
        <div className="w-full flex justify-center items-center px-4 py-14">
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
            {allBlogs.map((blog) => (
              <BlogCard
                key={blog.slug}
                category={blog.category}
                readTime={blog.readTime}
                title={blog.title}
                description={blog.description}
                author={blog.author}
                date={blog.date}
                slug={blog.slug}
              />
            ))}
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
              {[
                { label: "Upcoming Event", href: "/events" },
                { label: "Our Classes", href: "/classes" },
                { label: "Contact Us", href: "/contact" },
              ].map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="w-45 px-4 py-3 bg-yellow-300 rounded-[10px] flex justify-center items-center hover:scale-105 transition-transform"
                >
                  <span className="text-blue-950 text-lg font-semibold font-['Quicksand'] text-center">
                    {item.label}
                  </span>
                </Link>
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
