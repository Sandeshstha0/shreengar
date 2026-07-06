/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable react/no-unescaped-entities */
"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { motion } from "framer-motion";

import TestimonialCard from "./TestimonialCard";
import { testimonials } from "./testimonialData";

export default function Testimonials() {
  const autoplay = Autoplay({
    delay: 4000,
    stopOnInteraction: false,
  });

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
    },
    [autoplay],
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    setScrollSnaps(emblaApi.scrollSnapList());

    emblaApi.on("select", onSelect);

    onSelect();
  }, [emblaApi]);

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-pink-50 py-28"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <p className="uppercase tracking-[0.35em] text-pink-500">
            Testimonials
          </p>

          <h2 className="mt-4 text-5xl font-bold text-gray-900">
            Loved by Our Beautiful Clients
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            Every smile tells a story. Here's what our wonderful clients say
            after trusting us with their special day.
          </p>
        </motion.div>

        <div className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 shadow-md">
          <div className="flex text-yellow-400">
            <Star className="fill-current" size={18} />
            <Star className="fill-current" size={18} />
            <Star className="fill-current" size={18} />
            <Star className="fill-current" size={18} />
            <Star className="fill-current" size={18} />
          </div>

          <span className="font-medium text-gray-700">
            4.9 Rating • 200+ Happy Clients
          </span>
        </div>
        {/* Carousel */}

        <div className="relative mt-20">
          {/* Previous */}

          {/* Previous */}
          <button
            onClick={scrollPrev}
            className="absolute left-1 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-xl transition-all duration-300 hover:scale-110 hover:bg-pink-400 hover:text-white lg:left-0 lg:h-14 lg:w-14 lg:-translate-x-1/2"
          >
            <ChevronLeft />
          </button>

          {/* Next */}
          <button
            onClick={scrollNext}
            className="absolute right-1 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-xl transition-all duration-300 hover:scale-110 hover:bg-pink-400 hover:text-white lg:right-0 lg:h-14 lg:w-14 lg:translate-x-1/2"
          >
            <ChevronRight />
          </button>

          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="min-w-0 flex-[0_0_100%] px-4 md:flex-[0_0_50%] xl:flex-[0_0_33.333%]"
                >
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex justify-center gap-3">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              className={`h-3 rounded-full transition-all duration-300 ${
                index === selectedIndex
                  ? "w-10 bg-pink-400"
                  : "w-3 bg-pink-200 hover:bg-pink-300"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="mt-20 rounded-[40px] bg-white p-12 text-center shadow-xl">
        <h3 className="text-4xl font-bold text-gray-900">
          Ready to Be Our Next Happy Client?
        </h3>

        <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-600">
          Whether it's your wedding, engagement, reception, or party, we'd love
          to help you look and feel your absolute best.
        </p>

        <button className="mt-8 rounded-full bg-pink-500 px-10 py-4 text-lg font-semibold text-white transition hover:bg-pink-600">
          Reserve Your Bridal Experience ✨
        </button>
      </div>

      <div className="absolute left-0 top-32 h-72 w-72 rounded-full bg-pink-100 blur-[120px]" />

      <div className="absolute right-0 bottom-20 h-80 w-80 rounded-full bg-rose-100 blur-[150px]" />
    </section>
  );
}
