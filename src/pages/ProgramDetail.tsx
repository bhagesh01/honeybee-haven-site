import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/SectionHeading";
import { Button } from "@/components/ui/button";
import classroom from "@/assets/classroom.jpg";
import paint from "@/assets/g-paint.jpg";
import garden from "@/assets/g-garden.jpg";
import reading from "@/assets/g-reading.jpg";
import stage from "@/assets/g-stage.jpg";

const data: Record<string, any> = {
  preschool: {
    eyebrow: "Ages 3 – 6",
    title: "Preschool —",
    highlight: "the big bloom years",
    desc: "A holistic foundation in literacy, numeracy and emotional intelligence — through play, story, and project work.",
    image: classroom,
    pillars: [
      "Phonics-rich language journeys",
      "Hands-on Montessori math materials",
      "Weekly project-based learning themes",
      "Daily outdoor & gross-motor time",
      "Mindfulness and emotional vocabulary",
      "Two parent-teacher portfolios per term",
    ],
    quote: "By the time they leave us, they read, count, share — and still believe the world is wonderful.",
  },
  daycare: {
    eyebrow: "Ages 1.5 – 6",
    title: "Daycare —",
    highlight: "a second home",
    desc: "Full-day, gently structured care with home-cooked meals, restful naps and lots of unstructured wonder time.",
    image: garden,
    pillars: [
      "7:30 AM – 6:30 PM extended hours",
      "Three nutritious organic meals daily",
      "Rest area with individual bedding",
      "Live CCTV access for parents",
      "Trained caregivers (1:5 ratio)",
      "Daily updates with photos",
    ],
    quote: "Working parents tell us the best part of their day is the moment their child waves goodbye to us — happy.",
  },
  buzzyclub: {
    eyebrow: "Ages 5 – 8",
    title: "BuzzyClub —",
    highlight: "after-school adventures",
    desc: "An after-school enrichment club where children dive deeper into music, coding basics, theatre and chess.",
    image: reading,
    pillars: ["Rotating skill tracks each term", "Specialist visiting mentors", "Homework support included", "Healthy evening snack"],
    quote: "Pickup at 6 instead of 3:30 — and a child who's done homework, played chess, and built a robot.",
  },
  "be-creative": {
    eyebrow: "Weekend · Ages 4+",
    title: "Be Creative —",
    highlight: "open studio Saturdays",
    desc: "Open studios where children explore clay, watercolours, junk-art and storytelling across an entire morning.",
    image: paint,
    pillars: ["Free choice of media", "Process over product", "Visiting artists each month", "Family showcase every term"],
    quote: "No worksheets. No instructions. Just paint, paper, and permission to make a beautiful mess.",
  },
  "summer-camps": {
    eyebrow: "April – June",
    title: "Summer Camps —",
    highlight: "the warmest weeks",
    desc: "Week-long themed camps — Tiny Scientists, Forest School, Junior Chefs, and the legendary Bee Olympics.",
    image: stage,
    pillars: ["New theme every week", "Field trips on Fridays", "Mixed-age groups", "Camp t-shirt & memory book included"],
    quote: "Six weeks of summer that your child will still talk about in October.",
  },
};

const ProgramDetail = () => {
  const { slug = "" } = useParams();
  const p = data[slug];
  if (!p) return <Navigate to="/programs" replace />;

  return (
    <>
      <PageHero
        eyebrow={p.eyebrow}
        title={p.title}
        highlight={p.highlight}
        description={p.desc}
        trail={[{ label: "Home", to: "/" }, { label: "Programs", to: "/programs" }, { label: p.title.replace(/—.*/, "").trim() }]}
      />

      <section className="py-20">
        <div className="container-wide grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7">
            <Reveal>
              <img src={p.image} alt={p.title} loading="lazy" className="rounded-[2rem] shadow-lift w-full aspect-[5/4] object-cover" />
            </Reveal>
            <Reveal delay={0.1}>
              <blockquote className="mt-10 font-display text-2xl text-ink italic leading-snug border-l-4 border-honey pl-6">
                "{p.quote}"
              </blockquote>
            </Reveal>
          </div>
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <Reveal delay={0.05}>
              <div className="bg-cream rounded-[2rem] p-8 border border-border shadow-soft">
                <h3 className="font-display text-2xl font-bold text-ink">What's inside</h3>
                <ul className="mt-6 space-y-3">
                  {p.pillars.map((item: string) => (
                    <li key={item} className="flex gap-3 text-ink">
                      <CheckCircle2 className="h-5 w-5 text-honey-dark shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className="mt-8 w-full rounded-full h-12 shadow-honey">
                  <Link to="/contact">Enquire about this programme</Link>
                </Button>
              </div>
              <Link to="/programs" className="mt-6 inline-flex items-center gap-2 text-muted-foreground hover:text-ink">
                <ArrowLeft className="h-4 w-4" /> Back to all programs
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProgramDetail;
