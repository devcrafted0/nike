"use client";

import Image from "next/image";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useScrollContext } from "@/context/useScrollContext";
import { shoes } from "@/utils/Shoes";

export default function FloatingObject() {
  const { scrollY } = useScroll();

  // Horizontal movement
  const x = useTransform(scrollY, [0, 1000], [0, 550]);

  const y = useTransform(scrollY, [0, 1000], [0, -30]);

  const scale = useTransform(scrollY, [0, 1000], [1, 2]);

  // Rotation
  const rotate = useTransform(scrollY, [0, 1000], [1, 0]);

  const { isAtTop, currentIndex } = useScrollContext();

  return (
    <>
      {!isAtTop && (
        <motion.div
          className="fixed left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] z-50 pointer-events-none"
          style={{
            x,
            y,
            scale,
            rotate,
          }}
        >
          <Image
            src={shoes[currentIndex - 1]}
            alt="Floating Shoe"
            width={1024}
            height={863}
            priority
            draggable={false}
            className="select-none"
          />
        </motion.div>
      )}
    </>
  );
}
