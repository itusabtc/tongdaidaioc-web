'use client';

import Link from 'next/link';
import {
  Brain,
  BarChart3,
  MessageSquare,
  MessageCircle,
  Inbox,
  Bell,
  Users,
} from 'lucide-react';

export default function BrokerUnifiedSection() {
  const aiAssist = [
    {
      icon: <MessageSquare size={28} className="text-primary" strokeWidth={1.5} />,
      title: 'AI gợi ý nội dung tin',
      description: 'Viết mô tả SEO chuẩn trong vài giây',
    },
    {
      icon: <Brain size={28} className="text-primary" strokeWidth={1.5} />,
      title: 'AI Lead Scoring',
      description: 'Ưu tiên khách tiềm năng, chốt deal nhanh hơn',
    },
    {
      icon: <BarChart3 size={28} className="text-primary" strokeWidth={1.5} />,
      title: 'Thống kê pipeline',
      description: 'Conversion, tin hot, hiệu suất theo quận',
    },
  ];

  return (
    <section className="py-10 md:py-14 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Dành cho Môi giới
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Đăng tin nhanh, CRM quản lý khách và AI hỗ trợ kết nối người mua trên cùng sân chơi
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* CRM hero */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 flex flex-col">
            <span className="inline-flex self-start items-center gap-1 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold mb-4">
              CRM
            </span>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center">
                <MessageCircle size={32} className="text-white" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">CRM & Chatbot</h3>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Inbox đa kênh Zalo, Facebook, web — phân loại lead, nhắc follow-up tự động,
              không bỏ sót khách quan tâm.
            </p>
            <ul className="space-y-3 mb-8 flex-1">
              {[
                { icon: <Inbox size={18} />, text: 'Hộp thư hợp nhất — trả lời nhanh một nơi' },
                { icon: <Bell size={18} />, text: 'Nhắc lịch hẹn xem nhà & follow-up' },
                { icon: <Users size={18} />, text: 'Phân loại lead: nóng / ấm / lạnh' },
              ].map((item) => (
                <li key={item.text} className="flex items-start gap-3 text-sm text-gray-700">
                  <span className="text-primary mt-0.5 shrink-0">{item.icon}</span>
                  {item.text}
                </li>
              ))}
            </ul>
          </div>

          {/* AI assists */}
          <div className="flex flex-col gap-4">
            <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide px-1">
              Hỗ trợ bởi AI
            </p>
            {aiAssist.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-xl border border-gray-200 p-5 flex gap-4 items-start hover:shadow-md hover:border-primary/20 transition"
              >
                <div className="w-12 h-12 rounded-lg bg-orange-50 flex items-center justify-center shrink-0">
                  {item.icon}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-bold text-gray-900">{item.title}</h4>
                    <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-accent text-white">
                      AI
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-10">
          <Link
            href="/moi-gioi"
            className="inline-block px-8 py-4 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition"
          >
            Khám phá CRM cho môi giới
          </Link>
        </div>
      </div>
    </section>
  );
}
