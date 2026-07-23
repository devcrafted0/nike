"use client";

import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
  type ReactNode,
} from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";

interface ScrollContextValue {
  scrollY: number;
  isAtTop: boolean;
  currentIndex: number;
  setCurrentIndex: Dispatch<SetStateAction<number>>;
}

const ScrollContext = createContext<ScrollContextValue | null>(null);

interface ScrollProviderProps {
  children: ReactNode;
}

export function ScrollProvider({ children }: ScrollProviderProps) {
  const { scrollY } = useScroll();

  const [scrollPosition, setScrollPosition] = useState(0);
  const [isAtTop, setIsAtTop] = useState(true);

  // For calcualting the current shoes and it is shared across the entire app
  const [currentIndex, setCurrentIndex] = useState(1);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const value = Math.round(latest);

    setScrollPosition((prev) => (prev !== value ? value : prev));

    const atTop = value === 0;
    setIsAtTop((prev) => (prev !== atTop ? atTop : prev));
  });

  return (
    <ScrollContext.Provider
      value={{
        scrollY: scrollPosition,
        isAtTop,
        currentIndex,
        setCurrentIndex,
      }}
    >
      {children}
    </ScrollContext.Provider>
  );
}

export function useScrollContext() {
  const context = useContext(ScrollContext);

  if (!context) {
    throw new Error("useScrollContext must be used inside ScrollProvider.");
  }

  return context;
}
