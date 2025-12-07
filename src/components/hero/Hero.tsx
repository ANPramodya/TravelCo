"use client";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [useFallback, setUseFallback] = useState(false);

  // Optimize video loading
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Preload metadata for better performance
    video.load();

    const handleLoaded = () => {
      setIsVideoLoaded(true);
      // Start playback
      video.play().catch(e => {
        console.log("Video autoplay failed:", e);
        setUseFallback(true);
      });
    };

    const handleError = () => {
      console.log("Video failed to load, using fallback");
      setUseFallback(true);
    };

    video.addEventListener('loadeddata', handleLoaded);
    video.addEventListener('error', handleError);

    // Cleanup
    return () => {
      video.removeEventListener('loadeddata', handleLoaded);
      video.removeEventListener('error', handleError);
    };
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Video - Optimized */}
      <div className="absolute inset-0">
        {!useFallback ? (
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ${
              isVideoLoaded ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
            }`}
            style={{ willChange: 'transform' }}
          >
            <source src="/hero-video.mp4" type="video/mp4" />
            {/* Fallback sources for better compatibility */}
            <source src="/hero-video.webm" type="video/webm" />
            Your browser does not support the video tag.
          </video>
        ) : (
          // Fallback image if video fails
          <div 
            className="absolute inset-0 bg-cover bg-center scale-105"
            style={{ backgroundImage: "url('/hero-fallback.jpg')" }}
          />
        )}
      </div>

      {/* Performance optimized gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30 pointer-events-none" />

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto"
      >
        <motion.h1
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight drop-shadow-lg"
        >
          Discover the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-cyan-200">Wonders</span> of Sri Lanka
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-base sm:text-lg md:text-xl lg:text-2xl mt-4 sm:mt-6 text-white/90 max-w-2xl mx-auto px-4"
        >
          Tropical paradise • Rich culture • Epic adventures • Luxury experiences
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl active:scale-95"
          >
            Explore Tours
          </button>
          <button
            className="px-6 sm:px-8 py-3 sm:py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-xl hover:bg-white/20 hover:border-white/30 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl active:scale-95"
          >
            Watch Video
          </button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator - Simplified */}
      <motion.div
        className="absolute bottom-6 sm:bottom-8 w-full flex justify-center pointer-events-none"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-white/70 text-sm">Scroll to explore</span>
          <div className="w-5 h-8 border-2 border-white/50 rounded-full flex justify-center p-1">
            <motion.div
              className="w-1 h-2 bg-white/70 rounded-full"
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            />
          </div>
        </div>
      </motion.div>

      {/* Stats Bar - Optional */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-24 sm:bottom-28 left-0 right-0 px-4"
      >
        <div className="max-w-4xl mx-auto grid grid-cols-3 gap-4 text-center">
          {[
            { value: "500+", label: "Happy Travelers" },
            { value: "50+", label: "Tour Packages" },
            { value: "24/7", label: "Support" },
          ].map((stat, i) => (
            <div key={i} className="text-white/80">
              <div className="text-xl sm:text-2xl font-bold text-white">{stat.value}</div>
              <div className="text-xs sm:text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}