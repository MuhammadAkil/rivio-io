"use client"; 
import Image from "next/image";
import React, { useState, useEffect } from "react";

const testimonials = [
  {
    quote:
      "Thanks to Rivio, our septic tank monitoring is now fully automated. No more manual checks reliable data whenever we need it!",
    name: "Sarah Mitchell",
    role: "Facility Manager, Eco Waste Solutions",
  },
  {
    quote:
      "Rivio has revolutionized the way we manage our operations. It's accurate, efficient, and saves us time!",
    name: "James Carter",
    role: "Operations Manager, GreenTech",
  },
  {
    quote:
      "This platform has made our workflow so much smoother. Highly recommended for businesses!",
    name: "Emily Dawson",
    role: "CEO, Smart Logistics",
  },
];

export default function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black p-6 sm:p-8">
      <div className="my-7">
        <h2 className="text-5xl sm:text-1xl text-white font-bold leading-[70.44px] tracking-normal text-center">
          What Our <span className="text-[#00D11F]">Clients Say</span>
        </h2>
        <p className="text-[#ECECEC] text-center mt-2 max-w-4xl mx-auto text-[16px] sm:text-[18px] mb-6">
          Businesses worldwide trust Rivio for smarter tracking and seamless automation. Here’s what they have to say.
        </p>
      </div>

      {/* Testimonial Card */}
      <div className="max-w-xl mx-auto rounded-3xl border-2 border-[#00D11F] bg-[#0A1B0C] p-6 flex flex-col items-center transition-all duration-500">
        <div className="self-start mb-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-[#00D11F] rotate-180"
          >
            <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
            <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
          </svg>
        </div>

        <p className="text-white text-center mb-6">{testimonials[currentIndex].quote}</p>

        <div className="self-end mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-[#00D11F]"
          >
            <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
            <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
          </svg>
              </div>
              
    <div className="mb-3 rounded-full border-2 border-white overflow-hidden h-20 w-20 flex items-center justify-center">
  <Image
    src="/image/Ellipse 1426.png"
    alt="Septic & Water Monitoring"
    width={80}
    height={80}
    className="w-full h-full object-cover"
  />
</div>

        <h3 className="text-[#00D11F] text-xl font-bold mb-1">{testimonials[currentIndex].name}</h3>
        <p className="text-white text-sm">{testimonials[currentIndex].role}</p>
      </div>

      <div className="flex justify-center mt-4 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              currentIndex === index ? "bg-[#00D11F] w-4 h-4" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
