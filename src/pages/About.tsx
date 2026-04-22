import { PageHero } from "@/components/site/PageHero";
import { Reveal, SectionHeading } from "@/components/site/SectionHeading";
import { Heart, Compass, Users, Leaf } from "lucide-react";
import classroom from "@/assets/classroom.jpg";
import principal from "@/assets/principal.jpg";

const values = [
  { icon: Heart,    title: "Warmth first",  desc: "Children learn best when they feel safe, seen, and quietly cheered on." },
  { icon: Compass,  title: "Curiosity-led", desc: "We follow the spark — questions matter more than perfect answers here." },
  { icon: Users,    title: "Real community",desc: "Parents, teachers, neighbours — it takes a village, and ours shows up." },
  { icon: Leaf,     title: "Slow & natural",desc: "No screens, no pressure. Just sand, paint, song and time outdoors." },
];

const About = () => {
  return (
    <>
      <PageHero
        eyebrow="Our story"
        title="Fourteen years of"
        highlight="growing little wings"
        description="What began in 2010 as one cottage classroom is now a quietly beloved community of over a thousand families — and counting."
        trail={[{ label: "Home", to: "/" }, { label: "About" }]}
      />

      {/* Story */}
      <section className="py-20 sm:py-24">
        <div className="container-tight grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <Reveal>
              <img src={classroom} alt="A BusyBees classroom" loading="lazy" className="rounded-[2rem] shadow-lift w-full aspect-[4/5] object-cover tilt-l" />
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              <span className="text-[11px] uppercase tracking-[0.28em] font-semibold text-honey-dark">How it started</span>
              <h2 className="mt-3 font-display text-4xl font-bold text-ink leading-tight">
                A small idea, built around <span className="marker-honey">small humans</span>.
              </h2>
              <div className="mt-6 space-y-5 text-muted-foreground leading-relaxed text-lg">
                <p>
                  BusyBees began in a sunlit cottage with eight curious toddlers, one very patient educator, and a
                  hand-painted bee on the door. We promised parents one thing: that learning here would never
                  feel like a factory.
                </p>
                <p>
                  Fourteen years on, that promise still shapes every classroom. Our teachers don't just deliver
                  lessons — they listen, observe, and design each day around the children in front of them.
                </p>
                <p className="font-hand text-2xl text-honey-dark">
                  We are still that same little hive. Just busier.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 sm:py-24 bg-cream">
        <div className="container-wide">
          <SectionHeading
            eyebrow="What we stand for"
            title="The four"
            highlight="bee values"
            description="Quiet principles that shape loud joy. These guide everything from snack time to circle time."
          />
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.07}>
                <div className="bg-card rounded-3xl p-7 border border-border shadow-soft h-full card-lift">
                  <v.icon className="h-8 w-8 text-honey-dark" />
                  <h3 className="mt-5 font-display text-xl font-bold text-ink">{v.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Principal's Desk */}
      <section className="py-24">
        <div className="container-wide grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 lg:order-2">
            <Reveal>
              <div className="relative">
                <div className="absolute -inset-4 bg-honey/30 rounded-[3rem] blur-2xl -z-10" />
                <img src={principal} alt="Principal Mrs. Anita Rao" loading="lazy" className="rounded-[2rem] shadow-lift w-full max-w-md mx-auto aspect-[4/5] object-cover" />
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-7 lg:order-1">
            <Reveal delay={0.1}>
              <span className="text-[11px] uppercase tracking-[0.28em] font-semibold text-honey-dark">From the Principal's desk</span>
              <h2 className="mt-3 font-display text-4xl font-bold text-ink leading-tight">
                "Childhood is short. <br /> Let's make it remarkable."
              </h2>
              <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed text-lg max-w-xl">
                <p>
                  When parents tour BusyBees, I always tell them the same thing: I'm not here to give your child a head
                  start. I'm here to give them a happy start.
                </p>
                <p>
                  Academics will come — they always do. What we protect, fiercely, is the joy of discovering. That's
                  the gift you cannot teach later.
                </p>
              </div>
              <div className="mt-8 flex items-center gap-4">
                <div>
                  <div className="font-display text-xl font-bold text-ink">Mrs. Anita Rao</div>
                  <div className="text-sm text-muted-foreground">Founder & Principal · M.Ed (Early Childhood)</div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
