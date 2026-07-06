"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Minus, Plus } from "lucide-react";
import { FAQ } from "./faqData";

interface FAQItemProps {
  faq: FAQ;
  isOpen: boolean;
  onToggle: () => void;
}

export default function FAQItem({
  faq,
  isOpen,
  onToggle,
}: FAQItemProps) {
  return (
    <div
      className={`overflow-hidden rounded-3xl border transition-all duration-300 ${
        isOpen
          ? "border-pink-300 bg-pink-50/40 shadow-lg"
          : "border-gray-200 bg-white hover:border-pink-200 hover:shadow-md"
      }`}
    >
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between px-7 py-6 text-left"
        aria-expanded={isOpen}
        aria-controls={`faq-${faq.id}`}
      >
        <h3 className="pr-6 text-lg font-semibold text-gray-900">
          {faq.question}
        </h3>

        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-pink-100 text-pink-500">
          {isOpen ? <Minus size={18} /> : <Plus size={18} />}
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`faq-${faq.id}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              duration: 0.35,
              ease: "easeInOut",
            }}
            className="overflow-hidden"
          >
            <div className="border-t border-pink-100 px-7 pb-6 pt-5">
              <p className="leading-8 text-gray-600">
                {faq.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}