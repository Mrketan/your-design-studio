import React from "react";
import { motion } from "framer-motion";

type RegionNode = {
  id: string;
  name: string;
  pinX: number; // percentage of container width
  pinY: number; // percentage of container height
  badgeX: number; // percentage of container width
  badgeY: number; // percentage of container height
};

const regions: RegionNode[] = [
  // New York / East Coast
  { id: "na", name: "NORTH AMERICA", pinX: 26, pinY: 33, badgeX: 10, badgeY: 33 },
  // UK
  { id: "uk", name: "UK & EUROPE", pinX: 47.5, pinY: 26, badgeX: 40, badgeY: 8 },
  // UAE / Middle East
  { id: "me", name: "MIDDLE EAST", pinX: 62, pinY: 41.5, badgeX: 75, badgeY: 28 },
  // Singapore / APAC
  { id: "ap", name: "ASIA-PACIFIC", pinX: 78, pinY: 57, badgeX: 92, badgeY: 45 },
  // South Africa
  { id: "af", name: "AFRICA", pinX: 53.5, pinY: 73, badgeX: 45, badgeY: 90 },
];

export function GlobalReachSection() {
  return (
    <section className="py-16 md:py-24 bg-[#F4F7FC] overflow-hidden flex flex-col justify-center items-center relative w-full font-sans">
      
      {/* Top Texts Container */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-[1200px] mx-auto px-8 md:px-12 flex flex-col md:flex-row justify-between items-start mb-0 md:mb-10 z-10 relative"
      >
        <h2 className="text-3xl md:text-[40px] font-bold text-[#111111] leading-[1.1] tracking-tight">
          Start with <span className="text-[#C82333]">insight,</span><br/>
          <span className="text-[#C82333]">transform</span> with certainty
        </h2>
        <p className="text-[14px] md:text-[15px] text-[#555555] font-medium md:text-right mt-6 md:mt-2 leading-relaxed">
          Unlock Your Organisation's CapitaLens Profile<br/>
          Our team is ready to help you elevate your<br/>
          human capability strategy.
        </p>
      </motion.div>

      {/* Main Container - Aspect Ratio Wrapper guarantees map & pins align perfectly */}
      <div className="relative w-full max-w-[850px] mx-auto mt-12 md:mt-8 px-4 md:px-8">
        <div className="relative w-full aspect-[2754/1398] mx-auto">
          
          {/* The Flat Map */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="absolute inset-0 z-10 pointer-events-none"
          >
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg" 
              alt="Global Reach Map" 
              className="w-full h-full object-fill"
              style={{ 
                opacity: 0.2, 
                filter: "brightness(0) sepia(1) hue-rotate(185deg) saturate(0.5) contrast(0.8)" 
              }}
            />
          </motion.div>

          {/* SVG Layer for Connecting Lines */}
          <svg className="absolute inset-0 w-full h-full z-20 pointer-events-none overflow-visible">
            {regions.map((region, index) => (
              <motion.line
                key={`line-${region.id}`}
                x1={`${region.pinX}%`}
                y1={`${region.pinY}%`}
                x2={`${region.badgeX}%`}
                y2={`${region.badgeY}%`}
                stroke="#C82333"
                strokeWidth="1.5"
                strokeLinecap="round"
                className="opacity-80"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.8 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, delay: 0.2 + index * 0.15, ease: "easeOut" }}
              />
            ))}
          </svg>

          {/* Pins and Badges Layer */}
          <div className="absolute inset-0 w-full h-full z-30 pointer-events-none">
            {regions.map((region, index) => (
              <div key={`nodes-${region.id}`}>
                
                {/* The Pin on the Map */}
                <motion.div 
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ type: "spring", stiffness: 200, delay: 0.1 + index * 0.15 }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 z-30 flex items-center justify-center"
                  style={{ left: `${region.pinX}%`, top: `${region.pinY}%` }}
                >
                  {/* Attractive Sonar Ping */}
                  <div 
                    className="absolute w-[24px] h-[24px] md:w-[32px] md:h-[32px] rounded-full bg-[#C82333] opacity-30 animate-ping" 
                    style={{ animationDuration: '2.5s', animationDelay: `${index * 0.4}s` }}
                  ></div>
                  {/* Core Dot */}
                  <div className="relative w-[8px] h-[8px] md:w-[10px] md:h-[10px] rounded-full bg-white shadow-[0_0_8px_rgba(200,35,51,0.8)] border-[2px] md:border-[3px] border-[#C82333]"></div>
                </motion.div>

                {/* The Badge */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.4, delay: 0.7 + index * 0.15, type: "spring", bounce: 0.3 }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-auto"
                  style={{ left: `${region.badgeX}%`, top: `${region.badgeY}%` }}
                >
                  <motion.div 
                    animate={{ y: [0, -3, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: index * 0.3 }}
                    className="bg-[#C82333] rounded-full px-5 py-2 md:px-6 md:py-2.5 shadow-md border border-white/10 transition-transform hover:scale-105 cursor-pointer hover:shadow-[0_0_15px_rgba(200,35,51,0.6)]"
                  >
                    <span className="text-white font-bold text-[10px] md:text-[12px] tracking-[0.05em] uppercase whitespace-nowrap">
                      {region.name}
                    </span>
                  </motion.div>
                </motion.div>

              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Content Area */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="w-full max-w-[1200px] mx-auto px-8 md:px-12 mt-16 md:mt-12 z-10 relative flex justify-center"
      >
        <div className="text-[14px] md:text-[16px] text-[#555555] font-medium leading-[1.7] max-w-[900px] text-center flex flex-col gap-2">
          <p>We help organizations turn valuable insights into focused, high-impact actions.</p>
          <p>By identifying key priorities and aligning them with business objectives, we create clear strategies that drive measurable results.</p>
          <p>Our approach enables confident decision-making, efficient resource allocation, and sustainable growth.</p>
        </div>
      </motion.div>

    </section>
  );
}
