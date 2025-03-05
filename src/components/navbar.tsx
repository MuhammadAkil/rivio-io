"use client";
import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 z-50 w-full bg-black shadow-md">
            <div className="container mx-auto flex items-center justify-between p-4">
                <div>
                    <span className="text-lg font-bold text-white">Material Tailwind</span>
                </div>

                <div className="hidden lg:flex items-center gap-4">
                    <button className="text-white hover:bg-[#00D11F] px-4 py-2 rounded">Home</button>
                    <button className="text-white hover:bg-[#00D11F] px-4 py-2 rounded">About</button>
                    <button className="text-white hover:bg-[#00D11F] px-4 py-2 rounded">Services</button>
                    <button className="text-white hover:bg-[#00D11F] px-4 py-2 rounded">Contact</button>
                    <button className="bg-white px-4 py-2 rounded-[12px]">Sign Up</button>
                    <button className="bg-gradient-to-r from-[#006A10] to-[#00D11F] text-white px-4 py-2 rounded-[12px]">Log in</button>
                </div>

                <button className="lg:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
                </button>
            </div>

            {isOpen && (
                <div className="lg:hidden bg-black p-6 container mx-auto">
                    <div className="flex flex-col gap-4 text-white">
                        <button className="hover:bg-[#00D11F] px-4 py-2 rounded">Home</button>
                        <button className="hover:bg-[#00D11F] px-4 py-2 rounded">About</button>
                        <button className="hover:bg-[#00D11F] px-4 py-2 rounded">Services</button>
                        <button className="hover:bg-[#00D11F] px-4 py-2 rounded">Contact</button>
                        {/* <button className="bg-white px-4 py-2 rounded">Sign Up</button> */}
                        <button className="bg-white text-dark px-6 py-3 border-2 border-[#00D11F] rounded-[12px] text-[20px]"> SignUp </button>
                        <button className="bg-gradient-to-b from-[#006A10] to-[#00D11F] text-white px-6 py-3 border-2 border-[#00D11F] rounded-[12px] text-[20px]">
                            Log in
                        </button>


                    </div>
                </div>
            )}
        </nav>
    );
}
