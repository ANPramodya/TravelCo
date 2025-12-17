"use client";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useState, useRef } from "react";

const testimonials = [
  {
    heading: "A Truly Unforgettable Experience",
    quote: "“Avora Odyssey planned our entire trip flawlessly. Every moment felt special.”",
    text: "From the moment we landed to the final drop-off, Avora Odyssey's service was exceptional. Our guide was incredibly knowledgeable, and the transport was extremely comfortable.",
    name: "– Jonathan Perera",
  },
  {
    heading: "Exceptional Service & Friendly Team",
    quote: "“We felt safe, relaxed, and well taken care of throughout the journey.”",
    text: "The team checked on us often and ensured every part of the itinerary was enjoyable. Highly recommended for anyone traveling through Sri Lanka!",
    name: "– Maria Fernandez",
  },
  {
    heading: "Best Tour Experience in Sri Lanka",
    quote: "“They exceeded our expectations. Worth every cent.”",
    text: "Amazing guides, clean vehicles, and a perfectly planned tour. Avora Odyssey provides a premium travel experience.",
    name: "– David Anderson",
  }
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % testimonials.length);
  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  // REF for parallax container
  const ref = useRef(null);

  // useScroll instead of deprecated useViewportScroll
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], 
  });

  // FIXED: Move background image upward (negative value) and make it larger
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);
  
  // Scale up to ensure it covers the entire area
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);

  return (
    <section ref={ref} className="relative h-screen w-full overflow-hidden flex items-center justify-center" id="testimonials">

      {/* Parallax Background Image - FIXED: Make image larger than container */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute inset-0"
          style={{
            y: bgY,
            scale: bgScale,
            backgroundImage: "url('/testimonials/bg.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "130%", // Make it taller than container
            width: "100%",
            top: "-15%", // Start positioned higher
          }}
        />
      </div>

      {/* Alternative: Even simpler fix - just use scale without translate */}
      {/* <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            scale: useTransform(scrollYProgress, [0, 1], [1, 1.15]),
            backgroundImage: "url('/testimonials/bg.jpg')",
          }}
        />
      </div> */}

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative max-w-4xl mx-auto text-center px-6 md:px-12 text-white">

        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold mb-16 drop-shadow-lg">
          What Our Travelers Say
        </h2>

        {/* Slider Wrapper */}
        <div className="relative flex items-center justify-center">

          {/* Left Arrow - LARGER CLICKABLE AREA */}
          <button
            onClick={prev}
            className="absolute left-0 md:left-[-80px] z-10 p-4 hover:bg-white/10 rounded-full transition-all duration-200"
            aria-label="Previous testimonial"
          >
            <div className="flex items-center justify-center w-12 h-12">
              <svg 
                width="32" 
                height="32" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="text-white hover:text-white/80 transition-colors"
              >
                <path 
                  d="M15 6L9 12L15 18" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </button>

          {/* Slide Container */}
          <div className="w-full max-w-3xl h-[380px] flex items-center justify-center overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ x: 80, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -80, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="px-4"
              >
                <h3 className="text-2xl md:text-3xl font-bold mb-4 drop-shadow-md">
                  {testimonials[index].heading}
                </h3>

                <p className="text-xl italic text-white/90 mb-4 drop-shadow-md">
                  {testimonials[index].quote}
                </p>

                <p className="text-white/80 leading-relaxed mb-6 drop-shadow-sm">
                  {testimonials[index].text}
                </p>

                <p className="text-white font-semibold text-lg drop-shadow-sm">{testimonials[index].name}</p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Arrow - LARGER CLICKABLE AREA */}
          <button
            onClick={next}
            className="absolute right-0 md:right-[-80px] z-10 p-4 hover:bg-white/10 rounded-full transition-all duration-200"
            aria-label="Next testimonial"
          >
            <div className="flex items-center justify-center w-12 h-12">
              <svg 
                width="32" 
                height="32" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="text-white hover:text-white/80 transition-colors"
              >
                <path 
                  d="M9 6L15 12L9 18" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </button>

        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center items-center space-x-3 mt-12">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i === index 
                  ? "bg-white w-8" 
                  : "bg-white/50 hover:bg-white/70"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}