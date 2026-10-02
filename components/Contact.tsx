"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { personal } from "@/lib/data";


export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <section id="contact" ref={ref} className="py-24 sm:py-36 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-12 sm:mb-16"
        >
          <span className="font-mono text-xs text-[#FF4A1C] tracking-wider">[06]</span>
          <div className="h-px flex-1 max-w-12 bg-[#242424]" />
          <span className="font-mono text-xs text-[#858585] tracking-widest uppercase">
            CONTACT
          </span>
        </motion.div>

        {/* Dramatic Typography CTA */}
        <div className="mb-14 sm:mb-20">
          <div className="overflow-hidden">
            <motion.div
              initial={{ y: 100 }}
              animate={isInView ? { y: 0 } : {}}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="text-[clamp(3.5rem,10vw,9rem)] font-bold uppercase tracking-[-0.03em] leading-[0.88] text-[#F2F2EE]">
                HAVE A
              </div>
            </motion.div>
          </div>
          <div className="overflow-hidden">
            <motion.div
              initial={{ y: 100 }}
              animate={isInView ? { y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.07, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="text-[clamp(3.5rem,10vw,9rem)] font-bold uppercase tracking-[-0.03em] leading-[0.88] text-[#FF4A1C]">
                PROJECT?
              </div>
            </motion.div>
          </div>
          <div className="h-[1px] w-full bg-[#242424] my-6 sm:my-8" />
          <div className="overflow-hidden">
            <motion.div
              initial={{ y: 100 }}
              animate={isInView ? { y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.14, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="text-[clamp(3.5rem,10vw,9rem)] font-bold uppercase tracking-[-0.03em] leading-[0.88] text-[#F2F2EE]">
                LET&apos;S
              </div>
            </motion.div>
          </div>
          <div className="overflow-hidden">
            <motion.div
              initial={{ y: 100 }}
              animate={isInView ? { y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.21, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="text-[clamp(3.5rem,10vw,9rem)] font-bold uppercase tracking-[-0.03em] leading-[0.88] text-[#F2F2EE]">
                BUILD IT.
              </div>
            </motion.div>
          </div>
        </div>

        {/* Contact Links Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-0 border border-[#242424]"
        >
          {/* Email */}
          <a
            href={`mailto:${personal.email}`}
            className="group flex flex-col justify-between p-6 sm:p-8 border-b sm:border-b-0 sm:border-r border-[#242424] hover:bg-[#0d0d0d] transition-colors"
          >
            <div className="font-mono text-[10px] text-[#858585] uppercase tracking-widest mb-4">
              01 // EMAIL
            </div>
            <div>
              <div className="text-sm sm:text-base font-medium text-[#F2F2EE] group-hover:text-[#FF4A1C] transition-colors break-all">
                {personal.email}
              </div>
              <div className="mt-3 font-mono text-xs text-[#858585] group-hover:text-[#FF4A1C] transition-colors flex items-center gap-1.5">
                WRITE AN EMAIL <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          </a>

          {/* GitHub */}
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="github"
            className="group flex flex-col justify-between p-6 sm:p-8 border-b sm:border-b-0 sm:border-r border-[#242424] hover:bg-[#0d0d0d] transition-colors"
          >
            <div className="font-mono text-[10px] text-[#858585] uppercase tracking-widest mb-4">
              02 // GITHUB
            </div>
            <div>
              <div className="text-sm sm:text-base font-medium text-[#F2F2EE] group-hover:text-[#FF4A1C] transition-colors">
                github.com/arekardinesh
              </div>
              <div className="mt-3 font-mono text-xs text-[#858585] group-hover:text-[#FF4A1C] transition-colors flex items-center gap-1.5">
                VIEW REPOSITORIES <span className="group-hover:translate-x-1 transition-transform">↗</span>
              </div>
            </div>
          </a>

          {/* LinkedIn */}
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="open"
            className="group flex flex-col justify-between p-6 sm:p-8 hover:bg-[#0d0d0d] transition-colors"
          >
            <div className="font-mono text-[10px] text-[#858585] uppercase tracking-widest mb-4">
              03 // LINKEDIN
            </div>
            <div>
              <div className="text-sm sm:text-base font-medium text-[#F2F2EE] group-hover:text-[#FF4A1C] transition-colors">
                linkedin.com/in/arekardinesh
              </div>
              <div className="mt-3 font-mono text-xs text-[#858585] group-hover:text-[#FF4A1C] transition-colors flex items-center gap-1.5">
                CONNECT <span className="group-hover:translate-x-1 transition-transform">↗</span>
              </div>
            </div>
          </a>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 pt-8 border-t border-[#242424] flex flex-wrap items-center justify-between gap-4 font-mono text-[11px] text-[#858585]"
        >
          <div className="flex items-center gap-3">
            <span className="text-[#FF4A1C]">[00]</span>
            <span>DINESH AREKAR</span>
            <span className="text-[#242424]">//</span>
            <span>SOFTWARE ENGINEER · 2026</span>
          </div>
          <div className="flex items-center gap-4">
            <span>JALNA, MH, INDIA</span>
            <span className="text-[#242424]">/</span>
            <span>DESIGNED & BUILT BY DINESH AREKAR</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
