"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { timeline } from "@/lib/data";

export default function JourneyTimeline() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <section id="journey" ref={ref} className="py-24 sm:py-32 border-b border-[#242424]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-6"
          >
            <span className="font-mono text-xs text-[#FF4A1C] tracking-wider">[04]</span>
            <div className="h-px flex-1 max-w-12 bg-[#242424]" />
            <span className="font-mono text-xs text-[#858585] tracking-widest uppercase">
              CAREER TIMELINE
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight uppercase text-[#F2F2EE] leading-none"
          >
            THE
            <br />
            JOURNEY
          </motion.h2>
        </div>

        {/* Timeline entries — vertical connected */}
        <div className="relative">
          {/* Vertical rule */}
          <div className="hidden lg:block absolute left-[8.33%] top-0 bottom-0 w-px bg-[#242424]" />

          <div className="space-y-0">
            {timeline.map((entry, i) => {
              const isLast = i === timeline.length - 1;
              return (
                <motion.div
                  key={entry.year}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.15 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                  className={`relative grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 py-8 sm:py-10 ${
                    !isLast ? "border-b border-[#242424]" : ""
                  }`}
                >
                  {/* Year */}
                  <div className="lg:col-span-1 flex items-start justify-start lg:justify-center relative">
                    {/* Dot on the line */}
                    <div className="hidden lg:flex absolute top-1 left-1/2 -translate-x-1/2 w-3 h-3 items-center justify-center">
                      <div
                        className={`w-2.5 h-2.5 rounded-full border ${
                          isLast
                            ? "bg-[#FF4A1C] border-[#FF4A1C]"
                            : "bg-[#080808] border-[#242424]"
                        }`}
                      />
                    </div>
                    <span
                      className={`font-mono text-base font-bold ${
                        isLast ? "text-[#FF4A1C]" : "text-[#858585]"
                      }`}
                    >
                      {entry.year}
                    </span>
                  </div>

                  {/* Label */}
                  <div className="lg:col-span-4">
                    <div
                      className={`text-xl sm:text-2xl font-bold uppercase tracking-tight leading-tight ${
                        isLast ? "text-[#F2F2EE]" : "text-[#F2F2EE]/80"
                      }`}
                    >
                      {entry.label}
                    </div>
                    {isLast && (
                      <div className="mt-1.5 inline-flex items-center gap-1.5 font-mono text-[10px] text-[#FF4A1C] uppercase">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#FF4A1C]" />
                        CURRENT TARGET
                      </div>
                    )}
                  </div>

                  {/* Description */}
                  <div className="lg:col-span-7">
                    <p className="text-sm text-[#858585] leading-relaxed max-w-xl">
                      {entry.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
