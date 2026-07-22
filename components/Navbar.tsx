"use client";

import { useState } from "react";

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
        {navItems.map((i) => (
          <li
            key={i}
            className={`font-light text-sm px-6 h-full rounded-full flex justify-center items-center cursor-pointer hover:bg-white hover:text-black transition-colors duration-100 ${activeTab === i ? "bg-white text-black" : "text-white"}`}
            onClick={() => setActiveTab(i)}
          >
            {i}
          </li>
        ))}
      </ul>

      <div className="flex justify-self-end items-center">
        <button>Login</button>
      </div>
    </nav>
  );
};

export default Navbar;
