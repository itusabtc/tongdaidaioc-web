interface Amenity {
  id: string;
  name: string;
  group?: string;
}

interface ListingAmenitiesProps {
  amenities: Amenity[];
}

export default function ListingAmenities({ amenities }: ListingAmenitiesProps) {
  if (!amenities || amenities.length === 0) return null;

  // Group amenities
  const grouped = amenities.reduce<Record<string, Amenity[]>>((acc, item) => {
    const group = item.group || 'Khác';
    if (!acc[group]) acc[group] = [];
    acc[group].push(item);
    return acc;
  }, {});

  const colorMap: Record<string, string> = {
    'Tiện ích': 'bg-blue-50 border-blue-200 text-blue-700',
    'Nội thất': 'bg-purple-50 border-purple-200 text-purple-700',
    'Thiết bị': 'bg-orange-50 border-orange-200 text-orange-700',
    'Khác': 'bg-gray-50 border-gray-200 text-gray-700',
  };

  return (
    <div className="border border-gray-200 rounded-lg p-6">
      <h3 className="text-lg font-bold mb-6 text-gray-900">Tiện ích & Nội thất</h3>
      <div className="space-y-4">
        {Object.entries(grouped).map(([group, items]) => (
          <div key={group}>
            <h4 className="text-sm font-semibold text-gray-600 mb-3">{group}</h4>
            <div className="flex flex-wrap gap-2">
              {items.map((amenity) => (
                <span
                  key={amenity.id}
                  className={`px-3 py-1.5 border rounded-full text-sm font-medium transition ${
                    colorMap[group] || colorMap['Khác']
                  }`}
                >
                  {amenity.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
