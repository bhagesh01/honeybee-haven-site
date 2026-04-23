import { Link } from "react-router-dom";
import { ArrowUpRight, Baby, Palette, Sun, Sparkles, Rocket } from "lucide-react";
import { Reveal, SectionHeading } from "../SectionHeading";
import { Button } from "@/components/ui/button";
import { BeeAvatar } from "@/components/site/BeeAvatar";

const programs = [
  {
    icon: Baby,
    title: "Toddler Explorers",
    age: "1.5 – 2.5 yrs",
    blurb: "Sensory play, language ladders and gentle routines that build a confident first step into school.",
    accent: "bg-honey/15 text-honey-dark",
    border: "after:bg-honey",
  },
  {
    icon: Sparkles,
    title: "Preschool Pathfinders",
    age: "3 – 4 yrs",
    blurb: "Phonics, numeracy and social skills in a flexible daily rhythm guided by curiosity, not clocks.",
    accent: "bg-leaf/15 text-leaf",
    border: "after:bg-leaf",
  },
  {
    icon: Palette,
    title: "After-School Creatives",
    age: "4 – 6 yrs",
    blurb: "An enrichment program devoted to arts, STEM workshops, and movement after school hours.",
    accent: "bg-accent/15 text-accent",
    border: "after:bg-accent",
  },
  {
    icon: Sun,
    title: "BuzzyClub Daycare",
    age: "All ages",
    blurb: "Safe, structured care from 7:30 AM to 6:30 PM with healthy organic meals included.",
    accent: "bg-honey-dark/15 text-honey-dark",
    border: "after:bg-honey-dark",
  },
  {
    icon: Rocket,
    title: "Summer Camps",
    age: "Seasonal",
    blurb: "A different theme each week — from tiny scientists to forest school adventurers.",
    accent: "bg-honey/15 text-honey",
    border: "after:bg-honey",
  },
];

export const ProgramsPreview = () => {
  return (
    <section className="py-24 sm:py-28 bg-cream relative overflow-hidden">
      <div className="absolute inset-0 bg-honeycomb-soft pointer-events-none" />
      <div className="container-wide relative">
        <SectionHeading
          eyebrow="What we offer"
          title="Our nurturing"
          highlight="programs"
          description="Five thoughtfully crafted journeys — each one designed to meet your child exactly where they are."
        />

        {/* Asymmetric layout: first 3 cards, then 2 wider cards */}
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {programs.slice(0, 3).map((p, i) => (
            <Reveal key={p.title} delay={i * 0.07}>
              <ProgramCard {...p} beeIndex={i} />
            </Reveal>
          ))}
        </div>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          {programs.slice(3).map((p, i) => (
            <Reveal key={p.title} delay={i * 0.07}>
              <ProgramCard {...p} wide beeIndex={i + 3} />
            </Reveal>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild size="lg" className="rounded-full px-8 shadow-honey">
            <Link to="/programs">View Full Curriculum</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

const ProgramCard = ({
  icon: Icon, title, age, blurb, accent, border, wide, beeIndex = 0,
}: any) => (
  <article
    className={`group relative bg-card rounded-3xl p-7 border border-border shadow-soft card-lift overflow-hidden
                after:content-[''] after:absolute after:left-7 after:right-7 after:bottom-0 after:h-1 after:rounded-full ${border}`}
  >
    <BeeAvatar
      index={beeIndex}
      className="absolute -right-3 -top-3 w-14 h-14 opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 group-hover:rotate-6 transition-all duration-500"
    />
    <div className="flex items-start justify-between">
      <div className={`h-12 w-12 rounded-2xl grid place-items-center ${accent}`}>
        <Icon className="h-6 w-6" />
      </div>
      <span className="text-[10px] uppercase tracking-wider font-semibold text-muted-foreground">{age}</span>
    </div>
    <h3 className="mt-5 font-display text-2xl font-bold text-ink">{title}</h3>
    <p className="mt-2.5 text-muted-foreground leading-relaxed text-sm">
      {blurb}
    </p>
    <Link to="/programs" className="mt-5 inline-flex items-center gap-1.5 text-honey-dark font-semibold text-sm group/link">
      Read more
      <ArrowUpRight className="h-4 w-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
    </Link>
  </article>
);
