"use client";

import { motion } from "framer-motion";
import { useRef } from "react";

interface MagneticProps {
  children: React.ReactNode;
  className?: string;
}

export default function Magnetic({
  children,
  className = "",
}: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const element = ref.current;

    if (!element) return;

    const rect = element.getBoundingClientRect();

    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    element.style.transform = `translate(${x * 0.18}px, ${y * 0.18}px)`;
  };

  const handleLeave = () => {
    if (!ref.current) return;

    ref.current.style.transform = "translate(0px,0px)";
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      transition={{
        type: "spring",
        stiffness: 180,
        damping: 18,
      }}
      className={`inline-block transition-transform duration-200 ${className}`}
    >
      {children}
    </motion.div>
  );
}