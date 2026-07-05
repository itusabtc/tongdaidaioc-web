import Link from 'next/link';
import { ChevronRight, Star } from 'lucide-react';
import type { FeaturedBroker } from '@/lib/mock/featured-brokers';

interface FeaturedBrokersSectionProps {
  brokers: FeaturedBroker[];
}

function getInitials(name: string): string {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
}

export default function FeaturedBrokersSection({ brokers }: FeaturedBrokersSectionProps) {
  if (!brokers || brokers.length === 0) {
    return null;
  }

  return (
    <section className="py-10 md:py-14 bg-gradient-to-br from-blue-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Môi giới nổi bật
          </h2>
          <Link
            href="/moi-gioi"
            className="flex items-center gap-2 text-[#F2922E] font-semibold hover:text-[#e07d1f] transition"
          >
            Xem tất cả
            <ChevronRight size={20} />
          </Link>
        </div>

        {/* Brokers Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {brokers.map((broker) => (
            <Link
              key={broker.id}
              href={`/moi-gioi/${broker.slug}`}
              className="group"
            >
              <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition text-center">
                {/* Avatar */}
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#1a3a52] to-[#F2922E] flex items-center justify-center mx-auto mb-3 text-white font-bold text-lg group-hover:scale-105 transition">
                  {getInitials(broker.name)}
                </div>

                {/* Name */}
                <h3 className="font-semibold text-gray-900 text-sm mb-2 line-clamp-2">
                  {broker.name}
                </h3>

                {/* District */}
                <p className="text-xs text-gray-600 mb-2">
                  {broker.districtName}
                </p>

                {/* Listing Count */}
                <p className="text-sm font-semibold text-[#F2922E] mb-2">
                  {broker.listingCount} tin
                </p>

                {/* Rating */}
                {broker.rating && (
                  <div className="flex items-center justify-center gap-1 text-xs">
                    <span className="text-yellow-500 font-semibold">
                      {broker.rating}
                    </span>
                    <Star size={12} className="text-yellow-500 fill-yellow-500" />
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
