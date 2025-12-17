"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const reasons = [
  {
    title: "24/7 Customer Support",
    desc: "Round-the-clock assistance ensuring your journey is seamless from start to finish.",
    icon: "/icons/support.svg",
    color: "from-blue-500 to-cyan-400",
  },
  {
    title: "Expert Local Guides",
    desc: "Passionate guides with deep cultural knowledge to enrich your experience.",
    icon: "/icons/guide.svg",
    color: "from-purple-500 to-pink-400",
  },
  {
    title: "Premium Transportation",
    desc: "Luxury vehicles with professional drivers for comfort and reliability.",
    icon: "/icons/bus.svg",
    color: "from-orange-500 to-yellow-400",
  },
  {
    title: "Tailored Experiences",
    desc: "Personalized itineraries crafted to match your unique travel style.",
    icon: "/icons/plan.svg",
    color: "from-green-500 to-emerald-400",
  },
  {
    title: "Local Insider Access",
    desc: "Exclusive access to hidden gems and authentic cultural experiences.",
    icon: "/icons/location.svg",
    color: "from-red-500 to-rose-400",
  },
  {
    title: "Safety First Approach",
    desc: "Comprehensive safety protocols ensuring worry-free exploration.",
    icon: "/icons/shield.svg",
    color: "from-indigo-500 to-violet-400",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-20"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-50/30 via-transparent to-transparent"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 mb-4"
          >
            <div className="w-12 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"></div>
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
              Our Services
            </span>
            <div className="w-12 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500"></div>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4"
          >
            Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Avora Odyssey</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-600 text-lg lg:text-xl max-w-3xl mx-auto"
          >
            Experience travel redefined with our premium services designed for the modern explorer
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {reasons.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.5, 
                delay: i * 0.1,
                ease: "easeOut"
              }}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.2 }
              }}
              className="group relative"
            >
              {/* Glassmorphism card */}
              <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl lg:rounded-3xl p-6 lg:p-8 border border-gray-200/50 shadow-sm hover:shadow-xl transition-all duration-300 hover:border-transparent">
                {/* Gradient accent */}
                <div className={`absolute inset-0 rounded-2xl lg:rounded-3xl bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                
                {/* Icon with gradient background */}
                <div className={`relative w-16 h-16 lg:w-20 lg:h-20 mb-6 rounded-2xl bg-gradient-to-br ${item.color} p-4 flex items-center justify-center shadow-lg`}>
                  <div className="w-full h-full relative">
                    <Image
                      src={item.icon}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 64px, 80px"
                      className="object-contain filter brightness-0 invert"
                    />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm lg:text-base leading-relaxed mb-6">
                  {item.desc}
                </p>

                {/* Learn more link */}
                <div className="flex items-center text-sm font-medium text-gray-500 group-hover:text-blue-600 transition-colors">
                  <span>Learn more</span>
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>

              {/* Floating decorative element */}
              <div className={`absolute -z-10 -top-2 -right-2 w-20 h-20 rounded-full bg-gradient-to-br ${item.color} opacity-10 blur-xl group-hover:opacity-20 transition-opacity duration-300`}></div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16 lg:mt-20"
        >
          <a 
            href="#contact" 
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:shadow-2xl shadow-lg hover:-translate-y-1 text-lg"
          >
            <span>Start Your Journey</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}