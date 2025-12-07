"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Function for smooth scrolling to sections
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  // Function to scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // All page sections
  const pageSections = [
    { name: "Home", id: "hero" },
    { name: "About", id: "about" },
    { name: "Services", id: "services" },
    { name: "Packages", id: "packages" },
    { name: "FAQ", id: "faq" },
    { name: "Testimonials", id: "testimonials" },
    { name: "Fleet", id: "fleet" },
    { name: "Partners", id: "partners" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <footer className="relative text-white overflow-hidden">
      {/* Night City Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('/night-city.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center 30%",
          backgroundRepeat: "no-repeat"
        }}
      />
      
      {/* Gradient Overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/85 to-black/70"></div>
      
      {/* Subtle blue tint for night atmosphere */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-purple-900/10"></div>

      {/* Background pattern (optional texture) */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.2) 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Main footer content */}
      <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="grid md:grid-cols-3 gap-12 md:gap-8">
          
          {/* Section 1: Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <button
                onClick={scrollToTop}
                className="text-2xl font-bold mb-2 hover:text-gray-300 transition-colors cursor-pointer text-left"
              >
                TravelCo
              </button>
              <p className="text-gray-300">Creating unforgettable journeys since 2010</p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="mt-1">
                  <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <p className="text-gray-300">
                  123 Galle Road<br />
                  Colombo 03, Sri Lanka
                </p>
              </div>

              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+94112345678" className="text-gray-300 hover:text-white transition-colors">
                  +94 11 234 5678
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:hello@travelco.com" className="text-gray-300 hover:text-white transition-colors">
                  hello@travelco.com
                </a>
              </div>
            </div>

            <p className="text-gray-400 text-sm pt-4 border-t border-gray-700">
              © {currentYear} TravelCo. All rights reserved.
            </p>
          </motion.div>

          {/* Section 2: Quick Links - 2 Column Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-8"
          >
            <div>
              <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
              <div className="grid grid-cols-2 gap-3">
                {pageSections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className="text-gray-300 hover:text-white transition-colors hover:pl-2 duration-300 text-left cursor-pointer py-1"
                  >
                    {section.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-gray-700">
              <div className="flex space-x-6">
                <Link 
                  href="/terms" 
                  className="text-gray-300 hover:text-white transition-colors text-sm cursor-pointer"
                >
                  Terms & Conditions
                </Link>
                <span className="text-gray-600">|</span>
                <Link 
                  href="/privacy" 
                  className="text-gray-300 hover:text-white transition-colors text-sm cursor-pointer"
                >
                  Privacy Policy
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Section 3: Social & Travel Inspiration */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h4 className="text-xl font-semibold mb-4">Follow Our Journey</h4>
              <p className="text-gray-300 mb-6">
                Join our community and discover travel inspiration from around Sri Lanka.
              </p>
              
              <div className="flex space-x-4">
                {[
                  { 
                    icon: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z', 
                    label: 'X (Twitter)' 
                  },
                  { 
                    icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z', 
                    label: 'Instagram' 
                  },
                  { 
                    icon: 'M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z', 
                    label: 'Facebook' 
                  },
                ].map((social) => (
                  <a
                    key={social.label}
                    href="#"
                    className="w-10 h-10 rounded-full bg-gray-800/50 backdrop-blur-sm flex items-center justify-center hover:bg-blue-600 transition-all duration-300 group border border-gray-700/50"
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="currentColor">
                      <path d={social.icon} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-xl bg-gray-900/50 backdrop-blur-sm border border-gray-700/50">
              <h5 className="font-semibold mb-3">Need Help Planning?</h5>
              <p className="text-gray-300 text-sm mb-4">
                Our travel experts are available 24/7 to help you create your perfect itinerary.
              </p>
              <a 
                href="tel:+94112345678" 
                className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors font-medium"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Now: +94 11 234 5678
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 pt-8 border-t border-gray-700 text-center text-gray-300 text-sm"
        >
          <p>
            Crafted with passion in Sri Lanka • Proud member of Sri Lanka Tourism Development Authority • License No: TRA/2023/1234
          </p>
        </motion.div>
      </div>
    </footer>
  );
}