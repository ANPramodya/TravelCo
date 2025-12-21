"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useRef } from "react";

const faqs = [
  {
    q: "Best Time to Visit Sri Lanka",
    a: "Sri Lanka is a year-round destination. However, December to April is ideal for the south and west coasts, while May to September is best for the east coast.",
  },
  {
    q: "Is it Safe to Travel to Sri Lanka?",
    a: "Yes. Sri Lanka is safe for tourists. The locals are welcoming, and tourist areas are well-secured. As always, follow general safety precautions.",
  },
  {
    q: "Do I Need a Visa to Visit?",
    a: "Most visitors require an Electronic Travel Authorization (ETA) before entering Sri Lanka. It is a simple online process.",
  },
  {
    q: "What Should I Pack?",
    a: "Light clothing, sunscreen, sunglasses, flip-flops, mosquito repellent, and comfortable shoes for exploring. A light jacket for hill country is recommended.",
  },
  {
    q: "What Currency Is Used?",
    a: "Sri Lankan Rupee (LKR). Credit cards are accepted in hotels, restaurants, and shops. Cash is recommended for rural areas.",
  },
  {
    q: "Why Use a Travel Agency?",
    a: "A travel agency saves you time, gets better rates, and ensures a smooth itinerary tailored to your preferences.",
  },
];

export default function FAQ() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Parallax transform for image movement inside frame
  const imgOffset = useTransform(scrollYProgress, [0, 1], ["0%", "75%"]);

  return (
    <section ref={containerRef} id="faq" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-gray-900">
          Your Trip Questions, Answered
        </h2>

        {/* Description */}
        <p className="text-center text-gray-700 max-w-3xl mx-auto mb-16 leading-relaxed text-lg">
          Everything you need to know before planning your unforgettable trip to Sri Lanka.
          These are the most common questions travelers ask us.
        </p>

        {/* FAQ + Image */}
        <div className="grid md:grid-cols-2 gap-20 items-start">

          {/* FAQ - Left Side */}
          <div className="space-y-6">
            {faqs.map((item, i) => (
              <Accordion key={i} q={item.q} a={item.a} />
            ))}
          </div>

          {/* TRUE PARALLAX IMAGE - Right Side (image moves, container stays) */}
          <div className="w-full h-[700px] rounded-3xl overflow-hidden shadow-2xl relative">
            {/* Extra container to ensure border radius stays during animation */}
            <div className="absolute inset-0 rounded-3xl overflow-hidden">
              <motion.img
                src="/faq/faq-img.jpg"
                alt="Sri Lanka Travel"
                className="w-full h-full object-cover"
                style={{
                  objectPosition: imgOffset as any,
                  y: useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]),
                }}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function Accordion({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-2xl overflow-hidden shadow-sm bg-white border border-gray-100 hover:border-gray-200 transition-colors">

      {/* Question */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center p-6 text-left text-xl font-semibold text-gray-900 hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
      >
        <span className="pr-4">{q}</span>
        <motion.span 
          className="text-xl min-w-6 flex items-center justify-center text-gray-500"
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          {/* Chevron/Arrow icon (same as fleet) */}
          <svg 
            width="20" 
            height="20" 
            viewBox="0 0 20 20" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="transition-colors"
          >
            <path 
              d="M5 7.5L10 12.5L15 7.5" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </motion.span>
      </button>

      {/* Animated Answer */}
      <motion.div
        initial={false}
        animate={{
          height: open ? "auto" : 0,
          opacity: open ? 1 : 0,
        }}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <div className="px-6 pb-6 pt-2 text-gray-800 leading-relaxed text-lg border-t border-gray-100">
          {a}
        </div>
      </motion.div>

    </div>
  );
}