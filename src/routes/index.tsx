import { createFileRoute, Link } from "@tanstack/react-router";
import heroImage from "@/assets/hero-classroom.jpg";
import { SiteLayout } from "@/components/site/SiteLayout";
import { EmergencyStrip } from "@/components/site/EmergencyStrip";
import { schools } from "@/data/schools";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Autism Connect Gauteng — Schools, Therapists & Support" },
      {
        name: "description",
        content:
          "A trusted Gauteng hub for autism schools, therapists, emergency contacts and home learning activities.",
      },
      { property: "og:title", content: "Autism Connect Gauteng" },
      {
        property: "og:description",
        content:
          "Find autism schools and support services across Johannesburg, Pretoria, Ekurhuleni and the West Rand.",
      },
    ],
  }),
  component: HomePage,
});

const ACTIONS = [
  { to: "/schools", label: "Find Schools" },
  { to: "/emergency", label: "Emergency" },
  { to: "/volunteer", label: "Volunteer" },
  { to: "/resources", label: "Resources" },
] as const;



function HomePage() {
  const featured = schools.slice(0, 6);
  return (
    <SiteLayout>
      {/* Hero */}
      <header className="relative px-6 pt-12 md:pt-24 pb-16 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-7 animate-reveal">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] mb-6 text-ocean">
              Establishing Agency &amp; Support
            </p>
            <h1 className="font-display text-5xl md:text-7xl font-extrabold leading-[0.9] tracking-tight text-balance mb-8">
              Connecting Families with{" "}
              <span className="text-teal italic">Autism Support</span> Across Gauteng
            </h1>
            <p className="text-base md:text-lg text-navy/70 max-w-xl leading-relaxed mb-10">
              A free directory of verified autism schools, therapists and emergency
              services across Johannesburg, Pretoria, Ekurhuleni and the West Rand.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {ACTIONS.map((a, i) => (
                <Link
                  key={a.to}
                  to={a.to}
                  className={
                    i === 0
                      ? "bg-navy text-white text-[11px] font-semibold uppercase tracking-wider py-4 px-3 text-center hover:bg-ocean transition-all"
                      : "border border-navy/20 text-navy text-[11px] font-semibold uppercase tracking-wider py-4 px-3 text-center hover:bg-navy/5 transition-all"
                  }
                >
                  {a.label}
                </Link>
              ))}
            </div>

          </div>
          <div className="lg:col-span-5 animate-reveal [animation-delay:200ms]">
            <img
              src={heroImage}
              alt="A young boy concentrating on colourful sensory blocks in a calm classroom."
              width={1024}
              height={1280}
              className="w-full aspect-[4/5] object-cover rounded-[2px] outline outline-1 -outline-offset-1 outline-black/5"
            />
          </div>
        </div>
      </header>

      <EmergencyStrip />

      {/* Featured Schools */}
      <section className="max-w-7xl mx-auto px-6 py-24" aria-labelledby="featured-schools">
        <div className="flex justify-between items-end mb-16 border-b border-navy/10 pb-8 gap-6 flex-wrap">
          <div>
            <p className="font-mono text-[10px] uppercase text-teal mb-2 tracking-[0.3em]">
              Directory (01)
            </p>
            <h2 id="featured-schools" className="font-display text-4xl font-extrabold tracking-tight">
              Featured Schools
            </h2>
          </div>
          <Link
            to="/schools"
            className="text-xs font-semibold uppercase tracking-wider border-b border-navy pb-1 hover:text-teal hover:border-teal"
          >
            View all {schools.length} institutions
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
          {featured.map((s) => (
            <Link
              key={s.id}
              to="/schools/$schoolId"
              params={{ schoolId: s.id }}
              className="group block"
            >
              <div
                className={`w-full aspect-[4/3] mb-6 bg-gradient-to-br ${s.accent} group-hover:opacity-90 transition-opacity`}
                aria-hidden="true"
              />
              <div className="flex justify-between items-start mb-2 gap-3">
                <h3 className="font-display font-extrabold text-xl text-navy">{s.name}</h3>
                <span
                  className={`text-[9px] font-semibold px-2 py-0.5 border uppercase whitespace-nowrap ${
                    s.status === "Open"
                      ? "border-mint text-teal"
                      : s.status === "Waitlist"
                        ? "border-navy/20 text-navy/50"
                        : "border-destructive/40 text-destructive"
                  }`}
                >
                  {s.status}
                </span>
              </div>
              <p className="text-xs text-ocean mb-4">
                {s.area}, {s.city} · {s.ageRange}
              </p>
              <p className="text-sm text-navy/70 leading-relaxed">{s.summary}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Clinics Teaser */}
      <section className="bg-ocean text-white py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="font-mono text-[10px] uppercase text-mint mb-4 tracking-[0.3em]">
              Therapy (02)
            </p>
            <h2 className="font-display text-4xl font-extrabold tracking-tight mb-6">
              Localised therapy &amp; clinics
            </h2>
            <p className="text-white/70 max-w-md mb-10 leading-relaxed">
              Finding the right occupational therapist or diagnostic clinic should not be
              a burden. We maintain a verified list of specialists across Johannesburg,
              Pretoria and the East Rand.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/therapists"
                className="bg-mint text-navy font-semibold text-[11px] uppercase tracking-widest py-4 px-8 hover:bg-white transition-colors"
              >
                Find a Therapist
              </Link>
              <Link
                to="/emergency"
                className="border border-white/30 font-semibold text-[11px] uppercase tracking-widest py-4 px-8 hover:bg-white/10 transition-colors"
              >
                Emergency Services
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-navy/30 p-8">
              <span className="block font-display text-3xl font-extrabold mb-2">12+</span>
              <span className="text-[10px] uppercase tracking-widest text-mint">
                Verified specialists
              </span>
            </div>
            <div className="bg-navy/30 p-8">
              <span className="block font-display text-3xl font-extrabold mb-2">08</span>
              <span className="text-[10px] uppercase tracking-widest text-mint">
                Hospitals in network
              </span>
            </div>
            <div className="bg-navy/30 p-8">
              <span className="block font-display text-3xl font-extrabold mb-2">04</span>
              <span className="text-[10px] uppercase tracking-widest text-mint">
                Disciplines covered
              </span>
            </div>
            <div className="bg-navy/30 p-8">
              <span className="block font-display text-3xl font-extrabold mb-2">11</span>
              <span className="text-[10px] uppercase tracking-widest text-mint">
                Gauteng areas served
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="max-w-5xl mx-auto px-6 py-32 text-center">
        <p className="font-mono text-[10px] uppercase text-ocean mb-12 tracking-[0.4em]">
          Community Voice
        </p>
        <blockquote className="font-display text-2xl md:text-4xl font-light italic text-navy/80 leading-snug mb-12 text-balance">
          “Finding a school for Neo felt impossible until we used this hub. The directory
          didn’t just give us names; it gave us hope for his future in Soweto.”
        </blockquote>
        <p className="font-semibold text-sm tracking-tight">Lerato Mokoena · Parent, Soweto</p>
      </section>
    </SiteLayout>
  );
}
