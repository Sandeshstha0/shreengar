export interface PricingPackage {
  id: number;
  title: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
}

export const pricingPackages: PricingPackage[] = [
  {
    id: 1,
    title: "Party Glam",
    price: "Rs. 4,500",
    description: "Perfect for birthdays, parties and special events.",
    features: [
      "HD Makeup",
      "Hair Styling",
      "Premium Eyelashes",
      "Basic Touch-up",
    ],
  },
  {
    id: 2,
    title: "Bridal Premium",
    price: "Rs. 18,000",
    description: "Our most loved bridal package for your special day.",
    popular: true,
    features: [
      "Airbrush Makeup",
      "Luxury Hair Styling",
      "Premium Eyelashes",
      "Jewelry Setting",
      "Saree Draping",
      "Touch-up Kit",
      "Trial Session",
    ],
  },
  {
    id: 3,
    title: "Engagement Elegance",
    price: "Rs. 8,500",
    description: "Look radiant for your engagement ceremony.",
    features: [
      "HD Makeup",
      "Hair Styling",
      "Premium Lashes",
      "Dress Draping",
      "Skin Preparation",
    ],
  },
];