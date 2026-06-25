import React from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import diagnosticImg from "@/assets/vitaly-gariev-0kWem6X0Mc8-unsplash 1 (1).png";

export function DiagnosticSection() {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24 font-sans">
      
      {/* Top Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="flex flex-col md:flex-row justify-between items-start gap-6 md:gap-12 mb-12"
      >
        <h2 className="text-3xl md:text-[40px] font-bold leading-[1.1] text-ink tracking-tight">
          Apex Global Diagnostic <br />
          <span className="text-[#FF2A2A]">Assessment</span>
        </h2>
        <div className="max-w-[450px] md:pt-2">
          <p className="text-[14px] md:text-[15px] text-ink/80 text-left md:text-right font-medium leading-relaxed">
            Gain actionable insights through data-driven assessments, enabling smarter decisions and measurable organizational growth.
          </p>
        </div>
      </motion.div>

      {/* Main Content Card */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8 }}
        className="bg-[#E4E4E4] rounded-[24px] p-5 md:p-6 flex flex-col md:flex-row gap-8 md:gap-12"
      >
        {/* Left Image */}
        <div className="w-full md:w-[50%] h-[300px] md:h-auto min-h-[400px]">
          <img 
            src={diagnosticImg} 
            alt="Diagnostic Assessment" 
            className="w-full h-full object-cover rounded-[16px]"
          />
        </div>

        {/* Right Content */}
        <div className="w-full md:w-[50%] flex flex-col justify-center py-4 md:py-8 pr-4 lg:pr-12">
          <div className="flex flex-col gap-6 mb-10 text-[#444444] font-medium text-[15px] md:text-[17px] leading-relaxed tracking-wide">
            <p>
              Gain a comprehensive understanding of your organization's performance with our advanced diagnostic assessment.
            </p>
            <p>
              We analyze key strengths, identify critical gaps, and uncover opportunities for improvement through a structured evaluation process.
            </p>
            <p>
              Our data-driven insights help you make informed decisions, optimize strategies, and drive sustainable growth.
            </p>
          </div>
          
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="self-start md:self-center bg-[#FF2A2A] text-white px-6 py-2.5 rounded-full text-[14px] font-bold flex items-center gap-2 hover:bg-[#E52525] transition-colors shadow-sm"
          >
            Read More
            <ChevronDown className="w-4 h-4 stroke-[2]" />
          </motion.button>
        </div>
      </motion.div>

    </section>
  );
}
