import { Metadata } from 'next';
import Header from '@/components/header';
import Footer from '@/components/footer';
import ListingCard from '@/components/listings/listing-card';
import { getListings } from '@/lib/api';
import { mockListings } from '@/lib/mock/listings';

export const metadata: Metadata = {
  title: 'Cho thuê nhà đất | Tổng Đài Địa Ốc',
  description: 'Tìm kiếm và cho thuê nhà đất, căn hộ TP.HCM. Đăng tin miễn phí - AI hỗ trợ nội dung.',
  canonical: 'https://tongdaidiaoc.vn/cho-thue',
};

interface Props {
  searchParams: Promise<{
    page?: string;
  }>;
}

async function getRentListings(page: number = 1) {
  try {
    const result = await getListings({ type: 'rent', page, pageSize: 24 });
    return result;
  } catch (error) {
    console.error('Failed to fetch rent listings, using mock data');
    const rentListings = mockListings.filter(l => l.listingType === 'rent');
    const pageSize = 24;
    const total = rentListings.length;
    const items = rentListings.slice((page - 1) * pageSize, page * pageSize);
    return { items, total, page, pageSize };
  }
}

export default async function RentPage({ searchParams }: Props) {
  const params = await searchParams;
  const currentPage = parseInt(params.page || '1');
  const result = await getRentListings(currentPage);
  const { items: rentListings, total, pageSize } = result;
  const totalPages = Math.ceil(total / pageSize);

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
            <p className="text-gray-600 text-lg">{total} tin đăng</p>
          </div>
        </section>

        <div className="section-spacing">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {rentListings.map((listing) => (
                <ListingCard key={listing.id} listing={listing} />
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center gap-2 items-center">
              {currentPage > 1 && (
                <a
                  href={`/cho-thue?page=${currentPage - 1}`}
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
                  href={`/cho-thue?page=${currentPage + 1}`}
                  className="px-4 py-2 border border-primary text-primary rounded hover:bg-primary hover:text-white transition"
                >
                  Tiếp
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
