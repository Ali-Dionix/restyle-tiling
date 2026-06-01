"use client";

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="relative py-20 lg:py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-navy" />

      {/* Subtle tile pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Accent glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-orange/8 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 rounded-full mb-6">
            <span className="w-1.5 h-1.5 bg-orange rounded-full" />
            <span className="text-[12px] font-semibold text-white/80 tracking-widest uppercase">
              Get In Touch
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-white leading-tight">
            Need Professional Wall or{" "}
            <span className="text-orange">Floor Tiling?</span>
          </h2>

          <p className="mt-5 text-[17px] text-white/70 leading-relaxed max-w-2xl mx-auto">
            Speak with Restyle today and get a clean, reliable tiling service for
            your home or property. No fuss, no delays — just quality tiling work.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="tel:+447889890122"
              className="inline-flex items-center gap-2.5 px-8 py-4 bg-orange text-white text-[15px] font-semibold rounded-md hover:bg-orange-light transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              Call +44 7889 890122
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/30 text-white text-[15px] font-semibold rounded-md hover:bg-white hover:text-navy transition-all duration-200"
            >
              Request a Free Quote
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
