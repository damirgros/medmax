import React from "react";
import Image from "next/image";

function SectionOne() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-400 to-blue-100 flex flex-col py-64">
      {/* Header */}
      <div className="w-full flex justify-center items-center py-8">
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
        {/* Sleep Section */}
        <div className="w-full md:w-1/2 h-96 bg-[url('/images/sleep.jpg')] bg-cover bg-center flex justify-center items-center rounded-full">
          <p className="text-white text-4xl font-semibold text-center">
            Personal sleep
            <br />
            tracking
          </p>
        </div>

        {/* Doctors Section */}
        <div className="w-full md:w-1/2 h-96 bg-[url('/images/doctors.jpg')] bg-cover bg-center flex flex-col justify-center items-center space-y-4 rounded-full">
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
