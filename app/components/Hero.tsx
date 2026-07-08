import HeroStats from "./HeroStats";
import { ArrowRight } from "lucide-react";
import { Playfair_Display, Great_Vibes } from "next/font/google";
import Image from "next/image";
import Magnetic from "./ui/Magnetic";

const playfair = Playfair_Display({
  subsets: ["latin"],
});

const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
});

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Background Video */}
      {/* <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover scale-110 animate-[slowZoom_20s_linear_infinite]"
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video> */}
      <Image
        src="/hero1.avif"
        alt="Shreengar hero background"
        fill
        priority
        className="object-cover scale-110 animate-[slowZoom_20s_linear_infinite]"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/35 to-black/10" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 sm:px-8 lg:px-10">
        <div className="max-w-5xl pt-24 md:pt-16">
          {/* Subtitle */}
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-pink-300 sm:text-sm">
            Enhance Your Natural Beauty
          </p>

          {/* Heading */}
          <h1
            className={`${playfair.className}
        text-4xl
        font-bold
        leading-tight
        text-white
        sm:text-5xl
        md:text-6xl
        lg:text-7xl
        xl:text-8xl`}
          >
            Make Every Moment
          </h1>

          {/* Script Heading */}
          <h2
            className={`${greatVibes.className}
        mt-2
        text-5xl
        text-pink-300
        sm:text-6xl
        md:text-7xl
        lg:text-8xl`}
          >
            More Beautiful
          </h2>

          {/* Description */}
          <p className="mt-6 max-w-xl text-base leading-7 text-gray-200 sm:text-lg sm:leading-8">
            Professional bridal, party, engagement and fashion makeup services
            designed to highlight your natural beauty and create unforgettable
            memories.
          </p>

          {/* Buttons */}
          <div className="mt-4 flex flex-col gap-4 sm:flex-row">
            <Magnetic>
              <button className="group flex items-center justify-center gap-2 rounded-full bg-pink-300 px-8 py-4 font-semibold text-white transition hover:bg-pink-400">
                Book Appointment
                <ArrowRight
                  size={18}
                  className="transition group-hover:translate-x-1"
                />
              </button>
            </Magnetic>
            <Magnetic>
              <button className="rounded-full border border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-black">
                View Gallery
              </button>
            </Magnetic>
          </div>

          {/* Stats */}
          <div className="mt-12">
            <HeroStats />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 animate-bounce md:block">
        <div className="flex h-12 w-7 items-start justify-center rounded-full border-2 border-white p-2">
          <div className="h-3 w-1 rounded-full bg-white" />
        </div>
      </div>
    </section>
  );
}
