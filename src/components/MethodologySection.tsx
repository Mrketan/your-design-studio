import React from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import methodologyImg from "@/assets/Rectangle 2238 (2).png";
import criticalRoleImg from "@/assets/661cadbb-4a90-4c8b-82ca-262bbc796b66 1.png";
import marketMappedImg from "@/assets/vitaly-gariev-3-gj1U72tiQ-unsplash 1.png";
import cultureAlignedImg from "@/assets/vitaly-gariev-yd_RKGH_RH4-unsplash 1.png";

type TalentCardProps = {
  title: string;
  description: string;
  image: string;
  delay?: number;
};

function TalentCard({ title, description, image, delay = 0 }: TalentCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay }}
      className="flex flex-col items-center text-center gap-4 group cursor-pointer"
    >
      <div className="w-full rounded-[1.5rem] overflow-hidden aspect-[3/4] mb-2 shadow-sm transition-transform duration-500 group-hover:-translate-y-2 group-hover:shadow-xl">
        <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
      </div>
      <h3 className="text-[17px] md:text-[20px] font-bold text-ink leading-tight px-2">{title}</h3>
      <p className="text-[13px] md:text-[14px] text-ink/80 font-medium px-2 md:px-4 leading-[1.6]">
        {description}
      </p>
    </motion.div>
  );
}

export function MethodologySection() {
  return (
    <section className="pt-8 pb-16 md:pt-10 md:pb-24 bg-[#F2F5F9] font-sans">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Top Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-start gap-6 md:gap-12 mb-12"
        >
          <h2 className="text-3xl md:text-[40px] font-bold leading-[1.1] text-ink tracking-tight">
            The AGC <span className="text-[#FF2A2A]">Methodology</span> : <br />
            Where Capital grow <span className="text-[#FF2A2A]">Talent</span>
          </h2>
          <div className="max-w-[400px] md:pt-2">
            <p className="text-[14px] md:text-[15px] text-ink/80 text-left md:text-right font-medium leading-[1.6]">
              Gain actionable insights through data-driven assessments, enabling smarter decisions and measurable organizational growth.
            </p>
          </div>
        </motion.div>

        {/* Big Card */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.01 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="bg-[#DFDCD8] rounded-[2rem] p-4 md:p-6 flex flex-col md:flex-row gap-8 md:gap-12 items-stretch mb-24 shadow-sm"
        >
          {/* Left Content */}
          <div className="w-full md:w-[45%] flex flex-col justify-center gap-6 md:gap-8 pt-4 md:pt-0 pb-10 px-6 md:pl-10 md:pr-4 z-10 order-1">
            <div className="flex flex-col gap-6 text-[15px] md:text-[16px] text-ink/85 leading-relaxed font-medium">
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
              className="mt-2 inline-flex items-center gap-2 bg-[#FF2A2A] hover:bg-[#E52525] text-white rounded-full px-7 py-3 font-semibold transition-colors shadow-md self-start"
            >
              Read More
              <ChevronDown className="h-4 w-4 stroke-[3]" />
            </motion.button>
          </div>

          {/* Right Image */}
          <div className="w-full md:w-[55%] rounded-[1.5rem] overflow-hidden order-2">
            <img 
              src={methodologyImg} 
              alt="AGC Methodology Board" 
              className="w-full h-[300px] md:h-[450px] object-cover object-center"
            />
          </div>
        </motion.div>

        {/* Bottom Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-start gap-6 md:gap-12 mb-16"
        >
          <h2 className="text-3xl md:text-[40px] font-bold leading-[1.1] text-ink tracking-tight max-w-lg">
            Talent Mapping & Strategic<br className="hidden md:block" /> Placement
          </h2>
          <div className="max-w-[320px] md:pt-2">
            <p className="text-[14px] md:text-[15px] text-ink/80 text-left md:text-right font-medium leading-[1.6]">
              Insight-led sourcing to identify niche talent and align critical leadership hires with organisational goals.
            </p>
          </div>
        </motion.div>

        {/* Bottom Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          <TalentCard 
            title="Critical Role Coverage"
            description="Capture high-level data across leadership, capability, and performance drivers to establish your unique ecosystem baseline."
            image={criticalRoleImg}
            delay={0.1}
          />
          <TalentCard 
            title="Market-Mapped Shortlists"
            description="Gain a granular view of the competitor landscape with evidence-based intelligence and active talent pipelines."
            image={marketMappedImg}
            delay={0.2}
          />
          <TalentCard 
            title="Culture-Aligned Placements"
            description="Ensure every strategic hire possesses the behavioral drivers and values to thrive within your unique operating model."
            image={cultureAlignedImg}
            delay={0.3}
          />
        </div>
      </div>
    </section>
  );
}
