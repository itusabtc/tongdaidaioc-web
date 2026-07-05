import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Calendar, User, Share2 } from 'lucide-react';
import { getContent } from '@/lib/api';

interface Props {
  params: Promise<{ slug: string }>;
}

export const dynamic = 'force-dynamic';

const legacyArticles: Record<string, { title: string; author: string; date: string; category: string; content: string }> = {
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

export default async function ArticleDetailPage({ params }: Props) {
  const { slug } = await params;

  let title = 'Bài viết';
  let category = 'Tin tức';
  let author = 'Tổng Đài Địa Ốc';
  let date = new Date().toISOString().slice(0, 10);
  let bodyHtml: string | null = null;
  let plainContent: string | null = null;
  let bankName: string | null = null;

  try {
    const content = await getContent(slug);
    title = content.title;
    bodyHtml = content.bodyHtml ?? null;
    bankName = content.bankName ?? null;
    if (content.contentType === 'mortgage') category = 'Hỗ trợ vay';
  } catch {
    const legacy = legacyArticles[slug];
    if (legacy) {
      title = legacy.title;
      author = legacy.author;
      date = legacy.date;
      category = legacy.category;
      plainContent = legacy.content;
    }
  }

  const relatedArticles = [
    { slug: 'lai-suat-vay-mua-nha-vpbank', title: 'Lãi suất vay mua nhà tại VPbank', category: 'Hỗ trợ vay' },
    { slug: 'lai-suat-vay-mua-nha-bidv', title: 'Lãi suất vay mua nhà trả góp tại BIDV', category: 'Hỗ trợ vay' },
    { slug: 'tiet-kiem-thoi-gian-mua-nha', title: '5 cách tiết kiệm thời gian khi mua nhà', category: 'Hướng dẫn' },
  ].filter((a) => a.slug !== slug);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      <main className="flex-1 pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="mb-8">
            <span className="px-3 py-1 bg-accent text-white text-sm font-semibold rounded">
              {category}
            </span>
            <h1 className="text-4xl font-bold text-primary mt-4 mb-6">{title}</h1>
            {bankName && (
              <p className="text-gray-600 mb-4">Ngân hàng: <strong>{bankName}</strong></p>
            )}

            <div className="flex flex-wrap items-center gap-6 text-gray-600 pb-6 border-b">
              <div className="flex items-center gap-2">
                <User size={16} />
                <span>{author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>{new Date(date).toLocaleDateString('vi-VN')}</span>
              </div>
            </div>
          </div>

          <article className="prose max-w-none mb-12">
            {bodyHtml ? (
              <div
                className="text-gray-700 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: bodyHtml }}
              />
            ) : plainContent ? (
              <div className="text-gray-700 whitespace-pre-wrap leading-relaxed">{plainContent}</div>
            ) : (
              <p className="text-gray-600">Bài viết không tìm thấy.</p>
            )}
          </article>

          <div className="py-6 border-y flex items-center gap-4">
            <span className="font-semibold text-primary">Chia sẻ:</span>
            <button type="button" className="p-2 rounded border border-gray-200 hover:border-blue-500 hover:text-blue-500 transition">
              <Share2 size={18} />
            </button>
          </div>

          <div className="mt-16">
            <h2 className="text-2xl font-bold text-primary mb-8">Bài viết liên quan</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedArticles.slice(0, 3).map((rel) => (
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
            <p className="mb-6">Khám phá hàng ngàn bất động sán chất lượng trên TDDO</p>
            <Link
              href="/"
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
