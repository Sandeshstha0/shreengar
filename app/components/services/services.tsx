/* eslint-disable react/no-unescaped-entities */
import ServiceCard from "./serviceCard";

const services = [
  {
    title: "Bridal Makeup",
    image: "/services/brideal.jpg",
    description:
      "Elegant bridal makeup designed to make your wedding day unforgettable.",
  },
  {
    title: "Party Makeup",
    image: "/services/party.jpg",
    description:
      "Look glamorous and confident for every celebration and event.",
  },
  {
    title: "Engagement Makeup",
    image: "/services/hero1.jpg",
    description:
      "Soft and radiant makeup that complements your engagement style.",
  },
  {
    title: "Reception Makeup",
    image: "/services/reception.jpg",
    description:
      "Premium reception looks with long-lasting flawless finishes.",
  },
  {
    title: "Hair Styling",
    image: "/services/hair.jpg",
    description:
      "Professional hairstyles tailored to your dress and personality.",
  },
  {
    title: "Photoshoot Makeup",
    image: "/services/photoshoot.jpg",
    description:
      "Camera-ready makeup for fashion shoots and special moments.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-[#FFF8FB] py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <p className="uppercase tracking-[0.35em] text-pink-400">
            What We Offer
          </p>

          <h2 className="mt-4 text-5xl font-bold text-gray-900">
            Our Services
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-500">
            Whether it's your wedding, engagement,
            party, or a professional photoshoot,
            we create a look that enhances your
            natural beauty.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {services.map((service) => (
            <ServiceCard
              key={service.title}
              {...service}
            />
          ))}

        </div>

      </div>
    </section>
  );
}