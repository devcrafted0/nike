import { MinusSquareIcon, PlusSquareIcon } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

type ActiveSize = 12 | 14 | 16;

const HeroContent = () => {
  const [activeSize, setActiveSize] = useState<ActiveSize>(12);
  const sizes: [12, 14, 16] = [12, 14, 16];

  const [count, setCount] = useState<number>(1);

  const increment = () => {
    setCount((count) => (count += 1));
  };

  const decrement = () => {
    if (count <= 1) {
      return;
    }
    setCount((count) => (count -= 1));
  };

  return (
    <div className="absolute w-full top-0 left-0 h-full grid grid-cols-3 overflow-hidden">
      {/* Left */}
      <motion.div
        initial={{ x: "-100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 20,
          mass: 1,
        }}
        className="pt-30 pb-8 flex flex-col justify-between"
      >
        <div>
          <h1 className="text-7xl">Wear your Style</h1>
          <h1 className="text-7xl mt-4">with Comfort</h1>
          <p className="mt-8">Nike Airmax 270</p>
        </div>
        <div>
          <p className="w-[40ch] text-white/70">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione,
            reprehenderit
          </p>
        </div>
      </motion.div>
      {/* Middle */}
      <div className=""></div>
      {/* Right */}
      <motion.div
        initial={{ x: "100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 20,
          mass: 1,
        }}
        className="pt-30 pb-8 flex flex-col justify-between justify-self-end"
      >
        <div className="flex gap-3">
          {sizes.map((s, i) => (
            <li
              key={i}
              className={`flex justify-center items-center rounded-full transition-all duration-200 border border-white/70 cursor-pointer ${activeSize === s && "bg-white/20 backdrop-blur-lg"}`}
              onClick={() => setActiveSize(s)}
            >
              <span className="text-xs p-2">{s}</span>
            </li>
          ))}
        </div>
        <div className="flex justify-between items-center gap-6">
          <div className="flex justify-between items-center gap-4">
            <button
              className="cursor-pointer disabled:text-white/50"
              onClick={decrement}
              disabled={count === 1}
            >
              <MinusSquareIcon />
            </button>
            <span>
              {count <= 9 && "0"}
              {count}
            </span>
            <button className="cursor-pointer" onClick={increment}>
              <PlusSquareIcon />
            </button>
          </div>

          <motion.button
            whileTap={{ scale: 0.9 }}
            className="flex items-center justify-center bg-white text-black rounded-full cursor-pointer shadow-lg hover:bg-neutral-200 transition-colors px-5 py-2 text-xs"
          >
            Buy Now
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroContent;
