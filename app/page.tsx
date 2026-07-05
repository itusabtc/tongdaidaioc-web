import Header from '@/components/header';
import HeroSearch from '@/components/hero-search';
import FeaturesSection from '@/components/features-section';
import NewsSection from '@/components/news-section';
import LocationBrowseSection from '@/components/location-browse-section';
import Footer from '@/components/footer';
import LatestListingsTabs from '@/components/listings/latest-listings-tabs';
import { getStats, getListings } from '@/lib/api';
import { mockListings } from '@/lib/mock/listings';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

async function HomePageContent() {
  // Try to fetch from API, fallback to mock data
  let statsCount = '12,340';
  let saleListings = mockListings.filter(l => l.listingType === 'sale');
  let rentListings = mockListings.filter(l => l.listingType === 'rent');

  try {
    const stats = await getStats();
    statsCount = stats.activeListingCount.toLocaleString('vi-VN');
  } catch (error) {
    console.error('Failed to fetch stats, using mock data');
  }

  try {
    const saleData = await getListings({ type: 'sale', pageSize: 12 });
    if (saleData.items.length > 0) {
      saleListings = saleData.items;
    }
  } catch (error) {
    console.error('Failed to fetch sale listings, using mock data');
  }

  try {
    const rentData = await getListings({ type: 'rent', pageSize: 12 });
    if (rentData.items.length > 0) {
      rentListings = rentData.items;
    }
  } catch (error) {
    console.error('Failed to fetch rent listings, using mock data');
  }

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="pt-16">
        <HeroSearch statsCount={statsCount} />
        
        {/* Features Section */}
        <FeaturesSection />

        {/* Latest Listings Section - Combined Buy & Rent */}
        <LatestListingsTabs saleListings={saleListings} rentListings={rentListings} />

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

        <LocationBrowseSection />

        <Footer />
      </div>
    </main>
  );
}

export default async function Page() {
  return <HomePageContent />;
}
