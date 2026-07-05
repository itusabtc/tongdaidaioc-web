import Link from 'next/link';
import { BookOpen, Play, HelpCircle } from 'lucide-react';
import Header from '@/components/header';
import Footer from '@/components/footer';

export const metadata = {
  title: 'Hướng dẫn sử dụng - TDDO',
  description: 'Hướng dẫn chi tiết cách sử dụng TDDO, quản lý tin đăng, và tối ưu hóa doanh số bán hàng.',
};

export default function BrokerGuidePage() {
  const guides = [
    {
      title: 'Bắt đầu với TDDO',
      description: 'Hướng dẫn từng bước từ đăng ký tài khoản đến đăng tin đầu tiên',
      sections: [
        'Tạo tài khoản môi giới',
        'Hoàn tất hồ sơ chuyên nghiệp',
        'Xác thực tài khoản',
        'Đăng tin đầu tiên',
      ],
    },
    {
      title: 'Quản lý tin đăng',
      description: 'Cách tạo, chỉnh sửa, và xóa tin đăng trên TDDO',
      sections: [
        'Tạo tin đăng mới',
        'Thêm hình ảnh và video',
        'Viết mô tả hiệu quả',
        'Cập nhật tin thường xuyên',
      ],
    },
    {
      title: 'Quảng cáo tin đăng',
      description: 'Hướng dẫn các gói quảng cáo, lên top, và theo dõi chi phí',
      sections: [
        'Các gói quảng cáo',
        'Lên top tin đăng',
        'Quảng cáo theo vị trí',
        'Theo dõi ROI quảng cáo',
      ],
    },
    {
      title: 'Sử dụng CRM',
      description: 'Quản lý khách hàng tiềm năng, ghi chú, và lịch sử tương tác',
      sections: [
        'Thêm khách hàng vào CRM',
        'Quản lý trạng thái khách hàng',
        'Ghi chú cuộc gọi',
        'Báo cáo hiệu suất bán hàng',
      ],
    },
    {
      title: 'Tối ưu hóa doanh số',
      description: 'Các mẹo và chiến lược tăng lượt xem và liên hệ',
      sections: [
        'Tối ưu hóa SEO',
        'Chụp ảnh hiệu quả',
        'Viết tiêu đề hấp dẫn',
        'Phân tích dữ liệu bán hàng',
      ],
    },
    {
      title: 'Hỗ trợ & Khắc phục sự cố',
      description: 'Câu hỏi thường gặp, khắc phục sự cố, và liên hệ hỗ trợ',
      sections: [
        'Câu hỏi thường gặp',
        'Khắc phục sự cố',
        'Liên hệ hỗ trợ',
        'Chính sách bảo hành',
      ],
    },
  ];

  const videos = [
    {
      title: 'Tạo tài khoản và đăng tin đầu tiên',
      duration: '5 phút',
      views: '15K',
    },
    {
      title: 'Quảng cáo và lên top tin đăng',
      duration: '8 phút',
      views: '12K',
    },
    {
      title: 'Sử dụng CRM quản lý khách hàng',
      duration: '6 phút',
      views: '8K',
    },
  ];

  const faqs = [
    {
      q: 'Làm cách nào để tăng lượt xem tin đăng?',
      a: 'Sử dụng các gói quảng cáo, cập nhật tin thường xuyên, chụp ảnh chất lượng, và viết mô tả rõ ràng.',
    },
    {
      q: 'Bao lâu tôi nhận được liên hệ đầu tiên?',
      a: 'Thường là trong 24-48 giờ đầu tiên sau khi đăng tin nếu bạn sử dụng gói quảng cáo.',
    },
    {
      q: 'Giá quảng cáo bao nhiêu?',
      a: 'Giá bắt đầu từ 10,000₫/ngày. Xem bảng giá chi tiết trong phần Hỗ trợ Marketing.',
    },
    {
      q: 'Có thể xóa hoặc ẩn tin đăng không?',
      a: 'Có thể, bạn có thể ẩn tin hoặc xóa vĩnh viễn từ Dashboard Quản lý tin đăng.',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      <main className="flex-1 pt-20">
        {/* Hero */}
        <section className="bg-primary text-white py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold mb-4">Hướng dẫn sử dụng TDDO</h1>
            <p className="text-xl text-gray-100">
              Tất cả những gì bạn cần để bắt đầu và phát triển kinh doanh
            </p>
          </div>
        </section>

        {/* Guides */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">
              Các hướng dẫn chính
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {guides.map((guide, index) => (
                <div
                  key={index}
                  className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition"
                >
                  <BookOpen className="w-8 h-8 text-accent mb-3" />
                  <h3 className="text-lg font-bold text-primary mb-2">
                    {guide.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">{guide.description}</p>
                  <ul className="space-y-1 mb-4">
                    {guide.sections.map((section, idx) => (
                      <li key={idx} className="text-sm text-gray-700 flex items-start">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full mr-2 mt-1 flex-shrink-0" />
                        {section}
                      </li>
                    ))}
                  </ul>
                  <button className="text-accent font-medium hover:underline text-sm">
                    Xem hướng dẫn
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Video Tutorials */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">
              Video hướng dẫn
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {videos.map((video, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition"
                >
                  <div className="aspect-video bg-gray-300 flex items-center justify-center">
                    <Play className="w-12 h-12 text-accent" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-primary mb-2">
                      {video.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {video.duration} • {video.views} lượt xem
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <button className="px-6 py-2 bg-accent text-white font-semibold rounded-lg hover:opacity-90 transition">
                Xem tất cả video
              </button>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">
              Câu hỏi thường gặp
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="p-6 border border-gray-200 rounded-lg"
                >
                  <div className="flex items-start gap-3">
                    <HelpCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-primary mb-2">
                        {faq.q}
                      </h4>
                      <p className="text-gray-700">{faq.a}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-accent text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Cần giúp đỡ?</h2>
            <p className="text-lg mb-8">Liên hệ với đội ngũ hỗ trợ của chúng tôi</p>
            <Link
              href="/lien-he"
              className="inline-block px-8 py-3 bg-white text-accent font-semibold rounded-lg hover:bg-gray-100 transition"
            >
              Liên hệ hỗ trợ
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
