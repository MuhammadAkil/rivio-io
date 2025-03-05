import React from "react";
import Image from "next/image";

export default function FeatureHero() {
  return (
    <div className="bg-gradient-to-r from-black to-[#0A2A0A] min-h-screen text-white py-16 px-4 flex items-center">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-36 items-center">
        {/* Left Content */}
        <div className="flex flex-col items-center md:items-start md:max-w-md">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:max-w-3xl">
  <span className="font-bold text-white block">
    Smart & Accurate
  </span>
  <span className="text-[#00D11F] font-bold block">
    Level Sensors for
  </span>
  <span className="text-white block">
    Any Application
  </span>
</h1>


          <p className="text-white mt-4">Rivio’s advanced level sensors provide real-time monitoring, precise measurements, and seamless integration for various industries
          </p>
          <button className="mt-6 bg-gradient-to-r from-[#006A10] to-[#00D11F] text-white px-6 py-2 rounded-xl">
            Buy Now
          </button>
        </div>
<Image
  src="/image/image 73.png"
  alt="Dashboard"
  width={500}
  height={500}
  className="w-full max-w-[900px] h-auto" 
/>


      </div>
    </div>
  );
}
