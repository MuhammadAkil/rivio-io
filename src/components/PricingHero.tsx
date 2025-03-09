import React from "react";
import Image from "next/image";

export default function PricingHero() {
  return (
    <div className="bg-black min-h-screen text-white py-16 px-4 flex items-center">
               <Image
  src="/image/Ellipse 1440.png"
  alt="Dashboard"
  width={900}
  height={700}
  className="absolute top-2/4 right-0 -translate-y-1/2 z-10"
/>

        <div className="container relative z-10 my-auto mx-auto grid place-items-center text-center">
                    <h1 className="text-center text-white text-3xl sm:text-4xl md:text-5xl lg:max-w-3xl">
                        <span className="font-bold text-white block sm:inline">Trusted by Thousands of</span>
                        <span className="text-[#00D11F] font-bold block sm:inline"> Businesses
and Homeowners Worldwide</span>
                        
        </h1>
        <p className="text-white mt-2 text-center max-w-2xl mt-10 mb-6">From large property management companies to small business owners, Rivio’s innovative solutions help clients simplify and automate their resource management.</p>
                    <div className="flex items-center my-5 justify-center">
                        <button className="bg-gradient-to-r from-[#006A10] to-[#00D11F] text-white px-6 py-1.5 rounded-md text-sm sm:text-base flex items-center gap-2">
                           Get Started Today
                        </button>
                    </div>
                </div>
    </div>
  );
}
