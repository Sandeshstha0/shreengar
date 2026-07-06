/* eslint-disable react/no-unescaped-entities */
"use client";

import Image from "next/image";
import { Quote, Star } from "lucide-react";
import { motion } from "framer-motion";
import { Testimonial } from "./testimonialData";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -8,
      }}
      transition={{
        duration: 0.3,
      }}
      className="relative overflow-hidden rounded-4xl border border-pink-100 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-2xl"
    >
      {/* Decorative Circle */}

      <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-pink-100/40 blur-3xl" />

      {/* Quote Icon */}

      <div className="absolute right-8 top-8">
        <Quote size={42} className="text-pink-200" />
      </div>

      {/* Client Image */}

      <div className="relative h-20 w-20 overflow-hidden rounded-full border-4 border-pink-100">
        <Image
          src={testimonial.image}
          alt={testimonial.name}
          fill
          className="object-cover"
        />
      </div>

      {/* Name */}

      <h3 className="mt-6 text-2xl font-semibold text-gray-900">
        {testimonial.name}
      </h3>

      <p className="mt-1 text-sm uppercase tracking-[0.25em] text-pink-500">
        {testimonial.role}
      </p>

      {/* Rating */}

      <div className="mt-5 flex gap-1">
        {Array.from({ length: testimonial.rating }).map((_, index) => (
          <Star
            key={index}
            size={18}
            className="fill-yellow-400 text-yellow-400"
          />
        ))}
      </div>

      {/* Review */}

      <p className="mt-6 leading-8 text-gray-600">"{testimonial.review}"</p>
      <div className="mt-4 inline-flex items-center rounded-full bg-pink-50 px-4 py-2 text-xs font-medium text-pink-600">
        ✓ Verified Client
      </div>
    </motion.div>
  );
}
