'use client';

import Link from 'next/link';
import { Brain, BarChart3, MessageSquare, Zap, ClipboardList, MessageCircle, Megaphone, TrendingUp } from 'lucide-react';

interface ToolFeature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface AIFeature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function BrokerUnifiedSection() {
  const tools: ToolFeature[] = [
    {
      icon: <ClipboardList size={48} className="text-primary" strokeWidth={1.5} />,
      title: 'Quản lý tin',
      description: 'Quản lý đầy đủ danh sách bất động sản của bạn',
    },
    {
      icon: <MessageCircle size={48} className="text-primary" strokeWidth={1.5} />,
      title: 'CRM & Chatbot',
      description: 'Giao tiếp hiệu quả với khách hàng tự động',
    },
    {
      icon: <Megaphone size={48} className="text-primary" strokeWidth={1.5} />,
      title: 'Đẩy tin đa kênh',
      description: 'Quảng cáo trên nhiều nền tảng cùng lúc',
    },
    {
      icon: <TrendingUp size={48} className="text-primary" strokeWidth={1.5} />,
      title: 'Thống kê & Báo cáo',
      description: 'Phân tích chi tiết hiệu suất kinh doanh',
    },
  ];

  const aiFeatures: AIFeature[] = [
    {
      icon: <Brain size={40} className="text-white" strokeWidth={1.5} />,
      title: 'AI Lead Scoring',
      description: 'Xác định khách hàng tiềm năng cao nhất tự động',
    },
    {
      icon: <BarChart3 size={40} className="text-white" strokeWidth={1.5} />,
      title: 'AI Market Analytics',
      description: 'Phân tích xu hướng thị trường, giá cả theo khu vực',
    },
    {
      icon: <MessageSquare size={40} className="text-white" strokeWidth={1.5} />,
      title: 'AI Content Generator',
      description: 'Tạo mô tả bất động sản hấp dẫn tự động',
    },
    {
      icon: <Zap size={40} className="text-white" strokeWidth={1.5} />,
      title: 'AI Workflow Automation',
      description: 'Tự động hóa các tác vụ lặp lại, tiết kiệm thời gian',
    },
  ];

  return (
    <>
      {/* Tools Section */}
      <section className="py-10 md:py-14 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Dành cho Môi giới
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Công cụ chuyên nghiệp giúp môi giới tăng doanh số
            </p>
          </div>

          {/* Tools Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="text-center flex flex-col items-center hover:shadow-lg transition-all p-6 rounded-lg"
              >
                <div className="mb-4 flex justify-center">
                  {tool.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {tool.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {tool.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/moi-gioi"
              className="inline-block px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-blue-800 transition-all"
            >
              Tìm hiểu thêm
            </Link>
          </div>
        </div>
      </section>

      {/* AI Features Section */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-blue-700">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Công nghệ AI Tiên tiến
            </h2>
            <p className="text-gray-100 text-lg max-w-2xl mx-auto">
              Công nghệ AI giúp môi giới tăng doanh số, quản lý khách hàng hiệu quả hơn
            </p>
          </div>

          {/* AI Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {aiFeatures.map((feature, index) => (
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
    </>
  );
}
