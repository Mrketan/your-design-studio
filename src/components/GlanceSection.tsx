import React from "react";
import { ChevronDown, Globe2 } from "lucide-react";
import { motion } from "framer-motion";
import uaeImg from "@/assets/uae.png";
import africaImg from "@/assets/africa.png";
import gulfImg from "@/assets/gulf.png";

type ReachCardProps = {
  region: string;
  image: string;
  description: string;
};

function ReachCard({ region, image, description }: ReachCardProps) {
  return (
    <div className="relative rounded-[2rem] overflow-hidden aspect-[3/4] md:aspect-[4/5] group">
      {/* Background Image */}
      <img 
        src={image} 
        alt={region} 
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
      />
      
      {/* Gradient Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/80" />

      {/* Top Left Pill */}
      <div className="absolute top-4 left-4">
        <div className="backdrop-blur-md bg-white/20 border border-white/30 text-white rounded-full px-6 py-2 font-bold tracking-wide shadow-sm">
          {region}
        </div>
      </div>

      {/* Bottom Content Area */}
      <div className="absolute bottom-4 left-4 right-4">
        <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-[1.5rem] p-5 md:p-6 flex flex-col gap-4">
          <p className="text-white/90 text-sm leading-relaxed font-medium">
            {description}
          </p>

          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="self-start inline-flex items-center justify-between bg-[#FF2A2A] text-white rounded-full pl-5 pr-3 py-2 font-semibold text-sm transition-colors hover:bg-[#E52525]"
          >
            Learn more
            <ChevronDown className="h-4 w-4 ml-2 opacity-70" />
          </motion.button>
        </div>
      </div>
    </div>
  );
}

function LogoPill() {
  return (
    <div className="flex items-center gap-3 bg-[#0A1D3A] rounded-[1rem] px-5 py-3 min-w-max shadow-md">
      <Globe2 className="text-[#4E9FFF] h-8 w-8 stroke-[1.5]" />
      <div className="flex flex-col leading-tight border-l border-white/20 pl-3">
        <span className="text-white font-bold text-lg">Apex Global</span>
        <span className="text-[#4E9FFF] font-semibold text-[15px]">Consultancy</span>
      </div>
    </div>
  );
}

export function GlanceSection() {
  return (
    <section className="pt-8 pb-16 md:pt-12 md:pb-24 bg-[#F2F5F9]">
      {/* Top Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto px-6 text-center mb-16"
      >
        <h2 className="text-3xl md:text-[40px] font-bold leading-[1.1] tracking-tight mb-6 text-ink">
          Apex Global <span className="text-[#FF2A2A]">Consultancy</span><br />
          at a Glance
        </h2>
        <p className="text-[14px] md:text-[15px] text-ink/80 font-medium leading-relaxed">
          Apex Global Consultancy is a premium Human Capital, Talent Intelligence, Workforce Advisory, and Leadership Consulting firm helping organizations across the GCC and international markets build high-performing, future-ready workforces. We combine data-driven insights, strategic expertise, and industry knowledge to empower businesses with smarter talent decisions, stronger leadership, and sustainable growth.
        </p>
      </motion.div>

      {/* Marquee Banner */}
      <div className="w-full bg-white py-8 overflow-hidden flex flex-nowrap shadow-inner border-y-2 border-[#FF2A2A]">
        <div className="flex items-center gap-6 pr-6 animate-[marquee_30s_linear_infinite] whitespace-nowrap shrink-0">
          {Array.from({ length: 12 }).map((_, i) => (
            <LogoPill key={`pill-1-${i}`} />
          ))}
        </div>
        <div className="flex items-center gap-6 pr-6 animate-[marquee_30s_linear_infinite] whitespace-nowrap shrink-0" aria-hidden="true">
          {Array.from({ length: 12 }).map((_, i) => (
            <LogoPill key={`pill-2-${i}`} />
          ))}
        </div>
      </div>

      {/* Global Strategic Reach */}
      <div className="w-full mt-20 md:mt-28 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto px-6"
        >
          <h2 className="text-3xl md:text-[40px] font-bold leading-[1.1] tracking-tight mb-6 text-ink">
            Global <span className="text-[#FF2A2A]">Strategic</span> Reach
          </h2>
          <p className="text-[14px] md:text-[15px] text-ink/80 font-medium leading-relaxed max-w-4xl mx-auto mb-12 md:mb-16">
            Apex Global Capita and Apex Global Talent are powered by a trusted network of partners spanning the Gulf, United Kingdom, Europe, Africa, and the United States. Our regional presence enables us to combine international best practices with deep local market understanding, delivering tailored, high-impact solutions that are globally informed and locally relevant.
          </p>
        </motion.div>

        {/* Auto Scrolling Slider */}
        <div className="w-full overflow-hidden flex flex-nowrap pb-12 group">
          <div className="flex items-center gap-6 pr-6 animate-[marquee_35s_linear_infinite] shrink-0 group-hover:[animation-play-state:paused]">
            {Array.from({ length: 2 }).map((_, idx) => (
              <React.Fragment key={`reach-set-1-${idx}`}>
                {[
                  { region: "UAE", image: uaeImg, description: "Driving innovation and high-performance leadership across the United Arab Emirates." },
                  { region: "AFRICA", image: africaImg, description: "Empowering emerging markets with sustainable talent strategies and growth insights." },
                  { region: "THE GULF", image: gulfImg, description: "Connecting dynamic organizations with top-tier talent throughout the Gulf region." },
                  { region: "UNITED KINGDOM", image: uaeImg, description: "Delivering world-class executive search and workforce advisory in the UK." },
                  { region: "UNITED STATES", image: africaImg, description: "Transforming human capital landscapes across North American enterprises." },
                ].map((data, index) => (
                  <div key={index} className="shrink-0 w-[85vw] md:w-[350px] text-left">
                    <ReachCard region={data.region} image={data.image} description={data.description} />
                  </div>
                ))}
              </React.Fragment>
            ))}
          </div>
          <div className="flex items-center gap-6 pr-6 animate-[marquee_35s_linear_infinite] shrink-0 group-hover:[animation-play-state:paused]" aria-hidden="true">
            {Array.from({ length: 2 }).map((_, idx) => (
              <React.Fragment key={`reach-set-2-${idx}`}>
                {[
                  { region: "UAE", image: uaeImg, description: "Driving innovation and high-performance leadership across the United Arab Emirates." },
                  { region: "AFRICA", image: africaImg, description: "Empowering emerging markets with sustainable talent strategies and growth insights." },
                  { region: "THE GULF", image: gulfImg, description: "Connecting dynamic organizations with top-tier talent throughout the Gulf region." },
                  { region: "UNITED KINGDOM", image: uaeImg, description: "Delivering world-class executive search and workforce advisory in the UK." },
                  { region: "UNITED STATES", image: africaImg, description: "Transforming human capital landscapes across North American enterprises." },
                ].map((data, index) => (
                  <div key={index} className="shrink-0 w-[85vw] md:w-[350px] text-left">
                    <ReachCard region={data.region} image={data.image} description={data.description} />
                  </div>
                ))}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
      
      {/* Marquee Keyframes */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
      `}} />
    </section>
  );
}
