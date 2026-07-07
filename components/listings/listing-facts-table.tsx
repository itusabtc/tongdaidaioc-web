interface FactItem {
  label: string;
  value: string | number | undefined;
}

interface ListingFactsTableProps {
  facts: FactItem[];
}

export default function ListingFactsTable({ facts }: ListingFactsTableProps) {
  const filteredFacts = facts.filter(f => f.value !== undefined && f.value !== null && f.value !== '');

  if (filteredFacts.length === 0) return null;

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <table className="w-full">
        <tbody>
          {filteredFacts.map((fact, idx) => (
            <tr
              key={`${fact.label}-${idx}`}
              className={`${
                idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'
              } border-b border-gray-200 last:border-b-0 hover:bg-gray-100 transition`}
            >
              <td className="px-6 py-4 text-sm font-medium text-gray-600 w-1/3">
                {fact.label}
              </td>
              <td className="px-6 py-4 text-base font-semibold text-gray-900">
                {fact.value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
