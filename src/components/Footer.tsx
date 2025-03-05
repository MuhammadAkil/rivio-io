import React from "react";

export default function Footer() {
    return (
        <>

            <div className="relative bg-[#effbeb] text-black text-center pt-16 pb-6">
                <svg className="absolute top-0 left-0 w-full" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill="bg-[#effbeb]" d="M0,224L1440,96L1440,320L0,320Z" />
                </svg>

                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-4">
                        <span className="text-[#00D11F]">Logo</span>
                    </h2>

                    <div className="space-x-6 text-center flex flex-col sm:flex-row sm:space-x-6 sm:justify-center">
                        <a
                            href="#home"
                            className="text-[#111111] hover:text-[#00D11F] text-[20px] font-semibold leading-[31.74px] tracking-[-1%] mb-4 sm:mb-0"
                        >
                            Home
                        </a>
                        <a
                            href="#about"
                            className="text-[#111111] hover:text-[#00D11F] text-[20px] font-semibold leading-[31.74px] tracking-[-1%] mb-4 sm:mb-0"
                        >
                            About
                        </a>
                        <a
                            href="#services"
                            className="text-[#111111] hover:text-[#00D11F] text-[20px] font-semibold leading-[31.74px] tracking-[-1%] mb-4 sm:mb-0"
                        >
                            Services
                        </a>
                        <a
                            href="#contact"
                            className="text-[#111111] hover:text-[#00D11F] text-[20px] font-semibold leading-[31.74px] tracking-[-1%] mb-4 sm:mb-0"
                        >
                            Contact
                        </a>
                    </div>

                    <div className="mt-10">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl text-dark font-bold tracking-normal text-center">
                            Transforming Ideas into <span className="block text-[#00D11F]">Digital Excellence</span>
                        </h2>


                        <p className="mt-6 text-[#111111] text-[24px] font-normal leading-[28.18px] tracking-[0%]">
                            Your Cup of Tea.
                        </p>

                        <button className="mt-6 px-6 py-3 hover:bg-green-400 transition bg-gradient-to-r from-[#006A10] to-[#00D11F] text-white px-4 py-2 rounded-[12px]">
                            Request a Demo
                        </button>
                    </div>

                    <div className="mt-8 border-t-4 border-black"></div>

                    <div className="flex flex-col sm:flex-row justify-between mt-6">
                        <div className="flex space-x-6 w-full sm:w-auto sm:justify-center mb-4 sm:mb-0">
                            <a
                                href="#privacy-policy"
                                className="text-[#111111] hover:text-[#00D11F] text-[20px] font-semibold leading-[31.74px] tracking-[-1%] mb-2 sm:mb-0"
                            >
                                Privacy Policy
                            </a>
                            <a
                                href="#terms"
                                className="text-[#111111] hover:text-[#00D11F] text-[20px] font-semibold leading-[31.74px] tracking-[-1%] mb-2 sm:mb-0"
                            >
                                Terms & Conditions
                            </a>
                            <a
                                href="#contact"
                                className="text-[#111111] hover:text-[#00D11F] text-[20px] font-semibold leading-[31.74px] tracking-[-1%] mb-2 sm:mb-0"
                            >
                                Contact
                            </a>
                        </div>

                        <div className="flex space-x-6 w-full sm:w-auto sm:justify-center">
                            <a href="#" className="text-[#111111] hover:text-[#00D11F]">
                                <i className="fab fa-facebook-f text-2xl"></i>
                            </a>
                            <a href="#" className="text-[#111111] hover:text-[#00D11F]">
                                <i className="fab fa-twitter text-2xl"></i>
                            </a>
                            <a href="#" className="text-[#111111] hover:text-[#00D11F]">
                                <i className="fab fa-instagram text-2xl"></i>
                            </a>
                            <a href="#" className="text-[#111111] hover:text-[#00D11F]">
                                <i className="fab fa-linkedin-in text-2xl"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-black py-4 flex justify-center items-center">
                <p className="text-white text-center text-sm sm:text-base">
                    &copy; 2025 Your Company. All rights reserved.
                </p>
            </div>

        </>

    );
}
