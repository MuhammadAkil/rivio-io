import React from "react";
import Image from "next/image";

export default function AboutUs() {
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
                        <span className="font-bold text-white block sm:inline">Smart Solution For </span>
                        <span className="text-[#00D11F] font-bold block sm:inline"> Effortless</span>
                        <br />
                        <span className=" text-white block sm:inline">Resource Management!</span>
        </h1>
        <p className="text-white mt-2 text-center max-w-2xl mt-10 mb-6">Rivio empowers businesses and homeowners with cutting-edge IoT technology, providing real-time insights, automation, and seamless efficiency.</p>
                    <div className="flex items-center my-5 justify-center">
                        <button className="bg-gradient-to-r from-[#006A10] to-[#00D11F] text-white px-6 py-1.5 rounded-md text-sm sm:text-base flex items-center gap-2">
                           Explore Solutions
                        </button>
                    </div>
                </div>
    </div>
  );
}
