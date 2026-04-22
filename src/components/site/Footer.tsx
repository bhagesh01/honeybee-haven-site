import { Link } from "react-router-dom";
import { Mail, MapPin, Phone, Instagram, Facebook, Youtube } from "lucide-react";
import bee from "@/assets/bee-mascot.png";

export const Footer = () => {
  return (
    <footer className="relative mt-24 bg-ink text-cream/90 overflow-hidden">
      <div className="absolute inset-0 bg-honeycomb-soft opacity-[0.07] pointer-events-none" />
      {/* honey drip top edge */}
      <svg className="absolute -top-1 left-0 w-full text-ink" viewBox="0 0 1440 60" preserveAspectRatio="none" aria-hidden>
        <path
          fill="currentColor"
          d="M0 30 C 120 60, 240 0, 360 30 S 600 60, 720 30 840 0, 960 30 1200 60, 1320 30 1440 0, 1440 30 V60 H0 Z"
        />
      </svg>

      <div className="container-wide relative pt-20 pb-10 grid gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="flex items-center gap-3">
            <img src={bee} alt="" className="h-12 w-12" />
            <div>
              <div className="font-display text-2xl font-bold text-cream">BusyBees</div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-honey-light">Preschool · Est. 2010</div>
            </div>
          </div>
          <p className="mt-5 max-w-sm text-cream/70 leading-relaxed">
            A nurturing environment where small wings learn to flutter — and small steps lead to giant leaps.
          </p>
          <div className="mt-6 flex gap-3">
            {[Instagram, Facebook, Youtube].map((Icon, i) => (
              <a key={i} href="#" className="h-10 w-10 grid place-items-center rounded-full bg-cream/10 hover:bg-honey hover:text-ink transition-colors">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="md:col-span-3">
          <h4 className="font-display text-lg text-cream mb-4">Explore</h4>
          <ul className="space-y-2.5 text-sm">
            {[
              ["About", "/about"],
              ["Programs", "/programs"],
              ["Events", "/events"],
              ["Gallery", "/gallery"],
              ["Partner's Corner", "/partners-corner"],
              ["Contact", "/contact"],
            ].map(([label, to]) => (
              <li key={label}>
                <Link to={to as string} className="text-cream/70 hover:text-honey-light transition-colors">{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4">
          <h4 className="font-display text-lg text-cream mb-4">Visit the Hive</h4>
          <ul className="space-y-3 text-sm text-cream/75">
            <li className="flex gap-3"><MapPin className="h-4 w-4 mt-0.5 text-honey" /> 123 Sunny Lane, Education District, Creative City</li>
            <li className="flex gap-3"><Phone className="h-4 w-4 mt-0.5 text-honey" /> +91 (555) BUSY-BEE</li>
            <li className="flex gap-3"><Mail className="h-4 w-4 mt-0.5 text-honey" /> hello@busybees.edu</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="container-wide py-5 flex flex-col sm:flex-row gap-3 items-center justify-between text-xs text-cream/60">
          <p>© {new Date().getFullYear()} BusyBees Preschool. Crafted with care.</p>
          <p className="font-hand text-honey-light text-base">Bee kind. Bee curious. Bee you. 🐝</p>
        </div>
      </div>
    </footer>
  );
};
