// Re-export from API client for backward compatibility
export type { ListingCard, ListingDetail, PagedListings } from '@/lib/api';

// Legacy interface for reference (use API types instead)
export interface Listing {
  id: string;
  title: string;
  description: string;
  type: 'nha-rieng' | 'can-ho' | 'dat' | 'du-an' | 'phong' | 'mat-bang';
  transactionType: 'buy' | 'rent';
  price: number;
  priceDisplay: string;
  area: number;
  bedrooms: number;
  bathrooms: number;
  address: string;
  district: string;
  city: string;
  latitude: number;
  longitude: number;
  images: string[];
  featured: boolean;
  verified: boolean;
  postedDate: string;
  views: number;
  saves: number;
  agentName?: string;
  agentPhone?: string;
  agentEmail?: string;
}

export interface District {
  id: string;
  name: string;
  city: string;
  listingCount: number;
  imageUrl?: string;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: 'huong-dan' | 'thi-truong' | 'danh-gia' | 'tips';
  author: string;
  publishedDate: string;
  imageUrl: string;
  views: number;
  featured: boolean;
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  role: 'user' | 'broker' | 'admin';
  verified: boolean;
  createdAt: string;
}

export interface SearchFilter {
  type?: 'nha-rieng' | 'can-ho' | 'dat' | 'du-an' | 'phong' | 'mat-bang';
  transactionType?: 'buy' | 'rent';
  district?: string;
  city?: string;
  minPrice?: number;
  maxPrice?: number;
  minArea?: number;
  maxArea?: number;
  minBedrooms?: number;
  maxBedrooms?: number;
  sort?: 'recent' | 'price-asc' | 'price-desc' | 'popular';
  page?: number;
  limit?: number;
}
