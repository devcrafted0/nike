"use client";

import LoadingNike from "@/components/LoadingNike";
import { useState } from "react";

import "./styles/Hero.css";
import Navbar from "@/components/Navbar";

const Hero = () => {
  const [isFinished, setIsFinished] = useState<boolean>(false);
  return (
    <div className="h-screen relative">
      <div className="bg h-screen w-full absolute top-0 left-0 -z-10 flex justify-center items-center">
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

      <main className="text-white px-10 py-5">
        <Navbar />
      </main>
    </div>
  );
};

export default Hero;
