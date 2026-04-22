import { Quote, Star, ShieldCheck, Award, HeartHandshake, GraduationCap } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal, SectionHeading } from "@/components/site/SectionHeading";
import classroom from "@/assets/classroom.jpg";

const stories = [
  { name: "Sarah Jenkins", child: "Lila, 4", text: "We toured five preschools. The moment we walked into BusyBees, Lila ran straight to the reading nook and said 'Mama, this is my school.' She wasn't wrong.", initials: "SJ" },
  { name: "Arjun Mehta",  child: "Vihaan, 3", text: "Vihaan was a shy, quiet boy when he started. Six months in, he's leading circle time songs. The teachers truly see each child.", initials: "AM" },
  { name: "Emily Tan",   child: "Nathan, 5", text: "What I love most is how naturally academics happen here. He reads chapter books now — without a single worksheet drilled into him.", initials: "ET" },
  { name: "Priya Singh", child: "Aanya, 2",  text: "Even the daycare staff know what makes my daughter laugh. That kind of detail is rare and precious.", initials: "PS" },
];

const usps = [
  { icon: Award,         t: "Top Preschool 2024", d: "Recognised by Kids Daily and Urban Parent magazines, two years running." },
  { icon: GraduationCap, t: "Trained educators",  d: "Every lead teacher holds a degree in early childhood education or Montessori certification." },
  { icon: ShieldCheck,   t: "Safety-first campus",d: "CCTV in every common area, biometric pickup, and a fully fenced outdoor space." },
  { icon: HeartHandshake,t: "1:6 teacher ratio",  d: "Smaller classes mean every child is genuinely known — not just managed." },
];

const PartnersCorner = () => {
  return (
    <>
      <PageHero
        eyebrow="Partner's Corner"
        title="In the words of our"
        highlight="parent partners"
        description="Honest stories from the families who walk through our doors every morning."
        trail={[{ label: "Home", to: "/" }, { label: "Partner's Corner" }]}
      />

      <section className="py-20">
        <div className="container-wide grid md:grid-cols-2 gap-6">
          {stories.map((s, i) => (
            <Reveal key={s.name} delay={i * 0.06}>
              <article className="relative bg-card rounded-3xl p-7 sm:p-9 border border-border shadow-soft card-lift h-full">
                <Quote className="absolute top-5 right-5 h-12 w-12 text-honey/25" />
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-honey text-honey" />
                  ))}
                </div>
                <p className="font-display text-xl text-ink leading-snug">"{s.text}"</p>
                <div className="mt-6 flex items-center gap-3 pt-5 border-t border-border">
                  <div className="h-11 w-11 rounded-full bg-honey grid place-items-center font-bold text-ink">{s.initials}</div>
                  <div>
                    <div className="font-semibold text-ink">{s.name}</div>
                    <div className="text-xs text-muted-foreground">Parent of {s.child}</div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-20 bg-cream">
        <div className="container-wide grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <Reveal>
              <img src={classroom} alt="BusyBees community" loading="lazy" className="rounded-[2rem] shadow-lift w-full aspect-[4/5] object-cover" />
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <SectionHeading
              align="left"
              eyebrow="Why BusyBees"
              title="The quiet things that"
              highlight="make a difference"
              description="We don't believe in flashy promises. These are the small, real reasons families stay with us — often for years."
            />
            <div className="mt-10 grid sm:grid-cols-2 gap-5">
              {usps.map((u, i) => (
                <Reveal key={u.t} delay={i * 0.06}>
                  <div className="bg-card rounded-2xl p-5 border border-border h-full">
                    <u.icon className="h-7 w-7 text-honey-dark" />
                    <div className="mt-3 font-display text-lg font-bold text-ink">{u.t}</div>
                    <p className="text-sm text-muted-foreground mt-1">{u.d}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PartnersCorner;
