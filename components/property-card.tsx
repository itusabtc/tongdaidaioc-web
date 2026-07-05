'use client';

import { MapPin, Bed, Bath, Badge } from 'lucide-react';
import { useState } from 'react';

interface PropertyCardProps {
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

export default function PropertyCard({
  id,
  image,
  price,
  area,
  bedrooms,
  bathrooms,
  address,
  title,
  isExclusive = false,
  discount,
}: PropertyCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden bg-gray-200">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />

        {/* Badge - Exclusive */}
        {isExclusive && (
          <div className="absolute top-3 right-3 bg-accent text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg">
            <Badge size={14} />
            Độc quyền
          </div>
        )}

        {/* Discount Badge */}
        {discount && (
          <div className="absolute top-3 left-3 bg-primary text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
            {discount}
          </div>
        )}

        {/* Hover Overlay */}
        {isHovered && (
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center transition-opacity duration-300">
            <button className="px-6 py-2 bg-accent text-white font-bold rounded-lg hover:opacity-90 transition">
              Xem chi tiết
            </button>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Price */}
        <div className="mb-2">
          <p className="text-2xl font-bold text-accent">{price}</p>
        </div>

        {/* Title */}
        <h3 className="text-gray-900 font-semibold text-sm mb-2 line-clamp-2 h-10">
          {title}
        </h3>

        {/* Property Details */}
        <div className="flex items-center gap-4 text-gray-600 text-sm mb-3 py-2 border-t border-b border-gray-100">
          <div className="flex items-center gap-1">
            <Bed size={16} className="text-gray-500" />
            <span>{bedrooms}</span>
          </div>
          <div className="flex items-center gap-1">
            <Bath size={16} className="text-gray-500" />
            <span>{bathrooms}</span>
          </div>
          <div className="flex items-center gap-1 font-medium">
            <span>{area}</span>
          </div>
        </div>

        {/* Address */}
        <div className="flex items-start gap-2">
          <MapPin size={16} className="text-gray-500 flex-shrink-0 mt-0.5" />
          <p className="text-gray-600 text-xs line-clamp-2">{address}</p>
        </div>
      </div>
    </div>
  );
}
