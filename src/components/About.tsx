"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const features = [
  {
    title: "Precision Installation",
    description: "Accurate tile alignment, even spacing, and clean cuts for a seamless result on every surface.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Clean Workmanship",
    description: "Tidy work areas, dust-free processes, and careful handling of every space we work in.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
  {
    title: "Durable Finishes",
    description: "Quality adhesives, grouts, and sealants for a long-lasting, water-resistant tiling finish.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-[2px] bg-orange" />
              <span className="text-[13px] font-semibold text-orange tracking-widest uppercase">
                About Restyle
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy leading-tight">
              Specialist Wall & Floor{" "}
              <span className="text-blue">Tiling Services</span>
            </h2>
            <p className="mt-6 text-[16px] text-grey-dark leading-relaxed">
              Restyle Wall & Floor Tiling provides clean, precise, and reliable
              tiling services for homes, bathrooms, kitchens, floors, and
              renovation projects. Every project is handled with attention to
              detail, from surface preparation to the final grout finish.
            </p>
            <p className="mt-4 text-[16px] text-grey-dark leading-relaxed">
              Whether it&apos;s a full bathroom transformation or a simple kitchen
              splashback, we deliver consistent results with a professional
              approach from start to finish.
            </p>
            <div className="mt-8 flex flex-wrap gap-6">
              <div className="flex items-center gap-2 text-[14px] font-medium text-navy">
                <svg className="w-5 h-5 text-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                Wall Tiling
              </div>
              <div className="flex items-center gap-2 text-[14px] font-medium text-navy">
                <svg className="w-5 h-5 text-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                Floor Tiling
              </div>
              <div className="flex items-center gap-2 text-[14px] font-medium text-navy">
                <svg className="w-5 h-5 text-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                Grouting & Finishing
              </div>
            </div>
          </motion.div>

          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-light shadow-lg border border-grey-light/30">
              <Image
                src="/images/about-tiling.png"
                alt="Luxury marble tiling installation in a modern master bathroom wetroom"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/30 via-transparent to-transparent" />
            </div>
            {/* Floating accent */}
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-orange/10 rounded-xl -z-10 animate-pulse" />
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-blue/10 rounded-xl -z-10" />
          </motion.div>
        </div>

        {/* Feature Cards */}
        <div className="grid sm:grid-cols-3 gap-6 mt-16">
          {features.map((feat, i) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="group p-6 bg-light rounded-xl border border-grey-light/30 hover:border-orange/30 hover:shadow-md transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-orange/10 text-orange flex items-center justify-center mb-4 group-hover:bg-orange group-hover:text-white transition-all duration-300">
                {feat.icon}
              </div>
              <h3 className="text-[17px] font-bold text-navy mb-2">{feat.title}</h3>
              <p className="text-[14px] text-grey-dark leading-relaxed">{feat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
