import FloatingObject from "@/components/FloatingObject";
import LenisProvider from "@/components/providers/LenisProvider";
import Description from "@/sections/Description";
import Hero from "@/sections/Hero";

const page = () => {
  return (
    <LenisProvider>
      <div>
        <Hero />
        <Description />
        <FloatingObject />
      </div>
    </LenisProvider>
  );
};

export default page;
