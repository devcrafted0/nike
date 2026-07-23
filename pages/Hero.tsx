"use client";

import LoadingNike from "@/components/LoadingNike";
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

import "./styles/Hero.css";
import Navbar from "@/components/Navbar";
import ShoeSlider from "@/components/ShoeSlider";

const Hero = () => {
  const [isFinished, setIsFinished] = useState<boolean>(false);
  const [width, setWidth] = useState<number>(0);

  const sourceRef = useCallback((node: HTMLDivElement | null) => {
    if (!node) return;

    setWidth(node.getBoundingClientRect().width);

    const observer = new ResizeObserver(([entry]) => {
      setWidth(entry.contentRect.width);
    });

    observer.observe(node);
  }, []);

  return (
    <div className="h-screen relative">
      <div className="bg h-screen w-full absolute top-0 left-0 -z-10 flex justify-center items-center overflow-hidden">
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

      <main className="text-white px-10 py-5 flex flex-col h-screen">
        <Navbar />
        <div className="flex-1">
          <ShoeSlider isFinished={isFinished} sourceRef={sourceRef} />
        </div>
      </main>
    </div>
  );
};

export default Hero;
