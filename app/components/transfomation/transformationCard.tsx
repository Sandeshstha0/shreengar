import Image from "next/image";

interface Props {
  before: string;
  after: string;
  title: string;
}

export default function TransformationCard({
  before,
  after,
  title,
}: Props) {
  return (
    <div className="group overflow-hidden rounded-3xl bg-white shadow-lg transition hover:shadow-2xl">
      <div className="grid grid-cols-2">

        <div className="relative h-80">
          <Image
            src={before}
            alt="Before Makeup"
            fill
            className="object-cover"
          />

          <span className="absolute bottom-4 left-4 rounded-full bg-black/70 px-3 py-1 text-xs text-white">
            BEFORE
          </span>
        </div>

        <div className="relative h-80">
          <Image
            src={after}
            alt="After Makeup"
            fill
            className="object-cover transition duration-700 group-hover:scale-105"
          />

          <span className="absolute bottom-4 right-4 rounded-full bg-pink-500 px-3 py-1 text-xs text-white">
            AFTER
          </span>
        </div>

      </div>

      <div className="p-6">
        <h3 className="text-2xl font-semibold">
          {title}
        </h3>

        <p className="mt-2 text-gray-500">
          Natural transformation with premium products
          and long-lasting finish.
        </p>
      </div>
    </div>
  );
}