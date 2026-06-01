"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Gallery", href: "/#gallery" },
  { label: "Process", href: "/#process" },
  { label: "Contact", href: "/#contact" },
];

const servicesList = [
  { label: "Wall Tiling", href: "/services/wall-tiling", desc: "Bathrooms, kitchens, splashbacks & feature walls" },
  { label: "Floor Tiling", href: "/services/floor-tiling", desc: "Porcelain, large format & underfloor heating" },
  { label: "Bathroom Tiling", href: "/services/bathroom-tiling", desc: "Waterproof tanking, shower walls & wetrooms" },
  { label: "Kitchen Tiling", href: "/services/kitchen-tiling", desc: "Splashbacks, socket cutouts & grease-proofing" },
  { label: "Tile Repairs", href: "/services/tile-repairs", desc: "Replacing cracked tiles and grout repairs" },
  { label: "Grouting & Finishing", href: "/services/grouting-finishing", desc: "Grout raking, silicone seals & polish" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isServicesMobileOpen, setIsServicesMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-[0_1px_3px_rgba(9,43,79,0.08)]"
          : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/restyle-logo.png"
              alt="Restyle Wall & Floor Tiling"
              width={180}
              height={48}
              className="h-10 w-auto sm:h-12"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              if (link.label === "Services") {
                return (
                  <div
                    key={link.href}
                    className="relative py-2"
                    onMouseEnter={() => setIsServicesDropdownOpen(true)}
                    onMouseLeave={() => setIsServicesDropdownOpen(false)}
                  >
                    <Link
                      href="/#services"
                      className="flex items-center gap-1 relative px-4 py-1.5 text-[14px] font-medium text-navy hover:text-blue transition-colors duration-200 group"
                    >
                      Services
                      <svg
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          isServicesDropdownOpen ? "rotate-180 text-blue" : "text-navy group-hover:text-blue"
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-orange group-hover:w-6 transition-all duration-300" />
                    </Link>

                    <AnimatePresence>
                      {isServicesDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className="absolute left-1/2 -translate-x-1/2 top-full w-80 bg-white rounded-xl shadow-xl border border-grey-light/40 py-3 z-50 mt-1"
                        >
                          {servicesList.map((service) => (
                            <Link
                              key={service.href}
                              href={service.href}
                              className="block px-5 py-2.5 hover:bg-light transition-colors group/item text-left"
                            >
                              <span className="block text-[14px] font-bold text-navy group-hover/item:text-orange transition-colors">
                                {service.label}
                              </span>
                              <span className="block text-[11px] text-grey-dark leading-tight mt-0.5 font-light">
                                {service.desc}
                              </span>
                            </Link>
                          ))}
                          <div className="border-t border-grey-light/20 mt-2 pt-2 px-5 text-center">
                            <Link
                              href="/#services"
                              className="inline-flex items-center gap-1.5 text-[12px] font-bold text-orange hover:text-orange-light transition-colors"
                            >
                              View All Services
                              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                              </svg>
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative px-4 py-2 text-[14px] font-medium text-navy hover:text-blue transition-colors duration-200 group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-orange group-hover:w-6 transition-all duration-300" />
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+447889890122"
              className="flex items-center gap-2 text-[14px] font-medium text-navy hover:text-blue transition-colors"
            >
              <svg
                className="w-4 h-4 text-orange"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              +44 7889 890122
            </a>
            <Link
              href="/#contact"
              className="inline-flex items-center px-5 py-2.5 bg-orange text-white text-[13px] font-semibold rounded-md hover:bg-orange-light transition-all duration-200 shadow-sm hover:shadow-md"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="lg:hidden relative w-10 h-10 flex items-center justify-center text-navy"
            aria-label="Toggle menu"
          >
            <div className="w-6 flex flex-col gap-[5px]">
              <span
                className={`block h-[2px] bg-navy transition-all duration-300 origin-center ${
                  isMobileOpen ? "rotate-45 translate-y-[7px]" : ""
                }`}
              />
              <span
                className={`block h-[2px] bg-navy transition-all duration-300 ${
                  isMobileOpen ? "opacity-0 scale-x-0" : ""
                }`}
              />
              <span
                className={`block h-[2px] bg-navy transition-all duration-300 origin-center ${
                  isMobileOpen ? "-rotate-45 -translate-y-[7px]" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden bg-white border-t border-grey-light/40"
          >
            <div className="px-4 py-6 space-y-1">
              {navLinks.map((link, i) => {
                if (link.label === "Services") {
                  return (
                    <div key={link.href} className="block">
                      <button
                        onClick={() => setIsServicesMobileOpen(!isServicesMobileOpen)}
                        className="w-full text-left px-4 py-3 flex items-center justify-between text-[15px] font-medium text-navy hover:text-blue hover:bg-light rounded-lg transition-colors"
                      >
                        <span>{link.label}</span>
                        <svg
                          className={`w-4 h-4 text-navy transition-transform duration-200 ${
                            isServicesMobileOpen ? "rotate-180 text-blue" : ""
                          }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2.5}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>

                      <AnimatePresence initial={false}>
                        {isServicesMobileOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="pl-6 pr-4 space-y-1 bg-light/50 rounded-lg overflow-hidden"
                          >
                            {servicesList.map((service) => (
                              <Link
                                key={service.href}
                                href={service.href}
                                onClick={() => setIsMobileOpen(false)}
                                className="block px-4 py-2.5 text-[14px] font-medium text-grey-dark hover:text-orange transition-colors"
                              >
                                {service.label}
                              </Link>
                            ))}
                            <Link
                              href="/#services"
                              onClick={() => setIsMobileOpen(false)}
                              className="block px-4 py-2.5 text-[14px] font-bold text-orange hover:text-orange-light transition-colors"
                            >
                              View All Services
                            </Link>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 + 0.1 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileOpen(false)}
                      className="block px-4 py-3 text-[15px] font-medium text-navy hover:text-blue hover:bg-light rounded-lg transition-colors"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
              <div className="pt-4 border-t border-grey-light/40 space-y-3">
                <a
                  href="tel:+447889890122"
                  className="flex items-center gap-3 px-4 py-3 text-[15px] font-medium text-navy"
                >
                  <svg
                    className="w-5 h-5 text-orange"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  +44 7889 890122
                </a>
                <Link
                  href="/#contact"
                  onClick={() => setIsMobileOpen(false)}
                  className="block text-center px-5 py-3 bg-orange text-white text-[15px] font-semibold rounded-md hover:bg-orange-light transition-colors"
                >
                  Get a Quote
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
