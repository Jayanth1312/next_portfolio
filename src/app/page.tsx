"use client";

import About from "@/components/AboutSection/About";
import Carousel from "@/components/AboutSection/Carousel";
import HomePage from "@/components/Home/HomePage";
import { carouselItems } from "@/components/AboutSection/CarouselItems";

export default function Portfolio() {
  return (
    <div>
      <HomePage />
      <About />
      <div className="h-screen">
        <Carousel items={carouselItems} />
      </div>
    </div>
  );
}
