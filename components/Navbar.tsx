"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { UserRound } from "lucide-react";
import Link from "next/link";

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
    <motion.nav
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.8,
        delay: 1, 
        ease: [0.16, 1, 0.3, 1], 
      }}
      className="grid grid-cols-3"
    >
      <Link href="/" className="w-fit justify-self-start cursor-pointer">
        <h1 className="text-2xl tracking-widest font-semibold">Leonardise</h1>
        <div className="flex justify-between pl-1 pr-3">
          {beYourself.map((f, i) => (
            <p key={i} className="text-xs font-medium">
              {f}
            </p>
          ))}
        </div>
      </Link>

      <ul className="justify-self-center self-center flex justify-center items-center gap-6 border-[#383838] border rounded-full h-10 bg-[#272727]">
        {navItems.map((tab) => {
          const isActive = activeTab === tab;

          return (
            <li key={tab} className="relative">
              <button
                onClick={() => setActiveTab(tab)}
                className={`relative z-10 rounded-full px-5 py-2 text-sm transition-colors duration-200 cursor-pointer ${
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

      <motion.button
        whileHover="hover"
        initial="initial"
        className="relative justify-self-end self-center flex items-center bg-[#272727] border-[#383838] border rounded-full h-10 px-6 cursor-pointer overflow-hidden"
      >
        {/* Rising White Layer */}
        <motion.div
          variants={{
            initial: { y: "100%" },
            hover: { y: "0%" },
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 28,
          }}
          className="absolute inset-0 bg-white z-0 rounded-full"
        />

        {/* Content Layer */}
        <motion.div
          variants={{
            initial: { color: "#ffffff" },
            hover: { color: "#000000" },
          }}
          transition={{ duration: 0.2 }}
          className="relative z-10 flex items-center gap-2 font-medium text-sm"
        >
          <UserRound className="w-4 h-4" />
          <span>Login</span>
        </motion.div>
      </motion.button>
    </motion.nav>
  );
};

export default Navbar;
