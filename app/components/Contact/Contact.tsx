/* eslint-disable react/no-unescaped-entities */
"use client";

import { motion } from "framer-motion";
import ContactInfo from "./ContactInfo";
import BookingForm from "./BookingForm";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-linear-to-b from-pink-50 to-white py-28"
    >
      {/* Decorative Background */}

      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-pink-100/50 blur-[120px]" />

      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-rose-100/50 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="uppercase tracking-[0.35em] text-pink-500">
            Contact & Booking
          </p>

          <h2 className="mt-4 text-5xl font-bold text-gray-900">
            Let's Create Your Perfect Look
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Ready for your special day? Get in touch with us today to reserve
            your appointment. We're excited to be part of your beautiful
            journey.
          </p>
        </motion.div>

        {/* Contact + Form */}

        <div className="mt-20 grid gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <ContactInfo />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <BookingForm />
          </motion.div>
        </div>

        {/* Bottom Note */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-500">
            We usually respond to booking requests within{" "}
            <span className="font-semibold text-pink-500">
              24 hours
            </span>
            .
          </p>
        </motion.div>
      </div>
    </section>
  );
}