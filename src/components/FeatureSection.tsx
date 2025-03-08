"use client";
import React from "react";
import "font-awesome/css/font-awesome.min.css"; 
import Image from "next/image";

export default function FeatureSection() {
  return (
    <>
      <div className="bg-black text-white py-12 sm:py-16 px-4">
        <Image
    src="/image/Ellipse 1441.png"
    alt="feature"
    width={800}
    height={600}
    className="absolute left-0  z-10"
/>

        <div className="max-w-7xl mx-auto bg-[#0A1B0D] bg-opacity-80 border border-[#284D2D] rounded-lg p-4 sm:p-6 md:p-8 flex flex-col sm:flex-row justify-center items-center text-center gap-3 sm:gap-4 md:gap-6">
          <div className="flex-1 flex flex-col items-center p-3 sm:p-4 bg-[#0A1B0D] bg-opacity-80 rounded-lg shadow-md">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#00D11F] mb-1 sm:mb-2">
              5,000+
            </h2>
            <p className="text-xs sm:text-sm md:text-lg text-white">Septic Tanks Monitored</p>
          </div>

          <div className="hidden sm:block w-px bg-[#00D11F] h-12 sm:h-16 md:h-24 mx-2 sm:mx-4"></div>

          <div className="flex-1 flex flex-col items-center p-3 sm:p-4 bg-[#0A1B0D] bg-opacity-80 rounded-lg shadow-md">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#00D11F] mb-1 sm:mb-2">
              8,000+
            </h2>
            <p className="text-xs sm:text-sm md:text-lg text-white">Trash Bins Managed</p>
          </div>

          <div className="hidden sm:block w-px bg-[#00D11F] h-12 sm:h-16 md:h-24 mx-2 sm:mx-4"></div>

          <div className="flex-1 flex flex-col items-center p-3 sm:p-4 bg-[#0A1B0D] bg-opacity-80 rounded-lg shadow-md">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#00D11F] mb-1 sm:mb-2">
              100%
            </h2>
            <p className="text-xs sm:text-sm md:text-lg text-white">Customer Satisfaction</p>
          </div>
        </div>
        <div className="text-center mt-10 sm:mt-12 md:mt-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.2] tracking-normal text-center text-white">
            Application <span className="text-[#00D11F]">Features</span>
          </h2>
          <p className="text-white mt-2 max-w-xs sm:max-w-md md:max-w-xl mx-auto text-xs sm:text-sm md:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in dolor metus.
          </p>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-10 md:mt-12">
          <div className="p-4 sm:p-6 bg-[#0A1B0C] border border-transparent hover:border-[#01C41D] shadow-lg rounded-lg text-left transition-all duration-300 ease-in-out flex flex-col items-start">
            <Image
              src="/image/Mask group.png"
              alt="Real-Time IoT Monitoring"
              width={40}
              height={40}
              className="w-10 sm:w-12 md:w-14 h-auto"
            />
            <h3 className="text-lg sm:text-xl font-semibold mt-3 text-white">
              Real-Time IoT Monitoring
            </h3>
            <p className="text-white text-xs sm:text-sm mt-4">
              Stay ahead with real-time tracking of your assets, ensuring seamless operations.
            </p>
          </div>

          <div className="p-4 sm:p-6 bg-[#0A1B0C] border border-transparent hover:border-[#01C41D] shadow-lg rounded-lg text-left transition-all duration-300 ease-in-out flex flex-col items-start">
            <Image
              src="/image/objects.png"
              alt="Smart Alerts & Notifications"
              width={40}
              height={40}
              className="w-10 sm:w-12 md:w-9 h-auto"
            />
            <h3 className="text-lg sm:text-xl font-semibold mt-3 text-white">
              Smart Alerts & Notifications
            </h3>
            <p className="text-white text-xs sm:text-sm mt-4">
              Receive instant alerts on critical status changes, preventing costly problems.
            </p>
          </div>

          <div className="p-4 sm:p-6 bg-[#0A1B0C] border border-transparent hover:border-[#01C41D] shadow-lg rounded-lg text-left transition-all duration-300 ease-in-out flex flex-col items-start">
            <Image
              src="/image/Mask group (1).png"
              alt="Automated Data Insights"
              width={40}
              height={40}
              className="w-10 sm:w-12 md:w-12 h-auto"
            />
            <h3 className="text-lg sm:text-xl font-semibold mt-3 text-white">
              Automated Data Insights
            </h3>
            <p className="text-white text-xs sm:text-sm mt-4">
              Leverage analytics to gain actionable insights, optimizing resource usage.
            </p>
          </div>

          <div className="p-4 sm:p-6 bg-[#0A1B0C] border border-transparent hover:border-[#01C41D] shadow-lg rounded-lg text-left transition-all duration-300 ease-in-out flex flex-col items-start">
            <Image
              src="/image/objects.png"
              alt="Remote Access & Control"
              width={40}
              height={40}
              className="w-10 sm:w-12 md:w-9 h-auto"
            />
            <h3 className="text-lg sm:text-xl font-semibold mt-3 text-white">
              Remote Access & Control
            </h3>
            <p className="text-white text-xs sm:text-sm mt-4">
              Monitor and manage your assets from anywhere with an intuitive dashboard.
            </p>
          </div>

          <div className="p-4 sm:p-6 bg-[#0A1B0C] border border-transparent hover:border-[#01C41D] shadow-lg rounded-lg text-left transition-all duration-300 ease-in-out flex flex-col items-start">
            <Image
              src="/image/settings.png"
              alt="Seamless Integration"
              width={40}
              height={40}
              className="w-10 sm:w-12 md:w-9 h-auto"
            />
            <h3 className="text-lg sm:text-xl font-semibold mt-3 text-white">
              Seamless Integration with Existing Systems
            </h3>
            <p className="text-white text-xs sm:text-sm mt-4">
              Easily integrate with your existing software and hardware for smooth transitions.
            </p>
          </div>

          <div className="p-4 sm:p-6 bg-[#0A1B0C] border border-transparent hover:border-[#01C41D] shadow-lg rounded-lg text-left transition-all duration-300 ease-in-out flex flex-col items-start">
            <Image
              src="/image/Mask group.png"
              alt="Cost-Effective Solutions"
              width={40}
              height={40}
              className="w-10 sm:w-12 md:w-14 h-auto"
            />
            <h3 className="text-lg sm:text-xl font-semibold mt-3 text-white">
              Cost-Effective & Scalable Solutions
            </h3>
            <p className="text-white text-xs sm:text-sm mt-4">
              Grow your business with flexible, budget-friendly IoT solutions.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}