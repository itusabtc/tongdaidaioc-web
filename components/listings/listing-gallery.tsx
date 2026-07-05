'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ListingGalleryProps {
  images: string[];
  title: string;
}

export default function ListingGallery({ images, title }: ListingGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'ArrowRight') nextImage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, mounted]);

  const prevImage = () => {
    setCurrentIndex(Math.max(0, currentIndex - 1));
  };

  const nextImage = () => {
    setCurrentIndex(Math.min(images.length - 1, currentIndex + 1));
  };

  if (!mounted || !images.length) {
    return (
      <div className="w-full bg-gray-200 rounded-lg aspect-video flex items-center justify-center">
        <span className="text-gray-400">Không có ảnh</span>
      </div>
    );
  }

  const currentImage = images[currentIndex];

  return (
    <div className="space-y-3">
      {/* Main image */}
      <div className="relative w-full bg-black rounded-lg overflow-hidden aspect-video">
        <Image
          src={currentImage}
          alt={`${title} - ${currentIndex + 1}`}
          fill
          className="object-cover"
          priority={currentIndex === 0}
        />

        {/* Prev button */}
        <button
          onClick={prevImage}
          disabled={currentIndex === 0}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full disabled:opacity-30 disabled:cursor-not-allowed transition z-10"
          aria-label="Previous image"
        >
          <ChevronLeft size={24} className="text-gray-900" />
        </button>

        {/* Next button */}
        <button
          onClick={nextImage}
          disabled={currentIndex === images.length - 1}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full disabled:opacity-30 disabled:cursor-not-allowed transition z-10"
          aria-label="Next image"
        >
          <ChevronRight size={24} className="text-gray-900" />
        </button>

        {/* Dots indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-2 h-2 rounded-full transition ${
                i === currentIndex ? 'bg-white' : 'bg-white/40'
              }`}
              aria-label={`Go to image ${i + 1}`}
            />
          ))}
        </div>

        {/* Image counter */}
        <div className="absolute top-4 right-4 bg-black/60 text-white px-3 py-1 rounded text-sm font-medium">
          {currentIndex + 1} / {images.length}
        </div>
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="bg-gray-100 p-2 rounded-lg overflow-x-auto flex gap-2">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`flex-shrink-0 relative w-20 h-20 rounded border-2 overflow-hidden transition ${
                i === currentIndex ? 'border-primary' : 'border-gray-300'
              }`}
              aria-label={`Select image ${i + 1}`}
            >
              <Image
                src={img}
                alt={`Thumbnail ${i + 1}`}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
