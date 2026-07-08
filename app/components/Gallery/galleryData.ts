export interface GalleryImage {
  id: number;
  title: string;
  category: string;
  image: string;
  height: string;
}

export const galleryImages: GalleryImage[] = [
  {
    id: 1,
    title: "Bridal Beauty",
    category: "Bridal",
    image: "/gallery/bridal.png",
    height: "h-[420px]",
  },
  {
    id: 2,
    title: "Party Glam",
    category: "Party",
    image: "/gallery/party.png",
    height: "h-[300px]",
  },
  {
    id: 3,
    title: "Reception Look",
    category: "Reception",
    image: "/gallery/reception.png",
    height: "h-[500px]",
  },
  {
    id: 4,
    title: "Engagement Makeup",
    category: "Engagement",
    image: "/gallery/engagement.png",
    height: "h-[340px]",
  },
   {
    id: 5,
    title: "Engagement Makeup",
    category: "Engagement",
    image: "/gallery/eng.png",
    height: "h-[340px]",
  },

];
