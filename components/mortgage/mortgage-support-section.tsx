import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';
import type { MortgageArticle } from '@/lib/api';

interface MortgageSupportSectionProps {
  articles: MortgageArticle[];
}

const FALLBACK_MORTGAGE_IMAGE =
  'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop';

export default function MortgageSupportSection({ articles }: MortgageSupportSectionProps) {
  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Hỗ trợ vay mua nhà</h2>
      <div className="border-b border-gray-200 pb-6 mb-6" />

      <div className="space-y-4">
        {articles.map((article) => (
          <Link
            key={article.id}
            href={article.href}
            className="flex gap-4 group hover:opacity-80 transition"
          >
            <div className="relative w-28 h-20 md:w-32 md:h-24 rounded-lg overflow-hidden shrink-0 flex-shrink-0">
              <Image
                src={article.imageUrl || FALLBACK_MORTGAGE_IMAGE}
                alt={article.title}
                fill
                className="object-cover group-hover:scale-105 transition duration-300"
                sizes="(max-width: 768px) 112px, 128px"
              />
            </div>
            <div className="flex flex-col justify-center flex-1 min-w-0">
              <p className="text-sm md:text-base text-gray-800 group-hover:text-orange-600 font-medium line-clamp-2 transition">
                {article.title}
              </p>
              {article.bankName && (
                <p className="text-xs text-gray-500 mt-1">{article.bankName}</p>
              )}
            </div>
          </Link>
        ))}

        <Link
          href="/tin-tuc"
          className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-medium text-sm mt-4 group"
        >
          Xem thêm
          <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition" />
        </Link>
      </div>
    </div>
  );
}
