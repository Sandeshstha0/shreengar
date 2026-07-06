import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
}

export default function ServiceCard({
  title,
  description,
  image,
}: ServiceCardProps) {
  return (
    <div className="group overflow-hidden rounded-3xl bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
      <div className="relative h-64 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-semibold text-gray-900">
          {title}
        </h3>

        <p className="mt-3 text-gray-500 leading-7">
          {description}
        </p>

        <button className="group mt-6 flex items-center gap-2 text-pink-500 font-semibold">
          Learn More

          <ArrowRight
            size={18}
            className="transition group-hover:translate-x-1"
          />
        </button>
      </div>
    </div>
  );
}