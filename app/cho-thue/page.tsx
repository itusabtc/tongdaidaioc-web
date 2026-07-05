import { Metadata } from 'next';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { getListings } from '@/lib/api';
import { mockListings } from '@/lib/mock/listings';

export const metadata: Metadata = {
  title: 'Cho thuê nhà đất | Tổng Đài Địa Ốc',
  description: 'Tìm kiếm và cho thuê nhà đất, căn hộ, phòng trọ. Hàng trăm tin đăng xác thực.',
  canonical: 'https://tongdaidiaoc.vn/cho-thue',
};

async function getRentListings() {
  try {
    const result = await getListings({ type: 'rent', pageSize: 24 });
    return result.items;
  } catch (error) {
    console.error('Failed to fetch rent listings, using mock data');
    return mockListings.filter(l => l.listingType === 'rent');
  }
}

export default async function RentPage() {
  const rentListings = await getRentListings();
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="pt-16">
        <section className="section-spacing border-b border-gray-200">
          <div className="max-w-7xl mx-auto">
            <nav className="flex gap-2 text-sm text-gray-600 mb-6">
              <a href="/" className="hover:text-primary">Trang chủ</a>
              <span>/</span>
              <span className="text-gray-900 font-semibold">Cho thuê</span>
            </nav>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Cho thuê nhà đất</h1>
            <p className="text-gray-600 text-lg">{rentListings.length} tin đăng</p>
          </div>
        </section>

        <div className="section-spacing">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {rentListings.map((listing) => (
                <a
                  key={listing.id}
                  href={`/tin/${listing.slug}`}
                  className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition group"
                >
                  <div className="relative overflow-hidden bg-gray-100 h-48">
                    <img
                      src={listing.coverUrl}
                      alt={listing.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition"
                    />
                    {listing.sourceType === 'moigioi' && (
                      <div className="absolute top-3 right-3 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">
                        Môi giới
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <p className="text-accent font-bold text-lg mb-2">{listing.priceText}</p>
                    <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-primary transition">
                      {listing.title}
                    </h3>
                    <div className="flex gap-4 text-sm text-gray-600 mb-2">
                      <span>{listing.area} m²</span>
                      {listing.bedrooms && <span>{listing.bedrooms} phòng</span>}
                    </div>
                    <p className="text-sm text-gray-600">{listing.districtName}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
