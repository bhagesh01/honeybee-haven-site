import { useLocation, Link } from "react-router-dom";
import { MapPin, Phone, MessageCircle, Check, Clock, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/SectionHeading";
import { Seo, breadcrumbSchema } from "@/components/site/Seo";
import { SmartImage } from "@/components/site/SmartImage";
import { Button } from "@/components/ui/button";
import { BUSINESS, fullAddress, whatsappLink } from "@/lib/business";
import classroom from "@/assets/classroom.webp";

type LocationConfig = {
  slug: string;
  area: string;
  h1: string;
  title: string;
  description: string;
  keywords: string[];
  intro: string;
  landmarks: string[];
  serving: string[];
  faqs: { q: string; a: string }[];
};

const CONFIG: Record<string, LocationConfig> = {
  "/preschool-in-nigdi": {
    slug: "/preschool-in-nigdi",
    area: "Nigdi",
    h1: "Best Preschool in Nigdi, Pune",
    title: "Best Preschool in Nigdi, Pune — Busy Bees Preschool & Daycare",
    description:
      "Looking for the best preschool in Nigdi, Pune? Busy Bees offers play-based learning, daycare and playgroup for ages 1.5–6 near Lokmanya Hospital, Nigdi. Admissions open.",
    keywords: [
      "preschool in Nigdi",
      "best preschool in Nigdi Pune",
      "playschool in Nigdi",
      "daycare in Nigdi",
      "nursery school Nigdi",
      "kindergarten Nigdi Pune",
    ],
    intro:
      "For over 15 years, Busy Bees has been Nigdi's trusted preschool — combining a warm, home-like environment with a research-backed, play-based curriculum that prepares little learners for big school and bigger futures.",
    landmarks: [
      "Walking distance from Lokmanya Hospital, Nigdi",
      "5 minutes from Nigdi Bus Stand & Bhakti-Shakti Chowk",
      "Easy commute from Akurdi Railway Station (8 min)",
      "Convenient pickup for families across Sector 22, 24, 25, 26, 27 & 28",
    ],
    serving: ["Nigdi", "Nigdi Gaon", "Yamunanagar", "Sector 22–28 Nigdi", "Bhakti-Shakti"],
    faqs: [
      {
        q: "What is the best preschool in Nigdi, Pune?",
        a: "Busy Bees Preschool in Nigdi Pradhikaran is consistently rated among the best preschools in Nigdi by parents for its play-based curriculum, low teacher–child ratio, safe campus and 15+ years of experience.",
      },
      {
        q: "What age group does Busy Bees Nigdi accept?",
        a: "We welcome children from 1.5 to 6 years across our Playgroup, Nursery, Junior KG and Senior KG programs, plus full-day daycare.",
      },
      {
        q: "Where is Busy Bees Preschool located in Nigdi?",
        a: `${fullAddress} — opposite Axis Bank Lane, near Lokmanya Hospital.`,
      },
    ],
  },
  "/preschool-in-pradhikaran": {
    slug: "/preschool-in-pradhikaran",
    area: "Pradhikaran",
    h1: "Top Preschool in Pradhikaran, Pune",
    title: "Top Preschool in Pradhikaran, Pune — Busy Bees Preschool & Daycare",
    description:
      "Busy Bees is a top-rated preschool in Nigdi Pradhikaran, Pune offering playgroup, nursery, KG and daycare. Safe, play-based learning since 2010. Visit us today.",
    keywords: [
      "preschool in Pradhikaran",
      "preschool in Nigdi Pradhikaran",
      "best preschool Pradhikaran Pune",
      "playgroup Pradhikaran",
      "daycare Pradhikaran Pune",
    ],
    intro:
      "Located in the heart of Nigdi Pradhikaran, Busy Bees is the neighbourhood preschool families trust. Our purpose-built campus, certified educators and child-first philosophy make every day at school feel like a happy adventure.",
    landmarks: [
      "Plot 123, Sector 27A — opposite Axis Bank Lane",
      "Adjacent to Lokmanya Hospital, Nigdi Pradhikaran",
      "Minutes from Pradhikaran Garden, Bhakti-Shakti Chowk and Akurdi",
      "Serving Sector 23, 25, 26, 27, 27A, 28 & nearby societies",
    ],
    serving: ["Nigdi Pradhikaran", "Sector 27A", "Akurdi", "Ravet", "Kalewadi"],
    faqs: [
      {
        q: "Which is the best preschool in Pradhikaran?",
        a: "Busy Bees Preschool & Daycare in Sector 27A, Nigdi Pradhikaran is rated among the best by local parents for its experienced teachers, safety standards and play-based learning approach.",
      },
      {
        q: "Do you offer daycare in Pradhikaran?",
        a: "Yes — our daycare runs alongside preschool hours and is available for working parents in Pradhikaran, Nigdi and Akurdi.",
      },
      {
        q: "What are the school timings?",
        a: "Monday to Friday 9:00 AM – 2:00 PM, Saturday 9:00 AM – 12:00 PM. Closed on Sundays.",
      },
    ],
  },
  "/playgroup-in-pune": {
    slug: "/playgroup-in-pune",
    area: "Pune",
    h1: "Best Playgroup in Pune (Nigdi Pradhikaran)",
    title: "Best Playgroup in Pune — Busy Bees Preschool, Nigdi Pradhikaran",
    description:
      "Busy Bees runs one of Pune's most loved playgroups in Nigdi Pradhikaran for toddlers aged 1.5–3 years. Sensorial play, music, art and gentle routines. Admissions open.",
    keywords: [
      "playgroup in Pune",
      "best playgroup Pune",
      "toddler playgroup Pune",
      "playgroup Nigdi Pune",
      "playgroup Pradhikaran",
    ],
    intro:
      "A playgroup should feel like a second home — gentle, joyful and full of discovery. At Busy Bees in Nigdi Pradhikaran, our playgroup program is purpose-designed for toddlers (1.5–3 years) and trusted by hundreds of Pune families.",
    landmarks: [
      "Conveniently located in Nigdi Pradhikaran, PCMC",
      "Easy access from Akurdi, Chinchwad, Ravet and Kalewadi",
      "Safe, CCTV-monitored campus with trained caregivers",
      "Small batches with a 1:6 teacher–child ratio",
    ],
    serving: ["Nigdi", "Pradhikaran", "Akurdi", "Chinchwad", "Ravet", "Kalewadi", "PCMC"],
    faqs: [
      {
        q: "What is the right age for playgroup in Pune?",
        a: "Most playgroups in Pune accept children between 1.5 and 3 years. At Busy Bees, our playgroup is designed for this age range with shorter hours and lots of sensorial play.",
      },
      {
        q: "What does a playgroup day look like?",
        a: "Circle time, free play, music & movement, art, snack, story time and outdoor play — woven into a calm, predictable rhythm that helps toddlers thrive.",
      },
      {
        q: "Are parents allowed during settling in?",
        a: "Yes. We have a structured 5-day phase-in program where parents can stay during initial sessions to ensure a smooth, anxiety-free transition.",
      },
    ],
  },
};

const LocationLanding = () => {
  const { pathname } = useLocation();
  const cfg = CONFIG[pathname] ?? CONFIG["/preschool-in-nigdi"];

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: cfg.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <Seo
        title={cfg.title}
        description={cfg.description}
        path={cfg.slug}
        keywords={cfg.keywords}
        jsonLd={[
          faqLd,
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: cfg.h1, path: cfg.slug },
          ]),
        ]}
      />

      <PageHero
        eyebrow={`Serving ${cfg.area} & nearby`}
        title={cfg.h1.split(",")[0]}
        highlight={cfg.area}
        description={cfg.intro}
        trail={[{ label: "Home", to: "/" }, { label: cfg.h1 }]}
      />

      <section className="py-16 sm:py-20">
        <div className="container-wide grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7 space-y-8">
            <Reveal>
              <SmartImage
                src={classroom}
                alt={`Busy Bees Preschool classroom in ${cfg.area}, Pune`}
                wrapperClassName="rounded-[2rem] shadow-lift border border-border aspect-[4/3]"
                className="w-full h-full object-cover"
              />
            </Reveal>

            <Reveal delay={0.05}>
              <article className="prose prose-lg max-w-none">
                <h2 className="font-display text-3xl font-bold text-ink">Why parents in {cfg.area} choose Busy Bees</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Choosing your child's first school is one of the most important decisions a parent makes. At Busy Bees Preschool, our promise is simple — every child is seen, heard and celebrated. Our experienced educators design each day around play, exploration and gentle routines that build confidence, curiosity and kindness.
                </p>
                <ul className="mt-6 grid sm:grid-cols-2 gap-3 not-prose">
                  {[
                    "15+ years serving Nigdi & Pradhikaran families",
                    "Play-based, child-led curriculum",
                    "Low 1:6 teacher–child ratio",
                    "CCTV-monitored, child-safe campus",
                    "Trained, background-verified caregivers",
                    "Daily reports for working parents",
                    "Healthy, hygienic snacks & meals",
                    "Structured phase-in for new children",
                  ].map((p) => (
                    <li key={p} className="flex gap-2 text-sm text-ink">
                      <Check className="h-5 w-5 text-honey shrink-0 mt-0.5" /> {p}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
                <h3 className="font-display text-2xl font-bold text-ink mb-4">How to find us in {cfg.area}</h3>
                <ul className="space-y-2.5 text-muted-foreground">
                  {cfg.landmarks.map((l) => (
                    <li key={l} className="flex gap-2"><MapPin className="h-4 w-4 text-honey mt-1 shrink-0" /> {l}</li>
                  ))}
                </ul>
                <p className="mt-5 text-sm text-muted-foreground">
                  We currently serve families across {cfg.serving.join(", ")} and nearby PCMC areas.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <section aria-labelledby="faq" className="space-y-4">
                <h2 id="faq" className="font-display text-3xl font-bold text-ink">Frequently asked questions</h2>
                {cfg.faqs.map((f) => (
                  <details key={f.q} className="rounded-2xl border border-border bg-card p-5 group">
                    <summary className="font-semibold text-ink cursor-pointer list-none flex justify-between items-center">
                      {f.q}
                      <ArrowRight className="h-4 w-4 text-honey transition-transform group-open:rotate-90" />
                    </summary>
                    <p className="mt-3 text-muted-foreground leading-relaxed">{f.a}</p>
                  </details>
                ))}
              </section>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="rounded-2xl border border-border bg-card p-6">
                <h3 className="font-display text-xl font-bold text-ink mb-3">Explore more</h3>
                <ul className="grid sm:grid-cols-2 gap-2 text-sm">
                  <li><Link to="/programs/preschool" className="text-honey-dark hover:underline">Our preschool program in {cfg.area}</Link></li>
                  <li><Link to="/programs/daycare" className="text-honey-dark hover:underline">Daycare facilities near {cfg.area}</Link></li>
                  <li><Link to="/about" className="text-honey-dark hover:underline">About Busy Bees Preschool</Link></li>
                  <li><Link to="/why-busybees" className="text-honey-dark hover:underline">Why parents choose Busy Bees</Link></li>
                  <li><Link to="/testimonials" className="text-honey-dark hover:underline">Parent testimonials</Link></li>
                  <li><Link to="/gallery" className="text-honey-dark hover:underline">Photo gallery</Link></li>
                  {cfg.slug !== "/preschool-in-nigdi" && <li><Link to="/preschool-in-nigdi" className="text-honey-dark hover:underline">Preschool in Nigdi</Link></li>}
                  {cfg.slug !== "/preschool-in-pradhikaran" && <li><Link to="/preschool-in-pradhikaran" className="text-honey-dark hover:underline">Preschool in Pradhikaran</Link></li>}
                  {cfg.slug !== "/playgroup-in-pune" && <li><Link to="/playgroup-in-pune" className="text-honey-dark hover:underline">Playgroup in Pune</Link></li>}
                </ul>
              </div>
            </Reveal>
          </div>

          {/* Sticky CTA */}
          <aside className="lg:col-span-5">
            <div className="sticky top-28 bg-ink text-cream rounded-[2rem] p-8 shadow-lift relative overflow-hidden">
              <div className="absolute inset-0 bg-honeycomb-soft opacity-10" />
              <div className="relative">
                <p className="text-honey-light text-xs uppercase tracking-[0.25em]">Admissions Open 2025–26</p>
                <h2 className="font-display text-3xl font-bold mt-2">Book a free campus tour</h2>
                <p className="text-cream/70 mt-3">
                  Visit our {cfg.area} campus — meet our teachers, see the classrooms and ask anything you'd like.
                </p>
                <ul className="mt-6 space-y-3 text-sm text-cream/85">
                  <li className="flex gap-3"><MapPin className="h-4 w-4 text-honey shrink-0 mt-0.5" /> {fullAddress}</li>
                  <li className="flex gap-3"><Phone className="h-4 w-4 text-honey shrink-0 mt-0.5" /> <a href={`tel:${BUSINESS.phone}`} className="hover:text-honey">{BUSINESS.phoneDisplay}</a></li>
                  <li className="flex gap-3"><Clock className="h-4 w-4 text-honey shrink-0 mt-0.5" /> Mon–Fri 9 AM–2 PM · Sat 9 AM–12 PM</li>
                </ul>
                <div className="mt-7 flex flex-col gap-3">
                  <Button asChild size="lg" className="rounded-full shadow-honey">
                    <a href={`tel:${BUSINESS.phone}`}><Phone className="h-4 w-4" /> Call {BUSINESS.phoneDisplay}</a>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="rounded-full bg-transparent border-cream/30 text-cream hover:bg-cream hover:text-ink">
                    <a href={whatsappLink()} target="_blank" rel="noopener noreferrer"><MessageCircle className="h-4 w-4" /> WhatsApp Us</a>
                  </Button>
                  <Button asChild variant="ghost" className="text-cream hover:text-honey hover:bg-transparent">
                    <Link to="/contact">Send an inquiry →</Link>
                  </Button>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
};

export default LocationLanding;
