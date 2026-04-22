import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Reveal, SectionHeading } from "../SectionHeading";

const reviews = [
  {
    quote: "The teachers here are like family. My daughter has bloomed so much since starting — she comes home with stories every single day.",
    name: "Sarah Jenkins",
    role: "Parent of Lila, age 4",
    initials: "SJ",
  },
  {
    quote: "It's truly a magical place. Learning feels like play, and the warmth from the staff is something we never expected to find.",
    name: "Arjun Mehta",
    role: "Parent of Vihaan, age 3",
    initials: "AM",
  },
  {
    quote: "We toured five schools. BusyBees was the only one where my son did not want to leave. That said it all.",
    name: "Emily Tan",
    role: "Parent of Nathan, age 5",
    initials: "ET",
  },
];

export const Testimonials = () => {
  const [i, setI] = useState(0);
  const r = reviews[i];

  return (
    <section className="py-24 sm:py-28">
      <div className="container-wide grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5">
          <SectionHeading
            align="left"
            eyebrow="Parent's corner"
            title="Loved by"
            highlight="busy bee parents"
            description="Read what families across our hive have to say about life at BusyBees."
          />
          <div className="mt-8 flex items-center gap-3">
            <button
              onClick={() => setI((i - 1 + reviews.length) % reviews.length)}
              className="h-11 w-11 grid place-items-center rounded-full bg-cream border border-border hover:bg-honey hover:text-ink transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => setI((i + 1) % reviews.length)}
              className="h-11 w-11 grid place-items-center rounded-full bg-honey text-ink shadow-honey hover:scale-105 transition-transform"
              aria-label="Next"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
            <div className="ml-2 text-sm text-muted-foreground">{i + 1} / {reviews.length}</div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <Reveal>
            <div className="relative bg-card rounded-[2rem] p-8 sm:p-12 shadow-lift border border-border">
              <Quote className="absolute -top-4 -left-2 h-16 w-16 text-honey/30" />
              <p className="font-display text-2xl sm:text-3xl text-ink leading-snug">
                "{r.quote}"
              </p>
              <div className="mt-8 flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-honey grid place-items-center font-bold text-ink">{r.initials}</div>
                <div>
                  <div className="font-semibold text-ink">{r.name}</div>
                  <div className="text-sm text-muted-foreground">{r.role}</div>
                </div>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3">
              {reviews.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setI(idx)}
                  className={`h-1.5 rounded-full transition-all ${idx === i ? "bg-honey" : "bg-border"}`}
                  aria-label={`Go to review ${idx + 1}`}
                />
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
