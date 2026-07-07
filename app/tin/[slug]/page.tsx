import { Metadata } from 'next';
import Header from '@/components/header';
import Footer from '@/components/footer';
import ListingGallery from '@/components/listings/listing-gallery';
import ListingActionBar from '@/components/listings/listing-action-bar';
import ListingOverview from '@/components/listings/listing-overview';
import ListingFactsTable from '@/components/listings/listing-facts-table';
import ListingAmenities from '@/components/listings/listing-amenities';
import ListingMap from '@/components/listings/listing-map';
import ListingContactSidebar from '@/components/listings/listing-contact-sidebar';
import SimilarListingsCarousel from '@/components/listings/similar-listings-carousel';
import ListingJsonLd from '@/components/listings/listing-json-ld';
import ListingPoiTabs from '@/components/listings/listing-poi-tabs';
import { getListing, getSimilar } from '@/lib/api';
import { mockListings } from '@/lib/mock/listings';

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  try {
    const listing = await getListing(slug);
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
    const { slug } = await params;
    const listing = mockListings.find(l => l.slug === slug);
    if (!listing) return { title: 'Tin không tìm thấy' };
    return {
      title: `${listing.title} - Tổng Đài Địa Ốc`,
      description: `${listing.title}. ${listing.area}m², giá ${listing.priceText}. ${listing.districtName}`,
    };
  }
}

export default async function ListingPage({ params }: Props) {
  const { slug } = await params;
  let listing: any = null;
  let similar: any[] = [];

  try {
    listing = await getListing(slug);
    try {
      similar = await getSimilar(slug, 12);
    } catch (err) {
      similar = [];
    }
  } catch {
    listing = mockListings.find(l => l.slug === slug);
    similar = mockListings
      .filter(l => l.slug !== slug && l.listingType === listing?.listingType)
      .slice(0, 12);
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

  const images = listing.images?.length
    ? listing.images
    : [listing.coverUrl || 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800'];
  const amenities = listing.amenities || [];
  const districtName = listing.districtName || listing.wardName || 'TP.HCM';
  const listingTypeLabel = listing.listingType === 'sale' ? 'Bán' : 'Cho thuê';
  const sourceTypeLabel =
    listing.sourceType === 'chinhchu'
      ? 'Chính chủ'
      : listing.sourceType === 'moigioi'
        ? 'Môi giới'
        : undefined;
  const publishedAtLabel = listing.publishedAt
    ? new Date(listing.publishedAt).toLocaleDateString('vi-VN')
    : undefined;
  const priceLabel = listing.rentPeriod ? `${listing.priceText} / ${listing.rentPeriod}` : listing.priceText;

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="pt-16">
        {/* Breadcrumb */}
        <section className="px-4 sm:px-6 lg:px-8 py-4 border-b border-gray-200">
          <div className="max-w-7xl mx-auto">
            <nav className="flex gap-2 text-sm text-gray-600">
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

        {/* Action Bar */}
        <section className="px-4 sm:px-6 lg:px-8 py-4">
          <div className="max-w-7xl mx-auto">
            <ListingActionBar 
              isOwnerVerified={listing.isOwnerVerified}
              listingId={listing.id}
            />
          </div>
        </section>

        {/* Main Content */}
        <div className="px-4 sm:px-6 lg:px-8 pb-16">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-6">
              <ListingGallery images={images} title={listing.title} />

              <div className="border-b border-gray-200 pb-6">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{listing.title}</h1>
                <p className="text-gray-500 text-sm">Mã tin: <span className="font-semibold">{listing.code || listing.id}</span></p>
              </div>

              <ListingOverview descriptionHtml={listing.descriptionHtml} />

              <ListingFactsTable 
                facts={[
                  { label: 'Loại hình', value: listing.propertyTypeName },
                  { label: 'Phòng ngủ', value: listing.bedrooms },
                  { label: 'Phòng tắm', value: listing.bathrooms },
                  { label: 'Diện tích', value: listing.area ? `${listing.area} m²` : undefined },
                  { label: 'Khu vực', value: districtName },
                  { label: 'Phường', value: listing.wardName },
                  { label: 'Địa chỉ', value: listing.addressText },
                  { label: 'Loại tin', value: listingTypeLabel },
                  { label: 'Nguồn', value: sourceTypeLabel },
                  { label: 'Ngày đăng', value: publishedAtLabel },
                  { label: 'Giá', value: priceLabel },
                ]}
              />

              <ListingAmenities amenities={amenities} />

              {listing.descriptionHtml && (
                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-bold mb-4 text-gray-900">Mô tả chi tiết</h3>
                  <div
                    className="prose prose-sm max-w-none text-gray-700"
                    dangerouslySetInnerHTML={{ __html: listing.descriptionHtml }}
                  />
                </div>
              )}

              <ListingMap 
                latitude={listing.latitude}
                longitude={listing.longitude}
                addressText={listing.addressText}
                title={listing.title}
              />

              <ListingPoiTabs />
            </div>

            {/* Right Sidebar */}
            <div className="lg:col-span-1">
              <ListingContactSidebar 
                priceText={listing.priceText}
                sourceType={listing.sourceType}
                isOwnerVerified={listing.isOwnerVerified}
                contactName={listing.contactName}
                contactPhone={listing.contactPhone}
                rentPeriod={listing.rentPeriod}
              />
            </div>
          </div>
        </div>

        {similar.length > 0 && (
          <SimilarListingsCarousel 
            listings={similar}
            title="Nhà đất tương tự"
          />
        )}
      </div>

      <section className="bg-primary text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Bạn muốn bán hoặc cho thuê?</h2>
          <p className="text-lg text-gray-100 mb-6">Đăng tin miễn phí trên Tổng Đài Địa Ốc</p>
          <a
            href="/chu-nha/dang-tin"
            className="inline-block px-8 py-3 bg-accent text-white font-semibold rounded-lg hover:opacity-90 transition"
          >
            Đăng tin ngay
          </a>
        </div>
      </section>

      <Footer />

      <ListingJsonLd 
        title={listing.title}
        description={listing.descriptionHtml}
        images={images}
        price={listing.price}
        area={listing.area}
        bedrooms={listing.bedrooms}
        districtName={districtName}
        addressText={listing.addressText}
        publishedAt={listing.publishedAt}
        priceText={listing.priceText}
      />
    </main>
  );
}
