"use client";

import "./globals.css";
import { useEffect } from "react";
import Lenis from '@studio-freight/lenis';
import Navbar from "@/components/navbar/Navbar";

export default function RootLayout({ children }: { children: React.ReactNode }) {

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        <Navbar/>
        {children}
      </body>
    </html>
  );
}