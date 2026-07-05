import { Metadata } from 'next';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { getListings } from '@/lib/api';
import { mockListings } from '@/lib/mock/listings';

export const metadata: Metadata = {
  title: 'Mua bán nhà đất | Tổng Đài Địa Ốc',
  description: 'Tìm kiếm và mua bán nhà đất, căn hộ, dự án bất động sán. Hàng trăm tin đăng xác thực.',
  canonical: 'https://tongdaidiaoc.vn/mua-ban',
};

async function getSaleListings() {
  try {
    const result = await getListings({ type: 'sale', pageSize: 24 });
    return result.items;
  } catch (error) {
    console.error('Failed to fetch sale listings, using mock data');
    return mockListings.filter(l => l.listingType === 'sale');
  }
}

export default async function BuySellPage() {
  const saleListings = await getSaleListings();

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="pt-16">
        {/* Hero / Breadcrumb */}
        <section className="section-spacing border-b border-gray-200">
          <div className="max-w-7xl mx-auto">
            <nav className="flex gap-2 text-sm text-gray-600 mb-6">
              <a href="/" className="hover:text-primary">Trang chủ</a>
              <span>/</span>
              <span className="text-gray-900 font-semibold">Mua bán</span>
            </nav>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Mua bán nhà đất</h1>
            <p className="text-gray-600 text-lg">{saleListings.length} tin đăng</p>
          </div>
        </section>

        {/* Content */}
        <div className="section-spacing">
          <div className="max-w-7xl mx-auto">
            <div className="flex gap-8">
              {/* Sidebar Filter - placeholder */}
              <aside className="hidden lg:block w-64 flex-shrink-0">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold mb-4">Bộ lọc</h3>
                  <div className="space-y-4 text-sm">
                    <div>
                      <label className="block font-semibold mb-2">Loại BĐS</label>
                      <select className="w-full border border-gray-300 rounded p-2">
                        <option>Tất cả</option>
                        <option>Nhà phố</option>
                        <option>Căn hộ</option>
                        <option>Đất nền</option>
                      </select>
                    </div>
                    <div>
                      <label className="block font-semibold mb-2">Khu vực</label>
                      <select className="w-full border border-gray-300 rounded p-2">
                        <option>Tất cả Quận</option>
                        <option>Quận 1</option>
                        <option>Quận 2</option>
                        <option>Quận 7</option>
                      </select>
                    </div>
                    <div>
                      <label className="block font-semibold mb-2">Giá</label>
                      <input type="range" className="w-full" />
                    </div>
                  </div>
                </div>
              </aside>

              {/* Grid */}
              <div className="flex-1">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {saleListings.map((listing) => (
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
                        {listing.isOwnerVerified && (
                          <div className="absolute top-3 left-3 bg-green-600 text-white text-xs font-bold px-2 py-1 rounded">
                            Đã xác thực
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

                {/* Pagination - placeholder */}
                <div className="mt-12 flex justify-center gap-2">
                  <button className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50">
                    Trước
                  </button>
                  <button className="px-4 py-2 bg-primary text-white rounded">1</button>
                  <button className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50">2</button>
                  <button className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50">
                    Tiếp
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
