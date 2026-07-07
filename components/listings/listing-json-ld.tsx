interface ListingJsonLdProps {
  title: string;
  description?: string;
  images: string[];
  price: number;
  area?: number;
  bedrooms?: number;
  districtName?: string;
  addressText?: string;
  publishedAt?: string;
  priceText: string;
  contactName?: string;
  contactPhone?: string;
}

export default function ListingJsonLd({
  title,
  description,
  images,
  price,
  area,
  bedrooms,
  districtName,
  addressText,
  publishedAt,
  priceText,
  contactName,
  contactPhone,
}: ListingJsonLdProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateListing',
    name: title,
    description: description || title,
    image: images,
    price: price,
    priceCurrency: 'VND',
    priceValidUntil: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    floorSize: {
      '@type': 'QuantitativeValue',
      value: area,
      unitCode: 'MTK',
    },
    numberOfRooms: bedrooms,
    address: {
      '@type': 'PostalAddress',
      addressLocality: districtName,
      streetAddress: addressText,
      addressRegion: 'TP.HCM',
      addressCountry: 'VN',
    },
    datePublished: publishedAt || new Date().toISOString(),
    ...(contactName && {
      realEstateAgent: {
        '@type': 'RealEstateAgent',
        name: contactName,
        ...(contactPhone && { telephone: contactPhone }),
      },
    }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      suppressHydrationWarning
    />
  );
}
