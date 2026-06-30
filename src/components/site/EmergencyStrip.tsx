import { emergencyNumbers } from "@/data/emergency";

export function EmergencyStrip() {
  return (
    <section className="bg-navy py-5" aria-label="Emergency contact numbers">
      <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-between items-center gap-6">
        <span className="font-mono text-[10px] text-mint/70 uppercase tracking-widest shrink-0">
          Crisis Response · GP
        </span>
        <div className="flex gap-x-8 gap-y-3 flex-wrap">
          {emergencyNumbers.slice(0, 5).map((e) => (
            <a
              key={e.label}
              href={`tel:${e.tel}`}
              className="flex flex-col group focus:outline-none"
              aria-label={`Call ${e.label} on ${e.number}`}
            >
              <span className="text-white/50 text-[9px] uppercase tracking-widest">
                {e.label}
              </span>
              <span className="text-mint font-semibold text-sm group-hover:text-white transition-colors">
                {e.number}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
