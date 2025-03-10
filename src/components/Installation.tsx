import React from "react";
import Image from "next/image";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { FaCheck } from "react-icons/fa";

export default function Installation() {
  const features = [
    { img: "/image/directions_car.png", text: "Car & Vehicle", width: 30, height: 40 },
    { img: "/image/two_wheeler.png", text: "Motor Bikes", width: 30, height: 40 },
    { img: "/image/inventory_2.png", text: "Containers", width: 30, height: 40 },
    { img: "/image/directions_boat.png", text: "Boats & Cruises", width: 30, height: 40 },
    { img: "/image/helicopter.png", text: "Drones", width: 30, height: 40 },
      { img: "/image/directions_bike.png", text: "Bicycle", width: 30, height: 40 },
      { img: "/image/handyman.png", text: "Tools", width: 30, height: 40 },
    { img: "/image/delivery_truck_speed.png", text: "Shipments", width: 30, height: 40 },
  ];

  return (
    <div className="bg-black min-h-screen text-white py-4 px-4 flex items-center">
      <Image
        src="/image/Ellipse 1440.png"
        alt="Dashboard"
        width={900}
        height={700}
        className="absolute top-2/4 right-0 -translate-y-1/2 z-10"
      />

      <div className="container relative z-10 my-auto mx-auto grid place-items-center text-center">
        <h1 className="text-center text-white text-3xl sm:text-4xl md:text-5xl lg:max-w-3xl">
          <span className="font-bold text-white block sm:inline">Installation </span>
          <span className="text-[#00D11F] font-bold block sm:inline">& Maintenance</span>
        </h1>
        <p className="text-white text-center max-w-2xl mt-4 mb-6">
          Once installed, the sensor continuously monitors levels with high precision.
        </p>
        <div className="flex flex-col items-center my-5 justify-center">
          <div className="flex flex-col items-center">
            <div className="flex justify-center space-x-16 mb-2">
              <span className="flex items-center space-x-2">
                <FaCheck className="text-[#00D11F] w-5 h-5" />
                <span>Follow the installation guide for a hassle-free setup.</span>
              </span>
              <span className="flex items-center space-x-2">
                <FaCheck className="text-[#00D11F] w-5 h-5" />
                <span>Keep sensors dust-free for optimal performance.</span>
              </span>
            </div>
            <div className="flex justify-center mt-4">
              <span className="flex items-center space-x-2">
                <FaCheck className="text-[#00D11F] w-5 h-5" />
                <span>Replace batteries periodically for uninterrupted tracking.</span>
              </span>
            </div>
          </div>
          <button className="bg-gradient-to-r from-[#006A10] to-[#00D11F] text-white px-6 py-2 rounded-md text-sm sm:text-base flex items-center gap-2 mt-16">
            Book a Free Call
            <ArrowRightIcon className="h-4 w-4" />
          </button>
              </div>
              
        <div className="mt-24 px-4 mb-24">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-16">
            Key Features <span className="text-[#00D11F]">& Benefits</span>
          </h1>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-6 justify-center text-center">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 flex flex-col items-center justify-center"
              >
                <Image
                  src={feature.img}
                  width={feature.width}
                  height={feature.height}
                  alt={feature.text}
                  className="mb-3"
                />
                <p className="text-sm font-medium">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}