"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronRight, ChevronLeft } from "lucide-react";

import "./styles/ShoeSlider.css";

const TOTAL_SHOES = 5;

const ShoeSlider = ({
  isFinished,
  sourceRef,
}: {
  isFinished: boolean;
  sourceRef: (node: HTMLDivElement | null) => void;
}) => {
  const [currentIndex, setCurrentIndex] = useState(1);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex % TOTAL_SHOES) + 1);
  };

  return (
    <>
      {isFinished && (
        <div className="relative flex flex-col justify-center items-center h-full w-full mx-auto min-h-100 max-w-5xl overflow-hidden">
          {/* Viewport Container */}
          <div
            ref={sourceRef}
            className="relative w-full h-full flex justify-center items-center overflow-hidden"
          >
            <AnimatePresence mode="popLayout">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: "50%", y: "30%", scale: 0 }}
                animate={{ opacity: 1, x: "0%", y: "0%", scale: 1 }}
                exit={{ opacity: 0, x: "-50%", y: "30%", scale: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 80,
                  damping: 14,
                  mass: 0.9,
                }}
                className="absolute inset-0 flex justify-center items-center"
              >
                <Image
                  src={`/shoes/${currentIndex}.png`}
                  alt={`Shoe ${currentIndex}`}
                  fill
                  priority
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 800px"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="absolute bottom-30 w-full flex justify-center items-center ">
            <div className="w-full max-w-5xl h-150 rounded-full border-b-8 border-x-8 border-white/20 slider -z-10" />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleNext}
              className="flex items-center justify-center bg-white text-black font-semibold h-10 w-10 rounded-full cursor-pointer shadow-lg hover:bg-neutral-200 transition-colors z-10 absolute bottom-3 left-1/2 translate-x-[-50%]"
            >
              <ChevronLeft className="w-5 h-5 translate-x-1" />
              <ChevronRight className="w-5 h-5 -translate-x-1" />
            </motion.button>
          </div>
        </div>
      )}
    </>
  );
};

export default ShoeSlider;
