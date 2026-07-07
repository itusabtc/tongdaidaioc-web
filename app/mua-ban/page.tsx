import { Metadata } from 'next';
import Header from '@/components/header';
import Footer from '@/components/footer';
import HeroBanner from '@/components/hero-banner';
import ListingCard from '@/components/listings/listing-card';
import { getListings } from '@/lib/api';
import { mockListings } from '@/lib/mock/listings';

export const metadata: Metadata = {
  title: 'Mua bán nhà đất | Tổng Đài Địa Ốc',
  description: 'Tìm kiếm và mua bán nhà đất, căn hộ TP.HCM. Đăng tin miễn phí - AI hỗ trợ nội dung.',
  canonical: 'https://tongdaidiaoc.vn/mua-ban',
};

interface Props {
  searchParams: Promise<{
    page?: string;
  }>;
}

async function getSaleListings(page: number = 1) {
  try {
    const result = await getListings({ type: 'sale', page, pageSize: 24 });
    return result;
  } catch (error) {
    console.error('Failed to fetch sale listings, using mock data');
    const saleListings = mockListings.filter(l => l.listingType === 'sale');
    const pageSize = 24;
    const total = saleListings.length;
    const items = saleListings.slice((page - 1) * pageSize, page * pageSize);
    return { items, total, page, pageSize };
  }
}

export default async function BuySellPage({ searchParams }: Props) {
  const params = await searchParams;
  const currentPage = parseInt(params.page || '1');
  const result = await getSaleListings(currentPage);
  const { items: saleListings, total, pageSize } = result;
  const totalPages = Math.ceil(total / pageSize);

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Banner */}
      <HeroBanner
        title="Mua bán nhà đất TP.HCM"
        subtitle="Tìm kiếm hàng nghìn tin đăng từ chủ nhà và môi giới — Đăng tin miễn phí, AI hỗ trợ"
        backgroundImage="https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1200&h=500&fit=crop"
        height="medium"
        cta={{
          label: 'Đăng tin bán ngay',
          href: '/chu-nha/dang-tin',
        }}
      />

      <div className="pt-0">
        {/* Breadcrumb */}
        <section className="px-4 sm:px-6 lg:px-8 py-6 border-b border-gray-200">
          <div className="max-w-7xl mx-auto">
            <nav className="flex gap-2 text-sm text-gray-600">
              <a href="/" className="hover:text-primary">Trang chủ</a>
              <span>/</span>
              <span className="text-gray-900 font-semibold">Mua bán</span>
            </nav>
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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                  {saleListings.map((listing) => (
                    <ListingCard key={listing.id} listing={listing} />
                  ))}
                </div>

                {/* Pagination */}
                <div className="flex justify-center gap-2 items-center">
                  {currentPage > 1 && (
                    <a
                      href={`/mua-ban?page=${currentPage - 1}`}
                      className="px-4 py-2 border border-primary text-primary rounded hover:bg-primary hover:text-white transition"
                    >
                      Trước
                    </a>
                  )}

                  <span className="px-4 py-2 text-gray-600 font-medium">
                    Trang {currentPage} / {totalPages || 1}
                  </span>

                  {currentPage < totalPages && (
                    <a
                      href={`/mua-ban?page=${currentPage + 1}`}
                      className="px-4 py-2 border border-primary text-primary rounded hover:bg-primary hover:text-white transition"
                    >
                      Tiếp
                    </a>
                  )}
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
