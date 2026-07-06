import Header from '@/components/header';
import Footer from '@/components/footer';
import Link from 'next/link';
import { Zap, Bot, Users, LayoutGrid, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Về chúng tôi - TDDO',
  description:
    'Tổng Đài Địa Ốc — sân chơi hỗ trợ mua bán, cho thuê bất động sản với công cụ đăng tin và AI.',
};

export default function AboutPage() {
  const pillars = [
    {
      icon: LayoutGrid,
      title: 'Sân chơi giao dịch',
      description:
        'TDDO là nơi chủ nhà, người mua, người thuê và môi giới cùng đăng tin, tìm kiếm và trao đổi — không phải sàn môi giới truyền thống.',
    },
    {
      icon: Zap,
      title: 'Đăng tin dễ dàng',
      description:
        'Đăng tin miễn phí, vài bước là xong. Phù hợp cả chủ nhà lẫn môi giới muốn tiếp cận khách hàng nhanh hơn.',
    },
    {
      icon: Bot,
      title: 'AI đồng hành',
      description:
        'Trợ lý AI gợi ý mô tả tin, tham khảo giá và trả lời câu hỏi thường gặp — hỗ trợ bạn tập trung vào việc kết nối.',
    },
    {
      icon: Users,
      title: 'Hỗ trợ kết nối',
      description:
        'Công cụ liên hệ, CRM và chatbot giúp người mua và người bán gặp nhau thuận tiện hơn trên cùng một nền tảng.',
    },
  ];

  const audiences = [
    {
      label: 'Chủ nhà',
      desc: 'Đăng tin chính chủ, nhận hỗ trợ AI soạn mô tả và theo dõi lượt quan tâm.',
      href: '/chu-nha',
    },
    {
      label: 'Người mua / thuê',
      desc: 'Tìm tin theo khu vực, lọc nhanh và liên hệ trực tiếp người đăng.',
      href: '/mua-ban',
    },
    {
      label: 'Môi giới',
      desc: 'Quản lý tin, khách hàng qua CRM và dùng AI hỗ trợ tư vấn.',
      href: '/moi-gioi',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      <main className="flex-1 pt-20">
        <section className="bg-primary text-white py-16 md:py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Về Tổng Đài Địa Ốc
            </h1>
            <p className="text-xl text-gray-100 max-w-3xl leading-relaxed">
              Chúng tôi xây dựng sân chơi hỗ trợ mua bán, cho thuê bất động sản — nơi công nghệ
              và AI giúp mọi người đăng tin, tìm kiếm và kết nối dễ dàng hơn.
            </p>
          </div>
        </section>

        <section className="py-14 md:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 bg-gray-50 rounded-lg border border-gray-200">
                <h2 className="text-2xl font-bold text-primary mb-4">Chúng tôi làm gì</h2>
                <p className="text-gray-700 leading-relaxed">
                  TDDO cung cấp nền tảng đăng tin, tìm kiếm và công cụ hỗ trợ cho chủ nhà, người
                  mua/thuê và môi giới. Mục tiêu là giảm rào cản khi đăng tin và tăng cơ hội hai
                  bên gặp nhau — không thay thế vai trò tư vấn hay thẩm định pháp lý của bạn.
                </p>
              </div>

              <div className="p-8 bg-accent text-white rounded-lg">
                <h2 className="text-2xl font-bold mb-4">Hướng phát triển</h2>
                <p className="leading-relaxed">
                  Tiếp tục mở rộng công cụ AI, CRM và trải nghiệm tìm kiếm tại TP.HCM và các khu
                  vực lân cận — luôn ưu tiên tốc độ đăng tin và chất lượng kết nối giữa người mua
                  và người bán.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-14 md:py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-10">Lợi thế nền tảng</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {pillars.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="bg-white p-8 rounded-lg border border-gray-200 flex gap-5"
                  >
                    <Icon className="w-10 h-10 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-bold text-primary mb-2">{item.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-14 md:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-10">Dành cho ai?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {audiences.map((item, index) => (
                <div
                  key={index}
                  className="p-6 rounded-lg border border-gray-200 hover:border-accent/50 transition"
                >
                  <h3 className="text-xl font-bold text-primary mb-3">{item.label}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{item.desc}</p>
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-1 text-accent font-semibold hover:underline"
                  >
                    Khám phá
                    <ArrowRight size={16} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 bg-primary text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Tham gia sân chơi ngay</h2>
            <p className="text-lg text-gray-100 mb-8">
              Đăng tin miễn phí hoặc bắt đầu tìm kiếm — AI và công cụ của TDDO sẵn sàng hỗ trợ bạn.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/dang-tin"
                className="inline-block px-8 py-3 bg-accent text-white font-semibold rounded-lg hover:opacity-90 transition"
              >
                Đăng tin ngay
              </Link>
              <Link
                href="/mua-ban"
                className="inline-block px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary transition"
              >
                Tìm nhà đất
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
