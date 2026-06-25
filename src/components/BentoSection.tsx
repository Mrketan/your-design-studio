import React from "react";
import { ArrowUpRight, Building2, Users } from "lucide-react";
import { motion } from "framer-motion";
import bannerImg from "@/assets/Rectangle 2236.png";
import womanImg from "@/assets/Frame 22.png";
import manImg from "@/assets/Frame 27.png";

type CardProps = {
  title: string;
  body: string;
  variant: "dark" | "light";
  iconType: "building" | "users";
  delay?: number;
};

function ServiceCard({ title, body, variant, iconType, delay = 0 }: CardProps) {
  const isDark = variant === "dark";
  const Icon = iconType === "building" ? Building2 : Users;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay }}
      className={`relative aspect-square rounded-[24px] p-8 flex flex-col justify-between overflow-hidden shadow-sm transition-transform hover:-translate-y-1 ${isDark ? 'bg-[#060D1E]' : 'bg-[#E0DFDF]'}`}
    >
      <div className="flex items-start justify-between">
        {/* Icon */}
        <div className={`w-10 h-10 rounded-full border flex items-center justify-center ${isDark ? 'border-white/30 text-white' : 'border-[#FF2A2A]/40 text-[#FF2A2A]'}`}>
          <Icon className="w-5 h-5 stroke-[1.5]" />
        </div>
        {/* Arrow */}
        <ArrowUpRight className={`w-5 h-5 ${isDark ? 'text-white' : 'text-[#FF2A2A]'}`} />
      </div>
      <div>
        <h3 className={`text-[18px] md:text-[20px] font-bold mb-3 ${isDark ? 'text-[#FF2A2A]' : 'text-[#111111]'}`}>{title}</h3>
        <p className={`text-[13px] md:text-[14px] leading-relaxed font-medium ${isDark ? 'text-white/80' : 'text-[#333333]'}`}>
          {body}
        </p>
      </div>
    </motion.div>
  );
}

export function BentoSection() {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24 font-sans">
      
      {/* Banner Image */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8 }}
        className="relative w-full h-[300px] md:h-[400px] rounded-[24px] overflow-hidden mb-16 md:mb-24"
      >
        <img src={bannerImg} alt="Team collaborating" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
        <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12 flex flex-col items-start">
          <h2 className="text-white text-4xl md:text-5xl font-extrabold leading-[1.1] mb-6 drop-shadow-md">
            Helping the <span className="font-serif italic font-normal text-transparent" style={{ WebkitTextStroke: "1.5px white" }}>best</span><br />
            be more than
          </h2>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 bg-[#FF2A2A] text-white rounded-xl px-6 py-3.5 font-bold text-[15px] shadow-lg hover:bg-[#E52525] transition-colors"
          >
            Explore our bussiness impact
            <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
          </motion.button>
        </div>
      </motion.div>

      {/* Heading Row */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="flex flex-col md:flex-row justify-between items-start gap-6 md:gap-12 mb-12"
      >
        <h2 className="text-3xl md:text-[40px] font-bold leading-[1.1] text-ink tracking-tight">
          Why HR Leaders and<br />
          <span className="text-[#FF2A2A]">Business Executives</span><br />
          partner with us
        </h2>
        <div className="max-w-[400px] md:pt-2">
          <p className="text-[14px] md:text-[15px] text-[#555555] font-medium leading-relaxed md:text-right">
            Real stories of organizations that redefined their growth trajectory through our advisory services.
          </p>
        </div>
      </motion.div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        <ServiceCard 
          title="Organisations & Enterprises"
          body="Receive a comprehensive report outlining risks, capability gaps, and actionable steps for sustained organizational impact."
          variant="dark"
          iconType="building"
          delay={0.1}
        />
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="aspect-square rounded-[24px] overflow-hidden"
        >
          <img src={womanImg} alt="Client portrait" className="w-full h-full object-cover" />
        </motion.div>
        <ServiceCard 
          title="Insight Review Section"
          body="Receive a comprehensive report outlining risks, capability gaps, and actionable steps for sustained organizational impact."
          variant="light"
          iconType="users"
          delay={0.3}
        />
        <ServiceCard 
          title="Business Owner & CEOs"
          body="Receive a comprehensive report outlining risks, capability gaps, and actionable steps for sustained organizational impact."
          variant="light"
          iconType="users"
          delay={0.1}
        />
        <ServiceCard 
          title="Gov & Public Sector"
          body="Receive a comprehensive report outlining risks, capability gaps, and actionable steps for sustained organizational impact."
          variant="dark"
          iconType="building"
          delay={0.2}
        />
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="aspect-square rounded-[24px] overflow-hidden"
        >
          <img src={manImg} alt="Client portrait" className="w-full h-full object-cover" />
        </motion.div>
      </div>

    </section>
  );
}
