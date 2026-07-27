import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Calendar, ExternalLink, Newspaper } from 'lucide-react';
import { getBlogFeed, getBlogFeedDetail, getContent } from '@/lib/api';
import { BLOG_PLACEHOLDER } from '@/lib/blog';

interface Props {
  params: Promise<{ slug: string }>;
}

export const dynamic = 'force-dynamic';

const legacyArticles: Record<
  string,
  { title: string; author: string; date: string; category: string; content: string }
> = {
  'tiet-kiem-thoi-gian-mua-nha': {
    title: '5 cách tiết kiệm thời gian khi mua nhà',
    author: 'Nguyễn Văn A',
    date: '2024-07-05',
    category: 'Hướng dẫn',
    content: `Mua nhà là quyết định lớn trong cuộc đời. Hãy sử dụng nền tảng TDDO để lọc tin nhanh, xác định tiêu chí rõ ràng và chuẩn bị tài chính sẵn sàng trước khi đi xem nhà.`,
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  try {
    const blog = await getBlogFeedDetail(slug);
    return {
      title: `${blog.title} - Tổng Đài Địa Ốc`,
      description: blog.excerpt || blog.title,
    };
  } catch {
    try {
      const content = await getContent(slug);
      return {
        title: `${content.title} - Tổng Đài Địa Ốc`,
        description: content.title,
      };
    } catch {
      const legacy = legacyArticles[slug];
      return {
        title: legacy ? `${legacy.title} - Tổng Đài Địa Ốc` : 'Bài viết - TDDO',
      };
    }
  }
}

export default async function ArticleDetailPage({ params }: Props) {
  const { slug } = await params;

  let title = 'Bài viết';
  let category = 'Tin tức';
  let sourceName = 'Tổng Đài Địa Ốc';
  let sourceUrl: string | null = null;
  let date = new Date().toISOString().slice(0, 10);
  let bodyHtml: string | null = null;
  let plainContent: string | null = null;
  let imageUrl: string | null = null;
  let bankName: string | null = null;
  let found = false;

  try {
    const blog = await getBlogFeedDetail(slug);
    found = true;
    title = blog.title;
    bodyHtml = blog.bodyHtml ?? null;
    imageUrl = blog.imageUrl ?? null;
    sourceName = blog.sourceName;
    sourceUrl = blog.sourceUrl;
    category = blog.category === 'kinh-te' ? 'Kinh tế' : 'Bất động sản';
    if (blog.publishedAt) date = blog.publishedAt;
  } catch {
    try {
      const content = await getContent(slug);
      found = true;
      title = content.title;
      bodyHtml = content.bodyHtml ?? null;
      bankName = content.bankName ?? null;
      imageUrl = content.imageUrl ?? null;
      if (content.contentType === 'mortgage') category = 'Hỗ trợ vay';
    } catch {
      const legacy = legacyArticles[slug];
      if (legacy) {
        found = true;
        title = legacy.title;
        sourceName = legacy.author;
        date = legacy.date;
        category = legacy.category;
        plainContent = legacy.content;
      }
    }
  }

  let related: { slug: string; title: string; category: string }[] = [];
  try {
    const feed = await getBlogFeed(9);
    related = feed
      .filter((i) => i.slug !== slug)
      .slice(0, 3)
      .map((i) => ({
        slug: i.slug,
        title: i.title,
        category: i.sourceName,
      }));
  } catch {
    related = [];
  }

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      <main className="flex-1 pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="mb-8">
            <span className="px-3 py-1 bg-accent text-white text-sm font-semibold rounded">
              {category}
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-6">{title}</h1>
            {bankName && (
              <p className="text-gray-600 mb-4">
                Ngân hàng: <strong>{bankName}</strong>
              </p>
            )}

            <div className="flex flex-wrap items-center gap-4 md:gap-6 text-gray-600 pb-6 border-b">
              <div className="flex items-center gap-2">
                <Newspaper size={16} />
                <span>Nguồn: {sourceName}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>{new Date(date).toLocaleDateString('vi-VN')}</span>
              </div>
            </div>
          </div>

          {imageUrl && (
            <div className="relative w-full aspect-[16/9] mb-8 rounded-xl overflow-hidden bg-gray-100">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={imageUrl || BLOG_PLACEHOLDER}
                alt={title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          <article className="prose prose-lg max-w-none mb-10">
            {bodyHtml ? (
              <div
                className="text-gray-700 leading-relaxed [&_img]:rounded-lg [&_img]:my-4 [&_p]:mb-4"
                dangerouslySetInnerHTML={{ __html: bodyHtml }}
              />
            ) : plainContent ? (
              <div className="text-gray-700 whitespace-pre-wrap leading-relaxed">{plainContent}</div>
            ) : found ? (
              <p className="text-gray-600">Nội dung đang được cập nhật.</p>
            ) : (
              <p className="text-gray-600">Bài viết không tìm thấy.</p>
            )}
          </article>

          {sourceUrl && (
            <p className="text-sm text-gray-500 mb-8 flex items-start gap-2">
              <ExternalLink size={16} className="mt-0.5 shrink-0" />
              <span>
                Bài tổng hợp từ {sourceName}. Đọc bản gốc tại{' '}
                <a
                  href={sourceUrl}
                  className="text-primary underline underline-offset-2"
                  rel="noopener noreferrer"
                >
                  {sourceName}
                </a>
                .
              </span>
            </p>
          )}

          <div className="mt-12">
            <h2 className="text-2xl font-bold text-primary mb-6">Tin liên quan</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/tin-tuc/${rel.slug}`}
                  className="p-6 border border-gray-200 rounded-lg hover:shadow-lg hover:border-accent transition"
                >
                  <span className="text-xs font-semibold text-accent">{rel.category}</span>
                  <h4 className="font-bold text-primary mt-2 line-clamp-2">{rel.title}</h4>
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-16 p-8 bg-primary text-white rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-4">Tìm nhà lý tưởng của bạn</h3>
            <p className="mb-6">Khám phá hàng ngàn bất động sản chất lượng trên TDDO</p>
            <Link
              href="/mua-ban"
              className="inline-block px-8 py-3 bg-accent text-white font-semibold rounded-lg hover:opacity-90 transition"
            >
              Tìm kiếm ngay
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
