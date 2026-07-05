# Phase 6 Remaining Tasks - Implementation Guide

## Completed (Phase 6 Part A)
- ✅ /tim-kiem search route with API integration
- ✅ Hero search submit + chips navigation
- ✅ AuthMenu component + header integration
- ✅ Header scroll effect + Dự án menu removal

## Remaining Tasks (Phase 6 Part B)

### 1. Refactor /tai-khoan with Real API Calls

**File**: `app/tai-khoan/page.tsx` + `components/account/account-client.tsx`

```tsx
// In AccountClient.tsx - update useEffect
useEffect(() => {
  const token = localStorage.getItem('tddo_token');
  if (!token) {
    router.push('/dang-nhap?returnUrl=/tai-khoan');
    return;
  }
  
  Promise.all([getMe(), getMyListings()])
    .then(([user, listings]) => {
      setUser(user);
      setListings(listings.items);
      setTotal(listings.total);
    })
    .catch(err => setError(err.message));
}, []);

// Map listing status from API
const statusMap: Record<string, string> = {
  'draft': 'Nháp',
  'pending_review': 'Chờ duyệt',
  'active': 'Đang hiển thị',
  'expired': 'Hết hạn'
};
```

### 2. Create ListingGallery Component

**File**: `components/listings/listing-gallery.tsx`

```tsx
'use client';

import Image from 'next/image';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ListingGalleryProps {
  images: string[];
  title: string;
}

export default function ListingGallery({ images, title }: ListingGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImage = () => setCurrentIndex(Math.max(0, currentIndex - 1));
  const nextImage = () => setCurrentIndex(Math.min(images.length - 1, currentIndex + 1));

  // Handle keyboard arrows
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'ArrowRight') nextImage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex]);

  if (!images.length) return null;

  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden">
      {/* Main image */}
      <div className="relative aspect-video bg-gray-800">
        <Image
          src={images[currentIndex]}
          alt={`${title} - ${currentIndex + 1}`}
          fill
          className="object-cover"
        />
        {/* Prev/Next buttons */}
        <button
          onClick={prevImage}
          disabled={currentIndex === 0}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded disabled:opacity-30"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={nextImage}
          disabled={currentIndex === images.length - 1}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded disabled:opacity-30"
        >
          <ChevronRight />
        </button>
        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-2 h-2 rounded-full transition ${
                i === currentIndex ? 'bg-white' : 'bg-white/30'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Thumbnails */}
      <div className="bg-gray-950 p-2 overflow-x-auto flex gap-2">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`flex-shrink-0 w-20 h-20 rounded border-2 overflow-hidden transition ${
              i === currentIndex ? 'border-white' : 'border-gray-700'
            }`}
          >
            <Image
              src={img}
              alt={`Thumbnail ${i + 1}`}
              width={80}
              height={80}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
```

### 3. Build /tin/[slug] Detail Page (Rever-style)

**File**: `app/tin/[slug]/page.tsx`

```tsx
// Key structure:
// [Breadcrumb]
// ┌─ Gallery (left, 2/3 width)
// │  └ ListingGallery component
// │
// └─ Sidebar (right, 1/3 width)
//    ├ Price + Badges
//    ├ Contact buttons
//    ├ Lead form (client)
//    └ Safety tips

// In page component:
export default async function ListingPage({ params }: Props) {
  const listing = await getListing(params.slug);
  const similar = await getSimilar(params.slug);
  
  return (
    <>
      <main>
        <Breadcrumb />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <ListingGallery images={listing.images} title={listing.title} />
            
            {/* Trust badges */}
            {listing.isOwnerVerified && (
              <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded flex items-center gap-2">
                <CheckCircle className="text-green-600" />
                <span>Tin xác thực TDDO</span>
              </div>
            )}
            
            {/* Title + code */}
            <h1 className="text-3xl font-bold mt-6">{listing.title}</h1>
            <p className="text-gray-500 text-sm">Mã tin: {listing.id}</p>
            
            {/* Overview */}
            <div className="mt-6 p-4 bg-gray-50 rounded">
              <p className="line-clamp-3">{listing.descriptionHtml}</p>
              <button className="text-primary font-semibold mt-2">[Xem thêm]</button>
            </div>
            
            {/* Basic info grid */}
            <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4">
              {/* Loại hình, PN, PT, DT, Khu vực, Địa chỉ, Giá */}
            </div>
            
            {/* Amenities chips */}
            {listing.amenities && (
              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4">Tiện ích</h3>
                <div className="flex flex-wrap gap-3">
                  {listing.amenities.map(a => (
                    <span key={a.id} className="px-3 py-2 bg-blue-50 text-blue-700 text-sm rounded border border-blue-200">
                      {a.name}
                    </span>
                  ))}
                </div>
              </div>
            )}
            
            {/* Description */}
            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4">Mô tả chi tiết</h3>
              <div dangerouslySetInnerHTML={{ __html: listing.descriptionHtml }} />
            </div>
            
            {/* Map placeholder */}
            <div className="mt-8 w-full h-96 bg-gray-200 rounded flex items-center justify-center">
              <span className="text-gray-500">Bản đồ - Placeholder</span>
            </div>
          </div>
          
          <div className="lg:col-span-1">
            {/* Sidebar */}
            <div className="sticky top-24">
              {/* Price + badges */}
              <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
                <p className="text-4xl font-bold text-primary">{listing.priceText}</p>
                {listing.rentPeriod && <p className="text-gray-600">/{listing.rentPeriod}</p>}
                
                {/* Badges */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {listing.sourceType === 'chinhchu' && (
                    <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded">
                      Chính chủ
                    </span>
                  )}
                  {listing.isOwnerVerified && (
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-xs font-semibold rounded">
                      Xác thực
                    </span>
                  )}
                </div>
              </div>
              
              {/* Contact section */}
              <SubmitLeadForm listing={listing} />
            </div>
          </div>
        </div>
      </main>
      
      {/* Similar listings */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold mb-6">Tin tương tự</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {similar.map(l => <ListingCard key={l.id} listing={l} />)}
        </div>
      </section>
      
      {/* JSON-LD Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Product",
        name: listing.title,
        description: listing.description,
        image: listing.images[0],
        offers: {
          "@type": "Offer",
          price: listing.price,
          priceCurrency: "VND"
        }
      })}} />
    </>
  );
}
```

### 4. Create SubmitLead Form Component

**File**: `components/listings/submit-lead-form.tsx`

```tsx
'use client';

import { useState } from 'react';
import { submitLead } from '@/lib/api';

interface SubmitLeadFormProps {
  listing: ListingDetail;
}

export default function SubmitLeadForm({ listing }: SubmitLeadFormProps) {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      await submitLead(listing.id, formData);
      setStatus('success');
      setFormData({ name: '', phone: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white border border-gray-200 rounded-lg p-6">
      <h3 className="text-lg font-bold mb-4">Liên hệ người bán</h3>
      
      {/* Contact info */}
      <div className="mb-4">
        <p className="font-semibold">{listing.contactName}</p>
        <p className="text-gray-600 text-sm">{listing.contactPhone}</p>
      </div>
      
      {/* Buttons */}
      <div className="flex gap-2 mb-6">
        <a href={`https://zalo.me/${listing.contactPhone}`} className="flex-1 px-4 py-2 bg-blue-100 text-blue-700 font-semibold rounded hover:bg-blue-200">
          Zalo
        </a>
        <a href={`tel:${listing.contactPhone}`} className="flex-1 px-4 py-2 bg-primary text-white font-semibold rounded hover:bg-primary/90">
          Gọi
        </a>
      </div>
      
      {/* Form */}
      <input
        type="text"
        placeholder="Họ tên"
        value={formData.name}
        onChange={e => setFormData({...formData, name: e.target.value})}
        className="w-full p-3 border border-gray-300 rounded mb-3"
        required
      />
      <input
        type="tel"
        placeholder="Số điện thoại"
        value={formData.phone}
        onChange={e => setFormData({...formData, phone: e.target.value})}
        className="w-full p-3 border border-gray-300 rounded mb-3"
        required
      />
      <textarea
        placeholder="Tin nhắn"
        value={formData.message}
        onChange={e => setFormData({...formData, message: e.target.value})}
        className="w-full p-3 border border-gray-300 rounded mb-3 resize-none"
        rows={4}
      />
      
      <button
        type="submit"
        disabled={loading}
        className="w-full px-4 py-3 bg-accent text-white font-bold rounded hover:bg-accent/90 disabled:opacity-50"
      >
        {loading ? 'Đang gửi...' : 'Gửi yêu cầu'}
      </button>
      
      {status === 'success' && <p className="mt-3 text-green-600">Gửi thành công!</p>}
      {status === 'error' && <p className="mt-3 text-red-600">Gửi thất bại. Thử lại.</p>}
      
      {/* Safety tips */}
      <div className="mt-6 p-3 bg-yellow-50 rounded text-sm text-yellow-800">
        <p className="font-semibold mb-2">Mẹo an toàn:</p>
        <ul className="space-y-1 text-xs">
          <li>• Không gửi tiền trước khi xem nhà</li>
          <li>• Kiểm tra pháp lý trước khi mua</li>
          <li>• Gặp trực tiếp để xác nhận thông tin</li>
        </ul>
      </div>
    </form>
  );
}
```

### 5. Implement getSimilar + Update API types

**File**: `lib/api.ts`

Add to API client:
```ts
export async function getSimilar(slug: string, limit = 6): Promise<ListingCard[]> {
  try {
    const response = await fetch(
      `${API_BASE}/listings/${slug}/similar?limit=${limit}`,
      { headers: getAuthHeaders() }
    );
    if (!response.ok) throw new Error('Failed to fetch similar listings');
    const data = await response.json();
    return data.items;
  } catch (error) {
    console.error('getSimilar error:', error);
    return mockListings
      .filter(l => l.listingType === mockListings.find(x => x.slug === slug)?.listingType)
      .slice(0, limit);
  }
}
```

### 6. Update ListingCard Property Name

**File**: `components/listings/listing-card.tsx`

Change:
```tsx
// FROM
{listing.verified && (
  <span className="...">Đã xác thực</span>
)}

// TO
{listing.isOwnerVerified && (
  <span className="...">Đã xác thực</span>
)}
```

### 7. Add Pagination to /mua-ban & /cho-thue

Update both pages to:
```tsx
async function getListingPage(type: 'sale' | 'rent', page = 1) {
  const result = await getListings({ type, page, pageSize: 24 });
  return result;
}

// Then add pagination UI:
const { items, total, page, pageSize } = await getListingPage(type);
const totalPages = Math.ceil(total / pageSize);
```

### 8. Fix TypeScript & Build

Run:
```bash
pnpm build  # Should pass
pnpm type-check  # Fix any type errors
```

## API Contract Expected

```ts
interface ListingDetail extends ListingCard {
  descriptionHtml: string;
  bathrooms?: number;
  addressText?: string;
  wardName?: string;
  contactName: string;
  contactPhone: string;
  images: string[];  // ≥5 images after seed
  amenities: { id: string; name: string; group?: string }[];
  latitude?: number;
  longitude?: number;
  priceUnit: string;
  rentPeriod?: string | null;
}
```

## Commit Message Template

```
Phase 6 Part B: Detail Page + Account API + Amenities + Similar Listings

Features:
- /tai-khoan: Real API calls (getMe, getMyListings)
- /tin/[slug]: Gallery slider, specs grid, amenities, contact form
- SubmitLeadForm: Lead submission with Zalo/call buttons
- getSimilar: Fetch & display related listings
- JSON-LD schema for SEO
- ListingGallery: Prev/next, dots, thumbnails, keyboard arrows

Build: ✅ 36 routes
Tests: All API-backed pages functional
```

## Testing Checklist

- [ ] /tim-kiem?kw=quan+7 loads correctly
- [ ] Hero search submit works
- [ ] AuthMenu shows logged in/out states
- [ ] /tai-khoan fetches user & listings
- [ ] /tin/[slug] loads gallery + specs + similar
- [ ] Lead form submits (check API response)
- [ ] Amenities render as chips
- [ ] JSON-LD visible in page source
- [ ] Mobile responsive
- [ ] pnpm build pass
