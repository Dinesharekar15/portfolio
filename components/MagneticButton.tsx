"use client";

import { useRef, useState, useCallback } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  strength?: number;
  as?: "a" | "button";
  target?: string;
  rel?: string;
  "data-cursor"?: string;
}

export default function MagneticButton({
  children,
  className = "",
  href,
  onClick,
  strength = 0.35,
  as: Tag = "button",
  target,
  rel,
  "data-cursor": dataCursor,
}: MagneticButtonProps) {
  const ref = useRef<HTMLElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 200 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const deltaX = (e.clientX - centerX) * strength;
      const deltaY = (e.clientY - centerY) * strength;
      x.set(deltaX);
      y.set(deltaY);
    },
    [x, y, strength]
  );

  const handleMouseLeave = useCallback(() => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  }, [x, y]);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const commonProps = {
    ref: ref as React.RefObject<HTMLAnchorElement & HTMLButtonElement>,
    className,
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    onMouseEnter: handleMouseEnter,
    onClick,
    "data-cursor": dataCursor,
  };

  const anchorProps = href ? { href, target, rel } : {};

  return (
    <motion.div
      style={{ x: springX, y: springY }}
      className="inline-block"
    >
      {Tag === "a" && href ? (
        <a
          {...commonProps}
          {...anchorProps}
          ref={ref as React.RefObject<HTMLAnchorElement>}
        >
          {children}
        </a>
      ) : (
        <button
          {...commonProps}
          ref={ref as React.RefObject<HTMLButtonElement>}
        >
          {children}
        </button>
      )}
    </motion.div>
  );
}
