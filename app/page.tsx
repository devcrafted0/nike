import FloatingObject from "@/components/FloatingObject";
import LenisProvider from "@/components/providers/LenisProvider";
import { ScrollProvider } from "@/context/useScrollContext";
import Description from "@/pages/Description";
import Hero from "@/pages/Hero";

const page = () => {
  return (
    <LenisProvider>
      <ScrollProvider>
        <div>
          <Hero />
          <Description />
          <FloatingObject />
        </div>
      </ScrollProvider>
    </LenisProvider>
  );
};

export default page;
