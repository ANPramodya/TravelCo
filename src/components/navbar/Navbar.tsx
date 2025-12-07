"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Function to scroll to section smoothly
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Close mobile menu if open
      setOpen(false);
      // Smooth scroll to section
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

  // Only include the requested sections
  const menuLinks = [
    { name: "Packages", href: "packages" },
    { name: "FAQ", href: "faq" },
    { name: "Fleet", href: "fleet" },
    { name: "Contact", href: "contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-400 ${
        scrolled
          ? "bg-black/70 text-white backdrop-blur-md shadow-lg"
          : "bg-transparent text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo - Click to scroll to top */}
        <button
          onClick={scrollToTop}
          className="text-2xl font-bold hover:text-gray-300 transition-colors duration-200 cursor-pointer"
        >
          TravelCo
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-lg font-medium">
          {menuLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollToSection(link.href)}
              className="hover:text-gray-300 transition-colors duration-200 cursor-pointer"
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setOpen(!open)}
        >
          &#9776;
        </button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black/90 text-white shadow-lg px-6 py-4 space-y-4"
          >
            {menuLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="block text-lg font-medium hover:text-gray-300 transition-colors duration-200 w-full text-left cursor-pointer"
              >
                {link.name}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}