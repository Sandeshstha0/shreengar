export interface FAQ {
  id: number;
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    id: 1,
    question: "How far in advance should I book my appointment?",
    answer:
      "We recommend booking at least 2–4 weeks in advance. During the wedding season, it's best to reserve your date as early as possible.",
  },
  {
    id: 2,
    question: "Do you provide makeup services at the venue?",
    answer:
      "Yes! We offer both in-studio and on-location makeup services. Travel charges may apply depending on the location.",
  },
  {
    id: 3,
    question: "Which makeup brands do you use?",
    answer:
      "We use premium, skin-friendly products from trusted international and professional brands to ensure a flawless and long-lasting finish.",
  },
  {
    id: 4,
    question: "Is a trial makeup session available?",
    answer:
      "Yes. Trial sessions are available for bridal packages and can also be booked separately upon request.",
  },
  {
    id: 5,
    question: "How long will the makeup last?",
    answer:
      "Our professional makeup is designed to last throughout your event. The exact duration depends on your skin type, weather, and activity level.",
  },
  {
    id: 6,
    question: "Can I customize a makeup package?",
    answer:
      "Absolutely! We can create a personalized package based on your event, style preferences, and budget.",
  },
  {
    id: 7,
    question: "How do I confirm my booking?",
    answer:
      "Your booking is confirmed once the appointment details are finalized and the required advance payment has been received.",
  },
  {
    id: 8,
    question: "What payment methods do you accept?",
    answer:
      "We accept cash, bank transfer, and popular digital payment options. Payment details will be shared during the booking process.",
  },
];