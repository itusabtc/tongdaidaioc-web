import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tại sao chọn Rever? | Nền tảng bất động sán hàng đầu Việt Nam',
  description: 'Khám phá vì sao Rever là lựa chọn tốt nhất cho mua bán nhà đất. 177K+ bất động sán xác thực, hỗ trợ 24/7, giá cả minh bạch, công nghệ hiện đại.',
  keywords: 'Rever, bất động sán, tại sao chọn Rever, mua nhà, bán nhà, nhà đất xác thực',
  openGraph: {
    title: 'Tại sao chọn Rever - Nền tảng bất động sán hàng đầu',
    description: '177K+ bất động sán xác thực, hỗ trợ 24/7, giá cả minh bạch',
    url: 'https://rever.vn/vi-sao-chon-rever',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
