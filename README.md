# Tổng Đài Địa Ốc (TDDO) - Frontend

Real estate marketplace built with Next.js 16 and TypeScript.

## Tech Stack

- **Framework**: Next.js 16.2.6 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **State Management**: SWR (client data fetching)
- **Package Manager**: pnpm

## Project Structure

```
app/                          # Next.js App Router
├── page.tsx                  # Homepage
├── mua-ban/                  # Buy/Sell listings
├── cho-thue/                 # Rental listings
├── dang-nhap/                # Login
├── dang-ky/                  # Register
├── dang-tin/                 # Post listing wizard
├── tin/[slug]/               # Listing detail
└── tai-khoan/                # User account

components/
├── auth/                     # Auth components (login/register forms)
├── account/                  # Account page components
├── listings/                 # Listing components (card, tabs)
├── header.tsx                # Navigation header
├── footer.tsx                # Footer
└── ...                       # Other reusable components

lib/
├── api.ts                    # Centralized API client
├── types/                    # TypeScript types
└── mock/                     # Mock data for fallback
```

## Setup

### Prerequisites
- Node.js 18+
- pnpm 8+
- .NET 8 backend running on `localhost:5151`

### Installation

```bash
# Clone and install
git clone https://github.com/itusabtc/tongdaidiaoc-web
cd tongdaidiaoc-web
pnpm install

# Configure environment
cp .env.example .env.local

# Start development server
pnpm dev
```

Visit `http://localhost:3000` in your browser.

## API Integration

All API calls are centralized in `lib/api.ts`. The client automatically:
- Manages JWT tokens in localStorage
- Falls back to mock data when API is unavailable
- Provides consistent error handling in Vietnamese

### Environment Variables

```env
NEXT_PUBLIC_API_BASE=http://localhost:5151/api
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### Starting Backend

```bash
# Navigate to backend directory
cd ../tongdaidiaoc-be

# Start .NET development server
dotnet run --launch-profile http
```

Backend runs on `http://localhost:5151`

## Features

- Browse listings by category (buy/sell, rent)
- Advanced search and filtering
- User authentication (login/register)
- Post new listings with image uploads
- AI-powered listing descriptions
- User account dashboard
- Saved listings (favorites)
- Responsive design (mobile-first)

## Development

### Build
```bash
pnpm build
```

### Type Check
```bash
pnpm type-check
```

### Lint
```bash
pnpm lint
```

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage with featured listings |
| `/mua-ban` | Buy/Sell listings |
| `/cho-thue` | Rental listings |
| `/tim-kiem` | Search results |
| `/tin/[slug]` | Listing detail page |
| `/dang-tin` | Post new listing |
| `/dang-nhap` | Login |
| `/dang-ky` | Register |
| `/tai-khoan` | User account dashboard |

## API Contract

See `PHASE_D_COMPLETE.md` for full API contract and Phase D implementation details.

### Key Endpoints

- `GET /api/stats` - Dashboard statistics
- `GET /api/districts` - Available districts
- `GET /api/listings` - Browse listings with filters
- `GET /api/listings/{id}` - Get listing details
- `POST /api/listings` - Create new listing
- `POST /api/auth/login` - User login
- `POST /api/auth/register` - User registration
- `GET /api/auth/me` - Get current user
- `POST /api/uploads` - Upload images

## Documentation

- `PHASE_D_COMPLETE.md` - API integration completion report
- `API_SETUP_QUICK_START.md` - Quick setup guide
- `.env.example` - Environment variables template

## Git Workflow

- Main branch: `master`
- Feature branches: `feature/*`
- All changes pushed to GitHub: https://github.com/itusabtc/tongdaidiaoc-web

## License

Copyright © 2024 Tổng Đài Địa Ốc. All rights reserved.
