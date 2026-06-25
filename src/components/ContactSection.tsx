import React from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import girlImg from "@/assets/photo-1672819030357-464e40e5abd8 1.png";

export function ContactSection() {
  return (
    <section className="bg-[#C5CCD9] pt-16 md:pt-24 relative overflow-hidden font-sans">
      
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10 md:mb-12 relative z-10 px-6"
      >
        <h2 className="text-3xl md:text-[42px] font-bold leading-[1.1] tracking-tight mb-5">
          <span className="text-[#FA3E3E]">Ready to Build</span>
          <br /> <span className="text-[#333A44]">a Strong Organisation</span>
        </h2>
        <p className="text-[15px] md:text-[17px] text-[#4F5662] font-medium max-w-[850px] mx-auto leading-relaxed">
          Whether you're developing leaders, planning your workforce, or searching for critical<br className="hidden md:block" /> talent, Apex Global provides the insights and expertise to help you move forward with<br className="hidden md:block" /> confidence.
        </p>
      </motion.div>

      <div className="max-w-[1050px] mx-auto px-6 md:px-8 flex flex-col md:flex-row gap-6 md:gap-8 items-end relative z-10">
        
        {/* Left Image */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="w-full md:w-[45%] flex justify-center md:justify-end relative z-20 md:-ml-8"
        >
          <img 
            src={girlImg} 
            alt="Smiling woman pointing" 
            className="w-[90%] md:w-[120%] max-w-[500px] object-contain -mb-1 transform translate-y-1"
          />
        </motion.div>

        {/* Right Form Card */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="w-full md:w-[55%] bg-white rounded-[24px] p-8 md:p-10 shadow-sm mb-12 md:mb-16 relative z-30"
        >
          <h3 className="text-[18px] md:text-[22px] font-bold text-[#111111] mb-8">Request an Advisory Session</h3>
          
          <form className="flex flex-col gap-5">
            
            {/* 2 Columns for Name and Company */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <label className="text-[12px] font-bold text-[#111111]">Full Name</label>
                <input 
                  type="text" 
                  placeholder="Enter your name" 
                  className="border border-[#E2E8F0] rounded-lg px-4 py-3 text-[13px] placeholder-[#A0AEC0] focus:outline-none focus:border-[#FA3E3E] bg-[#FAFCFF]"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[12px] font-bold text-[#111111]">Company</label>
                <input 
                  type="text" 
                  placeholder="Enter company name" 
                  className="border border-[#E2E8F0] rounded-lg px-4 py-3 text-[13px] placeholder-[#A0AEC0] focus:outline-none focus:border-[#FA3E3E] bg-[#FAFCFF]"
                />
              </div>
            </div>

            {/* Service Dropdown */}
            <div className="flex flex-col gap-2">
              <label className="text-[12px] font-bold text-[#111111]">Service of Interest</label>
              <div className="relative">
                <select className="w-full border border-[#E2E8F0] rounded-lg px-4 py-3 text-[13px] text-[#4F5662] focus:outline-none focus:border-[#FA3E3E] bg-[#FAFCFF] appearance-none cursor-pointer">
                  <option>Executive Coaching</option>
                  <option>Workforce Planning</option>
                  <option>Talent Acquisition</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
                  <ChevronDown className="w-4 h-4 text-[#A0AEC0]" />
                </div>
              </div>
            </div>

            {/* Message Textarea */}
            <div className="flex flex-col gap-2">
              <label className="text-[12px] font-bold text-[#111111]">Message</label>
              <textarea 
                rows={4}
                placeholder="How can we help your organization?" 
                className="w-full border border-[#E2E8F0] rounded-lg px-4 py-3 text-[13px] placeholder-[#A0AEC0] focus:outline-none focus:border-[#FA3E3E] bg-[#FAFCFF] resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <motion.button 
              type="button"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-2 w-full flex items-center justify-center gap-2 bg-[#FF2A2A] hover:bg-[#E52525] text-white rounded-lg px-6 py-4 text-[14px] font-bold transition-colors shadow-sm"
            >
              Send Request <span className="text-[12px] opacity-90 tracking-tighter">▷</span>
            </motion.button>
          </form>
        </motion.div>

      </div>
    </section>
  );
}
