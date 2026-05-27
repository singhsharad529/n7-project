import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('overflow-hidden', mobileOpen);
    return () => { document.body.classList.remove('overflow-hidden'); };
  }, [mobileOpen]);

  const navLinks = [
    { label: 'Solutions', href: '#solutions', hasDropdown: true },
    { label: 'Resources', href: '#resources', hasDropdown: true },
    { label: 'About Us', href: '#about', hasDropdown: false },
  ];

  return (
    <>
      <motion.nav
        id="main-nav"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#08060d]/85 backdrop-blur-[16px] border-b border-n7-border'
            : 'bg-transparent backdrop-blur-none border-b border-transparent'
        }`}
      >
        <div className="max-w-[1240px] mx-auto px-8 h-[72px] flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            id="nav-logo"
            className="flex items-center gap-[2px] no-underline font-heading text-2xl font-bold text-n7-text tracking-[-0.02em]"
          >
            <svg width="24" height="23" viewBox="0 0 48 46" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M25.946 44.938c-.664.845-2.021.375-2.021-.698V33.937a2.26 2.26 0 0 0-2.262-2.262H10.287c-.92 0-1.456-1.04-.92-1.788l7.48-10.471c1.07-1.497 0-3.578-1.842-3.578H1.237c-.92 0-1.456-1.04-.92-1.788L10.013.474c.214-.297.556-.474.92-.474h28.894c.92 0 1.456 1.04.92 1.788l-7.48 10.471c-1.07 1.498 0 3.579 1.842 3.579h11.377c.943 0 1.473 1.088.89 1.83L25.947 44.94z" fill="#863bff"/>
            </svg>
            <span>N7</span>
          </a>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-9">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="nav-link"
                id={`nav-${link.label.toLowerCase().replace(/\s/g, '-')}`}
              >
                {link.label}
                {link.hasDropdown && <ChevronDown size={12} strokeWidth={2} />}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <a
            href="#request-demo"
            className="btn-outline hidden md:inline-flex px-[22px] py-2.5 text-[0.75rem]"
            id="nav-cta"
          >
            Request Demo
          </a>

          {/* Mobile hamburger */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex md:hidden bg-transparent border-none cursor-pointer p-2 z-[110] text-n7-text"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile overlay + panel */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 bg-[#08060d]/90 backdrop-blur-[8px] z-[90]"
            />
            <motion.div
              key="panel"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 26, stiffness: 220 }}
              className="fixed top-0 right-0 w-[min(320px,85vw)] h-full bg-n7-bg-light border-l border-n7-border z-100 p-6 flex flex-col"
            >
              <div className="mt-[72px] flex flex-col">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    className="nav-link py-4 text-[0.9375rem] border-b border-n7-border"
                    onClick={() => setMobileOpen(false)}
                    initial={{ x: 30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 + i * 0.06 }}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.35 }}
                className="mt-7"
              >
                <a
                  href="#request-demo"
                  className="btn-primary w-full text-center"
                  onClick={() => setMobileOpen(false)}
                >
                  Request Demo
                </a>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
