import { Link } from "react-router-dom";
import {
  Home,
  ShieldCheck,
  Clock,
  ToyBrick,
  CalendarDays,
  Brain,
  Users,
  MessageCircle,
  Smartphone,
  ArrowRight,
} from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/SectionHeading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import garden from "@/assets/g-garden.jpg";
import snack from "@/assets/g-snack.jpg";

const features = [
  { icon: Home, title: "Homely ambience", desc: "Warm interiors that feel like a second home." },
  { icon: ShieldCheck, title: "Highly safe & secure", desc: "Strict protocols and trained, caring staff all day." },
  { icon: Clock, title: "Extended timing", desc: "9:00 AM – 8:00 PM with flexible batches for working parents." },
  { icon: ToyBrick, title: "Age-appropriate toys", desc: "Curated brands and toys tuned to each age group." },
  { icon: CalendarDays, title: "Part of school routine", desc: "Daycare is woven into our regular school activities." },
  { icon: Brain, title: "Designed by experts", desc: "Activities planned in consultation with child psychologists." },
  { icon: Users, title: "Healthy ratios", desc: "Carefully managed teacher-to-children ratios all day." },
  { icon: MessageCircle, title: "Open day sessions", desc: "Regular meetings to discuss your child's growth." },
  { icon: Smartphone, title: "Always in the loop", desc: "Photos, updates and messages — never miss a moment." },
];

const Daycare = () => {
  return (
    <>
      <PageHero
        eyebrow="Ages 1.5 – 6"
        title="Daycare —"
        highlight="home of buzz-worthy bees"
        description="A safe, hygienic and child-friendly second home — open 9:00 AM to 8:00 PM, designed around the rhythm of working parents."
        trail={[
          { label: "Home", to: "/" },
          { label: "Programs", to: "/programs" },
          { label: "Daycare" },
        ]}
      />

      {/* SECTION 1 — Image LEFT, content RIGHT */}
      <section className="py-16 sm:py-24">
        <div className="container-wide grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-6 order-1">
            <Reveal>
              <div className="relative">
                <img
                  src={garden}
                  alt="A safe and homely daycare environment"
                  loading="lazy"
                  className="rounded-[2rem] shadow-lift w-full aspect-[4/5] object-cover"
                />
                {/* Floating timing chip */}
                <div className="absolute -bottom-6 left-6 bg-card border border-border rounded-2xl shadow-soft px-5 py-4 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl gradient-honey flex items-center justify-center shadow-honey">
                    <Clock className="h-5 w-5 text-ink" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">Open daily</p>
                    <p className="font-display text-lg font-bold text-ink leading-none mt-1">
                      9 AM – 8 PM
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-6 order-2">
            <Reveal delay={0.1}>
              <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-honey-dark">
                01 · Overview
              </span>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-ink leading-tight">
                A daycare that feels like a{" "}
                <span className="marker-honey">second home</span>
              </h2>
              <div className="mt-6 space-y-5 text-lg text-muted-foreground leading-relaxed">
                <p>
                  We believe daycare should be the second home for kids. Our
                  aim is to provide a{" "}
                  <strong className="text-ink">safe, hygienic and child-friendly</strong>{" "}
                  environment — and to help every little one make it their own.
                </p>
                <p>
                  We work closely with working parents and support them with{" "}
                  <strong className="text-ink">extended daycare timings</strong>{" "}
                  from 9:00 AM to 8:00 PM, with various batches available.
                </p>
                <p>
                  This helps a wide range of parents — from the IT industry to
                  other professional fields — manage their{" "}
                  <em>work-life balance</em> with confidence and peace of mind.
                </p>
              </div>

              {/* Mini stat strip */}
              <div className="mt-8 grid grid-cols-3 gap-3">
                {[
                  { k: "9–8", v: "Open hours" },
                  { k: "1.5–6", v: "Age range" },
                  { k: "1:6", v: "Care ratio" },
                ].map((s) => (
                  <div
                    key={s.v}
                    className="rounded-2xl bg-cream border border-border px-4 py-3 text-center"
                  >
                    <p className="font-display text-xl font-bold text-ink">{s.k}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{s.v}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SECTION 2 — Image RIGHT, content LEFT */}
      <section className="py-16 sm:py-24 bg-honeycomb-soft">
        <div className="container-wide grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-7 order-2 lg:order-1">
            <Reveal>
              <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-honey-dark">
                02 · Distinctive Features
              </span>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-ink leading-tight">
                What makes our daycare{" "}
                <span className="marker-honey">different</span>
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-xl">
                Every detail — from staff ratios to toys to communication —
                is designed around your child's safety, growth and joy.
              </p>
            </Reveal>

            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {features.map((f, i) => (
                <Reveal key={f.title} delay={0.04 * i}>
                  <Card className="card-lift bg-card border-border rounded-2xl h-full">
                    <CardContent className="p-5 flex gap-4">
                      <div className="h-10 w-10 rounded-lg bg-honey/15 flex items-center justify-center shrink-0">
                        <f.icon className="h-5 w-5 text-honey-dark" />
                      </div>
                      <div>
                        <h3 className="font-display text-base font-bold text-ink leading-snug">
                          {f.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed mt-1">
                          {f.desc}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 order-1 lg:order-2 lg:sticky lg:top-24">
            <Reveal delay={0.1}>
              <img
                src={snack}
                alt="Children enjoying daycare time"
                loading="lazy"
                className="rounded-[2rem] shadow-lift w-full aspect-[4/5] object-cover"
              />
              <div className="mt-5 bg-cream rounded-2xl p-6 border border-border">
                <p className="font-hand text-2xl text-honey-dark leading-tight">
                  "Like a second home — only buzzier."
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Parents stay in the loop with daily photos, messages and open
                  day sessions.
                </p>
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
                Ready to drop by?
              </h3>
              <p className="mt-3 text-lg text-muted-foreground max-w-xl mx-auto">
                Visit our daycare, meet our caregivers and see the spaces your
                little one will call home-away-from-home.
              </p>
              <div className="mt-7 flex flex-wrap gap-3 justify-center">
                <Button asChild className="rounded-full h-12 px-7 shadow-honey">
                  <Link to="/contact">
                    Book a visit <ArrowRight className="ml-2 h-4 w-4" />
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

export default Daycare;
