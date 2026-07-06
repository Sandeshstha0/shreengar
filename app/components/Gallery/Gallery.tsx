/* eslint-disable react/no-unescaped-entities */
"use client";

import { useMemo, useState } from "react";
import GalleryItem from "./GalleryItem";
import GalleryFilter from "./galleryfilter";
import GalleryLightbox from "./GalleryLightbox";
import { galleryImages } from "./galleryData";
import { motion, AnimatePresence } from "framer-motion";

export default function Gallery() {
  const IMAGES_PER_PAGE = 6;

  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };
  // Filter images
  const filteredImages = useMemo(() => {
    if (selectedCategory === "All") return galleryImages;

    return galleryImages.filter((image) => image.category === selectedCategory);
  }, [selectedCategory]);
  const totalPages = Math.ceil(filteredImages.length / IMAGES_PER_PAGE);
  const paginatedImages = filteredImages.slice(
    (currentPage - 1) * IMAGES_PER_PAGE,
    currentPage * IMAGES_PER_PAGE,
  );

  // Close Lightbox
  const closeLightbox = () => {
    setCurrentIndex(null);
  };

  // Next Image
  const nextImage = () => {
    if (currentIndex === null) return;

    setCurrentIndex((currentIndex + 1) % paginatedImages.length);
  };

  // Previous Image
  const previousImage = () => {
    if (currentIndex === null) return;

    setCurrentIndex(
      (currentIndex - 1 + paginatedImages.length) % paginatedImages.length,
    );
  };

  return (
    <section id="gallery" className="bg-white py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="uppercase tracking-[0.35em] text-pink-400">
            Our Portfolio
          </p>

          <h2 className="mt-4 text-5xl font-bold text-gray-900">
            Beautiful Moments We've Created
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-500">
            Every client is unique. Explore our portfolio of bridal, engagement,
            party, and reception makeup.
          </p>
        </motion.div>

        {/* Filter */}

        <GalleryFilter
          selected={selectedCategory}
          onSelect={handleCategoryChange}
        />

        {/* Gallery */}

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            layout
            className="mt-16 columns-1 gap-6 sm:columns-2 lg:columns-3"
          >
            {paginatedImages.map((image, index) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.08,
                }}
                className="mb-6 break-inside-avoid"
              >
                <GalleryItem
                  {...image}
                  onClick={() => setCurrentIndex(index)}
                />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-16 flex items-center justify-center gap-3">
        <button
          onClick={() => setCurrentPage((page) => Math.max(page - 1, 1))}
          disabled={currentPage === 1}
          className="rounded-full border border-pink-200 px-5 py-2 transition hover:bg-pink-50 disabled:cursor-not-allowed disabled:opacity-40"
        >
          Previous
        </button>

        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={`h-11 w-11 rounded-full transition ${
              currentPage === index + 1
                ? "bg-pink-400 text-white shadow-lg"
                : "border border-pink-200 hover:bg-pink-50"
            }`}
          >
            {index + 1}
          </button>
        ))}

        <button
          onClick={() =>
            setCurrentPage((page) => Math.min(page + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          className="rounded-full border border-pink-200 px-5 py-2 transition hover:bg-pink-50 disabled:cursor-not-allowed disabled:opacity-40"
        >
          Next
        </button>
      </div>

      {/* Lightbox */}

      {currentIndex !== null && (
        <GalleryLightbox
          images={paginatedImages}
          currentIndex={currentIndex}
          onClose={closeLightbox}
          onNext={nextImage}
          onPrevious={previousImage}
        />
      )}
    </section>
  );
}
