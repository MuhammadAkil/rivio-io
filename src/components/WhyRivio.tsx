import React from "react";
import Image from "next/image";

export default function WhyRivio() {
  return (
    <div className="bg-gradient-to-r from-black to-[#0A2A0A] min-h-screen text-white py-16 px-4 flex flex-col items-center">
      {/* Main Content */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-36 items-center mb-10">
        <div className="flex flex-col items-center md:items-start md:max-w-md">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:max-w-3xl">
            <span className="font-bold text-white sm:inline">
              Why Rivio is Perfect For
            </span>
            <span className="text-[#00D11F] font-bold block sm:inline">
                Golf Course Owners
            </span>
          </h1>

          <p className="text-white mt-4">
            Rivio keeps you ahead with real-time monitoring and smart alerts, so you know what’s happening before there’s a problem. No surprises, no wasted time—just seamless service and fewer costly headaches. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in dolor metus. Ut auctor sollicitudin nisi, a tristique nisl blandit ac.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-10">
            <div className="flex flex-col items-center w-24">
              <img src="/image/monitor_heart (1).png" alt="Real-Time Monitoring" className="w-8 h-8" />
              <span className="mt-2 text-sm text-white text-center">Real-Time Monitoring</span>
            </div>
            <div className="flex flex-col items-center w-24">
              <img src="/image/signal_wifi_off.png" alt="No WiFi Needed" className="w-8 h-8" />
              <span className="mt-2 text-sm text-white text-center">No Wifi Needed</span>
            </div>
            <div className="flex flex-col items-center w-32">
              <img src="/image/objects.png" alt="Smart Alerts" className="w-8 h-8" />
              <span className="mt-2 text-sm text-white text-center">Smart Alerts & Notifications</span>
            </div>
          </div>
        </div>

        <div className="relative flex flex-col justify-center items-center">
          <Image
            src="/image/Screenshot 2025-03-02 at 12.50.11 PM 2.png"
            alt="Dashboard"
            width={500}
            height={500}
            className="relative z-10"
          />
          <button className="mt-6 bg-gradient-to-r from-[#006A10] to-[#00D11F] text-white px-6 py-2 rounded-xl">
            Explore Use Cases
          </button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto rounded-3xl border-2 border-[#00D11F] bg-[#0A1B0C] p-6 flex flex-col transition-all duration-500 mt-16 text-white">
  {/* Star Rating */}
  <div className="flex space-x-1">
    <span className="text-white text-4xl">★</span>
    <span className="text-white text-4xl">★</span>
    <span className="text-white text-4xl">★</span>
    <span className="text-white text-4xl">★</span>
    <span className="text-white text-4xl">★</span>
  </div>

  {/* Reviewer Name */}
  <p className="text-[#00D11F] text-xl font-bold mt-2">— James Caldwell</p>
  <p className="text-sm text-[#FFFFFF]">Owner, GreenHorizon Golf Club</p>

  {/* Review Content */}
  <p className="text-sm text-[#FFFFFF] mt-3">
    "Rivio has revolutionized how we manage our golf course’s water systems. With real-time tracking and instant alerts, we no longer worry about irrigation failures or unexpected water shortages. It’s a game-changer that keeps our course in top condition while saving time and money!"
  </p>
</div>

    </div>
  );
}
