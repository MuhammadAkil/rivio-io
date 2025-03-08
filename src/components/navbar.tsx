"use client";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full bg-black shadow-md">
       {/* <Image
                          src="/image/Ellipse 1440.png"
                          alt="Dashboard"
                          width={500}
                          height={500}
                          className="absolute top-0 right-0 z-10"
                      /> */}
      <div className="container mx-auto flex items-center justify-between px-4 py-3 sm:py-4">
        <div className="flex items-center">
          <div className="text-[#00D11F] text-xl sm:text-2xl font-bold flex items-center gap-2">
            <Image
              src="/image/green-logo.png"
              alt="Logo"
              width={120}
              height={120}
              className="w-24 sm:w-32 md:w-36 h-auto"
            />
          </div>
        </div>
        <div className="hidden lg:flex items-center gap-4 xl:gap-6">
       <Link href="/" className="text-white hover:text-[#00D11F] px-2 py-1 text-sm xl:text-base">
  Home
</Link>
       <Link href="/features" className="text-white hover:text-[#00D11F] px-2 py-1 text-sm xl:text-base">
  Features
</Link>
<Link href="/usecases" className="text-white hover:text-[#00D11F] px-2 py-1 text-sm xl:text-base">
  Use Cases
          </Link>
          <Link href="/works" className="text-white hover:text-[#00D11F] px-2 py-1 text-sm xl:text-base">
  How It Works
</Link>
          <button className="text-white hover:text-[#00D11F] px-2 py-1 text-sm xl:text-base">
            Pricing
          </button>
         <Link href="/aboutus" className="text-white hover:text-[#00D11F] px-2 py-1 text-sm xl:text-base">
  About Us
</Link>
          <button className="text-white hover:text-[#00D11F] px-2 py-1 text-sm xl:text-base">
            Contact Us
          </button>
          <button className="bg-white text-black px-4 py-2 sm:px-6 sm:py-2 rounded-xl font-medium text-sm xl:text-base">
            Sign Up
          </button>
          <button className="bg-gradient-to-r from-[#006A10] to-[#00D11F] text-white px-4 py-2 sm:px-6 sm:py-2 rounded-xl font-medium text-sm xl:text-base">
            Log In
          </button>
        </div>
        <button
          className="lg:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>
      </div>
      {isOpen && (
        <div className="lg:hidden bg-gradient-to-r from-black to-[#0A2A0A] px-4 py-6">
          <div className="flex flex-col gap-4 text-white">
          <Link href="/" className="hover:text-[#00D11F] px-4 py-2 text-left text-base">
  Home
</Link>
            <Link href="/features" className="hover:text-[#00D11F] px-4 py-2 text-left text-base">
  Features
</Link>
<Link href="/usecases" className="hover:text-[#00D11F] px-4 py-2 text-left text-base">
  Use Cases
            </Link>
                      <Link href="/works" className="text-white hover:text-[#00D11F] px-2 py-1 text-sm xl:text-base">
  How It Works
</Link>
           <Link href="/aboutus" className="text-white hover:text-[#00D11F] px-2 py-1 text-sm xl:text-base">
  About Us
</Link>
            <button className="hover:text-[#00D11F] px-4 py-2 text-left text-base">
              Contact Us
            </button>
            <button className="bg-white text-black px-6 py-3 rounded-md font-medium text-base">
              Sign Up
            </button>
            <button className="bg-gradient-to-r from-[#006A10] to-[#00D11F] text-white px-6 py-3 rounded-md font-medium text-base">
              Log In
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}