"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { assets } from "@/lib/assets";

export function HeaderSlider() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true }),
  );

  const sliderData = [
    {
      id: 1,
      title: "Experience Pure Sound - Your Perfect Headphones Awaits!",
      offer: "Limited Time Offer 30% Off",
      buttonText1: "Buy now",
      buttonText2: "Find more",
      imgSrc: assets.header_headphone_image,
    },
    {
      id: 2,
      title: "Next-Level Gaming Starts Here - Discover PlayStation 5 Today!",
      offer: "Hurry up only few lefts!",
      buttonText1: "Shop Now",
      buttonText2: "Explore Deals",
      imgSrc: assets.header_playstation_image,
    },
    {
      id: 3,
      title: "Power Meets Elegance - Apple MacBook Pro is Here for you!",
      offer: "Exclusive Deal 40% Off",
      buttonText1: "Order Now",
      buttonText2: "Learn More",
      imgSrc: assets.header_macbook_image,
    },
  ];

  const autoplayPlugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false }),
  );

  return (
    <div className="relative w-full overflow-hidden">
      {/* <Carousel
        plugins={[autoplayPlugin.current]}
        opts={{ loop: true }}
        className="w-full"
      > */}

      <Carousel
        plugins={[plugin.current]}
        className="w-full max-w-screen"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {sliderData.map((slide) => (
            <CarouselItem key={slide.id} className="min-w-full">
              <div className="mt-6 flex h-full flex-col-reverse items-center justify-between rounded-xl bg-[#E6E9F2] px-5 py-8 md:flex-row md:px-14">
                <div className="mt-10 md:mt-0 md:pl-8">
                  <p className="pb-1 text-orange-600 md:text-base">
                    {slide.offer}
                  </p>

                  <h1 className="max-w-lg text-2xl font-semibold md:text-[40px] md:leading-[48px]">
                    {slide.title}
                  </h1>

                  <div className="mt-4 flex items-center md:mt-6">
                    <button className="rounded-full bg-orange-600 px-7 py-2 font-medium text-white md:px-10 md:py-2.5">
                      {slide.buttonText1}
                    </button>

                    <button className="group flex items-center gap-2 px-6 py-2.5 font-medium">
                      {slide.buttonText2}
                      <Image
                        className="transition group-hover:translate-x-1"
                        src={assets.arrow_icon}
                        alt="arrow_icon"
                      />
                    </button>
                  </div>
                </div>

                <div className="flex flex-1 items-center justify-center">
                  <Image
                    className="w-48 md:w-72"
                    src={slide.imgSrc}
                    alt={slide.title}
                  />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="absolute top-1/2 left-2 -translate-y-1/2" />
        <CarouselNext className="absolute top-1/2 right-2 -translate-y-1/2" />
      </Carousel>
    </div>
  );
}
