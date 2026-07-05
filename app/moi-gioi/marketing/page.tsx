import Link from 'next/link';
import { Target, TrendingUp, Megaphone, Award } from 'lucide-react';
import Header from '@/components/header';
import Footer from '@/components/footer';

export const metadata = {
  title: 'Hỗ trợ Marketing - TDDO',
  description: 'Các chiến lược marketing, công cụ quảng cáo, và tài liệu hỗ trợ kinh doanh cho môi giới bất động sán.',
};

export default function BrokerMarketingPage() {
  const strategies = [
    {
      icon: Target,
      title: 'Quảng cáo theo vị trí',
      description: 'Tiếp cận khách hàng chính xác ở các quận/huyện bạn quan tâm',
    },
    {
      icon: TrendingUp,
      title: 'Tối ưu hóa SEO',
      description: 'Giúp tin đăng của bạn lên đầu trang tìm kiếm',
    },
    {
      icon: Megaphone,
      title: 'Marketing nội dung',
      description: 'Tạo bài viết, video để xây dựng thương hiệu cá nhân',
    },
    {
      icon: Award,
      title: 'Xây dựng uy tín',
      description: 'Hỗ trợ xác thực tài khoản, lập hồ sơ chuyên nghiệp',
    },
  ];

  const tips = [
    {
      title: 'Chụp ảnh chuyên nghiệp',
      description: 'Ảnh chất lượng cao tăng 3x lượt xem và liên hệ',
      tips: ['Ánh sáng tự nhiên', 'Góc ảnh đẹp', 'Bao gồm hình ảnh 360°'],
    },
    {
      title: 'Viết mô tả hấp dẫn',
      description: 'Mô tả rõ ràng giúp khách hàng quyết định nhanh hơn',
      tips: ['Liệt kê điểm nổi bật', 'Nêu rõ giá và vị trị', 'Thêm thông tin liên hệ'],
    },
    {
      title: 'Cập nhật tin thường xuyên',
      description: 'Tin mới lên top, tăng lượt hiển thị',
      tips: ['Đăng lại tin mỗi tuần', 'Chỉnh sửa mô tả', 'Cập nhật giá nếu cần'],
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      <main className="flex-1 pt-20">
        {/* Hero */}
        <section className="bg-primary text-white py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold mb-4">Hỗ trợ Marketing</h1>
            <p className="text-xl text-gray-100">
              Các chiến lược và công cụ giúp bạn bán nhanh hơn
            </p>
          </div>
        </section>

        {/* Strategies */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">
              Chiến lược marketing hiệu quả
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {strategies.map((strategy, index) => {
                const Icon = strategy.icon;
                return (
                  <div
                    key={index}
                    className="p-6 bg-gray-50 rounded-lg border border-gray-200 hover:shadow-lg transition text-center"
                  >
                    <Icon className="w-12 h-12 text-accent mx-auto mb-4" />
                    <h3 className="text-lg font-bold text-primary mb-2">
                      {strategy.title}
                    </h3>
                    <p className="text-gray-600">{strategy.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Tips & Best Practices */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">
              Mẹo bán hàng hiệu quả
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {tips.map((tip, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-lg border border-gray-200"
                >
                  <h3 className="text-xl font-bold text-primary mb-2">
                    {tip.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{tip.description}</p>
                  <ul className="space-y-2">
                    {tip.tips.map((t, idx) => (
                      <li key={idx} className="text-sm text-gray-700 flex items-start">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full mr-2 mt-1 flex-shrink-0" />
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Resources */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">
              Tài liệu tham khảo
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: 'Hướng dẫn viết tin hay', type: 'PDF' },
                { title: 'Bảng giá quảng cáo 2024', type: 'PDF' },
                { title: 'Video hướng dẫn quảng cáo', type: 'Video' },
                { title: 'Câu hỏi thường gặp', type: 'FAQ' },
              ].map((resource, idx) => (
                <div
                  key={idx}
                  className="p-6 border border-gray-200 rounded-lg hover:border-accent transition flex justify-between items-center"
                >
                  <div>
                    <h4 className="font-semibold text-primary mb-1">
                      {resource.title}
                    </h4>
                    <p className="text-sm text-gray-600">{resource.type}</p>
                  </div>
                  <button className="px-4 py-2 text-accent font-medium border border-accent rounded hover:bg-accent hover:text-white transition">
                    Tải xuống
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-accent text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Cần tư vấn marketing?</h2>
            <p className="text-lg mb-8">Liên hệ với đội ngũ chuyên gia của chúng tôi</p>
            <a
              href="tel:1800234546"
              className="inline-block px-8 py-3 bg-white text-accent font-semibold rounded-lg hover:bg-gray-100 transition"
            >
              Gọi ngay
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
