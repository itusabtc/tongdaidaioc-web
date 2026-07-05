import Header from '@/components/header';
import Footer from '@/components/footer';
import { Target, Lightbulb, Heart } from 'lucide-react';

export const metadata = {
  title: 'Về chúng tôi - TDDO',
  description: 'Tìm hiểu về Tổng Đài Địa Ốc, sứ mệnh, giá trị, và hành trình của chúng tôi.',
};

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: 'Khách hàng là trung tâm',
      description: 'Chúng tôi luôn ưu tiên nhu cầu và sự hài lòng của khách hàng',
    },
    {
      icon: Lightbulb,
      title: 'Đổi mới và sáng tạo',
      description: 'Liên tục cải thiện công nghệ và dịch vụ',
    },
    {
      icon: Target,
      title: 'Minh bạch và trung thực',
      description: 'Tất cả thông tin rõ ràng, không ẩn chi phí',
    },
  ];

  const team = [
    {
      name: 'Nguyễn Văn Sáng',
      title: 'Founder & CEO',
      desc: '15 năm kinh nghiệm trong bất động sán',
    },
    {
      name: 'Trần Thị Hương',
      title: 'Chief Product Officer',
      desc: 'Chuyên gia UX/UI và phát triển sản phẩm',
    },
    {
      name: 'Lê Quang Minh',
      title: 'Chief Technology Officer',
      desc: 'Kỹ sư phần mềm với 12 năm kinh nghiệm',
    },
  ];

  const milestones = [
    { year: '2020', event: 'Thành lập TDDO với vốn khởi động' },
    { year: '2021', event: '10,000 người dùng tích cực' },
    { year: '2022', event: 'Mở rộng sang 10 tỉnh thành' },
    { year: '2023', event: '1 triệu lượt xem hàng tháng' },
    { year: '2024', event: 'Đạt 50,000 tin đăng xác thực' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      <main className="flex-1 pt-20">
        {/* Hero */}
        <section className="bg-primary text-white py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Về Tổng Đài Địa Ốc
            </h1>
            <p className="text-xl text-gray-100 max-w-2xl">
              Nền tảng bất động sán hàng đầu Việt Nam, kết nối người mua, người thuê, và các chuyên gia
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Mission */}
              <div className="p-8 bg-gray-50 rounded-lg border border-gray-200">
                <h2 className="text-2xl font-bold text-primary mb-4">Sứ mệnh</h2>
                <p className="text-gray-700 leading-relaxed">
                  Làm cho thị trường bất động sán minh bạch, hiệu quả, và dễ tiếp cận cho tất cả mọi người. Chúng tôi tin rằng mỗi người đều có quyền tìm được ngôi nhà hoặc công cụ kinh doanh lý tưởng.
                </p>
              </div>

              {/* Vision */}
              <div className="p-8 bg-accent text-white rounded-lg">
                <h2 className="text-2xl font-bold mb-4">Tầm nhìn</h2>
                <p className="leading-relaxed">
                  Trở thành nền tảng bất động sán số 1 tại Đông Nam Á, nơi tập trung công nghệ, dữ liệu, và con người trong lĩnh vực bất động sán.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Các giá trị cốt lõi</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div key={index} className="bg-white p-8 rounded-lg border border-gray-200 text-center">
                    <Icon className="w-12 h-12 text-accent mx-auto mb-4" />
                    <h3 className="text-lg font-bold text-primary mb-3">
                      {value.title}
                    </h3>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Milestones */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Hành trình phát triển</h2>
            <div className="space-y-6">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex gap-6 items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-accent text-white font-bold">
                      {milestone.year}
                    </div>
                  </div>
                  <div className="pt-2">
                    <p className="text-lg text-gray-700">{milestone.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Lãnh đạo</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-8 border border-gray-200 text-center hover:shadow-lg transition"
                >
                  <div className="w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-primary mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm text-accent font-semibold mb-2">
                    {member.title}
                  </p>
                  <p className="text-gray-600">{member.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Thành tích</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: '10K+', label: 'Môi giới' },
                { number: '50K+', label: 'Tin đăng' },
                { number: '100M+', label: 'Lượt xem/tháng' },
                { number: '24/7', label: 'Hỗ trợ' },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <p className="text-3xl font-bold text-accent mb-2">
                    {stat.number}
                  </p>
                  <p className="text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-primary text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Bạn muốn tham gia với chúng tôi?
            </h2>
            <p className="text-lg text-gray-100 mb-8">
              Nếu bạn có niềm đam mê về bất động sán và công nghệ, hãy xem các vị trí tuyển dụng của chúng tôi.
            </p>
            <a
              href="mailto:careers@tongdaidiaoc.vn"
              className="inline-block px-8 py-3 bg-accent text-white font-semibold rounded-lg hover:opacity-90 transition"
            >
              Xem vị trí tuyển dụng
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
