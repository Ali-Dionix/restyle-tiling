"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const categories = ["All", "Bathroom", "Kitchen", "Floor", "Wall"];

const galleryItems = [
  {
    src: "/images/gallery-bathroom-1.png",
    category: "Bathroom",
    alt: "Luxurious master bathroom wall and floor marble tiling with matching shower enclosure",
  },
  {
    src: "/images/gallery-kitchen-1.png",
    category: "Kitchen",
    alt: "Classic modern kitchen herringbone tiles backsplash",
  },
  {
    src: "/images/gallery-floor-1.png",
    category: "Floor",
    alt: "Seamless large format tiled floor in a modern open-plan living room",
  },
  {
    src: "/images/gallery-wall-1.png",
    category: "Wall",
    alt: "Clean white geometric wall tiling in a modern bathroom wetroom in progress",
  },
  {
    src: "/images/gallery-bathroom-2.png",
    category: "Bathroom",
    alt: "Beautiful mosaic border tiling and detailed vertical wall tiles",
  },
  {
    src: "/images/gallery-kitchen-2.png",
    category: "Kitchen",
    alt: "Modern white tiled kitchen backsplash and matching tiled kitchen island sides",
  },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-10"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-orange" />
            <span className="text-[13px] font-semibold text-orange tracking-widest uppercase">
              Our Work
            </span>
            <div className="w-8 h-[2px] bg-orange" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy">
            Recent Tiling Projects
          </h2>
          <p className="mt-4 text-[16px] text-grey-dark leading-relaxed">
            Take a look at some of our recent wall and floor tiling work across
            bathrooms, kitchens, and living spaces.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 text-[13px] font-semibold rounded-full border transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-navy text-white border-navy"
                  : "bg-white text-grey-dark border-grey-light/60 hover:border-navy/30 hover:text-navy"
              }`}
            >
              {cat} Tiling
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((item) => (
              <motion.div
                key={item.src}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
                className="group relative aspect-[4/3] bg-white rounded-xl overflow-hidden border border-grey-light/30 cursor-pointer shadow-sm hover:shadow-md transition-all duration-300"
              >
                {/* Real Image */}
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  unoptimized
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/60 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center p-4">
                    <div className="w-12 h-12 mx-auto rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-2">
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                    <span className="text-white text-[14px] font-bold block mb-1">{item.category} Tiling</span>
                    <span className="text-white/80 text-[12px] line-clamp-2 leading-tight">{item.alt}</span>
                  </div>
                </div>

                {/* Category badge */}
                <div className="absolute top-3 left-3 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-[11px] font-semibold text-navy">
                  {item.category}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
