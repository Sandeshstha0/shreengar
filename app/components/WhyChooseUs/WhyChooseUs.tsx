import Image from "next/image";
import {
  BadgeCheck,
  Sparkles,
  Heart,
  ShieldCheck,
  Clock3,
  Home,
} from "lucide-react";

const features = [
  {
    icon: BadgeCheck,
    title: "Certified Artist",
  },
  {
    icon: Sparkles,
    title: "Premium Cosmetics",
  },
  {
    icon: ShieldCheck,
    title: "Hygienic Equipment",
  },
  {
    icon: Heart,
    title: "Customized Looks",
  },
  {
    icon: Clock3,
    title: "Long Lasting Makeup",
  },
  {
    icon: Home,
    title: "Home Service Available",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-[#FFF8FB] py-24">

      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">

        {/* Image */}

        <div className="relative h-[650px] overflow-hidden rounded-[40px]">

          <Image
            src="/why-us.jpg"
            alt=""
            fill
            className="object-cover"
          />

        </div>

        {/* Content */}

        <div className="flex flex-col justify-center">

          <p className="uppercase tracking-[0.35em] text-pink-400">
            Why Choose Us
          </p>

          <h2 className="mt-5 text-5xl font-bold">
            Because Every Detail Matters
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-500">
            We believe every client deserves a unique,
            elegant look created using premium cosmetics,
            professional techniques, and years of experience.
          </p>

          <div className="mt-12 space-y-8">

            {features.map((feature) => {

              const Icon = feature.icon;

              return (

                <div
                  key={feature.title}
                  className="flex items-center gap-5"
                >

                  <div className="rounded-full bg-pink-100 p-4">

                    <Icon
                      size={24}
                      className="text-pink-500"
                    />

                  </div>

                  <h3 className="text-xl font-semibold">
                    {feature.title}
                  </h3>

                </div>

              );
            })}

          </div>

          <button className="mt-12 w-fit rounded-full bg-pink-400 px-8 py-4 font-semibold text-white hover:bg-pink-500">
            Book Appointment
          </button>

        </div>

      </div>

    </section>
  );
}