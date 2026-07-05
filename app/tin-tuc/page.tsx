import Link from 'next/link';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Calendar, User } from 'lucide-react';

export const metadata = {
  title: 'Tin tức & Bài viết - TDDO',
  description: 'Bài viết, hướng dẫn, tin thị trường về bất động sán. Cập nhật xu hướng mới nhất.',
};

export default function ArticlesPage() {
  const articles = [
    {
      slug: 'tiet-kiem-thoi-gian-mua-nha',
      title: '5 cách tiết kiệm thời gian khi mua nhà',
      excerpt: 'Mẹo giúp bạn tìm được ngôi nhà lý tưởng nhanh chóng và hiệu quả',
      category: 'Hướng dẫn',
      author: 'Nguyễn Văn A',
      date: '2024-07-05',
      image: '🏠',
    },
    {
      slug: 'sieu-vong-bat-dong-san-2024',
      title: 'Dự báo bất động sán 2024',
      excerpt: 'Phân tích xu hướng thị trường và dự đoán giá cả năm 2024',
      category: 'Thị trường',
      author: 'Chuyên gia TDDO',
      date: '2024-07-04',
      image: '📈',
    },
    {
      slug: 'trang-bi-cho-nha-moi',
      title: 'Trang bị cần thiết cho nhà mới',
      excerpt: 'Danh sách các vật dụng và trang bị không thể thiếu khi vào nhà mới',
      category: 'Hướng dẫn',
      author: 'Trần Thị B',
      date: '2024-07-03',
      image: '🛋️',
    },
    {
      slug: 'dau-tu-bat-dong-san-an-toan',
      title: 'Cách đầu tư bất động sán an toàn',
      excerpt: 'Các yếu tố cần xem xét để tránh rủi ro trong đầu tư bất động sán',
      category: 'Đầu tư',
      author: 'Lê Quang Minh',
      date: '2024-07-02',
      image: '💼',
    },
    {
      slug: 'cho-thue-nha-co-loi-nhuan',
      title: 'Cách cho thuê nhà sinh lời cao',
      excerpt: 'Mẹo định giá, chọn khách, và quản lý để tối ưu doanh thu',
      category: 'Hướng dẫn',
      author: 'Phạm Văn C',
      date: '2024-07-01',
      image: '💰',
    },
    {
      slug: 'lua-chon-khu-dan-cu-thi-duong',
      title: 'Chọn khu đô thị thích hợp',
      excerpt: 'So sánh các khu đô thị lớn và cách lựa chọn phù hợp với nhu cầu',
      category: 'Hướng dẫn',
      author: 'Hoàng Thị D',
      date: '2024-06-30',
      image: '🏢',
    },
  ];

  const categories = [
    { name: 'Tất cả', count: 42 },
    { name: 'Hướng dẫn', count: 18 },
    { name: 'Thị trường', count: 12 },
    { name: 'Đầu tư', count: 8 },
    { name: 'Khác', count: 4 },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      <main className="flex-1 pt-20">
        {/* Hero */}
        <section className="bg-primary text-white py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold mb-4">Tin tức & Bài viết</h1>
            <p className="text-xl text-gray-100">
              Cập nhật tin thị trường, hướng dẫn, và kinh nghiệm từ các chuyên gia
            </p>
          </div>
        </section>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="font-bold text-primary mb-4">Danh mục</h3>
                <div className="space-y-2">
                  {categories.map((cat, idx) => (
                    <button
                      key={idx}
                      className="w-full text-left px-4 py-2 rounded hover:bg-gray-200 transition flex justify-between"
                    >
                      <span className="text-gray-700">{cat.name}</span>
                      <span className="text-gray-500 text-sm">({cat.count})</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Articles Grid */}
            <div className="lg:col-span-3">
              <div className="space-y-6">
                {articles.map((article, index) => (
                  <article
                    key={index}
                    className="p-6 bg-gray-50 rounded-lg border border-gray-200 hover:shadow-lg transition hover:border-accent"
                  >
                    <div className="flex gap-6">
                      {/* Thumbnail */}
                      <div className="flex-shrink-0 w-20 h-20 bg-gray-300 rounded-lg flex items-center justify-center text-3xl">
                        {article.image}
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="px-2 py-1 bg-accent text-white text-xs font-semibold rounded">
                            {article.category}
                          </span>
                        </div>

                        <h3 className="text-lg font-bold text-primary mb-2 line-clamp-2">
                          <Link
                            href={`/tin-tuc/${article.slug}`}
                            className="hover:text-accent transition"
                          >
                            {article.title}
                          </Link>
                        </h3>

                        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                          {article.excerpt}
                        </p>

                        <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                          <div className="flex items-center gap-1">
                            <User size={14} />
                            {article.author}
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar size={14} />
                            {new Date(article.date).toLocaleDateString('vi-VN')}
                          </div>
                        </div>

                        <Link
                          href={`/tin-tuc/${article.slug}`}
                          className="text-accent font-medium hover:underline text-sm"
                        >
                          Đọc tiếp →
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex justify-center gap-2 mt-12">
                {[1, 2, 3, 4, 5].map((page) => (
                  <button
                    key={page}
                    className={`px-4 py-2 rounded border transition ${
                      page === 1
                        ? 'bg-accent text-white border-accent'
                        : 'border-gray-300 hover:border-accent'
                    }`}
                  >
                    {page}
                  </button>
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
