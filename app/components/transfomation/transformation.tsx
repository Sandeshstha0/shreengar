import TransformationCard from "./transformationCard";

const items = [
  {
    title: "Bridal Transformation",
    before: "/transformations/before1.jpg",
    after: "/transformations/after1.jpg",
  },
  {
    title: "Party Makeup",
    before: "/transformations/before2.jpg",
    after: "/transformations/after2.jpg",
  },
];

export default function Transformations() {
  return (
    <section className="bg-white py-24">

      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <p className="uppercase tracking-[0.3em] text-pink-400">
            Real Transformations
          </p>

          <h2 className="mt-4 text-5xl font-bold text-gray-900">
            Before & After
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-gray-500">
            Every face tells a unique story. See how our
            professional makeup artistry enhances natural
            beauty while preserving individuality.
          </p>

        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-2">

          {items.map((item) => (
            <TransformationCard
              key={item.title}
              {...item}
            />
          ))}

        </div>

        <div className="mt-16 text-center">

          <button className="rounded-full bg-pink-400 px-8 py-4 font-semibold text-white transition hover:bg-pink-500">
            View More Transformations
          </button>

        </div>

      </div>

    </section>
  );
}