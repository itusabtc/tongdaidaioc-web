'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface ListingOverviewProps {
  descriptionHtml?: string;
  isExpanded?: boolean;
}

export default function ListingOverview({ descriptionHtml, isExpanded = false }: ListingOverviewProps) {
  const [expanded, setExpanded] = useState(isExpanded);

  if (!descriptionHtml) return null;

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
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
          <div
            className="prose prose-sm max-w-none text-gray-700 line-clamp-6"
            dangerouslySetInnerHTML={{ __html: descriptionHtml }}
          />
          {descriptionHtml.length > 500 && (
            <button className="text-primary font-semibold mt-4 hover:underline text-sm">
              Xem thêm
            </button>
          )}
        </div>
      )}
    </div>
  );
}
