'use client';

import Link from 'next/link';

interface LocationLink {
  label: string;
  href: string;
}

interface LocationLinksProps {
  title?: string;
}

const SALE_LOCATIONS: LocationLink[] = [
  { label: 'Quận 1', href: '/mua-ban?district=quan-1' },
  { label: 'Quận 2', href: '/mua-ban?district=quan-2' },
  { label: 'Quận 7', href: '/mua-ban?district=quan-7' },
  { label: 'Quận 8', href: '/mua-ban?district=quan-8' },
  { label: 'Quận 9', href: '/mua-ban?district=quan-9' },
  { label: 'Bình Tân', href: '/mua-ban?district=quan-binh-tan' },
  { label: 'Bình Thạnh', href: '/mua-ban?district=quan-binh-thanh' },
  { label: 'Gò Vấp', href: '/mua-ban?district=quan-go-vap' },
  { label: 'Thủ Đức', href: '/mua-ban?district=thanh-pho-thu-duc' },
  { label: 'Tân Phú', href: '/mua-ban?district=quan-tan-phu' },
];

const RENT_LOCATIONS: LocationLink[] = [
  { label: 'Quận 1', href: '/cho-thue?district=quan-1' },
  { label: 'Quận 2', href: '/cho-thue?district=quan-2' },
  { label: 'Quận 7', href: '/cho-thue?district=quan-7' },
  { label: 'Quận 8', href: '/cho-thue?district=quan-8' },
  { label: 'Quận 9', href: '/cho-thue?district=quan-9' },
  { label: 'Bình Tân', href: '/cho-thue?district=quan-binh-tan' },
  { label: 'Bình Thạnh', href: '/cho-thue?district=quan-binh-thanh' },
  { label: 'Gò Vấp', href: '/cho-thue?district=quan-go-vap' },
  { label: 'Thủ Đức', href: '/cho-thue?district=thanh-pho-thu-duc' },
  { label: 'Tân Phú', href: '/cho-thue?district=quan-tan-phu' },
];

export default function LocationLinksSection({ title = 'Xem nhà đất theo địa điểm' }: LocationLinksProps) {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 md:mb-12">
          {title}
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Mua bán column */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Mua bán</h3>
            <div className="grid grid-cols-2 gap-3">
              {SALE_LOCATIONS.map((location) => (
                <Link
                  key={location.href}
                  href={location.href}
                  className="text-primary hover:text-primary-dark transition-colors py-2"
                >
                  {location.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Cho thuê column */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Cho thuê</h3>
            <div className="grid grid-cols-2 gap-3">
              {RENT_LOCATIONS.map((location) => (
                <Link
                  key={location.href}
                  href={location.href}
                  className="text-primary hover:text-primary-dark transition-colors py-2"
                >
                  {location.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
