"use client";

import React from "react";

const Maps = () => {
  return (
    <div className="w-full flex justify-center pt-10 px-4">
      {" "}
      {/* centers the map */}
      <section className="relative w-full max-w-5xl h-[500px]">
        {/* Google Map Background - disabled interaction */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3941.4784662142033!2d3.287681315267713!3d6.607236795217237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b94c7c6e06b01%3A0x64b3c36b94fb5f58!2s1%20Egbeyemi%20Close%2C%20Folarin%20Street%2C%20Ipaja%2C%20Egbeda%2F%20Alimosho%20100267%2C%20Lagos!5e0!3m2!1sen!2sng!4v1693465112345!5m2!1sen!2sng"
          width="100%"
          height="100%"
          style={{ border: 0, pointerEvents: "none" }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute top-0 left-0 w-full h-full"
        ></iframe>

        {/* Overlay Content */}
        <div className="rounded-2xl relative z-20 flex flex-col items-center justify-center h-full bg-black/40 text-white p-6 text-center">
          <h2 className="text-4xl font-bold">Visit Our Campus</h2>

          {/* Clickable Google Maps link */}
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=1+Egbeyemi+Close,+Folarin+Street,+Ipaja,+Egbeda/Alimosho+100267,+Lagos"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block text-lg underline text-yellow-300 hover:text-yellow-400 transition"
          >
            1 Egbeyemi Close, Folarin street, Ipaja, Egbeda/ Alimosho 100267,
            Lagos
          </a>

          {/* Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
            <div className="p-6 bg-white/90 rounded-lg shadow text-black">
              <h3 className="font-bold">Public Transport</h3>
              <p className="text-sm">Alimosho Bus Stop: 5 min walk</p>
            </div>

            <div className="p-6 bg-white/90 rounded-lg shadow text-black">
              <h3 className="font-bold">Parking</h3>
              <p className="text-sm">Free on-site parking</p>
            </div>

            <div className="p-6 bg-white/90 rounded-lg shadow text-black">
              <h3 className="font-bold">Accessibility</h3>
              <p className="text-sm">Step-free entrance</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Maps;
