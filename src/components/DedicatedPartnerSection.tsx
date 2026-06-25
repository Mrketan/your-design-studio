import React, { useRef } from "react";
import { ArrowUpRight, Compass } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

// The user downloaded this specific video into assets:
import bgVideo from "@/assets/106340-672600365.mp4";

// Random floating particles
const particles = Array.from({ length: 15 }).map((_, i) => ({
  id: i,
  size: Math.random() * 4 + 2,
  top: `${Math.random() * 100}%`,
  left: `${Math.random() * 100}%`,
  duration: Math.random() * 8 + 12,
  delay: Math.random() * 5,
}));

export function DedicatedPartnerSection() {
  const containerRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const opacityVideo = useTransform(scrollYProgress, [0, 1], [1, 0.2]);
  const opacityContent = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Title Stagger Animation
  const titleText = "Intelligent Workforce Solutions for High-Growth Entities.";
  const titleWords = titleText.split(" ");

  return (
    <section ref={containerRef} className="relative w-full h-screen min-h-[750px] flex flex-col font-sans overflow-hidden">
      
      {/* Background Video */}
      <motion.div 
        style={{ opacity: opacityVideo }} 
        className="absolute inset-0 w-full h-full bg-[#111111]"
      >
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={bgVideo} type="video/mp4" />
        </video>
        {/* Soft uniform overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black/40" />
      </motion.div>

      {/* Floating Particles Overlay */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            animate={{
              y: [0, -60, 0],
              x: [0, Math.random() * 40 - 20, 0],
              opacity: [0, 0.8, 0],
              scale: [0.8, 1.5, 0.8],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: "easeInOut",
            }}
            className="absolute rounded-full bg-white/30 blur-[2px]"
            style={{
              width: p.size,
              height: p.size,
              top: p.top,
              left: p.left,
              boxShadow: "0 0 10px rgba(255,255,255,0.5)",
            }}
          />
        ))}
      </div>

      {/* Top Navbar Container */}
      <nav className="relative z-20 w-full flex items-center justify-between px-6 md:px-12 lg:px-20 py-8 mx-auto">
        {/* Left Spacer / Logo area */}
        <div className="w-[160px] hidden lg:block"></div>
        
        {/* Centered Links with hover effects */}
        <div className="hidden lg:flex flex-1 items-center justify-center gap-10 text-[15px] font-medium text-white/95">
          {['CapitalLens', 'Capability Centre', 'Advisory Hub', 'Talent Mapping', 'Insights'].map((item, i) => (
            <motion.a 
              key={i}
              href="#" 
              className="relative group hover:text-white transition-colors drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]"
              whileHover={{ y: -2 }}
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full" />
            </motion.a>
          ))}
        </div>

        {/* Right Button */}
        <div className="w-[160px] flex justify-end">
          <motion.button 
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255, 42, 42, 0.6)" }}
            whileTap={{ scale: 0.95 }}
            className="relative overflow-hidden bg-[#FF2A2A] text-white px-6 py-2.5 rounded-[12px] text-[14px] font-bold transition-all shadow-lg group"
          >
            <span className="relative z-10">Book Advisory</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-[1s]" />
          </motion.button>
        </div>
      </nav>

      {/* Hero Content aligned to the left */}
      <motion.div 
        style={{ opacity: opacityContent }}
        className="relative z-10 flex-grow flex flex-col justify-center px-6 md:px-12 lg:px-20 w-full mx-auto pb-24"
      >
        <div className="max-w-5xl">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            className="inline-flex items-center gap-3 mb-6"
          >
            <div className="w-8 h-[2px] bg-[#FF2A2A]" />
            <p className="text-[16px] md:text-[18px] text-white/95 font-medium tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              Strategic Talent Alignment
            </p>
          </motion.div>
          
          <h1 className="text-5xl md:text-[72px] lg:text-[84px] font-bold text-white leading-[1.05] tracking-tight mb-8 drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
            {titleWords.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.8, delay: i * 0.1, type: "spring", bounce: 0.2 }}
                className="inline-block mr-4 mb-2"
              >
                {word === "High-Growth" || word === "Entities." ? (
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">{word}</span>
                ) : word}
              </motion.span>
            ))}
          </h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-[17px] md:text-[21px] text-white/90 font-medium tracking-wide leading-relaxed max-w-[800px] mb-12 drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]"
          >
            Move beyond traditional recruitment. We utilize deep diagnostic data <br className="hidden md:block" />
            and talent intelligence to align your human capital with long-term <br className="hidden md:block" />
            strategic objectives.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center gap-4 md:gap-5"
          >
            <motion.button 
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255,42,42,0.6)" }}
              whileTap={{ scale: 0.95 }}
              animate={{ y: [0, -5, 0] }}
              transition={{ y: { duration: 4, repeat: Infinity, ease: "easeInOut" } }}
              className="w-full sm:w-auto relative overflow-hidden inline-flex items-center justify-center gap-2 bg-[#FF2A2A] text-white rounded-[12px] px-8 py-3.5 font-bold text-[16px] shadow-lg group"
            >
              <span className="relative z-10 flex items-center gap-2">
                Begin Diagnostic
                <ArrowUpRight className="w-5 h-5 stroke-[2.5] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-[1s]" />
            </motion.button>

            <motion.button 
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)", boxShadow: "0 0 20px rgba(255,255,255,0.2)" }}
              whileTap={{ scale: 0.95 }}
              animate={{ y: [0, -5, 0] }}
              transition={{ y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 } }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border-[1.5px] border-white/70 text-white rounded-[12px] px-8 py-3.5 font-semibold text-[16px] transition-all backdrop-blur-sm group"
            >
              Talk to an Advisor
              <Compass className="w-5 h-5 stroke-[2] group-hover:rotate-45 transition-transform duration-500" />
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
