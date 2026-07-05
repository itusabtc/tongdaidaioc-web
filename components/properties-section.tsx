'use client';

import PropertyCard from './property-card';
import { ArrowRight } from 'lucide-react';

interface Property {
  id: string;
  image: string;
  price: string;
  area: string;
  bedrooms: number;
  bathrooms: number;
  address: string;
  title: string;
  isExclusive?: boolean;
  discount?: string;
}

interface PropertiesSectionProps {
  title: string;
  properties: Property[];
  count?: string;
}

export default function PropertiesSection({
  title,
  properties,
  count,
}: PropertiesSectionProps) {
  return (
    <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            {title}
          </h2>
          {count && (
            <p className="text-gray-600 text-sm md:text-base">
              <span className="font-bold text-gray-900">{count}</span> nhà đất xác thực
            </p>
          )}
        </div>

        {/* Filter Tabs */}
        <div className="flex gap-3 md:gap-6 mb-8 overflow-x-auto pb-4 border-b border-gray-200">
          <button className="px-4 py-2 font-semibold text-gray-900 border-b-2 border-red-600 whitespace-nowrap">
            Tất cả
          </button>
          <button className="px-4 py-2 font-medium text-gray-600 hover:text-gray-900 whitespace-nowrap">
            Vinhomes Grand Park
          </button>
          <button className="px-4 py-2 font-medium text-gray-600 hover:text-gray-900 whitespace-nowrap">
            Masteri Thảo Điền
          </button>
          <button className="px-4 py-2 font-medium text-gray-600 hover:text-gray-900 whitespace-nowrap">
            Vinhomes Central Park
          </button>
          <button className="px-4 py-2 font-medium text-gray-600 hover:text-gray-900 whitespace-nowrap">
            Quận 1
          </button>
          <button className="px-4 py-2 font-medium text-gray-600 hover:text-gray-900 whitespace-nowrap">
            Quận 2
          </button>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {properties.map((property) => (
            <PropertyCard
              key={property.id}
              {...property}
            />
          ))}
        </div>

        {/* View More Link */}
        <div className="mt-8 text-center">
          <button className="inline-flex items-center gap-2 text-red-600 font-semibold hover:text-red-700 transition">
            Xem thêm bài viết
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
