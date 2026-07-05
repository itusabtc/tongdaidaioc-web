export interface FeaturedBroker {
  id: string;
  name: string;
  avatarUrl?: string;
  districtName: string;
  listingCount: number;
  rating?: number;
  slug?: string;
}

export const featuredBrokers: FeaturedBroker[] = [
  {
    id: '1',
    name: 'Nguyễn Văn A',
    districtName: 'Quận 7',
    listingCount: 24,
    rating: 4.8,
    slug: 'nguyen-van-a',
  },
  {
    id: '2',
    name: 'Trần Thị B',
    districtName: 'Quận 1',
    listingCount: 18,
    rating: 4.9,
    slug: 'tran-thi-b',
  },
  {
    id: '3',
    name: 'Phạm Văn C',
    districtName: 'Bình Thạnh',
    listingCount: 12,
    rating: 4.7,
    slug: 'pham-van-c',
  },
  {
    id: '4',
    name: 'Võ Thị D',
    districtName: 'Thủ Đức',
    listingCount: 15,
    rating: 4.6,
    slug: 'vo-thi-d',
  },
  {
    id: '5',
    name: 'Đặng Văn E',
    districtName: 'Quận 3',
    listingCount: 21,
    rating: 4.9,
    slug: 'dang-van-e',
  },
  {
    id: '6',
    name: 'Hoàng Thị F',
    districtName: 'Gò Vấp',
    listingCount: 9,
    rating: 4.5,
    slug: 'hoang-thi-f',
  },
];
