"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Loader from "./Loader";

interface PageLoaderProps {
  children: React.ReactNode;
}

export default function PageLoader({ children }: PageLoaderProps) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Lock scroll while loader is active
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      setLoading(false);
      // Reset scroll position and unlock
      window.scrollTo(0, 0);
      document.body.style.overflow = "";
    }, 2500);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <Loader key="loader" />}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, scale: 0.98, filter: "blur(8px)" }}
        animate={{
          opacity: loading ? 0 : 1,
          scale: loading ? 0.98 : 1,
          filter: loading ? "blur(8px)" : "blur(0px)",
        }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </>
  );
}