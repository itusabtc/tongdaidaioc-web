'use client';

import { ChevronRight, Bed, Maximize2 } from 'lucide-react';
import Link from 'next/link';

export default function RecentlyViewedSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-12">
          Bạn vừa xem
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Recently Viewed Card */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
            {/* Image */}
            <div className="relative overflow-hidden bg-gray-200 h-48">
              <img
                src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=300&fit=crop"
                alt="Recently viewed property"
                className="w-full h-full object-cover hover:scale-110 transition duration-300"
              />
            </div>

            {/* Content */}
            <div className="p-4">
              {/* Price */}
              <div className="text-xl font-bold text-gray-900 mb-2">
                13 tr/tháng
              </div>

              {/* Details */}
              <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                <div className="flex items-center gap-1">
                  <Bed size={16} />
                  <span>2</span>
                </div>
                <div className="flex items-center gap-1">
                  <Maximize2 size={16} />
                  <span>74 m²</span>
                </div>
              </div>

              {/* Title */}
              <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                Căn hộ LUMIÈRE Boulevard
              </h3>

              {/* Address */}
              <p className="text-sm text-gray-500 mb-4">
                A09199286 • Nguyễn Xiển, Long Thạnh Mỹ, Quận 9
              </p>
            </div>
          </div>
        </div>

        {/* See More Link */}
        <Link
          href="#"
          className="inline-flex items-center gap-1 text-teal-600 hover:text-teal-700 font-semibold transition"
        >
          Xem tất cả
          <ChevronRight size={20} />
        </Link>
      </div>
    </section>
  );
}
