import React from "react";
import Image from "next/image";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

export default function CardSection() {
  return (
    <div className="bg-black text-white px-4 py-15 flex flex-col items-center relative">
                 <Image
  src="/image/Ellipse 1442.png"
  alt="Dashboard"
  width={800}
  height={900}
  className="absolute top-0 right-0  z-10"
/>

      {/* Section Title */}
      <div className="text-center mt-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-[70.44px] tracking-normal">
          See How <span className="text-[#00D11F]">Rivio Can Benefit You!</span>
        </h2>
      </div>

      {/* Card Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-8 sm:mt-10 md:mt-12">
        {[
          { src: "plumbing.png", title: "Septic & Water Monitoring" },
          { src: "local_shipping.png", title: "Delivery Companies" },
          { src: "delete.png", title: "Smart Waste Management" },
          { src: "camping.png", title: "Campground Management" },
          { src: "directions_boat.png", title: "Marinas" },
          { src: "apartment.png", title: "Municipalities" },
          { src: "wc.png", title: "Public Restrooms" },
          { src: "agriculture.png", title: "Farm Operations" },
        ].map((item, index) => (
          <div
            key={index}
            className="p-4 bg-[#0A1B0C] border border-[#284D2D] hover:bg-[#00D11F] shadow-lg rounded-lg text-center transition-all duration-300 ease-in-out h-48 flex flex-col items-center justify-center group"
          >
            <div className="mb-4">
              <Image
                src={`/image/${item.src}`}
                alt={item.title}
                width={40}
                height={40}
                className="w-10 sm:w-12 md:w-9 h-auto transition-all duration-300 group-hover:filter group-hover:grayscale group-hover:brightness-0 group-hover:invert"
              />
            </div>
            <h3 className="text-xl font-semibold mt-2 text-white">{item.title}</h3>
          </div>
        ))}
      </div>

      {/* See More Button */}
      <div className="flex justify-center items-center mt-8 sm:mt-10 md:mt-12">
        <button className="bg-gradient-to-r from-[#006A10] to-[#00D11F] text-white px-6 py-2 rounded-md text-sm sm:text-base flex items-center gap-2">
          See More
          <ArrowRightIcon className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
