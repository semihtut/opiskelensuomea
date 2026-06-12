import { BadgeShelf } from "@/components/BadgeShelf";
import { Roadmap } from "@/components/Roadmap";

export default function RoadmapPage() {
  return (
    <main className="mx-auto max-w-page px-6 py-10">
      <h1 className="font-display text-title font-semibold text-accent">Edistymispolku</h1>
      <p className="mt-1 text-ink-soft">
        Suomi 90 — 13 viikkoa kolmessa vaiheessa. Etene viikko viikolta.
      </p>

      <section className="mt-8">
        <Roadmap />
      </section>

      <section className="mt-12">
        <h2 className="font-display text-2xl">Rozetit</h2>
        <p className="mt-1 text-ink-soft">Avaa rozetteja oppimalla sanoja ja pitämällä putkea yllä.</p>
        <div className="mt-4">
          <BadgeShelf />
        </div>
      </section>
    </main>
  );
}
