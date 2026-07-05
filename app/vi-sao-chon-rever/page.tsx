'use client';

import Header from '@/components/header';
import Link from 'next/link';
import { CheckCircle, TrendingUp, HandCoins, Gift, ArrowRight, Shield, Users, Zap } from 'lucide-react';

export default function WhyChooseReverPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      <div className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Tại sao chọn Rever?
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Rever là nền tảng bất động sản hàng đầu Việt Nam với hơn 177 nghìn tin đăng xác thực, giúp bạn tìm kiếm và kết nối với các nhà đất ưng ý.
            </p>
          </div>
        </section>

        {/* Main Features */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
              {/* Feature 1 */}
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-16 w-16 rounded-lg bg-red-100">
                    <Shield className="h-8 w-8 text-red-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Cam kết xác thực 100%
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Tất cả bất động sản được xác minh thông qua quy trình kiểm tra chặt chẽ. Chúng tôi đảm bảo mỗi tin đăng đều có thông tin chính xác và được cập nhật liên tục.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-16 w-16 rounded-lg bg-blue-100">
                    <TrendingUp className="h-8 w-8 text-blue-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Dẫn đầu số lượng tin đăng
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Với hơn 14,727 nhà đất bán và 3,518 nhà đất cho thuê, Rever cung cấp lựa chọn rộng lớn nhất để bạn tìm kiếm tài sản mơ ước.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-16 w-16 rounded-lg bg-green-100">
                    <Users className="h-8 w-8 text-green-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Hỗ trợ chuyên nghiệp
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Đội ngũ chuyên viên bất động sân của Rever sẵn sàng hỗ trợ bạn 24/7, giúp giải đáp mọi thắc mắc và hỗ trợ quá trình giao dịch một cách trơn tru.
                  </p>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-16 w-16 rounded-lg bg-yellow-100">
                    <Zap className="h-8 w-8 text-yellow-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Công nghệ tiên tiến
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Nền tảng Rever được xây dựng với công nghệ hiện đại, cung cấp trải nghiệm người dùng mượt mà và các công cụ tìm kiếm thông minh.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="bg-gray-50 py-16 md:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Lợi ích cho người mua/thuê
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition">
                <div className="text-4xl font-bold text-red-600 mb-2">177K+</div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Bất động sản</h4>
                <p className="text-gray-600">
                  Lựa chọn rộng lớn từ các căn hộ, nhà riêng, đất nền đến các dự án lớn.
                </p>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition">
                <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Xác thực</h4>
                <p className="text-gray-600">
                  Mọi tin đăng đều được xác minh chính xác, giúp bạn an tâm khi tìm kiếm.
                </p>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition">
                <div className="text-4xl font-bold text-green-600 mb-2">24/7</div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Hỗ trợ</h4>
                <p className="text-gray-600">
                  Đội hỗ trợ khách hàng sẵn sàng giúp đỡ bạn bất kỳ lúc nào.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-white py-16 md:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Bắt đầu tìm kiếm ngay hôm nay
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Khám phá hàng nghìn bất động sản xác thực trên Rever và tìm thấy nơi mà bạn yêu thích.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="px-8 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition inline-flex items-center justify-center gap-2"
              >
                Tìm kiếm bất động sản
                <ArrowRight size={20} />
              </Link>
              <Link
                href="/"
                className="px-8 py-3 border-2 border-red-600 text-red-600 font-semibold rounded-lg hover:bg-red-50 transition"
              >
                Quay lại trang chủ
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
