'use client';

import { ChevronRight, CalendarDays, Newspaper } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export interface BlogItem {
  id: string;
  title: string;
  date: string;
  image: string;
  category: string;
  source: string;
  excerpt?: string;
  href?: string;
}

/** Mock — bước 2: thay bằng API crawl tin BĐS từ báo. Chỉ dùng URL Unsplash đã kiểm tra 200. */
const BLOG_PLACEHOLDER =
  'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop';

export const blogItems: BlogItem[] = [
  {
    id: '1',
    title: 'Giá căn hộ TP.HCM Q1–Q2/2026: phân khúc trung cấp vẫn sôi động',
    date: '05/07/2026',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=500&fit=crop',
    category: 'Thị trường',
    source: 'CafeF',
    excerpt: 'Nguồn cung mới tại khu Đông và Nam TP.HCM tiếp tục thu hút người mua ở thực.',
  },
  {
    id: '2',
    title: 'Metro Bến Thành — Suối Tiên: tác động đến giá nhà ven tuyến',
    date: '04/07/2026',
    image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop',
    category: 'Hạ tầng',
    source: 'VnExpress',
  },
  {
    id: '3',
    title: 'Thủ Đức: nhiều dự án nhà phố thương mại mở bán đợt 2',
    date: '04/07/2026',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop',
    category: 'Dự án',
    source: 'VietNamNet',
  },
  {
    id: '4',
    title: 'Lãi suất cho vay mua nhà: ngân hàng điều chỉnh nhẹ đầu quý III',
    date: '03/07/2026',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop',
    category: 'Tài chính',
    source: 'Tuổi Trẻ',
  },
  {
    id: '5',
    title: 'Xu hướng cho thuê căn hộ ngắn hạn tại trung tâm TP.HCM',
    date: '03/07/2026',
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=300&fit=crop',
    category: 'Cho thuê',
    source: 'CafeF',
  },
  {
    id: '6',
    title: '5 bước đăng tin chính chủ hiệu quả trên nền tảng trực tuyến',
    date: '02/07/2026',
    image: 'https://images.unsplash.com/photo-1493857671505-72967e2e2760?w=400&h=300&fit=crop',
    category: 'Hướng dẫn',
    source: 'TDDO',
  },
  {
    id: '7',
    title: 'BĐS công nghiệp Long An: thuê đất tăng 8% so với cùng kỳ',
    date: '01/07/2026',
    image: 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=800&h=600&fit=crop',
    category: 'Thị trường',
    source: 'VnExpress',
  },
  {
    id: '8',
    title: 'Môi giới chuyển sang CRM đa kênh: xu hướng số hóa 2026',
    date: '30/06/2026',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop',
    category: 'Kinh nghiệm',
    source: 'VietNamNet',
  },
];

function BlogCoverImage({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <img
      src={imgSrc}
      alt={alt}
      className={className}
      onError={() => setImgSrc(BLOG_PLACEHOLDER)}
    />
  );
}

function SourceBadge({ source }: { source: string }) {
  const isInternal = source === 'TDDO';
  return (
    <span
      className={`text-[11px] font-semibold px-2 py-0.5 rounded ${
        isInternal ? 'bg-primary/10 text-primary' : 'bg-gray-100 text-gray-600'
      }`}
    >
      {source}
    </span>
  );
}

function BlogCard({
  item,
  variant = 'compact',
}: {
  item: BlogItem;
  variant?: 'featured' | 'side' | 'compact';
}) {
  const href = item.href ?? '/tin-tuc';

  if (variant === 'featured') {
    return (
      <Link href={href} className="group block h-full">
        <article className="h-full flex flex-col">
          <div className="relative overflow-hidden rounded-xl bg-gray-200 aspect-[16/10] mb-4">
            <BlogCoverImage
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            />
            <span className="absolute top-3 left-3 text-xs font-bold px-2 py-1 rounded bg-accent text-white">
              {item.category}
            </span>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <SourceBadge source={item.source} />
            <span className="flex items-center gap-1 text-xs text-gray-500">
              <CalendarDays size={12} />
              {item.date}
            </span>
          </div>
          <h3 className="font-bold text-xl text-gray-900 mb-2 line-clamp-3 group-hover:text-primary transition">
            {item.title}
          </h3>
          {item.excerpt && (
            <p className="text-gray-600 text-sm line-clamp-2 flex-1">{item.excerpt}</p>
          )}
        </article>
      </Link>
    );
  }

  if (variant === 'side') {
    return (
      <Link href={href} className="group flex gap-4 items-start">
        <div className="w-32 h-24 md:w-36 md:h-28 rounded-lg overflow-hidden bg-gray-200 shrink-0">
          <BlogCoverImage
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
          />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1.5 flex-wrap">
            <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-gray-100 text-gray-700">
              {item.category}
            </span>
            <SourceBadge source={item.source} />
          </div>
          <h3 className="font-semibold text-gray-900 text-sm md:text-base line-clamp-2 group-hover:text-primary transition mb-1">
            {item.title}
          </h3>
          <span className="text-xs text-gray-500 flex items-center gap-1">
            <CalendarDays size={12} />
            {item.date}
          </span>
        </div>
      </Link>
    );
  }

  return (
    <Link href={href} className="group block">
      <article className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-lg hover:border-primary/20 transition h-full flex flex-col">
        <div className="relative aspect-[16/10] bg-gray-200 overflow-hidden">
          <BlogCoverImage
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
          />
          <span className="absolute top-2 left-2 text-[10px] font-bold px-1.5 py-0.5 rounded bg-white/90 text-gray-800">
            {item.category}
          </span>
        </div>
        <div className="p-4 flex flex-col flex-1">
          <div className="flex items-center justify-between gap-2 mb-2">
            <SourceBadge source={item.source} />
            <span className="text-[11px] text-gray-500">{item.date}</span>
          </div>
          <h3 className="font-semibold text-gray-900 text-sm line-clamp-3 group-hover:text-primary transition flex-1">
            {item.title}
          </h3>
        </div>
      </article>
    </Link>
  );
}

export default function NewsSection() {
  const [featured, ...rest] = blogItems;
  const sideItems = rest.slice(0, 2);
  const gridItems = rest.slice(2, 8);

  return (
    <section className="py-10 md:py-14 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8 md:mb-10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Newspaper className="w-6 h-6 text-accent" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Blogs</h2>
            </div>
            <p className="text-gray-600 max-w-2xl">
              Tổng hợp tin bất động sản mới nhất từ báo chí — thị trường, dự án, xu hướng mua bán & cho thuê
            </p>
          </div>
          <Link
            href="/tin-tuc"
            className="inline-flex items-center gap-1 text-primary hover:text-accent font-semibold transition shrink-0"
          >
            Xem tất cả
            <ChevronRight size={20} />
          </Link>
        </div>

        {/* Top: featured + 2 side articles */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8 mb-8">
          <div className="lg:col-span-3">
            <BlogCard item={featured} variant="featured" />
          </div>
          <div className="lg:col-span-2 flex flex-col gap-6 justify-center">
            {sideItems.map((item) => (
              <div
                key={item.id}
                className="pb-6 border-b border-gray-200 last:border-b-0 last:pb-0"
              >
                <BlogCard item={item} variant="side" />
              </div>
            ))}
          </div>
        </div>

        {/* Grid: 6 compact cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {gridItems.map((item) => (
            <BlogCard key={item.id} item={item} variant="compact" />
          ))}
        </div>
      </div>
    </section>
  );
}
