import Link from 'next/link';

interface ListingCardProps {
  listing: {
    id: string;
    slug: string;
    title: string;
    priceText: string;
    coverUrl?: string;
    districtName: string;
    sourceType?: string;
    verified?: boolean;
  };
}

export default function ListingCard({ listing }: ListingCardProps) {
  return (
    <Link href={`/tin/${listing.slug}`}>
      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition cursor-pointer h-full flex flex-col">
        {/* Image */}
        <div className="relative w-full h-48 bg-gray-100 overflow-hidden">
          {listing.coverUrl ? (
            <img
              src={listing.coverUrl}
              alt={listing.title}
              className="w-full h-full object-cover hover:scale-105 transition duration-300"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
              <span className="text-gray-400">No image</span>
            </div>
          )}

          {/* Badges */}
          {listing.sourceType === 'chinhchu' && (
            <div className="absolute top-2 left-2">
              <span className="inline-block px-2 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded">
                Chính chủ
              </span>
            </div>
          )}

          {listing.sourceType === 'moigioi' && (
            <div className="absolute top-2 left-2">
              <span className="inline-block px-2 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded">
                Môi giới
              </span>
            </div>
          )}

          {listing.verified && (
            <div className="absolute top-2 right-2">
              <span className="inline-block px-2 py-1 bg-yellow-100 text-yellow-800 text-xs font-semibold rounded">
                Đã xác thực
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-4 flex-1 flex flex-col">
          <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 text-sm">
            {listing.title}
          </h3>

          <p className="text-accent font-bold text-lg mb-2">
            {listing.priceText}
          </p>

          <p className="text-sm text-gray-600">
            {listing.districtName}
          </p>
        </div>
      </div>
    </Link>
  );
}
