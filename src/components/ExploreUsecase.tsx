"use client";
import React from "react";
import Image from "next/image";

export default function Explore() {
  return (
    <div className="bg-black text-white px-4 py-26">
               <Image
                src="/image/Ellipse 1441.png"
                alt="feature"
                width={1000}
                height={1600}
                className="absolute left-0  z-10"
            />
      <div className="text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-[70.44px] tracking-normal text-center">
          Explore <span className="text-[#00D11F]">Use Cases</span>
        </h2>
      </div>

      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-x-6 gap-y-6 mt-8 sm:mt-10 md:mt-12">
        {useCases1.map((item, index) => (
          <GridItem key={index} {...item} />
        ))}
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-6 mt-8">
        {useCases2.map((item, index) => (
          <GridItem key={index} {...item} />
        ))}
      </div>
      
      <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6 mt-8">
        {useCases3.map((item, index) => (
          <GridItem key={index} {...item} />
        ))}
      </div>





          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-36 items-center mt-30">
              <div className="flex flex-col items-center md:items-start md:max-w-md">
                <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:max-w-3xl">
                  <span className="font-bold text-white sm:inline mr-2">
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
    </div>



    
  );
}
interface GridItemProps {
  src: string;
  label: string;
}
const GridItem: React.FC<GridItemProps> = ({ src, label }) => (
  <div className="group flex justify-center items-center gap-4 p-4 bg-[#0A1B0C] border border-[#284D2D] hover:bg-[#00D11F] shadow-lg rounded-lg transition-all duration-300 ease-in-out">
    <Image
      src={src}
      alt={label}
      width={40}
      height={40}
      className="w-10 h-10 transition-all duration-300 group-hover:filter group-hover:invert group-hover:brightness-0"
    />
    <h3 className="text-sm sm:text-sm font-semibold text-white">{label}</h3>
  </div>
);
const useCases1: GridItemProps[] = [
  { src: "/image/plumbing.png", label: "Septic & Water Monitoring" },
  { src: "/image/local_shipping.png", label: "Salt Delivery" },
  { src: "/image/golf_course.png", label: "Golf Course" },
];
const useCases2: GridItemProps[] = [
  { src: "/image/camping.png", label: "Marinas" },
  { src: "/image/directions_boat.png", label: "Municipalities" },
  { src: "/image/wc.png", label: "Public Restrooms" },
  { src: "/image/camping.png", label: "Campground Management" },
];
const useCases3: GridItemProps[] = [
  { src: "/image/agriculture.png", label: "Farm Operations" },
  { src: "/image/ac_unit.png", label: "Anti-Icing & Deicing Solutions" },
];


export { GridItem };
