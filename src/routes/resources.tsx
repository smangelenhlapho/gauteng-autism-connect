import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHeader } from "@/components/site/PageHeader";
import { topics, faqs } from "@/data/resources";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Autism Resource Centre — Autism Connect Gauteng" },
      {
        name: "description",
        content:
          "Plain-language resources about autism: signs, diagnosis, communication strategies, inclusive education, and government grants in South Africa.",
      },
      { property: "og:title", content: "Autism Resource Centre" },
      {
        property: "og:description",
        content:
          "Trusted, plain-language guides for South African families navigating autism.",
      },
    ],
  }),
  component: ResourcesPage,
});

function ResourcesPage() {
  const [open, setOpen] = useState<string | null>(faqs[0].q);
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Learn · Resources"
        title={<>Understanding autism in South Africa</>}
        intro="Plain-language guides written for families, educators and caregivers — covering early signs through to government grants."
      />

      <section className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 pt-8 pb-24">
        <nav aria-label="On this page" className="lg:col-span-3 lg:sticky lg:top-24 self-start">
          <p className="font-mono text-[10px] uppercase tracking-widest text-teal mb-4">
            Topics
          </p>
          <ul className="space-y-2 text-sm">
            {topics.map((t) => (
              <li key={t.id}>
                <a
                  href={`#${t.id}`}
                  className="text-navy/70 hover:text-teal"
                >
                  {t.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="lg:col-span-9 space-y-14">
          {topics.map((t) => (
            <article key={t.id} id={t.id} className="scroll-mt-28 border-t border-navy/10 pt-8">
              <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight text-navy mb-4">
                {t.title}
              </h2>
              <p className="text-navy/75 leading-relaxed">{t.body}</p>
            </article>
          ))}

          <section id="faq" className="scroll-mt-28 border-t border-navy/10 pt-8">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight text-navy mb-6">
              Frequently asked questions
            </h2>
            <div className="divide-y divide-navy/10 border-y border-navy/10">
              {faqs.map((f) => {
                const isOpen = open === f.q;
                return (
                  <div key={f.q}>
                    <button
                      onClick={() => setOpen(isOpen ? null : f.q)}
                      aria-expanded={isOpen}
                      className="w-full text-left py-5 flex justify-between items-center gap-4 hover:text-teal"
                    >
                      <span className="font-semibold text-navy text-base pr-4">{f.q}</span>
                      <span aria-hidden="true" className="text-teal text-xl font-light">
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>
                    {isOpen ? (
                      <p className="pb-6 text-navy/75 leading-relaxed text-sm">{f.a}</p>
                    ) : null}
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      </section>
    </SiteLayout>
  );
}
