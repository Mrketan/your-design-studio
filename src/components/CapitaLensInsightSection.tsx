import React from "react";
import { motion } from "framer-motion";
import img1 from "@/assets/b665c412-7380-4649-92ca-6af9953476d1 1.png";
import img2 from "@/assets/unsplash_I5sXsH0WqcE.png";

export function CapitaLensInsightSection() {
  return (
    <section className="bg-[#F4F7FC] py-16 md:py-24 font-sans w-full">
      {/* Top Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-[1200px] mx-auto px-8 md:px-12 flex flex-col md:flex-row justify-between items-start mb-12 md:mb-16"
      >
        <h2 className="text-3xl md:text-[40px] font-bold text-[#111111] leading-[1.1] tracking-tight">
          Unlock Your <span className="text-[#FF2A2A]">Organization</span><br/>
          CapitaLens insight
        </h2>
        <p className="text-[14px] md:text-[15px] text-[#444444] font-medium md:text-right mt-6 md:mt-2 max-w-[380px] leading-relaxed">
          Turn meaningful insights into strategi actions<br className="hidden md:block" />
          that drive growth and success.
        </p>
      </motion.div>

      {/* 2-Column Staggered Layout Grid */}
      <div className="w-full max-w-[1000px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 lg:gap-x-12 gap-y-12 items-start">
          
          {/* Left Column */}
          <div className="flex flex-col gap-8 md:gap-10">
            <motion.img 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              src={img1} 
              alt="Insight Review Section" 
              className="w-full max-w-[420px] h-auto object-cover rounded-[16px] self-center md:self-end shadow-sm cursor-pointer"
            />
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02, x: 10 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-[420px] self-center md:self-end text-left pr-4 cursor-default"
            >
              <h3 className="text-xl md:text-[22px] font-bold text-[#111111] mb-3 tracking-tight">Insight Review Section</h3>
              <p className="text-[14px] md:text-[15px] text-[#555555] font-medium leading-[1.6]">
                Participate in a focused strategy session to validate priorities and align leadership objectives. Identify high-impact opportunities and gain actionable insights to drive growth and informed decision-making.
              </p>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-8 md:gap-10 pt-0 md:pt-12">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02, x: 10 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="max-w-[420px] self-center md:self-start text-left pr-4 cursor-default"
            >
              <h3 className="text-xl md:text-[22px] font-bold text-[#111111] mb-3 tracking-tight">Organisational Diagnostic</h3>
              <p className="text-[14px] md:text-[15px] text-[#555555] font-medium leading-[1.6]">
                Capture comprehensive data across leadership, capability, and performance drivers to create a clear view of your organization's current state.
              </p>
            </motion.div>
            <motion.img 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.4 }}
              src={img2} 
              alt="Organisational Diagnostic" 
              className="w-full max-w-[420px] h-auto object-cover rounded-[16px] self-center md:self-start shadow-sm cursor-pointer"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
