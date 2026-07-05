import { Metadata } from 'next';
import { Suspense } from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { getListings, getDistricts } from '@/lib/api';
import { mockListings } from '@/lib/mock/listings';
import ListingCard from '@/components/listings/listing-card';

interface SearchPageProps {
  searchParams: Promise<{
    kw?: string;
    district?: string;
    type?: 'sale' | 'rent';
    propertyType?: string;
    sort?: string;
    page?: string;
  }>;
}

export async function generateMetadata({ searchParams }: SearchPageProps): Promise<Metadata> {
  const params = await searchParams;
  const keyword = params.kw ? decodeURIComponent(params.kw) : '';
  return {
    title: keyword ? `Tìm kiếm "${keyword}" | TDDO` : 'Kết quả tìm kiếm | TDDO',
    description: `Kết quả tìm kiếm bất động sán trên Tổng Đài Địa Ốc${keyword ? ` cho "${keyword}"` : ''}`,
  };
}

async function SearchResults({ searchParams }: SearchPageProps) {
  const params = await searchParams;
  const keyword = params.kw ? decodeURIComponent(params.kw) : '';
  const district = params.district;
  const type = params.type || 'sale';
  const page = parseInt(params.page || '1');
  const pageSize = 24;

  let results = [];
  let total = 0;

  try {
    const data = await getListings({
      kw: keyword,
      district,
      type,
      pageSize,
      page,
    });
    results = data.items;
    total = data.total;
  } catch (error) {
    console.error('Failed to fetch search results, using mock data');
    results = mockListings
      .filter(l => {
        const matchType = type === 'sale' ? l.listingType === 'sale' : l.listingType === 'rent';
        const matchKeyword = !keyword || l.title.toLowerCase().includes(keyword.toLowerCase());
        const matchDistrict = !district || l.districtName?.toLowerCase().includes(district.toLowerCase());
        return matchType && matchKeyword && matchDistrict;
      })
      .slice((page - 1) * pageSize, page * pageSize);
    total = results.length;
  }

  return (
    <div className="max-w-7xl mx-auto">
      {/* Breadcrumb */}
      <nav className="flex gap-2 text-sm text-gray-600 mb-6">
        <a href="/" className="hover:text-primary">Trang chủ</a>
        <span>/</span>
        <span className="text-gray-900 font-semibold">Kết quả tìm kiếm</span>
      </nav>

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          {keyword ? `Kết quả tìm kiếm "${keyword}"` : 'Kết quả tìm kiếm'}
        </h1>
        <p className="text-gray-600 text-lg">{total} tin đăng</p>
      </div>

      {/* Results */}
      {results.length > 0 ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {results.map((listing: any) => (
              <ListingCard key={listing.id} listing={listing} />
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center gap-2 mb-12">
            {page > 1 && (
              <a 
                href={`/tim-kiem?kw=${params.kw}&district=${params.district}&type=${type}&page=${page - 1}`}
                className="px-4 py-2 border border-primary text-primary rounded hover:bg-primary hover:text-white transition"
              >
                Trước
              </a>
            )}
            <span className="px-4 py-2">Trang {page}</span>
            {results.length === pageSize && (
              <a 
                href={`/tim-kiem?kw=${params.kw}&district=${params.district}&type=${type}&page=${page + 1}`}
                className="px-4 py-2 border border-primary text-primary rounded hover:bg-primary hover:text-white transition"
              >
                Tiếp
              </a>
            )}
          </div>
        </>
      ) : (
        <div className="text-center py-16">
          <p className="text-gray-600 text-lg mb-4">Không tìm thấy tin phù hợp</p>
          <p className="text-gray-500 mb-6">Hãy thử tìm kiếm với từ khóa khác hoặc điều chỉnh bộ lọc</p>
          <a href="/" className="inline-block px-6 py-2 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition">
            Về trang chủ
          </a>
        </div>
      )}
    </div>
  );
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="pt-16 section-spacing">
        <Suspense fallback={<div className="text-center py-16">Đang tải...</div>}>
          <SearchResults searchParams={searchParams} />
        </Suspense>
      </div>
      <Footer />
    </main>
  );
}
