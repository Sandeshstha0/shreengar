"use client";

import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { PricingPackage } from "./pricingData";

interface PricingCardProps {
  plan: PricingPackage;
}

export default function PricingCard({ plan }: PricingCardProps) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      className={`relative flex h-full flex-col overflow-hidden rounded-[32px] border bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-2xl ${
        plan.popular
          ? "border-pink-400 ring-2 ring-pink-100"
          : "border-pink-100"
      }`}
    >
      {/* Most Popular Badge */}
      {plan.popular && (
        <div className="absolute right-5 top-5 rounded-full bg-pink-500 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white">
          Most Popular
        </div>
      )}

      {/* Package Name */}
      <h3 className="text-3xl font-bold text-gray-900">
        {plan.title}
      </h3>

      {/* Description */}
      <p className="mt-3 text-gray-500">
        {plan.description}
      </p>

      {/* Price */}
      <div className="mt-8">
        <span className="text-5xl font-bold text-pink-500">
          {plan.price}
        </span>
      </div>

      {/* Features */}
      <ul className="mt-8 flex-1 space-y-4">
        {plan.features.map((feature) => (
          <li
            key={feature}
            className="flex items-center gap-3"
          >
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-pink-100">
              <Check
                size={16}
                className="text-pink-500"
              />
            </div>

            <span className="text-gray-700">
              {feature}
            </span>
          </li>
        ))}
      </ul>

      {/* Button */}
      <button
        className={`mt-10 flex items-center justify-center gap-2 rounded-full px-6 py-4 font-semibold transition-all duration-300 ${
          plan.popular
            ? "bg-pink-500 text-white hover:bg-pink-600"
            : "border border-pink-300 text-pink-500 hover:bg-pink-50"
        }`}
      >
        <Sparkles size={18} />
        Book Now
      </button>
    </motion.div>
  );
}