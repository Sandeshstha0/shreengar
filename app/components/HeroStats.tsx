import { Users, Sparkles, Gem } from "lucide-react";

export default function HeroStats() {
  const stats = [
    {
      icon: Users,
      value: "200+",
      label: "Happy Clients",
    },
    {
      icon: Sparkles,
      value: "4+",
      label: "Years Experience",
    },
    {
      icon: Gem,
      value: "100%",
      label: "Premium Products",
    },
  ];

  return (
    <div className="mt-16 flex flex-wrap gap-10">
      {stats.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.label}
            className="flex items-center gap-4"
          >
            <Icon
              className="text-pink-300"
              size={36}
            />

            <div>
              <h3 className="text-3xl font-bold text-white">
                {item.value}
              </h3>

              <p className="text-gray-300">
                {item.label}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}