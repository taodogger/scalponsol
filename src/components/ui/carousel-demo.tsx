"use client";

import { Carousel } from "@/components/ui/carousel";

export function CarouselDemo() {
  // Create a larger dataset by duplicating the win images multiple times
  const baseSlides = [
    { src: "/win1.webp" },
    { src: "/win2.webp" },
    { src: "/win3.webp" },
    { src: "/win4.webp" },
    { src: "/win5.webp" },
    { src: "/win6.webp" },
    { src: "/win7.webp" },
    { src: "/win8.webp" },
    { src: "/win9.webp" },
    { src: "/win10.webp" },
  ];

  // Duplicate the slides 3 times to create a richer infinite experience
  const slideData = [...baseSlides, ...baseSlides, ...baseSlides];
  
  return (
    <div className="relative overflow-hidden w-full h-full">
      <Carousel slides={slideData} />
    </div>
  );
}
