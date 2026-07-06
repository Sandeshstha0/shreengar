"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "#services" },
    { name: "Gallery", href: "#gallery" },
    { name: "About", href: "#about" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-transparent  mb-6">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">

        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-pink-400">
          xyz
        </Link>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-white transition hover:text-pink-400"
            >
              {item.name}
            </Link>
          ))}

          <button className="rounded-full bg-pink-300 px-6 py-3 font-medium text-white transition hover:bg-pink-400">
            Book Now
          </button>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden"
        >
          {open ? (
            <X className="h-7 w-7 text-pink-500" />
          ) : (
            <Menu className="h-7 w-7 text-pink-500" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="border-t border-pink-100 bg-white md:hidden">
          <div className="flex flex-col gap-5 p-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-gray-700 hover:text-pink-400"
              >
                {item.name}
              </Link>
            ))}

            <button className="rounded-full bg-pink-300 py-3 font-medium text-white">
              Book Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
}