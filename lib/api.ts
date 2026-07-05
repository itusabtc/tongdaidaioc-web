/* Centralized API Client */

const BASE = process.env.NEXT_PUBLIC_API_BASE ?? 'http://localhost:5151/api';

export class ApiError extends Error {
  constructor(public code: string, message: string, public status: number) {
    super(message);
  }
}

// Token management
function getToken(): string | null {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem('tddo_token');
}

function setToken(token: string): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem('tddo_token', token);
}

function clearToken(): void {
  if (typeof window === 'undefined') return;
  localStorage.removeItem('tddo_token');
}

// Core fetch wrapper
async function apiFetch<T>(path: string, init?: RequestInit): Promise<T> {
  const headers = new Headers(init?.headers);
  
  if (!headers.has('Content-Type') && init?.body && !(init.body instanceof FormData)) {
    headers.set('Content-Type', 'application/json');
  }
  
  const token = getToken();
  if (token) {
    headers.set('Authorization', `Bearer ${token}`);
  }

  const res = await fetch(`${BASE}${path}`, { ...init, headers });
  
  if (!res.ok) {
    const err = await res.json().catch(() => null);
    throw new ApiError(
      err?.error?.code ?? 'unknown',
      err?.error?.message ?? res.statusText,
      res.status
    );
  }
  
  if (res.status === 204) return undefined as T;
  return res.json();
}

// Statistics
export interface Stats {
  activeListingCount: number;
}

export async function getStats(): Promise<Stats> {
  return apiFetch<Stats>('/stats');
}

// Districts
export interface District {
  id: string;
  name: string;
  slug?: string;
}

export async function getDistricts(): Promise<District[]> {
  return apiFetch<District[]>('/districts');
}

// Listings
export interface ListingCard {
  id: string;
  code?: string;
  slug: string;
  title: string;
  listingType: 'sale' | 'rent';
  sourceType: 'chinhchu' | 'moigioi';
  propertyType: string;
  propertyTypeName: string;
  price: number;
  priceText: string;
  area: number;
  bedrooms?: number;
  districtName?: string;
  coverUrl?: string;
  isOwnerVerified?: boolean;
  publishedAt?: string;
}

export interface ListingDetail extends ListingCard {
  descriptionHtml?: string;
  priceUnit: string;
  rentPeriod?: string | null;
  bathrooms?: number;
  addressText?: string;
  wardName?: string;
  contactName?: string;
  contactPhone?: string;
  images: string[];
  amenities: { id: string; name: string; group?: string }[];
  latitude?: number;
  longitude?: number;
}

export interface PagedListings {
  items: ListingCard[];
  total: number;
  page: number;
  pageSize: number;
}

export interface ListingFilters {
  type?: 'sale' | 'rent';
  kw?: string;
  district?: string;
  sort?: string;
  page?: number;
  pageSize?: number;
}

export async function getListings(filters: ListingFilters = {}): Promise<PagedListings> {
  const params = new URLSearchParams();
  if (filters.type) params.append('type', filters.type);
  if (filters.kw) params.append('kw', filters.kw);
  if (filters.district) params.append('district', filters.district);
  if (filters.sort) params.append('sort', filters.sort);
  if (filters.page) params.append('page', String(filters.page));
  if (filters.pageSize) params.append('pageSize', String(filters.pageSize));

  const query = params.toString() ? `?${params.toString()}` : '';
  return apiFetch<PagedListings>(`/listings${query}`);
}

export async function getListing(slug: string): Promise<ListingDetail> {
  return apiFetch<ListingDetail>(`/listings/${slug}`);
}

export async function getSimilar(slug: string, take?: number): Promise<ListingCard[]> {
  const query = take ? `?take=${take}` : '';
  return apiFetch<ListingCard[]>(`/listings/${slug}/similar${query}`);
}

// Authentication
export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  user?: {
    id: string;
    email: string;
    name?: string;
  };
}

export async function login(email: string, password: string): Promise<LoginResponse> {
  const result = await apiFetch<LoginResponse>('/auth/login', {
    method: 'POST',
    body: JSON.stringify({ email, password }),
  });
  if (result.token) {
    setToken(result.token);
  }
  return result;
}

export interface RegisterRequest {
  email: string;
  password: string;
  name?: string;
  accountType?: 'individual' | 'company';
}

export async function register(data: RegisterRequest): Promise<LoginResponse> {
  const result = await apiFetch<LoginResponse>('/auth/register', {
    method: 'POST',
    body: JSON.stringify(data),
  });
  if (result.token) {
    setToken(result.token);
  }
  return result;
}

export interface User {
  id: string;
  email: string;
  name?: string;
  phone?: string;
}

export async function getMe(): Promise<User | null> {
  try {
    return await apiFetch<User>('/auth/me');
  } catch {
    return null;
  }
}

export function logout(): void {
  clearToken();
}

// Listings management
export interface CreateListingRequest {
  title: string;
  propertyType: string;
  listingType: 'sale' | 'rent';
  sourceType: 'chinhchu' | 'moigioi';
  price: number;
  area: number;
  bedrooms?: number;
  bathrooms?: number;
  districtId?: string;
  description?: string;
  mediaIds?: string[];
}

export interface CreateListingResponse {
  id: string;
  slug: string;
}

export async function createListing(data: CreateListingRequest): Promise<CreateListingResponse> {
  return apiFetch<CreateListingResponse>('/listings', {
    method: 'POST',
    body: JSON.stringify(data),
  });
}

export interface MyListing extends ListingCard {
  status: string;
}

export async function getMyListings(status?: string): Promise<MyListing[]> {
  const query = status ? `?status=${status}` : '';
  return apiFetch<MyListing[]>(`/me/listings${query}`);
}

// Media Upload
export async function uploadMedia(files: File[]): Promise<{ ids: string[] }> {
  const formData = new FormData();
  files.forEach((file) => formData.append('files', file));

  const res = await fetch(`${BASE}/media/upload`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
    body: formData,
  });

  if (!res.ok) {
    const err = await res.json().catch(() => null);
    throw new ApiError(
      err?.error?.code ?? 'upload_failed',
      err?.error?.message ?? res.statusText,
      res.status
    );
  }

  return res.json();
}

// AI Generate Description
export interface GenerateDescriptionRequest {
  title: string;
  propertyType: string;
  area: number;
  bedrooms?: number;
  amenities?: string[];
}

export async function generateDescription(data: GenerateDescriptionRequest): Promise<{ description: string }> {
  return apiFetch<{ description: string }>('/ai/generate-description', {
    method: 'POST',
    body: JSON.stringify(data),
  });
}

// Submit Lead
export interface SubmitLeadRequest {
  name: string;
  email: string;
  phone: string;
  message?: string;
}

export async function submitLead(listingId: string, data: SubmitLeadRequest): Promise<{ id: string }> {
  return apiFetch<{ id: string }>(`/listings/${listingId}/lead`, {
    method: 'POST',
    body: JSON.stringify(data),
  });
}

// Homepage content — tiện ích + vay mua nhà
export interface FeaturedUtility {
  id: string;
  title: string;
  slug?: string;
  iconKey: string;
  href: string;
}

export interface MortgageArticle {
  id: string;
  title: string;
  slug?: string;
  imageUrl: string;
  bankName?: string;
  href: string;
}

export interface SiteContentDetail {
  id: string;
  title: string;
  slug: string;
  contentType: 'utility' | 'mortgage' | string;
  iconKey?: string;
  imageUrl?: string;
  bankName?: string;
  href?: string;
  bodyHtml?: string;
}

export async function getFeaturedUtilities(): Promise<FeaturedUtility[]> {
  return apiFetch<FeaturedUtility[]>('/home/featured-utilities');
}

export async function getMortgageArticles(): Promise<MortgageArticle[]> {
  return apiFetch<MortgageArticle[]>('/home/mortgage-articles');
}

export async function getContent(slug: string): Promise<SiteContentDetail> {
  return apiFetch<SiteContentDetail>(`/content/${slug}`);
}
