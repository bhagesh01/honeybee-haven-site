import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

// carousel images (PNG/JPG fallbacks)
import image1 from "@/assets/corousel_img_1.png";
import image2 from "@/assets/pyjamaParty1.jpg";
import image3 from "@/assets/corousel_img_3.png";
import image4 from "@/assets/trip1.jpg";
import image5 from "@/assets/sportday1.jpg";
import image6 from "@/assets/slate.jpg";

// WebP versions (smaller, faster)
import image1Webp from "@/assets/corousel_img_1.webp";
import image2Webp from "@/assets/pyjamaParty1.webp";
import image3Webp from "@/assets/corousel_img_3.webp";
import image4Webp from "@/assets/trip1.webp";
import image5Webp from "@/assets/sportday1.webp";
import image6Webp from "@/assets/slate.webp";

import { cn } from "@/lib/utils";

const slides = [
  { src: image1, webp: image1Webp, alt: "Smiling preschool child in a warm classroom" },
  { src: image2, webp: image2Webp, alt: "Children at the BusyBees pyjama party" },
  { src: image3, webp: image3Webp, alt: "Children engaged in a creative activity" },
  { src: image4, webp: image4Webp, alt: "Children enjoying a school trip" },
  { src: image5, webp: image5Webp, alt: "Sports day at BusyBees" },
  { src: image6, webp: image6Webp, alt: "Child writing on a slate" },
];

export const Hero = () => {
  const [idx, setIdx] = useState(0);
  const [loaded, setLoaded] = useState<Record<number, boolean>>({});

  useEffect(() => {
    const t = window.setInterval(() => setIdx((i) => (i + 1) % slides.length), 5000);
    return () => window.clearInterval(t);
  }, []);

  const prev = () => setIdx((i) => (i - 1 + slides.length) % slides.length);
  const next = () => setIdx((i) => (i + 1) % slides.length);

  return (
    <section className="relative bg-honeycomb overflow-hidden pt-8 pb-12 sm:pt-12 sm:pb-16 lg:pt-16 lg:pb-24">
      {/* Decorative glows */}
      <div className="absolute -top-32 -left-32 w-[clamp(280px,45vw,600px)] aspect-square gradient-sun pointer-events-none" />
      <div className="absolute top-40 right-0 w-[clamp(220px,32vw,420px)] aspect-square gradient-sun opacity-60 pointer-events-none" />

      <div className="container-wide relative grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* ===== Left: Text ===== */}
        <div className="lg:col-span-5 order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 0.9, 0.32, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cream border border-honey/30 text-xs font-semibold text-honey-dark uppercase tracking-wider">
              <Sparkles className="h-3.5 w-3.5" /> Established 2010 · Ages 1.5 – 6
            </div>

            <h1 className="mt-5 font-display font-bold text-ink leading-[1.05] text-[clamp(2.25rem,5.2vw,4rem)]">
              Where small steps lead to{" "}
              <span className="relative inline-block italic">
                <span className="marker-honey">giant leaps</span>
                <svg className="absolute -bottom-3 left-0 w-full" viewBox="0 0 200 12" preserveAspectRatio="none" aria-hidden>
                  <path d="M2 8 C 50 1, 100 11, 198 5" stroke="hsl(var(--accent))" strokeWidth="3" fill="none" strokeLinecap="round" />
                </svg>
              </span>
            </h1>

            <p className="mt-4 text-sm font-semibold uppercase tracking-[0.18em] text-honey-dark">
              Preschool & Daycare · Nigdi Pradhikaran, Pune
            </p>

            <p className="mt-7 text-[clamp(1rem,1.6vw,1.125rem)] text-muted-foreground max-w-lg leading-relaxed">
              At BusyBees, we believe every child is a natural researcher. Our play-based curriculum blends Montessori
              warmth with modern learning — so your little one stays curious for life.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Button asChild size="lg" className="rounded-full px-7 h-12 text-base shadow-honey">
                <Link to="/contact"><Calendar className="h-4 w-4" /> Book a Private Tour</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-7 h-12 text-base border-2 border-ink/15 bg-card hover:bg-cream">
                <Link to="/programs">View Curriculum <ArrowRight className="h-4 w-4" /></Link>
              </Button>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-4 max-w-md">
              {[
                ["14+", "Years caring"],
                ["1,200+", "Happy families"],
                ["1:6", "Teacher ratio"],
              ].map(([n, l]) => (
                <div key={l as string}>
                  <div className="font-display text-[clamp(1.5rem,3vw,2rem)] font-bold text-ink">{n}</div>
                  <div className="text-xs text-muted-foreground mt-1">{l}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ===== Right: Carousel (contained, rounded, rectangular) ===== */}
        <div className="lg:col-span-7 order-1 lg:order-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 0.9, 0.32, 1] }}
            className="relative w-full mx-auto"
          >
            {/* soft glow behind */}
            <div className="absolute -inset-4 -z-10 bg-honey/30 blur-3xl rounded-[2rem]" />

            {/* Rectangular carousel — taller on desktop, shorter on mobile */}
            <div
              className={cn(
                "relative w-full overflow-hidden bg-cream border border-honey/20 shadow-lift",
                "rounded-2xl sm:rounded-3xl",
                "aspect-[16/10] sm:aspect-[16/9] lg:aspect-[5/4]"
              )}
            >
              {slides.map((s, i) => (
                <div
                  key={s.src}
                  className={cn(
                    "absolute inset-0 transition-opacity duration-700 ease-out",
                    i === idx ? "opacity-100" : "opacity-0 pointer-events-none"
                  )}
                  aria-hidden={i !== idx}
                >
                  {!loaded[i] && (
                    <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-muted via-cream to-muted" />
                  )}
                  <img
                    src={s.src}
                    alt={s.alt}
                    loading={i === 0 ? "eager" : "lazy"}
                    decoding={i === 0 ? "sync" : "async"}
                    {...(i === 0 ? { fetchPriority: "high" as any } : {})}
                    onLoad={() => setLoaded((p) => ({ ...p, [i]: true }))}
                    sizes="(min-width:1024px) 55vw, 92vw"
                    style={{ objectPosition: "center 30%" }}
                    className={cn(
                      "w-full h-full object-cover transition-opacity duration-500",
                      loaded[i] ? "opacity-100" : "opacity-0"
                    )}
                  />
                </div>
              ))}
            </div>

            {/* Controls below image */}
            <div className="mt-4 flex items-center justify-center gap-4">
              <button
                onClick={prev}
                aria-label="Previous slide"
                className="h-10 w-10 grid place-items-center rounded-full bg-card border border-border shadow-soft text-ink hover:bg-honey active:scale-95 transition-all"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <div className="flex items-center gap-2">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIdx(i)}
                    aria-label={`Go to slide ${i + 1}`}
                    className={cn(
                      "h-2.5 rounded-full transition-all border border-honey/40",
                      i === idx ? "w-8 bg-honey" : "w-2.5 bg-cream hover:bg-honey/40"
                    )}
                  />
                ))}
              </div>

              <button
                onClick={next}
                aria-label="Next slide"
                className="h-10 w-10 grid place-items-center rounded-full bg-card border border-border shadow-soft text-ink hover:bg-honey active:scale-95 transition-all"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Announcement strip */}
      <div className="container-wide relative mt-12">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mx-auto max-w-2xl bg-card border border-border rounded-full shadow-soft pl-2 pr-5 py-2 flex items-center gap-3"
        >
          <span className="text-[10px] font-bold uppercase tracking-wider bg-accent text-accent-foreground px-3 py-1 rounded-full whitespace-nowrap">New</span>
          <span className="text-sm text-ink/80 truncate">
            Explore our <span className="font-semibold">2025 Bee-Learning Programme</span> — registration open
          </span>
          <Link to="/programs" aria-label="View programs" className="ml-auto text-honey-dark shrink-0"><ArrowRight className="h-4 w-4" /></Link>
        </motion.div>
      </div>
    </section>
  );
};
