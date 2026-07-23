"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 15, stiffness: 600, mass: 0.1 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - 12);
      mouseY.set(e.clientY - 12);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      style={{
        x: smoothX,
        y: smoothY,
      }}
      className="
    fixed top-0 left-0
    size-6
    rounded-full
    pointer-events-none
    z-50

    bg-black/10
    backdrop-blur-xl
    border border-white/40
    ring-1 ring-black/10

    shadow-[0_4px_20px_rgba(0,0,0,0.12),inset_0_1px_1px_rgba(255,255,255,0.4)]"
    />
  );
}
