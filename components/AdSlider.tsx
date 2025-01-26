"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import events from "@/data/events.data";

export default function AdSlider() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <Carousel
      className="w-full max-w-xs mx-auto md:max-w-2xl lg:max-w-4xl xl:max-w-6xl"
      plugins={[plugin.current]}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {Array.from(events).map((event) => (
          <CarouselItem key={event.id}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-video items-center justify-center">
                  <span className="text-3xl font-semibold absolute z-100 text-white shadow-2xl">
                    {event.title}
                  </span>

                  <img
                    src={event.image}
                    alt=""
                    className="w-full bg-gradient-to-b from-transparent to-white"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
