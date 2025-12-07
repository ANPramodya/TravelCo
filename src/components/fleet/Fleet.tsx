"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";

const faqs = [
  {
    q: "What types of vehicles are in the TravelCo fleet?",
    a: "Our fleet includes luxury buses, modern vans, comfortable SUVs, and cars—each maintained to the highest standards.",
  },
  {
    q: "Are your vehicles regularly inspected?",
    a: "Yes. Each vehicle undergoes frequent maintenance checks to ensure safety, reliability, and optimal performance.",
  },
  {
    q: "Do your vehicles come with professional drivers?",
    a: "Absolutely. All drivers are licensed, experienced, and trained for long-distance, city, and tourist routes.",
  },
  {
    q: "Is air-conditioning available in all vehicles?",
    a: "Yes, every vehicle in our fleet is fully air-conditioned for maximum comfort during your journey.",
  },
  {
    q: "Can I choose a vehicle type for my tour?",
    a: "Of course. You can select the vehicle based on group size, comfort preference, and tour itinerary.",
  },
];

export default function Fleet() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Use useScroll hook with the container as target
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
 
  // Move only the image INSIDE the frame (true parallax)
  const imgX = useTransform(scrollYProgress, [0, 1], ["0%", "75%"]);
  
  // Optional vertical movement (less intense)
  const imgY = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  return (
    <section ref={containerRef} id="fleet" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-gray-900">
          Your Journey, Our Fleet
        </h2>

        {/* Description */}
        <p className="text-center text-gray-700 max-w-5xl mx-auto mb-32 leading-relaxed text-lg">
          With professionally trained drivers, modern and well-maintained vehicles,
          and a strong emphasis on comfort and safety, TravelCo ensures smooth
          transportation for every part of your journey. Whether you're traveling
          as a couple or a large group, we provide reliable options tailored to
          your needs.
        </p>

        {/* Image + FAQ */}
        <div className="grid md:grid-cols-2 gap-20 items-start">

          {/* TRUE PARALLAX IMAGE (image moves, container stays) */}
          <div className="w-full h-[700px] rounded-3xl overflow-hidden shadow-2xl relative">
            {/* Extra container to ensure border radius stays during animation */}
            <div className="absolute inset-0 rounded-3xl overflow-hidden">
              <motion.div 
                className="absolute inset-0"
                style={{ 
                  y: imgY,
                  scale: useTransform(scrollYProgress, [0, 1], [1, 1.05])
                }}
              >
                <Image
                  src="/fleet/fleet.jpeg"
                  alt="TravelCo Fleet"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  style={{
                    // Use the MotionValue directly in style
                    objectPosition: imgX as any, // Type assertion to fix the TypeScript error
                  }}
                  priority
                />
              </motion.div>
            </div>
          </div>

          {/* FAQ */}
          <div className="space-y-6">
            {faqs.map((item, i) => (
              <Accordion key={i} q={item.q} a={item.a} />
            ))}
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
        className="w-full flex justify-between items-center p-6 text-left text-xl font-semibold text-gray-900 hover:bg-gray-50 transition-colors duration-200"
      >
        <span className="pr-4">{q}</span>
        <motion.span 
          className="text-xl min-w-6 flex items-center justify-center text-gray-500"
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          {/* Chevron/Arrow icon */}
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