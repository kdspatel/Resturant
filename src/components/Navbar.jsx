import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import {
  Menu as MenuIcon,
  X,
  Instagram,
  Facebook,
  Twitter,
} from 'lucide-react';

import { NAV_LINKS } from '../constants';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // SMOOTH SCROLL FUNCTION
  const handleScrollToSection = (e, href) => {
    e.preventDefault();

    const section = document.querySelector(href);

    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }

    setIsMobileMenuOpen(false);
  };

  // FOOTER SCROLL (CONTACT US)
  const scrollToFooter = () => {
    const footer = document.querySelector('#footer');

    if (footer) {
      footer.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }

    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* NAVBAR */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? 'glass py-4 backdrop-blur-xl'
            : 'bg-transparent py-6 sm:py-8'
        }`}
      >
        <div className="w-full px-5 sm:px-8 lg:px-14 flex items-center justify-between">

          {/* LEFT NAV */}
          <div className="hidden md:flex gap-8 lg:gap-14 items-center text-[11px] lg:text-[12px] uppercase tracking-[0.22em] font-light">
            {NAV_LINKS.slice(0, 2).map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScrollToSection(e, link.href)}
                className="hover:opacity-50 transition-opacity duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* LOGO */}
          <a
            href="#home"
            onClick={(e) => handleScrollToSection(e, '#home')}
            className="text-xl sm:text-2xl lg:text-3xl tracking-[0.22em] font-light uppercase text-dark"
          >
            ELYSIAN
          </a>

          {/* RIGHT NAV */}
          <div className="hidden md:flex gap-8 lg:gap-14 items-center text-[11px] lg:text-[12px] uppercase tracking-[0.22em] font-light">
            {NAV_LINKS.slice(2).map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScrollToSection(e, link.href)}
                className="hover:opacity-50 transition-opacity duration-300"
              >
                {link.name}
              </a>
            ))}

            {/* CONTACT BUTTON -> FOOTER SCROLL */}
            <button
              onClick={scrollToFooter}
              className="ml-2 lg:ml-6 px-6 lg:px-10 py-3 border border-dark text-[10px] lg:text-[11px] uppercase tracking-[0.25em] hover:bg-dark hover:text-paper transition-all duration-300 whitespace-nowrap"
            >
              Contact Us
            </button>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="md:hidden text-dark p-2"
          >
            <MenuIcon size={28} />
          </button>
        </div>
      </motion.nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-paper flex flex-col items-center justify-center p-6 md:hidden"
          >
            {/* CLOSE BUTTON */}
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-6 right-6 text-gold p-2"
            >
              <X size={34} />
            </button>

            {/* LINKS */}
            <div className="flex flex-col items-center gap-6 text-center">
              <span className="text-[10px] uppercase tracking-[0.45em] text-gold font-bold mb-2">
                Navigation
              </span>

              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={(e) => handleScrollToSection(e, link.href)}
                  className="text-3xl sm:text-5xl font-serif italic text-dark hover:text-gold transition-colors duration-300"
                >
                  {link.name}
                </motion.a>
              ))}

              {/* MOBILE CONTACT BUTTON */}
              <button
                onClick={scrollToFooter}
                className="mt-6 px-8 py-3 border border-dark text-[11px] uppercase tracking-[0.25em] hover:bg-dark hover:text-paper transition-all duration-300"
              >
                Contact Us
              </button>
            </div>

            {/* SOCIAL ICONS */}
            <div className="mt-14 flex gap-6">
              <Instagram className="text-gold" size={26} />
              <Facebook className="text-gold" size={26} />
              <Twitter className="text-gold" size={26} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;