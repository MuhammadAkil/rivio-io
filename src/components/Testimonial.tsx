"use client";
import Image from "next/image";
import React, { useCallback, useEffect, useRef } from "react";
import EmblaCarousel from "embla-carousel-react";

const testimonials = [
  {
    quote: "Thanks to Rivio, our septic tank monitoring is now fully automated. No more manual checks or surprises—just accurate, reliable data.",
    name: "Robert Smith",
    role: "Head of Operations, LogisticFlow",
    image: "/image/Ellipse 1426.png",
  },
  {
    quote: "Thanks to Rivio, our septic tank monitoring is now fully automated. No more manual checks, reliable data whenever we need it!",
    name: "Sarah Mitchell",
    role: "Facility Manager, Eco Waste Solutions",
    image: "/image/download.jpg",
  },
  {
    quote: "Rivio has revolutionized the way we manage our operations. It's accurate, efficient, and saves us time!",
    name: "James Carter",
    role: "Operations Manager, GreenTech",
    image: "/image/images.jpg",
  },
  {
    quote: "This platform has made our workflow so much smoother. It's accurate, efficient, and saves us time. Highly recommended for businesses!",
    name: "Emily Dawson",
    role: "CEO, Smart Logistics",
    image: "/image/images (1).jpg",
  },
];

export default function TestimonialCarousel() {
  const [emblaRef, emblaApi] = EmblaCarousel({
    loop: true,
    slidesToScroll: 1,
    duration: 30,
  });
  const autoplayRef = useRef();

  const autoplay = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    autoplayRef.current = setInterval(() => {
      autoplay();
    }, 3000);

    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, [emblaApi, autoplay]);
  const getActiveDotIndex = () => {
    if (!emblaApi) return 0;
    const currentIndex = emblaApi.selectedScrollSnap();
    return currentIndex % testimonials.length;
  };
  return (
    <div className="bg-black p-6 sm:p-8 overflow-hidden relative">
      <div className="my-7">
        <h2 className="text-5xl sm:text-1xl text-white font-bold text-center">
          What Our <span className="text-[#00D11F]">Clients Say</span>
        </h2>
        <p className="text-[#ECECEC] text-center mt-2 max-w-4xl mx-auto text-[16px] sm:text-[18px] mb-6">
          Businesses worldwide trust Rivio for smarter tracking and seamless automation. Here’s what they have to say.
        </p>
      </div>

      <div ref={emblaRef} className="relative w-full embla">
        <div className="flex embla__container">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex-[0_0_33.33%] min-w-0 p-4">
              <div className="rounded-3xl border-2 border-[#00D11F] bg-[#0A1B0C] p-6 flex flex-col items-center h-full">
                <div className="self-start mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-[#00D11F] rotate-180"
                  >
                    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                    <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
                  </svg>
                </div>
                <p className="text-white text-center mb-6">{testimonial.quote}</p>
                <div className="self-end mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-[#00D11F]"
                  >
                    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                    <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
                  </svg>
                </div>
                <div className="mb-3 rounded-full border-2 border-white overflow-hidden h-20 w-20">
                  <Image src={testimonial.image} alt={testimonial.name} width={80} height={80} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-[#00D11F] text-xl font-bold mb-1">{testimonial.name}</h3>
                <p className="text-white text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}