'use client';

import Link from 'next/link';
import { CheckCircle, TrendingUp, HandCoins, Gift } from 'lucide-react';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function FeaturesSection() {
  const features: Feature[] = [
    {
      icon: <CheckCircle size={64} className="text-gray-800" strokeWidth={1.5} />,
      title: 'Cam kết xác thực',
      description: 'Tất cả bất động sản được xác minh',
    },
    {
      icon: <TrendingUp size={64} className="text-gray-800" strokeWidth={1.5} />,
      title: 'Dẫn đầu số lượng',
      description: 'Hàng triệu tin đăng mỗi ngày',
    },
    {
      icon: <HandCoins size={64} className="text-gray-800" strokeWidth={1.5} />,
      title: 'Trợn hỗ trợ, chi phí thấp',
      description: 'Dịch vụ chuyên nghiệp với giá hợp lý',
    },
    {
      icon: <Gift size={64} className="text-gray-800" strokeWidth={1.5} />,
      title: 'Nhận nhiều ưu đãi',
      description: 'Ưu đãi độc quyền cho thành viên',
    },
  ];

  return (
    <section className="bg-white py-16 md:py-24 px-4 sm:px-6 lg:px-8">
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
            href="/vi-sao-chon-rever"
            className="px-8 py-3 border-2 border-gray-800 text-gray-800 font-semibold rounded-lg hover:bg-gray-800 hover:text-white transition"
          >
            Tìm hiểu thêm
          </Link>
        </div>
      </div>
    </section>
  );
}
