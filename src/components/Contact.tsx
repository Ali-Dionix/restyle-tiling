"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const projectTypes = [
  "Wall Tiling",
  "Floor Tiling",
  "Bathroom Tiling",
  "Kitchen Tiling",
  "Tile Repairs",
  "Other Tiling Work",
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    projectType: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic here
    alert("Thank you! We'll be in touch shortly.");
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-light">
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
              Contact Us
            </span>
            <div className="w-8 h-[2px] bg-orange" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy">
            Get in Touch
          </h2>
          <p className="mt-4 text-[16px] text-grey-dark leading-relaxed">
            Ready to start your tiling project? Get in touch for a free quote
            or to discuss your requirements.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-14">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Phone */}
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-orange/10 text-orange flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-[15px] font-bold text-navy mb-1">Phone</h3>
                <a
                  href="tel:+447889890122"
                  className="text-[15px] text-blue hover:text-navy transition-colors font-medium"
                >
                  +44 7889 890122
                </a>
              </div>
            </div>

            {/* Website */}
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue/10 text-blue flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-[15px] font-bold text-navy mb-1">Website</h3>
                <span className="text-[15px] text-blue font-medium">
                  restyletiling.co.uk
                </span>
              </div>
            </div>

            {/* Service Area */}
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-navy/8 text-navy flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-[15px] font-bold text-navy mb-1">Service Area</h3>
                <p className="text-[14px] text-grey-dark">
                  Covering local and surrounding areas. Contact us to confirm availability for your location.
                </p>
              </div>
            </div>

            {/* Service Area Box */}
            <div className="p-6 bg-white rounded-xl border border-grey-light/40">
              <h3 className="text-[15px] font-bold text-navy mb-3 flex items-center gap-2">
                <svg className="w-4 h-4 text-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Quick Response
              </h3>
              <p className="text-[14px] text-grey-dark leading-relaxed">
                We aim to respond to all enquiries within 24 hours. Call us
                directly for the fastest response.
              </p>
              <a
                href="tel:+447889890122"
                className="mt-4 inline-flex items-center gap-2 text-[14px] font-semibold text-orange hover:text-navy transition-colors"
              >
                Call now →
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-xl border border-grey-light/40 p-8 shadow-sm"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                {/* Name */}
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-[13px] font-semibold text-navy mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="w-full px-4 py-3 border border-grey-light/60 rounded-lg text-[14px] text-dark placeholder:text-grey focus:outline-none focus:border-blue focus:ring-2 focus:ring-blue/10 transition-all"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="contact-phone"
                    className="block text-[13px] font-semibold text-navy mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your phone number"
                    required
                    className="w-full px-4 py-3 border border-grey-light/60 rounded-lg text-[14px] text-dark placeholder:text-grey focus:outline-none focus:border-blue focus:ring-2 focus:ring-blue/10 transition-all"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-[13px] font-semibold text-navy mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email"
                    className="w-full px-4 py-3 border border-grey-light/60 rounded-lg text-[14px] text-dark placeholder:text-grey focus:outline-none focus:border-blue focus:ring-2 focus:ring-blue/10 transition-all"
                  />
                </div>

                {/* Project Type */}
                <div>
                  <label
                    htmlFor="contact-project-type"
                    className="block text-[13px] font-semibold text-navy mb-2"
                  >
                    Project Type
                  </label>
                  <select
                    id="contact-project-type"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-grey-light/60 rounded-lg text-[14px] text-dark bg-white focus:outline-none focus:border-blue focus:ring-2 focus:ring-blue/10 transition-all appearance-none"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23A3A3A3'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E")`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "right 12px center",
                      backgroundSize: "16px",
                    }}
                  >
                    <option value="">Select a project type</option>
                    {projectTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Message */}
              <div className="mt-5">
                <label
                  htmlFor="contact-message"
                  className="block text-[13px] font-semibold text-navy mb-2"
                >
                  Project Details
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your tiling project — area size, tile preferences, timeline, etc."
                  rows={5}
                  className="w-full px-4 py-3 border border-grey-light/60 rounded-lg text-[14px] text-dark placeholder:text-grey focus:outline-none focus:border-blue focus:ring-2 focus:ring-blue/10 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="mt-6 w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-orange text-white text-[15px] font-semibold rounded-lg hover:bg-orange-light transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5"
              >
                Send Enquiry
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
