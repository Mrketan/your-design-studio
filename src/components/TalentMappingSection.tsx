import React from "react";
import img1 from "@/assets/writing_hands.png";
import img2 from "@/assets/man.jpg";
import img3 from "@/assets/team_meeting.png";

const cards = [
  {
    id: 1,
    title: "Talent Landscape Analysis",
    description: "Gain a comprehensive understanding of your industry's talent pool to inform hiring strategies.",
    img: img1
  },
  {
    id: 2,
    title: "Competitor Talent Profiling",
    description: "Benchmark your workforce against industry peers to identify competitive advantages.",
    img: img2
  },
  {
    id: 3,
    title: "Executive Search Alignment",
    description: "Ensure leadership hires are perfectly aligned with your organizational culture and goals.",
    img: img3
  }
];

export function TalentMappingSection() {
  return (
    <section className="bg-[#F4F7FC] py-16 md:py-24 font-sans w-full">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 flex flex-col items-center md:items-start">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start w-full mb-16 gap-6">
          <h2 className="text-3xl md:text-[40px] font-bold text-[#111111] tracking-tight leading-[1.1] max-w-[400px]">
            Talent Mapping & <br/>
            <span className="text-[#F02B33]">Strategic Placement</span>
          </h2>
          <div className="md:pt-2">
            <p className="text-[14px] md:text-[15px] text-[#555555] max-w-[460px] leading-relaxed text-left md:text-right font-medium">
              Identify top-tier executives, optimize workforce planning, and gain a competitive edge in acquiring the talent needed for long-term organizational success.
            </p>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 w-full">
          {cards.map((card) => (
            <div key={card.id} className="bg-white rounded-2xl overflow-hidden shadow-sm flex flex-col">
              <div className="h-[220px] md:h-[260px] w-full relative overflow-hidden">
                <img 
                  src={card.img} 
                  alt={card.title} 
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="p-8 flex flex-col justify-center flex-grow text-center">
                <h3 className="text-[#111111] font-bold text-lg md:text-[20px] mb-3">{card.title}</h3>
                <p className="text-[#666666] text-[13px] md:text-[14px] leading-[1.6]">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
