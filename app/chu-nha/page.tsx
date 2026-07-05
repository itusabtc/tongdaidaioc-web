import Header from '@/components/header';
import Footer from '@/components/footer';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Dành cho chủ nhà - TDDO',
  description: 'Các công cụ và dịch vụ giúp chủ nhà bán và cho thuê bất động sản dễ dàng',
};

export default function ChuNhaPage() {
  const features = [
    {
      title: 'Đăng tin bất động sản',
      description: 'Đăng tin nhanh chóng, dễ dàng với giao diện thân thiện',
      href: '/chu-nha/dang-tin',
      icon: '📝',
    },
    {
      title: 'Quản lý tin đăng',
      description: 'Theo dõi và quản lý các tin đăng của bạn hiệu quả',
      href: '/chu-nha/quan-ly',
      icon: '📊',
    },
    {
      title: 'Hỗ trợ bán nhà',
      description: 'Nhận tư vấn từ các chuyên gia bất động sản',
      href: '/chu-nha/ho-tro',
      icon: '💡',
    },
    {
      title: 'Công cụ đánh giá',
      description: 'Tính giá bất động sân và phân tích thị trường',
      href: '/chu-nha/cong-cu',
      icon: '🔧',
    },
    {
      title: 'Hỏi đáp',
      description: 'Giải đáp các thắc mắc về bán và cho thuê nhà',
      href: '/chu-nha/hoi-dap',
      icon: '❓',
    },
    {
      title: 'Blog chủ nhà',
      description: 'Chia sẻ kinh nghiệm và mẹo vặt bất động sản',
      href: '/chu-nha/blog',
      icon: '📚',
    },
  ];

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-orange-50 py-16 md:py-24">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Dành cho chủ nhà
            </h1>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl">
              Các công cụ và dịch vụ hoàn chỉnh giúp chủ nhà bán và cho thuê bất động sản một cách hiệu quả và dễ dàng
            </p>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature) => (
                <Link
                  key={feature.href}
                  href={feature.href}
                  className="group bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg hover:border-accent transition-all"
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-lg font-bold text-primary mb-2 group-hover:text-accent transition">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{feature.description}</p>
                  <div className="flex items-center text-accent text-sm font-medium group-hover:gap-2 gap-1 transition-all">
                    Tìm hiểu thêm
                    <ArrowRight size={16} />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
