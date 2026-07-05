import type { FeaturedUtility } from '@/lib/api';

export type { FeaturedUtility };

export const featuredUtilities: FeaturedUtility[] = [
  { id: 'utility-1', title: 'Tính chi phí vay vốn', href: '/tien-ich/tinh-chi-phi-vay-von', iconKey: 'calculator' },
  { id: 'utility-2', title: 'Xu hướng phong thủy', href: '/tien-ich/xu-huong-phong-thuy', iconKey: 'feng-shui' },
  { id: 'utility-3', title: 'Xem tuổi xây nhà', href: '/tien-ich/xem-tuoi-xay-nha', iconKey: 'house-age' },
  { id: 'utility-4', title: 'Phong thủy văn phòng', href: '/tien-ich/phong-thuy-van-phong', iconKey: 'office-feng-shui' },
  { id: 'utility-5', title: 'Phong thủy màu sơn nhà', href: '/tien-ich/phong-thuy-mau-son-nha', iconKey: 'paint-color' },
  { id: 'utility-6', title: 'Dự toán chi tiết xây nhà', href: '/tien-ich/du-toan-chi-tiet-xay-nha', iconKey: 'construction-estimate' },
  { id: 'utility-7', title: 'Khái toán sơ lược', href: '/tien-ich/khai-toan-so-luoc', iconKey: 'preliminary-estimate' },
  { id: 'utility-8', title: 'Dự trù vật tư xây dựng', href: '/tien-ich/du-tru-vat-tu-xay-dung', iconKey: 'materials' },
];
