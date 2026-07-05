import React from 'react';

export function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Tổng Đài Địa Ốc',
    url: 'https://tongdaidiaoc.vn',
    description: 'Nền tảng bất động sán trực tuyến hàng đầu Việt Nam',
    logo: 'https://tongdaidiaoc.vn/logo.png',
    sameAs: [
      'https://www.facebook.com/tongdaidiaoc',
      'https://www.instagram.com/tongdaidiaoc',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Support',
      telephone: '+84-24-6281-2999',
      email: 'support@tongdaidiaoc.vn',
      availableLanguage: ['vi'],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Tổng Đài Địa Ốc - Mua bán nhà đất',
    image: 'https://tongdaidiaoc.vn/logo.png',
    description: 'Nền tảng mua bán và cho thuê nhà đất xác thực tại Việt Nam',
    url: 'https://tongdaidiaoc.vn',
    telephone: '+84-24-6281-2999',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Hà Nội',
      addressLocality: 'Hà Nội',
      addressRegion: 'Hà Nội',
      postalCode: '100000',
      addressCountry: 'VN',
    },
    areaServed: {
      '@type': 'Country',
      name: 'VN',
    },
    priceRange: '$$',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function RealEstateListingSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateListing',
    name: 'Bất động sán mua bán và cho thuê tại Tổng Đài Địa Ốc',
    description: '12,340+ bất động sán xác thực với thông tin chính xác',
    url: 'https://tongdaidiaoc.vn',
    image: 'https://tongdaidiaoc.vn/og-image.jpg',
    priceCurrency: 'VND',
    broker: {
      '@type': 'RealEstateAgent',
      name: 'Tổng Đài Địa Ốc',
      url: 'https://tongdaidiaoc.vn',
    },
    areaServed: 'VN',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FAQSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Tổng Đài Địa Ốc là gì?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Tổng Đài Địa Ốc là nền tảng bất động sán trực tuyến hàng đầu Việt Nam với 12,340+ tin đăng xác thực.',
        },
      },
      {
        '@type': 'Question',
        name: 'Làm thế nào để tìm nhà đất trên Tổng Đài Địa Ốc?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Bạn có thể sử dụng thanh tìm kiếm trên trang chủ để tìm kiếm theo địa điểm, giá cả, diện tích hoặc loại bất động sán.',
        },
      },
      {
        '@type': 'Question',
        name: 'Có phí sử dụng Tổng Đài Địa Ốc không?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Không, việc tìm kiếm và xem bất động sán trên Tổng Đài Địa Ốc hoàn toàn miễn phí. Chỉ khi bạn muốn đăng tin bán hoặc cho thuê mới có phí.',
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
