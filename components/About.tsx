"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { personal } from "@/lib/data";

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <section id="about" ref={ref} className="py-24 sm:py-32 border-b border-[#242424]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-6"
          >
            <span className="font-mono text-xs text-[#FF4A1C] tracking-wider">[05]</span>
            <div className="h-px flex-1 max-w-12 bg-[#242424]" />
            <span className="font-mono text-xs text-[#858585] tracking-widest uppercase">
              ABOUT
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight uppercase text-[#F2F2EE] leading-none"
          >
            WHO I
            <br />
            AM
          </motion.h2>
        </div>

        {/* Asymmetric Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left: Identity block */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col justify-start"
          >
            {/* Name & Role */}
            <div className="border-l-2 border-[#FF4A1C] pl-5 mb-8">
              <div className="font-mono text-[10px] text-[#858585] uppercase tracking-widest mb-1">
                ENTITY
              </div>
              <div className="text-2xl font-bold text-[#F2F2EE] uppercase">
                DINESH AREKAR
              </div>
              <div className="font-mono text-xs text-[#858585] mt-1">
                COMPUTER SCIENCE ENGINEER // 2026
              </div>
            </div>

            {/* Interests — editorial list */}
            <div>
              <div className="font-mono text-[10px] text-[#858585] uppercase tracking-widest mb-4">
                CURRENT INTERESTS
              </div>
              <div className="space-y-2">
                {personal.interests.map((interest, i) => (
                  <div key={interest} className="flex items-center gap-3">
                    <span className="font-mono text-[10px] text-[#FF4A1C] tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm font-medium text-[#F2F2EE] uppercase tracking-wide">
                      {interest}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div className="mt-8 pt-8 border-t border-[#242424] space-y-3">
              <div className="font-mono text-[10px] text-[#858585] uppercase tracking-widest mb-4">
                ACHIEVEMENTS
              </div>
              <div className="flex items-start gap-3 font-mono text-xs text-[#858585]">
                <span className="text-[#FF4A1C] shrink-0">→</span>
                <span>
                  200+ LeetCode — Arrays, Trees, Recursion, Backtracking, Stacks & Queues{" "}
                  <a href="https://leetcode.com/arekardinesh" target="_blank" rel="noopener noreferrer" className="text-[#FF4A1C] hover:underline">
                    [LeetCode ↗]
                  </a>
                </span>
              </div>
              <div className="flex items-start gap-3 font-mono text-xs text-[#858585]">
                <span className="text-[#FF4A1C] shrink-0">→</span>
                <span>Full Stack Web Development Bootcamp — Udemy{" "}
                  <a href="#" className="text-[#FF4A1C] hover:underline">[Certificate ↗]</a>
                </span>
              </div>
              <div className="flex items-start gap-3 font-mono text-xs text-[#858585]">
                <span className="text-[#FF4A1C] shrink-0">→</span>
                <span>Database Management System — NPTEL</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Editorial About Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-7"
          >
            {/* Large Quote Statement */}
            <blockquote className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#F2F2EE] leading-[1.3] tracking-tight mb-10">
              &ldquo;I&apos;m Dinesh, a Computer Science graduate who enjoys understanding how software works from the interface all the way down to the database and infrastructure.&rdquo;
            </blockquote>

            <div className="h-px w-full bg-[#242424] mb-8" />

            <p className="text-base text-[#858585] leading-relaxed mb-6">
              I like building things, solving problems, learning new technologies and turning ideas into working products. My focus sits at the intersection of clean backend architecture and functional, user-focused frontend work.
            </p>

            <p className="text-base text-[#858585] leading-relaxed mb-8">
              Currently finishing my B.Tech in Computer Science at Babasaheb Naik College of Engineering, Pusad (CGPA 7.49). I&apos;ve been building full-stack systems with Next.js, TypeScript, PostgreSQL and Node.js — and I recently interned at Instaiq building RESTful APIs with JWT authentication against a MongoDB backend.
            </p>

            {/* Meta info strip */}
            <div className="border-t border-[#242424] pt-6 grid grid-cols-2 sm:grid-cols-3 gap-5 font-mono text-xs">
              <div>
                <div className="text-[#858585] text-[10px] uppercase mb-1">LOCATION</div>
                <div className="text-[#F2F2EE]">JALNA, MH, INDIA</div>
              </div>
              <div>
                <div className="text-[#858585] text-[10px] uppercase mb-1">DEGREE</div>
                <div className="text-[#F2F2EE]">B.TECH CSE — 2026</div>
              </div>
              <div>
                <div className="text-[#858585] text-[10px] uppercase mb-1">STATUS</div>
                <div className="flex items-center gap-1.5 text-[#FF4A1C]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#FF4A1C]" />
                  AVAILABLE
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
