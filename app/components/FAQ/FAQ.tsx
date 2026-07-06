/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

import FAQItem from "./FAQItem";
import { faqs } from "./faqData";

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(1);

  const handleToggle = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="bg-white py-28">
      <div className="mx-auto max-w-5xl px-6">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="uppercase tracking-[0.35em] text-pink-500">
            Frequently Asked Questions
          </p>

          <h2 className="mt-4 text-5xl font-bold text-gray-900">
            Everything You Need to Know
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            We've answered the most common questions about our makeup services,
            booking process, and bridal packages.
          </p>
        </motion.div>

        {/* FAQ List */}

        <div className="mt-16 space-y-5">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: index * 0.08,
              }}
            >
              <FAQItem
                faq={faq}
                isOpen={openId === faq.id}
                onToggle={() => handleToggle(faq.id)}
              />
            </motion.div>
          ))}
        </div>

        {/* CTA */}

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 rounded-[32px] border border-pink-100 bg-pink-50 p-10 text-center"
        >
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-pink-500 text-white">
            <MessageCircle size={28} />
          </div>

          <h3 className="mt-6 text-3xl font-bold text-gray-900">
            Still Have Questions?
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            We'd love to help. Contact us for personalized advice, booking
            information, or to discuss your beauty requirements.
          </p>

          <a
            href="#contact"
            className="mt-8 inline-flex rounded-full bg-pink-500 px-8 py-4 text-lg font-semibold text-white transition hover:bg-pink-600"
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  );
}
