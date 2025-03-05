import React from "react";
import Image from "next/image";

export default function ExploreRivo() {
  return (
    <div className="bg-gradient-to-l from-black to-[#0A2A0A] text-white px-4 py-26 flex flex-col items-center">
      <div className="text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-[70.44px] tracking-normal text-center">
          Explore <span className="text-[#00D11F]">Rivio</span>
        </h2>
      </div>
      <Image
        src="/image/Screenshot 2025-03-02 at 12.50.11 PM 1.png"
        width={1200} 
        height={1000} 
        alt="Graph"
        className="rounded-lg  mt-6" 
          />
           <button className="mt-6 px-6 py-2 hover:bg-green-400 transition bg-gradient-to-r from-[#006A10] to-[#00D11F] text-white px-4 py-2 rounded-[12px]">
                            Book a Demo
          </button>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-[70.44px] tracking-normal text-center mt-24">
          Explore Our Golf <span className="text-[#00D11F]">Course Feature</span>
          </h2>
          
          <div className="max-w-6xl mx-auto mt-8 sm:mt-10 md:mt-12 space-y-8">

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
  {[
    { img: "/image/build.png", text: "Rivio sensors monitor water levels in real time, providing accurate and up-to-date data." },
    { img: "/image/notifications_active.png", text: "Get instant alerts when something needs attention, preventing costly repairs and ensuring proactive maintenance." },
    { img: "/image/signal_wifi_off (1).png", text: "Rivio sensors use cellular connectivity, so they work even if your home Wi-Fi goes offline." }
  ].map((item, index) => (
    <div key={index} className="p-6 bg-[#0A1B0C] border border-[#00D11F] shadow-lg rounded-lg text-center transition-all duration-300 ease-in-out w-64 h-64 flex flex-col items-center justify-center group hover:shadow-[0_0_15px_3px_#00D11F]">
      <div className="mb-4 flex items-center justify-center w-14 h-14 bg-[#00D11F] rounded-full">
        <Image src={item.img} alt="Septic & Water Monitoring" width={32} height={32} className="w-8 h-auto" />
      </div>
      <p className="text-[#FFFFFF] text-center text-sm leading-relaxed px-4">{item.text}</p>
    </div>
  ))}
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
  {[
    { img: "/image/Group 1917158643.png", text: "Rivio connects directly with your service providers through automated notifications, making service management effortless." },
    { img: "/image/dashboard.png", text: "Monitor all your home systems, check historical data, and control everything from an intuitive dashboard." },
    { img: "/image/battery_5_bar.png", text: "Powered by lithium-ion batteries, Rivio sensors last for years without requiring frequent recharges." }
  ].map((item, index) => (
    <div key={index} className="p-6 bg-[#0A1B0C] border border-[#00D11F] shadow-lg rounded-lg text-center transition-all duration-300 ease-in-out w-64 h-64 flex flex-col items-center justify-center group hover:shadow-[0_0_15px_3px_#00D11F]">
      <div className="mb-4 flex items-center justify-center w-14 h-14 bg-[#00D11F] rounded-full">
        <Image src={item.img} alt="Septic & Water Monitoring" width={32} height={32} className="w-8 h-auto" />
      </div>
      <p className="text-[#FFFFFF] text-center text-sm leading-relaxed px-4">{item.text}</p>
    </div>
  ))}
</div>


<div className="flex justify-center">
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
    <div className="p-6 bg-[#0A1B0C] border border-[#00D11F] shadow-lg rounded-lg text-center transition-all duration-300 ease-in-out w-64 h-64 flex flex-col items-center justify-center group hover:shadow-[0_0_15px_3px_#00D11F]">
      <div className="mb-4 flex items-center justify-center w-14 h-14 bg-[#00D11F] rounded-full">
        <Image
          src="/image/alarm.png"
          alt="Septic & Water Monitoring"
          width={32}
          height={32}
          className="w-8 h-auto"
        />
      </div>
      <p className="text-[#FFFFFF] text-center text-sm leading-relaxed px-4">
        Sensors scan at set intervals to detect fill levels, ensuring timely alerts without excessive data use.
      </p>
    </div>

    <div className="p-6 bg-[#0A1B0C] border border-[#00D11F] shadow-lg rounded-lg text-center transition-all duration-300 ease-in-out w-64 h-64 flex flex-col items-center justify-center group hover:shadow-[0_0_15px_3px_#00D11F]">
      <div className="mb-4 flex items-center justify-center w-14 h-14 bg-[#00D11F] rounded-full">
        <Image
          src="/image/water.png"
          alt="Septic & Water Monitoring"
          width={32}
          height={32}
          className="w-8 h-auto"
        />
      </div>
      <p className="text-[#FFFFFF] text-center text-sm leading-relaxed px-4">
        Whether it’s a septic tank, brine tank, sump pit, or fuel container-Rivio keeps you informed.
      </p>
    </div>
  </div>
</div>

          </div>
          
<div className="max-w-7xl mx-auto rounded-3xl border-2 border-[#00D11F] bg-[#1F1F1F] px-12 py-8 flex flex-col md:flex-row items-center justify-between transition-all duration-500 mt-16 text-white">
  <div className="flex flex-col gap-2 text-left">
    <h2 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
      Know More <span className="text-[#00D11F]">About Rivio!</span>
    </h2>
    <p className="text-md text-[#EEEEEE]">
      Leading businesses and municipalities rely on Rivio for seamless IoT-powered monitoring, ensuring <br /> efficiency and reliability.
    </p>
  </div>
  <button className="mt-6 ml-20 md:mt-0 px-6 py-2 hover:bg-green-400 transition bg-gradient-to-r from-[#006A10] to-[#00D11F] text-white rounded-[12px]">
    Book a Free Demo
  </button>
</div>



    </div>
  );
}
