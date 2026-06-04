import type { FormRow } from "@/lib/content-types";

// Always-visible key-forms summary (kielioppi.muodot): 3–4 forms a learner needs
// first, with their meaning. Sits above the collapsible full tables.
export function SummaryForms({ muodot }: { muodot: FormRow[] }) {
  if (!muodot.length) return null;

  return (
    <div className="overflow-x-auto rounded-card border border-line bg-surface shadow-soft">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="border-b border-line text-left text-xs uppercase tracking-wide text-ink-soft">
            <th scope="col" className="px-4 py-2 font-semibold">
              Muoto
            </th>
            <th scope="col" className="px-4 py-2 font-semibold">
              Suomeksi
            </th>
            <th scope="col" className="px-4 py-2 font-semibold">
              Merkitys
            </th>
          </tr>
        </thead>
        <tbody>
          {muodot.map((row) => (
            <tr key={`${row.sija}-${row.muoto}`} className="border-b border-line last:border-0">
              <td className="px-4 py-2 text-ink-soft">{row.sija}</td>
              <td className="px-4 py-2 font-display text-lg font-medium text-accent" lang="fi">
                {row.muoto}
              </td>
              <td className="px-4 py-2 text-ink" lang="en">
                {row.merkitys}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
