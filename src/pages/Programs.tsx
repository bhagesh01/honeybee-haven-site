import { Link } from "react-router-dom";
import { ArrowUpRight, Baby, Sparkles, Sun, Palette, Rocket, Clock, Users } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal, SectionHeading } from "@/components/site/SectionHeading";

const programs = [
  { slug: "preschool",  icon: Sparkles, title: "Preschool",     age: "3 – 6 years",    desc: "A holistic foundation in literacy, numeracy and emotional intelligence — through play, story and project work.", tag: "Most loved" },
  { slug: "daycare",    icon: Sun,      title: "Daycare",       age: "1.5 – 6 years",  desc: "Full-day, gently structured care with home-cooked meals, restful naps and lots of unstructured wonder time." },
  { slug: "buzzyclub",  icon: Users,    title: "BuzzyClub",     age: "5 – 8 years",    desc: "An after-school enrichment club where children dive deeper into music, coding basics, theatre and chess." },
  { slug: "be-creative",icon: Palette,  title: "Be Creative",   age: "Weekend ages 4+",desc: "Open studios where children explore clay, watercolours, junk-art and storytelling across an entire morning." },
  { slug: "summer-camps",icon: Rocket,  title: "Summer Camps",  age: "Apr – Jun",      desc: "Week-long themed camps — Tiny Scientists, Forest School, Junior Chefs, and the legendary Bee Olympics." },
];

const Programs = () => {
  return (
    <>
      <PageHero
        eyebrow="What we offer"
        title="Programs designed for"
        highlight="how children actually grow"
        description="Five distinct journeys — each one shaped by neuroscience, observation, and a deep respect for childhood."
        trail={[{ label: "Home", to: "/" }, { label: "Programs" }]}
      />

      <section className="py-20 sm:py-24">
        <div className="container-wide grid gap-6 md:grid-cols-2">
          {programs.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.06}>
              <Link
                to={`/programs/${p.slug}`}
                className="group block bg-card rounded-[2rem] border border-border p-7 sm:p-9 shadow-soft card-lift relative overflow-hidden h-full"
              >
                {p.tag && (
                  <span className="absolute top-5 right-5 text-[10px] uppercase tracking-wider font-bold bg-accent text-accent-foreground px-2.5 py-1 rounded-full">
                    {p.tag}
                  </span>
                )}
                <div className="flex items-start gap-5">
                  <div className="h-14 w-14 rounded-2xl bg-honey/15 grid place-items-center text-honey-dark shrink-0">
                    <p.icon className="h-7 w-7" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">{p.age}</div>
                    <h3 className="font-display text-2xl sm:text-3xl font-bold text-ink mt-1">{p.title}</h3>
                  </div>
                </div>
                <p className="mt-5 text-muted-foreground leading-relaxed">{p.desc}</p>
                <div className="mt-6 inline-flex items-center gap-2 text-honey-dark font-semibold">
                  Explore programme
                  <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-20 bg-cream">
        <div className="container-tight">
          <SectionHeading
            eyebrow="A typical day"
            title="Our daily"
            highlight="rhythm"
            description="Predictable enough to feel safe. Flexible enough to follow curiosity."
          />
          <div className="mt-12 space-y-3">
            {[
              ["8:00", "Soft landing", "Children settle in with quiet free-play and a warm welcome from their teacher."],
              ["9:00", "Circle time", "Songs, stories, weather, and the day's plan — together as a hive."],
              ["10:00", "Discovery blocks", "Self-chosen Montessori work, art studios, sensorial trays."],
              ["12:00", "Family-style lunch", "Healthy organic meal served at small tables — everyone helps."],
              ["13:00", "Rest & read-aloud", "Naps for the littles, quiet picture books for the big kids."],
              ["15:00", "Outdoor play", "Garden, mud kitchen, climbing — rain or shine."],
              ["16:00", "Wind-down & pickup", "Reflection, a song, and a hug at the door."],
            ].map(([t, h, d]) => (
              <Reveal key={t}>
                <div className="bg-card rounded-2xl p-5 border border-border flex gap-5 items-start">
                  <div className="shrink-0 w-16 text-honey-dark font-display font-bold text-xl flex items-center gap-1.5">
                    <Clock className="h-4 w-4" /> {t}
                  </div>
                  <div>
                    <div className="font-semibold text-ink">{h}</div>
                    <div className="text-sm text-muted-foreground mt-0.5">{d}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Programs;
