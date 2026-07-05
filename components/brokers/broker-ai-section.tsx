'use client';

import Link from 'next/link';
import { Brain, BarChart3, MessageSquare, Zap } from 'lucide-react';

interface AIFeature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function BrokerAISection() {
  const features: AIFeature[] = [
    {
      icon: <Brain size={48} className="text-white" strokeWidth={1.5} />,
      title: 'AI Lead Scoring',
      description: 'Xác định khách hàng tiềm năng cao nhất tự động',
    },
    {
      icon: <BarChart3 size={48} className="text-white" strokeWidth={1.5} />,
      title: 'AI Market Analytics',
      description: 'Phân tích xu hướng thị trường, giá cả, nhu cầu theo khu vực',
    },
    {
      icon: <MessageSquare size={48} className="text-white" strokeWidth={1.5} />,
      title: 'AI Content Generator',
      description: 'Tạo mô tả bất động sản hấp dẫn, gợi ý điểm bán tự động',
    },
    {
      icon: <Zap size={48} className="text-white" strokeWidth={1.5} />,
      title: 'AI Workflow Automation',
      description: 'Tự động hóa các tác vụ lặp lại, tiết kiệm thời gian quý giá',
    },
  ];

  return (
    <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-blue-700">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Dành cho Môi giới - AI Empowered
          </h2>
          <p className="text-gray-100 text-lg max-w-2xl mx-auto">
            Công nghệ AI tiên tiến giúp môi giới tăng doanh số, quản lý khách hàng hiệu quả hơn
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 hover:bg-opacity-20 transition-all border border-white border-opacity-20"
            >
              <div className="mb-4 flex justify-center">
                <div className="p-3 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2 text-center">
                {feature.title}
              </h3>
              <p className="text-gray-100 text-sm text-center">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/moi-gioi"
            className="inline-block px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:shadow-xl hover:scale-105 transition-all"
          >
            Khám phá công cụ cho Môi giới →
          </Link>
        </div>
      </div>
    </section>
  );
}
