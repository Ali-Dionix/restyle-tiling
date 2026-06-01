"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Contact & Quote",
    description:
      "Get in touch with your project details. We'll discuss your requirements, provide advice, and give you a clear, honest quote.",
  },
  {
    number: "02",
    title: "Site Review",
    description:
      "We check measurements, assess surface conditions, and confirm tile requirements so everything is planned accurately before work begins.",
  },
  {
    number: "03",
    title: "Preparation & Installation",
    description:
      "Surfaces are properly prepared, tiles are carefully cut and aligned, and installation is carried out with precision and care.",
  },
  {
    number: "04",
    title: "Finishing & Clean-Up",
    description:
      "Grouting, silicone finishing, final quality checks, and a thorough clean-up — leaving you with a polished, ready-to-use space.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-orange" />
            <span className="text-[13px] font-semibold text-orange tracking-widest uppercase">
              Our Process
            </span>
            <div className="w-8 h-[2px] bg-orange" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy">
            How We Work
          </h2>
          <p className="mt-4 text-[16px] text-grey-dark leading-relaxed">
            From first contact to final handover, every step is handled with
            professionalism and care.
          </p>
        </motion.div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute top-8 left-0 right-0 h-[2px] bg-grey-light/50" />
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              className="absolute top-8 left-0 right-0 h-[2px] bg-gradient-to-r from-orange via-blue to-navy origin-left"
            />

            <div className="grid grid-cols-4 gap-8">
              {steps.map((step, i) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 + 0.3, duration: 0.5 }}
                  className="relative text-center"
                >
                  {/* Number circle */}
                  <div className="relative z-10 w-16 h-16 mx-auto rounded-full bg-white border-[3px] border-orange flex items-center justify-center mb-6 shadow-sm">
                    <span className="text-[18px] font-extrabold text-orange">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="text-[17px] font-bold text-navy mb-2">
                    {step.title}
                  </h3>
                  <p className="text-[14px] text-grey-dark leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Stacked Cards */}
        <div className="lg:hidden space-y-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="flex gap-5"
            >
              {/* Left: number + line */}
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-orange text-white flex items-center justify-center flex-shrink-0">
                  <span className="text-[15px] font-extrabold">{step.number}</span>
                </div>
                {i < steps.length - 1 && (
                  <div className="w-[2px] flex-1 bg-gradient-to-b from-orange/40 to-grey-light/30 mt-2" />
                )}
              </div>
              {/* Right: content */}
              <div className="pb-6">
                <h3 className="text-[16px] font-bold text-navy mb-1">
                  {step.title}
                </h3>
                <p className="text-[14px] text-grey-dark leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
