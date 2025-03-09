import React from "react";
import Image from "next/image";

export default function OurMission() {
  return (
      <div className="bg-black min-h-screen text-white py-16 px-4 flex flex-col items-center">
                              <Image
            src="/image/Ellipse 1441.png"
            alt="Dashboard"
            width={900}
            height={700}
            className="absolute  left-0 -translate-y-1/2 z-10"
      />
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-36 items-center mb-10">
        <div className="flex flex-col items-center md:items-start md:max-w-md">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:max-w-3xl">
            <span className="font-bold text-white sm:inline mr-2">
            Our
            </span>
            <span className="text-[#00D11F] font-bold block sm:inline">
               Mission
            </span>
          </h1>
          <p className="text-white mt-8">
           At Rivio, we’re on a mission to transform the way you manage your home and business. By blending modern technology with time-tested practices, we craft smart solutions that make daily tasks smoother and more reliable. Our goal is to empower service providers to run their businesses more efficiently and help homeowners simplify everyday chores—ensuring that efficiency, trust, and ease of use are at the heart of everything we do.
          </p>
        </div>

        <div className="relative flex flex-col justify-center items-center">
          <Image
            src="/image/mission.avif"
            alt="Dashboard"
            width={500}
            height={500}
            className="relative z-10 rounded-lg border-2 border-[#00D11F]"
          />
        </div>
          </div>
          
 <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-36 items-center mb-10 mt-40">
  <div className="relative flex flex-col justify-center items-center md:order-1">
    <Image
      src="/image/vission.avif"
      alt="Dashboard"
      width={500}
      height={500}
      className="relative z-10 rounded-lg border-2 border-[#00D11F]"
    />
  </div>
  <div className="flex flex-col items-center md:items-start md:max-w-md md:order-2">
    <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:max-w-3xl">
      <span className="font-bold text-white sm:inline mr-2">
        Our
      </span>
      <span className="text-[#00D11F] font-bold block sm:inline">
        Vision
      </span>
    </h1>
    <p className="text-white mt-8">
      We envision a future where everyday tasks are automated and optimized, allowing you to focus on what truly matters. By bridging the gap between established service providers and modern technology, we aim to lead the smart solutions market for streamlined service management—setting new standards for simplicity and ease.
    </p>
  </div>
      </div>
      
       <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-36 items-center mb-10 mt-40">
        <div className="flex flex-col items-center md:items-start md:max-w-md">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:max-w-3xl">
            <span className="font-bold text-white sm:inline mr-2">
            Our
            </span>
            <span className="text-[#00D11F] font-bold block sm:inline">
               Team
            </span>
          </h1>
          <p className="text-white mt-8">
          At Rivio, our diverse team brings together industry experts in logistics, system maintenance, and advanced software development. From optimizing large-scale operations to designing smart automation tools, we blend our skills to create intuitive technology that transforms everyday service management—making processes faster, smarter, and more reliable for businesses and homeowners alike.
          </p>
        </div>

        <div className="relative flex flex-col justify-center items-center">
          <Image
            src="/image/team.jpg"
            alt="Dashboard"
            width={500}
            height={500}
            className="relative z-10 rounded-lg border-2 border-[#00D11F]"
          />
        </div>
          </div>
          

    </div>
  );
}
