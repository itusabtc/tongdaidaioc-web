import Header from '@/components/header';
import Footer from '@/components/footer';
import HeroBanner from '@/components/hero-banner';
import Link from 'next/link';
import Image from 'next/image';
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
    },
    {
      title: 'Quản lý tin đăng',
      description: 'Theo dõi và quản lý các tin đăng của bạn hiệu quả',
      href: '/chu-nha/quan-ly',
    },
    {
      title: 'Hỗ trợ bán nhà',
      description: 'Nhận tư vấn từ các chuyên gia bất động sản',
      href: '/chu-nha/ho-tro',
    },
    {
      title: 'Công cụ đánh giá',
      description: 'Tính giá bất động sân và phân tích thị trường',
      href: '/chu-nha/cong-cu',
    },
    {
      title: 'Hỏi đáp',
      description: 'Giải đáp các thắc mắc về bán và cho thuê nhà',
      href: '/chu-nha/hoi-dap',
    },
    {
      title: 'Blog chủ nhà',
      description: 'Chia sẻ kinh nghiệm và mẹo vặt bất động sản',
      href: '/chu-nha/blog',
    },
  ];

  return (
    <>
      <Header />
      
      {/* Hero Banner */}
      <HeroBanner
        title="Dành cho chủ nhà"
        subtitle="Đăng tin miễn phí, AI hỗ trợ nội dung, kết nối người mua/thuê — Sân chơi giao dịch BĐS"
        backgroundImage="https://images.unsplash.com/photo-1560531676-2d76fb0b0e4e?w=1200&h=500&fit=crop"
        height="large"
        cta={{
          label: 'Đăng tin miễn phí',
          href: '/chu-nha/dang-tin',
        }}
      />

      <main className="pt-0">

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
                  <div className="w-12 h-12 mb-4">
                    <Image
                      src="/icons/property-icon.png"
                      alt="Property icon"
                      width={48}
                      height={48}
                      className="w-full h-full"
                    />
                  </div>
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
