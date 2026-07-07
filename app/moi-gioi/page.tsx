import Link from 'next/link';
import { Check, TrendingUp, Users, Zap } from 'lucide-react';
import Header from '@/components/header';
import Footer from '@/components/footer';

export const metadata = {
  title: 'Dành cho Môi giới - Tổng Đài Địa Ốc',
  description: 'Công cụ quản lý, hỗ trợ marketing, và cộng đồng môi giới. Quản lý tin đăng, quảng cáo, và phát triển kinh doanh bất động sản.',
};

export default function BrokerPage() {
  const benefits = [
    {
      icon: TrendingUp,
      title: 'Tăng doanh thu',
      description: 'Quản lý nhiều dự án và tin đăng, tối ưu hóa chuyên biệt từ nền tảng',
    },
    {
      icon: Users,
      title: 'Kết nối khách hàng',
      description: 'Tiếp cận 1 triệu khách hàng tiềm năng mỗi tháng',
    },
    {
      icon: Zap,
      title: 'Công cụ mạnh mẽ',
      description: 'Các tính năng quản lý, phân tích, và tiếp thị tự động',
    },
    {
      icon: Check,
      title: 'Hỗ trợ 24/7',
      description: 'Hỗ trợ kỹ thuật và tư vấn luôn sẵn sàng',
    },
  ];

  const features = [
    {
      title: 'Dashboard quản lý',
      description: 'Theo dõi tin đăng, lượt xem, liên hệ, và doanh số bán hàng',
      icon: '📊',
    },
    {
      title: 'Công cụ quảng cáo',
      description: 'Đẩy tin đăng lên top, quảng cáo theo địa chỉ',
      icon: '📢',
    },
    {
      title: 'Quản lý danh bạ',
      description: 'Lưu danh sách khách hàng tiềm năng và theo dõi tương tác',
      icon: '📱',
    },
    {
      title: 'Báo cáo chi tiết',
      description: 'Phân tích hiệu suất, xem xu hướng thị trường',
      icon: '📈',
    },
    {
      title: 'Nền tảng CRM',
      description: 'Quản lý toàn bộ quy trình bán hàng từ tiếp cận đến ký kết',
      icon: '💼',
    },
    {
      title: 'API tích hợp',
      description: 'Kết nối với hệ thống của bạn, tự động hóa quy trình',
      icon: '⚙️',
    },
  ];

  const packages = [
    {
      name: 'Gói Cơ bản',
      price: 'Miễn phí',
      features: [
        '✓ Đăng tối đa 10 tin',
        '✓ Hỗ trợ email',
        '✓ Báo cáo cơ bản',
      ],
    },
    {
      name: 'Gói Pro',
      price: '99.000₫/tháng',
      features: [
        '✓ Đăng tối đa 100 tin',
        '✓ Hỗ trợ ưu tiên 24/7',
        '✓ Báo cáo chi tiết',
        '✓ Công cụ quảng cáo',
        '✓ CRM cơ bản',
      ],
      highlighted: true,
    },
    {
      name: 'Gói Doanh nghiệp',
      price: 'Liên hệ',
      features: [
        '✓ Đăng không giới hạn',
        '✓ Tài khoản quản lý',
        '✓ API tích hợp',
        '✓ Hỗ trợ kỹ thuật',
        '✓ Tùy chỉnh theo yêu cầu',
      ],
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary to-blue-900 text-white py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Dành cho Môi giới
              </h1>
              <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
                Công cụ quản lý, marketing, và hỗ trợ kinh doanh toàn diện
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/moi-gioi/cong-cu"
                  className="px-8 py-3 bg-accent text-white font-semibold rounded-lg hover:opacity-90 transition"
                >
                  Khám phá công cụ
                </Link>
                <a
                  href="tel:1800234546"
                  className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary transition"
                >
                  Liên hệ tư vấn
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">
              Tại sao chọn TDDO?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition"
                  >
                    <Icon className="w-10 h-10 text-accent mb-4" />
                    <h3 className="text-lg font-semibold text-primary mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">
              Các tính năng chính
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="p-6 border border-gray-200 rounded-lg hover:border-accent transition"
                >
                  <div className="text-3xl mb-4">{feature.icon}</div>
                  <h3 className="text-lg font-semibold text-primary mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">
              Gói dịch vụ
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {packages.map((pkg, index) => (
                <div
                  key={index}
                  className={`rounded-lg p-8 ${
                    pkg.highlighted
                      ? 'bg-accent text-white shadow-lg transform scale-105'
                      : 'bg-white border border-gray-200'
                  }`}
                >
                  <h3 className="text-2xl font-bold mb-4">{pkg.name}</h3>
                  <p className="text-3xl font-bold mb-6">{pkg.price}</p>
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className={pkg.highlighted ? 'text-white' : 'text-gray-700'}
                      >
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button
                    className={`w-full py-2 rounded-lg font-semibold transition ${
                      pkg.highlighted
                        ? 'bg-white text-accent hover:bg-gray-100'
                        : 'border-2 border-primary text-primary hover:bg-primary hover:text-white'
                    }`}
                  >
                    Đăng ký
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Sẵn sàng phát triển kinh doanh?
            </h2>
            <p className="text-lg text-gray-100 mb-8">
              Tham gia cộng đồng 10,000+ môi giới thành công trên TDDO
            </p>
            <Link
              href="/moi-gioi/community"
              className="inline-block px-8 py-3 bg-accent text-white font-semibold rounded-lg hover:opacity-90 transition"
            >
              Tham gia cộng đồng
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
