"use client";

import LoadingNike from "@/components/LoadingNike";
import { useEffect, useState } from "react";

import "./styles/Hero.css";
import Navbar from "@/components/Navbar";
import ShoeSlider from "@/components/ShoeSlider";
import HeroContent from "@/components/HeroContent";
import { useScrollContext } from "@/context/useScrollContext";

const Hero = () => {
  const [isFinished, setIsFinished] = useState<boolean>(false);

  const [isMounted, setIsMounted] = useState(false);

  const { currentIndex } = useScrollContext();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsMounted(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="h-screen relative">
      <div
        className={`bg-${currentIndex} h-screen w-full absolute top-0 left-0 -z-10 flex justify-center items-center overflow-hidden transition-all duration-300`}
      >
        <div className="translate-x-10 animate-rise-up">
          <img
            src="/nike.png"
            alt=""
            className="w-100 recolor-to-black opacity-15 scale-150 translate-x-20"
          />
          <img
            src="/nike.png"
            alt=""
            className="w-100 recolor-to-black opacity-15 scale-250 -translate-y-25 translate-x-10"
          />
          <img
            src="/nike.png"
            alt=""
            className="w-100 recolor-to-black opacity-15 scale-350 -translate-x-10 -translate-y-35"
          />
        </div>
      </div>

      {!isFinished && (
        <div className="absolute top-0 left-0 -z-10 flex justify-center items-center h-full w-full">
          <LoadingNike isFinished={isFinished} setIsFinished={setIsFinished} />
        </div>
      )}

      {isMounted && (
        <main className="text-white px-15 py-10 flex flex-col h-screen relative">
          <Navbar />
          <div className="flex-1 relative">
            <ShoeSlider />
            <HeroContent />
          </div>
        </main>
      )}
    </div>
  );
};

export default Hero;
