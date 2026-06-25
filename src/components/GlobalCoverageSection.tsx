import React from "react";
import londonImg from "@/assets/hero.jpg";
import { ArrowRight } from "lucide-react";

const hubs = [
  { id: 1, name: "GCC & MENA", title: "Middle East & North Africa", bg: londonImg },
  { id: 2, name: "London, UK", title: "Europe Headquarters", bg: londonImg },
  { id: 3, name: "New York, USA", title: "Americas Headquarters", bg: londonImg },
  { id: 4, name: "Singapore", title: "Asia Pacific Headquarters", bg: londonImg }
];

export function GlobalCoverageSection() {
  return (
    <section className="bg-[#F4F7FC] py-16 md:py-24 font-sans w-full">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 flex flex-col items-center text-center">
        
        {/* Header */}
        <h2 className="text-3xl md:text-[40px] font-bold text-[#111111] mb-4 tracking-tight leading-tight">
          Global <span className="text-[#F02B33]">Coverage Hubs</span>
        </h2>
        <p className="text-[14px] md:text-[15px] text-[#555555] max-w-3xl leading-relaxed mb-16">
          Our international presence allows us to partner with clients globally, delivering customized solutions that align with local market dynamics and cultural nuances.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 w-full">
          {hubs.map((hub) => (
            <div 
              key={hub.id} 
              className="relative w-full aspect-[3/4] md:h-[340px] rounded-2xl overflow-hidden group cursor-pointer"
            >
              <img 
                src={hub.bg} 
                alt={hub.name} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-[#1a2b4c]/90" />
              
              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end text-left">
                <h3 className="text-lg md:text-[20px] text-white font-bold mb-1 drop-shadow-md">{hub.name}</h3>
                <p className="text-[13px] md:text-[14px] text-white/80 mb-4 drop-shadow-md">{hub.title}</p>
                <div className="inline-flex items-center gap-2 text-white text-[11px] font-semibold">
                  <span className="bg-white/20 px-3 py-1.5 rounded-full backdrop-blur-sm group-hover:bg-white/40 transition-colors">
                    Explore
                  </span>
                  <div className="bg-white/20 p-1.5 rounded-full backdrop-blur-sm group-hover:bg-white/40 transition-colors">
                    <ArrowRight size={14} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
