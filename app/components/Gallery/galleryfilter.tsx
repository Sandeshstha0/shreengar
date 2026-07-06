"use client";
import { motion } from "framer-motion";

interface GalleryFilterProps {
  selected: string;
  onSelect: (category: string) => void;
}

const categories = ["All", "Bridal", "Party", "Engagement", "Reception"];

export default function GalleryFilter({
  selected,
  onSelect,
}: GalleryFilterProps) {
  return (
    <div className="mt-12 flex flex-wrap justify-center gap-4">
      {categories.map((category) => (
        <motion.button
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{
            scale: 0.95,
          }}
          key={category}
          onClick={() => onSelect(category)}
          className={`rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 ${
            selected === category
              ? "bg-pink-400 text-white shadow-lg"
              : "border border-pink-200 bg-white text-gray-700 hover:bg-pink-50"
          }`}
        >
          {category}
        </motion.button>
      ))}
    </div>
  );
}
