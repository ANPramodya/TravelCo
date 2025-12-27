"use client";
import { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { packagesData, Package } from '@/data/packages';
import Footer from "@/components/footer/Footer"

// Category colors for consistent styling
const categoryColors: Record<Package['category'], string> = {
  Culture: 'bg-amber-500',
  Wildlife: 'bg-emerald-500',
  Adventure: 'bg-blue-500',
  Beach: 'bg-cyan-500',
  Family: 'bg-purple-500',
};

export default function AllPackagesPage() {
  const [selectedCategory, setSelectedCategory] = useState<Package['category'] | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter packages based on category and search
  const filteredPackages = useMemo(() => {
    return packagesData.filter(pkg => {
      const matchesCategory = selectedCategory === 'All' || pkg.category === selectedCategory;
      const matchesSearch = pkg.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           pkg.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           pkg.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Get all unique categories
  const categories = useMemo(() => {
    const uniqueCategories = Array.from(new Set(packagesData.map(pkg => pkg.category)));
    return ['All', ...uniqueCategories] as const;
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Parallax Hero Header */}
      <section className="relative min-h-[60vh] pt-34 pb-16 px-6 overflow-hidden">
        {/* Parallax Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/packages/all-packages-banner.jpg" // Add your banner image
            alt="Sri Lanka Packages Banner"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-purple-900/70 to-pink-900/60"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40"></div>
        </div>

        {/* Animated floating elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-64 h-64 rounded-full bg-gradient-to-r from-white/5 to-transparent blur-3xl"
              animate={{
                y: [0, 30, 0],
                x: [0, 20, 0],
              }}
              transition={{
                duration: 10 + i * 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                top: `${20 + i * 15}%`,
                left: `${10 + i * 20}%`,
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Discover Sri Lanka
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-10">
              Curated journeys through paradise islands, ancient kingdoms, and wild adventures
            </p>
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-2xl px-8 py-4 border border-white/20">
              <span className="text-3xl font-bold text-white">{packagesData.length}</span>
              <span className="text-lg text-white/90">Signature Experiences</span>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
          </div>
        </motion.div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 px-6 bg-white/80 backdrop-blur-sm border-b sticky top-0 z-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            {/* Search Input */}
            <div className="w-full md:w-auto md:flex-1">
              <div className="relative max-w-xl">
                <input
                  type="text"
                  placeholder="Search packages by name, description, or keyword..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-6 py-4 pl-14 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700 placeholder-gray-500 shadow-sm"
                />
                <div className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Category Filter */}
            <div className="w-full md:w-auto">
              <div className="flex flex-wrap gap-2 justify-center md:justify-end">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2.5 rounded-full transition-all duration-300 font-medium text-sm ${
                      selectedCategory === category
                        ? category === 'All'
                          ? 'bg-gray-800 text-white shadow-lg'
                          : `${categoryColors[category as Package['category']] || 'bg-gray-600'} text-white shadow-lg`
                        : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200 hover:border-gray-300 shadow-sm'
                    }`}
                  >
                    {category}
                    {category !== 'All' && (
                      <span className="ml-1.5 text-xs px-1.5 py-0.5 bg-white/20 rounded-full">
                        {packagesData.filter(p => p.category === category).length}
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Results Count */}
          <div className="mb-8 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-1 h-6 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
              <p className="text-gray-600">
                Showing <span className="font-bold text-gray-900">{filteredPackages.length}</span> of{' '}
                <span className="font-bold text-gray-900">{packagesData.length}</span> experiences
              </p>
            </div>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center gap-1"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
              Clear filters
            </button>
          </div>

          {filteredPackages.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-8xl mb-6">🌴</div>
              <h3 className="text-3xl font-bold text-gray-800 mb-3">No journeys found</h3>
              <p className="text-gray-600 max-w-md mx-auto mb-8">
                Try adjusting your search or filter to discover amazing Sri Lankan adventures.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('All');
                  setSearchQuery('');
                }}
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all duration-300"
              >
                Show All Packages
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPackages.map((pkg, index) => (
                <motion.div
                  key={pkg.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="group"
                >
                  <Link href={`/packages/${pkg.id}`}>
                    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col border border-gray-100">
                      {/* Image Container */}
                      <div className="relative h-64 overflow-hidden">
                        <Image
                          src={pkg.image}
                          alt={pkg.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                        
                        {/* Category Badge */}
                        <div className="absolute top-4 left-4">
                          <span className={`px-3 py-1.5 rounded-full text-xs font-bold text-white shadow-lg ${categoryColors[pkg.category]}`}>
                            {pkg.category}
                          </span>
                        </div>
                        
                        {/* Duration */}
                        <div className="absolute top-4 right-4">
                          <span className="px-3 py-1.5 bg-black/70 backdrop-blur-sm rounded-full text-sm font-bold text-white shadow-lg">
                            {pkg.days}
                          </span>
                        </div>
                        
                        {/* Title Overlay */}
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                          <h3 className="text-2xl font-bold text-white mb-1">{pkg.title}</h3>
                          <p className="text-white/90 text-sm">{pkg.subtitle}</p>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6 flex-1 flex flex-col">
                        {/* Description */}
                        <p className="text-gray-500 text-sm line-clamp-3 mb-4">
                          {pkg.description}
                        </p>

                        {/* Itinerary Highlights - IMPROVED */}
                        <div className="mt-auto pt-4 border-t border-gray-100">
                          <div className="flex items-center gap-2 mb-3">
                            <div className="w-4 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400"></div>
                            <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Journey Highlights</span>
                          </div>
                          <div className="space-y-2">
                            {pkg.itinerary.slice(0, 3).map((day) => (
                              <div 
                                key={day.day} 
                                className="flex items-start gap-3 p-2 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer group/item"
                                title={`Day ${day.day}: ${day.title} - ${day.description}`}
                              >
                                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center border border-blue-200">
                                  <span className="text-sm font-bold text-blue-600">{day.day}</span>
                                </div>
                                <div className="flex-1 min-w-0">
                                  <p className="text-sm font-medium text-gray-800 truncate">Day {day.day}: {day.title}</p>
                                  <p className="text-xs text-gray-500 truncate">{day.description.substring(0, 60)}...</p>
                                </div>
                              </div>
                            ))}
                            {pkg.itinerary.length > 3 && (
                              <div className="pt-2 text-center">
                                <span className="text-sm text-blue-600 font-medium hover:text-blue-700 transition-colors">
                                  + {pkg.itinerary.length - 3} more days
                                </span>
                              </div>
                            )}
                          </div>
                        </div>

                        {/* View Details Button */}
                        <div className="mt-6">
                          <button className="w-full px-4 py-3.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform group-hover:scale-[1.02] shadow-md hover:shadow-lg">
                            Explore This Journey
                            <svg className="w-4 h-4 inline-block ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}

          {/* Back to Home */}
          <div className="mt-16 text-center">
            <Link href="/">
              <button className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gray-100 to-gray-50 text-gray-700 font-semibold rounded-xl hover:from-gray-200 hover:to-gray-100 transition-all duration-300 border border-gray-200 shadow-sm">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Homepage
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full">
            <span className="text-blue-600 font-semibold">✨ Custom Experience</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Tailor Your Perfect Sri Lankan Adventure
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Can't find exactly what you're looking for? We specialize in creating bespoke itineraries that match your dreams and preferences.
          </p>
          <Link href="/contact">
            <button className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Create Custom Package
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </Link>
        </div>
      </section>

      {/* Add Footer */}
      <Footer />
    </main>
  );
}