import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { BeeAvatar } from "@/components/site/BeeAvatar";

export const Breadcrumb = ({ trail }: { trail: { label: string; to?: string }[] }) => (
  <nav className="flex items-center gap-1 text-sm text-muted-foreground" aria-label="Breadcrumb">
    {trail.map((t, i) => (
      <span key={i} className="flex items-center gap-1">
        {i > 0 && <ChevronRight className="h-3.5 w-3.5" />}
        {t.to ? (
          <Link to={t.to} className="hover:text-ink transition-colors">{t.label}</Link>
        ) : (
          <span className="text-ink font-medium">{t.label}</span>
        )}
      </span>
    ))}
  </nav>
);

/** Reusable hero used across inner pages */
export const PageHero = ({
  eyebrow,
  title,
  highlight,
  description,
  trail,
}: {
  eyebrow: string;
  title: string;
  highlight?: string;
  description: string;
  trail: { label: string; to?: string }[];
}) => (
  <section className="relative bg-honeycomb pt-12 pb-20 sm:pt-16 sm:pb-24 overflow-hidden">
    <div className="absolute -top-32 -right-24 w-[500px] h-[500px] gradient-sun opacity-70 pointer-events-none" />
    <BeeAvatar index={(eyebrow.length) % 9} className="hidden md:block absolute top-10 right-12 w-20 animate-float-slow" />
    <div className="container-wide relative">
      <Breadcrumb trail={trail} />
      <div className="mt-6 max-w-3xl">
        <span className="text-[11px] uppercase tracking-[0.28em] font-semibold text-honey-dark">{eyebrow}</span>
        <h1 className="mt-3 font-display text-4xl sm:text-5xl md:text-6xl font-bold text-ink leading-[1.02]">
          {title}{" "}
          {highlight && <span className="marker-honey italic">{highlight}</span>}
        </h1>
        <p className="mt-5 text-lg text-muted-foreground max-w-2xl leading-relaxed">{description}</p>
      </div>
    </div>
  </section>
);
