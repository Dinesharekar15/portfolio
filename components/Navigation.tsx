"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { personal } from "@/lib/data";

export default function Navigation() {
  const [time, setTime] = useState<string>("");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          timeZone: "Asia/Kolkata",
        }) + " IST"
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      clearInterval(interval);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Handle Escape key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: "WORK", href: "#work", num: "01" },
    { label: "STACK", href: "#stack", num: "02" },
    { label: "EXPERIENCE", href: "#experience", num: "03" },
    { label: "JOURNEY", href: "#journey", num: "04" },
    { label: "ABOUT", href: "#about", num: "05" },
    { label: "CONTACT", href: "#contact", num: "06" },
  ];

  return (
    <>
      {/* Skip to Main Content Link for Screen Readers & Keyboard Nav */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#FF4A1C] focus:text-[#F2F2EE] focus:font-mono focus:text-xs focus:uppercase focus:outline-none"
      >
        Skip to main content
      </a>

      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-300 ${
          scrolled
            ? "bg-[#080808]/90 backdrop-blur-md border-b border-[#242424]"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Brand & System Tag */}
          <div className="flex items-baseline gap-3">
            <Link
              href="#"
              className="group flex items-baseline gap-2.5 text-sm font-semibold tracking-tight text-[#F2F2EE] hover:text-[#FF4A1C] transition-colors focus-visible:outline-dashed focus-visible:outline-2 focus-visible:outline-[#FF4A1C]"
              aria-label="Dinesh Arekar Portfolio Home"
            >
              <span className="font-mono text-xs text-[#FF4A1C]">[00]</span>
              <span className="uppercase tracking-wider">DINESH AREKAR</span>
            </Link>
            <span className="hidden sm:inline font-mono text-[11px] text-[#858585] tracking-wider">
              // SE.2026
            </span>
          </div>

          {/* Center Technical Metadata (desktop) */}
          <div className="hidden lg:flex items-center gap-6 font-mono text-[11px] text-[#858585] tracking-widest">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF4A1C] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF4A1C]"></span>
              </span>
              <span className="text-[#F2F2EE]/90 uppercase font-medium">
                AVAILABLE FOR 2026 ROLES
              </span>
            </div>
            <span className="text-[#242424]">|</span>
            <span>MUMBAI, IN {time && `[${time}]`}</span>
          </div>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Desktop Navigation"
            className="hidden md:flex items-center gap-6 font-mono text-xs tracking-wider"
          >
            <a
              href="#work"
              data-cursor="view"
              className="text-[#858585] hover:text-[#F2F2EE] transition-colors flex items-center gap-1 group focus-visible:outline-dashed focus-visible:outline-2 focus-visible:outline-[#FF4A1C]"
            >
              <span className="text-[#FF4A1C] group-hover:translate-x-0.5 transition-transform">
                /
              </span>
              <span>WORK</span>
            </a>
            <a
              href="#stack"
              data-cursor="view"
              className="text-[#858585] hover:text-[#F2F2EE] transition-colors flex items-center gap-1 group focus-visible:outline-dashed focus-visible:outline-2 focus-visible:outline-[#FF4A1C]"
            >
              <span className="text-[#FF4A1C] group-hover:translate-x-0.5 transition-transform">
                /
              </span>
              <span>STACK</span>
            </a>
            <a
              href="#experience"
              data-cursor="view"
              className="text-[#858585] hover:text-[#F2F2EE] transition-colors flex items-center gap-1 group focus-visible:outline-dashed focus-visible:outline-2 focus-visible:outline-[#FF4A1C]"
            >
              <span className="text-[#FF4A1C] group-hover:translate-x-0.5 transition-transform">
                /
              </span>
              <span>EXP</span>
            </a>
            <a
              href="#about"
              data-cursor="view"
              className="text-[#858585] hover:text-[#F2F2EE] transition-colors flex items-center gap-1 group focus-visible:outline-dashed focus-visible:outline-2 focus-visible:outline-[#FF4A1C]"
            >
              <span className="text-[#FF4A1C] group-hover:translate-x-0.5 transition-transform">
                /
              </span>
              <span>ABOUT</span>
            </a>
            <a
              href="#contact"
              data-cursor="link"
              className="border border-[#242424] hover:border-[#FF4A1C] text-[#F2F2EE] hover:text-[#FF4A1C] px-3.5 py-1.5 transition-all flex items-center gap-1.5 focus-visible:outline-dashed focus-visible:outline-2 focus-visible:outline-[#FF4A1C]"
            >
              <span className="text-[#FF4A1C] text-[10px]">●</span>
              <span>CONTACT</span>
            </a>
          </nav>

          {/* Mobile Menu Button (md:hidden) */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden relative z-50 p-2.5 text-[#F2F2EE] hover:text-[#FF4A1C] border border-[#242424] hover:border-[#FF4A1C] transition-colors flex items-center gap-2 font-mono text-xs focus-visible:outline-dashed focus-visible:outline-2 focus-visible:outline-[#FF4A1C]"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
          >
            <span className="text-[10px] text-[#FF4A1C]">
              {mobileMenuOpen ? "✕" : "☰"}
            </span>
            <span>{mobileMenuOpen ? "CLOSE" : "MENU"}</span>
          </button>
        </div>
      </header>

      {/* Full-Screen Technical Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-[#080808] flex flex-col justify-between p-6 pt-28 md:hidden overflow-y-auto"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation Menu"
          >
            {/* Top Status in Mobile Menu */}
            <div className="font-mono text-xs border-b border-[#242424] pb-4 flex items-center justify-between text-[#858585]">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#FF4A1C] animate-pulse" />
                <span className="text-[#F2F2EE]">AVAILABLE FOR 2026 ROLES</span>
              </div>
              <span>{time}</span>
            </div>

            {/* Navigation Links with Large Editorial Typography */}
            <nav className="my-auto py-8 space-y-4">
              {navLinks.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * index, duration: 0.2 }}
                >
                  <a
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="group flex items-baseline justify-between py-2 border-b border-[#141414] hover:border-[#FF4A1C] transition-colors"
                  >
                    <span className="text-3xl font-bold tracking-tight text-[#F2F2EE] group-hover:text-[#FF4A1C] transition-colors uppercase">
                      {item.label}
                    </span>
                    <span className="font-mono text-xs text-[#858585] group-hover:text-[#FF4A1C]">
                      [{item.num}]
                    </span>
                  </a>
                </motion.div>
              ))}
            </nav>

            {/* Bottom Quick Links & Contact Details */}
            <div className="border-t border-[#242424] pt-6 space-y-4 font-mono text-xs">
              <div className="text-[#858585] uppercase text-[10px] tracking-widest">
                DIRECT CHANNELS
              </div>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={`mailto:${personal.email}`}
                  className="p-3 border border-[#242424] text-[#F2F2EE] hover:border-[#FF4A1C] hover:text-[#FF4A1C] transition-colors truncate"
                >
                  EMAIL ↗
                </a>
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 border border-[#242424] text-[#F2F2EE] hover:border-[#FF4A1C] hover:text-[#FF4A1C] transition-colors truncate"
                >
                  GITHUB ↗
                </a>
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 border border-[#242424] text-[#F2F2EE] hover:border-[#FF4A1C] hover:text-[#FF4A1C] transition-colors truncate"
                >
                  LINKEDIN ↗
                </a>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 border border-[#242424] text-[#FF4A1C] hover:bg-[#FF4A1C] hover:text-[#080808] transition-colors truncate"
                >
                  RESUME.PDF ↗
                </a>
              </div>

              <div className="text-[10px] text-[#858585] pt-2 flex items-center justify-between">
                <span>DINESH AREKAR &copy; 2026</span>
                <span>MUMBAI, MAHARASHTRA</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
