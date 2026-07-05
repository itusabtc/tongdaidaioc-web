export function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: 'Tổng Đài Địa Ốc',
    url: 'https://tongdaidiaoc.vn',
    logo: 'https://tongdaidiaoc.vn/logo.png',
    description:
      'Nền tảng bất động sán trực tuyến hàng đầu Việt Nam, cung cấp dịch vụ mua bán, cho thuê bất động sán.',
    sameAs: [
      'https://www.facebook.com/tongdaidiaoc',
      'https://twitter.com/tongdaidiaoc',
      'https://www.linkedin.com/company/tongdaidiaoc',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Support',
      telephone: '+84-1800-234-546',
      email: 'support@tongdaidiaoc.vn',
      hoursAvailable: 'Mo-Fr 08:00-18:00, Sa 08:00-12:00',
    },
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'VN',
      addressLocality: 'Hà Nội',
      streetAddress: 'Số 1, Phố chính',
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
    name: 'Tổng Đài Địa Ốc',
    image: 'https://tongdaidiaoc.vn/og-image.jpg',
    description:
      'Nền tảng bất động sán số 1 Việt Nam với 50,000+ tin đăng xác thực',
    url: 'https://tongdaidiaoc.vn',
    telephone: '+84-1800-234-546',
    priceRange: '100000000-10000000000',
    areaServed: {
      '@type': 'Country',
      name: 'Vietnam',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '08:00',
        closes: '12:00',
      },
    ],
    sameAs: [
      'https://www.facebook.com/tongdaidiaoc',
      'https://twitter.com/tongdaidiaoc',
    ],
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
    name: 'Tìm kiếm bất động sán - Tổng Đài Địa Ốc',
    description: 'Tìm nhà đất, căn hộ, dự án để mua, bán, cho thuê',
    url: 'https://tongdaidiaoc.vn',
    image: 'https://tongdaidiaoc.vn/og-image.jpg',
    priceRange: '100000000-10000000000',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbSchema({
  items,
}: {
  items: { name: string; url: string }[];
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ArticleSchema({
  title,
  description,
  author,
  datePublished,
  dateModified,
  image,
}: {
  title: string;
  description: string;
  author: string;
  datePublished: string;
  dateModified: string;
  image: string;
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description: description,
    image: image,
    datePublished: datePublished,
    dateModified: dateModified,
    author: {
      '@type': 'Person',
      name: author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Tổng Đài Địa Ốc',
      logo: {
        '@type': 'ImageObject',
        url: 'https://tongdaidiaoc.vn/logo.png',
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ProductSchema({
  name,
  description,
  price,
  currency = 'VND',
}: {
  name: string;
  description: string;
  price: number;
  currency?: string;
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: name,
    description: description,
    offers: {
      '@type': 'Offer',
      price: price,
      priceCurrency: currency,
      availability: 'https://schema.org/InStock',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FAQSchema({
  questions,
}: {
  questions: { question: string; answer: string }[];
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: questions.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function WebPageSchema({
  title,
  description,
  url,
  image,
}: {
  title: string;
  description: string;
  url: string;
  image: string;
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description: description,
    url: url,
    image: image,
    isPartOf: {
      '@type': 'WebSite',
      name: 'Tổng Đài Địa Ốc',
      url: 'https://tongdaidiaoc.vn',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
