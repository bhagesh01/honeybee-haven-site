import { Link } from "react-router-dom";
import { ShieldCheck, Award, HeartHandshake, GraduationCap, Sparkles, Clock, Users, Sprout, Smile } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal, SectionHeading } from "@/components/site/SectionHeading";
import { Seo, breadcrumbSchema } from "@/components/site/Seo";
import { Button } from "@/components/ui/button";
import classroom from "@/assets/classroom.webp";

const highlights = [
  { icon: GraduationCap, t: "Quality learning", d: "A blend of play-way method, Montessori principles and modern teaching practices designed for early years." },
  { icon: ShieldCheck, t: "Safe & secure", d: "CCTV in common areas, biometric pickup, fenced outdoor zones and rigorous hygiene protocols." },
  { icon: Award, t: "Experienced teachers", d: "Lead educators trained in early childhood education or Montessori — passionate, kind and observant." },
  { icon: HeartHandshake, t: "Child-centric approach", d: "Small batch sizes and a 1:6 ratio mean every child is genuinely seen, heard and known." },
  { icon: Clock, t: "For working parents", d: "Extended daycare hours, daily photo updates and seamless drop-off & pickup flexibility." },
  { icon: Sprout, t: "All-round development", d: "Academics, art, music, fitness and emotional intelligence — woven into every day." },
];

const stats = [
  { n: "13+", l: "Years of joyful learning" },
  { n: "1:6", l: "Teacher to child ratio" },
  { n: "500+", l: "Happy graduates" },
  { n: "15+", l: "Enrichment programmes" },
];

const WhyBusyBees = () => {
  return (
    <>
      <PageHero
        eyebrow="Partner's Corner"
        title="Why families"
        highlight="choose BusyBees"
        description="The quiet, real reasons parents stay with us — often for years."
        trail={[{ label: "Home", to: "/" }, { label: "Partner's Corner" }, { label: "Why BusyBees" }]}
      />

      {/* Intro */}
      <section className="py-16 sm:py-20">
        <div className="container-tight grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="font-display text-2xl sm:text-3xl text-ink leading-snug">
                BusyBees is more than a preschool — it's a warm, secure community where children grow into curious, confident, kind little humans.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
                We've spent over a decade refining what truly matters in early childhood: small classes, trained teachers, joyful learning and parents who feel like partners in the journey.
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal delay={0.05}>
              <img
                src={classroom}
                alt="BusyBees community"
                loading="lazy"
                className="rounded-[2rem] shadow-lift w-full aspect-[4/5] object-cover"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-20 bg-honeycomb-soft">
        <div className="container-wide">
          <SectionHeading
            eyebrow="What sets us apart"
            title="Six things we do"
            highlight="really well"
            description="No flashy promises — just the foundations that make a real difference for your child."
          />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {highlights.map((h, i) => (
              <Reveal key={h.t} delay={i * 0.05}>
                <div className="bg-card rounded-2xl p-6 border border-border h-full card-lift">
                  <div className="h-12 w-12 rounded-xl gradient-honey flex items-center justify-center mb-4">
                    <h.icon className="h-6 w-6 text-ink" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-ink">{h.t}</h3>
                  <p className="text-muted-foreground mt-2 leading-relaxed">{h.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20">
        <div className="container-wide">
          <Reveal>
            <div className="bg-cream rounded-[2rem] p-10 sm:p-14 border border-border shadow-soft">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                {stats.map((s) => (
                  <div key={s.l}>
                    <div className="font-display text-4xl sm:text-5xl font-bold text-honey-dark">{s.n}</div>
                    <div className="mt-2 text-sm text-muted-foreground">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24">
        <div className="container-tight">
          <Reveal>
            <div className="bg-card rounded-[2rem] p-10 sm:p-14 border border-border shadow-soft text-center">
              <Smile className="h-10 w-10 text-honey-dark mx-auto" />
              <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold text-ink">
                Come and feel it for yourself
              </h2>
              <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
                Book a campus tour, meet the teachers, and watch your little one's eyes light up.
              </p>
              <Button asChild className="mt-7 rounded-full h-12 px-8 shadow-honey">
                <Link to="/contact">Schedule a visit</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
};

export default WhyBusyBees;
