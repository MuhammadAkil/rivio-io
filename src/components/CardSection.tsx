import React from "react";
import Image from "next/image";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

export default function CardSection() {
  return (
    <>
      <div className="bg-gradient-to-r from-black to-[#0A2A0A]  text-white px-4 py-15">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-[70.44px] tracking-normal text-center">
            See How <span className="text-[#00D11F]">Rivio Can Benefit You!</span>
          </h2>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-8 sm:mt-10 md:mt-12">
          <div className="p-4 bg-[#0A1B0C] border border-[#284D2D] hover:bg-[#00D11F] shadow-lg rounded-lg text-center transition-all duration-300 ease-in-out h-48 flex flex-col items-center justify-center group">
            <div className="mb-4">
              <Image
                src="/image/plumbing.png"
                alt="Septic & Water Monitoring"
                width={40}
                height={40}
                className="w-10 sm:w-12 md:w-9 h-auto transition-all duration-300 group-hover:filter group-hover:grayscale group-hover:brightness-0 group-hover:invert"
              />
            </div>
            <h3 className="text-xl font-semibold mt-2 text-white">Septic & Water Monitoring</h3>
          </div>

          <div className="p-4 bg-[#0A1B0C] border border-[#284D2D] hover:bg-[#00D11F] shadow-lg rounded-lg text-center transition-all duration-300 ease-in-out h-48 flex flex-col items-center justify-center group">
            <div className="mb-4">
              <Image
                src="/image/local_shipping.png"
                alt="Delivery Companies"
                width={40}
                height={40}
                className="w-10 sm:w-12 md:w-9 h-auto transition-all duration-300 group-hover:filter group-hover:grayscale group-hover:brightness-0 group-hover:invert"
              />
            </div>
            <h3 className="text-xl font-semibold mt-2 text-white">Delivery Companies</h3>
          </div>

          <div className="p-4 bg-[#0A1B0C] border border-[#284D2D] hover:bg-[#00D11F] shadow-lg rounded-lg text-center transition-all duration-300 ease-in-out h-48 flex flex-col items-center justify-center group">
            <div className="mb-4">
             <Image
  src="/image/delete.png"
  alt="Smart Waste Management"
  width={40}
  height={40}
  className="w-10 sm:w-12 md:w-9 h-auto filter hue-rotate-90 saturate-200 brightness-150 transition-all duration-300 group-hover:filter group-hover:grayscale group-hover:brightness-0 group-hover:invert"
/>
            </div>
            <h3 className="text-xl font-semibold mt-2 text-white">Smart Waste Management</h3>
          </div>

          <div className="p-4 bg-[#0A1B0C] border border-[#284D2D] hover:bg-[#00D11F] shadow-lg rounded-lg text-center transition-all duration-300 ease-in-out h-48 flex flex-col items-center justify-center group">
            <div className="mb-4">
              <Image
                src="/image/camping.png"
                alt="Campground Management"
                width={40}
                height={40}
                className="w-10 sm:w-12 md:w-9 h-auto transition-all duration-300 group-hover:filter group-hover:grayscale group-hover:brightness-0 group-hover:invert"
              />
            </div>
            <h3 className="text-xl font-semibold mt-2 text-white">Campground Management</h3>
          </div>

          <div className="p-4 bg-[#0A1B0C] border border-[#284D2D] hover:bg-[#00D11F] shadow-lg rounded-lg text-center transition-all duration-300 ease-in-out h-48 flex flex-col items-center justify-center group">
            <div className="mb-4">
              <Image
                src="/image/directions_boat.png"
                alt="Marinas"
                width={40}
                height={40}
                className="w-10 sm:w-12 md:w-9 h-auto transition-all duration-300 group-hover:filter group-hover:grayscale group-hover:brightness-0 group-hover:invert"
              />
            </div>
            <h3 className="text-xl font-semibold mt-2 text-white">Marinas</h3>
          </div>

          <div className="p-4 bg-[#0A1B0C] border border-[#284D2D] hover:bg-[#00D11F] shadow-lg rounded-lg text-center transition-all duration-300 ease-in-out h-48 flex flex-col items-center justify-center group">
            <div className="mb-4">
              <Image
                src="/image/apartment.png"
                alt="Muncipalities"
                width={40}
                height={40}
                className="w-10 sm:w-12 md:w-9 h-auto transition-all duration-300 group-hover:filter group-hover:grayscale group-hover:brightness-0 group-hover:invert"
              />
            </div>
            <h3 className="text-xl font-semibold mt-2 text-white">Muncipalities</h3>
          </div>

          <div className="p-4 bg-[#0A1B0C] border border-[#284D2D] hover:bg-[#00D11F] shadow-lg rounded-lg text-center transition-all duration-300 ease-in-out h-48 flex flex-col items-center justify-center group">
            <div className="mb-4">
              <Image
                src="/image/wc.png"
                alt="Public Restrooms"
                width={40}
                height={40}
                className="w-10 sm:w-12 md:w-9 h-auto transition-all duration-300 group-hover:filter group-hover:grayscale group-hover:brightness-0 group-hover:invert"
              />
            </div>
            <h3 className="text-xl font-semibold mt-2 text-white">Public Restrooms</h3>
          </div>

          <div className="p-4 bg-[#0A1B0C] border border-[#284D2D] hover:bg-[#00D11F] shadow-lg rounded-lg text-center transition-all duration-300 ease-in-out h-48 flex flex-col items-center justify-center group">
            <div className="mb-4">
              <Image
                src="/image/agriculture.png"
                alt="Farm Operations"
                width={40}
                height={40}
                className="w-10 sm:w-12 md:w-9 h-auto transition-all duration-300 group-hover:filter group-hover:grayscale group-hover:brightness-0 group-hover:invert"
              />
            </div>
            <h3 className="text-xl font-semibold mt-2 text-white">Farm Operations</h3>
          </div>
        </div>

       <div className="flex justify-center items-center mt-8 sm:mt-10 md:mt-12">
  <button className="bg-gradient-to-r from-[#006A10] to-[#00D11F] text-white px-6 py-2 rounded-md text-sm sm:text-base flex items-center gap-2">
                      See More
                      <ArrowRightIcon className="h-4 w-4" />
  </button>
</div>
      </div>
    </>
  );
}