import React from 'react'
import Image from "next/image";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

export default function TrackSection() {
    return (
        <div className="bg-[#000000] py-20 px-4">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 place-items-center">
                {/* GPS Tracker Card */}
                <div className="p-8 bg-[#0A1B0C] border-2 border-[#01C41D] shadow-lg rounded-lg text-center md:text-left transition-all duration-300 ease-in-out relative flex flex-col items-center md:items-start">
                    <div className="absolute -top-5 bg-[#0A1B0C] border-2 border-[#01C41D] px-6 py-3 rounded-lg flex items-center">
                       <Image
  src="/image/Layer 1.png"
  alt="Smart Waste Management"
  width={40}
  height={40}
  className="w-10 sm:w-12 md:w-9 h-auto filter hue-rotate-90 saturate-200 brightness-150 transition-all duration-300 group-hover:filter group-hover:grayscale group-hover:brightness-0 group-hover:invert"
/>
                        <span className="text-white font-bold text-4xl ml-6">GPS Tracker</span>
                    </div>
                    <h3 className="text-4xl md:text-4xl font-bold mt-16 text-white">Track Your Assets</h3>
                    <p className="text-[#01C41D] text-3xl md:text-4xl font-semibold">Anytime, Anywhere</p>
                    <p className="text-white font-normal text-md leading-[24.12px] tracking-[0%] mt-4 text-center md:text-left">
                        Rivio’s GPS tracking ensures real-time location visibility, helping you manage assets with precision and efficiency.
                    </p>

                   <div className="flex justify-center md:justify-start w-full">
    <button className="mt-6 bg-gradient-to-r from-[#006A10] to-[#00D11F] text-white px-6 py-3 rounded-md flex items-center gap-2">
        Browse Opportunities <ArrowRightIcon className="h-4 w-4" />
    </button>
</div>

                    <div className="mt-6 text-center md:text-left">
                        <h4 className="text-white font-normal text-[28px] leading-[38.02px] tracking-[0%] mb-4">
                            Key Features:
                        </h4>
  <Image
  src="/image/rree.png"
  alt="Smart Waste Management"
  width={40}
  height={40}
  className="w-10 sm:w-12 md:w-9 h-auto filter hue-rotate-90 saturate-200 brightness-150 transition-all duration-300 group-hover:filter group-hover:grayscale group-hover:brightness-0 group-hover:invert"
/>
                        <p className="text-[#01C41D] font-normal text-[24px] leading-[32.59px] tracking-[0%] mt-2">Live Tracking & History</p>
                        <p className="text-white text-lg  font-normal leading-[32.16px] tracking-[0%] mb-4">Monitor movement and access past location data.</p>
                          <Image
  src="/image/rree.png"
  alt="Smart Waste Management"
  width={40}
  height={40}
  className="w-10 sm:w-12 md:w-9 h-auto filter hue-rotate-90 saturate-200 brightness-150 transition-all duration-300 group-hover:filter group-hover:grayscale group-hover:brightness-0 group-hover:invert"
/>
                        <p className="text-[#01C41D] font-normal text-[24px] leading-[32.59px] tracking-[0%] mt-2">
                            Geofencing Alerts
                        </p>

                        <p className="text-white text-lg font-normal leading-[32.16px] tracking-[0%] mb-4">Get notified when assets enter or leave designated areas.</p>
                                                  <Image
  src="/image/rr.png"
  alt="Smart Waste Management"
  width={40}
  height={40}
  className="w-10 sm:w-12 md:w-9 h-auto filter hue-rotate-90 saturate-200 brightness-150 transition-all duration-300 group-hover:filter group-hover:grayscale group-hover:brightness-0 group-hover:invert"
/>
                        <p className="text-[#01C41D] font-normal text-[24px] leading-[32.59px] tracking-[0%] mt-2">Multi-Device Access</p>
                        <p className="text-white text-lg  font-normal leading-[32.16px] tracking-[0%]">Track everything from any device, anytime.</p>
                    </div>
                </div>

                {/* Level Sensor Card */}
                <div className="p-8 bg-[#0A1B0C] border-2 border-[#01C41D] shadow-lg rounded-lg text-center md:text-left transition-all duration-300 ease-in-out relative flex flex-col items-center md:items-start">
                    <div className="absolute -top-5 bg-[#0A1B0C] border-2 border-[#01C41D] px-6 py-3 rounded-lg flex items-center">
                            <Image
  src="/image/Layer 2.png"
  alt="Smart Waste Management"
  width={40}
  height={40}
  className="w-10 sm:w-12 md:w-9 h-auto filter hue-rotate-90 saturate-200 brightness-150 transition-all duration-300 group-hover:filter group-hover:grayscale group-hover:brightness-0 group-hover:invert"
/>
                        <span className="text-white font-bold text-4xl ml-6">Level Sensor</span>
                    </div>
                    <h3 className="text-4xl md:text-4xl font-bold mt-16 text-white">Smarter Monitoring</h3>
                    <p className="text-[#01C41D] text-3xl md:text-4xl font-semibold">for Tanks & Containers</p>
                    <p className="text-white font-normal text-md leading-[24.12px] tracking-[0%] mt-4 text-center md:text-left">
                        Rivio’s GPS tracking ensures real-time location visibility, helping you manage assets with precision and efficiency.
                    </p>

                   <div className="flex justify-center md:justify-start w-full">
    <button className="mt-6 bg-gradient-to-r from-[#006A10] to-[#00D11F] text-white px-6 py-3 rounded-md flex items-center gap-2">
        Browse Opportunities <ArrowRightIcon className="h-4 w-4" />
    </button>
</div>

                    <div className="mt-6 text-center md:text-left">
                        <h4 className="text-white font-normal text-[28px] leading-[38.02px] tracking-[0%] mb-4">
                            Key Features:
                        </h4>
                            <Image
  src="/image/Layer 2.png"
  alt="Smart Waste Management"
  width={40}
  height={40}
  className="w-10 sm:w-12 md:w-9 h-auto filter hue-rotate-90 saturate-200 brightness-150 transition-all duration-300 group-hover:filter group-hover:grayscale group-hover:brightness-0 group-hover:invert"
/>
                        <p className="text-[#01C41D] font-normal text-[24px] leading-[32.59px] tracking-[0%] mt-2">Ultrasonic Sensor Accuracy</p>
                        <p className="text-white text-lg  font-normalleading-[32.16px] tracking-[0%] mb-4">Monitor fluid levels with precision.</p>
                                                                          <Image
  src="/image/rr.png"
  alt="Smart Waste Management"
  width={40}
  height={40}
  className="w-10 sm:w-12 md:w-9 h-auto filter hue-rotate-90 saturate-200 brightness-150 transition-all duration-300 group-hover:filter group-hover:grayscale group-hover:brightness-0 group-hover:invert"
/>
                        <p className="text-[#01C41D] font-normal text-[24px] leading-[32.59px] tracking-[0%] mt-2">Instant Alerts</p>
                        <p className="text-white text-lg  font-normal leading-[32.16px] tracking-[0%] mb-4">Get notified when refill or maintenance is needed.</p>
                                                                          <Image
  src="/image/Layer 1 (1).png"
  alt="Smart Waste Management"
  width={40}
  height={40}
  className="w-10 sm:w-12 md:w-9 h-auto filter hue-rotate-90 saturate-200 brightness-150 transition-all duration-300 group-hover:filter group-hover:grayscale group-hover:brightness-0 group-hover:invert"
/>
                        <p className="text-[#01C41D] font-normal text-[24px] leading-[32.59px] tracking-[0%] mt-2">Remote Dashboard Access</p>
                        <p className="text-white text-lg font-normal leading-[32.16px] tracking-[0%]">
                            View all tank levels from one intuitive platform.
                        </p>

                    </div>
                </div>
            </div>
        </div>

    )
}
