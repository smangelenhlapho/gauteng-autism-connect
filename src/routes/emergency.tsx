import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHeader } from "@/components/site/PageHeader";
import { emergencyNumbers, clinics } from "@/data/emergency";

export const Route = createFileRoute("/emergency")({
  head: () => ({
    meta: [
      { title: "Emergency Services — Autism Connect Gauteng" },
      {
        name: "description",
        content:
          "Crisis numbers and a directory of public and private hospitals across Gauteng.",
      },
      { property: "og:title", content: "Emergency Services in Gauteng" },
      {
        property: "og:description",
        content:
          "One-tap crisis numbers and nearby hospitals across Johannesburg, Pretoria and Ekurhuleni.",
      },
    ],
  }),
  component: EmergencyPage,
});

function EmergencyPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Emergency · 24/7"
        title={<>Crisis numbers &amp; nearby care</>}
        intro="If a child is in immediate danger, call 10111 (police) or 10177 (ambulance). Save these numbers to your phone now."
      />

      <section className="max-w-7xl mx-auto px-6" aria-labelledby="numbers">
        <h2 id="numbers" className="sr-only">
          Emergency numbers
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-navy/10 border border-navy/10">
          {emergencyNumbers.map((e) => (
            <a
              key={e.label}
              href={`tel:${e.tel}`}
              className="bg-paper p-6 hover:bg-white transition-colors focus:bg-white"
              aria-label={`Call ${e.label} on ${e.number}`}
            >
              <p className="text-[10px] uppercase tracking-widest text-navy/50 font-semibold mb-2">
                {e.label}
              </p>
              <p className="font-display text-2xl font-extrabold text-navy">{e.number}</p>
              <p className="mt-3 text-[10px] uppercase tracking-widest text-teal">
                Tap to call
              </p>
            </a>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-24" aria-labelledby="hospitals">
        <div className="border-b border-navy/10 pb-8 mb-12 flex justify-between items-end gap-6 flex-wrap">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-teal mb-2">
              Hospitals &amp; clinics
            </p>
            <h2
              id="hospitals"
              className="font-display text-3xl md:text-4xl font-extrabold tracking-tight"
            >
              Care across Gauteng
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-x-10 gap-y-12">
          {clinics.map((c) => (
            <article key={c.id} className="border-t border-navy/10 pt-6">
              <div className="flex justify-between items-start gap-3 mb-2">
                <h3 className="font-display font-extrabold text-xl text-navy">
                  {c.name}
                </h3>
                {c.emergencyServices ? (
                  <span className="text-[9px] font-semibold px-2 py-0.5 border border-destructive/40 text-destructive uppercase whitespace-nowrap">
                    24h ER
                  </span>
                ) : null}
              </div>
              <p className="text-xs text-ocean mb-3">
                {c.type} · {c.area}, {c.city}
              </p>
              <p className="text-sm text-navy/75 mb-3 leading-relaxed">{c.address}</p>
              <a
                href={`tel:${c.phone.replace(/\s/g, "")}`}
                className="text-[11px] uppercase tracking-widest font-semibold text-navy border-b border-navy hover:text-teal hover:border-teal pb-0.5"
              >
                Call {c.phone}
              </a>
            </article>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
