'use client';

import { Apple, Play } from 'lucide-react';

export default function AppDownloadSection() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Device Mockups */}
          <div className="relative flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Decorative dots background */}
              <div className="absolute -top-12 -left-12 w-48 h-48 opacity-10">
                <div className="grid grid-cols-12 gap-3">
                  {Array.from({ length: 144 }).map((_, i) => (
                    <div key={i} className="w-2 h-2 bg-gray-400 rounded-full" />
                  ))}
                </div>
              </div>

              {/* Tablet mockup */}
              <div className="relative z-10 mb-4">
                <div className="bg-white border-8 border-gray-300 rounded-2xl shadow-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=600&fit=crop"
                    alt="Rever app on tablet"
                    className="w-full h-auto"
                  />
                </div>
              </div>

              {/* Phone mockup */}
              <div className="absolute -right-8 -bottom-8 w-32 sm:w-40">
                <div className="bg-white border-4 border-gray-300 rounded-3xl shadow-xl overflow-hidden">
                  <div className="aspect-video bg-gradient-to-b from-red-100 to-red-50" />
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Bắt động sán xác thực ngay trong tầm tay
            </h2>

            <p className="text-gray-600 text-lg mb-8">
              Cài đặt ứng dụng Rever trên thiết bị di động để trải nghiệm trọn vẹn:
            </p>

            <ul className="space-y-4 mb-10">
              <li className="flex items-start gap-3">
                <span className="inline-block w-1.5 h-1.5 bg-red-600 rounded-full mt-2 flex-shrink-0" />
                <span className="text-gray-700">
                  An tâm tìm kiếm nhà đất bán và cho thuê nhanh chóng
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-block w-1.5 h-1.5 bg-red-600 rounded-full mt-2 flex-shrink-0" />
                <span className="text-gray-700">
                  Xem đầy đủ thông tin tất cả các dự án nội bộ
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-block w-1.5 h-1.5 bg-red-600 rounded-full mt-2 flex-shrink-0" />
                <span className="text-gray-700">
                  Cập nhật tin mới nhất về thị trường
                </span>
              </li>
            </ul>

            {/* App Store Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#"
                className="inline-flex items-center justify-center gap-3 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-900 transition"
              >
                <Apple size={24} />
                <div className="text-left">
                  <div className="text-xs">Available on the</div>
                  <div className="font-semibold">App Store</div>
                </div>
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-3 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-900 transition"
              >
                <Play size={24} />
                <div className="text-left">
                  <div className="text-xs">Get it on</div>
                  <div className="font-semibold">Google Play</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
