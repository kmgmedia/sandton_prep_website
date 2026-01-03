// components/sections/home/hero.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Button from "@/components/ui/button";
import Discovercard from "./discover-card";
import Comeover from "./come-over";
import Capturing from "./capturing";
import Believe from "./believe";
import Curriculum from "./curriculum";
import Footer from "../shared/footer";

export default function Home() {
  return (
    <main className="relative bg-slate-50 overflow-hidden pt-16">
      {/* Clouds */}
      <Image
        src="https://res.cloudinary.com/ds2h3iwys/image/upload/v1755915410/Sandton%20Preparatory%20School%20Web%20Images/Hero-page-images/cloud-1_uyf0ti.png"
        alt="cloud"
        width={200}
        height={160}
        className="absolute top-[280px] left-4 w-12 h-10 sm:top-[320px] sm:left-8 sm:w-16 sm:h-12 md:w-32 md:h-24 md:top-60 md:left-20 lg:w-40 lg:h-32 lg:left-60"
      />
      <Image
        src="https://res.cloudinary.com/ds2h3iwys/image/upload/v1755915410/Sandton%20Preparatory%20School%20Web%20Images/Hero-page-images/cloud-2_dv1cy8.png"
        alt="cloud"
        width={180}
        height={160}
        className="absolute top-[280px] right-4 w-12 h-10 sm:top-[320px] sm:right-8 sm:w-16 sm:h-12 md:w-32 md:h-24 md:top-60 md:right-20 lg:w-40 lg:h-32 lg:right-60"
      />

      <div className="container mx-auto flex flex-col items-center text-center px-4">
        {/* Heading */}
        <h1
          className="font-sandyKids text-4xl md:text-7xl font-bold text-gray-900 tracking-wider"
          style={{ WebkitTextStroke: 0 }}
        >
          Nurturing{" "}
          <span className="bg-[#FFD900] px-2 text-gray-900">Bright Minds,</span>
          <br />
          Shaping <span className="px-2 text-gray-900">Great Futures</span>
        </h1>

        {/* Sub text */}
        <p className="mt-6 max-w-xl text-gray-600 text-bold md:text-lg font-['Quicksand']">
          Welcome to Sandton Preparatory School, where we provide exceptional
          early childhood education for children aged 6 months to 10 years in a
          nurturing, creative environment.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <a
            href="/bookpage"
            className="inline-flex items-center justify-center px-6 py-3 bg-[#FFD900] hover:bg-[#FFD43B] text-gray-900 font-medium rounded-md shadow-sm transition font-quicksand"
          >
            Book A Visit <ArrowRight className="ml-2 w-4 h-4" />
          </a>
          <a
            href="/classes"
            className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-gray-800 hover:bg-gray-100 font-medium rounded-md transition font-quicksand"
          >
            Learn More
          </a>
        </div>

        {/* Bottom curve with video */}
        <div className="relative mt-16 w-full max-w-3xl">
          <div className=" rounded-t-3xl h-89 relative flex items-center justify-center overflow-hidden">
            {/* Video autoplay + loop */}
            <video
              src="https://res.cloudinary.com/ds2h3iwys/video/upload/v1755920169/Sandton%20Preparatory%20School%20Web%20Images/Hero-page-images/school-video_ab8930.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover rounded-t-3xl"
            />
          </div>
        </div>
        <div className="mt-6 absolute inset-0 translate-y-60 top-96 w-full h-30 overflow-hidden pointer-events-none">
          <div className="w-96 h-96 left-[744.59px] top-[86.53px] absolute bg-slate-50 rounded-full"></div>
          <div className="w-96 h-96 left-[991.98px] top-[157.14px] absolute bg-slate-50 rounded-full"></div>
          <div className="w-96 h-96 left-[1277.60px] top-[121.11px] absolute bg-slate-50 rounded-full"></div>
          <div className="w-80 h-80 left-[306.58px] top-[157.13px] absolute bg-slate-50 rounded-full"></div>
          <div className="w-80 h-80 left-[493.92px] top-[160.03px] absolute origin-top-left rotate-[-0.51deg] bg-slate-50  rounded-full"></div>
        </div>

        {/* descriptions Session */}
        <div className="relative w-full max-w-[1440px] px-6 md:px-12 lg:px-28 py-8 flex flex-col gap-10 overflow-hidden">
          <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start gap-12 lg:gap-32">
            {/* Text Section */}
            <div className="w-full max-w-[602px] flex flex-col gap-12 text-center lg:text-left">
              <div className="text-gray-900 text-lg font-medium font-quicksand leading-relaxed">
                At Sandton Preparatory School, we believe every child deserves a
                foundation built on love, creativity, and excellence. Our
                carefully designed programs combine play-based learning with
                structured educational activities, ensuring your child develops
                academically, socially, and emotionally. With experienced
                teachers, state-of-the-art facilities, and a curriculum that
                celebrates each child&apos;s unique journey, we create an
                environment where curiosity thrives and confident learners
                emerge.
              </div>

              {/* Button - centered under text */}
              <div className="flex justify-center lg:justify-start">
                <Link href="/classes">
                  <Button label="Learn More" showArrow />
                </Link>
              </div>
            </div>

            {/* Image / Graphic Section */}
            <div className="w-full lg:w-[600px] h-[200px] md:h-[300px] bg-zinc-300 rounded-2xl overflow-hidden">
              <Image
                src="https://res.cloudinary.com/ds2h3iwys/image/upload/v1767394249/Sandton%20Preparatory%20School%20Web%20Images/Hero-page-images/WhatsApp_Image_2023-07-13_at_09.53.20fgfh_bz6qag.jpg"
                alt="Students learning and playing"
                width={600}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Discovered Classes Section */}
        <div className="flex justify-center lg:justify-start">
          <Discovercard />
        </div>
        {/* Come Over Classes Section */}
        <div className="flex justify-center lg:justify-start">
          <Comeover />
        </div>
      </div>
      <Capturing />
      <Believe />
      <Curriculum />
      <Footer />
    </main>
  );
}
