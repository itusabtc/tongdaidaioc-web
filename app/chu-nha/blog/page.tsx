import Header from '@/components/header';
import Footer from '@/components/footer';
import Link from 'next/link';
import { Newspaper, ChevronRight } from 'lucide-react';

export const metadata = {
  title: 'Blog — Hướng dẫn cho chủ nhà | TDDO',
  description: 'Bài viết hướng dẫn, mẹo bán/cho thuê nhà đất hiệu quả cho chủ nhà trên Tổng Đài Địa Ốc.',
};

export default function BlogPage() {
  const articles = [
    {
      id: '1',
      title: 'Cách viết mô tả tin bất động sản hấp dẫn',
      excerpt: 'Mô tả tin tốt sẽ giúp bạn thu hút nhiều người quan tâm. Tìm hiểu các bí quyết viết mô tả chuẩn từ TDDO.',
      date: '05/07/2026',
      slug: 'cach-viet-mo-ta-tin',
    },
    {
      id: '2',
      title: 'Định giá tài sản bất động sản — Tránh bán rẻ hoặc treo lâu',
      excerpt: 'Giá đúng là chìa khóa. Sử dụng công cụ gợi ý giá của TDDO để định giá chính xác theo khu vực.',
      date: '04/07/2026',
      slug: 'dinh-gia-bds',
    },
    {
      id: '3',
      title: 'Xử lý lời nhắn từ người quan tâm — Phản hồi nhanh, đóng deal hơn',
      excerpt: 'Tư vấn hiệu quả giúp bạn thu hút đúng khách hàng và đóng deal nhanh hơn.',
      date: '03/07/2026',
      slug: 'xy-ly-khach-hang',
    },
    {
      id: '4',
      title: 'Tối ưu hóa ảnh bất động sản — Kỹ thuật chụp và chỉnh sửa',
      excerpt: 'Ảnh đẹp là yếu tố quan trọng. Học cách chụp và chỉnh sửa ảnh bất động sán đẹp.',
      date: '02/07/2026',
      slug: 'toi-uu-hoa-anh',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      <main className="flex-1 pt-20">
        <section className="bg-primary text-white py-12 md:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-4">
              <Newspaper className="w-8 h-8" />
              <span className="text-lg font-semibold">Blog</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Hướng dẫn — Dành cho chủ nhà
            </h1>
            <p className="text-xl text-gray-100 max-w-3xl leading-relaxed">
              Mẹo, hướng dẫn và kinh nghiệm để bán hoặc cho thuê bất động sản hiệu quả trên TDDO.
            </p>
          </div>
        </section>

        <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {articles.map((article) => (
                <article
                  key={article.id}
                  className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg hover:border-primary/20 transition"
                >
                  <p className="text-sm text-gray-500 mb-3">{article.date}</p>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {article.excerpt}
                  </p>
                  <Link
                    href={`/chu-nha/blog/${article.slug}`}
                    className="inline-flex items-center gap-1 text-primary hover:text-accent font-semibold transition"
                  >
                    Đọc tiếp
                    <ChevronRight size={16} />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Sẵn sàng đăng tin?</h2>
            <p className="text-gray-600 text-lg mb-8">
              Áp dụng những gợi ý từ blog để đăng tin hiệu quả với AI hỗ trợ.
            </p>
            <Link
              href="/chu-nha/dang-tin"
              className="inline-block px-8 py-3 bg-accent text-white font-semibold rounded-lg hover:opacity-90 transition"
            >
              Đăng tin ngay
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
