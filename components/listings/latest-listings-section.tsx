import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import ListingCard from './listing-card';
import type { ListingCard as ListingCardType } from '@/lib/api';

interface LatestListingsSectionProps {
  title: string;
  listings: ListingCardType[];
  viewAllHref: string;
  className?: string;
}

export default function LatestListingsSection({
  title,
  listings,
  viewAllHref,
  className = '',
}: LatestListingsSectionProps) {
  if (!listings || listings.length === 0) {
    return null;
  }

  return (
    <section className={`py-16 md:py-20 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            {title}
          </h2>
          <Link
            href={viewAllHref}
            className="flex items-center gap-2 text-[#F2922E] font-semibold hover:text-[#e07d1f] transition"
          >
            Xem thêm
            <ChevronRight size={20} />
          </Link>
        </div>

        {/* Listings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {listings.slice(0, 8).map((listing) => (
            <ListingCard key={listing.id} listing={listing} />
          ))}
        </div>
      </div>
    </section>
  );
}
