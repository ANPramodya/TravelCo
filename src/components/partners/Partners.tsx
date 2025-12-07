"use client";
import { motion } from "framer-motion";

const partners = [
  "/partners/partner1.jpg",
  "/partners/partner2.jpg",
  "/partners/partner3.jpg",
  "/partners/partner4.jpg",
  "/partners/partner5.jpg",
  "/partners/partner6.jpg",
];

export default function Partners() {
  return (
    <section className="py-24 bg-white" id="partners">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-gray-900">
          Trusted by Industry Leaders
        </h2>

        {/* Static Logo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-12">
          {partners.map((logo, i) => (
            <motion.div
              key={i}
              className="flex items-center justify-center p-4 opacity-70 hover:opacity-100 transition-opacity duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 0.7, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ 
                opacity: 1,
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
            >
              <img 
  src={logo} 
  alt={`Partner ${i + 1}`} 
  className="max-h-16 md:max-h-20 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300 rounded-3xl"
/>
            </motion.div>
          ))}
        </div>

        {/* Optional: Subtitle */}
        <p className="text-center text-gray-600 mt-12 text-lg">
          We partner with leading organizations to deliver exceptional travel experiences
        </p>

      </div>
    </section>
  );
}