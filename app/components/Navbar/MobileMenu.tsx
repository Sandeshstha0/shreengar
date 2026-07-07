"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import NavLinks from "./NavLinks";

interface MobileMenuProps {
  activeSection: string;
}

export default function MobileMenu({
  activeSection,
}: MobileMenuProps) {
  const [open, setOpen] = useState(false);

  // Prevent body scroll while menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  return (
    <>
      {/* Hamburger Button */}

      <button
        onClick={() => setOpen(!open)}
        className="rounded-xl p-2 transition hover:bg-pink-50 lg:hidden"
        aria-label="Toggle Menu"
      >
        {open ? (
          <X size={28} className="text-pink-500" />
        ) : (
          <Menu size={28} className="text-gray-700" />
        )}
      </button>

      {/* Mobile Menu */}

      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm lg:hidden"
            />

            {/* Menu Panel */}

            <motion.div
              initial={{ y: -40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -40, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed left-4 right-4 top-24 z-50 rounded-3xl bg-white p-6 shadow-2xl lg:hidden"
            >
              <NavLinks
                mobile
                activeSection={activeSection}
                onClick={() => setOpen(false)}
              />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}