"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Wall Tiling",
    slug: "wall-tiling",
    description:
      "For bathrooms, kitchens, splashbacks, feature walls, and interior wall surfaces.",
    image: "/images/wall-tiling.png",
  },
  {
    title: "Floor Tiling",
    slug: "floor-tiling",
    description:
      "For kitchens, bathrooms, hallways, utility areas, and open floor spaces.",
    image: "/images/floor-tiling.png",
  },
  {
    title: "Bathroom Tiling",
    slug: "bathroom-tiling",
    description:
      "Clean and water-resistant tiling finishes for modern bathroom spaces.",
    image: "/images/bathroom-tiling.png",
  },
  {
    title: "Kitchen Tiling",
    slug: "kitchen-tiling",
    description:
      "Splashbacks, wall tiles, and floor tiles designed for practical everyday use.",
    image: "/images/kitchen-tiling.png",
  },
  {
    title: "Tile Replacement & Repairs",
    slug: "tile-repairs",
    description:
      "Replace cracked, loose, or damaged tiles with a neat matching finish.",
    image: "/images/tile-repairs.png",
  },
  {
    title: "Grouting & Finishing",
    slug: "grouting-finishing",
    description:
      "Clean grout lines, silicone finishing, and final detailing for a professional result.",
    image: "/images/grouting-finishing.png",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-light">
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
              Our Services
            </span>
            <div className="w-8 h-[2px] bg-orange" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy">
            Professional Tiling Services
          </h2>
          <p className="mt-4 text-[16px] text-grey-dark leading-relaxed">
            We specialise in wall and floor tiling for residential and property
            projects. Every service is delivered with precision, care, and
            attention to detail.
          </p>
        </motion.div>

        {/* Service Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="group relative bg-white rounded-xl overflow-hidden border border-grey-light/40 hover:shadow-xl transition-all duration-400"
            >
              {/* Image */}
              <Link href={`/services/${service.slug}`} className="relative block h-52 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  unoptimized
                />
                {/* Gradient overlay at bottom of image */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-transparent" />
                
                {/* Category tag */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-[11px] font-bold text-navy uppercase tracking-wider">
                  {service.title.includes("Wall") ? "Wall" : service.title.includes("Floor") ? "Floor" : service.title.includes("Bathroom") ? "Bathroom" : service.title.includes("Kitchen") ? "Kitchen" : "Specialist"}
                </div>
              </Link>

              {/* Content */}
              <div className="p-6">
                {/* Orange accent line */}
                <div className="w-8 h-[3px] bg-orange rounded-full mb-4 group-hover:w-12 transition-all duration-300" />
                
                <h3 className="text-[18px] font-bold text-navy mb-2 group-hover:text-blue transition-colors duration-300">
                  <Link href={`/services/${service.slug}`}>
                    {service.title}
                  </Link>
                </h3>
                <p className="text-[14px] text-grey-dark leading-relaxed">
                  {service.description}
                </p>

                <Link
                  href={`/services/${service.slug}`}
                  className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-semibold text-orange group-hover:gap-3 transition-all duration-300 cursor-pointer"
                >
                  View Details
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
