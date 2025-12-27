"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHomepage = pathname === "/";
  const isPackagesPage = pathname === "/all-packages";

  const handlePackagesClick = () => {
    if (isHomepage) {
      // On homepage, scroll to packages section
      const element = document.getElementById("packages");
      if (element) {
        setOpen(false);
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    } else if (!isPackagesPage) {
      // On other pages (not packages page), navigate to packages page
      window.location.href = "/all-packages";
    }
    // If already on packages page, do nothing or scroll to top
    setOpen(false);
  };

  const handleOtherLinksClick = (sectionId: string) => {
    if (isHomepage) {
      // On homepage, scroll to section
      const element = document.getElementById(sectionId);
      if (element) {
        setOpen(false);
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    } else {
      // On other pages, navigate to homepage with hash
      window.location.href = `/#${sectionId}`;
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const menuLinks = [
    { name: "FAQ", href: "faq" },
    { name: "Fleet", href: "fleet" },
    { name: "Contact", href: "contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/20 backdrop-blur-md shadow-lg text-white"
          : "bg-transparent text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo - Goes to homepage */}
        <Link 
          href="/"
          className="text-6xl font-lovers hover:text-gray-300 transition-colors duration-200 cursor-pointer text-white"
        >
          Avora Odyssey
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-lg font-medium">
          {/* Packages Link - Special handling */}
          <button
            onClick={handlePackagesClick}
            className={`hover:text-gray-300 transition-colors duration-200 cursor-pointer hover:scale-105 text-white ${
              isPackagesPage ? "opacity-60 cursor-default hover:scale-100" : ""
            }`}
            disabled={isPackagesPage}
          >
            Packages {isPackagesPage && "✓"}
          </button>
          
          {/* Other links */}
          {menuLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleOtherLinksClick(link.href)}
              className="hover:text-gray-300 transition-colors duration-200 cursor-pointer hover:scale-105 text-white"
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? "×" : "☰"}
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
            className="md:hidden bg-black/80 backdrop-blur-sm text-white shadow-lg px-6 py-4 space-y-4"
          >
            {/* Packages Link */}
            <button
              onClick={handlePackagesClick}
              className={`block text-lg font-medium hover:text-gray-300 transition-colors duration-200 w-full text-left cursor-pointer py-2 ${
                isPackagesPage ? "opacity-60" : ""
              }`}
              disabled={isPackagesPage}
            >
              Packages {isPackagesPage && "✓"}
            </button>
            
            {/* Other links */}
            {menuLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => {
                  handleOtherLinksClick(link.href);
                  setOpen(false);
                }}
                className="block text-lg font-medium hover:text-gray-300 transition-colors duration-200 w-full text-left cursor-pointer py-2"
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