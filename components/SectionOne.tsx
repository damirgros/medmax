"use client";

import React from "react";
import Image from "next/image";
import { useInView } from "@/custom_hooks/useInView";

function SectionOne() {
  const [headerRef, headerInView] = useInView({ threshold: 0.5 });
  const [sleepRef, sleepInView] = useInView({ threshold: 0.5 });
  const [doctorRef, doctorInView] = useInView({ threshold: 0.5 });

  return (
    <div className="min-h-screen bg-blue-400 flex flex-col py-64">
      {/* Header Section */}
      <div
        ref={headerRef}
        className={`w-full flex justify-center items-center py-8 transition-all duration-1000 ${
          headerInView
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-20"
        }`}
      >
        <h2 className="text-white text-6xl font-bold text-center p-10">
          Advanced technologies
          <br />
          and an individual approach
          <br />
          to each patient
        </h2>
      </div>

      {/* Content Sections */}
      <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8 px-40">
        {/* Sleep Section: Spins in from the left */}
        <div
          ref={sleepRef}
          className={`w-full md:w-1/2 h-96 bg-[url('/images/sleep.jpg')] bg-cover bg-center flex justify-center items-center border-8 border-white rounded-full transition-all duration-1000 delay-200 transform ${
            sleepInView
              ? "opacity-100 translate-x-0 rotate-0"
              : "opacity-0 -translate-x-20 rotate-[-90deg]"
          }`}
        >
          <p className="text-white text-4xl font-semibold text-center">
            Personal sleep
            <br />
            tracking
          </p>
        </div>

        {/* Doctors Section: Spins in from the right */}
        <div
          ref={doctorRef}
          className={`w-full md:w-1/2 h-96 bg-[url('/images/doctors.jpg')] bg-cover bg-center flex flex-col justify-center items-center space-y-4 border-8 border-white rounded-full transition-all duration-1000 delay-500 transform ${
            doctorInView
              ? "opacity-100 translate-x-0 rotate-0"
              : "opacity-0 translate-x-20 rotate-[90deg]"
          }`}
        >
          <p className="text-white text-4xl font-semibold text-center">
            Choose your
            <br />
            personal doctor
          </p>
          <div className="flex justify-center items-center space-x-4">
            <Image
              src="/images/doctor1.jpg"
              alt="doctor1"
              width={150}
              height={225}
              className="rounded-full"
            />
            <Image
              src="/images/doctor2.jpg"
              alt="doctor2"
              width={150}
              height={225}
              className="rounded-full"
            />
            <Image
              src="/images/doctor3.jpg"
              alt="doctor3"
              width={150}
              height={225}
              className="rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionOne;
