"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface Feature {
  title: string;
  description: string;
}

interface WhyUsItem {
  title: string;
  description: string;
}

interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

interface FAQ {
  question: string;
  answer: string;
}

interface ServiceData {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  category: string;
  features: Feature[];
  whyUs: WhyUsItem[];
  process: ProcessStep[];
  faqs: FAQ[];
}

interface ServicePageClientProps {
  service: ServiceData;
}

export default function ServicePageClient({ service }: ServicePageClientProps) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="bg-white min-h-screen pt-[72px]">
      {/* Hero Banner Section */}
      <section className="relative h-[400px] lg:h-[500px] flex items-center overflow-hidden bg-navy text-white">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={service.image}
            alt={service.title}
            fill
            priority
            className="object-cover opacity-35 scale-105"
            sizes="100vw"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-10" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            {/* Breadcrumbs */}
            <div className="flex items-center gap-2.5 mb-6 text-[13px] font-medium text-white/70">
              <Link href="/" className="hover:text-orange transition-colors">
                Home
              </Link>
              <svg className="w-3.5 h-3.5 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
              <Link href="/#services" className="hover:text-orange transition-colors">
                Services
              </Link>
              <svg className="w-3.5 h-3.5 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
              <span className="text-orange font-semibold">{service.category}</span>
            </div>

            {/* Title & Description */}
            <span className="inline-block px-3 py-1 bg-orange text-white text-[11px] font-bold uppercase tracking-wider rounded-md mb-4 shadow-sm">
              {service.category}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-[48px] font-extrabold leading-[1.1] mb-5">
              {service.title}
            </h1>
            <p className="text-[16px] sm:text-[18px] text-white/80 leading-relaxed max-w-2xl font-light">
              {service.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="py-16 lg:py-24 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10 lg:gap-14">
            
            {/* Left Content Column (2/3 width) */}
            <div className="lg:col-span-2 space-y-14 lg:space-y-20">
              
              {/* Introduction Details */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
                className="bg-white p-5 sm:p-8 md:p-10 rounded-2xl border border-grey-light/35 shadow-sm"
              >
                <h2 className="text-[22px] sm:text-[24px] font-extrabold text-navy mb-5 flex items-center gap-3">
                  <span className="w-1.5 h-7 bg-orange rounded-full" />
                  Service Overview
                </h2>
                <p className="text-[15px] sm:text-[16px] text-grey-dark leading-relaxed font-normal">
                  {service.description}
                </p>
              </motion.div>

              {/* What We Offer / Features */}
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <span className="w-1.5 h-7 bg-orange rounded-full" />
                  <h2 className="text-[22px] sm:text-[24px] font-extrabold text-navy">
                    What We Cover
                  </h2>
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  {service.features.map((feature, idx) => (
                    <motion.div
                      key={feature.title}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-60px" }}
                      transition={{ duration: 0.4, delay: idx * 0.05 }}
                      className="bg-white p-6 rounded-xl border border-grey-light/35 shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className="w-10 h-10 rounded-lg bg-orange/10 text-orange flex items-center justify-center mb-4">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h3 className="text-[17px] font-bold text-navy mb-2">{feature.title}</h3>
                      <p className="text-[14px] text-grey-dark leading-relaxed">{feature.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <span className="w-1.5 h-7 bg-orange rounded-full" />
                  <h2 className="text-[22px] sm:text-[24px] font-extrabold text-navy">
                    Why Choose Restyle for {service.category}
                  </h2>
                </div>
                <div className="grid sm:grid-cols-3 gap-6">
                  {service.whyUs.map((item, idx) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-60px" }}
                      transition={{ duration: 0.4, delay: idx * 0.05 }}
                      className="bg-white p-6 rounded-xl border border-grey-light/35 shadow-sm flex flex-col justify-between"
                    >
                      <div>
                        <div className="w-10 h-10 rounded-lg bg-blue/10 text-blue flex items-center justify-center mb-4">
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <h3 className="text-[15px] font-bold text-navy mb-2">{item.title}</h3>
                        <p className="text-[13px] text-grey-dark leading-relaxed">{item.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Tiling Installation Process */}
              <div className="space-y-8">
                <div className="flex items-center gap-3">
                  <span className="w-1.5 h-7 bg-orange rounded-full" />
                  <h2 className="text-[22px] sm:text-[24px] font-extrabold text-navy">
                    Our Installation Process
                  </h2>
                </div>
                <div className="relative ml-2 sm:ml-0 pl-6 sm:pl-8 border-l-2 border-orange/20 space-y-10 py-2">
                  {service.process.map((step, idx) => (
                    <motion.div
                      key={step.step}
                      initial={{ opacity: 0, x: -15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-80px" }}
                      transition={{ duration: 0.4, delay: idx * 0.05 }}
                      className="relative"
                    >
                      {/* Process step node */}
                      <span className="absolute -left-[41px] sm:-left-[49px] top-0 w-8 h-8 rounded-full bg-orange text-white text-[12px] font-bold flex items-center justify-center border-4 border-light shadow-sm">
                        {step.step}
                      </span>
                      <h3 className="text-[17px] font-bold text-navy mb-2 pt-0.5">{step.title}</h3>
                      <p className="text-[14px] text-grey-dark leading-relaxed max-w-2xl">{step.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* FAQs Accordion */}
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <span className="w-1.5 h-7 bg-orange rounded-full" />
                  <h2 className="text-[22px] sm:text-[24px] font-extrabold text-navy">
                    Frequently Asked Questions
                  </h2>
                </div>
                <div className="space-y-4">
                  {service.faqs.map((faq, idx) => (
                    <div
                      key={idx}
                      className="bg-white rounded-xl border border-grey-light/35 shadow-sm overflow-hidden"
                    >
                      <button
                        onClick={() => toggleFaq(idx)}
                        className="w-full text-left px-6 py-4 flex items-center justify-between gap-4 font-bold text-[15px] sm:text-[16px] text-navy hover:text-blue transition-colors duration-200"
                      >
                        <span>{faq.question}</span>
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-light flex items-center justify-center border border-grey-light/40 text-navy">
                          <svg
                            className={`w-3.5 h-3.5 transition-transform duration-300 ${
                              openFaqIndex === idx ? "rotate-180" : ""
                            }`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2.5}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                          </svg>
                        </span>
                      </button>
                      
                      <AnimatePresence initial={false}>
                        {openFaqIndex === idx && (
                          <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: "auto" }}
                            exit={{ height: 0 }}
                            transition={{ duration: 0.25, ease: "easeInOut" }}
                          >
                            <div className="px-6 pb-5 pt-1 border-t border-grey-light/10 text-[14px] text-grey-dark leading-relaxed">
                              {faq.answer}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Sticky Column (1/3 width) */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                
                {/* Contact Card */}
                <div className="bg-navy text-white p-5 sm:p-8 rounded-2xl border border-navy-light shadow-lg relative overflow-hidden">
                  {/* Subtle decorative circles */}
                  <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-blue/15 pointer-events-none" />
                  <div className="absolute -bottom-10 -left-10 w-24 h-24 rounded-full bg-orange/10 pointer-events-none" />

                  <h3 className="text-[20px] font-bold mb-4">Request a Free Quote</h3>
                  <p className="text-[13px] text-white/70 leading-relaxed mb-6 font-light">
                    Have a tiling project in mind? Contact us today for a free site survey, layout advice, and a clear, no-obligation quote.
                  </p>

                  <div className="space-y-4">
                    {/* Call CTA */}
                    <a
                      href="tel:+447889890122"
                      className="flex items-center justify-center gap-3 w-full py-3.5 bg-orange text-white text-[14px] font-bold rounded-lg hover:bg-orange-light transition-all duration-200 hover:-translate-y-0.5 shadow-md"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      Call +44 7889 890122
                    </a>

                    {/* WhatsApp CTA */}
                    <a
                      href="https://wa.me/447889890122?text=Hello%20Restyle%20Tiling%2C%20I%20would%20like%20to%20get%20a%20quote%20for%20some%20tiling%20work."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-3 w-full py-3.5 bg-[#25D366] text-white text-[14px] font-bold rounded-lg hover:bg-[#20ba5a] transition-all duration-200 hover:-translate-y-0.5 shadow-md"
                    >
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.458L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.965C16.59 1.978 14.113.954 11.968.954c-5.445 0-9.87 4.373-9.874 9.803-.001 1.748.486 3.447 1.412 4.969L2.52 19.9l4.127-1.077c1.474.887 2.963 1.34 4.543 1.341z" />
                      </svg>
                      Chat on WhatsApp
                    </a>

                    {/* Online Enquiry */}
                    <Link
                      href="/#contact"
                      className="flex items-center justify-center w-full py-3.5 bg-white text-navy text-[14px] font-bold rounded-lg hover:bg-light transition-all duration-200 border border-white/20 shadow-sm"
                    >
                      Online Enquiry Form
                    </Link>
                  </div>

                  {/* Badges list */}
                  <div className="mt-8 pt-6 border-t border-white/10 space-y-3.5 text-[12px] text-white/80 font-normal">
                    <div className="flex items-center gap-3">
                      <svg className="w-4 h-4 text-orange flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                      <span>Fully Insured Workmanship</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <svg className="w-4 h-4 text-orange flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Prompt & Reliable Turnaround</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <svg className="w-4 h-4 text-orange flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                      <span>100% Satisfaction Guaranteed</span>
                    </div>
                  </div>
                </div>

                {/* Back to All Services Box */}
                <div className="bg-white p-6 rounded-xl border border-grey-light/35 shadow-sm text-center">
                  <h4 className="text-[14px] font-bold text-navy mb-2">Looking for something else?</h4>
                  <Link
                    href="/#services"
                    className="inline-flex items-center gap-1.5 text-[13px] font-bold text-orange hover:text-orange-light transition-colors"
                  >
                    View All Services
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
