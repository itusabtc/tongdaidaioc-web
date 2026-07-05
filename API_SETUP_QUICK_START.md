# TDDO API Integration - Quick Start (2 minutes)

## Step 1: Configure Environment

```bash
# Copy template to local config
cp .env.example .env.local

# Edit .env.local (usually already correct):
# NEXT_PUBLIC_API_BASE=http://localhost:5151/api
# NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## Step 2: Start Backend

```bash
# In separate terminal, go to backend folder
cd ../TongDaiDiaOc

# Run backend on port 5151
dotnet run --configuration Development

# Verify it's running:
curl http://localhost:5151/api/stats
# Should return: {"activeListingCount": 3} (or similar)
```

## Step 3: Start Frontend

```bash
# Back in tongdaidaioc-web folder
cd ../tongdaidaioc-web

pnpm install  # if needed
pnpm dev

# Open http://localhost:3000
# Homepage should show real listing count from API
```

## Step 4: Test API Integration

- **Homepage:** Should display "Hiện có [N] nhà đất xác thực" from API
- **Check localStorage:** Open DevTools → Application → Local Storage
  - Should see `tddo_token` after logging in
- **Network tab:** Check API calls being made to http://localhost:5151/api/*

## Step 5: Test Login

1. Click "Đăng nhập" in header
2. Use any email/password (creates test account)
3. Check localStorage for `tddo_token`
4. Should redirect to home or returnUrl

## Step 6: Test Upload & Listing

1. Click "Đăng tin miễn phí" or "/dang-tin"
2. Fill form and upload images
3. Should call `/api/media/upload` 
4. Submit should call `/api/listings` and create new listing
5. Redirect to detail page showing the listing

---

## Troubleshooting

### "Connection Refused" Error
- Check if backend is running: `curl http://localhost:5151/api/stats`
- Confirm API port in `.env.local` matches backend port
- Backend must be on 5151, not 5000

### "Cannot find module 'tddo_token'"
- Not an error, frontend checks `localStorage` for token
- Expected behavior on first visit

### "API returns mock data"
- Backend is down or unreachable
- Check `pnpm dev` console for fetch errors
- Mock fallback is intentional for offline dev

### "Token not saved after login"
- Check DevTools Network tab → login endpoint
- Verify response includes `token` field
- Token saved to `localStorage.tddo_token` automatically

---

## What's Already Working

✅ **Homepage**
- Loads real stats count from `/api/stats`
- Fallback to mock if API down
- Hero search fully functional

✅ **API Client Library** (`lib/api.ts`)
- All functions ready to use
- Automatic token management
- Error handling with Vietnamese messages

✅ **Environment Setup**
- `.env.example` template provided
- Ready for local + production URLs

---

## What Needs Implementation

Follow `PHASE_D_API_INTEGRATION_GUIDE.md` for:

1. `/mua-ban` - Listing search page
2. `/cho-thue` - Rental listings
3. `/tin/[slug]` - Detail page  
4. `/dang-nhap` - Login form
5. `/dang-ky` - Register form
6. `/dang-tin` - Post listing wizard
7. `/tai-khoan` - User account & my listings
8. Header auth menu

Each page has template code in the guide.

---

## Available API Functions

```typescript
// Statistics
getStats()  // → { activeListingCount: number }

// Browse
getDistricts()                      // → District[]
getListings(filters)                // → PagedListings
getListing(slug)                    // → ListingDetail
getSimilar(slug)                    // → ListingCard[]

// Auth
login(email, password)              // → { token, user? }
register(data)                      // → { token, user? }
getMe()                             // → User | null
logout()                            // clears token

// Create & Manage
createListing(data)                 // → { id, slug }
getMyListings(status?)              // → ListingCard[]
uploadMedia(files)                  // → { ids: string[] }
generateDescription(data)           // → { description }
submitLead(listingId, data)        // → { id }
```

All in `lib/api.ts` - import and use directly.

---

## Next Steps

1. **Verify everything works** - follow steps 1-6 above
2. **Pick one page** to implement first (e.g., `/mua-ban`)
3. **Follow template** in `PHASE_D_API_INTEGRATION_GUIDE.md`
4. **Test online & offline** 
5. **Build & deploy** when ready: `pnpm build && pnpm start`

---

## Key Differences from Mock Data

| Item | Mock | API |
|------|------|-----|
| Stats Count | "12,340" (hardcoded) | From `/api/stats` |
| Listings | 12 cards in `lib/mock/listings.ts` | Dynamic from `/api/listings` |
| User Auth | Client-side only | JWT token stored locally |
| Search | None | Full filter support |
| Uploads | File inputs (no upload) | Real `/api/media/upload` |

---

**Time to Setup:** ~2 minutes  
**Ready to Code:** Yes  
**Need More Help:** See `PHASE_D_API_INTEGRATION_GUIDE.md`
