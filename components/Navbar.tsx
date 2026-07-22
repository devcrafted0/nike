"use client";

import { useState } from "react";
import { motion } from "framer-motion";

type ActiveNavItems = "Home" | "About" | "Pricing" | "Contact";

const Navbar = () => {
  const [activeTab, setActiveTab] = useState<ActiveNavItems>("Home");

  const navItems: ["Home", "About", "Pricing", "Contact"] = [
    "Home",
    "About",
    "Pricing",
    "Contact",
  ];

  const beYourself: string[] = [
    "B",
    "E",
    "Y",
    "O",
    "U",
    "R",
    "S",
    "E",
    "L",
    "F",
  ];

  return (
    <nav className="grid grid-cols-3">
      <div className="w-fit justify-self-start">
        <h1 className="text-2xl tracking-widest font-semibold">Leonardise</h1>
        <div className="flex justify-between pl-1 pr-3">
          {beYourself.map((f, i) => (
            <p key={i} className="text-xs font-medium">
              {f}
            </p>
          ))}
        </div>
      </div>

      <ul className="justify-self-center self-center flex justify-center items-center gap-6 border-[#383838] border rounded-full h-10 bg-[#272727]">
        {navItems.map((tab) => {
          const isActive = activeTab === tab;

          return (
            <li key={tab} className="relative">
              <button
                onClick={() => setActiveTab(tab)}
                className={`relative z-10 rounded-full px-5 py-2 text-sm transition-colors duration-200 ${
                  isActive ? "text-black" : "text-white/70 hover:text-white"
                }`}
              >
                {tab}
              </button>

              {isActive && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 z-0 rounded-full bg-white"
                  transition={{
                    type: "spring",
                    stiffness: 380,
                    damping: 30,
                  }}
                />
              )}
            </li>
          );
        })}
      </ul>

      <div className="justify-self-end self-center flex items-center bg-[#272727] border-[#383838] border rounded-full h-10 px-6">
        <button>Login</button>
      </div>
    </nav>
  );
};

export default Navbar;
