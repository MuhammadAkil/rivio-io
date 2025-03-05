'use client';
import React, { useState } from 'react';

export default function Accordion() {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index: any) => {
        if (activeIndex === index) {
            setActiveIndex(null); // Close if clicked again
        } else {
            setActiveIndex(index); // Open the clicked accordion
        }
    };

    const accordionData = [
        { title: "Accordion Item 1", content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum laborum officia, quis assumenda cupiditate necessitatibus illum!' },
        { title: "Accordion Item 2", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum laborum officia, quis assumenda cupiditate necessitatibus illum!." },
        { title: "Accordion Item 3", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum laborum officia, quis assumenda cupiditate necessitatibus illum!." },
        { title: "Accordion Item 4", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum laborum officia, quis assumenda cupiditate necessitatibus illum!." },
        { title: "Accordion Item 5", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum laborum officia, quis assumenda cupiditate necessitatibus illum!." },
    ];

    return (
        <div className="bg-black p-6 sm:p-8">
            {/* Heading */}
            <div className="px-4 sm:px-8">
                <h2 className="text-5xl sm:text-1xl text-white font-bold leading-[70.44px] tracking-normal text-center">
                    Frequently Asked <span className="text-[#00D11F]">Questions</span>
                </h2>
                <p className="text-gray-400 text-center mt-2 max-w-2xl mx-auto text-[16px] sm:text-[18px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, risus eget auctor laoreet. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
            </div>


            {/* Accordion List */}
            <div className="mt-8 max-w-6xl mx-auto">
                {accordionData.map((item, index) => (
                    <div
                        key={index}
                        className={`border border-[#01C41D] mb-4 rounded-lg transition-all duration-300 ${activeIndex === index ? "bg-[#0e2611]" : ""}`}
                    >
                        <div
                            className="flex justify-between items-center p-4 cursor-pointer"
                            onClick={() => toggleAccordion(index)}
                        >
                            <h2 className="text-2xl text-[#00D11F] font-semibold">{item.title}</h2>
                            <i className={`fa ${activeIndex === index ? "fa-ellipsis-h" : "fa-plus"}`} style={{ color: '#01C41D', fontSize: '20px' }}></i>
                        </div>
                        {activeIndex === index && (
                            <div className="p-4 text-gray-300">
                                <p className="text-[20px] leading-[23.48px] tracking-[0%] font-normal">{item.content}</p>
                            </div>

                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
