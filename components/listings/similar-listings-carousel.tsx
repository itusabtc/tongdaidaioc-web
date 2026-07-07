'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef } from 'react';

interface SimilarListing {
  id: string;
  slug: string;
  title: string;
  priceText: string;
  coverUrl?: string;
  area?: number;
  bedrooms?: number;
  districtName?: string;
}

interface SimilarListingsCarouselProps {
  listings: SimilarListing[];
  title?: string;
}

export default function SimilarListingsCarousel({
  listings,
  title = 'Nhà đất tương tự',
}: SimilarListingsCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const scrollAmount = 400;
    if (direction === 'left') {
      scrollRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  if (!listings || listings.length === 0) return null;

  return (
    <section className="border-t border-gray-200 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
          <div className="flex gap-2">
            <button
              onClick={() => scroll('left')}
              className="p-2 border border-gray-300 rounded-lg hover:border-primary hover:bg-primary/5 transition"
              aria-label="Scroll left"
            >
              <ChevronLeft size={20} className="text-gray-600" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-2 border border-gray-300 rounded-lg hover:border-primary hover:bg-primary/5 transition"
              aria-label="Scroll right"
            >
              <ChevronRight size={20} className="text-gray-600" />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth"
          style={{ scrollBehavior: 'smooth' }}
        >
          {listings.map((listing) => (
            <Link
              key={listing.id}
              href={`/tin/${listing.slug}`}
              className="flex-shrink-0 w-80 group bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg hover:border-primary/20 transition"
            >
              {/* Image */}
              <div className="relative h-48 bg-gray-200 overflow-hidden">
                <Image
                  src={listing.coverUrl || 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400'}
                  alt={listing.title}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-300"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400';
                  }}
                />
              </div>

              {/* Info */}
              <div className="p-4">
                <h3 className="font-bold text-gray-900 line-clamp-2 mb-2 group-hover:text-primary transition">
                  {listing.title}
                </h3>
                <p className="text-lg font-bold text-accent mb-2">{listing.priceText}</p>
                <div className="flex gap-2 text-sm text-gray-600">
                  {listing.bedrooms && (
                    <span>{listing.bedrooms} PN</span>
                  )}
                  {listing.area && (
                    <span>{listing.area}m²</span>
                  )}
                  {listing.districtName && (
                    <span>{listing.districtName}</span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
