import FloatingObject from "@/components/FloatingObject";
import LenisProvider from "@/components/providers/LenisProvider";
import Description from "@/pages/Description";
import Hero from "@/pages/Hero";

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
