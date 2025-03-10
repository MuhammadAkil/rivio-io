"use client";
import React, { useState } from 'react'
import Image from 'next/image';
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { FaCheck } from "react-icons/fa"; 

export default function TankSection() {
  const [activeTank, setActiveTank] = useState("NYC");

  const tankData = [
    { name: "NYC", percentage: 80 },
    { name: "Toronto", percentage: 65 },
    { name: "Utah", percentage: 50 },
    { name: "Ozark", percentage: 90 },
  ];

  const images = [
    "/image/rrrf.png",
    "/image/Group 47306.png",
    "/image/injective-inj-logo 1.png",
    "/image/Group 47297.png",
    "/image/cdnlogo.com_the-ocean 1.png",
    "/image/cdnlogo.com_qatar-mobile 1.png",
  ];

  return (
    <div className="bg-black py-5 px-4 min-h-screen">
              <Image
          src="/image/Ellipse 1441.png"
          alt="feature"
          width={1000}
          height={1600}
          className="absolute left-0  z-10"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-12 text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-[#0a1b0c] bg-opacity-10 p-6 sm:p-8 rounded-2xl border-2 border-[#01C41D]">
          <div>
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold">
              Let Rivio <span className="text-[#00D11F] ">Do the Work for You</span>
            </h1>
            <p className="text-gray-300 font-normal text-[16px] sm:text-[18px] leading-[22px] sm:leading-[24.12px] tracking-[0%] mt-4">
              We automate monitoring and tracking for you, delivering real-time data and alerts—24/7, effortlessly.
            </p>
            <p className="text-gray-300 font-normal text-[16px] sm:text-[18px] leading-[22px] sm:leading-[24.12px] tracking-[0%] mt-4">
              Just set your tracking preferences, and Rivio will handle the rest, so you can focus on growing your business.
            </p>

            <ul className="mt-4 space-y-2">
              <li className="flex items-center space-x-2">
               <FaCheck className="text-[#00D11F]" /> 
                <span>Real-time asset monitoring with instant updates</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaCheck className="text-[#00D11F]" /> 
                <span>Smart alerts to prevent issues before they arise</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaCheck className="text-[#00D11F]" /> 
                <span>Seamless automation for maximum efficiency</span>
              </li>
            </ul>

           <button className="mt-6 bg-gradient-to-r from-[#006A10] to-[#00D11F] text-white px-6 py-3 rounded-md flex items-center gap-2">
        Get started in minutes <ArrowRightIcon className="h-4 w-4" />
    </button>
          </div>

          <div className="bg-[#152e19] bg-opacity-10 p-6 rounded-xl">
            <h1 className="text-lg sm:text-xl font-semibold mb-2">My Tanks</h1>
            <div className="flex flex-wrap gap-2 text-sm mb-4">
              {tankData.map((tank) => (
                <button
                  key={tank.name}
                  onClick={() => setActiveTank(tank.name)}
                  className={`px-[11px] py-[5px] border border-[#1A3F2BCC] bg-[#1A3F2BCC] bg-opacity-80 rounded-[8px] transition text-white text-[14px] leading-[18px] w-[72px] h-[26px] ${activeTank === tank.name ? "bg-green-600" : "hover:bg-opacity-90"
                    }`}
                >
                  {tank.name}
                </button>
              ))}
            </div>
            <div className="w-full bg-gray-700 rounded-full h-4 relative">
              <div
                className="h-4 rounded-full flex items-center justify-center text-white text-xs font-semibold"
                style={{
                  width: `${tankData.find((tank) => tank.name === activeTank)?.percentage}%`,
                  background: "linear-gradient(to right, #017611, #01C51D)",
                }}
              >
                {tankData.find((tank) => tank.name === activeTank)?.percentage}%
              </div>
            </div>

            <div className="mt-4">
              <Image
                src="/image/Graph.jpg"
                width={500}
                height={150}
                alt="Graph"
                className="rounded-lg w-full"
              />
            </div>
          </div>
        </div>

     <div className="mt-16 p-8">
  <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-center mb-8">
    Trusted by <span className="text-[#00D11F]">Industry Leaders</span>
  </h1>
  <p className="text-white text-lg mt-2 text-center max-w-lg lg:max-w-xl mx-auto">
    Leading businesses and municipalities rely on Rivio for seamless IoT-powered monitoring, ensuring efficiency and reliability.
  </p>

  {/* Scrollable Container for Small Screens */}
  <div className="mt-8 w-full overflow-x-auto flex space-x-6 md:space-x-12 justify-center">
    {images.map((imgSrc, index) => (
      <div
        key={index}
        className="bg-[#0e2311] bg-opacity-20 p-4 rounded-xl border-2 border-[#01C41D] w-24 h-24 md:w-32 md:h-32 flex items-center justify-center"
      >
        <Image src={imgSrc} width={60} height={60} alt={`Company ${index + 1}`} />
      </div>
    ))}
  </div>

  <div className="text-center">
    <p className="text-white text-lg mt-5 text-center max-w-lg lg:max-w-xl mx-auto">
      Join them today and take control of your asset tracking with smarter automation.
    </p>

    <button className="mt-6 w-full sm:w-auto px-6 py-2 hover:bg-green-400 transition bg-gradient-to-r from-[#006A10] to-[#00D11F] text-white rounded-[12px]">
      Sign Up Now
    </button>
  </div>
</div>


      </div>
    </div>

  )
}
