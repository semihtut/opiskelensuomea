// Injects one or more JSON-LD objects as a single script. Server-rendered, so the
// structured data is in the static HTML for crawlers and AI answer engines.
export function JsonLd({ data }: { data: object | object[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
