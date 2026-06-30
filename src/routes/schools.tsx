import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHeader } from "@/components/site/PageHeader";
import { schools, cities, allServices } from "@/data/schools";

export const Route = createFileRoute("/schools")({
  head: () => ({
    meta: [
      { title: "Schools Directory — Autism Connect Gauteng" },
      {
        name: "description",
        content:
          "Browse autism schools across Gauteng. Filter by city, age group and services offered.",
      },
      { property: "og:title", content: "Autism Schools in Gauteng" },
      {
        property: "og:description",
        content:
          "Verified autism schools across Johannesburg, Pretoria, Ekurhuleni and beyond.",
      },
    ],
  }),
  component: SchoolsPage,
});

function SchoolsPage() {
  const [city, setCity] = useState<string>("All");
  const [age, setAge] = useState<string>("Any");
  const [service, setService] = useState<string>("Any");
  const [status, setStatus] = useState<string>("Any");

  const filtered = useMemo(() => {
    return schools.filter((s) => {
      if (city !== "All" && s.city !== city) return false;
      if (status !== "Any" && s.status !== status) return false;
      if (service !== "Any" && !s.services.includes(service)) return false;
      if (age !== "Any") {
        const target = Number(age);
        if (target < s.ageMin || target > s.ageMax) return false;
      }
      return true;
    });
  }, [city, age, service, status]);

  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Directory · Schools"
        title={<>Find an autism school in Gauteng</>}
        intro="Search by location, age group, services offered or admissions status. Always confirm details directly with the school before applying."
      />

      <section className="max-w-7xl mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 border-y border-navy/10 py-6">
          <Filter label="City" value={city} onChange={setCity} options={["All", ...cities]} />
          <Filter
            label="Age"
            value={age}
            onChange={setAge}
            options={["Any", "3", "5", "8", "12", "15", "18"]}
          />
          <Filter
            label="Service"
            value={service}
            onChange={setService}
            options={["Any", ...allServices]}
          />
          <Filter
            label="Status"
            value={status}
            onChange={setStatus}
            options={["Any", "Open", "Waitlist", "Closed"]}
          />
        </div>
        <p className="mt-6 text-xs font-mono uppercase tracking-widest text-navy/50">
          Showing {filtered.length} of {schools.length} schools
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        {filtered.length === 0 ? (
          <p className="text-navy/60">
            No schools match those filters. Try widening your search.
          </p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
            {filtered.map((s) => (
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
                  <h2 className="font-display font-extrabold text-xl text-navy">{s.name}</h2>
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
                  {s.area}, {s.city} · {s.ageRange} · {s.type}
                </p>
                <p className="text-sm text-navy/70 leading-relaxed">{s.summary}</p>
              </Link>
            ))}
          </div>
        )}
      </section>
    </SiteLayout>
  );
}

function Filter({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
}) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-[10px] font-mono uppercase tracking-widest text-navy/50">
        {label}
      </span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="bg-transparent border border-navy/15 px-3 py-2.5 text-sm focus:border-teal outline-none"
      >
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </label>
  );
}
