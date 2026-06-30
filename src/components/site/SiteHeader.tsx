import { Link } from "@tanstack/react-router";
import { useState } from "react";

const NAV = [
  { to: "/schools", label: "Schools" },
  { to: "/therapists", label: "Therapists" },
  { to: "/emergency", label: "Emergency" },
  { to: "/activities", label: "Activities" },
  { to: "/resources", label: "Resources" },
  { to: "/volunteer", label: "Volunteer" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-50 bg-paper/80 backdrop-blur-md border-b border-navy/5">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link
          to="/"
          className="font-display font-extrabold text-lg sm:text-xl tracking-tight uppercase text-navy"
        >
          Autism Connect <span className="text-teal">GP</span>
        </Link>
        <div className="hidden lg:flex gap-7 text-[11px] font-semibold uppercase tracking-widest">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="hover:text-teal transition-colors text-navy/80"
              activeProps={{ className: "text-teal" }}
            >
              {n.label}
            </Link>
          ))}
        </div>
        <button
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="lg:hidden p-2 -mr-2 text-navy"
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            {open ? (
              <path strokeLinecap="round" d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>
      {open ? (
        <div className="lg:hidden border-t border-navy/5 bg-paper">
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-2">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="py-3 text-sm font-semibold uppercase tracking-widest text-navy/80 hover:text-teal"
                activeProps={{ className: "text-teal" }}
              >
                {n.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </nav>
  );
}
