import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHeader } from "@/components/site/PageHeader";

export const Route = createFileRoute("/volunteer")({
  head: () => ({
    meta: [
      { title: "Volunteer — Autism Connect Gauteng" },
      {
        name: "description",
        content:
          "Volunteer with autism schools and support programmes across Gauteng. Reading partners, sports coaches, fundraising, admin and more.",
      },
      { property: "og:title", content: "Volunteer with Autism Connect Gauteng" },
      {
        property: "og:description",
        content:
          "Many ways to help — formal qualifications not always required.",
      },
    ],
  }),
  component: VolunteerPage,
});

const CATEGORIES = [
  "Teaching Assistant",
  "Reading Support",
  "Sports Coach",
  "Music & Art",
  "Fundraising",
  "Therapy Support",
  "Administration",
  "Events",
] as const;

function VolunteerPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Community · Volunteer"
        title={<>Help us widen the circle of support</>}
        intro="From a single afternoon a month to a steady weekly commitment, volunteers are the backbone of inclusive education in Gauteng."
      />

      <section className="max-w-7xl mx-auto px-6 py-12 grid lg:grid-cols-2 gap-16">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-widest text-teal mb-4">
            Where you can help
          </p>
          <h2 className="font-display text-3xl font-extrabold mb-6 tracking-tight">
            Eight ways to get involved
          </h2>
          <ul className="grid sm:grid-cols-2 gap-3">
            {CATEGORIES.map((c) => (
              <li
                key={c}
                className="border border-navy/10 px-4 py-3 text-sm text-navy/80"
              >
                {c}
              </li>
            ))}
          </ul>
        </div>
        <div className="border border-navy/10 p-8 bg-white">
          <p className="font-mono text-[10px] uppercase tracking-widest text-teal mb-4">
            Apply
          </p>
          <h2 className="font-display text-2xl font-extrabold mb-4 tracking-tight">
            Volunteer registration
          </h2>
          <p className="text-sm text-navy/70 leading-relaxed mb-6">
            We are finalising our volunteer onboarding system. In the meantime, please get
            in touch and we will match you with a partner school or programme that fits
            your skills and availability.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-navy text-white text-[11px] uppercase tracking-widest font-semibold py-4 px-8 hover:bg-ocean transition-colors"
          >
            Express your interest
          </Link>
          <p className="mt-6 text-xs text-navy/50">
            All school-based volunteers will be required to complete a background check
            before placement.
          </p>
        </div>
      </section>
    </SiteLayout>
  );
}
