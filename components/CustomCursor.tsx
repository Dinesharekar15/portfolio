"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

type CursorState = "default" | "link" | "project" | "github" | "open" | "view";

export default function CustomCursor() {
  const [cursorState, setCursorState] = useState<CursorState>("default");
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth spring — main dot is crisp, ring lags slightly for depth
  const springConfig = { damping: 30, stiffness: 400, mass: 0.4 };
  const ringSpringConfig = { damping: 22, stiffness: 180, mass: 0.6 };

  const dotX = useSpring(mouseX, springConfig);
  const dotY = useSpring(mouseY, springConfig);
  const ringX = useSpring(mouseX, ringSpringConfig);
  const ringY = useSpring(mouseY, ringSpringConfig);

  useEffect(() => {
    // Disable on touch devices
    const isTouch = window.matchMedia("(hover: none)").matches;
    setIsTouchDevice(isTouch);
    if (isTouch) return;

    // Respect prefers-reduced-motion
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    // Determine cursor state from hovered element
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const closest = target.closest(
        "a, button, [data-cursor], [data-cursor-project]"
      ) as HTMLElement | null;

      if (!closest) {
        setCursorState("default");
        return;
      }

      const cursorAttr = closest.getAttribute("data-cursor");
      const isProject = closest.hasAttribute("data-cursor-project");

      if (isProject) {
        setCursorState("project");
      } else if (cursorAttr) {
        setCursorState(cursorAttr as CursorState);
      } else if (closest.tagName === "A") {
        const href = closest.getAttribute("href") || "";
        if (href.includes("github")) {
          setCursorState("github");
        } else {
          setCursorState("link");
        }
      } else if (closest.tagName === "BUTTON") {
        setCursorState("view");
      } else {
        setCursorState("link");
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [mouseX, mouseY, isVisible]);

  if (isTouchDevice) return null;

  const cursorLabels: Record<CursorState, string> = {
    default: "",
    link: "→",
    project: "VIEW",
    github: "GITHUB",
    open: "OPEN",
    view: "VIEW",
  };

  const isExpanded = cursorState !== "default";
  const label = cursorLabels[cursorState];

  return (
    <>
      {/* Hide native cursor site-wide only when a fine hover pointer is supported */}
      <style>{`
        @media (hover: hover) and (pointer: fine) {
          html, body, a, button, [data-cursor], [data-cursor-project] {
            cursor: none !important;
          }
        }
      `}</style>

      {/* Outer ring — lags behind */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999] flex items-center justify-center"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: isExpanded ? 72 : 36,
          height: isExpanded ? 72 : 36,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.div
          className="w-full h-full rounded-full border flex items-center justify-center overflow-hidden"
          animate={{
            borderColor: isExpanded ? "#FF4A1C" : "rgba(242,242,238,0.3)",
            backgroundColor: isExpanded
              ? "rgba(255,74,28,0.12)"
              : "transparent",
          }}
          transition={{ duration: 0.18 }}
        >
          {isExpanded && label && (
            <motion.span
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.7 }}
              transition={{ duration: 0.15 }}
              className="font-mono text-[9px] text-[#FF4A1C] uppercase tracking-wider font-semibold select-none"
            >
              {label}
            </motion.span>
          )}
        </motion.div>
      </motion.div>

      {/* Inner dot — crisp and sharp */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999]"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: isExpanded ? 6 : 5,
          height: isExpanded ? 6 : 5,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ duration: 0.1 }}
      >
        <motion.div
          className="w-full h-full rounded-full"
          animate={{
            backgroundColor: isExpanded ? "#FF4A1C" : "#F2F2EE",
          }}
          transition={{ duration: 0.15 }}
        />
      </motion.div>
    </>
  );
}
