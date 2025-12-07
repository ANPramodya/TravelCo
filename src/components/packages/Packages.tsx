"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const packages = [
  {
    title: "Kandy & Nuwara Eliya",
    subtitle: "Heart of the Hill Country",
    days: "3 Days | 2 Nights",
    image: "/packages/kandy.jpg",
  },
  {
    title: "Ella & Yala Safari",
    subtitle: "Adventure & Wildlife",
    days: "5 Days | 4 Nights",
    image: "/packages/ella.jpg",
  },
  {
    title: "Cultural Triangle",
    subtitle: "History & Heritage",
    days: "7 Days | 6 Nights",
    image: "/packages/cultural.jpg",
  },
  {
    title: "South Coast Beaches",
    subtitle: "Sun, Sand & Serenity",
    days: "4 Days | 3 Nights",
    image: "/packages/southcoast.jpg",
  },
  {
    title: "Sigiriya & Dambulla",
    subtitle: "Iconic Landmarks",
    days: "2 Days | 1 Night",
    image: "/packages/sigiriya.jpg",
  },
  {
    title: "North & Jaffna",
    subtitle: "Untouched Beauty",
    days: "6 Days | 5 Nights",
    image: "/packages/jaffna.jpg",
  },
];

export default function Packages() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Smoother parallax - less extreme movement
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

  return (
    <section ref={containerRef} id="packages" className="relative py-24 lg:py-32 overflow-hidden min-h-screen">
      {/* Background Image with Parallax - Optimized */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          style={{ 
            y: bgY,
            scale: bgScale,
            backgroundImage: "url(/packages/bg-nature.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          className="absolute inset-0 min-h-[120%] w-full"
        />
      </div>

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/30 to-transparent"></div>
      <div className="absolute inset-0 bg-black/10"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Section Title */}
        <div className="text-center text-white mb-12 lg:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
          >
            Explore Sri Lanka's Wonders
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-white/80 max-w-3xl mx-auto"
          >
            Discover our curated travel packages, designed to showcase the best of Sri Lanka
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {packages.map((pkg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.5, 
                delay: Math.min(i * 0.1, 0.3),
                ease: "easeOut"
              }}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.2 }
              }}
              className="group relative rounded-2xl lg:rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 h-[400px] sm:h-[450px] lg:h-[500px]"
            >
              {/* Image Container */}
              <div className="relative w-full h-full">
                <Image
                  src={pkg.image}
                  alt={pkg.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority={i < 3} // Only prioritize first 3 images
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
                
                {/* Content Overlay */}
                <div className="absolute inset-0 p-6 lg:p-8 flex flex-col justify-end text-white">
                  <div className="transform transition-transform duration-300 group-hover:-translate-y-2">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-8 h-0.5 bg-white/50"></div>
                      <span className="text-sm font-medium text-white/80">{pkg.days}</span>
                    </div>
                    
                    <h3 className="text-2xl lg:text-3xl font-bold mb-2">{pkg.title}</h3>
                    <p className="text-white/80 text-lg mb-6">{pkg.subtitle}</p>
                    
                    <button className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-full font-semibold opacity-0 group-hover:opacity-100 transform group-hover:translate-y-0 translate-y-4 transition-all duration-500 hover:bg-gray-100">
                      Explore Package
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Decorative element */}
              <div className="absolute top-4 right-4 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12 lg:mt-16"
        >
          <button className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-xl hover:bg-white/20 hover:border-white/30 transition-all duration-300 hover:shadow-lg text-lg">
            View All Packages
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
}