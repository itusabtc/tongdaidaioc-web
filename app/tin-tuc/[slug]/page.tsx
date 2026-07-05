import Link from 'next/link';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Calendar, User, Share2, Eye } from 'lucide-react';

export const metadata = {
  title: 'Bài viết - TDDO',
  description: 'Bài viết chi tiết từ Tổng Đài Địa Ốc',
};

export default function ArticleDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const articleData: Record<string, any> = {
    'tiet-kiem-thoi-gian-mua-nha': {
      title: '5 cách tiết kiệm thời gian khi mua nhà',
      author: 'Nguyễn Văn A',
      date: '2024-07-05',
      category: 'Hướng dẫn',
      views: 2450,
      content: `
Mua nhà là quyết định lớn trong cuộc đời. Tuy nhiên, quá trình tìm kiếm và so sánh có thể mất rất nhiều thời gian. Dưới đây là 5 cách tiết kiệm thời gian khi mua nhà:

## 1. Sử dụng nền tảng tìm kiếm hiệu quả

Thay vì chạy vòng vòng xem từng bất động sản, hãy sử dụng các nền tảng trực tuyến như TDDO. Bạn có thể lọc theo giá, diện tích, số phòng, và vị trí trong vài giây.

## 2. Xác định tiêu chí rõ ràng

Trước khi bắt đầu tìm kiếm:
- Ngân sách của bạn là bao nhiêu?
- Vị trí ưu tiên ở đâu?
- Cần bao nhiêu phòng?
- Tiện ích nào là bắt buộc?

Khi tiêu chí rõ ràng, bạn sẽ loại bỏ nhanh chóng những lựa chọn không phù hợp.

## 3. Chuẩn bị tài chính sẵn sàng

Hãy chuẩn bị đầy đủ tài chính trước:
- Tiền vay
- Tiền mặt
- Giấy tờ vay

Khi bạn sẵn sàng tài chính, bạn có thể nhanh chóng quyết định mua.

## 4. Liên hệ với các chuyên gia

Nếu cần, hãy thuê một đại lý bất động sán. Họ sẽ giúp bạn tìm kiếm nhanh hơn và đàm phán giá tốt.

## 5. Thực hiện kiểm tra toàn diện

Khi tìm được căn nhà phù hợp, hãy kiểm tra:
- Tình trạng kết cấu
- Hệ thống điện, nước, gas
- Những công trình sắp tới gần đó
- Lịch sử giao dịch của bất động sán

Việc kiểm tra kỹ lưỡng sẽ tiết kiệm thời gian và chi phí sau này.

## Kết luận

Tìm mua nhà không cần phải là quá trình lâu dài. Bằng cách sử dụng công nghệ, xác định rõ tiêu chí, và chuẩn bị sẵn sàng, bạn có thể tìm được ngôi nhà lý tưởng nhanh chóng.
      `,
    },
  };

  const article = articleData[params.slug] || articleData['tiet-kiem-thoi-gian-mua-nha'];

  const relatedArticles = [
    { slug: 'sieu-vong-bat-dong-san-2024', title: 'Dự báo bất động sán 2024', category: 'Thị trường' },
    { slug: 'dau-tu-bat-dong-san-an-toan', title: 'Cách đầu tư bất động sán an toàn', category: 'Đầu tư' },
    { slug: 'lua-chon-khu-dan-cu-thi-duong', title: 'Chọn khu đô thị thích hợp', category: 'Hướng dẫn' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      <main className="flex-1 pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Header */}
          <div className="mb-8">
            <span className="px-3 py-1 bg-accent text-white text-sm font-semibold rounded">
              {article.category}
            </span>
            <h1 className="text-4xl font-bold text-primary mt-4 mb-6">
              {article.title}
            </h1>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-6 text-gray-600 pb-6 border-b">
              <div className="flex items-center gap-2">
                <User size={16} />
                <span>{article.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>{new Date(article.date).toLocaleDateString('vi-VN')}</span>
              </div>
              <div className="flex items-center gap-2">
                <Eye size={16} />
                <span>{article.views.toLocaleString()} lượt xem</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <article className="prose max-w-none mb-12">
            <div className="text-gray-700 whitespace-pre-wrap leading-relaxed">
              {article.content}
            </div>
          </article>

          {/* Share */}
          <div className="py-6 border-y flex items-center gap-4">
            <span className="font-semibold text-primary">Chia sẻ:</span>
            <button className="p-2 rounded border border-gray-200 hover:border-blue-500 hover:text-blue-500 transition">
              <Share2 size={18} />
            </button>
            <span className="text-sm text-gray-600">Facebook</span>
            <span className="text-sm text-gray-600">Twitter</span>
            <span className="text-sm text-gray-600">Copy link</span>
          </div>

          {/* Author Card */}
          <div className="my-12 p-6 bg-gray-50 rounded-lg border border-gray-200">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-accent rounded-full flex-shrink-0" />
              <div>
                <h3 className="font-bold text-primary">{article.author}</h3>
                <p className="text-sm text-gray-600">
                  Chuyên gia bất động sán với nhiều năm kinh nghiệm. Đam mê chia sẻ kiến thức và giúp bạn đạt mục tiêu.
                </p>
              </div>
            </div>
          </div>

          {/* Related Articles */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-primary mb-8">
              Bài viết liên quan
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedArticles.map((rel, idx) => (
                <Link
                  key={idx}
                  href={`/tin-tuc/${rel.slug}`}
                  className="p-6 border border-gray-200 rounded-lg hover:shadow-lg hover:border-accent transition"
                >
                  <span className="text-xs font-semibold text-accent">
                    {rel.category}
                  </span>
                  <h4 className="font-bold text-primary mt-2 line-clamp-2">
                    {rel.title}
                  </h4>
                </Link>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 p-8 bg-primary text-white rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-4">
              Tìm nhà lý tưởng của bạn
            </h3>
            <p className="mb-6">
              Khám phá hàng ngàn bất động sán chất lượng trên TDDO
            </p>
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
