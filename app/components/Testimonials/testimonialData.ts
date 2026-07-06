export interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  rating: number;
  review: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Bridal Makeup",
    image: "/testimonials/priya.jpg",
    rating: 5,
    review:
      "My bridal makeup was absolutely flawless. It lasted throughout the wedding and every photo looked stunning. I felt confident and beautiful on my special day.",
  },
  {
    id: 2,
    name: "Anusha KC",
    role: "Engagement Makeup",
    image: "/testimonials/anusha.jpg",
    rating: 5,
    review:
      "The makeup artist understood exactly the look I wanted. Soft, elegant, and natural. I received so many compliments from my family and friends.",
  },
  {
    id: 3,
    name: "Sushmita Rai",
    role: "Party Makeup",
    image: "/testimonials/sushmita.jpg",
    rating: 5,
    review:
      "Very professional service with premium products. The makeup stayed perfect all evening and felt lightweight on my skin.",
  },
  {
    id: 4,
    name: "Aarati Thapa",
    role: "Reception Makeup",
    image: "/testimonials/aarati.jpg",
    rating: 5,
    review:
      "I couldn't have asked for a better experience. Every detail was perfect, from the hairstyle to the makeup finish. Highly recommended!",
  },
  {
    id: 5,
    name: "Sneha Adhikari",
    role: "Bridal Makeup",
    image: "/testimonials/sneha.jpg",
    rating: 5,
    review:
      "Absolutely amazing work! My makeup looked natural, elegant, and stayed fresh all day. Thank you for making my wedding unforgettable.",
  },
  {
    id: 6,
    name: "Riya Gurung",
    role: "Photoshoot Makeup",
    image: "/testimonials/riya.jpg",
    rating: 5,
    review:
      "The makeup was camera-ready and exactly what I imagined. The attention to detail and professionalism were exceptional.",
  },
];