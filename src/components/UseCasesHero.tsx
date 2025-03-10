import React from "react";
import Image from "next/image";

export default function UseCaseHero() {
  return (
    <div className="bg-black min-h-screen text-white py-16 px-4 flex items-center">
                     <Image
  src="/image/Ellipse 1440.png"
  alt="Dashboard"
  width={900}
  height={700}
  className="absolute top-2/4 right-0 -translate-y-1/2 z-10"
/>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-36 items-center">
        {/* Left Content */}
        <div className="flex flex-col items-center md:items-start md:max-w-md">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:max-w-3xl">
            <span className="font-bold text-white block sm:inline mr-2">
              Stay Ahead With
            </span>
            <span className="text-[#00D11F] font-bold block sm:inline">
              Smart Monitoring
            </span>
            <span className="text-white block sm:inline"> for Every Need</span>
          </h1>

          <p className="text-white mt-4">
            From homeowners to service providers, Rivio ensures real-time
            monitoring, alerts, and smooth operations for all tank types.
          </p>
          <button className="mt-6 bg-gradient-to-r from-[#006A10] to-[#00D11F] text-white px-6 py-2 rounded-xl">
            Explore Use Cases
          </button>
        </div>
        <div className="relative flex justify-center items-center">
      
          <Image
            src="/image/Adobe Express - file (65) 1.png" 
            alt="Device"
            width={180}
            height={180}
            className="absolute left-[-100px] bottom-[-10px] z-0"
          />
          
          <Image
            src="/image/Group 1917158628.png" 
            alt="Dashboard"
            width={500}
            height={500}
            className="relative z-10"
          />
        </div>
      </div>
    </div>
  );
}
