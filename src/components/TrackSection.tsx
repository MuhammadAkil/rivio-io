import React from 'react'

export default function TrackSection() {
    return (
        <div className="bg-[#000000] py-5 px-4">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 place-items-center">
                {/* GPS Tracker Card */}
                <div className="p-8 bg-[#0A1B0C] border-2 border-[#01C41D] shadow-lg rounded-lg text-center md:text-left transition-all duration-300 ease-in-out relative flex flex-col items-center md:items-start">
                    <div className="absolute -top-5 bg-[#0A1B0C] border-2 border-[#01C41D] px-6 py-3 rounded-lg flex items-center">
                        <i className="fas fa-map-marker-alt text-[#01C41D] mr-2 text-2xl"></i>
                        <span className="text-white font-bold text-lg">GPS Tracker</span>
                    </div>
                    <h3 className="text-4xl md:text-5xl font-bold mt-16 text-white">Track Your Assets</h3>
                    <p className="text-[#01C41D] text-3xl md:text-4xl font-semibold">Anytime, Anywhere</p>
                    <p className="text-gray-400 font-normal text-[18px] leading-[24.12px] tracking-[0%] mt-4 text-center md:text-left">
                        Rivio’s GPS tracking ensures real-time location visibility, helping you manage assets with precision and efficiency.
                    </p>

                    <div className="flex justify-center md:justify-start w-full">
                        <button className="mt-6 bg-gradient-to-r from-[#006A10] to-[#00D11F] text-white px-6 py-3 rounded-md">
                            Browse Opportunities
                        </button>
                    </div>
                    <div className="mt-6 text-center md:text-left">
                        <h4 className="text-white font-normal text-[28px] leading-[38.02px] tracking-[0%]">
                            Key Features:
                        </h4>

                        <p className="text-[#01C41D] font-normal text-[24px] leading-[32.59px] tracking-[0%] mt-2">Live Tracking & History</p>
                        <p className="text-gray-400 font-normal text-[24px] leading-[32.16px] tracking-[0%]">Monitor movement and access past location data.</p>
                        <p className="text-[#01C41D] font-normal text-[24px] leading-[32.59px] tracking-[0%] mt-2">
                            Geofencing Alerts
                        </p>

                        <p className="text-gray-400 font-normal text-[24px] leading-[32.16px] tracking-[0%]">Get notified when assets enter or leave designated areas.</p>
                        <p className="text-[#01C41D] font-normal text-[24px] leading-[32.59px] tracking-[0%] mt-2">Multi-Device Access</p>
                        <p className="text-gray-400 font-normal text-[24px] leading-[32.16px] tracking-[0%]">Track everything from any device, anytime.</p>
                    </div>
                </div>

                {/* Level Sensor Card */}
                <div className="p-8 bg-[#0A1B0C] border-2 border-[#01C41D] shadow-lg rounded-lg text-center md:text-left transition-all duration-300 ease-in-out relative flex flex-col items-center md:items-start">
                    <div className="absolute -top-5 bg-[#0A1B0C] border-2 border-[#01C41D] px-6 py-3 rounded-lg flex items-center">
                        <i className="fas fa-tachometer-alt text-[#01C41D] mr-2 text-2xl"></i>
                        <span className="text-white font-bold text-lg">Level Sensor</span>
                    </div>
                    <h3 className="text-4xl md:text-5xl font-bold mt-16 text-white">Smarter Monitoring</h3>
                    <p className="text-[#01C41D] text-3xl md:text-4xl font-semibold">for Tanks & Containers</p>
                    <p className="text-gray-400 font-normal text-[18px] leading-[24.12px] tracking-[0%] mt-4 text-center md:text-left">
                        Rivio’s GPS tracking ensures real-time location visibility, helping you manage assets with precision and efficiency.
                    </p>

                    <div className="flex justify-center md:justify-start w-full">
                        <button className="mt-6 bg-gradient-to-r from-[#006A10] to-[#00D11F] text-white px-6 py-3 rounded-md">
                            Browse Opportunities
                        </button>
                    </div>
                    <div className="mt-6 text-center md:text-left">
                        <h4 className="text-white font-normal text-[28px] leading-[38.02px] tracking-[0%]">
                            Key Features:
                        </h4>

                        <p className="text-[#01C41D] font-normal text-[24px] leading-[32.59px] tracking-[0%] mt-2">Ultrasonic Sensor Accuracy</p>
                        <p className="text-gray-400 font-normal text-[24px] leading-[32.16px] tracking-[0%]">Monitor fluid levels with precision.</p>
                        <p className="text-[#01C41D] font-normal text-[24px] leading-[32.59px] tracking-[0%] mt-2">Instant Alerts</p>
                        <p className="text-gray-400 font-normal text-[24px] leading-[32.16px] tracking-[0%]">Get notified when refill or maintenance is needed.</p>
                        <p className="text-[#01C41D] font-normal text-[24px] leading-[32.59px] tracking-[0%] mt-2">Remote Dashboard Access</p>
                        <p className="text-gray-400 font-normal text-[24px] leading-[32.16px] tracking-[0%]">
                            View all tank levels from one intuitive platform.
                        </p>

                    </div>
                </div>
            </div>
        </div>

    )
}
