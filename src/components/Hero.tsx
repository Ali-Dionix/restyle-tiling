"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="relative w-full min-h-screen flex items-center overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/top-view-of-laying-ceramic-tiles-using-tools-and-a-2025-12-17-05-25-07-utc.mov" type="video/quicktime" />
        <source src="/top-view-of-laying-ceramic-tiles-using-tools-and-a-2025-12-17-05-25-07-utc.mov" type="video/mp4" />
      </video>

      {/* Overlay — lighter so video is prominent */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy/70 via-navy/45 to-navy/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy/30 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40 w-full">
        <div className="max-w-2xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 backdrop-blur-sm rounded-full mb-6"
          >
            <span className="w-2 h-2 bg-orange rounded-full" />
            <span className="text-[13px] font-semibold text-white tracking-wide uppercase">
              Wall & Floor Tiling Specialists
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold text-white leading-[1.1] tracking-tight"
          >
            Professional Wall &{" "}
            <span className="relative">
              Floor Tiling
              <span className="absolute bottom-1 left-0 w-full h-3 bg-orange/30 -z-10" />
            </span>{" "}
            Services
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 text-[17px] sm:text-lg text-white/80 leading-relaxed max-w-xl"
          >
            High-quality tiling solutions for bathrooms, kitchens, floors, and
            interior spaces. Clean workmanship, precise finishing, and reliable
            service from start to finish.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href="tel:+447889890122"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-orange text-white text-[15px] font-semibold rounded-md hover:bg-orange-light transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              <svg
                className="w-5 h-5"
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
              Call Now
            </a>
            <a
              href="#gallery"
              className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-white/40 text-white text-[15px] font-semibold rounded-md hover:bg-white hover:text-navy transition-all duration-200"
            >
              View Our Work
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </motion.div>

          {/* Phone Number */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-6 flex items-center gap-2 text-[14px] text-white/70"
          >
            <svg className="w-4 h-4 text-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            <span>
              Call us:{" "}
              <a href="tel:+447889890122" className="font-semibold text-white hover:text-orange transition-colors">
                +44 7889 890122
              </a>
            </span>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-1.5"
        >
          <div className="w-1.5 h-1.5 bg-white/50 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
