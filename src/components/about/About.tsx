"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Smoother parallax
  const topImageY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const bottomImageY = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <section ref={containerRef} id="about" className="relative py-24 lg:py-32 bg-gray-100">
      <div className="relative mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl xl:max-w-[1400px] 2xl:max-w-[1600px]">
        
        {/* Content + Images Layout */}
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-10 xl:gap-12">
          
          {/* Left Image - Smaller */}
          <motion.div 
            style={{ y: topImageY }} 
            className="w-full lg:w-[35%] xl:w-[33%] relative order-2 lg:order-1"
          >
            <div className="relative w-full h-[350px] sm:h-[400px] lg:h-[550px] rounded-xl lg:rounded-2xl shadow-lg lg:shadow-xl overflow-hidden">
              <Image
                src="/about1.jpg"
                alt="Sri Lanka Travel"
                fill
                sizes="(max-width: 1024px) 100vw, 35vw"
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

          {/* Center Content - More space */}
          <div className="w-full lg:w-[30%] xl:w-[34%] text-center lg:text-left space-y-6 lg:space-y-8 order-1 lg:order-2 px-4 lg:px-0">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-gray-900 leading-tight">
              Explore.<br />Experience.<br />Remember.
            </h2>
            <p className="text-gray-700 text-base lg:text-lg xl:text-xl leading-relaxed">
              TravelCo is your gateway to unforgettable journeys in Sri Lanka. We specialize in crafting personalized travel experiences that showcase the island's rich culture, breathtaking landscapes, and warm hospitality.
            </p>
            <ul className="space-y-3 lg:space-y-4 text-gray-700 text-base lg:text-lg">
              <li className="flex items-start">
                <span className="text-green-600 mr-3 text-lg">✓</span>
                <span>Personalized experiences tailored for you</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3 text-lg">✓</span>
                <span>Authentic Sri Lankan culture & landscapes</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3 text-lg">✓</span>
                <span>Expert local guides & premium transportation</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3 text-lg">✓</span>
                <span>24/7 support throughout your journey</span>
              </li>
            </ul>
            <a 
              href="/about" 
              className="inline-block px-8 py-3 lg:px-10 lg:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg lg:rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl text-base lg:text-lg"
            >
              Learn More →
            </a>
          </div>

          {/* Right Image - Smaller */}
          <motion.div 
            style={{ y: bottomImageY }} 
            className="w-full lg:w-[35%] xl:w-[33%] relative order-3"
          >
            <div className="relative w-full h-[350px] sm:h-[400px] lg:h-[550px] rounded-xl lg:rounded-2xl shadow-lg lg:shadow-xl overflow-hidden">
              <Image
                src="/about2.jpg"
                alt="Sri Lanka Landscape"
                fill
                sizes="(max-width: 1024px) 100vw, 35vw"
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}