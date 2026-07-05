# Tổng Đài Địa Ốc - Claude Implementation Guide

## Current Status: Frontend Ready for Backend Integration

The Next.js 16 frontend has been fully rebranded to "Tổng Đài Địa Ốc" (TDDO). Your task is to complete the frontend and implement the backend API.

## What's Been Done

### 1. Color & Branding
- Navy Primary: `#1E3A5F` (oklch: 0.31 0.09 255)
- Orange Accent: `#F2922E` (oklch: 0.65 0.17 40)
- All CSS variables updated in `app/globals.css`

### 2. Header Component (`components/header.tsx`)
New mega menu with 6 categories:
- **Mua**: Mua nhà riêng, căn hộ, đất, dự án
- **Thuê**: Cho thuê nhà, căn hộ, phòng, mặt bằng
- **Dự án**: Dự án mới, sắp ra mắt
- **Dành cho Môi giới**: Công cụ, marketing, hướng dẫn, community
- **Trang tin**: Bài viết, hướng dẫn, tin thị trường
- **Chính sách**: Điều khoản, bảo mật, liên hệ

Button: "Đăng tin miễn phí" (accent color)

### 3. Footer Component (`components/footer.tsx`)
- Contact section: 5 contact items (hotline, email)
- 5 columns: Mua, Thuê, Môi giới, Trang tin, Công ty
- Social links: Facebook, Twitter, LinkedIn
- Copyright: Tổng Đài Địa Ốc

### 4. Metadata & SEO
- Domain: `tongdaidiaoc.vn`
- Title: "Tổng Đài Địa Ốc - Nền tảng bất động sản trực tuyến"
- Keywords: bất động sản, mua bán nhà, cho thuê, etc.
- OG tags, Twitter cards updated

---

## Frontend Implementation TODO

### Phase 1: Homepage Refactor (Current)
The homepage needs 9 sections. Current page.tsx uses old layout. Update to:

```
1. Hero + Search Section
   - Full-screen banner with search box
   - Location + type filters
   - "Đăng tin miễn phí" CTA

2. Statistics Section
   - "50,000+ tin đăng xác thực"
   - "Môi giới tin cậy"
   - "Hỗ trợ 24/7"

3. Property Listings (Buy)
   - 2 rows × 3 cols = 6 cards
   - "Xem tất cả" → /mua-ban/nha-rieng

4. Property Listings (Rent)
   - 2 rows × 3 cols = 6 cards
   - "Xem tất cả" → /cho-thue/can-ho

5. Featured Projects
   - 3 project cards with images
   - Project name, location, unit count
   - "Xem dự án" → /du-an

6. Districts & Locations
   - Grid of district cards
   - Count of listings per district
   - Click → filter by district

7. 3-Step Posting Guide
   - Step 1: "Nhập thông tin nhà đất"
   - Step 2: "Đăng hình ảnh"
   - Step 3: "Hoàn thành & công bố"
   - CTA: "Bắt đầu đăng tin"

8. Tips & Articles
   - 3 featured articles
   - Title, excerpt, author, date
   - "Xem tất cả tin" → /tin

9. CTA Banner
   - "Tìm nhà ưng ý hoặc đăng tin miễn phí"
   - Dual CTA buttons
```

### Phase 2: Pages to Create

#### A. Listing Pages
- `/mua-ban/[type]` - Buy listing page
  - Types: nha-rieng, can-ho, dat, du-an
  - Filter bar, listing grid, pagination
  
- `/cho-thue/[type]` - Rent listing page
  - Types: nha, can-ho, phong, mat-bang
  - Filter bar, listing grid, pagination

- `/tin` - Blog/Articles page
  - Article grid, category filter
  - Pagination

- `/tin/[slug]` - Article detail
  - Full article content
  - JSON-LD schema for SEO
  - Related articles

- `/du-an` - Projects page
  - Project grid, filter by location
  - Each project card with details

#### B. Post Listing Pages
- `/dang-tin` - Post new listing
  - Form: type, transaction, location, price, area, rooms, images
  - Validation, preview
  - Success page with sharing

#### C. Broker Pages
- `/moi-gioi` - Broker landing page
- `/moi-gioi/cong-cu` - Broker tools
- `/moi-gioi/marketing` - Marketing support
- `/moi-gioi/huong-dan` - Tutorial

#### D. Auth Pages
- `/dang-nhap` - Login form (email + password)
- `/dang-ky` - Sign up form
- `/lien-he` - Contact form

#### E. Policy Pages
- `/chinh-sach/dieu-khoan` - Terms of service
- `/chinh-sach/bao-mat` - Privacy policy
- `/ve-chung-toi` - About us

---

## Data Layer

### Types (Already created in `lib/types/listing.ts`)
```typescript
interface Listing {
  id, title, description, type, transactionType,
  price, priceDisplay, area, bedrooms, bathrooms,
  address, district, city, latitude, longitude,
  images[], featured, verified, postedDate,
  views, saves, agentName, agentPhone, agentEmail
}

interface District {
  id, name, city, listingCount, imageUrl
}

interface Article {
  id, slug, title, excerpt, content, category,
  author, publishedDate, imageUrl, views, featured
}

interface SearchFilter {
  type, transactionType, district, city,
  minPrice, maxPrice, minArea, maxArea,
  minBedrooms, maxBedrooms, sort, page, limit
}
```

### Mock Data Needed in `lib/mock/listings.ts`
- 20 buy listings (mix of houses, apartments, land)
- 20 rent listings (apartments, rooms, commercial)
- 10 articles (mix of categories)
- 12 districts with listing counts
- 5 featured projects

---

## API Endpoints Expected

### Listings API
```
GET    /api/listings                        - Get all listings
GET    /api/listings?type=&transaction=&... - Filter listings
GET    /api/listings/:id                    - Get single listing
POST   /api/listings                        - Create listing (auth required)
PUT    /api/listings/:id                    - Update listing (auth required)
DELETE /api/listings/:id                    - Delete listing (auth required)
POST   /api/listings/:id/save               - Save listing (auth required)
```

### Articles API
```
GET    /api/articles                        - Get all articles
GET    /api/articles/:slug                  - Get single article
GET    /api/articles?category=&sort=        - Filter articles
POST   /api/articles                        - Create article (admin)
```

### Districts API
```
GET    /api/districts                       - Get all districts
GET    /api/districts/:id/listings          - Get listings by district
```

### Auth API
```
POST   /api/auth/register                   - User registration
POST   /api/auth/login                      - User login
POST   /api/auth/logout                     - User logout
POST   /api/auth/refresh                    - Refresh token
GET    /api/auth/me                         - Get current user
```

### Search API
```
POST   /api/search                          - Advanced search with filters
```

---

## Components to Create/Update

### New Components
- `components/listing-card.tsx` - Property card display
- `components/filter-bar.tsx` - Search & filter UI
- `components/district-grid.tsx` - Districts browsing
- `components/post-steps.tsx` - 3-step posting guide
- `components/broker-section.tsx` - Broker benefits section
- `components/articles-grid.tsx` - Article display

### Components to Delete
- `components/app-download-section.tsx` - Not needed for TDDO
- `components/recently-viewed-section.tsx` - Remove from homepage

### Components to Update
- `components/property-card.tsx` - Update styling to TDDO colors
- `components/hero-search.tsx` - Update with TDDO layout
- `components/properties-section.tsx` - Update grid styling

---

## Environment Setup

Create `.env.local`:
```
NEXT_PUBLIC_API_URL=http://localhost:3001
NEXT_PUBLIC_SITE_NAME=Tổng Đài Địa Ốc
NEXT_PUBLIC_SITE_URL=https://tongdaidiaoc.vn
```

---

## Implementation Order

1. **Homepage** - Create 9 sections
2. **Listing Pages** - `/mua-ban`, `/cho-thue` with filters
3. **Article Pages** - `/tin`, `/tin/[slug]`
4. **Forms** - Post listing, auth forms
5. **Broker Pages** - Landing & tools
6. **Remaining Pages** - Policies, about, contact
7. **Backend API** - Implement all endpoints
8. **Integration** - Connect frontend to API
9. **Testing** - E2E tests, SEO validation
10. **Deployment** - Build, optimize, deploy

---

## Key Files

- `app/layout.tsx` - Metadata (✓ updated)
- `app/page.tsx` - Homepage (needs refactor)
- `app/globals.css` - Colors (✓ updated)
- `components/header.tsx` - (✓ rebuilt)
- `components/footer.tsx` - (✓ rebuilt)
- `lib/types/listing.ts` - Types (✓ created)
- `lib/mock/listings.ts` - Mock data (needs creation)

---

## Styling Notes

- Use `bg-primary`, `text-accent` for TDDO colors
- Responsive: mobile first (320px min), tablet (768px), desktop (1024px+)
- All text uses semantic Tailwind classes
- Images optimized with Next.js Image component
- No absolute positioning except modals/dropdowns

---

## Testing Checklist

- [ ] `pnpm build` passes without errors
- [ ] All pages render correctly
- [ ] Mobile responsive (375px, 768px, 1024px)
- [ ] Links navigate correctly
- [ ] Forms validate input
- [ ] API mocks return expected data
- [ ] Images load correctly
- [ ] SEO: OG tags display, JSON-LD valid
- [ ] Lighthouse: >90 score

---

## Next Steps for Claude

1. Read this guide completely
2. Create mock data in `lib/mock/listings.ts`
3. Refactor `app/page.tsx` with 9 sections
4. Create listing pages with filter UI
5. Create form pages
6. Implement backend API
7. Integration testing

The frontend structure is ready. Focus on content, pages, and API integration!
