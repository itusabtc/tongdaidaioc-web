import Header from '@/components/header';
import Footer from '@/components/footer';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ChevronLeft } from 'lucide-react';

const articles: Record<string, { title: string; date: string; content: string }> = {
  'cach-viet-mo-ta-tin': {
    title: 'Cách viết mô tả tin bất động sản hấp dẫn',
    date: '05/07/2026',
    content:
      'Mô tả tin rõ ràng, có điểm nổi bật (vị trí, diện tích, tiện ích) giúp thu hút người mua. Dùng AI trên TDDO để gợi ý tiêu đề và mô tả chuẩn SEO từ ảnh và thông tin cơ bản.',
  },
  'dinh-gia-bds': {
    title: 'Định giá tài sản bất động sản — Tránh bán rẻ hoặc treo lâu',
    date: '04/07/2026',
    content:
      'Tham khảo giá các tin cùng khu vực trên TDDO và dùng công cụ AI gợi ý giá. Đặt giá hợp lý giúp tin được quan tâm nhanh hơn mà không bị đánh giá quá cao hoặc quá thấp.',
  },
  'xy-ly-khach-hang': {
    title: 'Xử lý lời nhắn từ người quan tâm — Phản hồi nhanh, đóng deal hơn',
    date: '03/07/2026',
    content:
      'Phản hồi trong vòng vài giờ, hỏi rõ nhu cầu và lịch xem nhà. CRM trên TDDO giúp theo dõi lead và nhắc follow-up để không bỏ sót khách quan tâm.',
  },
  'toi-uu-hoa-anh': {
    title: 'Tối ưu hóa ảnh bất động sản — Kỹ thuật chụp và chỉnh sửa',
    date: '02/07/2026',
    content:
      'Chụp ban ngày, góc rộng phòng khách và view. AI chỉnh sáng trên TDDO giúp ảnh đẹp hơn mà không cần phần mềm phức tạp — ảnh tốt tăng lượt liên hệ rõ rệt.',
  },
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles[slug];
  if (!article) return { title: 'Bài viết - TDDO' };
  return {
    title: `${article.title} | TDDO`,
    description: article.content.slice(0, 160),
  };
}

export default async function HomeownerBlogArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articles[slug];
  if (!article) notFound();

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-1 pt-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link
            href="/chu-nha/blog"
            className="inline-flex items-center gap-1 text-primary hover:text-accent font-medium mb-6"
          >
            <ChevronLeft size={18} />
            Quay lại Blog chủ nhà
          </Link>
          <p className="text-sm text-gray-500 mb-2">{article.date}</p>
          <h1 className="text-3xl font-bold text-gray-900 mb-6">{article.title}</h1>
          <p className="text-gray-700 leading-relaxed text-lg">{article.content}</p>
          <div className="mt-10 p-6 bg-orange-50 rounded-lg border border-orange-100">
            <p className="font-semibold text-gray-900 mb-2">Áp dụng ngay</p>
            <p className="text-gray-600 text-sm mb-4">
              Đăng tin miễn phí với AI hỗ trợ trên sân chơi TDDO.
            </p>
            <Link
              href="/chu-nha/dang-tin"
              className="inline-block px-6 py-3 bg-accent text-white font-semibold rounded-lg hover:opacity-90"
            >
              Đăng tin với AI
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
