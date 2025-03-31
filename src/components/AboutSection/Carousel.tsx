"use client";

import React, { useState, useEffect } from "react";
import { ArrowRightIcon } from "../ui/arrow-right";
import { ArrowLeftIcon } from "../ui/arrow-left";
import VaulDrawer from "./VaulDrawer";

export interface CarouselItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  data: string;
}

interface CarouselProps {
  items: CarouselItem[];
  autoSlideInterval?: number;
}

const Carousel: React.FC<CarouselProps> = ({
  items,
  autoSlideInterval = 2000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1,
    );
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  const getPrevIndex = () => {
    return currentIndex === 0 ? items.length - 1 : currentIndex - 1;
  };

  const getNextIndex = () => {
    return currentIndex === items.length - 1 ? 0 : currentIndex + 1;
  };

  useEffect(() => {
    let slideInterval: NodeJS.Timeout;

    if (isAutoPlaying) {
      slideInterval = setInterval(() => {
        nextSlide();
      }, autoSlideInterval);
    }

    return () => {
      if (slideInterval) {
        clearInterval(slideInterval);
      }
    };
  }, [currentIndex, isAutoPlaying, autoSlideInterval]);

  const handleInteraction = () => {
    setIsAutoPlaying(false);

    setTimeout(() => {
      setIsAutoPlaying(true);
    }, 10000);
  };

  return (
    <div
      className="relative flex flex-col items-center justify-center"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* <div className="pb-14 text-4xl font-semibold">
        <p>My Work</p>
      </div> */}
      {/* Cards Container */}
      <div className="w-full flex justify-center items-center overflow-hidden relative">
        <div className="absolute left-0 transform -translate-x-1/4">
          <VaulDrawer
            variant="dark"
            title={items[getPrevIndex()].title}
            links={[
              { label: "GitHub", url: "https://github.com/emilkowalski/vaul" },
            ]}
            trigger={
              <div className="bg-gradient-to-b from-neutral-900 to-neutral-800 border border-neutral-800 rounded-2xl px-10 py-8 w-110 h-68 z-1 cursor-pointer">
                <div className="flex flex-col items-start">
                  <div className="bg-white rounded-full p-4 mb-6">
                    {items[getPrevIndex()].icon}
                  </div>
                  <h3 className="text-white text-xl font-bold mb-4">
                    {items[getPrevIndex()].title}
                  </h3>
                  <p className="text-neutral-400 text-left">
                    {items[getPrevIndex()].description}
                  </p>
                </div>
              </div>
            }
          >
            <p className="mb-2">{items[getPrevIndex()].data}</p>
          </VaulDrawer>
        </div>

        {/* Current Card */}
        <VaulDrawer
          variant="dark"
          title={items[currentIndex].title}
          links={[
            { label: "GitHub", url: "https://github.com/emilkowalski/vaul" },
          ]}
          trigger={
            <div className="bg-gradient-to-b from-neutral-900 to-neutral-800 border border-neutral-800 rounded-2xl px-10 py-14 w-110 h-80 mx-1 z-1 cursor-pointer">
              <div className="flex flex-col items-start">
                <div className="bg-white rounded-full p-4 mb-6">
                  {items[currentIndex].icon}
                </div>
                <h3 className="text-white text-2xl font-bold mb-4">
                  {items[currentIndex].title}
                </h3>
                <p className="text-neutral-400 text-left">
                  {items[currentIndex].description}
                </p>
              </div>
            </div>
          }
        >
          <p className="mb-2">{items[currentIndex].data}</p>
        </VaulDrawer>

        {/* Next Card */}
        <div className="absolute right-0 transform translate-x-1/4">
          <VaulDrawer
            variant="dark"
            title={items[getNextIndex()].title}
            links={[
              { label: "GitHub", url: "https://github.com/emilkowalski/vaul" },
            ]}
            trigger={
              <div className="bg-gradient-to-b from-neutral-900 to-neutral-800 border border-neutral-800 rounded-2xl px-10 py-8 w-110 h-68 z-1 cursor-pointer">
                <div className="flex flex-col items-start">
                  <div className="bg-white rounded-full p-4 mb-6">
                    {items[getNextIndex()].icon}
                  </div>
                  <h3 className="text-white text-xl font-bold mb-4">
                    {items[getNextIndex()].title}
                  </h3>
                  <p className="text-neutral-400 text-left">
                    {items[getNextIndex()].description}
                  </p>
                </div>
              </div>
            }
          >
            <p className="mb-2">{items[getNextIndex()].data}</p>
          </VaulDrawer>
        </div>
      </div>

      <div className="mt-12 flex items-center justify-center space-x-16">
        {/* Left Arrow */}
        <button
          onClick={() => {
            prevSlide();
            handleInteraction();
          }}
          className="bg-neutral-800 border border-neutral-600 rounded-xl p-3 cursor-pointer"
          aria-label="Previous slide"
        >
          <ArrowLeftIcon size={24} color="white" />
        </button>

        {/* Slide Indicators */}
        <div className="flex justify-center gap-4">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                goToSlide(index);
                handleInteraction();
              }}
              className={`w-6 h-2 rounded-full transition-colors cursor-pointer ${
                currentIndex === index ? "bg-white" : "bg-neutral-600"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => {
            nextSlide();
            handleInteraction();
          }}
          className="bg-neutral-800 border border-neutral-600 rounded-xl p-3 cursor-pointer"
          aria-label="Next slide"
        >
          <ArrowRightIcon size={24} color="white" />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
