# Phase D - API Integration Guide

## Status: In Progress

This document provides step-by-step instructions to complete Phase D API integration for TDDO.

---

## COMPLETED

### 1. Environment Setup
- [x] `.env.example` created with `NEXT_PUBLIC_API_BASE` and `NEXT_PUBLIC_SITE_URL`
- [x] User should copy `.env.example` to `.env.local` and configure for local development

### 2. API Client Library
- [x] `lib/api.ts` created with:
  - Centralized `apiFetch()` wrapper
  - Token management (getToken, setToken, clearToken)
  - All required functions (see lib/api.ts for full list)
  - Error handling with `ApiError` class
  - Fallback mock data support

### 3. Types
- [x] `lib/types/listing.ts` updated to export API types:
  - `ListingCard` - Card view type
  - `ListingDetail` - Detail page type
  - `PagedListings` - Paginated results

### 4. Homepage Integration
- [x] `app/page.tsx` refactored as async Server Component
  - Calls `getStats()` with fallback to mock
  - Calls `getListings()` for sale/rent tabs
  - Passes `statsCount` to HeroSearch component
- [x] `components/hero-search.tsx` updated
  - Accepts `statsCount` prop
  - Displays real listing count from API

---

## REMAINING TASKS

### Task 2: Listing Pages (/mua-ban, /cho-thue, /tim-kiem)

**File:** `app/mua-ban/page.tsx` (create/update)

```typescript
// Server Component with async fetch
import { getListings } from '@/lib/api';
import { notFound } from 'next/navigation';

interface SearchParams {
  district?: string;
  keyword?: string;
  page?: string;
  sort?: string;
}

export async function generateMetadata({ searchParams }: any) {
  return {
    title: 'Mua bán bất động sán | TDDO',
    description: 'Tìm kiếm và mua bán bất động sán xác thực trên TDDO',
  };
}

export default async function MuaBanPage({ searchParams }: { searchParams: SearchParams }) {
  try {
    const page = parseInt(searchParams.page || '1');
    const listings = await getListings({
      type: 'sale',
      district: searchParams.district,
      keyword: searchParams.keyword,
      sort: searchParams.sort,
      page,
      pageSize: 24,
    });

    return (
      <main>
        {/* Filter Sidebar (Client Component) */}
        <FilterSidebar />
        
        {/* Listings Grid */}
        <ListingGrid items={listings.items} />
        
        {/* Pagination */}
        <Pagination 
          total={listings.total}
          page={listings.page}
          pageSize={listings.pageSize}
        />
      </main>
    );
  } catch (error) {
    notFound();
  }
}
```

**Key Points:**
- Use `generateMetadata()` for SEO
- Pass `searchParams` to API query
- Fallback empty state if no results
- Pagination: `total / pageSize`

---

### Task 3: Detail Page (/tin/[slug])

**File:** `app/tin/[slug]/page.tsx` (update)

```typescript
import { getListing, getSimilar } from '@/lib/api';
import { notFound } from 'next/navigation';
import { ProductSchema, BreadcrumbSchema } from '@/components/json-ld';

export async function generateMetadata({ params }: any) {
  try {
    const listing = await getListing(params.slug);
    return {
      title: listing.title,
      description: listing.descriptionHtml?.slice(0, 160),
      openGraph: {
        images: [listing.coverUrl],
      },
    };
  } catch {
    notFound();
  }
}

export default async function DetailPage({ params }: { params: { slug: string } }) {
  const listing = await getListing(params.slug);
  const similar = await getSimilar(params.slug);

  return (
    <>
      {/* JSON-LD Product Schema */}
      <ProductSchema 
        title={listing.title}
        price={listing.price}
        image={listing.coverUrl}
        description={listing.descriptionHtml}
      />
      
      <main>
        {/* Detail Content */}
        <DetailContent listing={listing} />
        
        {/* Similar Listings Sidebar */}
        <SimilarListings items={similar} />
        
        {/* Contact Form */}
        <ContactForm listingId={listing.id} />
      </main>
    </>
  );
}
```

**Key Points:**
- Dynamic metadata from API
- JSON-LD Product schema for SEO
- `generateMetadata()` required for Next.js 15
- `getSimilar()` optional for sidebar

---

### Task 4: Auth Pages (/dang-nhap, /dang-ky)

**File:** `app/dang-nhap/page.tsx` (update)

```typescript
'use client';

import { login } from '@/lib/api';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';

export default function LoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const returnUrl = searchParams.get('returnUrl') || '/';
  const [error, setError] = useState('');

  async function handleLogin(email: string, password: string) {
    try {
      const result = await login(email, password);
      router.push(returnUrl);
    } catch (err: any) {
      setError(err.message || 'Đăng nhập thất bại');
    }
  }

  return (
    <main>
      <LoginForm onSubmit={handleLogin} error={error} />
    </main>
  );
}
```

**Key Points:**
- Capture `returnUrl` from query params
- Redirect after successful login
- Display `ApiError.message` in Vietnamese
- Token stored automatically by `login()` function

---

### Task 5: Post Listing Wizard (/dang-tin)

**File:** `app/dang-tin/page.tsx` (update)

**Step 3 - Upload & Submit:**

```typescript
'use client';

import { uploadMedia, createListing, generateDescription } from '@/lib/api';
import { useState } from 'react';

export default function DangTinPage() {
  const [mediaIds, setMediaIds] = useState<string[]>([]);

  async function handleUpload(files: File[]) {
    try {
      const { ids } = await uploadMedia(files);
      setMediaIds(ids);
    } catch (err: any) {
      alert(err.message);
    }
  }

  async function handleAIGenerate(title: string, propertyType: string) {
    try {
      const result = await generateDescription({ 
        title, 
        propertyType,
        area: 100,
      });
      return result.description;
    } catch (err: any) {
      alert('AI generation failed: ' + err.message);
    }
  }

  async function handleSubmit(formData: any) {
    try {
      const response = await createListing({
        ...formData,
        mediaIds,
      });
      router.push(`/tin/${response.slug}`);
    } catch (err: any) {
      alert(err.message);
    }
  }

  return <WizardForm onUpload={handleUpload} onSubmit={handleSubmit} onAIGen={handleAIGenerate} />;
}
```

**Key Points:**
- `uploadMedia()` returns array of media IDs
- `generateDescription()` optional AI feature
- `createListing()` submits with mediaIds
- Redirect to new listing detail page after success

---

### Task 6: User Account (/tai-khoan/tin-cua-toi)

**File:** `app/tai-khoan/page.tsx` (update)

```typescript
'use client';

import { getMyListings } from '@/lib/api';
import { useEffect, useState } from 'react';

export default function MyListingsPage() {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    async function load() {
      try {
        const data = await getMyListings();
        setListings(data);
      } catch (err) {
        console.error(err);
      }
    }
    load();
  }, []);

  return (
    <main>
      <ListingsTable 
        items={listings} 
        statuses={['draft', 'pending_review', 'active', 'sold', 'expired']}
      />
    </main>
  );
}
```

**Key Points:**
- Client component with `useEffect`
- Display status badges for each listing
- Optional filter by `status` parameter

---

### Task 7: Header Auth Menu

**File:** `components/auth-menu.tsx` (create)

```typescript
'use client';

import { getMe, logout } from '@/lib/api';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AuthMenu() {
  const [user, setUser] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    async function checkAuth() {
      const me = await getMe();
      setUser(me);
    }
    checkAuth();
  }, []);

  if (!user) {
    return (
      <>
        <a href="/dang-nhap" className="btn-text">Đăng nhập</a>
        <a href="/dang-tin" className="btn-primary">Đăng tin miễn phí</a>
      </>
    );
  }

  return (
    <div className="dropdown">
      <button>{user.name}</button>
      <div className="menu">
        <a href="/tai-khoan">Tài khoản</a>
        <a href="/tai-khoan/tin-cua-toi">Tin của tôi ({listings.length})</a>
        <button onClick={() => {
          logout();
          router.refresh();
        }}>
          Đăng xuất
        </button>
      </div>
    </div>
  );
}
```

**Key Points:**
- Mount: call `getMe()` to check if logged in
- If user exists: show user menu with logout
- If not logged in: show login/register buttons

---

## Error Handling Pattern

```typescript
// All API calls should wrap errors:
try {
  const result = await someApiCall();
  // handle success
} catch (err: any) {
  // API client returns ApiError with .message in Vietnamese
  console.error(err.code, err.status);
  displayError(err.message);
  
  // For missing user auth:
  if (err.status === 401) {
    router.push('/dang-nhap?returnUrl=' + pathname);
  }
}
```

---

## Fallback Mock Data

All API functions are wrapped to fall back to mock data on error:

```typescript
// In components, if API fails, mock data is used automatically:
export async function getListings(filters: ListingFilters = {}): Promise<PagedListings> {
  try {
    return await apiFetch<PagedListings>(`/listings${query}`);
  } catch {
    return { 
      items: mockListings.filter(...), 
      total: 12, 
      page: 1, 
      pageSize: 24 
    };
  }
}
```

---

## Testing Checklist

- [ ] Start BE: `dotnet run --configuration Development`
- [ ] Verify BE running: `curl http://localhost:5151/api/stats`
- [ ] Update `.env.local` with correct API URL
- [ ] Run `pnpm dev` (FE on 3000)
- [ ] Test each page:
  - [ ] Homepage stats count loads
  - [ ] /mua-ban listings load from API
  - [ ] /tin/[slug] detail page loads
  - [ ] /dang-nhap login works, token saved
  - [ ] /dang-ky registration works
  - [ ] /dang-tin file upload works
  - [ ] /tai-khoan shows current user's listings
- [ ] Check `localStorage` for `tddo_token` after login
- [ ] Test logout clears token and redirects to home
- [ ] Test error handling (stop BE, verify graceful fallback to mock)

---

## Build & Deployment

```bash
# Local build test
pnpm build

# Verify no TS errors
pnpm run type-check

# Verify deployment ready
pnpm start
```

---

## Notes

- Backend runs on `localhost:5151` (development)
- API contract in `docs/handoff/api-contract.md` (backend repo)
- All fetch calls go through `lib/api.ts` - DO NOT scatter fetch() calls
- Token stored in `localStorage.tddo_token` (browser only, not SSR)
- Fallback mock data allows offline development
- Next.js 15+ requires `async` Server Components for fetch

---

**Last Updated:** July 5, 2025
**Phase:** D - API Integration
**Status:** In Progress (Homepage + API client complete, awaiting page implementation)
