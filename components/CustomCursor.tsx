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
      className="fixed top-0 left-0 w-6 h-6 rounded-full pointer-events-none z-50 bg-white/10 backdrop-blur-md border border-white/30 shadow-[0_4px_16px_0_rgba(255,255,255,0.15)]"
    />
  );
}
