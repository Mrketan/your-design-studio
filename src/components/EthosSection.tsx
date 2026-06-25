import React from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import womanImg from "@/assets/unsplash_IsuMgQQ0Tac.png";

export function EthosSection() {
  return (
    <section className="w-full bg-[#F4F7FC] font-sans">
      <div className="pt-8 pb-16 md:pt-12 md:pb-24 max-w-[1100px] mx-auto px-6 md:px-8">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-[42px] font-bold leading-[1.1] text-[#111111] tracking-tight mb-5">
            Our <span className="text-[#FA3E3E]">Ethos</span>
          </h2>
          <p className="text-[15px] md:text-[17px] text-[#4F5662] font-medium max-w-3xl mx-auto leading-relaxed">
            Our ethos is built on integrity, insight, and impact, guiding every partnership and decision we make.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-center">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-[45%] flex flex-col items-start gap-6"
          >
            <p className="text-[14px] md:text-[15px] text-[#4F5662] leading-[1.7] font-medium">
              At Apex Global, we believe that people are the driving force behind every successful organization.
            </p>
            <p className="text-[14px] md:text-[15px] text-[#4F5662] leading-[1.7] font-medium">
              Our ethos is built on integrity, excellence, innovation, and partnership.
            </p>
            <p className="text-[14px] md:text-[15px] text-[#4F5662] leading-[1.7] font-medium">
              We are committed to delivering insightful, data-driven solutions that empower businesses to unlock human potential, cultivate exceptional leadership, and create sustainable growth.
            </p>

            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-2 inline-flex items-center gap-2 bg-[#FF2A2A] hover:bg-[#E52525] text-white rounded-full px-6 py-2.5 text-[13px] font-semibold transition-colors shadow-sm"
            >
              Read More
              <ChevronDown className="h-4 w-4" />
            </motion.button>
          </motion.div>

          {/* Right Image */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-[55%]"
          >
            <div className="rounded-[24px] overflow-hidden shadow-sm">
              <img 
                src={womanImg} 
                alt="Smiling woman holding coffee and papers" 
                className="w-full h-[350px] md:h-[420px] object-cover object-center"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
