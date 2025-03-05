import React from 'react'

export default function CardSection() {
    return (
        <>
            <div className='bg-[#000000] text-white px-4 py-15'>
                <div className="text-center">
                    <h2 className="text-5xl sm:text-1xl font-bold leading-[70.44px] tracking-normal text-center">
                        See How <span className="text-[#00D11F] ">Rivio Can Benefit You!</span>
                    </h2>
                </div>

                <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-10">
                    <div className="p-4 bg-[#0A1B0C] border border-transparent hover:bg-[#00D11F] shadow-lg rounded-lg text-center transition-all duration-300 ease-in-out h-48">
                        <i className="fas fa-wifi text-4xl text-[#01C41D] mb-4"></i>
                        <h3 className="text-xl font-semibold mt-4 text-center text-white">Septic & Water Monitoring</h3>
                    </div>


                    <div className="p-4 bg-[#0A1B0C] border border-transparent hover:bg-[#00D11F] shadow-lg rounded-lg text-center transition-all duration-300 ease-in-out h-48">
                        <i className="fas fa-wifi text-4xl text-[#01C41D] mb-4"></i>
                        <h3 className="text-xl font-semibold mt-4 text-center text-white">Delivery Companies</h3>
                    </div>


                    <div className="p-4 bg-[#0A1B0C] border border-transparent hover:bg-[#00D11F] shadow-lg rounded-lg text-center transition-all duration-300 ease-in-out h-48">
                        <i className="fas fa-wifi text-4xl text-[#01C41D] mb-4"></i>
                        <h3 className="text-xl font-semibold mt-4 text-center text-white">Smart Waste Management</h3>
                    </div>

                    <div className="p-4 bg-[#0A1B0C] border border-transparent hover:bg-[#00D11F] shadow-lg rounded-lg text-center transition-all duration-300 ease-in-out h-48">
                        <i className="fas fa-wifi text-4xl text-[#01C41D] mb-4"></i>
                        <h3 className="text-xl font-semibold mt-4 text-center text-white">Campground
                            Management</h3>
                    </div>


                    <div className="p-4 bg-[#0A1B0C] border border-transparent hover:bg-[#00D11F] shadow-lg rounded-lg text-center transition-all duration-300 ease-in-out h-48">
                        <i className="fas fa-wifi text-4xl text-[#01C41D] mb-4"></i>
                        <h3 className="text-xl font-semibold mt-4 text-center text-white">Marinas</h3>
                    </div>


                    <div className="p-4 bg-[#0A1B0C] border border-transparent hover:bg-[#00D11F] shadow-lg rounded-lg text-center transition-all duration-300 ease-in-out h-48">
                        <i className="fas fa-wifi text-4xl text-[#01C41D] mb-4"></i>
                        <h3 className="text-xl font-semibold mt-4 text-center text-white">Muncipalities</h3>
                    </div>

                    <div className="p-4 bg-[#0A1B0C] border border-transparent hover:bg-[#00D11F] shadow-lg rounded-lg text-center transition-all duration-300 ease-in-out h-48">
                        <i className="fas fa-wifi text-4xl text-[#01C41D] mb-4"></i>
                        <h3 className="text-xl font-semibold mt-4 text-center text-white">Public Restrooms</h3>
                    </div>

                    <div className="p-4 bg-[#0A1B0C] border border-transparent hover:bg-[#00D11F] shadow-lg rounded-lg text-center transition-all duration-300 ease-in-out h-48">
                        <i className="fas fa-wifi text-4xl text-[#01C41D] mb-4"></i>
                        <h3 className="text-xl font-semibold mt-4 text-center text-white">Farm Operations</h3>
                    </div>

                </div>

                <div className="flex justify-center items-center mt-10">
                    <button className="bg-gradient-to-r from-[#006A10] to-[#00D11F] text-white px-6 py-3 rounded-md">
                        Watch Now
                    </button>
                </div>

            </div>
        </>
    )
}
