/** JSON-LD gộp một thẻ — tránh hydration mismatch khi extension (Kaspersky…) sửa &lt;head&gt; */
export function SiteJsonLd() {
  const graph = [
    {
      '@type': 'Organization',
      name: 'Tổng Đài Địa Ốc',
      url: 'https://tongdaidiaoc.vn',
      description: 'Sân chơi mua bán & cho thuê bất động sán với AI hỗ trợ',
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
    },
    {
      '@type': 'LocalBusiness',
      name: 'Tổng Đài Địa Ốc - Mua bán nhà đất',
      image: 'https://tongdaidiaoc.vn/logo.png',
      description: 'Sân chơi mua bán và cho thuê bất động sán - tìm kiếm, đăng tin miễn phí',
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
      areaServed: { '@type': 'Country', name: 'VN' },
      priceRange: '$$',
    },
    {
      '@type': 'RealEstateListing',
      name: 'Bất động sán mua bán và cho thuê tại Tổng Đài Địa Ốc',
      description: 'Tin đăng bất động sán TP.HCM - đăng tin nhanh, AI hỗ trợ',
      url: 'https://tongdaidiaoc.vn',
      image: 'https://tongdaidiaoc.vn/og-image.jpg',
      priceCurrency: 'VND',
      broker: {
        '@type': 'RealEstateAgent',
        name: 'Tổng Đài Địa Ốc',
        url: 'https://tongdaidiaoc.vn',
      },
      areaServed: 'VN',
    },
  ];

  const payload = {
    '@context': 'https://schema.org',
    '@graph': graph,
  };

  return (
    <script
      type="application/ld+json"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
    />
  );
}

export function FAQSchema({ faqs }: { faqs: { question: string; answer: string }[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };

  return (
    <script
      type="application/ld+json"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/** @deprecated Dùng SiteJsonLd */
export function OrganizationSchema() {
  return <SiteJsonLd />;
}

/** @deprecated Dùng SiteJsonLd */
export function LocalBusinessSchema() {
  return null;
}

/** @deprecated Dùng SiteJsonLd */
export function RealEstateListingSchema() {
  return null;
}
