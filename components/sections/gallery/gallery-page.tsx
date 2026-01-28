"use client";
import type { NextPage } from "next";
import Image from "next/image";
import React, { useState } from "react";
import Footer from "../shared/footer";

export type GalleryImage = {
  src: string;
  width: number;
  height: number;
  alt: string;
  style: string;
};

type GalleryProps = {
  images: GalleryImage[];
};

const GalleryPageSection: React.FC<GalleryProps> = ({ images }) => {
  const [modalImg, setModalImg] = useState<GalleryImage | null>(null);

  React.useEffect(() => {
    if (modalImg) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [modalImg]);

  return (
    <div>
      {/* Gallery Header */}
      <section className="w-full bg-slate-50 py-12 px-4 flex justify-center">
        <div className="max-w-4xl w-full text-center">
          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4 font-sandyKids tracking-wide"
            style={{ WebkitTextStroke: 0 }}
          >
            School Gallery
          </h2>
          <p className="text-gray-600 font-medium max-w-2xl mx-auto mb-8 text-base sm:text-lg leading-relaxed font-['Quicksand']">
            Explore our vibrant school life through photos of events,
            activities, and daily moments.
          </p>
        </div>
      </section>
      <div
        className="w-full flex justify-center items-center p-2.5 box-border pt-12"
        style={{ marginLeft: "80px" }}
      >
        <div className="self-stretch flex flex-col items-center">
          <div className="h-[785.1px] relative" style={{ minWidth: 1200 }}>
            {images.map((img, idx) => (
              <div
                key={img.src + "-" + idx}
                className={img.style}
                style={{ zIndex: 10 + idx }}
                onClick={() => setModalImg(img)}
                role="button"
                tabIndex={0}
                onKeyPress={(e) => {
                  if (e.key === "Enter") setModalImg(img);
                }}
                aria-label={img.alt}
                title="Click to enlarge"
              >
                <Image
                  src={img.src}
                  className="h-full w-full max-w-full overflow-hidden max-h-full object-cover mx-auto cursor-pointer"
                  width={img.width}
                  height={img.height}
                  sizes="100vw"
                  alt={img.alt}
                />
                {/* Overlay for last two images */}
                {(idx === images.length - 2 || idx === images.length - 1) && (
                  <div className="absolute top-12 left-0 transform -translate-x-1/2 w-[232px] h-[109px] flex items-center justify-center z-20 pointer-events-none">
                    <Image
                      src="/assets/gallery-overlay.jpg"
                      alt="Overlay Shape"
                      width={172}
                      height={95}
                      className="object-contain"
                      priority
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
          {/* Modal for enlarged image */}
          {modalImg && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80"
              onClick={() => setModalImg(null)}
              style={{ cursor: "zoom-out" }}
            >
              <div className="relative max-w-full max-h-full flex items-center justify-center">
                <Image
                  src={modalImg.src}
                  alt={modalImg.alt}
                  width={modalImg.width * 2}
                  height={modalImg.height * 2}
                  className="rounded-lg shadow-2xl object-contain max-h-[90vh] max-w-[90vw]"
                  style={{ background: "#fff" }}
                />
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setModalImg(null);
                  }}
                  className="absolute top-2 right-2 text-white text-3xl font-bold bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center"
                  aria-label="Close"
                >
                  &times;
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default GalleryPageSection;
