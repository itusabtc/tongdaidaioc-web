import { Metadata } from 'next';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { getListing } from '@/lib/api';
import { mockListings } from '@/lib/mock/listings';

interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const listing = await getListing(params.slug);
    return {
      title: `${listing.title} - Tổng Đài Địa Ốc`,
      description: `${listing.title}. ${listing.area}m², giá ${listing.priceText}. ${listing.districtName}`,
      canonical: `https://tongdaidiaoc.vn/tin/${listing.slug}`,
      openGraph: {
        type: 'website',
        title: listing.title,
        description: `${listing.propertyTypeName} tại ${listing.districtName}`,
        images: [listing.coverUrl || ''],
      },
    };
  } catch {
    // Fallback to mock
    const listing = mockListings.find(l => l.slug === params.slug);
    if (!listing) return { title: 'Tin không tìm thấy' };
    
    return {
      title: `${listing.title} - Tổng Đài Địa Ốc`,
      description: `${listing.title}. ${listing.area}m², giá ${listing.priceText}. ${listing.districtName}`,
    };
  }
}

export async function generateStaticParams() {
  return mockListings.map(listing => ({
    slug: listing.slug,
  }));
}

export default async function ListingPage({ params }: Props) {
  let listing = null;
  
  try {
    listing = await getListing(params.slug);
  } catch {
    listing = mockListings.find(l => l.slug === params.slug);
  }

  if (!listing) {
    return (
      <main className="min-h-screen bg-white">
        <Header />
        <div className="pt-16 section-spacing">
          <div className="max-w-7xl mx-auto">
            <p className="text-center text-gray-600">Tin đăng không tìm thấy</p>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="pt-16">
        {/* Breadcrumb */}
        <section className="section-spacing border-b border-gray-200">
          <div className="max-w-7xl mx-auto">
            <nav className="flex gap-2 text-sm text-gray-600 mb-6">
              <a href="/" className="hover:text-primary">Trang chủ</a>
              <span>/</span>
              <a href={listing.listingType === 'sale' ? '/mua-ban' : '/cho-thue'} className="hover:text-primary">
                {listing.listingType === 'sale' ? 'Mua bán' : 'Cho thuê'}
              </a>
              <span>/</span>
              <span className="text-gray-900 font-semibold truncate">{listing.title}</span>
            </nav>
          </div>
        </section>

        {/* Main Content */}
        <div className="section-spacing">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Gallery & Details */}
            <div className="lg:col-span-2">
              {/* Gallery */}
              <div className="mb-8">
                <img
                  src={listing.coverUrl}
                  alt={listing.title}
                  className="w-full h-96 object-cover rounded-lg mb-4"
                />
                <div className="grid grid-cols-3 gap-3">
                  {[1, 2, 3].map(i => (
                    <img
                      key={i}
                      src={listing.coverUrl}
                      alt={`${listing.title} ${i}`}
                      className="w-full h-24 object-cover rounded cursor-pointer hover:opacity-80 transition"
                    />
                  ))}
                </div>
              </div>

              {/* Title & Price */}
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{listing.title}</h1>
              <div className="flex gap-3 mb-6">
                {listing.sourceType === 'moigioi' && (
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
                    Môi giới
                  </span>
                )}
                {listing.isOwnerVerified && (
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                    Đã xác thực
                  </span>
                )}
              </div>

              <p className="text-4xl font-bold text-accent mb-8">{listing.priceText}</p>

              {/* Specs */}
              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h3 className="font-bold text-lg mb-4">Thông tin chi tiết</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-600">Diện tích</p>
                    <p className="font-semibold">{listing.area} m²</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Loại BĐS</p>
                    <p className="font-semibold">{listing.propertyTypeName}</p>
                  </div>
                  {listing.bedrooms && (
                    <div>
                      <p className="text-gray-600">Phòng ngủ</p>
                      <p className="font-semibold">{listing.bedrooms}</p>
                    </div>
                  )}
                  <div>
                    <p className="text-gray-600">Khu vực</p>
                    <p className="font-semibold">{listing.districtName}</p>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="prose prose-sm max-w-none mb-8">
                <h3 className="font-bold text-lg mb-3">Mô tả chi tiết</h3>
                <p>
                  {listing.propertyTypeName} chất lượng cao tại {listing.districtName}, diện tích {listing.area}m².
                  {listing.bedrooms && ` ${listing.bedrooms} phòng ngủ, `}
                  Giá niêm yết {listing.priceText}. Thích hợp cho gia đình trẻ hoặc nhà đầu tư. 
                  Liên hệ ngay để xem chi tiết.
                </p>
              </div>

              {/* Map Placeholder */}
              <div className="bg-gray-100 rounded-lg h-64 mb-8 flex items-center justify-center">
                <p className="text-gray-500">Bản đồ vị trí (placeholder)</p>
              </div>
            </div>

            {/* Sidebar - Contact */}
            <aside className="lg:col-span-1">
              <div className="sticky top-20 bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="font-bold text-lg mb-6">Thông tin liên hệ</h3>
                
                <div className="mb-6">
                  <p className="text-sm text-gray-600 mb-1">Tên liên hệ</p>
                  <p className="font-semibold">Nguyễn Văn A</p>
                </div>

                <div className="mb-6">
                  <p className="text-sm text-gray-600 mb-1">Số điện thoại</p>
                  <p className="font-semibold text-lg text-primary">0909 123 456</p>
                </div>

                <div className="space-y-3 mb-6">
                  <button className="w-full px-4 py-3 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600 transition flex items-center justify-center gap-2">
                    <span>💬</span> Zalo
                  </button>
                  <button className="w-full px-4 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition flex items-center justify-center gap-2">
                    <span>☎️</span> Gọi điện
                  </button>
                </div>

                <div className="text-sm text-gray-600 p-4 bg-gray-50 rounded-lg">
                  <p className="font-semibold mb-2">Mẹo an toàn</p>
                  <ul className="space-y-1 list-disc list-inside">
                    <li>Kiểm tra giấy tờ pháp lý</li>
                    <li>Xem trực tiếp tài sản</li>
                    <li>Hỏi thêm thông tin chi tiết</li>
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
