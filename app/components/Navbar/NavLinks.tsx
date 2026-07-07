"use client";

import Link from "next/link";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

interface NavLinksProps {
  activeSection: string;
  onClick?: () => void;
  mobile?: boolean;
}

export default function NavLinks({
  activeSection,
  onClick,
  mobile = false,
}: NavLinksProps) {
  return (
    <nav
      className={
        mobile
          ? "flex flex-col gap-2"
          : "hidden items-center gap-8 lg:flex"
      }
    >
      {navItems.map((item) => {
        const isActive = activeSection === item.href.replace("#", "");

        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={onClick}
            className={`relative font-medium transition-all duration-300 ${
              isActive
                ? "text-pink-500"
                : "text-gray-700 hover:text-pink-500"
            } ${
              mobile
                ? "rounded-xl px-4 py-3 hover:bg-pink-50"
                : ""
            }`}
          >
            {item.label}

            {!mobile && (
              <span
                className={`absolute -bottom-2 left-0 h-0.5 rounded-full bg-pink-500 transition-all duration-300 ${
                  isActive ? "w-full" : "w-0"
                }`}
              />
            )}
          </Link>
        );
      })}
    </nav>
  );
}