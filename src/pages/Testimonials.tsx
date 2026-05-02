import { useEffect, useMemo, useRef, useState } from "react";
import { Quote, Star, ChevronLeft, ChevronRight, CalendarDays, Heart, PartyPopper, Castle } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/SectionHeading";
import { Seo, breadcrumbSchema } from "@/components/site/Seo";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

type Testimonial = {
  name: string;
  role: string;
  child: string;
  text: string;
  initials: string;
  rating: number;
};

// Source list — easily replaceable with API data later.
const ALL_TESTIMONIALS: Testimonial[] = [
  { name: "Sarah Jenkins", role: "Parent", child: "Lila, 4", text: "We toured five preschools. The moment we walked into BusyBees, Lila ran straight to the reading nook and said 'Mama, this is my school.' She wasn't wrong.", initials: "SJ", rating: 5 },
  { name: "Arjun Mehta", role: "Parent", child: "Vihaan, 3", text: "Vihaan was a shy, quiet boy when he started. Six months in, he's leading circle time songs. The teachers truly see each child.", initials: "AM", rating: 5 },
  { name: "Emily Tan", role: "Parent", child: "Nathan, 5", text: "What I love most is how naturally academics happen here. He reads chapter books now — without a single worksheet drilled into him.", initials: "ET", rating: 5 },
  { name: "Priya Singh", role: "Parent", child: "Aanya, 2", text: "Even the daycare staff know what makes my daughter laugh. That kind of detail is rare and precious.", initials: "PS", rating: 5 },
  { name: "Rohan Kapoor", role: "Guardian", child: "Ira, 4", text: "The communication from teachers is wonderful — daily updates, photos, and genuine warmth. We always feel in the loop.", initials: "RK", rating: 5 },
  { name: "Meera Iyer", role: "Parent", child: "Kabir, 5", text: "BuzzyClub has been a revelation. Kabir's confidence in phonics and his love for science experiments have soared.", initials: "MI", rating: 5 },
  { name: "David & Anita Ross", role: "Parents", child: "Maya, 3", text: "As a working couple, the extended daycare hours saved us. But more importantly, Maya genuinely loves going every day.", initials: "DR", rating: 5 },
  { name: "Nisha Patel", role: "Parent", child: "Aryan, 4", text: "The play-way method really works. Aryan is curious, kind, and never feels 'taught' — he just learns.", initials: "NP", rating: 5 },
  { name: "Karan Shah", role: "Parent", child: "Riya, 6", text: "Three years at BusyBees and I can confidently say it shaped Riya's foundation — academically and emotionally.", initials: "KS", rating: 5 },
  { name: "Anjali Desai", role: "Parent", child: "Veer, 3", text: "The teachers send little notes about Veer's day — what he laughed about, what he tried for the first time. It feels like family.", initials: "AD", rating: 5 },
  { name: "Suresh Nair", role: "Parent", child: "Diya, 5", text: "The Be-Creative drawing program brought out a side of Diya we hadn't seen. She paints every weekend now.", initials: "SN", rating: 5 },
  { name: "Tanvi Joshi", role: "Parent", child: "Ishaan, 4", text: "Summer camp was the highlight of Ishaan's year. The fireless cooking sessions are still his favourite memory.", initials: "TJ", rating: 5 },
];

const CHUNK_SIZE = 12; // load testimonials in chunks for scalability

const StarRow = ({ count }: { count: number }) => (
  <div className="flex gap-1" aria-label={`${count} out of 5 stars`}>
    {Array.from({ length: count }).map((_, j) => (
      <Star key={j} className="h-4 w-4 fill-honey text-honey" />
    ))}
  </div>
);

const TestimonialCard = ({ t }: { t: Testimonial }) => (
  <article className="relative bg-card rounded-3xl p-7 border border-border shadow-soft card-lift h-full flex flex-col">
    <Quote className="absolute top-5 right-5 h-10 w-10 text-honey/25" aria-hidden />
    <StarRow count={t.rating} />
    <p className="font-display text-lg text-ink leading-snug flex-1 mt-4">"{t.text}"</p>
    <div className="mt-6 flex items-center gap-3 pt-5 border-t border-border">
      <div className="h-11 w-11 rounded-full bg-honey grid place-items-center font-bold text-ink shrink-0">
        {t.initials}
      </div>
      <div>
        <div className="font-semibold text-ink">{t.name}</div>
        <div className="text-xs text-muted-foreground">{t.role} of {t.child}</div>
      </div>
    </div>
  </article>
);

const Testimonials = () => {
  const [loadedCount, setLoadedCount] = useState(Math.min(CHUNK_SIZE, ALL_TESTIMONIALS.length));
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [selected, setSelected] = useState(0);
  const [snapCount, setSnapCount] = useState(0);

  const autoplay = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true, stopOnMouseEnter: true })
  );

  const items = useMemo(
    () => ALL_TESTIMONIALS.slice(0, loadedCount),
    [loadedCount]
  );
  const hasMore = loadedCount < ALL_TESTIMONIALS.length;

  useEffect(() => {
    if (!api) return;
    const onSelect = () => setSelected(api.selectedScrollSnap());
    const onReInit = () => {
      setSnapCount(api.scrollSnapList().length);
      setSelected(api.selectedScrollSnap());
    };
    onReInit();
    api.on("select", onSelect);
    api.on("reInit", onReInit);
    return () => {
      api.off("select", onSelect);
      api.off("reInit", onReInit);
    };
  }, [api]);

  // When new chunks are loaded, embla needs to recalc snaps.
  useEffect(() => {
    api?.reInit();
  }, [items.length, api]);

  const loadMore = () => {
    setLoadedCount((c) => Math.min(c + CHUNK_SIZE, ALL_TESTIMONIALS.length));
  };

  return (
    <>
      <Seo
        title="Parent Reviews & Testimonials — Busy Bees Preschool, Nigdi"
        description="Read what Pune parents say about Busy Bees Preschool & Daycare in Nigdi Pradhikaran — real reviews from real families."
        path="/testimonials"
        jsonLd={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Testimonials", path: "/testimonials" }])}
      />
      <PageHero
        eyebrow="Partner's Corner"
        title="In the words of our"
        highlight="parent partners"
        description="Honest stories from the families who walk through our doors every morning."
        trail={[{ label: "Home", to: "/" }, { label: "Partner's Corner" }, { label: "Testimonials" }]}
      />

      <section className="py-20">
        <div className="container-wide">
          <Reveal>
            <div className="relative">
              <Carousel
                setApi={setApi}
                opts={{ align: "start", loop: true }}
                plugins={[autoplay.current]}
                className="w-full"
              >
                <CarouselContent className="-ml-4">
                  {items.map((t) => (
                    <CarouselItem
                      key={t.name}
                      className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
                    >
                      <div className="h-full p-1">
                        <TestimonialCard t={t} />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>

              {/* Controls */}
              <div className="mt-8 flex items-center justify-center gap-4">
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full border-honey text-ink hover:bg-honey/10"
                  onClick={() => api?.scrollPrev()}
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="h-5 w-5" />
                </Button>

                <div className="flex items-center gap-2" role="tablist" aria-label="Testimonial slides">
                  {Array.from({ length: snapCount }).map((_, i) => {
                    const isActive = i === selected;
                    return (
                      <button
                        key={i}
                        role="tab"
                        aria-selected={isActive}
                        aria-label={`Go to slide ${i + 1}`}
                        onClick={() => api?.scrollTo(i)}
                        className={`h-2 rounded-full transition-all ${
                          isActive ? "bg-honey w-6" : "bg-border w-2 hover:bg-honey/50"
                        }`}
                      />
                    );
                  })}
                </div>

                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full border-honey text-ink hover:bg-honey/10"
                  onClick={() => api?.scrollNext()}
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </Reveal>

          {hasMore && (
            <div className="mt-10 text-center">
              <Button
                onClick={loadMore}
                variant="outline"
                className="rounded-full h-12 px-8 border-honey text-ink hover:bg-honey/10"
              >
                Load more stories ({ALL_TESTIMONIALS.length - loadedCount} remaining)
              </Button>
            </div>
          )}
        </div>
      </section>

      <ConnectingParents />
    </>
  );
};

type ParentEvent = {
  title: string;
  description: string;
  Icon: typeof CalendarDays;
  accent: string;
};

const PARENT_EVENTS: ParentEvent[] = [
  {
    title: "Open Days",
    description:
      "At least six dedicated sessions a year where we sit down with parents to discuss each child's growth, milestones, and any suggestions you'd like to share. Progress is tracked together, all year long.",
    Icon: CalendarDays,
    accent: "bg-honey/15 text-ink",
  },
  {
    title: "Grand-parents Day",
    description:
      "A celebration just for grandparents — games, talk shows, and shared stories that honour the special bond between little ones and their grand-dads and grand-moms.",
    Icon: Heart,
    accent: "bg-leaf/15 text-ink",
  },
  {
    title: "Christmas Funfair",
    description:
      "A festive family bash where parents and children put up stalls, play games, and soak in the spirit of the season together as one big BusyBees community.",
    Icon: PartyPopper,
    accent: "bg-honey/15 text-ink",
  },
  {
    title: "Killa-making Competition",
    description:
      "A BusyBees signature for Diwali — families build forts and killas together and decorate them with little Mawlas, celebrating tradition through creativity.",
    Icon: Castle,
    accent: "bg-cream text-ink",
  },
];

const ConnectingParents = () => (
  <section className="py-20 bg-honeycomb-soft">
    <div className="container-wide">
      <Reveal>
        <div className="max-w-2xl mx-auto text-center mb-14">
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-honey mb-3">
            Community
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-ink leading-tight">
            Connecting <span className="marker-honey">Parents</span>
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            We host special events through the year where parents join their little ones — or
            simply each other — to celebrate, share, and grow alongside our school community.
          </p>
        </div>
      </Reveal>

      <div className="grid md:grid-cols-2 gap-6">
        {PARENT_EVENTS.map((e, i) => (
          <Reveal key={e.title} delay={i * 0.05}>
            <article className="group relative bg-card rounded-3xl p-7 border border-border shadow-soft card-lift h-full flex gap-5">
              <div className={`shrink-0 h-14 w-14 rounded-2xl grid place-items-center ${e.accent}`}>
                <e.Icon className="h-7 w-7" aria-hidden />
              </div>
              <div className="flex-1">
                <h3 className="font-display text-xl font-semibold text-ink">{e.title}</h3>
                <p className="mt-2 text-muted-foreground leading-relaxed text-[15px]">
                  {e.description}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);


export default Testimonials;
