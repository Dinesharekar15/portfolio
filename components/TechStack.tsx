"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { techStack } from "@/lib/data";

export default function TechStack() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <section id="stack" ref={ref} className="py-24 sm:py-32 border-b border-[#242424]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-6"
          >
            <span className="font-mono text-xs text-[#FF4A1C] tracking-wider">[02]</span>
            <div className="h-px flex-1 max-w-12 bg-[#242424]" />
            <span className="font-mono text-xs text-[#858585] tracking-widest uppercase">
              TECHNICAL EXPERTISE
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight uppercase text-[#F2F2EE] leading-none"
          >
            STACK &<br />TOOLING
          </motion.h2>
        </div>

        {/* Tech categories as editorial typography rows */}
        <div className="space-y-0">
          {techStack.map((cat, i) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.08 }}
              className="group border-t border-[#242424] py-6 sm:py-8 grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-8 hover:bg-[#0d0d0d] transition-colors px-2 -mx-2"
            >
              {/* Category Label */}
              <div className="sm:col-span-3 flex items-start gap-3">
                <span className="font-mono text-[10px] text-[#FF4A1C] tabular-nums mt-0.5">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-mono text-xs text-[#858585] uppercase tracking-widest">
                  {cat.category}
                </span>
              </div>

              {/* Tech Items — large editorial typography */}
              <div className="sm:col-span-9 flex flex-wrap items-baseline gap-x-6 gap-y-2">
                {cat.items.map((tech, j) => (
                  <span
                    key={tech}
                    className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#F2F2EE] tracking-tight group-hover:text-[#F2F2EE] transition-colors leading-snug"
                  >
                    {tech}
                    {j < cat.items.length - 1 && (
                      <span className="text-[#242424] text-base font-light ml-3 mr-1">
                        /
                      </span>
                    )}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
          <div className="border-t border-[#242424]" />
        </div>

        {/* Problem Solving subsection */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mt-20 pt-10 border-t border-[#242424] grid grid-cols-1 sm:grid-cols-12 gap-8 sm:gap-12"
        >
          <div className="sm:col-span-4">
            <div className="font-mono text-[10px] text-[#858585] uppercase tracking-widest mb-2">
              PROBLEM SOLVING
            </div>
            <div className="text-7xl sm:text-8xl font-bold text-[#F2F2EE] tracking-tight leading-none">
              200<span className="text-[#FF4A1C]">+</span>
            </div>
            <div className="font-mono text-xs text-[#858585] uppercase tracking-widest mt-2">
              LEETCODE PROBLEMS
            </div>
          </div>
          <div className="sm:col-span-8 flex flex-col justify-end gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {["DATA STRUCTURES", "ALGORITHMS", "PROBLEM SOLVING"].map((item) => (
                <div key={item} className="border border-[#242424] p-4 bg-[#0c0c0c]">
                  <span className="font-mono text-xs text-[#858585] uppercase tracking-wider">
                    {item}
                  </span>
                  <div className="mt-2 h-[2px] w-8 bg-[#FF4A1C]" />
                </div>
              ))}
            </div>
            <p className="font-mono text-xs text-[#858585] leading-relaxed max-w-md">
              Arrays · Linked Lists · Trees · Recursion ·<br />
              Backtracking · Stacks & Queues{" "}
              <a
                href="https://leetcode.com/arekardinesh"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#FF4A1C] hover:underline"
              >
                [LeetCode ↗]
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
