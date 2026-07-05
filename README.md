# Rever Real Estate Platform UI

A modern, responsive real estate marketplace UI inspired by Rever.vn, built with React, Next.js, Tailwind CSS, and Lucide React icons.

## Features

### 1. **Fixed Header Navigation**
- Logo with brand identity
- Desktop and mobile-responsive navigation menu
- "Đăng tin" (Post Listing) button in signature red
- "Đăng nhập" (Login) link
- Mobile hamburger menu for smaller screens

### 2. **Hero Section with Search**
- Full-width background image with dark overlay
- Centered headline: "Lựa chọn căn nhà ưng ý của bạn"
- Tab-based search: "Mua nhà" (Buy) and "Thuê nhà" (Rent)
- Location input with icon
- Quick filter buttons for property type, price range, and area
- Live property count display (177,207)

### 3. **Property Listing Grid**
- Responsive 4-column grid (responsive: 1 col on mobile, 2 on tablet, 4 on desktop)
- Each property card includes:
  - High-quality image with hover zoom effect
  - "Độc quyền" (Exclusive) badge in red
  - Discount badge (e.g., "-7%")
  - Price in prominent red text
  - Property title (truncated to 2 lines)
  - Bed/bath icons with counts
  - Area information
  - Location address with icon
  - Smooth hover effect with scale and shadow enhancement
  - "Xem chi tiết" (View Details) overlay on hover

### 4. **Two Property Sections**
- **"Nhà đất bán mới nhất"** (Latest Properties for Sale): 14,727 listings
- **"Nhà đất cho thuê mới nhất"** (Latest Properties for Rent): 3,518 listings
- Each section has filterable tabs by project/location
- "Xem thêm bài viết" (View More) link

### 5. **Call-to-Action Footer**
- Gradient rose background
- Headline: "Có căn hộ hoặc đất cần bán?"
- Prominent "Đăng tin ngay" (Post Now) button

## Design System

### Color Palette
- **Primary (Rose/Red)**: `#D32F2F` - Rever's signature color used for buttons, badges, and accents
- **Text Primary**: `#1A1A1A` - Dark gray for main content
- **Text Secondary**: `#666666` - Medium gray for secondary information
- **Background**: `#FFFFFF` - Clean white background
- **Border**: `#E8E8E8` - Light gray for dividers

### Typography
- **Headings**: Bold, modern sans-serif (Segoe UI)
- **Body**: Medium weight for readability
- **Accent**: Semibold for buttons and badges

### Spacing
- Tailwind's standard spacing scale
- Max-width container: 7xl for optimal content width
- Responsive padding and gaps

### Responsive Breakpoints
- **Mobile**: Single column layout, full-width search
- **Tablet (md)**: 2-column grid, optimized navigation
- **Desktop (lg)**: 4-column grid, full navigation bar

## Components

### `Header` (`components/header.tsx`)
Sticky navigation header with logo, menu links, and action buttons.

### `HeroSearch` (`components/hero-search.tsx`)
Hero section with background image, search interface, and quick filters.

### `PropertyCard` (`components/property-card.tsx`)
Individual property card with image, price, details, and hover interactions.

### `PropertiesSection` (`components/properties-section.tsx`)
Reusable section for displaying property grids with filters and "View More" link.

## Data Structure

Properties are defined in `lib/property-data.ts` with the following fields:
- `id`: Unique identifier
- `image`: Property image URL
- `price`: Price in VND (e.g., "5.5 tỷ", "13 tr/tháng")
- `area`: Square meters (e.g., "70.68 m²")
- `bedrooms`: Number of bedrooms
- `bathrooms`: Number of bathrooms
- `address`: Full address
- `title`: Property title/ID
- `isExclusive`: Boolean for exclusive badge
- `discount`: Optional discount percentage

## Interactions

### Hover Effects
- **Property Cards**: Scale up slightly, shadow intensifies, image zooms
- **Buttons**: Color transitions, shadow changes
- **Links**: Color change from gray to red

### Tab Switching
- "Mua nhà" / "Thuê nhà" tabs update the search interface
- Active tab is underlined in red

### Mobile Menu
- Hamburger menu opens/closes drawer with all navigation items
- Touch-friendly spacing

## Responsive Behavior

- **Mobile (< 768px)**: Single column layout, stacked header, full-width search
- **Tablet (768px - 1024px)**: 2-column grid, optimized spacing
- **Desktop (> 1024px)**: Full 4-column grid, complete navigation bar

## Installation & Running

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

Visit `http://localhost:3000` to see the application.

## Technology Stack

- **Framework**: Next.js 16 (React 19)
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **Language**: TypeScript
- **Package Manager**: pnpm

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Responsive design for all screen sizes

## Future Enhancements

- Add property filtering/search functionality
- Implement property detail pages
- Add favorites/wishlist feature
- Integration with real property data API
- User authentication and dashboard
- Advanced search filters
- Map view for properties
