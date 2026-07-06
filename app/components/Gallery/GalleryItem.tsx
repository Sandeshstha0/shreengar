"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

interface GalleryItemProps {
  title: string;
  category: string;
  image: string;
  height: string;
  onClick?: () => void;
}

export default function GalleryItem({
  title,
  category,
  image,
  height,
  onClick,
}: GalleryItemProps) {
  return (
    <motion.div
      whileHover={{
        y: -8,
      }}
      transition={{
        duration: 0.3,
      }}
      onClick={onClick}
      className={`group relative cursor-pointer overflow-hidden rounded-[32px] ${height}`}
    >
      {/* Image */}
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110"
      />

      {/* Soft Pink Overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/20 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

      {/* Top Badge */}
      <div className="absolute left-5 top-5 rounded-full bg-white/90 px-4 py-2 text-xs font-medium uppercase tracking-widest text-pink-500 opacity-0 backdrop-blur-md transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
        {category}
      </div>

      {/* Bottom Content */}
      <div className="absolute bottom-0 left-0 right-0 translate-y-8 p-6 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
        <h3 className="text-3xl font-semibold text-white">{title}</h3>

        <p className="mt-2 text-sm text-gray-200">
          Enhance your natural beauty with a flawless finish.
        </p>

        <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-pink-500 transition hover:bg-pink-100">
          View Look
          <ArrowUpRight
            size={18}
            className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </div>
      </div>
    </motion.div>
  );
}
