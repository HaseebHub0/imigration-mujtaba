"use client"

import React, { useState, useEffect, useCallback } from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel"

interface AutoPlayCarouselProps {
  images: Array<{
    src: string
    alt: string
  }>
  interval?: number // in milliseconds
  className?: string
}

export function AutoPlayCarousel({ 
  images, 
  interval = 3000, // 3 seconds default
  className = "" 
}: AutoPlayCarouselProps) {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  const handleSelect = useCallback(() => {
    if (!api) return
    setCurrent(api.selectedScrollSnap())
  }, [api])

  useEffect(() => {
    if (!api) {
      return
    }

    setCurrent(api.selectedScrollSnap())
    api.on("select", handleSelect)

    return () => {
      api.off("select", handleSelect)
    }
  }, [api, handleSelect])

  useEffect(() => {
    if (!api) return

    const timer = setInterval(() => {
      api.scrollNext()
    }, interval)

    return () => clearInterval(timer)
  }, [api, interval])

  return (
    <Carousel
      setApi={setApi}
      opts={{
        align: "start",
        loop: true,
        duration: 20, // Reduced for better performance
        skipSnaps: false,
      }}
      className={`${className} hero-carousel`}
    >
      <CarouselContent className="-ml-0">
        {images.map((image, index) => (
          <CarouselItem 
            key={index} 
            className="pl-0"
          >
            <div className="relative w-full h-screen overflow-hidden">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
                loading="eager"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/30 to-black/60"></div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
