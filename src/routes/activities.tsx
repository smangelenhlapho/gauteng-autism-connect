import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHeader } from "@/components/site/PageHeader";
import { activitiesByAge } from "@/data/activities";

const GROUPS = Object.keys(activitiesByAge);

export const Route = createFileRoute("/activities")({
  head: () => ({
    meta: [
      { title: "Home Activities — Autism Connect Gauteng" },
      {
        name: "description",
        content:
          "Age-appropriate home activities for autistic children — sensory play, life skills, communication and learning.",
      },
      { property: "og:title", content: "Autism Home Activities" },
      {
        property: "og:description",
        content:
          "A library of simple, calming activities to support learning at home for every age.",
      },
    ],
  }),
  component: ActivitiesPage,
});

function ActivitiesPage() {
  const [group, setGroup] = useState<string>(GROUPS[0]);
  const activities = activitiesByAge[group];

  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Learn · At Home"
        title={<>Activities for every age</>}
        intro="Calm, low-prep activities to do at home — grouped by age. Adapt freely to your child’s interests and sensory profile."
      />

      <section className="max-w-7xl mx-auto px-6">
        <div className="flex gap-2 flex-wrap border-y border-navy/10 py-5">
          {GROUPS.map((g) => (
            <button
              key={g}
              onClick={() => setGroup(g)}
              aria-pressed={group === g}
              className={`text-[11px] uppercase tracking-widest font-semibold px-4 py-2 border transition-colors ${
                group === g
                  ? "bg-navy text-white border-navy"
                  : "border-navy/20 text-navy/70 hover:border-teal hover:text-teal"
              }`}
            >
              {g}
            </button>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {activities.map((a) => (
            <article key={a.title} className="border-t border-navy/10 pt-6">
              <p className="font-mono text-[10px] uppercase tracking-widest text-teal mb-2">
                {a.durationMin} min
              </p>
              <h2 className="font-display font-extrabold text-xl text-navy mb-3">
                {a.title}
              </h2>
              <p className="text-sm text-navy/75 leading-relaxed mb-5">{a.description}</p>
              <p className="text-[10px] uppercase tracking-widest text-navy/40 font-semibold mb-2">
                Materials
              </p>
              <ul className="text-sm text-navy/70 list-disc pl-5 space-y-1">
                {a.materials.map((m) => (
                  <li key={m}>{m}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
