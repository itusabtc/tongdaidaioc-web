'use client';

import Link from 'next/link';
import { Sparkles, Image as ImageIcon, Zap, ChevronRight } from 'lucide-react';

export default function HomeownerAISection() {
  const aiTools = [
    {
      icon: Sparkles,
      title: 'AI viết tin hộ bạn',
      description: 'Gợi ý tiêu đề + mô tả chuẩn SEO từ ảnh và thông tin cơ bản',
    },
    {
      icon: ImageIcon,
      title: 'AI chỉnh ảnh',
      description: 'Cân sáng, căn góc — ảnh đẹp không cần Photoshop',
    },
    {
      icon: Zap,
      title: 'AI gợi ý giá',
      description: 'Tham khảo giá khu vực, tránh bán rẻ hoặc treo lâu',
    },
  ];

  const steps = ['Chụp ảnh', 'AI gợi ý nội dung & giá', 'Đăng miễn phí'];

  return (
    <section className="py-10 md:py-14 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-50 via-white to-blue-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
          Dành cho chủ nhà
        </h2>
        <p className="text-gray-600 text-center mb-3 text-lg max-w-2xl mx-auto">
          Đăng tin miễn phí — AI lo phần khó, bạn chỉ cần chụp ảnh
        </p>
        <p className="text-center text-sm text-gray-500 mb-10">
          {steps.join(' → ')}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {aiTools.map((tool) => (
            <div
              key={tool.title}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-accent/30 transition text-center"
            >
              <div className="flex justify-center mb-4 relative">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-[#F2922E] rounded-2xl flex items-center justify-center">
                  <tool.icon size={32} className="text-white" strokeWidth={1.5} />
                </div>
                <span className="absolute -top-1 -right-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-accent text-white">
                  AI
                </span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{tool.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{tool.description}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/chu-nha/dang-tin"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white font-bold rounded-lg hover:bg-[#e07d1f] transition"
          >
            Đăng tin với AI
            <ChevronRight size={20} />
          </Link>
          <Link
            href="/chu-nha"
            className="text-primary font-semibold hover:text-accent transition"
          >
            Tìm hiểu thêm
          </Link>
        </div>
      </div>
    </section>
  );
}
