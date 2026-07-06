"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const brands = [
  { name: "MAC", logo: "/brands/mac.jpg" },
  { name: "Huda Beauty", logo: "/brands/huda.jpg" },
  { name: "NARS", logo: "/brands/nars.png" },
  { name: "Maybelline", logo: "/brands/maybelline.jpg" },
  { name: "Bobbi Brown", logo: "/brands/bobbi.jpg" },
  { name: "Lakmé", logo: "/brands/lakme.jpg" },
];

const doubledBrands = [...brands, ...brands];

export default function TrustedBrands() {
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const checkCenter = () => {
      const viewportCenter = window.innerWidth / 2;

      let closestIndex: number | null = null;
      let closestDistance = Infinity;

      itemRefs.current.forEach((el, i) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const cardCenter = rect.left + rect.width / 2;
        const distance = Math.abs(cardCenter - viewportCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = i;
        }
      });

      // Only count as "active" if it's genuinely near center,
      // not just the least-far card when all are off-screen
      if (closestDistance < 150) {
        setActiveIndex(closestIndex);
      } else {
        setActiveIndex(null);
      }

      rafRef.current = requestAnimationFrame(checkCenter);
    };

    rafRef.current = requestAnimationFrame(checkCenter);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <section className="bg-white py-20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="uppercase tracking-[0.35em] text-pink-400">
            Trusted Products
          </p>
          <h2 className="mt-3 text-4xl font-semibold text-gray-900">
            Premium Brands We Use
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-gray-500">
            We use only internationally trusted cosmetics
            to ensure flawless, long-lasting, and skin-friendly
            makeup for every client.
          </p>
        </div>
      </div>

      <div className="mt-16 relative w-full">
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-linear-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-linear-to-l from-white to-transparent" />

        <div className="flex w-max animate-marquee gap-10">
          {doubledBrands.map((brand, i) => {
            const isActive = activeIndex === i;

            return (
              <div
                key={`${brand.name}-${i}`}
                ref={(el) => {
                  itemRefs.current[i] = el;
                }}
                className={`flex h-28 w-40 shrink-0 items-center justify-center rounded-2xl border transition duration-300 ${
                  isActive
                    ? "-translate-y-2 border-pink-300 bg-white shadow-xl"
                    : "border-pink-100 bg-pink-50"
                }`}
              >
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  width={120}
                  height={60}
                  className={`object-contain transition duration-300 ${
                    isActive ? "opacity-100 grayscale-0" : "opacity-70 grayscale"
                  }`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}