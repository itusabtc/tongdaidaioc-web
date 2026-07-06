'use client';

import Link from 'next/link';
import { Zap, Bot, Users, LayoutGrid } from 'lucide-react';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function FeaturesSection() {
  const features: Feature[] = [
    {
      icon: <Zap size={64} className="text-primary" strokeWidth={1.5} />,
      title: 'Đăng tin cực nhanh',
      description: 'Chỉ vài bước, miễn phí — chủ nhà và môi giới đều đăng được ngay',
    },
    {
      icon: <Bot size={64} className="text-primary" strokeWidth={1.5} />,
      title: 'AI hỗ trợ thông minh',
      description: 'Gợi ý mô tả, giá tham khảo và trả lời câu hỏi — tiết kiệm thời gian cho bạn',
    },
    {
      icon: <Users size={64} className="text-primary" strokeWidth={1.5} />,
      title: 'Kết nối người mua & bán',
      description: 'Công cụ liên hệ, CRM và chatbot giúp hai bên gặp nhau nhanh hơn',
    },
    {
      icon: <LayoutGrid size={64} className="text-primary" strokeWidth={1.5} />,
      title: 'Sân chơi giao dịch BĐS',
      description: 'Nơi chủ nhà, người mua và môi giới cùng tìm kiếm, trao đổi cơ hội',
    },
  ];

  return (
    <section className="bg-white py-6 md:py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-6">
          {features.map((feature, index) => (
            <div key={index} className="text-center flex flex-col items-center">
              <div className="mb-3 flex justify-center">
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
