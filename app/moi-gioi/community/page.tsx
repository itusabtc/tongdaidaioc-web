import Link from 'next/link';
import { Users, MessageCircle, Award, Calendar } from 'lucide-react';
import Header from '@/components/header';
import Footer from '@/components/footer';

export const metadata = {
  title: 'Cộng đồng Môi giới - TDDO',
  description: 'Tham gia cộng đồng 10,000+ môi giới, chia sẻ kinh nghiệm, và học hỏi từ các bạn đồng nghiệp.',
};

export default function BrokerCommunityPage() {
  const stats = [
    { number: '10,000+', label: 'Môi giới tích cực' },
    { number: '50,000+', label: 'Tin đăng mỗi ngày' },
    { number: '100M+', label: 'Lượt xem mỗi tháng' },
    { number: '24/7', label: 'Hỗ trợ cộng đồng' },
  ];

  const events = [
    {
      date: '15/07/2024',
      title: 'Webinar: Tối ưu hóa tin đăng',
      type: 'Trực tuyến',
      speakers: 'Chuyên gia TDDO',
    },
    {
      date: '22/07/2024',
      title: 'Workshop: Kỹ năng bán hàng',
      type: 'Offline (Hà Nội)',
      speakers: 'Toppers môi giới',
    },
    {
      date: '29/07/2024',
      title: 'Hội thảo: Xu hướng thị trường',
      type: 'Trực tuyến',
      speakers: 'Phân tích gia Đất Xanh',
    },
  ];

  const forums = [
    {
      title: 'Chia sẻ kinh nghiệm',
      posts: 1250,
      replies: 5632,
      lastActive: '2 phút trước',
      desc: 'Chia sẻ mẹo, kinh nghiệm, và câu chuyện thành công',
    },
    {
      title: 'Hỏi & Trả lời',
      posts: 3450,
      replies: 8920,
      lastActive: '5 phút trước',
      desc: 'Đặt câu hỏi và nhận câu trả lời từ cộng đồng',
    },
    {
      title: 'Thị trường & Xu hướng',
      posts: 580,
      replies: 2145,
      lastActive: '1 giờ trước',
      desc: 'Thảo luận về xu hướng thị trường bất động sán',
    },
  ];

  const topBrokers = [
    {
      name: 'Nguyễn Văn A',
      rank: '⭐ Top 1',
      sales: '2,450 giao dịch',
      badge: 'Chuyên gia bất động sán',
    },
    {
      name: 'Trần Thị B',
      rank: '⭐ Top 2',
      sales: '2,180 giao dịch',
      badge: 'Môi giới ưu tú',
    },
    {
      name: 'Lê Văn C',
      rank: '⭐ Top 3',
      sales: '1,950 giao dịch',
      badge: 'Chuyên gia môi giới',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      <main className="flex-1 pt-20">
        {/* Hero */}
        <section className="bg-gradient-to-r from-primary to-blue-900 text-white py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold mb-4">Cộng đồng Môi giới TDDO</h1>
            <p className="text-xl text-gray-100 mb-8">
              Nơi kết nối, học hỏi, và phát triển cùng 10,000+ môi giới thành công
            </p>
            <button className="px-8 py-3 bg-accent text-white font-semibold rounded-lg hover:opacity-90 transition">
              Tham gia ngay
            </button>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <p className="text-3xl font-bold text-accent mb-1">
                    {stat.number}
                  </p>
                  <p className="text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Events */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">
              Sự kiện sắp tới
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {events.map((event, index) => (
                <div
                  key={index}
                  className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <Calendar className="w-5 h-5 text-accent" />
                    <span className="text-sm font-semibold text-gray-600">
                      {event.date}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-2">
                    {event.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    {event.type} • Diễn giả: {event.speakers}
                  </p>
                  <button className="w-full py-2 border-2 border-accent text-accent font-semibold rounded hover:bg-accent hover:text-white transition">
                    Đăng ký
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Forums */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">
              Diễn đàn thảo luận
            </h2>
            <div className="space-y-4">
              {forums.map((forum, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <MessageCircle className="w-5 h-5 text-accent" />
                        <h3 className="text-lg font-bold text-primary">
                          {forum.title}
                        </h3>
                      </div>
                      <p className="text-gray-600 mb-3">{forum.desc}</p>
                      <p className="text-sm text-gray-500">
                        {forum.posts} bài viết • {forum.replies} bình luận •{' '}
                        {forum.lastActive}
                      </p>
                    </div>
                    <button className="px-4 py-2 text-accent font-medium border border-accent rounded hover:bg-accent hover:text-white transition whitespace-nowrap ml-4">
                      Xem
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Top Brokers */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">
              Các môi giới hàng đầu
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {topBrokers.map((broker, index) => (
                <div
                  key={index}
                  className="p-6 bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-lg hover:shadow-lg transition text-center"
                >
                  <p className="text-2xl font-bold text-accent mb-2">
                    {broker.rank}
                  </p>
                  <h3 className="text-lg font-bold text-primary mb-2">
                    {broker.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">{broker.sales}</p>
                  <div className="inline-block px-3 py-1 bg-accent text-white text-xs font-semibold rounded-full">
                    {broker.badge}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 bg-accent text-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">
              Lợi ích khi tham gia
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: '🤝', title: 'Kết nối', desc: 'Gặp gỡ và hợp tác với các môi giới khác' },
                { icon: '📚', title: 'Học hỏi', desc: 'Tiếp cận kiến thức từ những chuyên gia hàng đầu' },
                { icon: '🏆', title: 'Giải thưởng', desc: 'Giải thưởng hàng tháng cho các thành viên xuất sắc' },
              ].map((benefit, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-4xl mb-3">{benefit.icon}</div>
                  <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                  <p className="text-gray-100">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Sẵn sàng tham gia cộng đồng?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Hãy là phần của cộng đồng môi giới tăng trưởng nhanh nhất Việt Nam
            </p>
            <Link
              href="/dang-ky"
              className="inline-block px-8 py-3 bg-accent text-white font-semibold rounded-lg hover:opacity-90 transition"
            >
              Đăng ký miễn phí
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
