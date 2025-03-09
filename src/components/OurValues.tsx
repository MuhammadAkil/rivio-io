"use client";
import React from "react";
import Image from "next/image";

export default function OurValues() {
  return (
      <div className="bg-black text-white px-4 py-26 flex flex-col items-center">
                            
                        <Image
                  src="/image/Ellipse 1441.png"
                  alt="Dashboard"
                  width={900}
                  height={700}
                  className="absolute  left-0 -translate-y-1/2 z-10"
            />
      <div className="text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-[70.44px] tracking-normal text-center">
          Our <span className="text-[#00D11F]">Values</span>
        </h2>
      </div>
      <div className="flex flex-col items-center w-full">
        <div className="max-w-4xl w-full grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6 mt-8 sm:mt-10 md:mt-12">
          {useCases1.map((item, index) => (
            <GridItem key={index} {...item} />
          ))}
        </div>
        <div className="max-w-4xl w-full grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6 mt-8 sm:mt-10 md:mt-12">
          {useCases2.map((item, index) => (
            <GridItem key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}

interface GridItemProps {
  label: string;
  content: string;
}

const GridItem: React.FC<GridItemProps> = ({ content, label }) => (
  <div className="group flex flex-col justify-center items-center text-center gap-2 p-6 bg-[#0A1B0C] border border-[#00D11F] shadow-lg rounded-lg transition-all duration-300 ease-in-out">
    <h3 className="text-lg sm:text-xl font-semibold text-[#00D11F]">{label}</h3>
    <p className="text-sm text-gray-300">
      <span className="text-[#00D11F] text-2xl font-bold">“</span>
      {content}
      <span className="text-[#00D11F] text-2xl font-bold">”</span>
    </p>
  </div>
);

const useCases1: GridItemProps[] = [
  {
    label: "Innovation",
    content:
      "We embrace fresh ideas and creative solutions that challenge the status quo and make everyday tasks easier.",
  },
  {
    label: "Integrity",
    content:
      "We believe in honesty, transparency, and ethical business practices, building trust with every interaction.",
  },
];

const useCases2: GridItemProps[] = [
  {
    label: "Customer Focus",
    content:
      "Your needs drive our technology—we listen, adapt, and build solutions that truly benefit you.",
  },
  {
    label: "Excellence",
    content:
      "We strive to exceed expectations, delivering top-tier solutions and continuous improvements.",
  },
];

export { GridItem };
