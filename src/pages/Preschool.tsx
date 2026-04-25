import { Link } from "react-router-dom";
import {
  BookOpen,
  Palette,
  School,
  Trees,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Quote,
} from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/SectionHeading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import classroom from "@/assets/classroom.webp";
import garden from "@/assets/g-garden.jpg";
import reading from "@/assets/g-reading.jpg";
import paint from "@/assets/g-paint.webp";
import blocks from "@/assets/g-blocks.jpg";

const curriculumPoints = [
  "Combination of Montessori and play-way method aligned to a multi-age course",
  "Project-based studies to enhance kids' awareness of their surroundings",
  "Special emphasis on pre-writing, auditory and visual skill development",
  "Creative activities to explore the world through art, craft, music and drama",
  "Physical advancement activities for a healthy mind and body",
];

const facilities = [
  {
    icon: BookOpen,
    title: "Library",
    desc: "A dedicated library where children can borrow books to take home — building a lifelong friendship with stories.",
  },
  {
    icon: Palette,
    title: "Art Corner",
    desc: "A specially designed 'Art Corner' and 'Pretend Play' zone that satisfies curiosity and mirrors real-life experiences.",
  },
  {
    icon: School,
    title: "Classroom",
    desc: "Where all the action happens! Board displays, manipulative toys and age-appropriate media tools nurture decision-making and self-help skills.",
  },
  {
    icon: Trees,
    title: "Outdoor Play Area",
    desc: "A large, secure outdoor space with sand pit and play equipment — outdoor games are a daily part of our curriculum.",
  },
];

const swarmActivities = [
  { title: "Fine motor skills", desc: "Threading, puzzle solving, building blocks and Montessori material." },
  { title: "Vocabulary building", desc: "Show-and-tell, conversation time, letter games, storytelling and library time." },
  { title: "Creative expression", desc: "Individual & group artwork, varied art media and easel painting." },
  { title: "Imagination", desc: "Indoor games, doll house, pretend play and puppet shows." },
  { title: "Gross motor abilities", desc: "Running, jumping, skipping and climbing." },
  { title: "Pure joy!", desc: "Fireless cooking, splash pool, sand play, dance, music and masti." },
];

const Preschool = () => {
  return (
    <>
      <PageHero
        eyebrow="Ages 1.6 – 6"
        title="Preschool —"
        highlight="world of un-BEE-lievable dreams"
        description="A child-centric, play-based curriculum that blends Montessori with the play-way method — where little learners explore, create and grow."
        trail={[
          { label: "Home", to: "/" },
          { label: "Programs", to: "/programs" },
          { label: "Preschool" },
        ]}
      />

      {/* SECTION 1 — Image LEFT, content RIGHT */}
      <section className="py-16 sm:py-24">
        <div className="container-wide grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-6 order-1">
            <Reveal>
              <div className="relative">
                <img
                  src={classroom}
                  alt="A child-centric preschool classroom"
                  loading="lazy"
                  className="rounded-[2rem] shadow-lift w-full aspect-[4/5] object-cover"
                />
                <div className="absolute -bottom-6 -right-6 hidden md:flex h-24 w-24 rounded-full gradient-honey items-center justify-center shadow-honey animate-float">
                  <Sparkles className="h-10 w-10 text-ink" />
                </div>
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-6 order-2">
            <Reveal delay={0.1}>
              <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-honey-dark">
                01 · Our Curriculum
              </span>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-ink leading-tight">
                A good curriculum is{" "}
                <span className="marker-honey">child-centric & play-based</span>
              </h2>
              <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
                Our curriculum focuses on the beginning stages of writing,
                pre-reading skills, concrete math and a curious scientific mind.
              </p>
              <ul className="mt-8 space-y-4">
                {curriculumPoints.map((p) => (
                  <li key={p} className="flex gap-3 text-ink">
                    <CheckCircle2 className="h-5 w-5 text-honey-dark shrink-0 mt-1" />
                    <span className="leading-relaxed">{p}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SECTION 2 — Image RIGHT, content LEFT */}
      <section className="py-16 sm:py-24 bg-honeycomb-soft">
        <div className="container-wide grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1">
            <Reveal>
              <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-honey-dark">
                02 · Our Approach
              </span>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-ink leading-tight">
                Five programs, one{" "}
                <span className="marker-honey">whole-hearted</span> method
              </h2>
              <div className="mt-6 space-y-5 text-muted-foreground leading-relaxed text-lg">
                <p>
                  We conduct <strong className="text-ink">5 programs</strong> as
                  part of our preschool curriculum, built around the{" "}
                  <strong className="text-ink">project method</strong> — a
                  whole-hearted, purposeful activity rooted in the social
                  environment around the child.
                </p>
                <p>
                  We're lucky to have a large, secure outdoor area where
                  children move freely between indoors and outside — for both
                  play and learning.{" "}
                  <strong className="text-ink">Children learn by doing!</strong>{" "}
                  We offer hands-on materials and meaningful choices across
                  literacy, math, science, social skills, phonics and creative
                  art.
                </p>
                <p>
                  Our school is a fun place comprising of various sections and
                  rooms which allow each child to explore themselves and be
                  part of the <em>Buzzy-ness</em>.
                </p>
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-6 order-1 lg:order-2">
            <Reveal delay={0.1}>
              <div className="grid grid-cols-2 gap-4">
                <img
                  src={garden}
                  alt="Outdoor learning at Busy Bees"
                  loading="lazy"
                  className="rounded-3xl shadow-soft w-full aspect-[3/4] object-cover tilt-l"
                />
                <img
                  src={blocks}
                  alt="Hands-on play activities"
                  loading="lazy"
                  className="rounded-3xl shadow-soft w-full aspect-[3/4] object-cover mt-10 tilt-r"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SECTION 3 — Image LEFT, content RIGHT */}
      <section className="py-16 sm:py-24">
        <div className="container-wide grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-5 order-1 lg:sticky lg:top-24">
            <Reveal>
              <img
                src={reading}
                alt="Library and reading nook"
                loading="lazy"
                className="rounded-[2rem] shadow-lift w-full aspect-[4/5] object-cover"
              />
              <div className="mt-6 bg-cream rounded-2xl p-6 border border-border">
                <Quote className="h-6 w-6 text-honey" />
                <p className="mt-2 font-display text-lg text-ink italic leading-snug">
                  "Spaces designed for little explorers — every corner invites
                  curiosity and choice."
                </p>
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-7 order-2">
            <Reveal delay={0.1}>
              <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-honey-dark">
                03 · Our Facilities
              </span>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-ink leading-tight">
                Rooms & corners that{" "}
                <span className="marker-honey">invite wonder</span>
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Carefully curated spaces that mirror real-life experiences and
                support every kind of learner.
              </p>
            </Reveal>
            <div className="mt-8 grid sm:grid-cols-2 gap-5">
              {facilities.map((f, i) => (
                <Reveal key={f.title} delay={0.05 * i}>
                  <Card className="card-lift bg-card border-border rounded-2xl h-full">
                    <CardContent className="p-6">
                      <div className="h-11 w-11 rounded-xl gradient-honey flex items-center justify-center shadow-honey">
                        <f.icon className="h-5 w-5 text-ink" />
                      </div>
                      <h3 className="mt-4 font-display text-xl font-bold text-ink">
                        {f.title}
                      </h3>
                      <p className="mt-2 text-muted-foreground leading-relaxed">
                        {f.desc}
                      </p>
                    </CardContent>
                  </Card>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — Image RIGHT, content LEFT */}
      <section className="py-16 sm:py-24 bg-honeycomb-soft">
        <div className="container-wide grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-7 order-2 lg:order-1">
            <Reveal>
              <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-honey-dark">
                04 · Daily Life
              </span>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-ink leading-tight">
                A <span className="marker-honey">swarm</span> of activities
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed max-w-2xl">
                All activities are carefully planned to meet the needs of every
                individual child. Here's a peek at what fills a typical Busy
                Bees day.
              </p>
            </Reveal>
            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {swarmActivities.map((a, i) => (
                <Reveal key={a.title} delay={0.05 * i}>
                  <div className="group flex gap-4 rounded-2xl bg-card border border-border p-5 hover:border-honey hover:shadow-honey transition-all duration-300">
                    <div className="h-9 w-9 rounded-lg bg-honey/15 flex items-center justify-center shrink-0 group-hover:bg-honey/30 transition-colors">
                      <Sparkles className="h-4 w-4 text-honey-dark" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-bold text-ink">
                        {a.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mt-1">
                        {a.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <div className="lg:col-span-5 order-1 lg:order-2">
            <Reveal delay={0.1}>
              <div className="relative">
                <img
                  src={paint}
                  alt="Children enjoying creative activities"
                  loading="lazy"
                  className="rounded-[2rem] shadow-lift w-full aspect-[4/5] object-cover"
                />
                <div className="absolute -top-6 -left-6 hidden md:block bg-card rounded-2xl border border-border shadow-soft p-4 max-w-[180px]">
                  <p className="font-hand text-2xl text-honey-dark leading-tight">
                    Loads of fun!
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Every single day 🐝
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container-tight">
          <Reveal>
            <div className="bg-cream rounded-[2rem] p-10 sm:p-14 border border-border shadow-soft text-center">
              <h3 className="font-display text-3xl sm:text-4xl font-bold text-ink">
                Come see the buzz for yourself
              </h3>
              <p className="mt-3 text-lg text-muted-foreground max-w-xl mx-auto">
                Book a tour or ask us anything about our preschool programme.
                We'd love to meet your little one.
              </p>
              <div className="mt-7 flex flex-wrap gap-3 justify-center">
                <Button asChild className="rounded-full h-12 px-7 shadow-honey">
                  <Link to="/contact">
                    Enquire now <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="rounded-full h-12 px-7">
                  <Link to="/programs">Explore other programs</Link>
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
};

export default Preschool;
