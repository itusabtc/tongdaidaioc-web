import Header from '@/components/header';
import Footer from '@/components/footer';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export const metadata = {
  title: 'Liên hệ - TDDO',
  description: 'Liên hệ với Tổng Đài Địa Ốc, gửi đơn khiếu nại, hoặc nhận hỗ trợ khách hàng.',
};

export default function ContactPage() {
  const contacts = [
    {
      icon: Phone,
      title: 'Hotline hỗ trợ (24/7)',
      value: '1800 234 546',
      href: 'tel:1800234546',
    },
    {
      icon: Mail,
      title: 'Email chính',
      value: 'support@tongdaidiaoc.vn',
      href: 'mailto:support@tongdaidiaoc.vn',
    },
    {
      icon: Mail,
      title: 'Khiếu nại',
      value: 'complaints@tongdaidiaoc.vn',
      href: 'mailto:complaints@tongdaidiaoc.vn',
    },
    {
      icon: MapPin,
      title: 'Văn phòng chính',
      value: 'Hà Nội, Việt Nam',
      href: '#',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      <main className="flex-1 pt-20">
        {/* Hero */}
        <section className="bg-primary text-white py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold mb-4">Liên hệ với chúng tôi</h1>
            <p className="text-xl text-gray-100">
              Chúng tôi sẵn sàng hỗ trợ bạn 24/7
            </p>
          </div>
        </section>

        {/* Contact Cards */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contacts.map((contact, index) => {
                const Icon = contact.icon;
                return (
                  <a
                    key={index}
                    href={contact.href}
                    className="p-6 bg-gray-50 rounded-lg border border-gray-200 hover:shadow-lg hover:border-accent transition text-center"
                  >
                    <Icon className="w-8 h-8 text-accent mx-auto mb-4" />
                    <h3 className="font-semibold text-primary mb-2">
                      {contact.title}
                    </h3>
                    <p className="text-gray-700 break-all">{contact.value}</p>
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">
              Gửi tin nhắn cho chúng tôi
            </h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">
                    Họ và tên
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="Nhập họ và tên"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="Nhập email"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-primary mb-2">
                  Số điện thoại
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="Nhập số điện thoại"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-primary mb-2">
                  Chủ đề
                </label>
                <select
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                >
                  <option value="">Chọn chủ đề</option>
                  <option value="support">Hỗ trợ kỹ thuật</option>
                  <option value="complaint">Khiếu nại</option>
                  <option value="feedback">Phản hồi</option>
                  <option value="partnership">Hợp tác</option>
                  <option value="other">Khác</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-primary mb-2">
                  Nội dung tin nhắn
                </label>
                <textarea
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="Nhập nội dung tin nhắn"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-accent text-white font-semibold rounded-lg hover:opacity-90 transition"
              >
                Gửi tin nhắn
              </button>
            </form>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">
              Các câu hỏi thường gặp
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: 'Thời gian phản hồi bao lâu?',
                  a: 'Chúng tôi phản hồi trong vòng 24 giờ vào giờ làm việc. Cho các vấn đề khẩn cấp, gọi hotline 24/7.',
                },
                {
                  q: 'Có thể khiếu nại trực tuyến không?',
                  a: 'Có, gửi email đến complaints@tongdaidiaoc.vn với đầy đủ thông tin và bằng chứng.',
                },
                {
                  q: 'Làm sao để đặt lịch tư vấn?',
                  a: 'Gọi 1800 234 546 hoặc gửi email để đặt lịch. Chúng tôi hỗ trợ cả trực tuyến và trực tiếp.',
                },
                {
                  q: 'Bạn có văn phòng ngoài Hà Nội không?',
                  a: 'Hiện tại văn phòng chính ở Hà Nội. Chúng tôi có kế hoạch mở rộng sang các tỉnh thành khác.',
                },
              ].map((faq, index) => (
                <div key={index} className="p-6 bg-gray-50 rounded-lg border border-gray-200">
                  <h4 className="font-semibold text-primary mb-2">{faq.q}</h4>
                  <p className="text-gray-700">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Hours */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="p-8 bg-white rounded-lg border border-gray-200">
              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-primary mb-4">
                    Giờ làm việc
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex justify-between">
                      <span>Thứ 2 - Thứ 6:</span>
                      <span className="font-semibold">08:00 - 18:00</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Thứ 7:</span>
                      <span className="font-semibold">08:00 - 12:00</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Chủ nhật:</span>
                      <span className="font-semibold">Đóng cửa</span>
                    </li>
                    <li className="flex justify-between pt-2 border-t">
                      <span>Hotline 24/7:</span>
                      <span className="font-semibold text-accent">1800 234 546</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
