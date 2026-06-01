"use client";

import { motion } from "framer-motion";

const reviews = [
  {
    name: "Ghulam Bashir",
    initial: "G",
    color: "bg-[#795548]",
    subtitle: "Local Guide • 18 reviews • 1 photo",
    time: "A year ago",
    text: "Andy completed 40m2 project for my house, perfectionist all round! Andy was very thorough in what he required to complete the job, once the job started he was very considerate about his surroundings and very clean and tidy no mess to deal with afterwards! Tiling was on point!",
    isGuide: true,
  },
  {
    name: "Ian Davidson",
    initial: "I",
    color: "bg-[#F4511E]",
    subtitle: "6 reviews",
    time: "6 months ago",
    text: "What a pleasure to deal with someone so good at what they do and so personable as well! Andy replaced our bathroom floor grouting and the results are fantastic to say the least. He was quick to respond, quick to complete the job and the finish is superb.",
    isGuide: false,
  },
  {
    name: "Steven Whitehead",
    initial: "S",
    color: "bg-[#092B4F]",
    subtitle: "Local Guide • 38 reviews • 13 photos",
    time: "2 years ago",
    text: "Done business with Andy for years! Recommend him to anyone looking for tiling of all types, ceramic, porcelain and natural stone! ⭐⭐⭐⭐⭐",
    isGuide: true,
  },
  {
    name: "Iain Hazell",
    initial: "I",
    color: "bg-[#8E24AA]",
    subtitle: "5 reviews",
    time: "6 months ago",
    text: "Andy responded quickly to our enquiry and made an appointment promptly. Made a great job of the tiling work we needed doing.",
    isGuide: false,
  },
];

export default function GoogleReviews() {
  return (
    <section id="reviews" className="py-16 lg:py-24 bg-white border-b border-grey-light/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[2px] bg-orange" />
              <span className="text-[13px] font-semibold text-orange tracking-widest uppercase">
                Customer Feedback
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy leading-tight">
              Recommended On Google
            </h2>
            <p className="mt-4 text-[16px] text-grey-dark leading-relaxed">
              We take pride in delivering professional tiling results with clean, reliable service. Read what our customers write about our workmanship.
            </p>
          </motion.div>

          {/* Rating Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0 bg-light border border-grey-light/50 p-5 rounded-2xl flex items-center gap-4 shadow-sm md:self-center"
          >
            {/* Google G Logo */}
            <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center border border-grey-light/30">
              <svg className="w-7 h-7" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.53-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-8.17z"
                />
                <path
                  fill="#34A853"
                  d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.11 0-5.74-2.11-6.68-4.96H1.21v3.15C3.18 21.88 7.39 24 12 24z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.32 14.24A7.16 7.16 0 0 1 4.95 12c0-.79.13-1.57.37-2.31V6.54H1.21A11.977 11.977 0 0 0 0 12c0 1.92.45 3.74 1.21 5.46l4.11-3.22z"
                />
                <path
                  fill="#EA4335"
                  d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.39 0 3.18 2.12 1.21 5.46l4.11 3.22c.94-2.85 3.57-4.96 6.68-4.96z"
                />
              </svg>
            </div>
            <div>
              <div className="flex items-center gap-1">
                <span className="text-[18px] font-extrabold text-navy">5.0</span>
                <div className="flex text-amber-400">
                  {"★★★★★".split("").map((star, idx) => (
                    <span key={idx} className="text-[17px]">★</span>
                  ))}
                </div>
              </div>
              <span className="text-[12px] text-grey-dark font-medium">Google Customer Rating</span>
            </div>
          </motion.div>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {reviews.map((rev, idx) => (
            <motion.div
              key={rev.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="bg-light p-6 sm:p-8 rounded-2xl border border-grey-light/35 shadow-sm hover:shadow-md transition-shadow relative flex flex-col justify-between"
            >
              <div>
                {/* User Info Header */}
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div className="flex items-center gap-3">
                    {/* Circle Initial */}
                    <div className={`relative w-11 h-11 rounded-full flex items-center justify-center text-white text-[15px] font-bold ${rev.color} flex-shrink-0 shadow-sm`}>
                      {rev.initial}
                      {/* Local guide small badge overlay */}
                      {rev.isGuide && (
                        <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-orange rounded-full flex items-center justify-center border border-light">
                          <span className="text-white text-[9px]">★</span>
                        </div>
                      )}
                    </div>
                    <div>
                      <h3 className="text-[15px] font-bold text-navy flex items-center gap-1.5 leading-tight">
                        {rev.name}
                      </h3>
                      <span className="text-[11px] text-grey-dark block mt-0.5">
                        {rev.subtitle}
                      </span>
                    </div>
                  </div>

                  {/* Tiny Google Icon */}
                  <div className="w-5 h-5 opacity-40 hover:opacity-100 transition-opacity">
                    <svg viewBox="0 0 24 24" className="w-full h-full">
                      <path
                        fill="#4285F4"
                        d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.53-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-8.17z"
                      />
                      <path
                        fill="#34A853"
                        d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.11 0-5.74-2.11-6.68-4.96H1.21v3.15C3.18 21.88 7.39 24 12 24z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M5.32 14.24A7.16 7.16 0 0 1 4.95 12c0-.79.13-1.57.37-2.31V6.54H1.21A11.977 11.977 0 0 0 0 12c0 1.92.45 3.74 1.21 5.46l4.11-3.22z"
                      />
                      <path
                        fill="#EA4335"
                        d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.39 0 3.18 2.12 1.21 5.46l4.11 3.22c.94-2.85 3.57-4.96 6.68-4.96z"
                      />
                    </svg>
                  </div>
                </div>

                {/* Rating & Relative Time */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex text-amber-400">
                    {"★★★★★".split("").map((star, i) => (
                      <span key={i} className="text-[14px]">★</span>
                    ))}
                  </div>
                  <span className="text-[11px] text-grey-dark font-medium">{rev.time}</span>
                </div>

                {/* Review Text */}
                <p className="text-[14px] text-navy/80 leading-relaxed font-light">
                  &ldquo;{rev.text}&rdquo;
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call To Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 text-center"
        >
          <a
            href="https://share.google/5dCCiKUcriAwFkgdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 border-2 border-navy text-navy text-[14px] font-bold rounded-lg hover:bg-navy hover:text-white transition-all duration-200"
          >
            Check All Google Reviews
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </motion.div>

      </div>
    </section>
  );
}
