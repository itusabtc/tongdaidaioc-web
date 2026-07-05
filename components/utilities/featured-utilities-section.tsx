import Link from 'next/link';
import { Calculator, Compass, Home, Briefcase, Palette, Hammer, FileText, Box } from 'lucide-react';
import type { FeaturedUtility } from '@/lib/api';

interface FeaturedUtilitiesSectionProps {
  utilities: FeaturedUtility[];
}

const iconMap: Record<string, React.ReactNode> = {
  calculator: <Calculator className="w-6 h-6" />,
  'feng-shui': <Compass className="w-6 h-6" />,
  'house-age': <Home className="w-6 h-6" />,
  'office-feng-shui': <Briefcase className="w-6 h-6" />,
  'paint-color': <Palette className="w-6 h-6" />,
  'construction-estimate': <Hammer className="w-6 h-6" />,
  'preliminary-estimate': <FileText className="w-6 h-6" />,
  materials: <Box className="w-6 h-6" />,
};

const bgColors = [
  'bg-blue-50',
  'bg-orange-50',
  'bg-blue-50',
  'bg-orange-50',
  'bg-blue-50',
  'bg-orange-50',
  'bg-blue-50',
  'bg-orange-50',
];

export default function FeaturedUtilitiesSection({ utilities }: FeaturedUtilitiesSectionProps) {
  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Tiện ích nổi bật</h2>
      <div className="border-b border-gray-200 pb-6 mb-6" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {utilities.map((utility, index) => (
          <Link
            key={utility.id}
            href={utility.href}
            className="flex items-center gap-3 bg-white rounded-lg shadow-sm border border-gray-100 p-4 hover:shadow-md hover:border-orange-300 transition group"
          >
            <div className={`${bgColors[index]} w-12 h-12 rounded-lg flex items-center justify-center shrink-0 text-orange-600 group-hover:text-orange-700`}>
              {iconMap[utility.iconKey] ?? iconMap.calculator}
            </div>
            <span className="text-sm font-medium text-gray-800 line-clamp-2 group-hover:text-orange-600 transition">
              {utility.title}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
