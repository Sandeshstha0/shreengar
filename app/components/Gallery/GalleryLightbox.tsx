"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect } from "react";
import { GalleryImage } from "./galleryData";
import { motion, AnimatePresence } from "framer-motion";

interface GalleryLightboxProps {
  images: GalleryImage[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
}

export default function GalleryLightbox({
  images,
  currentIndex,
  onClose,
  onNext,
  onPrevious,
}: GalleryLightboxProps) {
  const image = images[currentIndex];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case "Escape":
          onClose();
          break;
        case "ArrowRight":
          onNext();
          break;
        case "ArrowLeft":
          onPrevious();
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [onClose, onNext, onPrevious]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-100 bg-black/90 backdrop-blur-sm"
      >
        {/* Existing lightbox content */}

        <div
          className="fixed inset-0 z-100 bg-black/90 backdrop-blur-sm"
          onClick={onClose}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute right-8 top-8 z-20 rounded-full bg-white p-3 transition hover:scale-110"
          >
            <X size={24} />
          </button>

          {/* Previous */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onPrevious();
            }}
            className="absolute left-6 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white p-4 transition hover:scale-110"
          >
            <ChevronLeft />
          </button>

          {/* Next */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            className="absolute right-6 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white p-4 transition hover:scale-110"
          >
            <ChevronRight />
          </button>

          {/* Image */}
          <div
            className="relative mx-auto flex h-full max-w-6xl items-center justify-center px-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-[85vh] w-full">
              <Image
                src={image.image}
                alt={image.title}
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Bottom Info */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center text-white">
            <p className="text-sm uppercase tracking-[0.3em] text-pink-300">
              {image.category}
            </p>

            <h2 className="mt-2 text-3xl font-semibold">{image.title}</h2>

            <p className="mt-3 text-gray-300">
              {currentIndex + 1} / {images.length}
            </p>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
