import shoe1 from "@/public/shoes/1.webp";
import shoe2 from "@/public/shoes/2.webp";
import shoe3 from "@/public/shoes/3.webp";
import shoe4 from "@/public/shoes/4.webp";
import shoe5 from "@/public/shoes/5.webp";

export const shoes = [shoe1, shoe2, shoe3, shoe4, shoe5] as const;

export type Shoe = (typeof shoes)[number];
