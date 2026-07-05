export interface MortgageArticle {
  id: string;
  title: string;
  href: string;
  imageUrl: string;
  bankName?: string;
}

export const mortgageArticles: MortgageArticle[] = [
  {
    id: 'mortgage-1',
    title: 'Lãi suất vay mua nhà tại VPbank',
    href: '/tin-tuc/lai-suat-vay-vpbank',
    imageUrl: 'https://images.unsplash.com/photo-1601597022615-cd4628902d4a?w=400&h=300&fit=crop',
    bankName: 'VPBank',
  },
  {
    id: 'mortgage-2',
    title: 'Lãi suất vay mua nhà trả góp tại BIDV',
    href: '/tin-tuc/lai-suat-vay-bidv',
    imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop',
    bankName: 'BIDV',
  },
  {
    id: 'mortgage-3',
    title: 'Lãi suất vay mua nhà trả góp tại Vietinbank',
    href: '/tin-tuc/lai-suat-vay-vietinbank',
    imageUrl: 'https://images.unsplash.com/photo-1556740726-c8aad0d5f5d1?w=400&h=300&fit=crop',
    bankName: 'Vietinbank',
  },
  {
    id: 'mortgage-4',
    title: 'Lãi suất vay mua nhà tại Techcombank',
    href: '/tin-tuc/lai-suat-vay-techcombank',
    imageUrl: 'https://images.unsplash.com/photo-1512941691920-25bda36dc643?w=400&h=300&fit=crop',
    bankName: 'Techcombank',
  },
];
