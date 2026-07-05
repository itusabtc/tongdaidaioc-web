'use client';

import { useState } from 'react';
import ListingCard from './listing-card';

interface LatestListingsTabsProps {
  saleListings: any[];
  rentListings: any[];
}

export default function LatestListingsTabs({ saleListings, rentListings }: LatestListingsTabsProps) {
  const [activeTab, setActiveTab] = useState<'sale' | 'rent'>('sale');

  const listings = activeTab === 'sale' ? saleListings : rentListings;

  return (
    <section className="section-spacing">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
          Tin mới nhất
        </h2>

        {/* Tabs */}
        <div className="flex gap-6 mb-8 border-b border-gray-200">
          <button
            onClick={() => setActiveTab('sale')}
            className={`pb-3 font-semibold text-lg border-b-2 transition ${
              activeTab === 'sale'
                ? 'text-primary border-primary'
                : 'text-gray-500 border-transparent hover:text-gray-700'
            }`}
          >
            Mua bán
          </button>
          <button
            onClick={() => setActiveTab('rent')}
            className={`pb-3 font-semibold text-lg border-b-2 transition ${
              activeTab === 'rent'
                ? 'text-primary border-primary'
                : 'text-gray-500 border-transparent hover:text-gray-700'
            }`}
          >
            Cho thuê
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {listings.slice(0, 8).map((item: any) => (
            <ListingCard key={item.id} listing={item} />
          ))}
        </div>

        {/* View All Link */}
        <div className="mt-8 text-center">
          <a
            href={activeTab === 'sale' ? '/mua-ban' : '/cho-thue'}
            className="text-primary hover:text-primary/80 font-medium flex items-center justify-center gap-1"
          >
            Xem tất cả
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
