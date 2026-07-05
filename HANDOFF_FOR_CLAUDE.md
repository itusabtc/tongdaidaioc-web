# Rever Real Estate Platform - Handoff for Claude Backend

## Status: Frontend ✅ Complete → Backend ⏳ Ready to Build

---

## Quick Summary

**V0 has delivered a production-ready Next.js 16 frontend.** Your job is to build the backend API that powers it.

### Frontend Stack
- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript + React 19
- **Styling:** Tailwind CSS v4
- **Status:** 100% complete, tested, responsive, deployed

---

## What the Frontend Expects from Backend

1. **REST API endpoints** at `http://localhost:3001` (or production URL)
2. **Database** with Property, Article, User tables
3. **Authentication** via JWT tokens
4. **CORS enabled** for frontend domain
5. **Error handling** with proper HTTP status codes

---

## Frontend Architecture

### React Components (13 total)
```
Header.tsx                    → Navigation, dropdowns
Footer.tsx                    → Contact info, links, social media
HeroSearch.tsx                → Banner, search, tabs, filters
FeaturesSection.tsx           → 4 feature cards
PropertyCard.tsx              → Individual property display
PropertiesSection.tsx         → Property grid with filters
AppDownloadSection.tsx        → Mobile app promotion
RecentlyViewedSection.tsx     → Recently viewed list
NewsSection.tsx               → Featured article + news
LocationBrowseSection.tsx     → Directory + location links
JsonLD.tsx                    → SEO structured data
Page.tsx                      → Homepage
Layout.tsx                    → Master layout
```

### Data & Types
```typescript
// lib/property-data.ts - Mock data (12 buy + 12 rent properties)
export const buyProperties: Property[]
export const rentProperties: Property[]

// Types
interface Property {
  id: number
  title: string
  price: number
  priceDisplay: string
  area: number
  bedrooms: number
  bathrooms: number
  address: string
  imageUrl: string
  isExclusive: boolean
  transactionType: 'Buy' | 'Rent'
}
```

### Frontend Services Ready
```typescript
// Will be created to call your API
fetch('/api/properties', { method: 'GET' })
fetch('/api/properties/search?q=query', { method: 'GET' })
fetch('/api/articles', { method: 'GET' })
```

---

## API Endpoints Needed

### Properties Endpoints
```
GET    /api/properties                    → Get all properties
GET    /api/properties/{id}               → Get single property
GET    /api/properties/search?q={query}   → Search properties
POST   /api/properties                    → Create property (auth required)
PUT    /api/properties/{id}               → Update property (auth required)
DELETE /api/properties/{id}               → Delete property (auth required)
GET    /api/properties/buy                → Get buy listings
GET    /api/properties/rent               → Get rent listings
```

### Articles Endpoints
```
GET    /api/articles                      → Get all articles
GET    /api/articles/{id}                 → Get single article
GET    /api/articles/featured             → Get featured article
POST   /api/articles                      → Create article (auth required)
```

### Authentication Endpoints
```
POST   /api/auth/register                 → User registration
POST   /api/auth/login                    → User login
POST   /api/auth/refresh                  → Refresh JWT token
POST   /api/auth/logout                   → User logout
```

---

## Database Schema Design

### Properties Table
```sql
CREATE TABLE Properties (
    Id INT PRIMARY KEY IDENTITY(1,1),
    Title NVARCHAR(200) NOT NULL,
    Description NVARCHAR(MAX),
    Price DECIMAL(18,2),
    PriceDisplay NVARCHAR(50),
    Area DECIMAL(10,2),
    Bedrooms INT,
    Bathrooms INT,
    Address NVARCHAR(500),
    City NVARCHAR(100),
    District NVARCHAR(100),
    PropertyType NVARCHAR(50),  -- 'Apartment', 'House', 'Land'
    TransactionType NVARCHAR(50), -- 'Buy', 'Rent'
    ImageUrl NVARCHAR(500),
    Images NVARCHAR(MAX),  -- JSON array of URLs
    IsExclusive BIT,
    IsActive BIT,
    ViewCount INT DEFAULT 0,
    CreatedAt DATETIME DEFAULT GETUTCDATE(),
    UpdatedAt DATETIME DEFAULT GETUTCDATE(),
    CreatedBy INT,
    FOREIGN KEY (CreatedBy) REFERENCES Users(Id)
);

CREATE TABLE Articles (
    Id INT PRIMARY KEY IDENTITY(1,1),
    Title NVARCHAR(200) NOT NULL,
    Content NVARCHAR(MAX),
    ThumbnailUrl NVARCHAR(500),
    PublishDate DATETIME,
    IsFeatured BIT,
    ViewCount INT DEFAULT 0,
    CreatedAt DATETIME DEFAULT GETUTCDATE(),
    UpdatedAt DATETIME DEFAULT GETUTCDATE()
);

CREATE TABLE Users (
    Id INT PRIMARY KEY IDENTITY(1,1),
    Email NVARCHAR(100) UNIQUE NOT NULL,
    PasswordHash NVARCHAR(MAX) NOT NULL,
    FullName NVARCHAR(100),
    Phone NVARCHAR(20),
    Role NVARCHAR(20), -- 'Admin', 'Agent', 'User'
    CreatedAt DATETIME DEFAULT GETUTCDATE(),
    IsActive BIT DEFAULT 1
);
```

---

## How Frontend Calls Your API

### Example API Call (TypeScript/React)
```typescript
// In app/page.tsx or a service file
async function fetchProperties() {
  const response = await fetch('/api/properties')
  if (!response.ok) {
    throw new Error('Failed to load properties')
  }
  return await response.json()
}

// Usage in React component
const [properties, setProperties] = useState([])
useEffect(() => {
  fetchProperties().then(data => setProperties(data))
}, [])
```

### Response Format Expected
```json
{
    "id": 1,
    "title": "Căn hộ LUMIÈRE Boulevard",
    "price": 5.2,
    "priceDisplay": "5.2 tỷ",
    "area": 80,
    "bedrooms": 2,
    "bathrooms": 2,
    "address": "Nguyễn Xiển, Long Thạnh Mỹ, Quận 9",
    "imageUrl": "https://...",
    "isExclusive": true,
    "transactionType": "Buy"
}
```

---

## Project Structure

### Frontend (Next.js 16)
```
/
├── app/
│   ├── layout.tsx            ← Master layout with metadata
│   ├── page.tsx              ← Homepage
│   ├── globals.css           ← Tailwind CSS
│   └── sitemap.ts            ← SEO sitemap
├── components/
│   ├── header.tsx            ← Navigation
│   ├── footer.tsx            ← Footer
│   ├── hero-search.tsx       ← Banner & search
│   ├── properties-section.tsx ← Property grid
│   ├── property-card.tsx     ← Property card
│   ├── [13 more components]
│   └── json-ld.tsx           ← SEO schemas
├── lib/
│   ├── property-data.ts      ← Mock data (12+12 properties)
│   └── utils.ts              ← Helpers
├── public/
│   └── [images & assets]
└── package.json              ← Next.js 16, React 19, Tailwind CSS v4
```

### Backend (To be built by you)
```
api-backend/
├── src/
│   ├── routes/
│   │   ├── properties.ts
│   │   ├── articles.ts
│   │   ├── auth.ts
│   │   └── [other routes]
│   ├── controllers/
│   ├── services/
│   ├── database/
│   │   └── schema.sql
│   ├── middleware/
│   │   └── auth.ts
│   └── server.ts
├── package.json
├── .env.example
└── [other backend files]
```

---

## Step-by-Step Implementation

### Phase 1: Database Setup (2-3 hours)
- [ ] Choose database (PostgreSQL, SQL Server, MySQL)
- [ ] Create database and tables from schema above
- [ ] Create seed script with 12 sample properties
- [ ] Set up migration tools (if using ORM)

### Phase 2: API Core (4-5 hours)
- [ ] Setup Node.js/Express or your chosen framework
- [ ] Create PropertiesController with CRUD operations
- [ ] Create ArticlesController
- [ ] Implement search & filtering logic
- [ ] Add CORS middleware

### Phase 3: Authentication (2-3 hours)
- [ ] Implement JWT token system
- [ ] Create AuthController (register, login, refresh)
- [ ] Add authentication middleware
- [ ] Implement password hashing

### Phase 4: Integration & Testing (2-3 hours)
- [ ] Connect frontend to API endpoints
- [ ] Test all CRUD operations
- [ ] Add error handling
- [ ] Create API documentation (Swagger/OpenAPI)

**Total Estimate: 12-16 hours**

---

## Mock Data Included

The frontend currently uses **mock data** for development:
- 12 buy properties (various prices, locations, sizes)
- 12 rent properties (monthly rates)
- Each property has: id, title, price, area, bedrooms, bathrooms, address, image URL, exclusive badge, transaction type

Location: `lib/property-data.ts`

**When API is ready:**
1. Update `lib/property-data.ts` to fetch from API instead of returning mock data
2. Add error handling and loading states
3. Update API base URL to production endpoint

---

## Integration Steps

### Step 1: Replace Mock Data with API
```typescript
// Before (lib/property-data.ts)
export const buyProperties = [
  { id: 1, title: "...", ... },
  // ... 12 more mock properties
]

// After
export async function getBuyProperties() {
  const res = await fetch('/api/properties/buy')
  return await res.json()
}
```

### Step 2: Update Components to Use API
```typescript
// Before (uses hardcoded mock data)
const properties = buyProperties

// After
const [properties, setProperties] = useState([])
useEffect(() => {
  getBuyProperties().then(data => setProperties(data))
}, [])
```

### Step 3: Configure API Base URL
```typescript
// Create .env.local
NEXT_PUBLIC_API_URL=http://localhost:3001
```

### Step 4: Test Integration
1. Run frontend: `npm run dev` (port 3000)
2. Run backend: `npm run dev` (port 3001)
3. Check browser DevTools → Network tab
4. Verify API calls succeed

---

## Key Technologies Recommended

**Backend Framework Options:**
- **Node.js + Express** (JavaScript/TypeScript) ⭐ Most compatible with frontend
- **Node.js + Fastify** (faster alternative)
- **Python + FastAPI** (if you prefer Python)
- **Go** (high performance)

**Database Options:**
- **PostgreSQL** (recommended for Next.js)
- **MySQL 8+**
- **SQL Server**
- **MongoDB** (if NoSQL preferred)

**Authentication:**
- **JWT tokens** (stateless, recommended)
- **Session-based** (alternative)

**Other Tools:**
- **Swagger/OpenAPI** for API documentation
- **Docker** for containerization
- **GitHub Actions** for CI/CD

---

## Sample Data Properties

All 24 sample properties are in `lib/property-data.ts` with realistic data:
- Real Vietnamese addresses (HCM, Districts 1, 2, 7, 9, etc.)
- Realistic prices (5-8 tỷ for buy, 15-30tr/tháng for rent)
- Various building names (Vinhomes, Masteri, Sunrise City, etc.)
- Professional property images (via Unsplash)

---

## API Response Format

### Success Response
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "title": "Căn hộ LUMIÈRE Boulevard",
      "price": 5.2,
      "priceDisplay": "5.2 tỷ",
      "area": 80,
      "bedrooms": 2,
      "bathrooms": 2,
      "address": "Nguyễn Xiển, Long Thạnh Mỹ, Quận 9",
      "imageUrl": "https://...",
      "isExclusive": true,
      "transactionType": "Buy"
    }
  ],
  "count": 14727
}
```

### Error Response
```json
{
  "success": false,
  "error": "Property not found",
  "statusCode": 404,
  "message": "Chi tiết thêm"
}
```

---

## Additional Features (After Core)

Once basic API is working:
1. Image upload/storage
2. User favorites system
3. Property reviews & ratings
4. Advanced filtering (price range, location, bedrooms, etc.)
5. Admin panel for property management
6. Email notifications
7. SMS integration (Twilio)
8. Real-time chat with agents
9. Payment integration (Stripe, Momo)
10. Analytics dashboard

---

## Deployment Checklist

- [ ] Database deployed & backed up
- [ ] API deployed (Railway, Render, Vercel, AWS, GCP, etc.)
- [ ] Environment variables configured (.env.production)
- [ ] CORS configured for frontend domain
- [ ] JWT secret secured & in env vars
- [ ] Error logging enabled
- [ ] API documentation deployed
- [ ] Frontend updated with production API URL
- [ ] End-to-end testing complete
- [ ] Performance optimized (caching, pagination)

---

## Questions to Answer Before Starting

1. **Database choice:** PostgreSQL, MySQL, SQL Server, or MongoDB?
2. **Hosting platform:** Railway, Render, Vercel, AWS, GCP, Azure?
3. **Authentication method:** JWT (recommended) or sessions?
4. **Need admin panel?** Yes/No
5. **Need real-time features?** (WebSockets, notifications)
6. **Payment integration needed?** (Stripe, Momo, Paypal)
7. **File upload needed?** (Images, documents)
8. **Email service?** (SendGrid, Resend, AWS SES)
9. **Rate limiting?** (For API protection)
10. **Caching?** (Redis, Memcached for performance)

---

## Next Steps

1. **Review** this document and the Next.js frontend code
2. **Ask questions** if anything is unclear
3. **Design API** structure and database schema
4. **Setup database** and create tables
5. **Implement API endpoints** one by one
6. **Connect frontend** to API
7. **Test thoroughly** with real data
8. **Deploy** to production

---

## Frontend Code Location

**Repository:** https://github.com/itusabtc/tongdaidaioc-web  
**Branch:** master

**Key files to review:**
- `app/page.tsx` - Homepage structure
- `lib/property-data.ts` - Current mock data
- `components/` - All React components
- `app/layout.tsx` - SEO & metadata
- `package.json` - Dependencies

---

## Support Resources

- **Frontend Code:** All in `components/` and `app/` folders
- **Mock Data:** `lib/property-data.ts`
- **Types & Interfaces:** Defined in components
- **Styling:** Tailwind CSS (see `app/globals.css`)

---

## Good Luck! 🚀

The frontend is complete, polished, and ready to connect to a real backend API. Build the API, integrate, test, and we'll have a professional real estate platform!

---

**Generated:** 2026-07-05  
**Status:** Next.js Frontend Complete ✅  
**Backend:** Ready to Build ⏳  
**Stack:** Next.js 16 + React 19 + Tailwind CSS v4 + Your Backend API
