import FloatingObject from "@/components/FloatingObject";
import LenisProvider from "@/components/providers/LenisProvider";
import { ScrollProvider } from "@/context/useScrollContext";
import Hero from "@/pages/Hero";

const page = () => {
  return (
    <LenisProvider>
      <ScrollProvider>
        <div>
          <Hero />
          <div className="h-screen"></div>
          <FloatingObject />
        </div>
      </ScrollProvider>
    </LenisProvider>
  );
};

export default page;
