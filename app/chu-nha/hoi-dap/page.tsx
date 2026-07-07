import Header from '@/components/header';
import Footer from '@/components/footer';
import Link from 'next/link';
import { ChevronDown, MessageCircle } from 'lucide-react';

export const metadata = {
  title: 'Hỏi đáp - Chủ nhà | TDDO',
  description: 'Câu hỏi thường gặp từ chủ nhà khi sử dụng Tổng Đài Địa Ốc để đăng tin bán hoặc cho thuê nhà đất.',
};

export default function FAQPage() {
  const faqs = [
    {
      q: 'Làm sao để đăng tin bán / cho thuê nhà đất?',
      a: 'Bạn có thể đăng tin miễn phí chỉ với vài bước: đăng nhập hoặc tạo tài khoản, chọn loại tin, chụp ảnh, AI sẽ gợi ý tiêu đề và mô tả. Sau đó xác nhận và đăng lên sân chơi TDDO.',
    },
    {
      q: 'Có phí gì để đăng tin?',
      a: 'Đăng tin trên TDDO hoàn toàn miễn phí. Bạn không mất tiền để đăng, chỉnh sửa hay xóa tin.',
    },
    {
      q: 'AI có thể giúp gì khi tôi đăng tin?',
      a: 'AI giúp bạn viết tiêu đề và mô tả hấp dẫn, chỉnh sửa ảnh, đề xuất giá phù hợp với khu vực. Tất cả để tiết kiệm thời gian và thu hút người mua hơn.',
    },
    {
      q: 'Tôi có thể xem ai đã xem tin của mình không?',
      a: 'Có, bạn có thể xem số lượt xem, lượt liên hệ và thông tin người quan tâm từ tài khoản cá nhân của mình.',
    },
    {
      q: 'Làm sao để liên hệ với người quan tâm tin của tôi?',
      a: 'Người quan tâm sẽ liên hệ với bạn qua SĐT hoặc Zalo. Bạn cũng có thể gửi lời nhắn cho họ thông qua hệ thống CRM trên TDDO.',
    },
    {
      q: 'TDDO có bảo đảm về tính hợp lệ của giao dịch không?',
      a: 'TDDO cung cấp sân chơi giao dịch; bạn chịu trách nhiệm pháp lý về thông tin tin đăng. Chúng tôi hỗ trợ kết nối nhưng không cam kết xác thực hay thẩm định pháp lý các giao dịch.',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      <main className="flex-1 pt-20">
        <section className="bg-primary text-white py-12 md:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-4">
              <MessageCircle className="w-8 h-8" />
              <span className="text-lg font-semibold">Hỏi đáp</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Hỏi đáp — Dành cho chủ nhà
            </h1>
            <p className="text-xl text-gray-100 max-w-3xl leading-relaxed">
              Giải đáp những câu hỏi thường gặp khi sử dụng TDDO để đăng tin.
            </p>
          </div>
        </section>

        <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div key={idx} className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <details className="group cursor-pointer">
                    <summary className="flex items-start justify-between gap-4 font-semibold text-gray-900">
                      <span>{faq.q}</span>
                      <ChevronDown
                        size={20}
                        className="text-gray-600 group-open:rotate-180 transition flex-shrink-0 mt-1"
                      />
                    </summary>
                    <p className="text-gray-600 mt-4 leading-relaxed">{faq.a}</p>
                  </details>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-primary text-white py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Vẫn có thắc mắc?</h2>
            <p className="text-lg text-gray-100 mb-8">
              Liên hệ trực tiếp với đội hỗ trợ của TDDO.
            </p>
            <Link
              href="/lien-he"
              className="inline-block px-8 py-3 bg-accent text-white font-semibold rounded-lg hover:opacity-90 transition"
            >
              Gửi thắc mắc
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
