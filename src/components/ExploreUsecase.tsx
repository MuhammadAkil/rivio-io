"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Tooltip } from "react-tooltip";

const sharedFeatures = [
  { 
    src: "/image/monitor_heart (1).png", 
    label: "Seamless Integration", 
    tooltip: "Rivio connects directly with your service providers through automated notifications, making service management effortless." 
  },
  { 
    src: "/image/signal_wifi_off.png", 
    label: "No Wifi Needed", 
    tooltip: "Rivio sensors use cellular connectivity, so they work even if your home Wi-Fi goes offline." 
  },
  { 
    src: "/image/objects.png", 
    label: "Smart Alerts & Notifications", 
    tooltip: "Get instant alerts when something needs attention, preventing costly repairs and ensuring proactive maintenance." 
  },
];

const useCaseData:Record<string, { title: string; description: string; image: string }>  = {
  "Golf Course": {
    title: "Why Rivio is Perfect For Golf Course Owners",
    description:
      "Rivio keeps you ahead with real-time monitoring and smart alerts, so you know what’s happening before there’s a problem. No surprises, no wasted time—just seamless service and fewer costly headaches.",
    image: "/image/golf.jpg",
  },
  "Septic & Water Monitoring": {
    title: "Why Rivio is Perfect For Septic & Water Monitoring",
    description:
      "With real-time monitoring, IoT integration, and powerful scheduling tools, Rivio keeps you ahead of the game. Track customer tank levels, automate service alerts, and manage jobs—all in one place. No more guesswork, no more wasted trips. See why septic pros trust Rivio to keep their business running smoothly.",
    image: "/image/septic.jpg",
  },
  "Salt Delivery": {
    title: "Why Rivio is Perfect For Salt Delivery",
    description:
      "Rivio’s level sensors keep your salt delivery running efficiently by tracking tank levels and critical infrastructure in real time. With smart monitoring and predictive analytics, you’ll know exactly when to deliver—no guesswork, no wasted trips, just streamlined operations.",
    image: "/image/salt.jpg",
  },
  "Marinas": {
    title: "Why Rivio is Perfect For Marinas",
    description:
      "Marinas can now optimize operations by monitoring dock occupancy, water tanks, and other critical infrastructure in real time.",
    image: "/image/marina.jpg",
  },
  "Municipalities": {
    title: "Why Rivio is Perfect For Municipalities",
    description:
      "Public works can now optimize operations by monitoring municipal trash bins, deicing tanks, and other critical infrastructure in real time. Leveraging GPS technology, our solution is easy to install and can adapt to any tank or waste container requiring monitoring.",
    image: "/image/muncipal.jpg",
  },
  "Public Restrooms": {
    title: "Why Rivio is Perfect For Public Restrooms",
    description:
      "With Rivio’s real-time monitoring and predictive analytics, you’ll know when it’s time to service your portable restrooms—before it becomes an emergency. Because no one likes a nasty surprise.",
    image: "/image/restroom.webp",
  },
  "Campground Management": {
    title: "Why Rivio is Perfect For Campground Management",
    description:
      "It includes managing reservations, ensuring clean and well-maintained facilities, monitoring water and waste levels, and enhancing security. Smart solutions, such as real-time monitoring and automated alerts, help improve efficiency, reduce maintenance costs.",
    image: "/image/camp.jpg",
  },
  "Farm Operations": {
    title: "Why Rivio is Perfect For Farm Operations",
    description:
      "Our level sensors help you optimize farm operations by monitoring water usage and critical infrastructure in real time. With Rivio’s smart sensors and predictive analytics, you can ensure smooth and efficient resource management.",
    image: "/image/farm.jpg",
  },
  "Anti-Icing & Deicing Solutions": {
    title: "Why Rivio is Perfect For Anti-Icing & Deicing Solutions",
    description:
      "Most deicer companies operate in a reactive mode, waiting for customers to call when their tanks are empty. With Rivio’s real-time monitoring and predictive analytics, you can eliminate the guesswork and transition to a fully proactive service model. Our solutions work for both end-user customers and distribution or manufacturing partners who want to integrate with their customers to track levels.",
    image: "/image/icong.webp",
  },
};

export default function Explore() {
  const [selected, setSelected] = useState("Golf Course");
  console.log(`Current selected: ${selected}`);

  return (
    <div className="bg-black text-white px-4 py-26 relative">
      <div className="text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-[70.44px] tracking-normal text-center">
          Explore <span className="text-[#00D11F]">Use Cases</span>
        </h2>
      </div>

      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-x-6 gap-y-6 mt-8">
        {useCases1.map((item, index) => (
          <GridItem
            key={`useCases1-${index}`} 
            src={item.src}
            label={item.label}
            selected={selected}
            setSelected={setSelected}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-6 mt-8">
        {useCases2.map((item, index) => (
          <GridItem
            key={`useCases2-${index}`} 
            src={item.src}
            label={item.label}
            selected={selected}
            setSelected={setSelected}
          />
        ))}
      </div>

      <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6 mt-8">
        {useCases3.map((item, index) => (
          <GridItem
            key={`useCases3-${index}`} 
            src={item.src}
            label={item.label}
            selected={selected}
            setSelected={setSelected}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-36 items-center mt-30">
        <div className="flex flex-col items-center md:items-start md:max-w-md">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:max-w-3xl">
            <span className="font-bold text-white sm:inline mr-2">
              Why Rivio is Perfect For
            </span>
            <span className="text-[#00D11F] font-bold block sm:inline">
              {selected === "Golf Course" ? "Golf Course Owners" : selected}
            </span>
          </h1>

          <p className="text-white mt-4">
            {useCaseData[selected]?.description ||
              "Select a use case to see how Rivio can help."}
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-10">
            {sharedFeatures.map((feature, index) => (
              <React.Fragment key={index}>
                <div
                  data-tooltip-id={`feature-tooltip-${index}`}
                  data-tooltip-content={feature.tooltip}
                  className="flex flex-col items-center w-24 relative"
                >
                  <Image src={feature.src} alt={feature.label} width={32} height={32} className="w-8 h-8" />
                  <span className="mt-2 text-sm text-white text-center">{feature.label}</span>
                </div>
                <Tooltip
                  id={`feature-tooltip-${index}`}
                  place="bottom"
                  offset={10}
                  style={{
                    backgroundColor: "#000",
                    color: "#fff",
                    padding: "6px 10px",
                    borderRadius: "4px",
                    zIndex: 50,
                    maxWidth: "200px", // Set a maximum width to force wrapping
                    whiteSpace: "normal", // Allow text to wrap
                    lineHeight: "1.4", // Improve readability
                    textAlign: "center", // Center the text
                  }}
                  className="tooltip-bottom"
                />
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className="relative flex flex-col justify-center items-center">
          <Image
            src={useCaseData[selected]?.image || "/image/default_dashboard.png"}
            alt={`${selected} Dashboard`}
            width={500}
            height={500}
            className="relative z-10 rounded-xl border-2 border-[#00D11F]"
          />
          <button className="mt-6 bg-gradient-to-r from-[#006A10] to-[#00D11F] text-white px-6 py-2 rounded-xl">
            Explore Use Cases
          </button>
        </div>
      </div>
      <Image
        src="/image/Ellipse 1441.png"
        alt="feature"
        width={1000}
        height={1600}
        className="absolute left-0 z-10"
      />
    </div>
  );
}

interface GridItemProps {
  src: string;
  label: string;
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
}

const GridItem: React.FC<GridItemProps> = ({
  src,
  label,
  selected,
  setSelected,
}) => (
  <div
    className={`group flex justify-center items-center gap-4 p-4 border border-[#284D2D] shadow-lg rounded-lg transition-all duration-300 ease-in-out ${
      selected === label ? "bg-[#00D11F]" : "bg-[#0A1B0C] hover:bg-[#00D11F]"
    }`}
    onClick={() => {
      console.log(`Clicked: ${label}`); 
      setSelected(label);
    }}
  >
    <Image
      src={src}
      alt={label}
      width={40}
      height={40}
      className={`w-10 h-10 transition-opacity duration-300 group-hover:opacity-75 ${
        selected === label ? "filter brightness-0 invert" : ""
      }`}
    />
    <h3 className="text-sm sm:text-sm font-semibold text-white">{label}</h3>
  </div>
);

const useCases1 = [
  { src: "/image/plumbing.png", label: "Septic & Water Monitoring" },
  { src: "/image/local_shipping.png", label: "Salt Delivery" },
  { src: "/image/golf_course.png", label: "Golf Course" },
];

const useCases2 = [
  { src: "/image/camping.png", label: "Marinas" },
  { src: "/image/directions_boat.png", label: "Municipalities" },
  { src: "/image/wc.png", label: "Public Restrooms" },
  { src: "/image/camping.png", label: "Campground Management" },
];

const useCases3 = [
  { src: "/image/agriculture.png", label: "Farm Operations" },
  { src: "/image/ac_unit.png", label: "Anti-Icing & Deicing Solutions" },
];

export { GridItem };