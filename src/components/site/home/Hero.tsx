import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import hero from "@/assets/hero-child.jpg";
import bee from "@/assets/bee-mascot.png";

export const Hero = () => {
  return (
    <section className="relative bg-honeycomb overflow-hidden pt-10 pb-20 sm:pt-14 sm:pb-28">
      {/* sun glow */}
      <div className="absolute -top-32 -left-32 w-[600px] h-[600px] gradient-sun pointer-events-none" />
      <div className="absolute top-40 right-0 w-[420px] h-[420px] gradient-sun opacity-60 pointer-events-none" />

      <div className="container-wide relative grid lg:grid-cols-12 gap-10 lg:gap-6 items-center">
        {/* Left — text */}
        <div className="lg:col-span-6 order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 0.9, 0.32, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cream border border-honey/30 text-xs font-semibold text-honey-dark uppercase tracking-wider">
              <Sparkles className="h-3.5 w-3.5" /> Established 2010 · Ages 1.5 – 6
            </div>

            <h1 className="mt-5 font-display text-[2.5rem] leading-[1.02] sm:text-5xl lg:text-[4.25rem] font-bold text-ink">
              Where small steps lead to{" "}
              <span className="relative inline-block italic">
                <span className="marker-honey">giant leaps</span>
                <svg className="absolute -bottom-3 left-0 w-full" viewBox="0 0 200 12" preserveAspectRatio="none" aria-hidden>
                  <path d="M2 8 C 50 1, 100 11, 198 5" stroke="hsl(var(--accent))" strokeWidth="3" fill="none" strokeLinecap="round" />
                </svg>
              </span>
            </h1>

            <p className="mt-7 text-lg text-muted-foreground max-w-lg leading-relaxed">
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

            {/* Stats strip */}
            <div className="mt-12 grid grid-cols-3 gap-4 max-w-md">
              {[
                ["14+", "Years caring"],
                ["1,200+", "Happy families"],
                ["1:6", "Teacher ratio"],
              ].map(([n, l]) => (
                <div key={l as string}>
                  <div className="font-display text-3xl font-bold text-ink">{n}</div>
                  <div className="text-xs text-muted-foreground mt-1">{l}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right — image collage */}
        <div className="lg:col-span-6 order-1 lg:order-2 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 0.9, 0.32, 1] }}
            className="relative"
          >
            {/* main image with organic shape */}
            <div className="relative mx-auto w-full max-w-[560px]">
              <div
                className="absolute inset-0 -z-10 bg-honey/40 blur-2xl"
                style={{ borderRadius: "62% 38% 55% 45% / 50% 60% 40% 50%" }}
              />
              <img
                src={hero}
                alt="Smiling preschool child in a warm classroom"
                width={1024}
                height={1024}
                className="w-full h-auto object-cover shadow-lift"
                style={{ borderRadius: "58% 42% 50% 50% / 55% 45% 55% 45%" }}
              />

              {/* floating bee */}
              <img
                src={bee}
                alt=""
                className="absolute -top-6 -left-4 w-20 h-20 animate-bee drop-shadow-xl"
              />

              {/* badge card */}
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="absolute -left-2 sm:-left-8 bottom-8 bg-card rounded-2xl shadow-lift px-4 py-3 border border-border tilt-l"
              >
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-honey grid place-items-center text-ink font-bold">★</div>
                  <div>
                    <div className="text-xs text-muted-foreground">Rated</div>
                    <div className="font-semibold text-ink text-sm">Top Preschool 2024</div>
                  </div>
                </div>
              </motion.div>

              {/* reviews card */}
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55, duration: 0.6 }}
                className="absolute -right-3 sm:-right-6 top-8 bg-ink text-cream rounded-2xl shadow-lift px-4 py-3 tilt-r max-w-[200px]"
              >
                <div className="font-hand text-honey-light text-xl leading-none">Loved by parents</div>
                <div className="mt-1 text-xs text-cream/80">“Feels like home.” — 312 reviews</div>
              </motion.div>
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
          <span className="text-[10px] font-bold uppercase tracking-wider bg-accent text-accent-foreground px-3 py-1 rounded-full">New</span>
          <span className="text-sm text-ink/80 truncate">
            Explore our <span className="font-semibold">2025 Bee-Learning Programme</span> — registration open
          </span>
          <Link to="/programs" className="ml-auto text-honey-dark"><ArrowRight className="h-4 w-4" /></Link>
        </motion.div>
      </div>
    </section>
  );
};
