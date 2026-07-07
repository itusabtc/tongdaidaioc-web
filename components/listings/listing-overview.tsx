'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { htmlPlainLength, htmlToPlainExcerpt } from '@/lib/listing-format';

interface ListingOverviewProps {
  descriptionHtml?: string;
  isExpanded?: boolean;
}

export default function ListingOverview({ descriptionHtml, isExpanded = false }: ListingOverviewProps) {
  const [expanded, setExpanded] = useState(isExpanded);

  if (!descriptionHtml) return null;

  const excerpt = htmlToPlainExcerpt(descriptionHtml);
  const hasFullDetail = htmlPlainLength(descriptionHtml) > 280;

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        type="button"
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center justify-between p-6 bg-gray-50 hover:bg-gray-100 transition"
      >
        <h3 className="text-lg font-bold text-gray-900">Tổng quan</h3>
        <ChevronDown
          size={20}
          className={`text-gray-600 transition ${expanded ? 'rotate-180' : ''}`}
        />
      </button>

      {expanded && (
        <div className="p-6 border-t border-gray-200 bg-white">
          <p className="text-gray-700 text-sm leading-relaxed">{excerpt}</p>
          {hasFullDetail && (
            <a
              href="#mo-ta-chi-tiet"
              className="inline-block text-primary font-semibold mt-4 hover:underline text-sm"
            >
              Xem mô tả chi tiết
            </a>
          )}
        </div>
      )}
    </div>
  );
}
