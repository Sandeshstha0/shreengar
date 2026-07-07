import { Skeleton } from "./ui/Skeleton";

export const HeroSkeleton = () => (
  <div className="w-full h-[500px] flex flex-col items-center justify-center gap-4 px-6">
    <Skeleton className="h-10 w-2/3" />
    <Skeleton className="h-6 w-1/2" />
    <Skeleton className="h-12 w-40 mt-4" />
  </div>
);

export const TrustedBrandsSkeleton = () => (
  <div className="flex gap-8 justify-center py-10 px-6">
    {Array.from({ length: 5 }).map((_, i) => (
      <Skeleton key={i} className="h-10 w-24" />
    ))}
  </div>
);

export const ServicesSkeleton = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-16 px-6">
    {Array.from({ length: 3 }).map((_, i) => (
      <div key={i} className="flex flex-col gap-3">
        <Skeleton className="h-40 w-full" />
        <Skeleton className="h-5 w-3/4" />
        <Skeleton className="h-4 w-1/2" />
      </div>
    ))}
  </div>
);

export const TransformationSkeleton = () => (
  <div className="flex gap-4 py-16 px-6">
    <Skeleton className="h-64 w-1/2" />
    <Skeleton className="h-64 w-1/2" />
  </div>
);

export const WhyChooseUsSkeleton = () => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-16 px-6">
    {Array.from({ length: 4 }).map((_, i) => (
      <Skeleton key={i} className="h-24 w-full" />
    ))}
  </div>
);

export const GallerySkeleton = () => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 py-16 px-6">
    {Array.from({ length: 8 }).map((_, i) => (
      <Skeleton key={i} className="h-32 w-full" />
    ))}
  </div>
);

export const TestimonialsSkeleton = () => (
  <div className="flex gap-6 py-16 px-6 overflow-hidden">
    {Array.from({ length: 3 }).map((_, i) => (
      <div key={i} className="flex flex-col gap-2 w-1/3">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
        <Skeleton className="h-10 w-10 rounded-full mt-2" />
      </div>
    ))}
  </div>
);

export const PricingSkeleton = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-16 px-6">
    {Array.from({ length: 3 }).map((_, i) => (
      <Skeleton key={i} className="h-80 w-full" />
    ))}
  </div>
);

export const FAQSkeleton = () => (
  <div className="flex flex-col gap-4 py-16 px-6 max-w-3xl mx-auto">
    {Array.from({ length: 5 }).map((_, i) => (
      <Skeleton key={i} className="h-12 w-full" />
    ))}
  </div>
);

export const ContactSkeleton = () => (
  <div className="flex flex-col gap-4 py-16 px-6 max-w-xl mx-auto">
    <Skeleton className="h-10 w-full" />
    <Skeleton className="h-10 w-full" />
    <Skeleton className="h-32 w-full" />
    <Skeleton className="h-12 w-32" />
  </div>
);