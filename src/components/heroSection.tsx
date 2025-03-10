'use client';
import React from 'react';
import Image from "next/image";
import Typewriter from 'typewriter-effect';

export default function HeroSection() {
    return (
        <div className="relative bg-black min-h-screen w-full">
            <div className="absolute inset-0 z-10 -top-14 bg-[url('/image/hero.png')] bg-cover bg-no-repeat"></div>
            <div className="relative grid min-h-screen bg-black mt-12">
                <Image
                    src="/image/Ellipse 1440.png"
                    alt="Dashboard"
                    width={900}
                    height={700}
                    className="absolute top-2/4 right-0 -translate-y-1/2 z-10"
                />
                <div className="container relative z-10 my-auto mx-auto grid place-items-center text-center">
                    <p className="bg-[#0e2311] bg-opacity-20 text-white mb-2 text-xs sm:text-sm px-4 py-1 rounded-xl font-light tracking-wide">
                        Optimize Your Tracking Methods
                    </p>
                    <h1 className="text-center text-white text-3xl sm:text-4xl md:text-5xl lg:max-w-3xl">
                        <span className="font-bold text-white block sm:inline">Smarter Tracking</span>
                        <span className="text-[#00D11F] font-bold block sm:inline">
                            <Typewriter
                                options={{
                                    strings: ["Lower Cost", "Higher ROI", "Better Insights", "Faster Results"],
                                    autoStart: true,
                                    loop: true,
                                    delay: 50,
                                    deleteSpeed: 50,
                                }}
                            />
                        </span>
                        <br />
                        <span className="text-white block sm:inline">Build Loyalty</span>
                    </h1>
                    <div className="flex items-center my-5 justify-center">
                        <button className="bg-gradient-to-r from-[#006A10] to-[#00D11F] text-white px-6 py-1.5 rounded-md text-sm sm:text-base flex items-center gap-2">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}