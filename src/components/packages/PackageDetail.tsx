"use client";
import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Package } from '@/data/packages';

interface PackageDetailProps {
  packageData: Package;
}

export default function PackageDetail({ packageData }: PackageDetailProps) {
  const [expandedDay, setExpandedDay] = useState<number | null>(null);

  const toggleDay = (dayNumber: number) => {
    setExpandedDay(expandedDay === dayNumber ? null : dayNumber);
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="pt-20">
      {/* Banner Image */}
      <div className="relative h-[60vh] min-h-[500px] w-full">
        <Image
          src={packageData.bannerImage || packageData.image}
          alt={packageData.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
        
        {/* Banner Content */}
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <h1 className="text-4xl md:text-6xl font-bold">{packageData.title}</h1>
              <p className="text-xl md:text-2xl text-white/90">{packageData.caption}</p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-0.5 bg-white/60"></div>
                <span className="text-lg font-medium">{packageData.days}</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Description Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed italic">
              {packageData.description}
            </p>
            
            {/* Creative Inquire Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToContact}
              className="mt-12 px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-xl hover:shadow-2xl"
            >
              ✨ Start Your Adventure - Inquire Now ✨
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Itinerary - Expandable Tiles */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Your Journey Itinerary
          </h2>
          
          <div className="space-y-4">
            {packageData.itinerary.map((day) => (
              <motion.div
                key={day.day}
                layout
                className={`rounded-2xl overflow-hidden border transition-all duration-300 ${
                  expandedDay === day.day 
                    ? 'border-blue-300 bg-blue-50 shadow-lg' 
                    : 'border-gray-200 bg-white hover:border-gray-300'
                }`}
              >
                <button
                  onClick={() => toggleDay(day.day)}
                  className="w-full p-6 flex items-center justify-between text-left"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-2xl transition-all duration-300 ${
                      expandedDay === day.day 
                        ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white' 
                        : 'bg-gray-100 text-gray-700'
                    }`}>
                      {expandedDay === day.day ? '📅' : day.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">
                        Day {day.day}: {day.title}
                      </h3>
                      <p className={`text-sm mt-1 ${
                        expandedDay === day.day ? 'text-blue-600' : 'text-gray-500'
                      }`}>
                        {expandedDay === day.day ? 'Click to collapse' : 'Click to expand'}
                      </p>
                    </div>
                  </div>
                  
                  <motion.div
                    animate={{ rotate: expandedDay === day.day ? 180 : 0 }}
                    className="text-2xl text-gray-500"
                  >
                    ▼
                  </motion.div>
                </button>
                
                <AnimatePresence>
                  {expandedDay === day.day && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6"
                    >
                      <div className="pl-20 pr-4">
                        <p className="text-gray-700 leading-relaxed border-l-2 border-blue-400 pl-4 py-2">
                          {day.description}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Creative Gallery */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            What to Expect
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {packageData.gallery.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative h-64 rounded-xl overflow-hidden group"
              >
                <Image
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-sm font-medium">Memory {index + 1}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Inclusions & Exclusions */}
      <section className="py-16 px-6 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Package Details
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Inclusions */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                  <span className="text-green-600 text-xl">✓</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">What's Included</h3>
              </div>
              
              <ul className="space-y-3">
                {packageData.inclusions.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-green-500 mt-1">•</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Exclusions */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                  <span className="text-red-600 text-xl">✗</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">What's Not Included</h3>
              </div>
              
              <ul className="space-y-3">
                {packageData.exclusions.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-red-500 mt-1">•</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Final CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <button
              onClick={scrollToContact}
              className="inline-flex items-center gap-3 px-12 py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-full text-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-2xl hover:shadow-3xl hover:-translate-y-1"
            >
              <span>Ready to Book This Adventure?</span>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}