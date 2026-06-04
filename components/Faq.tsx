export interface FaqItem {
  question: string;
  answer: string;
}

// Visible FAQ — mirrors the FAQPage JSON-LD emitted on the page (Phase 5).
// Native <details> accordion: crawlable, keyboard-accessible, zero client JS.
export function Faq({ items, heading = "Usein kysytyt kysymykset" }: { items: FaqItem[]; heading?: string }) {
  if (!items.length) return null;

  return (
    <section aria-label={heading}>
      <h2 className="text-xl text-accent">{heading}</h2>
      <div className="mt-4 flex flex-col gap-2">
        {items.map((item) => (
          <details
            key={item.question}
            className="group rounded-card border border-line bg-surface px-4 py-3 shadow-soft"
          >
            <summary className="cursor-pointer list-none font-semibold text-ink marker:hidden">
              <span className="text-accent transition group-open:hidden">＋ </span>
              <span className="hidden text-accent group-open:inline">− </span>
              {item.question}
            </summary>
            <p className="mt-2 text-ink-soft">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
