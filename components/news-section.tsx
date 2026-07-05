'use client';

import { ChevronRight, CalendarDays } from 'lucide-react';
import Link from 'next/link';

interface NewsItem {
  id: string;
  title: string;
  date: string;
  image: string;
  category?: string;
}

const newsItems: NewsItem[] = [
  {
    id: '1',
    title: '5 bước đăng tin chính chủ hiệu quả trên Tổng Đài Địa Ốc',
    date: '03/01/2025',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=300&h=200&fit=crop',
    category: 'Hướng dẫn',
  },
  {
    id: '2',
    title: 'Môi giới TP.HCM: công cụ CRM miễn phí để quản lý khách hàng',
    date: '20/12/2024',
    image: 'https://images.unsplash.com/photo-1493857671505-72967e2e2760?w=300&h=200&fit=crop',
    category: 'Kinh nghiệm',
  },
  {
    id: '3',
    title: 'Cách kiểm tra pháp lý nhà đất trước khi mua - Hướng dẫn toàn diện',
    date: '09/12/2024',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=300&h=200&fit=crop',
    category: 'Hướng dẫn',
  },
  {
    id: '4',
    title: 'Xu hướng bất động sán TP.HCM năm 2025: Dự báo thị trường',
    date: '15/11/2024',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=300&h=200&fit=crop',
    category: 'Tin tức',
  },
];

export default function NewsSection() {
  const featuredNews = newsItems[0];
  const otherNews = newsItems.slice(1);

  return (
    <section className="py-8 md:py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
          Cẩm nang bất động sán
        </h2>
        <p className="text-gray-600 mb-12">
          Tin tức mới nhất, phân tích xu hướng thị trường, cập nhật nhanh chóng và chính xác hàng ngày
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Featured Article - Large */}
          <div className="md:col-span-1">
            <article className="h-full">
              <div className="relative overflow-hidden rounded-lg bg-gray-200 h-64 md:h-80 mb-4">
                <img
                  src={featuredNews.image}
                  alt={featuredNews.title}
                  className="w-full h-full object-cover hover:scale-110 transition duration-300"
                />
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-3 line-clamp-3">
                {featuredNews.title}
              </h3>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <CalendarDays size={16} />
                <span>{featuredNews.date}</span>
              </div>
            </article>
          </div>

          {/* Other News - List */}
          <div className="md:col-span-2">
            <div className="space-y-6">
              {otherNews.map((news) => (
                <article
                  key={news.id}
                  className="flex gap-4 pb-6 border-b border-gray-200 last:border-b-0 hover:opacity-80 transition"
                >
                  {/* Image */}
                  <div className="w-28 h-28 flex-shrink-0 rounded-lg overflow-hidden bg-gray-200">
                    <img
                      src={news.image}
                      alt={news.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-2 line-clamp-3 hover:text-primary transition">
                      {news.title}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <CalendarDays size={16} />
                      <span>{news.date}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        {/* See More Link */}
        <div className="mt-12">
          <Link
            href="/tin-tuc"
            className="inline-flex items-center gap-1 text-primary hover:text-accent font-semibold transition"
          >
            Xem thêm bài viết
            <ChevronRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
}
