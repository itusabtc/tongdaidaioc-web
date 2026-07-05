import Header from '@/components/header';
import HeroSearch from '@/components/hero-search';
import FeaturesSection from '@/components/features-section';
import PropertiesSection from '@/components/properties-section';
import NewsSection from '@/components/news-section';
import LocationBrowseSection from '@/components/location-browse-section';
import Footer from '@/components/footer';
import { buyProperties, rentProperties } from '@/lib/property-data';

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="pt-16">
        <HeroSearch />
        
        {/* Features Section */}
        <FeaturesSection />

        {/* Latest Listings Section - Combined Buy & Rent */}
        <section className="section-spacing">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Tin mới nhất
            </h2>
            
            {/* Tabs */}
            <div className="flex gap-6 mb-8 border-b border-gray-200">
              <button className="pb-3 font-semibold text-lg text-primary border-b-2 border-primary">
                Mua bán
              </button>
              <button className="pb-3 font-semibold text-lg text-gray-500 hover:text-gray-700">
                Cho thuê
              </button>
            </div>

            {/* Grid 8 cards (6 buy + 2 rent as demo) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {buyProperties.slice(0, 4).map((property) => (
                <div key={property.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition">
                  <img src={property.imageUrl} alt={property.title} className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{property.title}</h3>
                    <p className="text-accent font-bold text-lg mb-2">{property.priceDisplay}</p>
                    <p className="text-sm text-gray-600">{property.address}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <a href="/mua-ban" className="text-primary hover:text-primary/80 font-medium flex items-center justify-center gap-1">
                Xem tất cả
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* Post Instructions Section - 3 Steps */}
        <section className="section-spacing bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
              Chủ nhà đăng tin siêu dễ
            </h2>
            <p className="text-gray-600 text-center mb-12 text-lg">
              Chỉ 3 bước đơn giản, tin của bạn sẽ hiển thị cho hàng nghìn người tìm kiếm
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { step: '1', title: 'Tải ảnh', desc: 'Chụp ảnh chất lượng cao, tối thiểu 3 ảnh' },
                { step: '2', title: 'Điền thông tin', desc: 'Giá, diện tích, loại bất động sản' },
                { step: '3', title: 'Đăng tin', desc: 'Đăng ngay, miễn phí, không cần bằng cấp' },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent text-white font-bold text-xl mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <a href="/dang-tin" className="inline-block px-8 py-4 bg-accent text-white font-bold rounded-lg hover:bg-[#e07d1f] transition">
                Đăng tin miễn phí
              </a>
            </div>
          </div>
        </section>

        {/* Broker Section */}
        <section className="section-spacing">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
              Dành cho Môi giới
            </h2>
            <p className="text-gray-600 text-center mb-12 text-lg">
              Công cụ chuyên nghiệp giúp môi giới tăng doanh số
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {[
                { icon: '📊', title: 'Quản lý tin' },
                { icon: '🤖', title: 'CRM & Chatbot' },
                { icon: '📢', title: 'Đẩy tin đa kênh' },
                { icon: '🎯', title: 'Thống kê & Báo cáo' },
              ].map((item, idx) => (
                <div key={idx} className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-md transition">
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <h3 className="font-bold text-lg">{item.title}</h3>
                </div>
              ))}
            </div>

            <div className="text-center">
              <a href="/moi-gioi" className="inline-block px-8 py-4 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition">
                Tìm hiểu thêm
              </a>
            </div>
          </div>
        </section>

        {/* News Section */}
        <NewsSection />

        {/* Location Browse Section */}
        <LocationBrowseSection />

        {/* Final CTA */}
        <section className="section-spacing bg-primary text-white">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Sẵn sàng bắt đầu?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Đăng tin bất động sán của bạn miễn phí trên Tổng Đài Địa Ốc hôm nay
            </p>
            <a href="/dang-tin" className="inline-block px-8 py-4 bg-accent text-white font-bold rounded-lg hover:bg-[#e07d1f] transition">
              Đăng tin ngay
            </a>
          </div>
        </section>
      </div>
      
      {/* Footer */}
      <Footer />
    </main>
  )
}
