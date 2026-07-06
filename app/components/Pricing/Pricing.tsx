/* eslint-disable react/no-unescaped-entities */
"use client";

import { motion } from "framer-motion";
import PricingCard from "./PricingCard";
import { pricingPackages } from "./pricingData";

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="bg-linear-to-b from-pink-50 to-white py-28"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <p className="uppercase tracking-[0.35em] text-pink-500">
            Pricing Packages
          </p>

          <h2 className="mt-4 text-5xl font-bold text-gray-900">
            Choose Your Perfect Beauty Package
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            Whether you're preparing for your wedding, engagement, reception,
            or a special celebration, we have a package designed to make you
            look and feel your absolute best.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="mt-20 grid gap-8 lg:grid-cols-3">
          {pricingPackages.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
            >
              <PricingCard plan={plan} />
            </motion.div>
          ))}
        </div>

        {/* Custom Package CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-24 rounded-[40px] border border-pink-100 bg-white p-10 text-center shadow-lg"
        >
          <h3 className="text-3xl font-bold text-gray-900">
            Need a Custom Package?
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Every client is unique. If you have specific requirements, we'd
            love to create a personalized beauty package tailored just for you.
          </p>

          <button className="mt-8 rounded-full bg-pink-500 px-8 py-4 text-lg font-semibold text-white transition duration-300 hover:bg-pink-600">
            Get a Custom Quote
          </button>
        </motion.div>
      </div>
    </section>
  );
}