import Link from 'next/link';
import { Zap, BarChart3, Users, Settings } from 'lucide-react';
import Header from '@/components/header';
import Footer from '@/components/footer';

export const metadata = {
  title: 'Công cụ quản lý - TDDO',
  description: 'Các công cụ quản lý tin đăng, phân tích doanh số, CRM, quảng cáo dành cho môi giới bất động sản.',
};

export default function BrokerToolsPage() {
  const tools = [
    {
      icon: BarChart3,
      title: 'Dashboard Analytics',
      description: 'Theo dõi lượt xem, liên hệ, và hiệu suất bán hàng theo thời gian thực',
      features: ['Biểu đồ chi tiết', 'Xuất báo cáo', 'So sánh hiệu suất'],
    },
    {
      icon: Users,
      title: 'CRM Khách hàng',
      description: 'Quản lý danh bạ khách hàng tiềm năng, theo dõi tương tác',
      features: ['Lưu danh bạ', 'Ghi chú cuộc gọi', 'Lịch sử tương tác'],
    },
    {
      icon: Zap,
      title: 'Quảng cáo tự động',
      description: 'Đẩy tin đăng lên top, quảng cáo theo địa chỉ, theo dõi ROI',
      features: ['Lên top tự động', 'Quảng cáo vị trí', 'Theo dõi chi phí'],
    },
    {
      icon: Settings,
      title: 'Quản lý tin đăng',
      description: 'Tạo, chỉnh sửa, xóa tin đăng hàng loạt dễ dàng',
      features: ['Chỉnh sửa hàng loạt', 'Tạo mẫu tin', 'Lên lịch đăng'],
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      <main className="flex-1 pt-20">
        {/* Hero */}
        <section className="bg-primary text-white py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold mb-4">Công cụ quản lý môi giới</h1>
            <p className="text-xl text-gray-100">
              Các tính năng mạnh mẽ giúp bạn quản lý kinh doanh hiệu quả
            </p>
          </div>
        </section>

        {/* Tools Grid */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {tools.map((tool, index) => {
                const Icon = tool.icon;
                return (
                  <div
                    key={index}
                    className="p-8 border border-gray-200 rounded-lg hover:shadow-lg transition"
                  >
                    <Icon className="w-12 h-12 text-accent mb-4" />
                    <h3 className="text-2xl font-bold text-primary mb-2">
                      {tool.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{tool.description}</p>
                    <ul className="space-y-2">
                      {tool.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-gray-700 flex items-center">
                          <span className="w-1.5 h-1.5 bg-accent rounded-full mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Documentation */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">
              Hướng dẫn sử dụng
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: 'Tạo tài khoản', desc: 'Bước đầu để bắt đầu sử dụng TDDO' },
                { title: 'Đăng tin đầu tiên', desc: 'Hướng dẫn chi tiết từng bước' },
                { title: 'Quảng cáo tin đăng', desc: 'Tối ưu hóa tiếp cận khách hàng' },
              ].map((doc, idx) => (
                <div key={idx} className="bg-white p-6 rounded-lg border border-gray-200">
                  <h4 className="font-semibold text-primary mb-2">{doc.title}</h4>
                  <p className="text-gray-600 text-sm mb-4">{doc.desc}</p>
                  <Link
                    href="/moi-gioi/huong-dan"
                    className="text-accent font-medium hover:underline"
                  >
                    Xem hướng dẫn
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-accent text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Bắt đầu ngay hôm nay</h2>
            <p className="text-lg mb-8">Tăng doanh thu và quản lý kinh doanh hiệu quả hơn</p>
            <Link
              href="/dang-ky"
              className="inline-block px-8 py-3 bg-white text-accent font-semibold rounded-lg hover:bg-gray-100 transition"
            >
              Đăng ký ngay
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
