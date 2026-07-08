"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";
import Image from "next/image";

import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700"],
});

const sections = [
  "home",
  "about",
  "services",
  "gallery",
  "testimonials",
  "pricing",
  "faq",
  "contact",
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  // Background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Detect active section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "-40% 0px -50% 0px",
        threshold: 0,
      },
    );

    sections.forEach((id) => {
      const element = document.getElementById(id);

      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-pink-100/70 bg-white/80 shadow-lg backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}

        <Link
          href="#home"
          className="flex items-center gap-1 sm:gap-2 text-xl sm:text-2xl md:text-3xl font-bold text-pink-500"
        >
          <Image
            src="/logo.png"
            alt="Shringar Logo"
            width={150}
            height={50}
            className="h-9 w-auto sm:h-11 md:h-14 object-contain rounded-full"
            priority
          />
          <h1 className={playfair.className}>Shreengar</h1>
        </Link>

        {/* Desktop Navigation */}

        <NavLinks activeSection={activeSection} />

        {/* CTA + Mobile */}

        <div className="flex items-center gap-4">
          <Link
            href="#contact"
            className="hidden rounded-full bg-pink-500 px-6 py-3 font-semibold text-white transition hover:bg-pink-600 lg:inline-flex"
          >
            Book Now
          </Link>

          <MobileMenu activeSection={activeSection} />
        </div>
      </div>
    </motion.header>
  );
}
