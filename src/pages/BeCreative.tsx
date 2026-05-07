import { Link } from "react-router-dom";
import { CheckCircle2, Palette, Quote, ArrowRight, Sparkles } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/SectionHeading";
import { Seo, breadcrumbSchema } from "@/components/site/Seo";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const grades = [
  {
    pillClass: "bg-honey/25 text-honey-dark",
    eyebrow: "Scribblers · Ages 3–7",
    desc: "Little ones explore thoughts and freedom through sketches and drawings.",
    items: [
      "Drawing using shapes & alphabets",
      "Pattern making",
      "Pastel colours",
      "Drawing & craft activities",
    ],
  },
  {
    pillClass: "bg-emerald-100 text-emerald-800",
    eyebrow: "Doodlers · Ages 8–12",
    desc: "Emphasis on fundamentals of art and various forms — children express themselves freely.",
    items: [
      "Elements & principles of art",
      "Holding the pencil correctly",
      "Creating forms",
      "Fundamental strokes",
      "Seeing objects as values and shapes",
    ],
  },
  {
    pillClass: "bg-sky-100 text-sky-800",
    eyebrow: "The Sketchers · Ages 12–16",
    desc: "Specialised drawing, media, and preparation for government Elementary and Intermediate drawing exams.",
    items: [
      "Water & acrylic colours",
      "Still life",
      "Nature drawing",
      "Spacing & layout",
      "Human figure basics",
    ],
  },
];

const workshops = [
  "Canvas Painting",
  "Portrait Painting",
  "Nature & Object Studies",
  "Murals & 3D Design",
  "Glass Painting",
  "Fabric Painting",
  "Pot Painting",
  "Warli Painting",
  "Calligraphy",
];

const BeCreative = () => {
  return (
    <>
      <Seo
        title="Be Creative — Art & Drawing Classes for Kids | Busy Bees Nigdi Pune"
        description="Be Creative at Busy Bees offers drawing and art classes for ages 3–16 in Nigdi Pradhikaran, Pune. Scribblers, Doodlers, Sketchers grades plus advanced workshops in Warli, calligraphy and more."
        path="/programs/be-creative"
        keywords={[
          "art class kids Nigdi",
          "drawing class Pradhikaran Pune",
          "be creative preschool",
          "kids painting class Nigdi",
          "warli painting class Pune",
          "calligraphy kids Nigdi",
        ]}
        jsonLd={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Programs", path: "/programs" },
          { name: "Be Creative", path: "/programs/be-creative" },
        ])}
      />
      <PageHero
        eyebrow="Ages 3 – 16"
        title="Be Creative —"
        highlight="imagination wonder"
        description="Developing exploratory skills by combining artistic quotient, intelligence, cognitive ability and intuition. We support government elementary and intermediate exams and host an annual drawing exhibition."
        trail={[
          { label: "Home", to: "/" },
          { label: "Programs", to: "/programs" },
          { label: "Be Creative" },
        ]}
      />

      {/* Grades */}
      <section className="py-16 sm:py-24">
        <div className="container-wide">
          <Reveal>
            <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-honey-dark">
              01 · Courses
            </span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-ink leading-tight">
              Courses by <span className="marker-honey">Age Group</span>
            </h2>
          </Reveal>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {grades.map((g, i) => (
              <Reveal key={g.eyebrow} delay={0.05 * i}>
                <Card className="card-lift bg-card border-border rounded-2xl h-full">
                  <CardContent className="p-7">
                    <span
                      className={`inline-block rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide uppercase ${g.pillClass}`}
                    >
                      {g.eyebrow}
                    </span>
                    <p className="mt-5 text-muted-foreground leading-relaxed">
                      {g.desc}
                    </p>
                    <h4 className="mt-6 text-sm font-semibold tracking-wide uppercase text-ink">
                      What we cover
                    </h4>
                    <ul className="mt-3 space-y-2">
                      {g.items.map((it) => (
                        <li key={it} className="flex gap-2.5 text-ink">
                          <CheckCircle2 className="h-4 w-4 text-honey-dark shrink-0 mt-1" />
                          <span className="leading-relaxed text-sm">{it}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Workshops */}
      <section className="py-16 sm:py-24 bg-honeycomb-soft">
        <div className="container-wide">
          <Reveal>
            <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-honey-dark">
              02 · Beyond the Basics
            </span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-ink leading-tight">
              Advanced <span className="marker-honey">Workshops</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
              Specialised techniques and traditional art forms — taught by
              practising artists.
            </p>
          </Reveal>
          <div className="mt-10 flex flex-wrap gap-3">
            {workshops.map((w, i) => (
              <Reveal key={w} delay={0.03 * i}>
                <span className="inline-flex items-center gap-2 rounded-full bg-card border border-border px-5 py-2.5 text-ink hover:border-honey hover:shadow-honey transition-all">
                  <Palette className="h-4 w-4 text-honey-dark" />
                  {w}
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Closing quote */}
      <section className="py-20">
        <div className="container-tight">
          <Reveal>
            <blockquote className="border-l-4 border-honey pl-6 py-2 italic font-display text-2xl sm:text-3xl text-ink leading-snug">
              <Quote className="h-7 w-7 text-honey mb-3" />
              "Every child is an artist — we just hand them the brush."
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-ink text-cream">
        <div className="container-tight text-center">
          <Reveal>
            <Sparkles className="h-8 w-8 text-honey mx-auto" />
            <h3 className="mt-3 font-display text-3xl sm:text-4xl font-bold">
              Start your child's creative journey
            </h3>
            <p className="mt-3 text-lg text-cream/80 max-w-xl mx-auto">
              Discover the artist in every child — explore our age-grouped art programmes.
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

export default BeCreative;
