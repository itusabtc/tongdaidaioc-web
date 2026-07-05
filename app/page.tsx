import Header from '@/components/header';
import HeroSearch from '@/components/hero-search';
import FeaturesSection from '@/components/features-section';
import NewsSection from '@/components/news-section';
import LocationBrowseSection from '@/components/location-browse-section';
import Footer from '@/components/footer';
import BackToTop from '@/components/back-to-top';
import LatestListingsSection from '@/components/listings/latest-listings-section';
import FeaturedBrokersSection from '@/components/brokers/featured-brokers-section';
import BrokerUnifiedSection from '@/components/brokers/broker-unified-section';
import HomeownerAISection from '@/components/homeowner/homeowner-ai-section';
import ToolsAndMortgageSection from '@/components/home/tools-and-mortgage-section';
import { getStats, getListings, getFeaturedUtilities, getMortgageArticles } from '@/lib/api';
import { mockListings } from '@/lib/mock/listings';
import { featuredBrokers } from '@/lib/mock/featured-brokers';
import { featuredUtilities as mockUtilities } from '@/lib/mock/featured-utilities';
import { mortgageArticles as mockMortgage } from '@/lib/mock/mortgage-articles';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

async function HomePageContent() {
  // Try to fetch from API, fallback to mock data
  let statsCount = '12,340';
  let saleListings = mockListings.filter(l => l.listingType === 'sale');
  let rentListings = mockListings.filter(l => l.listingType === 'rent');
  let utilities = mockUtilities;
  let mortgageArticles = mockMortgage;

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

  try {
    const [u, m] = await Promise.all([getFeaturedUtilities(), getMortgageArticles()]);
    if (u.length > 0) utilities = u;
    if (m.length > 0) mortgageArticles = m;
  } catch (error) {
    console.error('Failed to fetch home content, using mock data');
  }

  return (
    <main className="min-h-screen bg-white">
      <div className="relative">
        <Header />
        <HeroSearch statsCount={statsCount} />
      </div>
      
      <div>
        {/* Features Section */}
        <FeaturesSection />

        {/* Latest Listings - Sale Section */}
        <LatestListingsSection
          title="Nhà đất bán mới nhất"
          listings={saleListings}
          viewAllHref="/mua-ban"
        />

        {/* Latest Listings - Rent Section */}
        <LatestListingsSection
          title="Nhà đất cho thuê mới nhất"
          listings={rentListings}
          viewAllHref="/cho-thue"
          className="bg-gray-50"
        />

        {/* Featured Brokers Section */}
        <FeaturedBrokersSection brokers={featuredBrokers} />

        {/* Unified Broker Tools & AI Section */}
        <BrokerUnifiedSection />

        {/* Homeowner AI Section */}
        <HomeownerAISection />

        {/* Tools and Mortgage Section */}
        <ToolsAndMortgageSection utilities={utilities} articles={mortgageArticles} />

        {/* News Section */}
        <NewsSection />

        <LocationBrowseSection />

        <Footer />
      </div>

      <BackToTop />
    </main>
  );
}

export default async function Page() {
  return <HomePageContent />;
}
