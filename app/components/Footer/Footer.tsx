"use client";

import Link from "next/link";
import {
//   Instagram,
//   Facebook,
  Phone,
  Mail,
  MapPin,
  ChevronUp,
} from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative bg-[#1B1B1F] text-gray-300">
      {/* Top */}

      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-14 lg:grid-cols-4">
          {/* Brand */}

          <div>
            <h2 className="text-3xl font-bold text-white">
              Shringar
            </h2>

            <p className="mt-5 leading-8 text-gray-400">
              Enhancing your natural beauty with professional makeup artistry.
              We create elegant looks for weddings, engagements, parties, and
              every special occasion.
            </p>

            <div className="mt-8 flex gap-4">
              <a
                href="#"
                className="rounded-full bg-white/10 p-3 transition hover:bg-pink-500 hover:text-white"
              >
                {/* <Instagram size={20} />  */}
              </a>

              <a
                href="#"
                className="rounded-full bg-white/10 p-3 transition hover:bg-pink-500 hover:text-white"
              >
                {/* <Facebook size={20} /> */}
              </a>
            </div>
          </div>

          {/* Quick Links */}

          <div>
            <h3 className="text-xl font-semibold text-white">
              Quick Links
            </h3>

            <ul className="mt-6 space-y-4">
              {[
                "Home",
                "About",
                "Services",
                "Gallery",
                "Testimonials",
                "Pricing",
                "FAQ",
                "Contact",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href={`/#${item.toLowerCase()}`}
                    className="transition hover:text-pink-400"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}

          <div>
            <h3 className="text-xl font-semibold text-white">
              Our Services
            </h3>

            <ul className="mt-6 space-y-4">
              <li>Bridal Makeup</li>
              <li>Engagement Makeup</li>
              <li>Reception Makeup</li>
              <li>Party Makeup</li>
              <li>Hair Styling</li>
              <li>Photoshoot Makeup</li>
            </ul>
          </div>

          {/* Contact */}

          <div>
            <h3 className="text-xl font-semibold text-white">
              Contact
            </h3>

            <div className="mt-6 space-y-5">
              <div className="flex items-start gap-3">
                <Phone
                  size={18}
                  className="mt-1 text-pink-400"
                />
                <span>+977 98XXXXXXXX</span>
              </div>

              <div className="flex items-start gap-3">
                <Mail
                  size={18}
                  className="mt-1 text-pink-400"
                />
                <span>hello@shringar.com</span>
              </div>

              <div className="flex items-start gap-3">
                <MapPin
                  size={18}
                  className="mt-1 text-pink-400"
                />
                <span>Damauli, Nepal</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}

        <div className="my-12 border-t border-white/10" />

        {/* Bottom */}

        <div className="flex flex-col items-center justify-between gap-5 text-sm text-gray-400 md:flex-row">
          <p>
            © {new Date().getFullYear()} Shringar Makeup Studio. All rights
            reserved.
          </p>

          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="transition hover:text-pink-400"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="transition hover:text-pink-400"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll To Top */}

      <button
        onClick={scrollToTop}
        className="absolute bottom-8 right-8 rounded-full bg-pink-500 p-4 text-white shadow-lg transition hover:scale-110 hover:bg-pink-600"
      >
        <ChevronUp size={22} />
      </button>
    </footer>
  );
}