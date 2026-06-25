import React from "react";
import { Share2, Globe, Mail, Send } from "lucide-react";
import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="w-full bg-[#040E30] font-sans text-white">
      
      {/* Top Section */}
      <div className="max-w-[1200px] mx-auto px-8 md:px-12 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          
          {/* Column 1: Apex Global */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col"
          >
            <h4 className="text-[14px] font-bold text-white mb-5">Apex Global</h4>
            <p className="text-[13px] text-white/70 leading-[1.6] mb-6 max-w-[240px]">
              Strategic human capital advisory for the digital-first enterprise.
            </p>
            <div className="flex items-center gap-3">
              <button className="text-white hover:text-white/80 transition-colors">
                <Share2 size={18} strokeWidth={2.5} />
              </button>
              <button className="text-white hover:text-white/80 transition-colors">
                <Globe size={18} strokeWidth={2.5} />
              </button>
              <button className="text-white hover:text-white/80 transition-colors">
                <Mail size={18} strokeWidth={2.5} />
              </button>
            </div>
          </motion.div>

          {/* Column 2: Navigation */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col"
          >
            <h4 className="text-[14px] font-bold text-white mb-5">Navigation</h4>
            <ul className="flex flex-col gap-4 text-[13px] text-white/70">
              <li><a href="#" className="hover:text-white transition-colors">CapitalLens</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Capability Centre</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Growth Advisory Hub</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Talent Mapping</a></li>
            </ul>
          </motion.div>

          {/* Column 3: Company */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col"
          >
            <h4 className="text-[14px] font-bold text-white mb-5">Company</h4>
            <ul className="flex flex-col gap-4 text-[13px] text-white/70">
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Global Offices</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </motion.div>

          {/* Column 4: Newsletter */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col"
          >
            <h4 className="text-[14px] font-bold text-white mb-5">Newsletter</h4>
            <p className="text-[13px] text-white/70 mb-4">
              Insights delivered to your inbox.
            </p>
            <form className="flex w-full max-w-[280px]">
              <input 
                type="email" 
                placeholder="Email address" 
                className="w-full px-3 py-2 text-[13px] bg-transparent text-white border border-white/20 border-r-0 rounded-l-[4px] focus:outline-none placeholder:text-white/40"
              />
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="button" 
                className="bg-[#FF2A2A] text-white px-4 py-2 rounded-r-[4px] flex items-center justify-center hover:bg-[#E52525] transition-colors"
              >
                <Send size={16} strokeWidth={2} />
              </motion.button>
            </form>
          </motion.div>

        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-white/10"></div>

      {/* Bottom Section */}
      <div className="bg-[#030A24]">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="max-w-[1200px] mx-auto px-8 md:px-12 py-6 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-[13px] text-white/50">
            © 2024 Apex Global Consultancy. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-[13px] text-white/50">
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            <a href="#" className="hover:text-white bg-white/10 hover:bg-white/20 transition-colors px-2 py-0.5 rounded">Security</a>
          </div>
        </motion.div>
      </div>

    </footer>
  );
}
