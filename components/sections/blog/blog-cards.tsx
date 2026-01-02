"use client";

import React from "react";

interface BlogCardProps {
  category: string;
  readTime: string;
  title: string;
  description: string;
  author: string;
  date: string;
  onClick?: () => void;
}

const BlogCard: React.FC<BlogCardProps> = ({
  category,
  readTime,
  title,
  description,
  author,
  date,
  onClick,
}) => {
  return (
    <div className="p-2.5 bg-neutral-100 rounded-xl outline outline-[1.5px] outline-zinc-300 flex justify-center items-center">
      <div className="w-80 flex flex-col justify-start items-center gap-6">
        {/* Top Placeholder (image/illustration area) */}
        <div className="w-full h-48 bg-amber-300/10 rounded-t-lg flex justify-center items-center">
          <div className="w-12 h-12 border-4 border-amber-300"></div>
        </div>

        {/* Card Content */}
        <div className="w-72 flex flex-col justify-start items-start gap-4">
          {/* Category + Read time */}
          <div className="flex justify-between items-center w-full">
            <span className="px-2 py-0.5 bg-amber-300/10 rounded-full text-amber-500 text-xs font-semibold font-['Quicksand']">
              {category}
            </span>
            <span className="text-slate-500 text-xs font-medium font-['Quicksand']">
              {readTime}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-slate-700 text-xl font-bold font-['Quicksand']">
            {title}
          </h3>

          {/* Description */}
          <p className="text-slate-500 text-xs font-semibold font-['Quicksand']">
            {description}
          </p>

          {/* Author + Date */}
          <div className="flex justify-between items-center w-full text-xs text-slate-500 font-['Inter']">
            <span>{author}</span>
            <span>{date}</span>
          </div>

          {/* Button */}
          <button
            onClick={onClick}
            className="w-full h-10 bg-amber-300 rounded-md outline outline-1 outline-amber-300/20 text-black text-base font-bold font-['Quicksand'] hover:bg-amber-400 transition"
          >
            Read Article
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
