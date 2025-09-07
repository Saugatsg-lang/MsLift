"use client";
import { Building2, Factory, Building, Hospital, Store } from "lucide-react";
import { useState } from "react";

export default function OurIndustries() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const industries = [
    { name: "Residencial", icon: Building2 },
    { name: "Commercial", icon: Building },
    { name: "Hospital", icon: Hospital },
    { name: "Manufacturing", icon: Factory },
    { name: "Malls", icon: Store },
  ];

  return (
    <section className="bg-white py-16 text-center">
      {/* Heading */}
      <h2 className="text-3xl font-bold mb-12">
        <span className="text-black">OUR </span>
        <span className="text-[#1E90FF]">INDUSTRIES</span>
      </h2>

      {/* Industries Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 px-6 md:px-20">
        {industries.map((industry, index) => {
          const Icon = industry.icon;
          const isActive = activeIndex === index;

          return (
            <div
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`bg-[#0076A8] text-white p-10 rounded-lg flex flex-col items-center justify-center shadow-md transition transform cursor-pointer
                hover:scale-105 hover:shadow-xl
                ${isActive ? "scale-110 ring-4 ring-[#1E90FF]" : ""}
              `}
            >
              {/* Icon */}
              <Icon
                size={70}
                className={`mb-6 transition-colors duration-300 ${
                  isActive ? "text-[#1E90FF]" : "text-white"
                }`}
              />
              {/* Name */}
              <p className="text-lg font-semibold">{industry.name}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
