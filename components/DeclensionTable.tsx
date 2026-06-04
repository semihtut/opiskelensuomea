import type { Section } from "@/lib/content-types";

// Full conjugation/declension tables, collapsed by default behind a native
// <details> ("show all forms") — no client JS, and the content stays in the DOM
// so it is crawlable. Tables scroll horizontally on mobile, never squash.
export function DeclensionTable({
  sections,
  summary = "Näytä kaikki muodot",
}: {
  sections: Section[];
  summary?: string;
}) {
  if (!sections.length) return null;

  return (
    <details className="group rounded-card border border-line bg-surface shadow-soft">
      <summary className="cursor-pointer list-none rounded-card px-5 py-4 font-semibold text-ink marker:hidden">
        <span className="text-accent transition group-open:hidden">＋ </span>
        <span className="hidden text-accent group-open:inline">− </span>
        {summary}
      </summary>
      <div className="grid gap-6 px-5 pb-5 sm:grid-cols-2">
        {sections.map((section) => (
          <section key={section.title}>
            <h3 className="mb-2 text-sm font-semibold text-ink-soft">{section.title}</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <tbody>
                  {section.rows.map((row) => (
                    <tr key={row.label} className="border-b border-line last:border-0">
                      <th
                        scope="row"
                        className="py-1.5 pr-4 text-left font-normal text-ink-soft"
                      >
                        {row.label}
                      </th>
                      <td className="py-1.5 text-right font-medium text-accent" lang="fi">
                        {row.form}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        ))}
      </div>
    </details>
  );
}
