import { useParams, Link, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";
import { ArrowLeft, CheckCircle2, Sparkles, Quote } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/SectionHeading";
import { Seo, breadcrumbSchema } from "@/components/site/Seo";
import { BUSINESS } from "@/lib/business";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import classroom from "@/assets/classroom.webp";
import paint from "@/assets/g-paint.webp";
import garden from "@/assets/g-garden.jpg";
import reading from "@/assets/g-reading.jpg";
import stage from "@/assets/g-stage.jpg";

const Preschool = lazy(() => import("./Preschool"));
const Daycare = lazy(() => import("./Daycare"));

type Section =
  | { kind: "para"; text: string }
  | { kind: "heading"; text: string }
  | { kind: "list"; items: string[] }
  | { kind: "cards"; items: { title: string; desc: string }[] }
  | { kind: "quote"; text: string };

type Program = {
  eyebrow: string;
  title: string;
  highlight: string;
  desc: string;
  image: string;
  intro: string;
  sections: Section[];
  features: string[];
  closingQuote: string;
};

const data: Record<string, Program> = {
  preschool: {
    eyebrow: "Ages 1.6 – 6",
    title: "Preschool —",
    highlight: "world of un-BEE-lievable dreams",
    desc: "A child-centric, play-based curriculum that blends Montessori with the play-way method.",
    image: classroom,
    intro:
      "We believe a good curriculum is child-centric and play-based. Our programme nurtures pre-reading, early writing, concrete math and a curious scientific mind — all through joyful, hands-on learning.",
    sections: [
      { kind: "heading", text: "Our curriculum highlights" },
      {
        kind: "list",
        items: [
          "Combination of Montessori and play-way method aligned to a multi-age course",
          "Project-based studies to enhance awareness of the world around them",
          "Special emphasis on pre-writing, auditory and visual skills",
          "Creative exploration through art, craft, music and drama",
          "Physical advancement activities for a healthy mind and body",
        ],
      },
      { kind: "heading", text: "Spaces designed for little explorers" },
      {
        kind: "para",
        text: "Children learn by doing. Our school is a fun place full of carefully curated corners that invite curiosity, choice and creativity.",
      },
      {
        kind: "cards",
        items: [
          {
            title: "Library",
            desc: "A dedicated reading nook where children can borrow books to take home — building a lifelong friendship with stories.",
          },
          {
            title: "Art Corner",
            desc: "A 'pretend play' and art space that satisfies curiosity and mirrors real-life experiences.",
          },
          {
            title: "Classroom",
            desc: "Where the action happens — board displays, manipulative toys and age-appropriate media tools support decision-making and self-help.",
          },
          {
            title: "Outdoor Play Area",
            desc: "A large outdoor space with sand pit and play equipment — outdoor games are a daily part of our curriculum.",
          },
        ],
      },
      { kind: "heading", text: "A swarm of activities" },
      {
        kind: "list",
        items: [
          "Threading, puzzles, building blocks and Montessori material for fine motor skills",
          "Show-and-tell, conversation time, letter games and storytelling for vocabulary",
          "Individual & group art, easel painting and varied media for creative expression",
          "Indoor games, doll house, pretend play and puppet shows to spark imagination",
          "Running, jumping, skipping and climbing to develop gross motor abilities",
          "Fireless cooking, splash pool, sand play, dance and music for sheer joy!",
        ],
      },
    ],
    features: [
      "Play-way & Montessori blend",
      "Small batch sizes",
      "Project-based learning",
      "Daily outdoor time",
      "Parent-teacher portfolios",
    ],
    closingQuote:
      "Children learn by doing — we simply give them the space, materials and permission to wonder.",
  },
  daycare: {
    eyebrow: "Ages 1.5 – 6",
    title: "Daycare —",
    highlight: "home of buzz-worthy bees",
    desc: "A safe, hygienic, child-friendly second home — open 9:00 AM to 8:00 PM for working parents.",
    image: garden,
    intro:
      "We believe daycare should feel like a second home. Our aim is to provide a safe, hygienic and child-friendly environment where every little one feels they belong.",
    sections: [
      { kind: "heading", text: "Built for working parents" },
      {
        kind: "para",
        text: "We support working parents with extended daycare hours from 9:00 AM to 8:00 PM, with various batches available — perfectly suited for the IT industry and other professionals balancing work and family.",
      },
      { kind: "heading", text: "Distinctive features" },
      {
        kind: "cards",
        items: [
          { title: "Homely ambience", desc: "Warm interiors and a familiar, comforting environment that feels like home." },
          { title: "Safe & secure", desc: "Strict safety protocols, trained caregivers and a child-first approach throughout the day." },
          { title: "Extended timing", desc: "Open 9:00 AM – 8:00 PM with flexible batch options for busy parents." },
          { title: "Age-appropriate play", desc: "Curated toys and brands tailored for infants and toddlers across age bands." },
          { title: "Designed by experts", desc: "Daily activities planned in consultation with child psychologists." },
          { title: "Healthy ratios", desc: "Carefully managed teacher and support staff to children ratio." },
        ],
      },
      { kind: "heading", text: "Parents stay in the loop" },
      {
        kind: "list",
        items: [
          "Open day sessions to discuss your child's development",
          "Regular updates via photos and messages so you don't miss a moment",
          "Daycare integrated with regular school activities",
        ],
      },
    ],
    features: [
      "9 AM – 8 PM extended hours",
      "Trained caregivers",
      "Child psychologist-led plans",
      "Daily parent updates",
      "Hygienic, secure spaces",
    ],
    closingQuote: "A second home where the only homework is having fun.",
  },
  buzzyclub: {
    eyebrow: "Beyond the classroom",
    title: "BuzzyClub —",
    highlight: "knowledge beyond classrooms",
    desc: "Skill-building activities that grow body and mind — phonics, science, fitness and more.",
    image: reading,
    intro:
      "BuzzyClub goes beyond the classroom — building stronger bodies, sharper minds and curious hearts through specialised programmes designed for early learners.",
    sections: [
      { kind: "heading", text: "Our objectives" },
      {
        kind: "list",
        items: [
          "Build a fit and healthier body",
          "Develop co-scholastic skills for grooming",
          "Grow solution-finding ability and an aptitude for advanced subjects",
          "Sharpen analytical and reasoning skills",
        ],
      },
      { kind: "heading", text: "Signature programmes" },
      {
        kind: "cards",
        items: [
          {
            title: "Phonics",
            desc: "A structured approach to reading fluency covering vocabulary, comprehension, grammar, pronunciation and writing — taught playfully through alphabet cards, dominos and worksheets.",
          },
          {
            title: "Science Club",
            desc: "Hands-on exploration of physics, chemistry and biology basics — magnetism, gravity, shadow and air pressure brought to life through experiments.",
          },
          {
            title: "EnerGym",
            desc: "Fitness as a way of life, in association with Koya Fitness Academy. Builds endurance, flexibility, strength and stamina through gymnastics and yoga.",
          },
        ],
      },
      { kind: "heading", text: "Why parents love BuzzyClub" },
      {
        kind: "list",
        items: [
          "Shapes life skills via imagination and experimentation",
          "Develops thinking and emotional intelligence together",
          "Fun-filled exhibits and toys to demonstrate learned methods",
          "Flexible timings aligned with parent schedules",
          "Phased growth tracking with periodic parent discussions",
          "Programs for all kids, all ages",
        ],
      },
    ],
    features: [
      "Phonics programme",
      "Science Club",
      "EnerGym fitness",
      "Flexible timings",
      "Periodic growth reviews",
    ],
    closingQuote: "Decreased hyperactivity, stronger immunity, sharper thinking — and a whole lot of fun.",
  },
  "be-creative": {
    eyebrow: "Ages 3 – 16",
    title: "Be Creative —",
    highlight: "let imagination wonder",
    desc: "Drawing and art classes that grow with your child — from joyful scribbles to advanced techniques.",
    image: paint,
    intro:
      "Be-Creative builds exploratory skills by combining artistic quotient, intelligence, cognitive ability and intuition. We support elementary and intermediate exams and host an annual drawing exhibition.",
    sections: [
      { kind: "heading", text: "Courses by age group" },
      {
        kind: "cards",
        items: [
          {
            title: "Scribblers · 3–7 years",
            desc: "Little ones explore thoughts and freedom through sketches. We cover drawing using shapes and alphabets, pattern making, pastel colours, and craft activities.",
          },
          {
            title: "Doodlers · 8–12 years",
            desc: "Fundamentals of art and various forms — elements and principles of art, holding the pencil, creating forms, fundamental strokes, and seeing objects as values and shapes.",
          },
          {
            title: "The Sketchers · 12–16 years",
            desc: "Specialised drawing, media and exam preparation — water and acrylic colours, still life, nature drawing, spacing & layout, and human figure basics.",
          },
        ],
      },
      { kind: "heading", text: "Advanced workshops" },
      {
        kind: "list",
        items: [
          "Canvas Painting",
          "Portrait Painting",
          "Nature and Object studies",
          "Murals and 3D Design",
          "Glass Painting",
          "Fabric Painting",
          "Pot Painting",
          "Warli Painting",
          "Calligraphy",
        ],
      },
    ],
    features: [
      "Three age-based grades",
      "Govt. exam preparation",
      "Annual drawing exhibition",
      "Specialised workshops",
      "Warli & calligraphy",
    ],
    closingQuote: "Every child is an artist — we just hand them the brush.",
  },
  "summer-camps": {
    eyebrow: "Seasonal · Ages 2+",
    title: "Summer Camps —",
    highlight: "fun all the way",
    desc: "Themed camps full of art, drama, music, field trips and fireless cooking.",
    image: stage,
    intro:
      "Our summer camps are the highlight of the season — a colourful mix of art, performance, exploration and play, designed for every age group.",
    sections: [
      { kind: "heading", text: "What's in the mix" },
      {
        kind: "cards",
        items: [
          { title: "Art & Crafts", desc: "Hands-on creating with diverse materials and techniques." },
          { title: "Drama & Storytelling", desc: "Role-play, character work and tales that come alive." },
          { title: "Music & Dance", desc: "Rhythm, movement and joyful self-expression." },
          { title: "Field Trips", desc: "Real-world adventures that broaden young horizons." },
          { title: "Fireless Cooking", desc: "Safe, no-flame recipes that build independence." },
        ],
      },
      { kind: "heading", text: "Designed for every age" },
      {
        kind: "para",
        text: "For ages 2–6, activities lean towards art, craft and music. For older children, we focus more on drama, storytelling and skill workshops. We also partner with various clubs for day-wise outdoor sessions.",
      },
      { kind: "heading", text: "Specialised expert sessions" },
      {
        kind: "list",
        items: [
          "One- or two-day specialised sessions in dance and yoga",
          "Conducted by expert teachers in their respective fields",
          "A taste of skills children may want to pursue later",
          "Included as part of the regular camp programme",
        ],
      },
      { kind: "heading", text: "The grand finale" },
      {
        kind: "para",
        text: "Little ones explore poetry, word games, role-play and puzzles. We also run get-crafty sessions, knot-tying, map-making and more — culminating in 'A Performance' featuring music, dance and drama as the camp's grand finale.",
      },
    ],
    features: [
      "Age-grouped activities",
      "Field trips included",
      "Expert-led workshops",
      "Grand finale showcase",
      "Outdoor partner clubs",
    ],
    closingQuote: "Six weeks of summer your child will still talk about in October.",
  },
};

const ProgramDetail = () => {
  const { slug = "" } = useParams();

  // Dedicated redesigned pages override the generic template
  if (slug === "preschool") {
    return (
      <Suspense fallback={null}>
        <Preschool />
      </Suspense>
    );
  }
  if (slug === "daycare") {
    return (
      <Suspense fallback={null}>
        <Daycare />
      </Suspense>
    );
  }

  const p = data[slug];
  if (!p) return <Navigate to="/programs" replace />;

  const seoMap: Record<string, { title: string; description: string; keywords: string[] }> = {
    buzzyclub: {
      title: "BuzzyClub After-School Enrichment — Busy Bees Preschool Nigdi",
      description: "BuzzyClub at Busy Bees Nigdi Pradhikaran — after-school programme with phonics, science club and EnerGym fitness for children aged 5–8 years.",
      keywords: ["after school programme Nigdi", "enrichment club Pune", "kids phonics Nigdi", "after school activities Pradhikaran"],
    },
    "be-creative": {
      title: "Be Creative Weekend Art Studio — Busy Bees Preschool Nigdi",
      description: "Weekend art sessions at Busy Bees Preschool Nigdi — drawing, painting, calligraphy and Warli for children aged 3 and above.",
      keywords: ["kids art class Nigdi", "weekend art studio Pune", "children creative workshop Pradhikaran"],
    },
    "summer-camps": {
      title: "Summer Camps for Kids in Nigdi Pune — Busy Bees",
      description: "Themed summer camps at Busy Bees Preschool, Nigdi Pradhikaran Pune — art, drama, music, field trips and fireless cooking for ages 2+.",
      keywords: ["summer camp Nigdi Pune", "kids summer camp Pradhikaran", "summer programme Pune children"],
    },
  };

  const titleClean = p.title.replace(/—.*/, "").trim();
  const pageSeo = seoMap[slug] ?? {
    title: `${titleClean} — Busy Bees Preschool Nigdi`,
    description: p.desc ?? BUSINESS.description,
    keywords: ["preschool programme Nigdi", "Busy Bees Preschool Pune"],
  };

  return (
    <>
      <Seo
        title={pageSeo.title}
        description={pageSeo.description}
        path={`/programs/${slug}`}
        keywords={pageSeo.keywords}
        jsonLd={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Programs", path: "/programs" },
          { name: titleClean, path: `/programs/${slug}` },
        ])}
      />
      <PageHero
        eyebrow={p.eyebrow}
        title={p.title}
        highlight={p.highlight}
        description={p.desc}
        trail={[
          { label: "Home", to: "/" },
          { label: "Programs", to: "/programs" },
          { label: titleClean },
        ]}
      />

      {/* Intro + image */}
      <section className="py-16 sm:py-20">
        <div className="container-wide grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-7 order-2 lg:order-1">
            <Reveal>
              <p className="font-display text-2xl sm:text-3xl text-ink leading-snug">
                {p.intro}
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mt-8 flex flex-wrap gap-2">
                {p.features.map((f) => (
                  <span
                    key={f}
                    className="inline-flex items-center gap-1.5 rounded-full bg-cream border border-border px-4 py-1.5 text-sm text-ink"
                  >
                    <Sparkles className="h-3.5 w-3.5 text-honey-dark" />
                    {f}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-5 order-1 lg:order-2">
            <Reveal delay={0.05}>
              <img
                src={p.image}
                alt={p.title}
                loading="lazy"
                className="rounded-[2rem] shadow-lift w-full aspect-[4/5] object-cover"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Structured sections */}
      <section className="pb-20 bg-honeycomb-soft">
        <div className="container-tight pt-16 space-y-14">
          {p.sections.map((s, i) => (
            <Reveal key={i} delay={0.05}>
              {s.kind === "heading" && (
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-ink">
                  {s.text}
                </h2>
              )}
              {s.kind === "para" && (
                <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
                  {s.text}
                </p>
              )}
              {s.kind === "list" && (
                <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3 max-w-4xl">
                  {s.items.map((item) => (
                    <li key={item} className="flex gap-3 text-ink">
                      <CheckCircle2 className="h-5 w-5 text-honey-dark shrink-0 mt-1" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              )}
              {s.kind === "cards" && (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {s.items.map((c) => (
                    <Card
                      key={c.title}
                      className="card-lift bg-card border-border rounded-2xl"
                    >
                      <CardHeader className="pb-2">
                        <div className="h-10 w-10 rounded-xl gradient-honey flex items-center justify-center mb-2">
                          <Sparkles className="h-5 w-5 text-ink" />
                        </div>
                        <CardTitle className="font-display text-xl text-ink">
                          {c.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground leading-relaxed">
                          {c.desc}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </Reveal>
          ))}
        </div>
      </section>

      {/* Closing quote + CTA */}
      <section className="py-20">
        <div className="container-tight grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <Reveal>
              <Quote className="h-10 w-10 text-honey" />
              <blockquote className="mt-4 font-display text-3xl sm:text-4xl text-ink italic leading-tight">
                "{p.closingQuote}"
              </blockquote>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal delay={0.1}>
              <div className="bg-cream rounded-[2rem] p-8 border border-border shadow-soft">
                <h3 className="font-display text-2xl font-bold text-ink">
                  Ready to visit?
                </h3>
                <p className="mt-2 text-muted-foreground">
                  Book a tour or ask us anything about this programme. We'd love to meet your little one.
                </p>
                <Button asChild className="mt-6 w-full rounded-full h-12 shadow-honey">
                  <Link to="/contact">Enquire about this programme</Link>
                </Button>
                <Link
                  to="/programs"
                  className="mt-5 inline-flex items-center gap-2 text-muted-foreground hover:text-ink"
                >
                  <ArrowLeft className="h-4 w-4" /> Back to all programs
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProgramDetail;
