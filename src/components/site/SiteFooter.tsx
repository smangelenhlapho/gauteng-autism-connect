import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t border-navy/10 py-16 bg-white mt-24">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <span className="font-display font-extrabold text-xl uppercase mb-6 block text-navy">
            Autism Connect Gauteng
          </span>
          <p className="text-sm text-navy/60 max-w-sm leading-relaxed">
            A provincial information initiative supporting families, educators and the
            neurodivergent community across Gauteng.
          </p>
          <p className="mt-6 text-xs text-navy/50">
            Built in partnership with parents, schools and allied health professionals.
          </p>
        </div>
        <div>
          <h4 className="text-[10px] uppercase tracking-widest font-extrabold mb-6 text-navy">
            Explore
          </h4>
          <ul className="space-y-3 text-sm text-navy/70">
            <li><Link to="/schools" className="hover:text-teal">Schools Directory</Link></li>
            <li><Link to="/therapists" className="hover:text-teal">Find a Therapist</Link></li>
            <li><Link to="/activities" className="hover:text-teal">Home Activities</Link></li>
            <li><Link to="/resources" className="hover:text-teal">Resource Centre</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-[10px] uppercase tracking-widest font-extrabold mb-6 text-navy">
            Connect
          </h4>
          <ul className="space-y-3 text-sm text-navy/70">
            <li><Link to="/volunteer" className="hover:text-teal">Volunteer Program</Link></li>
            <li><Link to="/emergency" className="hover:text-teal">Emergency Services</Link></li>
            <li><Link to="/contact" className="hover:text-teal">Contact Us</Link></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-navy/5 flex flex-wrap justify-between gap-3 items-center text-[10px] text-navy/40 uppercase tracking-widest">
        <span>&copy; {new Date().getFullYear()} Autism Connect Gauteng</span>
        <span>Gauteng, South Africa</span>
      </div>
    </footer>
  );
}
