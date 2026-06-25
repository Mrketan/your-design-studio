import React, { useState, useRef } from "react";
import { Users, Flag, Users2, GraduationCap, LineChart, Search } from "lucide-react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";

const CARDS = [
  {
    id: "talent",
    title: "TALENT",
    icon: Users,
    color: "from-[#10B981]/20 to-transparent",
    borderColor: "border-[#10B981]/40",
    hoverBorderColor: "border-[#10B981]",
    textColor: "text-[#10B981]",
    description: "Attract, develop and retain\nthe right talent to drive\nsustainable growth.",
  },
  {
    id: "leadership",
    title: "LEADERSHIP",
    icon: Flag,
    color: "from-[#3B82F6]/20 to-transparent",
    borderColor: "border-[#3B82F6]/40",
    hoverBorderColor: "border-[#3B82F6]",
    textColor: "text-[#3B82F6]",
    description: "Build inspired leaders who\nempower teams and accelerate\norganizational success.",
  },
  {
    id: "culture",
    title: "CULTURE",
    icon: Users2,
    color: "from-[#8B5CF6]/20 to-transparent",
    borderColor: "border-[#8B5CF6]/40",
    hoverBorderColor: "border-[#8B5CF6]",
    textColor: "text-[#8B5CF6]",
    description: "Create a purpose-driven culture\nwhere people thrive and\nperformance excels.",
  },
  {
    id: "future-skill",
    title: "FUTURE SKILL",
    icon: GraduationCap,
    color: "from-[#14B8A6]/20 to-transparent",
    borderColor: "border-[#14B8A6]/40",
    hoverBorderColor: "border-[#14B8A6]",
    textColor: "text-[#14B8A6]",
    description: "Build future-ready skills\nto adapt, innovate and\nlead in a changing world.",
  },
  {
    id: "performance",
    title: "PERFORMANCE",
    icon: LineChart,
    color: "from-[#0EA5E9]/20 to-transparent",
    borderColor: "border-[#0EA5E9]/40",
    hoverBorderColor: "border-[#0EA5E9]",
    textColor: "text-[#0EA5E9]",
    description: "Drive high performance through\nclear goals, feedback and\ncontinuous improvement.",
  },
  {
    id: "workforce",
    title: "WORKFORCE\nPLANNING",
    icon: Search,
    color: "from-[#A855F7]/20 to-transparent",
    borderColor: "border-[#A855F7]/40",
    hoverBorderColor: "border-[#A855F7]",
    textColor: "text-[#A855F7]",
    description: "Align the right people to the\nright roles to support future\nbusiness needs.",
  },
];

// Generate random particles
const particles = Array.from({ length: 20 }).map((_, i) => ({
  id: i,
  size: Math.random() * 4 + 2,
  top: `${Math.random() * 100}%`,
  left: `${Math.random() * 100}%`,
  duration: Math.random() * 10 + 10,
  delay: Math.random() * 5,
}));

export function CapabilitiesSection() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  const yContent = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);
  const scaleCenter = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const opacityCenter = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  const isHovered = (id: string) => hoveredId === id || hoveredId === "center";

  return (
    <section ref={containerRef} className="py-24 bg-[#020617] overflow-hidden flex justify-center items-center relative font-sans w-full min-h-screen">
      
      {/* Parallax Floating Particles */}
      <motion.div style={{ y: yBg }} className="absolute inset-0 pointer-events-none z-0">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            animate={{
              y: [0, -50, 0],
              opacity: [0.1, 0.6, 0.1],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: "easeInOut",
            }}
            className="absolute rounded-full bg-white/20 blur-[1px]"
            style={{
              width: p.size,
              height: p.size,
              top: p.top,
              left: p.left,
              boxShadow: "0 0 10px rgba(255,255,255,0.3)",
            }}
          />
        ))}
      </motion.div>

      <motion.div style={{ y: yContent }} className="w-full max-w-[1200px] mx-auto px-6 relative z-10">
        
        {/* Dynamic Background glow */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
            rotate: [0, 90, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-r from-[#3B82F6]/10 via-[#8B5CF6]/10 to-[#10B981]/10 rounded-full blur-[120px] pointer-events-none transition-all duration-700 ${hoveredId ? 'scale-125 opacity-80' : ''}`} 
        />

        <motion.svg 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.5, type: "spring", bounce: 0.2 }}
          className="absolute inset-0 w-full h-full pointer-events-none hidden md:block z-0"
        >
          <style>
            {`
              @keyframes line-flow {
                to { stroke-dashoffset: -24; }
              }
              .flowing-line {
                stroke-dasharray: 6 6;
                animation: line-flow 1.5s linear infinite;
              }
            `}
          </style>
          <g strokeWidth={1.5} className="transition-all duration-300 flowing-line">
            {/* --- LEFT SIDE --- */}
            {/* Talent (Left Top) */}
            <g className={`transition-all duration-300 ${isHovered('talent') ? 'opacity-100 drop-shadow-[0_0_12px_#10B981]' : 'opacity-30'}`}>
              <line x1="50%" y1="50%" x2="35%" y2="50%" className={`stroke-[#10B981] ${isHovered('talent') ? 'stroke-2' : ''}`} />
              <line x1="35%" y1="50%" x2="35%" y2="20%" className={`stroke-[#10B981] ${isHovered('talent') ? 'stroke-2' : ''}`} />
              <line x1="35%" y1="20%" x2="16.66%" y2="20%" className={`stroke-[#10B981] ${isHovered('talent') ? 'stroke-2' : ''}`} />
              <circle cx="16.66%" cy="20%" r={isHovered('talent') ? 6 : 3} className="fill-[#10B981] transition-all duration-300" />
              <circle cx="35%" cy="50%" r={isHovered('talent') ? 5 : 3} className="fill-[#3B82F6] transition-all" />
              {isHovered('talent') && (
                <circle r="5" fill="#fff" className="drop-shadow-[0_0_10px_#fff]">
                  <animateMotion dur="1s" repeatCount="indefinite" path="M 600 400 L 420 400 L 420 160 L 200 160" />
                </circle>
              )}
            </g>

            {/* Future Skill (Left Bottom) */}
            <g className={`transition-all duration-300 ${isHovered('future-skill') ? 'opacity-100 drop-shadow-[0_0_12px_#14B8A6]' : 'opacity-30'}`}>
              <line x1="50%" y1="50%" x2="35%" y2="50%" className={`stroke-[#14B8A6] ${isHovered('future-skill') ? 'stroke-2' : ''}`} />
              <line x1="35%" y1="50%" x2="35%" y2="80%" className={`stroke-[#14B8A6] ${isHovered('future-skill') ? 'stroke-2' : ''}`} />
              <line x1="35%" y1="80%" x2="16.66%" y2="80%" className={`stroke-[#14B8A6] ${isHovered('future-skill') ? 'stroke-2' : ''}`} />
              <circle cx="16.66%" cy="80%" r={isHovered('future-skill') ? 6 : 3} className="fill-[#14B8A6] transition-all duration-300" />
              {isHovered('future-skill') && (
                <circle r="5" fill="#fff" className="drop-shadow-[0_0_10px_#fff]">
                  <animateMotion dur="1s" repeatCount="indefinite" path="M 600 400 L 420 400 L 420 640 L 200 640" />
                </circle>
              )}
            </g>

            {/* Leadership (Center Top) */}
            <g className={`transition-all duration-300 ${isHovered('leadership') ? 'opacity-100 drop-shadow-[0_0_12px_#3B82F6]' : 'opacity-30'}`}>
              <line x1="50%" y1="50%" x2="50%" y2="20%" className={`stroke-[#3B82F6] ${isHovered('leadership') ? 'stroke-2' : ''}`} />
              <circle cx="50%" cy="20%" r={isHovered('leadership') ? 6 : 3} className="fill-[#3B82F6] transition-all duration-300" />
              {isHovered('leadership') && (
                <circle r="5" fill="#fff" className="drop-shadow-[0_0_10px_#fff]">
                  <animateMotion dur="0.6s" repeatCount="indefinite" path="M 600 400 L 600 160" />
                </circle>
              )}
            </g>

            {/* Performance (Center Bottom) */}
            <g className={`transition-all duration-300 ${isHovered('performance') ? 'opacity-100 drop-shadow-[0_0_12px_#0EA5E9]' : 'opacity-30'}`}>
              <line x1="50%" y1="50%" x2="50%" y2="80%" className={`stroke-[#0EA5E9] ${isHovered('performance') ? 'stroke-2' : ''}`} />
              <circle cx="50%" cy="80%" r={isHovered('performance') ? 6 : 3} className="fill-[#0EA5E9] transition-all duration-300" />
              {isHovered('performance') && (
                <circle r="5" fill="#fff" className="drop-shadow-[0_0_10px_#fff]">
                  <animateMotion dur="0.6s" repeatCount="indefinite" path="M 600 400 L 600 640" />
                </circle>
              )}
            </g>

            {/* Culture (Right Top) */}
            <g className={`transition-all duration-300 ${isHovered('culture') ? 'opacity-100 drop-shadow-[0_0_12px_#8B5CF6]' : 'opacity-30'}`}>
              <line x1="50%" y1="50%" x2="65%" y2="50%" className={`stroke-[#8B5CF6] ${isHovered('culture') ? 'stroke-2' : ''}`} />
              <line x1="65%" y1="50%" x2="65%" y2="20%" className={`stroke-[#8B5CF6] ${isHovered('culture') ? 'stroke-2' : ''}`} />
              <line x1="65%" y1="20%" x2="83.33%" y2="20%" className={`stroke-[#8B5CF6] ${isHovered('culture') ? 'stroke-2' : ''}`} />
              <circle cx="83.33%" cy="20%" r={isHovered('culture') ? 6 : 3} className="fill-[#8B5CF6] transition-all duration-300" />
              <circle cx="65%" cy="50%" r={isHovered('culture') ? 5 : 3} className="fill-[#8B5CF6] transition-all" />
              {isHovered('culture') && (
                <circle r="5" fill="#fff" className="drop-shadow-[0_0_10px_#fff]">
                  <animateMotion dur="1s" repeatCount="indefinite" path="M 600 400 L 780 400 L 780 160 L 1000 160" />
                </circle>
              )}
            </g>

            {/* Workforce Planning (Right Bottom) */}
            <g className={`transition-all duration-300 ${isHovered('workforce') ? 'opacity-100 drop-shadow-[0_0_12px_#A855F7]' : 'opacity-30'}`}>
              <line x1="50%" y1="50%" x2="65%" y2="50%" className={`stroke-[#A855F7] ${isHovered('workforce') ? 'stroke-2' : ''}`} />
              <line x1="65%" y1="50%" x2="65%" y2="80%" className={`stroke-[#A855F7] ${isHovered('workforce') ? 'stroke-2' : ''}`} />
              <line x1="65%" y1="80%" x2="83.33%" y2="80%" className={`stroke-[#A855F7] ${isHovered('workforce') ? 'stroke-2' : ''}`} />
              <circle cx="83.33%" cy="80%" r={isHovered('workforce') ? 6 : 3} className="fill-[#A855F7] transition-all duration-300" />
              {isHovered('workforce') && (
                <circle r="5" fill="#fff" className="drop-shadow-[0_0_10px_#fff]">
                  <animateMotion dur="1s" repeatCount="indefinite" path="M 600 400 L 780 400 L 780 640 L 1000 640" />
                </circle>
              )}
            </g>
            
            {/* Center Dot */}
            <circle cx="50%" cy="50%" r="5" className={`fill-white drop-shadow-[0_0_20px_white] transition-transform duration-500 ${hoveredId ? 'scale-[2]' : 'scale-100 animate-[pulse_2s_ease-in-out_infinite]'}`} />
          </g>
        </motion.svg>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 relative z-10 w-full mb-6 perspective-[1000px]">
          <NetworkCard {...CARDS[0]} index={0} setHoveredId={setHoveredId} hoveredId={hoveredId} />
          <NetworkCard {...CARDS[1]} index={1} setHoveredId={setHoveredId} hoveredId={hoveredId} />
          <NetworkCard {...CARDS[2]} index={2} setHoveredId={setHoveredId} hoveredId={hoveredId} />
        </div>

        {/* Central Pill */}
        <motion.div 
          style={{ scale: scaleCenter, opacity: opacityCenter }}
          className="relative flex items-center justify-center my-10 md:my-14 z-30 w-full cursor-pointer"
          onMouseEnter={() => setHoveredId("center")}
          onMouseLeave={() => setHoveredId(null)}
        >
          {/* Concentric glowing rings */}
          <div className={`absolute w-[200px] h-[70px] md:w-[320px] md:h-[100px] border rounded-[4rem] pointer-events-none transition-colors duration-500 animate-[pulse_2s_ease-in-out_infinite] ${hoveredId === 'center' ? 'border-[#3B82F6]/90 shadow-[0_0_50px_rgba(59,130,246,0.6)]' : 'border-white/10'}`} />
          <div className={`absolute w-[180px] h-[60px] md:w-[280px] md:h-[80px] border rounded-[3rem] pointer-events-none transition-colors duration-500 animate-[pulse_2s_ease-in-out_infinite_400ms] ${hoveredId === 'center' ? 'border-[#10B981]/80 shadow-[0_0_40px_rgba(16,185,129,0.5)]' : 'border-white/20'}`} />
          <div className={`absolute w-[160px] h-[50px] md:w-[240px] md:h-[60px] border rounded-[2rem] pointer-events-none transition-colors duration-500 animate-[pulse_2s_ease-in-out_infinite_800ms] ${hoveredId === 'center' ? 'border-white shadow-[0_0_30px_rgba(255,255,255,0.9)]' : 'border-[#3B82F6]/50'}`} />
          
          <div className={`bg-[#020617] border rounded-[2rem] px-8 md:px-10 py-3 md:py-4 transition-all duration-300 relative z-20 ${hoveredId === 'center' ? 'border-white shadow-[0_0_80px_rgba(255,255,255,0.5)] scale-110' : 'border-white/30 shadow-[0_0_40px_rgba(59,130,246,0.2)]'}`}>
            <h3 className={`text-center font-bold text-[12px] md:text-[14px] tracking-[0.2em] leading-tight drop-shadow-md transition-colors duration-300 ${hoveredId === 'center' ? 'text-white' : 'text-slate-200'}`}>
              HUMAN<br />CAPABILITY
            </h3>
          </div>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 relative z-10 w-full mt-6 perspective-[1000px]">
          <NetworkCard {...CARDS[3]} index={3} setHoveredId={setHoveredId} hoveredId={hoveredId} />
          <NetworkCard {...CARDS[4]} index={4} setHoveredId={setHoveredId} hoveredId={hoveredId} />
          <NetworkCard {...CARDS[5]} index={5} setHoveredId={setHoveredId} hoveredId={hoveredId} />
        </div>

      </motion.div>
    </section>
  );
}

function NetworkCard({ id, title, icon: Icon, color, borderColor, hoverBorderColor, textColor, description, index = 0, setHoveredId, hoveredId }: any) {
  const isHovered = hoveredId === id || hoveredId === 'center';
  const isDimmed = hoveredId !== null && hoveredId !== id && hoveredId !== 'center';

  const ref = useRef<HTMLDivElement>(null);
  
  // 3D Tilt Effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setHoveredId(null);
  };

  return (
    <motion.div
      animate={{ y: [0, -12, 0] }}
      transition={{ 
        y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: index * 0.3 } 
      }}
      className="w-full max-w-[280px]"
    >
      <motion.div 
        ref={ref}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        initial={{ opacity: 0, scale: 0.8, y: 50, rotateX: 20 }}
        whileInView={{ opacity: 1, scale: 1, y: 0, rotateX: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, delay: index * 0.15, type: "spring" }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHoveredId(id)}
        onMouseLeave={handleMouseLeave}
        className={`relative w-full h-[340px] bg-[#0A1229]/70 backdrop-blur-xl rounded-[1rem] border flex flex-col items-center p-8 text-center overflow-hidden cursor-pointer transition-all duration-500 
          ${isHovered ? hoverBorderColor : borderColor}
          ${isDimmed ? 'opacity-30 scale-[0.95] grayscale-[70%]' : 'opacity-100'}
          ${isHovered ? 'shadow-[0_40px_80px_rgba(0,0,0,0.8)] z-50 scale-105' : 'shadow-xl z-10 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]'}
        `}
      >
        <div className={`absolute inset-0 bg-gradient-to-b ${color} transition-all duration-700 ${isHovered ? 'opacity-80 scale-110' : 'opacity-20'}`} />
        
        {/* Animated Background Highlight on Hover */}
        <div className={`absolute -inset-[200%] bg-gradient-to-r from-transparent via-white/10 to-transparent rotate-45 transition-transform duration-[2s] ${isHovered ? 'translate-x-[150%]' : '-translate-x-[150%]'}`} />
        
        <div className="flex-1 flex flex-col items-center w-full mt-4" style={{ transform: "translateZ(30px)" }}>
          <div className={`w-20 h-20 rounded-full border transition-all duration-500 flex items-center justify-center mb-8 relative z-10 ${isHovered ? 'border-white/80 bg-white/10 scale-125 shadow-[0_0_40px_rgba(255,255,255,0.2)]' : 'border-white/20'}`}>
            <Icon className={`w-8 h-8 transition-colors duration-300 ${isHovered ? 'text-white drop-shadow-[0_0_8px_white]' : textColor}`} strokeWidth={1.5} />
            {/* Circular orbit with a dot */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: isHovered ? 1.5 : 10, repeat: Infinity, ease: "linear" }}
              className={`absolute inset-[-4px] rounded-full border transition-colors duration-500 ${isHovered ? 'border-white/50' : 'border-white/10'}`}
            >
              <div className={`absolute -right-[3px] top-4 w-2 h-2 rounded-full bg-current transition-colors duration-300 ${isHovered ? 'text-white shadow-[0_0_15px_white]' : `${textColor} shadow-[0_0_6px_currentColor]`}`} />
            </motion.div>
          </div>

          <h4 className={`text-[15px] font-bold transition-all duration-300 mb-5 tracking-widest relative z-10 ${isHovered ? 'text-white scale-110 drop-shadow-[0_0_8px_white]' : textColor}`}>
            {title}
          </h4>

          <p className={`text-[12px] md:text-[13px] font-medium leading-[1.6] whitespace-pre-line relative z-10 transition-colors duration-300 ${isHovered ? 'text-white font-semibold' : 'text-slate-400'}`}>
            {description}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

