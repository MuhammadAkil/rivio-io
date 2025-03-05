'use client';
import React from 'react';

export default function HeroSection() {
    return (
        <div className="relative min-h-screen w-full bg-[url('/image/hero.png')] bg-cover bg-no-repeat">
            <div className="grid min-h-screen px-8 bg-[#111111] opacity-[0.90] mt-12">
                <div className="container relative z-10 my-auto mx-auto grid place-items-center text-center">
                    <p className="bg-[#0e2311] bg-opacity-20 text-white mb-2 text-xs sm:text-sm px-4 py-2 rounded-md font-light tracking-wide">
                        Optimize Your Tracking Methods
                    </p>

                    <h1 className="text-center text-white text-3xl sm:text-4xl md:text-5xl lg:max-w-3xl">
                        <span className="font-bold text-white block sm:inline">Smarter Tracking</span>
                        <span className="text-[#00D11F]  font-bold block sm:inline"> Lower Cost</span>
                        <br />
                        <span className="font-bold text-white block sm:inline">Build Loyalty</span>
                    </h1>

                    <div className="flex items-center my-5 justify-center">
                        <button className="bg-gradient-to-r from-[#006A10] to-[#00D11F] text-white px-6 py-3 rounded-md text-xs sm:text-sm md:text-base">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
