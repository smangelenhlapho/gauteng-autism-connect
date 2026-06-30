import { createFileRoute } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHeader } from "@/components/site/PageHeader";
import { therapists, disciplines } from "@/data/therapists";

export const Route = createFileRoute("/therapists")({
  head: () => ({
    meta: [
      { title: "Find a Therapist — Autism Connect Gauteng" },
      {
        name: "description",
        content:
          "Psychologists, speech therapists, occupational therapists and counsellors supporting autistic children and families in Gauteng.",
      },
      { property: "og:title", content: "Therapists in Gauteng" },
      {
        property: "og:description",
        content:
          "Verified directory of allied health professionals supporting autism families.",
      },
    ],
  }),
  component: TherapistsPage,
});

function TherapistsPage() {
  const [discipline, setDiscipline] = useState<string>("All");

  const filtered = useMemo(
    () =>
      therapists.filter((t) => discipline === "All" || t.discipline === discipline),
    [discipline],
  );

  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Directory · Therapists"
        title={<>Psychologists &amp; allied health</>}
        intro="Find experienced professionals across Gauteng. Always confirm availability and medical aid acceptance before booking."
      />

      <section className="max-w-7xl mx-auto px-6 mb-10">
        <div className="flex gap-2 flex-wrap border-y border-navy/10 py-5">
          <FilterPill
            active={discipline === "All"}
            onClick={() => setDiscipline("All")}
          >
            All
          </FilterPill>
          {disciplines.map((d) => (
            <FilterPill
              key={d}
              active={discipline === d}
              onClick={() => setDiscipline(d)}
            >
              {d}
            </FilterPill>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-14">
          {filtered.map((t) => (
            <article key={t.id} className="border-t border-navy/10 pt-6">
              <p className="font-mono text-[10px] uppercase tracking-widest text-teal mb-2">
                {t.discipline}
              </p>
              <h2 className="font-display font-extrabold text-xl text-navy mb-1">
                {t.name}
              </h2>
              <p className="text-sm text-ocean mb-4">{t.practice}</p>
              <dl className="space-y-2 text-sm text-navy/75">
                <Row label="Address" value={`${t.address}, ${t.city}`} />
                <Row label="Hours" value={t.hours} />
                <Row label="Medical Aids" value={t.medicalAids.join(", ")} />
                <Row label="Languages" value={t.languages.join(", ")} />
              </dl>
              <a
                href={`tel:${t.phone.replace(/\s/g, "")}`}
                className="mt-5 inline-block text-[11px] uppercase tracking-widest font-semibold text-navy border-b border-navy hover:text-teal hover:border-teal pb-0.5"
              >
                Call {t.phone}
              </a>
            </article>
          ))}
        </div>
        <p className="mt-16 text-xs text-navy/50 max-w-2xl">
          An interactive map is coming soon. If you would like to be added or update your
          listing, please use the contact page.
        </p>
      </section>
    </SiteLayout>
  );
}

function FilterPill({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`text-[11px] uppercase tracking-widest font-semibold px-4 py-2 border transition-colors ${
        active
          ? "bg-navy text-white border-navy"
          : "border-navy/20 text-navy/70 hover:border-teal hover:text-teal"
      }`}
    >
      {children}
    </button>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid grid-cols-[100px_1fr] gap-3">
      <dt className="text-[10px] uppercase tracking-widest text-navy/40 pt-0.5">{label}</dt>
      <dd>{value}</dd>
    </div>
  );
}
