'use client';

import Header from '@/components/header';
import HeroSearch from '@/components/hero-search';
import FeaturesSection from '@/components/features-section';
import PropertiesSection from '@/components/properties-section';
import AppDownloadSection from '@/components/app-download-section';
import RecentlyViewedSection from '@/components/recently-viewed-section';
import NewsSection from '@/components/news-section';
import LocationBrowseSection from '@/components/location-browse-section';
import { buyProperties, rentProperties } from '@/lib/property-data';

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="pt-16">
        <HeroSearch />
        
        {/* Features Section */}
        <FeaturesSection />

        {/* Buy Properties Section */}
        <PropertiesSection
          title="Nhà đất bán mới nhất"
          count="14,727"
          properties={buyProperties}
        />

        {/* Divider */}
        <div className="border-t border-gray-200" />

        {/* Rent Properties Section */}
        <PropertiesSection
          title="Nhà đất cho thuê mới nhất"
          count="3,518"
          properties={rentProperties}
        />

        {/* Footer CTA Section */}
        <section className="bg-gradient-to-r from-red-50 to-red-100 py-12 md:py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Có căn hộ hoặc đất cần bán?
            </h2>
            <p className="text-gray-700 text-lg mb-8">
              Đăng tin bất động sản của bạn miễn phí trên Rever ngay hôm nay
            </p>
            <button className="px-8 py-4 bg-red-600 text-white font-bold text-lg rounded-lg hover:bg-red-700 transition">
              Đăng tin ngay
            </button>
          </div>
        </section>

        {/* App Download Section */}
        <AppDownloadSection />

        {/* Recently Viewed Section */}
        <RecentlyViewedSection />

        {/* News Section */}
        <NewsSection />

        {/* Location Browse Section */}
        <LocationBrowseSection />
      </div>
    </main>
  )
}
