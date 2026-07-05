import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { getContent } from '@/lib/api';

interface Props {
  params: Promise<{ slug: string }>;
}

export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  try {
    const content = await getContent(slug);
    return {
      title: `${content.title} - Tổng Đài Địa Ốc`,
      description: content.title,
    };
  } catch {
    return { title: 'Tiện ích - Tổng Đài Địa Ốc' };
  }
}

export default async function UtilityDetailPage({ params }: Props) {
  const { slug } = await params;
  let title = 'Tiện ích';
  let bodyHtml: string | null = null;

  try {
    const content = await getContent(slug);
    title = content.title;
    bodyHtml = content.bodyHtml ?? null;
  } catch {
    bodyHtml = null;
  }

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-1 pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <nav className="text-sm text-gray-500 mb-6">
            <Link href="/" className="hover:text-primary">Trang chủ</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">Tiện ích</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">{title}</h1>
          {bodyHtml ? (
            <article
              className="prose prose-sm max-w-none text-gray-700"
              dangerouslySetInnerHTML={{ __html: bodyHtml }}
            />
          ) : (
            <p className="text-gray-600">
              Nội dung đang được cập nhật. Vui lòng quay lại sau hoặc{' '}
              <Link href="/lien-he" className="text-primary font-medium hover:underline">
                liên hệ tư vấn
              </Link>
              .
            </p>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
