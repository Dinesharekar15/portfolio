"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { experiences } from "@/lib/data";

export default function ExperienceTimeline() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <section id="experience" ref={ref} className="py-24 sm:py-32 border-b border-[#242424]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-6"
          >
            <span className="font-mono text-xs text-[#FF4A1C] tracking-wider">[03]</span>
            <div className="h-px flex-1 max-w-12 bg-[#242424]" />
            <span className="font-mono text-xs text-[#858585] tracking-widest uppercase">
              EXPERIENCE
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight uppercase text-[#F2F2EE] leading-none"
          >
            WORK
            <br />
            RECORD
          </motion.h2>
        </div>

        {/* Experience Entries */}
        <div className="space-y-0">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.15 }}
              className="border-t border-[#242424] py-10 sm:py-14 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12"
            >
              {/* Left: Year + Meta */}
              <div className="lg:col-span-3">
                <div className="font-mono text-[10px] text-[#858585] uppercase tracking-widest mb-1">
                  {exp.period}
                </div>
                <div className="font-mono text-xs text-[#FF4A1C]">{exp.companyType}</div>
                <div className="mt-4 flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-[#FF4A1C]" />
                  <span className="font-mono text-[10px] text-[#858585] uppercase">
                    ACTIVE RECORD
                  </span>
                </div>
              </div>

              {/* Center: Role + Company */}
              <div className="lg:col-span-4">
                <div className="text-3xl sm:text-4xl font-bold uppercase tracking-tight text-[#F2F2EE] leading-tight mb-1">
                  {exp.role}
                </div>
                <div className="font-mono text-sm text-[#858585] uppercase tracking-wider">
                  @ {exp.company}
                </div>
                <div className="mt-6 h-[1px] w-12 bg-[#FF4A1C]" />
              </div>

              {/* Right: Details */}
              <div className="lg:col-span-5 space-y-5">
                <p className="text-sm text-[#858585] leading-relaxed">{exp.description}</p>

                <div className="space-y-2">
                  {exp.contributions.map((c, j) => (
                    <div key={j} className="flex items-start gap-2.5 font-mono text-xs text-[#858585]">
                      <span className="text-[#FF4A1C] shrink-0 mt-0.5">→</span>
                      <span>{c}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-[10px] text-[#858585] border border-[#242424] px-2 py-0.5 uppercase"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
          <div className="border-t border-[#242424]" />
        </div>

        {/* Education block  */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-16 pt-12 border-t border-[#242424] grid grid-cols-1 lg:grid-cols-12 gap-8"
        >
          <div className="lg:col-span-3">
            <div className="font-mono text-[10px] text-[#858585] uppercase tracking-widest mb-1">
              Sep 2022 — May 2026
            </div>
            <div className="font-mono text-xs text-[#858585]">EDUCATION</div>
          </div>
          <div className="lg:col-span-4">
            <div className="text-2xl sm:text-3xl font-bold uppercase tracking-tight text-[#F2F2EE] leading-tight mb-1">
              B.TECH CSE
            </div>
            <div className="font-mono text-sm text-[#858585] uppercase tracking-wider">
              BABASAHEB NAIK COLLEGE
              <br />
              OF ENGINEERING, PUSAD
            </div>
          </div>
          <div className="lg:col-span-5 flex flex-col justify-center gap-3">
            <div className="flex items-center gap-6">
              <div>
                <div className="font-mono text-[10px] text-[#858585] uppercase mb-0.5">CGPA</div>
                <div className="text-2xl font-bold text-[#F2F2EE]">7.49</div>
                <div className="font-mono text-[10px] text-[#858585]">/ 10</div>
              </div>
              <div className="h-12 w-px bg-[#242424]" />
              <div>
                <div className="font-mono text-[10px] text-[#858585] uppercase mb-0.5">BATCH</div>
                <div className="font-mono text-sm text-[#F2F2EE]">2026</div>
              </div>
              <div className="h-12 w-px bg-[#242424]" />
              <div>
                <div className="font-mono text-[10px] text-[#858585] uppercase mb-0.5">DEGREE</div>
                <div className="font-mono text-sm text-[#F2F2EE]">B.TECH</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
