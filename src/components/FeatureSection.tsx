"use client";
import React from "react";
import 'font-awesome/css/font-awesome.min.css';


export default function FeatureSection() {
    return (
        <>
            <div className="bg-black text-white py-16 px-4 mb-0">
                <div className="max-w-5xl mx-auto bg-[#0A1B0D] border border-green-600 rounded-lg p-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
                    <div className="flex-1 flex flex-col items-center md:items-start mb-6 md:mb-0">
                        <h2 className="text-4xl font-bold text-[#00D11F] ">5,000+</h2>
                        <p className="text-lg">Septic Tanks Monitored</p>
                    </div>

                    <div className="hidden md:block w-px bg-green-600 h-16 mx-4"></div>

                    <div className="flex-1 flex flex-col items-center md:items-start mb-6 md:mb-0">
                        <h2 className="text-4xl font-bold text-[#00D11F] ">8,000+</h2>
                        <p className="text-lg">Trash Bins Managed</p>
                    </div>

                    <div className="hidden md:block w-px bg-green-600 h-16 mx-4"></div>

                    <div className="flex-1 flex flex-col items-center md:items-start">
                        <h2 className="text-4xl font-bold text-[#00D11F] ">100%</h2>
                        <p className="text-lg">Customer Satisfaction</p>
                    </div>
                </div>



                <div className="text-center mt-20">
                    <h2 className="text-5xl sm:text-1xl font-bold leading-[70.44px] tracking-normal text-center">
                        Application <span className="text-[#00D11F] ">Features</span>
                    </h2>

                    <p className="text-gray-400 mt-2 max-w-xl mx-auto">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in dolor metus.
                    </p>
                </div>

                {/* Features Cards */}
                <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 mt-10">
                    <div className="p-6 bg-[#0A1B0C] border border-transparent hover:border-[#01C41D] shadow-lg rounded-lg text-center transition-all duration-300 ease-in-out">
                        <i className="fas fa-wifi text-4xl text-[#01C41D] mb-4"></i>
                        <h3 className="text-xl font-semibold mt-4 text-left text-white">Real-Time IoT Monitoring</h3>
                        <p className="text-gray-400 mt-2 text-left">Stay ahead with real-time tracking of your assets, ensuring seamless operations.</p>
                    </div>

                    <div className="p-6 bg-[#0A1B0C] border border-transparent hover:border-[#01C41D] shadow-lg rounded-lg text-center transition-all duration-300 ease-in-out">
                        <i className="fas fa-bell text-4xl text-[#01C41D] mb-4"></i>
                        <h3 className="text-xl font-semibold mt-4 text-left text-white">Smart Alerts & Notifications</h3>
                        <p className="text-gray-400 mt-2 text-left">Receive instant alerts on critical status changes, preventing costly problems.</p>
                    </div>

                    <div className="p-6 bg-[#0A1B0C] border border-transparent hover:border-[#01C41D] shadow-lg rounded-lg text-center transition-all duration-300 ease-in-out">
                        <i className="fas fa-chart-bar text-4xl text-[#01C41D] mb-4"></i>
                        <h3 className="text-xl font-semibold mt-4 text-left text-white">Automated Data Insights</h3>
                        <p className="text-gray-400 mt-2 text-left">Leverage analytics to gain actionable insights, optimizing resource usage.</p>
                    </div>

                    <div className="p-6 bg-[#0A1B0C] border border-transparent hover:border-[#01C41D] shadow-lg rounded-lg text-center transition-all duration-300 ease-in-out">
                        <i className="fas fa-lock text-4xl text-[#01C41D] mb-4"></i>
                        <h3 className="text-xl font-semibold mt-4 text-left text-white">Remote Access & Control</h3>
                        <p className="text-gray-400 mt-2 text-left">Monitor and manage your assets from anywhere with an intuitive dashboard.</p>
                    </div>

                    <div className="p-6 bg-[#0A1B0C] border border-transparent hover:border-[#01C41D] shadow-lg rounded-lg text-center transition-all duration-300 ease-in-out">
                        <i className="fas fa-link text-4xl text-[#01C41D] mb-4"></i>
                        <h3 className="text-xl font-semibold mt-4 text-left text-white">Seamless Integration with Existing Systems</h3>
                        <p className="text-gray-400 mt-2 text-left">Easily integrate with your existing software and hardware for smooth transitions.</p>
                    </div>

                    <div className="p-6 bg-[#0A1B0C] border border-transparent hover:border-[#01C41D] shadow-lg rounded-lg text-center transition-all duration-300 ease-in-out">
                        <i className="fas fa-cogs text-4xl text-[#01C41D] mb-4"></i>
                        <h3 className="text-xl font-semibold mt-4 text-left text-white">Cost-Effective & Scalable Solutions</h3>
                        <p className="text-gray-400 mt-2 text-left">Grow your business with flexible, budget-friendly IoT solutions.</p>
                    </div>
                </div>

            </div>
        </>
    )
}
