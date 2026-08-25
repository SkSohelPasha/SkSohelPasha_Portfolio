// src/components/ContactSection.tsx
import React from 'react';
import { motion } from 'framer-motion';

const socialLinks = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/sohel-pasha-shaik-68717b268',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
        <path d="M6.5 8.25H3.25V21H6.5V8.25ZM4.87 3A1.88 1.88 0 1 0 4.87 6.75 1.88 1.88 0 0 0 4.87 3ZM21 13.68c0-3.84-2.05-5.63-4.79-5.63-2.2 0-3.18 1.21-3.73 2.06V8.25H9.23V21h3.25v-6.31c0-1.67.32-3.29 2.39-3.29 2.04 0 2.07 1.91 2.07 3.4V21H21v-7.32Z" />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    href: 'https://github.com/SkSohelPasha',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
        <path d="M12 2.5a9.5 9.5 0 0 0-3 18.51c.48.09.65-.21.65-.46v-1.67c-2.65.58-3.21-1.28-3.21-1.28-.44-1.13-1.06-1.43-1.06-1.43-.87-.59.07-.58.07-.58.96.07 1.47.99 1.47.99.85 1.47 2.22 1.04 2.76.8.09-.62.33-1.04.6-1.28-2.12-.24-4.35-1.06-4.35-4.7 0-1.04.37-1.89.98-2.56-.1-.24-.42-1.21.09-2.52 0 0 .8-.26 2.63.98a9.1 9.1 0 0 1 4.78 0c1.82-1.24 2.62-.98 2.62-.98.52 1.31.2 2.28.1 2.52.61.67.98 1.52.98 2.56 0 3.65-2.23 4.46-4.36 4.7.34.29.64.86.64 1.74v2.58c0 .25.17.55.65.46A9.5 9.5 0 0 0 12 2.5Z" />
      </svg>
    ),
  },
];

export const ContactSection: React.FC = () => {

  return (
    <footer
      id="contact"
      className="relative w-full bg-black text-[#E8DFD8] font-sans selection:bg-[#cbb59d] selection:text-black pt-16 pb-16 px-6 sm:px-12 lg:px-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              {/* Eyebrow Header */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex items-center space-x-4 mb-5"
              >
                <span
                  className="text-[11px] font-medium tracking-[0.35em] uppercase text-[#D4AF37]"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  06 / CONTACT
                </span>
                <div className="w-16 h-[1px] bg-gradient-to-r from-[#D4AF37]/80 via-[#8C6D4F]/40 to-transparent" />
              </motion.div>

              {/* Headline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mb-8"
              >
                <h2
                  className="text-5xl sm:text-6xl md:text-7xl tracking-tight uppercase leading-[0.85] select-none"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#D5CBC0] to-[#605448] drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
                    LET'S
                  </span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A] drop-shadow-[0_8px_25px_rgba(201,158,93,0.35)]">
                    CONNECT.
                  </span>
                </h2>
              </motion.div>

              <p
                className="text-xs sm:text-[13px] font-light text-[#A8988B] leading-relaxed max-w-md"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Have an opportunity, a project idea, or a collaborative inquiry? Reach out directly.
              </p>
            </div>
          </div>

          {/* Right Column: Contact Details (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 relative w-full rounded-sm border border-[#8C6D4F]/40 bg-[#0A0806] p-5 sm:p-8 lg:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.9)] overflow-hidden"
          >
            {/* Top Gold Horizon Edge */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/70 to-transparent" />
            
            {/* Precision Corner Crosshairs */}
            <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[#D4AF37]/60" />
            <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-[#D4AF37]/60" />
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-[#D4AF37]/60" />
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[#D4AF37]/60" />

            <div className="space-y-8">
              <h3 className="text-4xl uppercase tracking-wide text-white" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                Contact Details
              </h3>

              <div className="grid gap-6 sm:grid-cols-2">
                <a href="mailto:sohelpasha019@gmail.com" className="group">
                  <span className="mb-2 block text-[9.5px] font-mono uppercase tracking-[0.2em] text-[#8C6D4F]">// EMAIL</span>
                  <span className="break-all text-sm text-[#E8DFD8] transition-colors group-hover:text-[#D4AF37]" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    sohelpasha019@gmail.com
                  </span>
                </a>
                <a href="tel:+918501858505" className="group">
                  <span className="mb-2 block text-[9.5px] font-mono uppercase tracking-[0.2em] text-[#8C6D4F]">// PHONE</span>
                  <span className="text-sm text-[#E8DFD8] transition-colors group-hover:text-[#D4AF37]" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    +91 8501858505
                  </span>
                </a>
                <div>
                  <span className="mb-2 block text-[9.5px] font-mono uppercase tracking-[0.2em] text-[#8C6D4F]">// LOCATION</span>
                  <span className="text-sm text-[#E8DFD8]" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    Khammam, Telangana, 507003
                  </span>
                </div>
              </div>

              <div className="border-t border-[#8C6D4F]/25 pt-6">
                <span className="mb-4 block text-[9.5px] font-mono uppercase tracking-[0.2em] text-[#8C6D4F]">// FOLLOW ME ON</span>
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={social.label}
                      title={social.label}
                      className="flex h-11 w-11 items-center justify-center border border-[#8C6D4F]/50 text-[#E8DFD8] transition-all duration-300 hover:border-[#D4AF37] hover:bg-[#1A1510] hover:text-[#D4AF37]"
                    >
                      <span className="h-5 w-5">{social.icon}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* System Footer Line */}
        <div className="pt-16 mt-16 border-t border-[#8C6D4F]/15 flex flex-col sm:flex-row items-center justify-between text-center sm:text-left gap-4">
          <span className="text-[10px] font-mono tracking-widest text-[#8C6D4F] uppercase">
            PORTFOLIO // EDITION 2026
          </span>
          <span className="text-[10px] font-mono text-[#8C6D4F]">
            © {new Date().getFullYear()} • ENGINEERED WITH PRECISION
          </span>
        </div>

      </div>
    </footer>
  );
};

export default ContactSection;