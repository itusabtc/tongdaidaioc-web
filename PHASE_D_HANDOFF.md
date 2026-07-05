# Phase D - API Integration Handoff

## Commit: `b396368` - Phase D Start

**Status:** Ready for Backend Integration

---

## What Was Completed

### 1. Centralized API Client (`lib/api.ts`)
A single source of truth for all API calls with:
- **Token Management:** getToken(), setToken(), clearToken()
- **Core Fetch Wrapper:** apiFetch<T>() with auto headers + auth
- **Error Handling:** ApiError class with code, message, status
- **All Required Functions:**
  - Statistics: getStats()
  - Districts: getDistricts()
  - Listings: getListings(), getListing(), getSimilar()
  - Auth: login(), register(), getMe(), logout()
  - Listings Mgmt: createListing(), getMyListings()
  - Media: uploadMedia()
  - AI: generateDescription()
  - Contact: submitLead()

### 2. Environment Configuration
- `.env.example` created with template variables
- Users copy to `.env.local` for local development
- Production URLs documented

### 3. Updated Types
- `lib/types/listing.ts` now exports API types
- ListingCard, ListingDetail, PagedListings
- Full backward compatibility maintained

### 4. Homepage Integration
- **app/page.tsx** refactored as async Server Component
- Calls getStats() with automatic fallback to mock
- Calls getListings() for home feed
- Passes real data to HeroSearch component
- Fallback ensures dev works offline

### 5. HeroSearch Component Update
- Now accepts statsCount prop
- Displays "Hiện có X nhà đất xác thực" from API
- Falls back to "12,340" if API unavailable

### 6. Comprehensive Implementation Guide
- **PHASE_D_API_INTEGRATION_GUIDE.md** created with:
  - Template code for each remaining page
  - Error handling patterns
  - Testing checklist
  - Deployment steps

---

## Files Changed

```
.env.example (NEW)                          - Template env vars
lib/api.ts (NEW)                            - 296 lines, API client
lib/types/listing.ts (UPDATED)              - Added API type exports
app/page.tsx (UPDATED)                      - Made async, added API calls
components/hero-search.tsx (UPDATED)        - Added statsCount prop
PHASE_D_API_INTEGRATION_GUIDE.md (NEW)      - 463 lines, detailed guide
```

---

## What's Next (For Claude/Cursor)

Follow `PHASE_D_API_INTEGRATION_GUIDE.md` to complete:

### Pages to Implement
1. **Listing Pages** (`/mua-ban`, `/cho-thue`)
   - Server Component with getListings()
   - searchParams: district, keyword, page, sort
   - Pagination from total/pageSize

2. **Detail Page** (`/tin/[slug]`)
   - Dynamic metadata from API
   - JSON-LD Product schema
   - getSimilar() for sidebar
   - ContactForm with submitLead()

3. **Auth Pages** (`/dang-nhap`, `/dang-ky`)
   - Login: email, password → token saved
   - Register: accountType, name, email, password
   - returnUrl query param support
   - Error display from ApiError.message

4. **Post Wizard** (`/dang-tin`)
   - Step 3: uploadMedia() → mediaIds
   - Optional: generateDescription() AI button
   - Submit: createListing() with mediaIds
   - Redirect to new listing detail

5. **Account Page** (`/tai-khoan/tin-cua-toi`)
   - Client component with useEffect
   - getMyListings() load
   - Status badges: draft, pending, active, etc.

6. **Header Auth Menu**
   - Check getMe() on mount
   - Show user menu if logged in
   - Show login/register CTA if not
   - Logout clears token + router.refresh()

---

## Testing Prerequisites

Before implementing, ensure:

1. **Backend Running**
   ```bash
   cd TongDaiDiaOc/
   dotnet run --configuration Development
   # Should be on http://localhost:5151
   # Verify: curl http://localhost:5151/api/stats
   ```

2. **Environment Configured**
   ```bash
   cd tongdaidaioc-web
   cp .env.example .env.local
   # Verify NEXT_PUBLIC_API_BASE=http://localhost:5151/api
   ```

3. **Local Frontend**
   ```bash
   pnpm install
   pnpm dev
   # Should be on http://localhost:3000
   ```

---

## Development Flow

1. **Write async Server Components** for listing/detail pages
2. **Use generateMetadata()** for SEO on dynamic routes
3. **Wrap API calls in try/catch** → display ApiError.message
4. **Test online** with BE running
5. **Test offline** → should use mock data fallback
6. **Check localStorage** for `tddo_token` after login
7. **Build test:** `pnpm build` should pass

---

## Key Patterns

### Server Component with Fetch
```typescript
async function HomePage() {
  try {
    const data = await getListings({ type: 'sale', pageSize: 8 });
    return <ListingGrid items={data.items} />;
  } catch (error) {
    return <FallbackComponent />;
  }
}
```

### Client Component with Auth
```typescript
useEffect(() => {
  const user = await getMe();
  if (!user) {
    router.push('/dang-nhap?returnUrl=' + pathname);
  }
}, []);
```

### Error Display
```typescript
try {
  await login(email, password);
} catch (err: any) {
  setError(err.message); // Vietnamese error from API
}
```

---

## API Endpoint Reference

```
GET  /api/stats                        → { activeListingCount: 3 }
GET  /api/districts                    → District[]
GET  /api/listings?type=sale           → PagedListings
GET  /api/listings/{slug}              → ListingDetail
GET  /api/listings/{slug}/similar      → ListingCard[]
POST /api/auth/login                   → { token, user? }
POST /api/auth/register                → { token, user? }
GET  /api/auth/me                      → User | 401
POST /api/listings                     → { id, slug }
GET  /api/me/listings                  → ListingCard[]
POST /api/media/upload                 → { ids: string[] }
POST /api/ai/generate-description      → { description }
POST /api/listings/{id}/lead           → { id }
```

---

## Deployment Checklist

- [ ] All pages fetch from API (not hardcoded)
- [ ] Error handling shows user-friendly messages
- [ ] Fallback mock data works offline
- [ ] Token stored in localStorage, sent in Authorization header
- [ ] Logout clears token and redirects
- [ ] Images from API work with CORS config
- [ ] pnpm build passes with 0 errors
- [ ] pnpm type-check passes
- [ ] Test 3 accounts: logged out, user, broker

---

## Notes

1. **DO NOT scatter fetch() calls** - all go through `lib/api.ts`
2. **DO NOT hardcode localhost:5151** - use `.env.local`
3. **DO NOT skip error handling** - show err.message in Vietnamese
4. **DO implement fallback mocks** - for offline development
5. **DO use Server Components** - for homepage/listing/detail pages
6. **DO use Client Components** - for forms, auth menu, filters

---

## Commit History

- `4f02839` - Phase C Complete: Frontend Polish & TDDO Rebrand (11 files, 20 fixes)
- `da99762` - Added 13 new pages & SEO schemas
- `b396368` - Phase D Start: API Client & Homepage Integration (6 files, 811 lines)

---

## Contact / Questions

Refer to:
- `.env.example` for configuration
- `lib/api.ts` for all available functions
- `PHASE_D_API_INTEGRATION_GUIDE.md` for detailed examples
- Backend repo `/docs/handoff/api-contract.md` for API specification

---

**Status:** Ready for Phase D Implementation  
**Deployed:** No (local dev only)  
**Homepage:** ✅ Working with mock fallback  
**Remaining Pages:** 6 (follow guide)  
**Build Status:** ✅ Passing  
**Type Check:** ✅ Passing  

Next: Implement listing pages, auth, forms per PHASE_D_API_INTEGRATION_GUIDE.md
