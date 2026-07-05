'use client';

import Link from 'next/link';

const locations = {
  'Mua bán': [
    'Quận 1',
    'Quận 2',
    'Quận 7',
    'Quận 8',
    'Quận 9',
    'Bình Tân',
    'Bình Thạnh',
    'Gò Vấp',
    'Thủ Đức',
    'Tân Phú',
  ],
  'Cho thuê': [
    'Quận 1',
    'Quận 2',
    'Quận 7',
    'Quận 8',
    'Quận 9',
    'Bình Tân',
    'Bình Thạnh',
    'Gò Vấp',
    'Thủ Đức',
    'Tân Phú',
  ],
};

export default function LocationBrowseSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">
          Xem nhà đất theo địa điểm
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {Object.entries(locations).map(([category, items]) => (
            <div key={category}>
              <h3 className="font-semibold text-gray-900 mb-4 text-sm">
                {category}
              </h3>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item}>
                    <Link
                      href={`/mua-ban?district=${item.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-sm text-primary hover:text-accent transition"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
