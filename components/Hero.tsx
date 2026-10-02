"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import MagneticButton from "./MagneticButton";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Subtle interactive parallax for the portrait
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 120 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-5, 5]);
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [5, -5]);
  const portraitTranslateX = useTransform(smoothX, [-0.5, 0.5], [-12, 12]);
  const portraitTranslateY = useTransform(smoothY, [-0.5, 0.5], [-12, 12]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-[calc(100vh-2rem)] pt-24 pb-8 flex flex-col justify-between overflow-hidden border-b border-[#242424]"
    >
      {/* Top Coordinate & Spec Header Line */}
      <div className="max-w-7xl mx-auto w-full px-6 mb-4 sm:mb-6">
        <div className="flex flex-wrap items-center justify-between gap-4 py-2.5 border-y border-[#242424] font-mono text-[11px] text-[#858585] tracking-widest uppercase">
          <div className="flex items-center gap-3">
            <span className="text-[#FF4A1C]">[2026 GRAD]</span>
            <span className="text-[#242424]">/</span>
            <span className="text-[#F2F2EE]">COMPUTER SCIENCE & ENGINEERING</span>
          </div>
          <div className="flex items-center gap-4">
            <span>LOC: INDIA // 19.0760° N, 72.8777° E</span>
            <span className="hidden sm:inline text-[#242424]">/</span>
            <span className="hidden sm:inline text-[#F2F2EE]/90">
              OPEN TO FULL-TIME SDE
            </span>
          </div>
        </div>
      </div>

      {/* Main Asymmetric Grid */}
      <div className="max-w-7xl mx-auto w-full px-6 flex-1 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Oversized Editorial Typography & Manifesto */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          {/* Main Giant Name Display */}
          <div className="space-y-0 select-none">
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
                className="text-6xl sm:text-8xl md:text-9xl lg:text-[7.5rem] xl:text-[8.5rem] font-bold tracking-[-0.04em] leading-[0.88] text-[#F2F2EE] uppercase"
              >
                DINESH
              </motion.h1>
            </div>
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.85, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="text-6xl sm:text-8xl md:text-9xl lg:text-[7.5rem] xl:text-[8.5rem] font-bold tracking-[-0.04em] leading-[0.88] text-[#F2F2EE] uppercase"
              >
                AREKAR
              </motion.h1>
            </div>
          </div>

          {/* Subtitle & Accent Line */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 sm:mt-8 flex items-center gap-4"
          >
            <div className="h-[2px] w-8 sm:w-12 bg-[#FF4A1C]" />
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight text-[#F2F2EE] uppercase">
              SOFTWARE ENGINEER
            </h2>
          </motion.div>

          {/* Manifesto Quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.28 }}
            className="mt-6 max-w-xl"
          >
            <blockquote className="font-mono text-sm sm:text-base text-[#858585] leading-relaxed border-l-2 border-[#242424] pl-4 py-1">
              &ldquo;I BUILD DIGITAL SYSTEMS FROM IDEA{" "}
              <span className="text-[#FF4A1C] font-semibold">→</span>{" "}
              PRODUCTION&rdquo;
            </blockquote>
          </motion.div>

          {/* Technical Specs & Quick Metadata Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.36 }}
            className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-[#242424] max-w-lg font-mono text-xs"
          >
            <div>
              <span className="text-[#858585] block text-[10px] uppercase">
                STATUS
              </span>
              <span className="text-[#F2F2EE] mt-0.5 block flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-[#FF4A1C]" />
                AVAILABLE
              </span>
            </div>
            <div>
              <span className="text-[#858585] block text-[10px] uppercase">
                FOCUS
              </span>
              <span className="text-[#F2F2EE] mt-0.5 block">
                FULL-STACK & SYSTEMS
              </span>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <span className="text-[#858585] block text-[10px] uppercase">
                GRADUATION
              </span>
              <span className="text-[#F2F2EE] mt-0.5 block">
                BATCH OF 2026
              </span>
            </div>
          </motion.div>

          {/* CTA View My Work */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.44 }}
            className="mt-10 flex items-center gap-4"
          >
            <MagneticButton
              as="a"
              href="#work"
              data-cursor="view"
              className="group relative inline-flex items-center gap-3 bg-[#111111] hover:bg-[#F2F2EE] text-[#F2F2EE] hover:text-[#080808] border border-[#242424] hover:border-[#F2F2EE] px-7 py-4 font-mono text-xs uppercase tracking-wider transition-all duration-200"
            >
              <span>VIEW MY WORK</span>
              <span className="text-[#FF4A1C] group-hover:text-[#080808] group-hover:translate-y-0.5 transition-transform duration-200">
                ↓
              </span>
              <span className="text-[10px] text-[#858585] group-hover:text-[#080808]/70 ml-2">
                [01]
              </span>
            </MagneticButton>

            <MagneticButton
              as="a"
              href="#contact"
              data-cursor="link"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#858585] hover:text-[#F2F2EE] px-4 py-4 transition-colors"
            >
              <span>INITIATE CONTACT</span>
              <span className="text-[#FF4A1C]">→</span>
            </MagneticButton>
          </motion.div>
        </div>

        {/* Right Column: Architectural Transparent Portrait Presentation */}
        <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
          <motion.div
            style={{
              rotateX,
              rotateY,
              x: portraitTranslateX,
              y: portraitTranslateY,
              transformStyle: "preserve-3d",
            }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-sm sm:max-w-md"
          >
            {/* Architectural Hairline Frame & Corner Markers */}
            <div className="absolute -top-3 -left-3 font-mono text-[10px] text-[#858585]">
              +
            </div>
            <div className="absolute -top-3 -right-3 font-mono text-[10px] text-[#858585]">
              +
            </div>
            <div className="absolute -bottom-3 -left-3 font-mono text-[10px] text-[#858585]">
              +
            </div>
            <div className="absolute -bottom-3 -right-3 font-mono text-[10px] text-[#858585]">
              +
            </div>

            {/* Technical Metadata Tag */}
            <div className="absolute top-4 left-4 z-20 font-mono text-[10px] text-[#858585] bg-[#080808]/90 border border-[#242424] px-2.5 py-1 backdrop-blur-sm">
              <span className="text-[#FF4A1C]">FIG.01</span> // ENG_PORTRAIT
            </div>

            <div className="absolute bottom-6 right-4 z-20 font-mono text-[10px] text-[#858585] bg-[#080808]/90 border border-[#242424] px-2.5 py-1 backdrop-blur-sm">
              2026 // DINESH AREKAR
            </div>

            {/* Portrait Image Container */}
            <div className="relative aspect-[3/4] w-full overflow-hidden border border-[#242424] bg-[#0c0c0c]">
              <Image
                src="/dinesh-portrait.jpg"
                alt="Dinesh Arekar — Software Engineer"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 500px"
                className="object-cover object-center grayscale hover:grayscale-0 transition-all duration-700 brightness-95 contrast-105"
              />

              {/* Seamless Vignette & Bottom Mask to blend into dark canvas */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent opacity-70" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#080808]/40 via-transparent to-[#080808]/40" />

              {/* Fine scanline subtle overlay */}
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.06] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"
                aria-hidden="true"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Hero Bottom Bar */}
      <div className="max-w-7xl mx-auto w-full px-6 mt-8 sm:mt-10">
        <div className="border-t border-[#242424] pt-3.5 flex flex-wrap items-center justify-between gap-4 font-mono text-[11px] text-[#858585]">
          <div className="flex items-center gap-6">
            <span>SCROLL FOR REPOSITORY & ARCHITECTURE</span>
          </div>
          <div className="flex items-center gap-6">
            <span>INDEX: [00 → 07]</span>
            <span className="text-[#242424]">/</span>
            <span className="text-[#F2F2EE]">2026 EDITION</span>
          </div>
        </div>
      </div>
    </section>
  );
}
