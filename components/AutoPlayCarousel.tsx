"use client"

import React, { useState, useEffect } from "react"
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
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    if (!api) {
      return
    }

    setCurrent(api.selectedScrollSnap())

    api.on("select", () => {
      setIsTransitioning(true)
      setCurrent(api.selectedScrollSnap())
      
      // Reset transition state after animation completes
      setTimeout(() => {
        setIsTransitioning(false)
      }, 1000)
    })
  }, [api])

  useEffect(() => {
    if (!api) return

    const timer = setInterval(() => {
      if (!isTransitioning) {
        api.scrollNext()
      }
    }, interval)

    return () => clearInterval(timer)
  }, [api, interval, isTransitioning])

  return (
    <Carousel
      setApi={setApi}
      opts={{
        align: "start",
        loop: true,
        duration: 50, // Increased for smoother transitions
        skipSnaps: false,
        inViewThreshold: 0.7,
      }}
      className={`${className} hero-carousel`}
    >
      <CarouselContent className="-ml-0">
        {images.map((image, index) => (
          <CarouselItem 
            key={index} 
            className={`pl-0 transition-all duration-1000 ease-out ${
              current === index ? 'is-selected' : ''
            }`}
          >
            <div className="relative w-full h-screen overflow-hidden">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-all duration-1000 ease-out transform scale-100"
                loading="eager"
                style={{
                  animation: current === index ? 'fadeInScale 1s ease-out forwards' : 'none'
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/30 to-black/60 transition-opacity duration-1000 ease-out"></div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
