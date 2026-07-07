import Header from '@/components/header';
import Footer from '@/components/footer';
import Link from 'next/link';
import { Sparkles, Image as ImageIcon, FileText, Zap, CheckCircle } from 'lucide-react';

export const metadata = {
  title: 'Đăng tin bất động sản siêu dễ - TDDO',
  description: 'Đăng tin bất động sản miễn phí với AI hỗ trợ: gợi ý nội dung, chỉnh sửa ảnh, tự động định giá',
};

export default function DangTinPage() {
  const steps = [
    {
      number: '1',
      title: 'Tải ảnh',
      description: 'Chụp ảnh chất lượng cao, tối thiểu 3 ảnh',
      icon: ImageIcon,
    },
    {
      number: '2',
      title: 'Điền thông tin',
      description: 'Giá, diện tích, loại bất động sản',
      icon: FileText,
    },
    {
      number: '3',
      title: 'Đăng tin',
      description: 'Đăng ngay, miễn phí, không cần bằng cấp',
      icon: CheckCircle,
    },
  ];

  const aiFeatures = [
    {
      title: 'Gợi ý nội dung thông minh',
      description: 'AI tự động gợi ý mô tả tin đăng hấp dẫn dựa trên ảnh và thông tin bất động sản của bạn',
      icon: Sparkles,
      badge: 'AI Content',
    },
    {
      title: 'Chỉnh sửa ảnh tự động',
      description: 'Tối ưu hóa ảnh bất động sân với AI: cân bằng sáng, căn chỉnh góc, loại bỏ khiếm khuyết',
      icon: ImageIcon,
      badge: 'AI Photo Edit',
    },
    {
      title: 'Định giá tự động',
      description: 'AI phân tích thị trường và gợi ý giá phù hợp dựa trên vị trí, diện tích, tiện ích',
      icon: Zap,
      badge: 'AI Pricing',
    },
    {
      title: 'Kiểm tra chất lượng tin',
      description: 'Hệ thống AI kiểm tra tính đầy đủ và chất lượng tin đăng, gợi ý cải thiện',
      icon: CheckCircle,
      badge: 'AI Quality Check',
    },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary to-blue-700 text-white py-16 md:py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Chủ nhà đăng tin siêu dễ
            </h1>
            <p className="text-lg md:text-xl text-blue-100 max-w-2xl">
              Chỉ 3 bước đơn giản, tin của bạn sẽ hiển thị cho hàng ngàn người tìm kiếm. AI hỗ trợ từng bước đăng tin.
            </p>
          </div>
        </section>

        {/* 3-Step Process */}
        <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {steps.map((step) => {
                const Icon = step.icon;
                return (
                  <div key={step.number} className="text-center">
                    <div className="flex justify-center mb-4">
                      <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center text-white text-2xl font-bold">
                        {step.number}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600">
                      {step.description}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="flex justify-center">
              <Link
                href="#"
                className="bg-accent hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg transition"
              >
                Đăng tin miễn phí
              </Link>
            </div>
          </div>
        </section>

        {/* AI Features Section */}
        <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                AI hỗ trợ đăng tin
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Chúng tôi sử dụng các công nghệ AI hiện đại nhất để giúp tin của bạn đứng vị trí cao, thu hút nhiều khách hàng tiềm năng
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {aiFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-lg p-6 shadow-sm hover:shadow-lg transition-shadow border border-gray-200"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-accent/10">
                          <Icon className="h-6 w-6 text-accent" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-lg font-bold text-primary">
                            {feature.title}
                          </h3>
                          <span className="inline-block bg-accent/20 text-accent text-xs font-semibold px-2.5 py-0.5 rounded">
                            {feature.badge}
                          </span>
                        </div>
                        <p className="text-gray-600">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-primary text-center mb-12">
              Tại sao chọn TDDO để đăng tin?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-8 w-8 rounded-md bg-accent text-white">
                    ✓
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-primary mb-2">Hoàn toàn miễn phí</h3>
                  <p className="text-gray-600">Đăng tin không mất phí, không cần thẻ tín dụng</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-8 w-8 rounded-md bg-accent text-white">
                    ✓
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-primary mb-2">Tiếp cận hàng triệu người</h3>
                  <p className="text-gray-600">Tin của bạn hiển thị cho hàng triệu người tìm kiếm mỗi tháng</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-8 w-8 rounded-md bg-accent text-white">
                    ✓
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-primary mb-2">Hỗ trợ 24/7</h3>
                  <p className="text-gray-600">Đội hỗ trợ khách hàng sẵn sàng trợ giúp bất cứ lúc nào</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-8 w-8 rounded-md bg-accent text-white">
                    ✓
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-primary mb-2">AI hỗ trợ đăng tin</h3>
                  <p className="text-gray-600">Sử dụng AI để tối ưu hóa tin của bạn, thu hút nhiều khách hơn</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-blue-700 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Sẵn sàng đăng tin?
            </h2>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              Bắt đầu ngay hôm nay và để AI giúp bạn bán hoặc cho thuê bất động sản nhanh hơn
            </p>
            <Link
              href="#"
              className="inline-block bg-accent hover:bg-orange-600 text-white font-bold py-3 px-10 rounded-lg transition text-lg"
            >
              Đăng tin miễn phí ngay
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
