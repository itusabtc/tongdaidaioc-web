'use client';

import Link from 'next/link';
import { CheckCircle, TrendingUp, Zap, Gift } from 'lucide-react';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function FeaturesSection() {
  const features: Feature[] = [
    {
      icon: <CheckCircle size={64} className="text-primary" strokeWidth={1.5} />,
      title: 'Xác thực bất động sản',
      description: 'Tất cả tin đăng được xác minh, bảo đảm tin cậy',
    },
    {
      icon: <TrendingUp size={64} className="text-primary" strokeWidth={1.5} />,
      title: 'Dẫn đầu thị trường',
      description: 'Hàng triệu tin đăng mỗi ngày, tiếp cận hàng nghìn người tìm kiếm',
    },
    {
      icon: <Zap size={64} className="text-primary" strokeWidth={1.5} />,
      title: 'Đăng tin cực nhanh',
      description: 'Chỉ 3 bước, miễn phí, không cần bằng cấp hay kinh nghiệm',
    },
    {
      icon: <Gift size={64} className="text-primary" strokeWidth={1.5} />,
      title: 'Ưu đãi độc quyền',
      description: 'Hỗ trợ 24/7, các công cụ cao cấp, khuyến mãi đặc biệt cho thành viên',
    },
  ];

  return (
    <section className="bg-white py-8 md:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">
          {features.map((feature, index) => (
            <div key={index} className="text-center flex flex-col items-center">
              <div className="mb-4 flex justify-center">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Learn More Button */}
        <div className="flex justify-center">
          <Link
            href="/ve-chung-toi"
            className="px-8 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition"
          >
            Tìm hiểu thêm
          </Link>
        </div>
      </div>
    </section>
  );
}
