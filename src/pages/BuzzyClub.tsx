import { Link } from "react-router-dom";
import {
  CheckCircle2,
  BookOpenCheck,
  FlaskConical,
  Dumbbell,
  Quote,
  ArrowRight,
} from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/SectionHeading";
import { Seo, breadcrumbSchema } from "@/components/site/Seo";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const objectives = [
  "Build a fit and healthier body",
  "Develop co-scholastic skills for grooming",
  "Grow solution-finding ability and aptitude for advanced subjects",
  "Sharpen analytical and reasoning skills",
];

const programmes = [
  {
    icon: BookOpenCheck,
    title: "Phonics",
    desc: "A structured approach to reading fluency covering vocabulary, comprehension, grammar, pronunciation and writing — taught playfully through alphabet cards, dominos and worksheets.",
  },
  {
    icon: FlaskConical,
    title: "Science Club",
    desc: "Hands-on exploration of physics, chemistry and biology basics — magnetism, gravity, shadow and air pressure brought to life through experiments. Students build their own scientific models.",
  },
  {
    icon: Dumbbell,
    title: "EnerGym",
    desc: "Fitness as a way of life, in association with Koya Fitness Academy. Builds endurance, flexibility, strength and stamina through gymnastics and yoga — founded by Mrs Abhishri Rajput, multi-award winning gymnastics champion.",
  },
];

const parentLoves = [
  "Shapes life skills via imagination and experimentation",
  "Develops thinking and emotional intelligence together",
  "Fun-filled exhibits and toys to demonstrate learned methods",
  "Flexible timings aligned with parent schedules",
  "Phased growth tracking with periodic parent discussions",
  "Programmes designed for all kids, all ages",
];

const BuzzyClub = () => {
  return (
    <>
      <Seo
        title="BuzzyClub — Skills Beyond the Classroom | Busy Bees Preschool Nigdi"
        description="BuzzyClub at Busy Bees Nigdi offers Phonics, Science Club and EnerGym fitness for early learners. Build sharper minds and stronger bodies in Nigdi Pradhikaran, Pune."
        path="/programs/buzzyclub"
        keywords={[
          "buzzyclub preschool Nigdi",
          "phonics class Nigdi Pune",
          "science club kids Pradhikaran",
          "after school activity Nigdi",
          "EnerGym fitness kids Pune",
        ]}
        jsonLd={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Programs", path: "/programs" },
          { name: "BuzzyClub", path: "/programs/buzzyclub" },
        ])}
      />
      <PageHero
        eyebrow="Beyond the Classroom"
        title="BuzzyClub —"
        highlight="beyond classrooms"
        description="Building stronger bodies, sharper minds and curious hearts through specialised programmes designed for early learners."
        trail={[
          { label: "Home", to: "/" },
          { label: "Programs", to: "/programs" },
          { label: "BuzzyClub" },
        ]}
      />

      {/* Objectives */}
      <section className="py-16 sm:py-24">
        <div className="container-wide">
          <Reveal>
            <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-honey-dark">
              01 · Our Objectives
            </span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-ink leading-tight max-w-3xl">
              Goals that <span className="marker-honey">grow with them</span>
            </h2>
          </Reveal>
          <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-5">
            {objectives.map((o, i) => (
              <Reveal key={o} delay={0.05 * i}>
                <Card className="card-lift bg-card border-border rounded-2xl h-full">
                  <CardContent className="p-6">
                    <div className="h-11 w-11 rounded-xl gradient-honey flex items-center justify-center shadow-honey">
                      <CheckCircle2 className="h-5 w-5 text-ink" />
                    </div>
                    <p className="mt-4 text-ink leading-relaxed font-medium">{o}</p>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Signature programmes */}
      <section className="py-16 sm:py-24 bg-honeycomb-soft">
        <div className="container-wide">
          <Reveal>
            <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-honey-dark">
              02 · Signature Programmes
            </span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-ink leading-tight">
              Three pillars, one{" "}
              <span className="marker-honey">curious child</span>
            </h2>
          </Reveal>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {programmes.map((p, i) => (
              <Reveal key={p.title} delay={0.05 * i}>
                <Card className="card-lift bg-card border-border rounded-2xl h-full">
                  <CardContent className="p-7">
                    <div className="h-12 w-12 rounded-xl gradient-honey flex items-center justify-center shadow-honey">
                      <p.icon className="h-6 w-6 text-ink" />
                    </div>
                    <h3 className="mt-5 font-display text-2xl font-bold text-ink">
                      {p.title}
                    </h3>
                    <p className="mt-3 text-muted-foreground leading-relaxed">
                      {p.desc}
                    </p>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why parents love */}
      <section className="py-16 sm:py-24">
        <div className="container-wide">
          <Reveal>
            <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-honey-dark">
              03 · Why Parents Love It
            </span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-ink leading-tight max-w-3xl">
              Why parents love{" "}
              <span className="marker-honey">BuzzyClub</span>
            </h2>
          </Reveal>
          <ul className="mt-10 grid sm:grid-cols-2 gap-x-10 gap-y-4 max-w-4xl">
            {parentLoves.map((p, i) => (
              <Reveal key={p} delay={0.04 * i}>
                <li className="flex gap-3 text-ink">
                  <CheckCircle2 className="h-5 w-5 text-honey-dark shrink-0 mt-1" />
                  <span className="leading-relaxed">{p}</span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Closing quote */}
      <section className="pb-20">
        <div className="container-tight">
          <Reveal>
            <blockquote className="border-l-4 border-honey pl-6 py-2 italic font-display text-2xl sm:text-3xl text-ink leading-snug">
              <Quote className="h-7 w-7 text-honey mb-3" />
              "Decreased hyperactivity, stronger immunity, sharper thinking — and a whole lot of fun."
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-ink text-cream">
        <div className="container-tight text-center">
          <Reveal>
            <h3 className="font-display text-3xl sm:text-4xl font-bold">
              Enrol in BuzzyClub today
            </h3>
            <p className="mt-3 text-lg text-cream/80 max-w-xl mx-auto">
              Give your child a head-start beyond the classroom.
            </p>
            <div className="mt-7 flex flex-wrap gap-3 justify-center">
              <Button asChild className="rounded-full h-12 px-7 shadow-honey">
                <Link to="/contact">
                  Enquire now <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="rounded-full h-12 px-7 bg-transparent border-cream/40 text-cream hover:bg-cream hover:text-ink"
              >
                <Link to="/admissions">Apply for admission</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
};

export default BuzzyClub;
