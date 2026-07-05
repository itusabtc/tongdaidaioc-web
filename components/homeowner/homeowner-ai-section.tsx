'use client';

import Link from 'next/link';
import { Sparkles, Image as ImageIcon, BarChart3 } from 'lucide-react';

export default function HomeownerAISection() {
  const aiTools = [
    {
      icon: <Sparkles size={48} className="text-white" strokeWidth={1.5} />,
      title: 'AI viết tin bất động sản',
      description: 'Tự động tạo mô tả hấp dẫn từ ảnh và thông tin cơ bản của bạn',
    },
    {
      icon: <ImageIcon size={48} className="text-white" strokeWidth={1.5} />,
      title: 'AI chỉnh sửa ảnh',
      description: 'Tối ưu hóa ảnh tự động: cải thiện ánh sáng, góc nhìn, xóa khiếm khuyết',
    },
    {
      icon: <BarChart3 size={48} className="text-white" strokeWidth={1.5} />,
      title: 'AI gợi ý giá thông minh',
      description: 'Phân tích thị trường và gợi ý giá cạnh tranh cho bất động sản của bạn',
    },
  ];

  return (
    <section className="py-10 md:py-14 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
          Chủ nhà đăng tin siêu dễ với AI
        </h2>
        <p className="text-gray-600 text-center mb-12 text-lg">
          Công nghệ AI tiên tiến hỗ trợ mỗi bước, từ viết tin đến chỉnh sửa ảnh
        </p>

        {/* AI Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {aiTools.map((tool, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 text-center hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-center mb-4">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-blue-700 rounded-full flex items-center justify-center">
                  {tool.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {tool.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {tool.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link
            href="/chu-nha/dang-tin"
            className="inline-block px-8 py-4 bg-accent text-white font-bold rounded-lg hover:bg-[#e07d1f] transition"
          >
            Bắt đầu đăng tin ngay
          </Link>
        </div>
      </div>
    </section>
  );
}
