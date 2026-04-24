import { PageHero } from "@/components/site/PageHero";
import { Reveal, SectionHeading } from "@/components/site/SectionHeading";
import { Heart, Compass, Users, Leaf, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import classroom from "@/assets/aboutbusybuzz.jfif";
import baby from "@/assets/about_bussy_small.jpg";

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
        eyebrow="About Busy Bees"
        title="Welcome to the"
        highlight="HIVE!"
        description="A preschool is your child's first stride away from home — exploring a new world, freedom, and the joy of belonging. We make that transition gentle, warm, and unforgettable."
        trail={[{ label: "Home", to: "/" }, { label: "About" }]}
      />

      {/* Welcome to the Hive — main about content */}
      <section className="relative py-20 sm:py-24 bg-honeycomb-soft overflow-hidden">
        <div className="container-tight grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Image — appears first on mobile */}
          <div className="lg:col-span-5 lg:order-2 order-1">
            <Reveal>
              <div className="relative">
                <div className="absolute -inset-4 bg-honey/25 rounded-[3rem] blur-2xl -z-10" />
                <img
                  src={classroom}
                  alt="Children at Busy Bees classroom"
                  loading="lazy"
                  className="rounded-[2rem] shadow-lift w-full aspect-[4/5] object-cover tilt-r"
                />
                <img
                  src={baby}
                  alt="Outdoor play garden"
                  loading="lazy"
                  className="hidden sm:block absolute -bottom-10 -left-10 w-44 h-44 object-cover rounded-3xl shadow-lift border-4 border-card tilt-l"
                />
              </div>
            </Reveal>
          </div>

          {/* Content */}
          <div className="lg:col-span-7 lg:order-1 order-2">
            <Reveal delay={0.1}>
              <span className="text-[11px] uppercase tracking-[0.28em] font-semibold text-honey-dark">
                Our story
              </span>
              <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold text-ink leading-[1.1]">
                Welcome to the <span className="marker-honey">HIVE!</span>
              </h2>

              <div className="mt-7 space-y-5 text-muted-foreground text-lg leading-relaxed">
                <p>
                  A preschool is your child's first stride away from home — exploring a new
                  world, freedom, and experiencing livelihood. We at <span className="font-semibold text-ink">Busy Bees</span> help
                  this transition be smoother and turn it into a lifelong experience.
                </p>

                <p className="font-hand text-2xl text-honey-dark leading-snug">
                  The little ones enjoy the feeling of BEE Active — BEE Bold — BEE Smart — BEE Busy,
                  with a swarm of activities every single day.
                </p>

                <p>
                  Busy Bees Pre-School is a place where kids play, learn and love the schooling
                  experience. We provide high-quality learning through the{" "}
                  <span className="marker-honey font-semibold text-ink">play-way method</span>{" "}
                  for children aged 1.6 years up to school age.
                </p>

                <p>
                  Every child has different needs, and we attend to them with care. Our class sizes
                  are small to ensure individual attention, and classrooms are designed specifically
                  for each age group — colourful, bright, airy, with a large enclosed outdoor play
                  area and garden. We provide a{" "}
                  <span className="marker-coral font-semibold text-ink">safe, secure and stimulating environment</span>{" "}
                  where children feel happy and confident.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Growth + teachers */}
      <section className="py-20 sm:py-24">
        <div className="container-tight grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <Reveal>
            <span className="text-[11px] uppercase tracking-[0.28em] font-semibold text-honey-dark">
              Founded in 2012
            </span>
            <h3 className="mt-3 font-display text-3xl sm:text-4xl font-bold text-ink leading-tight">
              Growing in leaps and bounds, every year.
            </h3>
            <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
              The school was founded in 2012 and has grown steadily ever since. We provide
              programmes for Playgroup, Nursery, Jr KG and Sr KG. As part of our customer-first
              approach, we now also offer specialised services such as{" "}
              <span className="font-semibold text-ink">Daycare</span>,{" "}
              <span className="font-semibold text-ink">BuzzyClub</span> and{" "}
              <span className="font-semibold text-ink">Toddler Club</span>.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <span className="text-[11px] uppercase tracking-[0.28em] font-semibold text-honey-dark">
              Our teachers
            </span>
            <h3 className="mt-3 font-display text-3xl sm:text-4xl font-bold text-ink leading-tight">
              Trained, patient & passionate.
            </h3>
            <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
              Teachers play a crucial role in child development, especially in the preschool years.
              Ours are specially trained in pre-primary education and bring the experience needed
              to truly understand children. They look after the{" "}
              <span className="marker-honey font-semibold text-ink">all-round development</span>{" "}
              of every child and are passionate about being part of their wonderful journey.
            </p>
          </Reveal>
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

      {/* CTA to Principal's Desk */}
      <section className="py-20">
        <div className="container-tight">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-honey-light/40 via-card to-cream border border-border p-10 sm:p-14 shadow-soft text-center">
              <span className="text-[11px] uppercase tracking-[0.28em] font-semibold text-honey-dark">
                A message from our founder
              </span>
              <h3 className="mt-3 font-display text-3xl sm:text-4xl font-bold text-ink">
                Read the <span className="marker-honey">Principal's Desk</span>
              </h3>
              <p className="mt-4 text-muted-foreground max-w-xl mx-auto leading-relaxed">
                Hear directly from Deepa Jawadekar — our founder, on what drew her to early years
                education and what she hopes for every child who walks through our doors.
              </p>
              <Button asChild size="lg" className="mt-7 rounded-full">
                <Link to="/principal-desk">
                  Visit Principal's Desk <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
};

export default About;
