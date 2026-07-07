"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{
        opacity: 0,
        scale: 1.08,
        filter: "blur(10px)",
      }}
      transition={{
        duration: 1.3,
        ease: "easeInOut",
      }}
      className="fixed inset-0 z-9999 flex items-center justify-center overflow-hidden bg-linear-to-br from-pink-50 via-white to-rose-50"
    >
      {/* Background Glow */}

      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.25, 0.45, 0.25],
        }}
        transition={{
          repeat: Infinity,
          duration: 3,
          ease: "easeInOut",
        }}
        className="absolute h-80 w-80 rounded-full bg-pink-200 blur-3xl"
      />

      {/* Decorative Circle */}

      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          repeat: Infinity,
          duration: 18,
          ease: "linear",
        }}
        className="absolute flex h-60 w-60 items-center justify-center rounded-full border border-pink-200"
      >
        <Sparkles className="absolute -top-3 text-pink-400" />
        <Sparkles className="absolute -bottom-3 text-pink-300" />
        <Sparkles className="absolute -left-3 text-pink-300" />
        <Sparkles className="absolute -right-3 text-pink-400" />
      </motion.div>

      {/* Content */}

      <div className="relative z-10 text-center">
        <motion.h1
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{
            scale: 1,
            opacity: 1,
          }}
          transition={{
            duration: 0.8,
          }}
          className="text-6xl font-bold tracking-wide text-pink-500"
        >
          Shreengar
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.4,
            duration: 0.6,
          }}
          className="mt-4 tracking-[0.35em] text-gray-600 uppercase"
        >
          Beauty • Elegance • Confidence
        </motion.p>

        {/* Loading Dots */}

        <div className="mt-12 flex justify-center gap-3">
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              animate={{
                y: [0, -10, 0],
                opacity: [0.4, 1, 0.4],
              }}
              transition={{
                repeat: Infinity,
                duration: 0.8,
                delay: index * 0.2,
              }}
              className="h-3 w-3 rounded-full bg-pink-400"
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
