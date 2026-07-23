import type { Metadata } from "next";
import { Poppins, Montserrat, Inter } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "500", "600"],
  variable: "--font-poppins",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Leonardise | Premium Sneaker Collection",
    template: "%s | Leonardise",
  },

  description:
    "Discover premium sneakers with modern design, unmatched comfort, and timeless style. Explore the Leonardise collection inspired by iconic streetwear aesthetics.",

  keywords: [
    "Leonardise",
    "Sneakers",
    "Nike Air Max 270",
    "Shoe Store",
    "Streetwear",
    "Footwear",
    "Running Shoes",
    "Fashion",
    "Sports Shoes",
    "Modern Sneakers",
  ],

  authors: [{ name: "Hassan Raza" }],
  creator: "Devcrafted0 ( Hassan Raza )",
  publisher: "Leonardise",

  applicationName: "Leonardise",

  twitter: {
    card: "summary_large_image",
    title: "Leonardise | Premium Sneaker Collection",
    description: "Premium sneakers crafted for style and comfort.",
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${montserrat.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col select-none">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
