import { Metadata } from 'next';
import { CheckCircle } from 'lucide-react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import ListingGallery from '@/components/listings/listing-gallery';
import ListingCard from '@/components/listings/listing-card';
import { getListing, getSimilar } from '@/lib/api';
import { mockListings } from '@/lib/mock/listings';

interface Props {
  params: {
    slug: string;
  };
}

export const dynamic = 'force-dynamic';
export const revalidate = 0;

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
        images: [listing.coverUrl || listing.images?.[0] || ''],
      },
    };
  } catch {
    const listing = mockListings.find(l => l.slug === params.slug);
    if (!listing) return { title: 'Tin không tìm thấy' };
    return {
      title: `${listing.title} - Tổng Đài Địa Ốc`,
      description: `${listing.title}. ${listing.area}m², giá ${listing.priceText}. ${listing.districtName}`,
    };
  }
}

export default async function ListingPage({ params }: Props) {
  let listing: any = null;
  let similar: any[] = [];

  try {
    listing = await getListing(params.slug);
    try {
      similar = await getSimilar(params.slug, 6);
    } catch (err) {
      similar = [];
    }
  } catch {
    listing = mockListings.find(l => l.slug === params.slug);
    similar = mockListings
      .filter(l => l.slug !== params.slug && l.listingType === listing?.listingType)
      .slice(0, 6);
  }

  if (!listing) {
    return (
      <main className="min-h-screen bg-white">
        <Header />
        <div className="pt-16 section-spacing">
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-gray-600">Tin đăng không tìm thấy</p>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  const images = listing.images || [listing.coverUrl || 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800'];
  const amenities = listing.amenities || [];

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
            {/* Left Column - Gallery & Details (2 cols) */}
            <div className="lg:col-span-2 space-y-6">
              {/* Gallery */}
              <ListingGallery images={images} title={listing.title} />

              {/* Trust badges */}
              {listing.isOwnerVerified && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3">
                  <CheckCircle className="text-green-600" size={20} />
                  <div>
                    <p className="font-semibold text-green-900">Tin xác thực TDDO</p>
                    <p className="text-sm text-green-700">Thông tin đã được xác minh</p>
                  </div>
                </div>
              )}

              {/* Title & Code */}
              <div className="border-b border-gray-200 pb-6">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{listing.title}</h1>
                <p className="text-gray-500 text-sm">Mã tin: <span className="font-semibold">{listing.code || listing.id}</span></p>
              </div>

              {/* Overview */}
              {listing.descriptionHtml && (
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="line-clamp-3 text-gray-700 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: listing.descriptionHtml }} />
                  <button className="text-primary font-semibold mt-3 text-sm hover:underline">
                    Xem thêm
                  </button>
                </div>
              )}

              {/* Basic Info Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 p-6 bg-gray-50 rounded-lg">
                <div>
                  <p className="text-gray-600 text-sm font-medium">Loại hình</p>
                  <p className="font-semibold text-gray-900">{listing.propertyTypeName || 'N/A'}</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm font-medium">Phòng ngủ</p>
                  <p className="font-semibold text-gray-900">{listing.bedrooms || 'N/A'}</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm font-medium">Phòng tắm</p>
                  <p className="font-semibold text-gray-900">{listing.bathrooms || 'N/A'}</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm font-medium">Diện tích</p>
                  <p className="font-semibold text-gray-900">{listing.area || 'N/A'} m²</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm font-medium">Khu vực</p>
                  <p className="font-semibold text-gray-900">{listing.districtName || 'N/A'}</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm font-medium">Giá</p>
                  <p className="font-semibold text-accent text-lg">{listing.priceText}</p>
                </div>
              </div>

              {/* Amenities */}
              {amenities.length > 0 && (
                <div className="p-6 border border-gray-200 rounded-lg">
                  <h3 className="text-xl font-bold mb-4 text-gray-900">Tiện ích</h3>
                  <div className="flex flex-wrap gap-3">
                    {amenities.map((amenity: any) => (
                      <span
                        key={amenity.id}
                        className="px-4 py-2 bg-blue-50 border border-blue-200 text-blue-700 text-sm rounded font-medium"
                      >
                        {amenity.name}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Full Description */}
              {listing.descriptionHtml && (
                <div className="p-6 border border-gray-200 rounded-lg">
                  <h3 className="text-xl font-bold mb-4 text-gray-900">Mô tả chi tiết</h3>
                  <div
                    className="prose prose-sm max-w-none text-gray-700"
                    dangerouslySetInnerHTML={{ __html: listing.descriptionHtml }}
                  />
                </div>
              )}

              {/* Map Placeholder */}
              <div className="w-full h-96 bg-gray-200 rounded-lg flex items-center justify-center border border-gray-300">
                <span className="text-gray-500 font-medium">Bản đồ vị trí - Placeholder</span>
              </div>
            </div>

            {/* Right Column - Sticky Sidebar (1 col) */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-4">
                {/* Price Card */}
                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                  <p className="text-4xl font-bold text-primary">{listing.priceText}</p>
                  {listing.rentPeriod && (
                    <p className="text-gray-600 text-sm mt-1">/{listing.rentPeriod}</p>
                  )}

                  {/* Badges */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {listing.sourceType === 'chinhchu' && (
                      <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded">
                        Chính chủ
                      </span>
                    )}
                    {listing.sourceType === 'moigioi' && (
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded">
                        Môi giới
                      </span>
                    )}
                    {listing.isOwnerVerified && (
                      <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-xs font-semibold rounded">
                        Xác thực
                      </span>
                    )}
                  </div>
                </div>

                {/* Contact Card */}
                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                  <h4 className="font-bold text-gray-900 mb-2">Liên hệ người bán</h4>
                  <p className="font-semibold text-gray-900">{listing.contactName || 'Liên hệ'}</p>
                  <p className="text-gray-600 text-sm">{listing.contactPhone || 'N/A'}</p>

                  {/* Action Buttons */}
                  <div className="mt-4 space-y-2">
                    {listing.contactPhone && (
                      <>
                        <a
                          href={`https://zalo.me/${listing.contactPhone}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block w-full px-4 py-3 bg-blue-100 text-blue-700 font-semibold rounded text-center hover:bg-blue-200 transition"
                        >
                          Liên hệ Zalo
                        </a>
                        <a
                          href={`tel:${listing.contactPhone}`}
                          className="block w-full px-4 py-3 bg-primary text-white font-semibold rounded text-center hover:bg-primary/90 transition"
                        >
                          Gọi ngay
                        </a>
                      </>
                    )}
                  </div>
                </div>

                {/* Safety Tips */}
                <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                  <h4 className="font-bold text-yellow-900 mb-2 text-sm">Mẹo an toàn</h4>
                  <ul className="text-xs text-yellow-800 space-y-1">
                    <li>✓ Không gửi tiền trước khi xem nhà</li>
                    <li>✓ Kiểm tra pháp lý trước khi mua</li>
                    <li>✓ Gặp trực tiếp để xác nhận</li>
                    <li>✓ Yêu cầu giấy tờ hợp pháp</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Similar Listings */}
        {similar.length > 0 && (
          <section className="section-spacing border-t border-gray-200">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Tin tương tự</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {similar.map((item: any) => (
                  <ListingCard key={item.id} listing={item} />
                ))}
              </div>
            </div>
          </section>
        )}
      </div>
      <Footer />

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Product',
            name: listing.title,
            description: listing.description || listing.title,
            image: images[0],
            offers: {
              '@type': 'Offer',
              price: listing.price,
              priceCurrency: 'VND',
            },
            aggregateRating: listing.rating ? {
              '@type': 'AggregateRating',
              ratingValue: listing.rating,
              reviewCount: listing.reviewCount || 0,
            } : undefined,
          }),
        }}
      />
    </main>
  );
}
