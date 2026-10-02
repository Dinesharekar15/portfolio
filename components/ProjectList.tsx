"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { projects, type Project } from "@/lib/data";
import MagneticButton from "./MagneticButton";

const projectImages: Record<string, string> = {
  "social-scheduler": "/project-social-scheduler.jpg",
  "blog-cms": "/project-blog-cms.jpg",
  "e-learning": "/project-elearning.jpg",
};

// ── Floating preview that follows the cursor ──────────────────────────────────
function ProjectPreview({
  activeProject,
}: {
  activeProject: Project | null;
}) {
  const mouseX = useMotionValue(-400);
  const mouseY = useMotionValue(-400);

  const springConfig = { damping: 28, stiffness: 180, mass: 0.7 };
  const previewX = useSpring(mouseX, springConfig);
  const previewY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX + 28);
      mouseY.set(e.clientY - 80);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-30 w-[340px] hidden lg:block"
      style={{ x: previewX, y: previewY }}
    >
      <AnimatePresence mode="wait">
        {activeProject && (
          <motion.div
            key={activeProject.id}
            initial={{ opacity: 0, scale: 0.92, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -8 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="border border-[#242424] overflow-hidden bg-[#0c0c0c] shadow-2xl"
          >
            {/* Image */}
            <div className="relative aspect-video w-full">
              <Image
                src={projectImages[activeProject.id]}
                alt={activeProject.title}
                fill
                sizes="340px"
                className="object-cover object-top"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0c0c0c]/60 via-transparent to-transparent" />
            </div>
            {/* Caption */}
            <div className="px-3 py-2.5 border-t border-[#242424] flex items-center justify-between">
              <span className="font-mono text-[10px] text-[#858585] uppercase tracking-wider truncate">
                {activeProject.subtitle}
              </span>
              {activeProject.status === "Live" && (
                <span className="flex items-center gap-1 font-mono text-[9px] text-[#FF4A1C] shrink-0">
                  <span className="h-1 w-1 rounded-full bg-[#FF4A1C]" />
                  LIVE
                </span>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ── Individual project row ────────────────────────────────────────────────────
function ProjectRow({
  project,
  index,
  onHoverChange,
}: {
  project: Project;
  index: number;
  onHoverChange: (project: Project | null) => void;
}) {
  const rowRef = useRef<HTMLDivElement>(null);

  // Animated index number on scroll-enter
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1, rootMargin: "-5% 0px" }
    );
    if (rowRef.current) observer.observe(rowRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      ref={rowRef}
      initial={{ opacity: 0, y: 40 }}
      animate={visible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group border-b border-[#242424] last:border-b-0"
    >
      {/* Main project row layout */}
      <div className="py-8 sm:py-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start">
        {/* Left: number + title + description */}
        <div className="lg:col-span-7">
          <div className="flex items-baseline gap-4 mb-3">
            <motion.span
              initial={{ opacity: 0 }}
              animate={visible ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.15 }}
              className="font-mono text-sm text-[#FF4A1C] tabular-nums select-none"
            >
              {project.index}
            </motion.span>
            <div className="h-px flex-1 max-w-[2rem] bg-[#242424]" />
          </div>

          {/* Title — hoverable for floating preview */}
          <h3
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F2F2EE] uppercase leading-none mb-2 group-hover:text-[#FF4A1C] transition-colors duration-300"
            data-cursor-project
            onMouseEnter={() => onHoverChange(project)}
            onMouseLeave={() => onHoverChange(null)}
          >
            {project.title}
          </h3>
          <p className="font-mono text-xs text-[#858585] uppercase tracking-wider mb-4">
            {project.subtitle}
          </p>
          <p className="text-[#858585] text-sm leading-relaxed max-w-xl">
            {project.description}
          </p>

          {/* Key highlights */}
          <div className="mt-5 space-y-1.5">
            {project.highlights.map((h, i) => (
              <div key={i} className="flex items-start gap-2.5 font-mono text-xs text-[#858585]">
                <span className="text-[#FF4A1C] mt-0.5 shrink-0">→</span>
                <span>{h}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: year + status + image + tech + links */}
        <div className="lg:col-span-5 flex flex-col gap-5">
          {/* Year & Status */}
          <div className="flex items-center gap-4 font-mono text-xs text-[#858585]">
            <span>{project.year}</span>
            <span className="text-[#242424]">/</span>
            <span
              className={`flex items-center gap-1.5 ${
                project.status === "Live" ? "text-[#FF4A1C]" : "text-[#858585]"
              }`}
            >
              {project.status === "Live" && (
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF4A1C] opacity-60" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#FF4A1C]" />
                </span>
              )}
              {project.status}
            </span>
          </div>

          {/* Project screenshot image with reveal */}
          <div className="relative aspect-video w-full overflow-hidden border border-[#242424] bg-[#0c0c0c]">
            <Image
              src={projectImages[project.id]}
              alt={`${project.title} — screenshot`}
              fill
              sizes="(max-width: 768px) 100vw, 600px"
              className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-[1.02]"
              loading="lazy"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#080808]/60 via-transparent to-transparent" />

            {/* Masked reveal overlay that slides away on hover */}
            <motion.div
              className="absolute inset-0 bg-[#111111] origin-left"
              initial={{ scaleX: 0 }}
              animate={visible ? { scaleX: 0 } : { scaleX: 1 }}
              transition={{ duration: 0.9, delay: index * 0.1 + 0.3, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="font-mono text-[10px] uppercase tracking-wider text-[#858585] border border-[#242424] px-2 py-0.5 bg-[#0c0c0c] hover:border-[#FF4A1C] hover:text-[#FF4A1C] transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action links — with magnetic effect */}
          <div className="flex items-center gap-3 flex-wrap">
            <MagneticButton
              as="a"
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="github"
              className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-[#858585] hover:text-[#F2F2EE] border border-[#242424] hover:border-[#F2F2EE] px-3 py-1.5 transition-all"
            >
              <span>GITHUB</span>
              <span>↗</span>
            </MagneticButton>

            {project.liveUrl && (
              <MagneticButton
                as="a"
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="open"
                className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-[#F2F2EE] hover:text-[#FF4A1C] border border-[#F2F2EE] hover:border-[#FF4A1C] px-3 py-1.5 transition-all"
              >
                <span className="text-[#FF4A1C]">●</span>
                <span>LIVE</span>
                <span>↗</span>
              </MagneticButton>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// ── Section export ────────────────────────────────────────────────────────────
export default function ProjectList() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const [headerVisible, setHeaderVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setHeaderVisible(true); },
      { threshold: 0.1 }
    );
    if (headerRef.current) observer.observe(headerRef.current);
    return () => observer.disconnect();
  }, []);

  const handleHoverChange = useCallback((project: Project | null) => {
    setActiveProject(project);
  }, []);

  return (
    <>
      {/* Floating cursor preview — portalled via fixed positioning */}
      <ProjectPreview activeProject={activeProject} />

      <section id="work" className="py-24 sm:py-32 border-b border-[#242424]">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section header */}
          <div ref={headerRef} className="mb-16 sm:mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={headerVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-4 mb-6"
            >
              <span className="font-mono text-xs text-[#FF4A1C] tracking-wider">[01]</span>
              <div className="h-px flex-1 max-w-12 bg-[#242424]" />
              <span className="font-mono text-xs text-[#858585] tracking-widest uppercase">
                SELECTED WORK
              </span>
            </motion.div>

            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: 60, opacity: 0 }}
                animate={headerVisible ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight uppercase text-[#F2F2EE] leading-none"
              >
                PROJECT
                <br />
                REPOSITORY
              </motion.h2>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={headerVisible ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-4 font-mono text-xs text-[#858585] tracking-wider"
            >
              <span className="text-[#FF4A1C]">3</span> ENTRIES // FULL-STACK SYSTEMS
            </motion.div>
          </div>

          {/* Project rows */}
          <div>
            {projects.map((project, i) => (
              <ProjectRow
                key={project.id}
                project={project}
                index={i}
                onHoverChange={handleHoverChange}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
