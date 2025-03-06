'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

interface CarouselImage {
  src: string;
  alt: string;
  title: string;
  width: number;
  height: number;
}

interface ImageCarouselProps {
  images: CarouselImage[];
}

export default function ImageCarousel({ images }: ImageCarouselProps) {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const timer = setInterval(nextImage, 5000);
    return () => clearInterval(timer);
  }, [images.length]); // added images.length as a dependency

  return (
    <div className="relative w-full max-w-5xl mx-auto rounded-xl overflow-hidden shadow-2xl">
      <div className="relative aspect-[16/9]">
        <Image
          src={images[currentImage].src}
          alt={images[currentImage].alt}
          title={images[currentImage].title}
          fill
          className="object-cover"
          priority={currentImage === 0}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent">
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <h3 className="text-xl md:text-2xl font-semibold mb-2">
              {images[currentImage].title}
            </h3>
            <p className="text-white/90">
              {images[currentImage].alt}
            </p>
          </div>
        </div>
      </div>
      <Button
        variant="outline"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white"
        onClick={prevImage}
        aria-label="Previous image"
      >
        ←
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white"
        onClick={nextImage}
        aria-label="Next image"
      >
        →
      </Button>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentImage ? 'bg-white scale-125' : 'bg-white/50'
            }`}
            onClick={() => setCurrentImage(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
