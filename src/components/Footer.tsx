import React from "react";
import { FaFacebookF, FaTwitter, FaPinterestP, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <>
            <div className="bg-black ">

                <div className="relative bg-tranparent text-black text-center pt-16 pb-6  bg-[url('/image/footer-bg.png')] bg-cover bg-no-repeat">
                    <svg className="absolute top-0 left-0 w-full" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill="bg-[#effbeb]" d="M0,224L1440,96L1440,320L0,320Z" />
                    </svg>
                    <div className="max-w-6xl mx-auto px-6">
                        <div className="flex justify-center items-center mb-5">
                        <Image
                            src="/image/rivio-black-logo.png"
                            alt="Logo"
                            width={120}
                            height={120}
                            className="w-24 sm:w-32 md:w-36 h-auto"
                        />
                        </div>
                        <div className="space-x-6 text-center flex flex-col sm:flex-row sm:space-x-6 sm:justify-center">
                            <Link href="/" className="text-[#111111] hover:text-[#01B81B] text-lg leading-[31.74px] tracking-[-1%] mb-4 sm:mb-0">
                                Home
                            </Link>
                            <Link href="/features" className="text-[#111111] hover:text-[#01B81B] text-lg leading-[31.74px] tracking-[-1%] mb-4 sm:mb-0">
                                Features
                            </Link>
                            <Link href="/usecases" className="text-[#111111] hover:text-[#01B81B] text-lg leading-[31.74px] tracking-[-1%] mb-4 sm:mb-0">
                                Use Cases
                            </Link>
                            <a href="#pricing" className="text-[#111111] hover:text-[#01B81B] text-lg leading-[31.74px] tracking-[-1%] mb-4 sm:mb-0">Pricing</a>
                            <a href="#contact" className="text-[#111111] hover:text-[#01B81B] text-lg  leading-[31.74px] tracking-[-1%] mb-4 sm:mb-0">Contact Us</a>
                        </div>

                        <div className="mt-10">
                            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl text-dark font-bold tracking-normal text-center">
                                Transforming Ideas into <span className="block text-[#01B81B]">Digital Excellence</span>
                            </h2>

                            <p className="mt-6 text-[#111111] text-2xl font-normal leading-[28.18px] tracking-[0%]">
                                Your cup of tea?
                            </p>

                            <button className="mt-6 px-6 py-2 hover:bg-green-400 transition bg-gradient-to-r from-[#006A10] to-[#00D11F] text-white px-4 py-2 rounded-[12px]">
                                Request a Demo
                            </button>
                        </div>

                        <div className="mt-8 border-t-2 border-black"></div>

                        <div className="flex flex-col sm:flex-row justify-between mt-6">
                            <div className="flex space-x-6 w-full sm:w-auto sm:justify-center mb-4 sm:mb-0">
                                <a href="#privacy-policy" className="text-[#111111] hover:text-[#01B81B] text-lg  leading-[31.74px] tracking-[-1%] mb-2 sm:mb-0">Privacy Policy</a>
                                <a href="#terms" className="text-[#111111] hover:text-[#01B81B] text-lg  leading-[31.74px] tracking-[-1%] mb-2 sm:mb-0">Terms & Conditions</a>
                                <a href="#contact" className="text-[#111111] hover:text-[#01B81B] text-lg  leading-[31.74px] tracking-[-1%] mb-2 sm:mb-0">Contact</a>
                            </div>

                            <div className="flex justify-center gap-4 sm:gap-6">
                                {[FaFacebookF, FaPinterestP, FaLinkedinIn, FaTwitter].map((Icon, index) => (
                                    <a key={index} href="#" className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-md text-[#111111] hover:text-[#00D11F] transition-all duration-300">
                                        <Icon className="text-xl" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-black py-4 flex justify-center items-center">
                    <p className="text-white text-center text-sm sm:text-base">
                        Copyright © 2025 Reserved Rivio.io
                    </p>
                </div>
            </div>
        </>
    );
}