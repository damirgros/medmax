"use client";

import React from "react";
import { useInView } from "@/custom_hooks/useInView";

function SectionOne() {
  const [headerRef, headerInView] = useInView({ threshold: 0.5 });

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/videos/videoSectionOne.mp4"
        autoPlay
        loop
        muted
        playsInline
        style={{ zIndex: -1 }}
      />
      <div
        ref={headerRef}
        className={`w-full flex flex-col justify-center items-center py-8 transition-all duration-1000 ${
          headerInView
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-20"
        }`}
      >
        <h2 className="text-white text-6xl font-bold text-center p-10 mb-56">
          Advanced technologies
          <br />
          and an individual approach
          <br />
          to each patient
        </h2>
        <button className="bg-gradient-to-r from-purple-800 to-blue-800 text-white font-bold py-3 px-8 rounded-lg mt-56 border border-white/30 shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl hover:ring-4 hover:ring-blue-300">
          Download App
        </button>
      </div>
    </div>
  );
}

export default SectionOne;
