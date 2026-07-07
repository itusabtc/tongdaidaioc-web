'use client';

import { useState } from 'react';
import { Heart, Flag, Shield } from 'lucide-react';

interface ListingActionBarProps {
  isOwnerVerified?: boolean;
  listingId: string;
}

export default function ListingActionBar({ isOwnerVerified, listingId }: ListingActionBarProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="flex items-center justify-between gap-4 py-4 border-b border-gray-200">
      {/* Left: Favorite button */}
      <button
        onClick={() => setIsFavorite(!isFavorite)}
        className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 hover:border-primary hover:bg-primary/5 transition text-gray-700 font-medium"
      >
        <Heart
          size={20}
          className={isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-600'}
        />
        <span className="hidden sm:inline">{isFavorite ? 'Đã yêu thích' : 'Yêu thích'}</span>
      </button>

      {/* Center: Trust badge */}
      {isOwnerVerified && (
        <div className="hidden sm:flex items-center gap-2 px-4 py-2 bg-green-50 border border-green-200 rounded-lg">
          <Shield size={18} className="text-green-600" />
          <span className="font-medium text-green-700">Chủ nhà xác nhận</span>
        </div>
      )}

      {/* Right: Report button */}
      <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 hover:border-red-300 hover:bg-red-50 transition text-gray-700 font-medium">
        <Flag size={20} className="text-gray-600" />
        <span className="hidden sm:inline">Báo cáo</span>
      </button>
    </div>
  );
}
