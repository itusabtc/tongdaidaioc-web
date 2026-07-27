import Link from 'next/link';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Calendar, Newspaper } from 'lucide-react';
import { getBlogFeed } from '@/lib/api';
import { BLOG_PLACEHOLDER, mapBlogFeedToItems } from '@/lib/blog';

export const metadata = {
  title: 'Blogs - TDDO',
  description: 'Tin tức bất động sản tổng hợp từ báo chí — đọc trên Tổng Đài Địa Ốc.',
};

export const dynamic = 'force-dynamic';

export default async function ArticlesPage() {
  let articles = mapBlogFeedToItems(await getBlogFeed(24).catch(() => []));

  const sources = [...new Set(articles.map((a) => a.source))];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      <main className="flex-1 pt-20">
        <section className="bg-primary text-white py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold mb-4">Blogs</h1>
            <p className="text-xl text-gray-100">
              Tổng hợp tin bất động sản từ nhiều tờ báo — đọc ngay trên TDDO
            </p>
          </div>
        </section>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
              <div className="sticky top-24 bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="font-bold text-primary mb-4">Nguồn</h3>
                <div className="space-y-2">
                  <div className="px-4 py-2 rounded bg-gray-200 flex justify-between text-sm">
                    <span>Tất cả</span>
                    <span>({articles.length})</span>
                  </div>
                  {sources.map((name) => (
                    <div
                      key={name}
                      className="px-4 py-2 rounded text-gray-700 text-sm flex justify-between"
                    >
                      <span>{name}</span>
                      <span className="text-gray-500">
                        ({articles.filter((a) => a.source === name).length})
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="space-y-6">
                {articles.length === 0 && (
                  <p className="text-gray-600">Chưa có tin. Vui lòng thử lại sau.</p>
                )}
                {articles.map((article) => (
                  <article
                    key={article.id}
                    className="p-6 bg-gray-50 rounded-lg border border-gray-200 hover:shadow-lg transition hover:border-accent"
                  >
                    <div className="flex gap-6">
                      <div className="flex-shrink-0 w-28 h-20 md:w-36 md:h-24 rounded-lg overflow-hidden bg-gray-200">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={article.image || BLOG_PLACEHOLDER}
                          alt={article.title}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-2 flex-wrap">
                          <span className="px-2 py-1 bg-accent text-white text-xs font-semibold rounded">
                            {article.category}
                          </span>
                          <span className="text-xs text-gray-500 flex items-center gap-1">
                            <Newspaper size={12} />
                            {article.source}
                          </span>
                        </div>

                        <h3 className="text-lg font-bold text-primary mb-2 line-clamp-2">
                          <Link
                            href={article.href || `/tin-tuc`}
                            className="hover:text-accent transition"
                          >
                            {article.title}
                          </Link>
                        </h3>

                        {article.excerpt && (
                          <p className="text-gray-600 text-sm mb-3 line-clamp-2">{article.excerpt}</p>
                        )}

                        <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                          {article.date && (
                            <div className="flex items-center gap-1">
                              <Calendar size={14} />
                              {article.date}
                            </div>
                          )}
                        </div>

                        <Link
                          href={article.href || '/tin-tuc'}
                          className="text-accent font-medium hover:underline text-sm"
                        >
                          Đọc tiếp →
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
