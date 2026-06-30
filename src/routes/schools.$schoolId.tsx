import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { getSchool } from "@/data/schools";

export const Route = createFileRoute("/schools/$schoolId")({
  loader: ({ params }) => {
    const school = getSchool(params.schoolId);
    if (!school) throw notFound();
    return { school };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.school.name} — Autism Connect Gauteng` },
          { name: "description", content: loaderData.school.summary },
          { property: "og:title", content: loaderData.school.name },
          { property: "og:description", content: loaderData.school.summary },
        ]
      : [],
  }),
  component: SchoolProfile,
  notFoundComponent: () => (
    <SiteLayout>
      <div className="max-w-3xl mx-auto px-6 py-32 text-center">
        <h1 className="font-display text-4xl font-extrabold mb-4">School not found</h1>
        <p className="text-navy/60 mb-8">
          We could not find that school in our directory.
        </p>
        <Link
          to="/schools"
          className="inline-block bg-navy text-white px-6 py-3 text-xs uppercase tracking-widest font-semibold hover:bg-ocean"
        >
          Back to directory
        </Link>
      </div>
    </SiteLayout>
  ),
});

const REQUIRED_DOCS = [
  "Child's Birth Certificate",
  "Parent or Guardian ID",
  "Proof of Residence",
  "Recent Passport Photos",
  "Medical Records",
  "Autism Diagnosis Report",
  "Immunisation Card",
  "Previous School Reports (if applicable)",
];

function SchoolProfile() {
  const { school } = Route.useLoaderData() as { school: ReturnType<typeof getSchool> & {} };

  return (
    <SiteLayout>
      <article>
        <header className="max-w-7xl mx-auto px-6 pt-16 md:pt-24 pb-12 animate-reveal">
          <Link
            to="/schools"
            className="font-mono text-[10px] uppercase tracking-[0.3em] text-ocean hover:text-teal"
          >
            ← Back to directory
          </Link>
          <div className="grid lg:grid-cols-12 gap-12 mt-8 items-end">
            <div className="lg:col-span-7">
              <h1 className="font-display text-4xl md:text-6xl font-extrabold leading-[0.95] tracking-tight text-balance mb-6">
                {school.name}
              </h1>
              <div className="flex flex-wrap gap-3 mb-6">
                <Badge>{school.type}</Badge>
                <Badge>{school.ageRange}</Badge>
                <Badge>{school.gender}</Badge>
                <Badge tone={school.status === "Open" ? "good" : "neutral"}>
                  {school.status}
                </Badge>
              </div>
              <p className="text-lg text-navy/70 leading-relaxed max-w-xl">
                {school.summary}
              </p>
            </div>
            <div className="lg:col-span-5">
              <div
                className={`w-full aspect-[4/3] bg-gradient-to-br ${school.accent}`}
                aria-hidden="true"
              />
            </div>
          </div>
        </header>

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-16 py-12">
          <div className="lg:col-span-2 space-y-16">
            <Section eyebrow="About" title="Who they are">
              <p className="text-navy/75 leading-relaxed">{school.about}</p>
              <p className="text-navy/75 leading-relaxed mt-4">
                <strong className="font-semibold">Mission:</strong> {school.mission}
              </p>
            </Section>

            <Section eyebrow="Therapy &amp; Services" title="What they offer">
              <ul className="grid sm:grid-cols-2 gap-3">
                {school.services.map((s) => (
                  <li
                    key={s}
                    className="border border-navy/10 px-4 py-3 text-sm text-navy/80"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </Section>

            <Section eyebrow="Programmes" title="Phases &amp; learning programmes">
              <ul className="grid sm:grid-cols-2 gap-3">
                {school.programmes.map((p) => (
                  <li
                    key={p}
                    className="border border-navy/10 px-4 py-3 text-sm text-navy/80"
                  >
                    {p}
                  </li>
                ))}
              </ul>
            </Section>

            <Section eyebrow="Admissions" title="Documents required">
              <p className="text-navy/70 mb-6 leading-relaxed">
                Prepare these documents before contacting the school. Originals plus
                certified copies are usually required.
              </p>
              <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sm text-navy/80 list-disc pl-5">
                {REQUIRED_DOCS.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            </Section>
          </div>

          <aside className="lg:sticky lg:top-24 self-start space-y-8 border border-navy/10 p-8 bg-white">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-teal mb-3">
                Contact
              </p>
              <p className="text-sm text-navy/80 leading-relaxed">{school.address}</p>
            </div>
            <ContactRow label="Phone" value={school.phone} href={`tel:${school.phone.replace(/\s/g, "")}`} />
            <ContactRow label="Email" value={school.email} href={`mailto:${school.email}`} />
            {school.website ? (
              <ContactRow
                label="Website"
                value={school.website.replace(/^https?:\/\//, "")}
                href={school.website}
              />
            ) : null}
            <ContactRow label="Fees" value={school.fees} />
            <ContactRow
              label="Transport"
              value={school.transport ? "Available" : "Not provided"}
            />
            <div className="pt-6 border-t border-navy/10">
              <p className="text-xs text-navy/60 mb-3">
                Applications &amp; intake forms are being added soon.
              </p>
              <Link
                to="/contact"
                className="block w-full bg-navy text-white text-center text-[11px] uppercase tracking-widest font-semibold py-4 hover:bg-ocean transition-colors"
              >
                Ask us about this school
              </Link>
            </div>
          </aside>
        </div>
      </article>
    </SiteLayout>
  );
}

function Section({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section>
      <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-teal mb-2">
        {eyebrow}
      </p>
      <h2
        className="font-display text-2xl md:text-3xl font-extrabold tracking-tight mb-6 text-navy"
        dangerouslySetInnerHTML={typeof title === "string" ? { __html: title } : undefined}
      >
        {typeof title === "string" ? undefined : title}
      </h2>
      {children}
    </section>
  );
}

function Badge({
  children,
  tone = "neutral",
}: {
  children: React.ReactNode;
  tone?: "good" | "neutral";
}) {
  return (
    <span
      className={`text-[9px] font-semibold px-2 py-1 border uppercase tracking-widest ${
        tone === "good" ? "border-mint text-teal" : "border-navy/20 text-navy/60"
      }`}
    >
      {children}
    </span>
  );
}

function ContactRow({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href?: string;
}) {
  return (
    <div>
      <p className="text-[10px] uppercase tracking-widest text-navy/40 font-semibold mb-1">
        {label}
      </p>
      {href ? (
        <a
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
          className="text-sm text-navy/85 hover:text-teal break-words"
        >
          {value}
        </a>
      ) : (
        <p className="text-sm text-navy/85">{value}</p>
      )}
    </div>
  );
}
