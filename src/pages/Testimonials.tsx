import { useState } from "react";
import { Quote, Star } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/SectionHeading";
import { Button } from "@/components/ui/button";

type Testimonial = {
  name: string;
  role: string;
  child: string;
  text: string;
  initials: string;
  rating: number;
};

const testimonials: Testimonial[] = [
  { name: "Sarah Jenkins", role: "Parent", child: "Lila, 4", text: "We toured five preschools. The moment we walked into BusyBees, Lila ran straight to the reading nook and said 'Mama, this is my school.' She wasn't wrong.", initials: "SJ", rating: 5 },
  { name: "Arjun Mehta", role: "Parent", child: "Vihaan, 3", text: "Vihaan was a shy, quiet boy when he started. Six months in, he's leading circle time songs. The teachers truly see each child.", initials: "AM", rating: 5 },
  { name: "Emily Tan", role: "Parent", child: "Nathan, 5", text: "What I love most is how naturally academics happen here. He reads chapter books now — without a single worksheet drilled into him.", initials: "ET", rating: 5 },
  { name: "Priya Singh", role: "Parent", child: "Aanya, 2", text: "Even the daycare staff know what makes my daughter laugh. That kind of detail is rare and precious.", initials: "PS", rating: 5 },
  { name: "Rohan Kapoor", role: "Guardian", child: "Ira, 4", text: "The communication from teachers is wonderful — daily updates, photos, and genuine warmth. We always feel in the loop.", initials: "RK", rating: 5 },
  { name: "Meera Iyer", role: "Parent", child: "Kabir, 5", text: "BuzzyClub has been a revelation. Kabir's confidence in phonics and his love for science experiments have soared.", initials: "MI", rating: 5 },
  { name: "David & Anita Ross", role: "Parents", child: "Maya, 3", text: "As a working couple, the extended daycare hours saved us. But more importantly, Maya genuinely loves going every day.", initials: "DR", rating: 5 },
  { name: "Nisha Patel", role: "Parent", child: "Aryan, 4", text: "The play-way method really works. Aryan is curious, kind, and never feels 'taught' — he just learns.", initials: "NP", rating: 5 },
  { name: "Karan Shah", role: "Parent", child: "Riya, 6", text: "Three years at BusyBees and I can confidently say it shaped Riya's foundation — academically and emotionally.", initials: "KS", rating: 5 },
];

const PAGE_SIZE = 6;

const Testimonials = () => {
  const [visible, setVisible] = useState(PAGE_SIZE);
  const shown = testimonials.slice(0, visible);
  const hasMore = visible < testimonials.length;

  return (
    <>
      <PageHero
        eyebrow="Partner's Corner"
        title="In the words of our"
        highlight="parent partners"
        description="Honest stories from the families who walk through our doors every morning."
        trail={[{ label: "Home", to: "/" }, { label: "Partner's Corner" }, { label: "Testimonials" }]}
      />

      <section className="py-20">
        <div className="container-wide grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {shown.map((s, i) => (
            <Reveal key={s.name} delay={(i % PAGE_SIZE) * 0.05}>
              <article className="relative bg-card rounded-3xl p-7 border border-border shadow-soft card-lift h-full flex flex-col">
                <Quote className="absolute top-5 right-5 h-10 w-10 text-honey/25" />
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: s.rating }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-honey text-honey" />
                  ))}
                </div>
                <p className="font-display text-lg text-ink leading-snug flex-1">"{s.text}"</p>
                <div className="mt-6 flex items-center gap-3 pt-5 border-t border-border">
                  <div className="h-11 w-11 rounded-full bg-honey grid place-items-center font-bold text-ink shrink-0">{s.initials}</div>
                  <div>
                    <div className="font-semibold text-ink">{s.name}</div>
                    <div className="text-xs text-muted-foreground">{s.role} of {s.child}</div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {hasMore && (
          <div className="mt-12 text-center">
            <Button
              onClick={() => setVisible((v) => v + PAGE_SIZE)}
              variant="outline"
              className="rounded-full h-12 px-8 border-honey text-ink hover:bg-honey/10"
            >
              Load more stories
            </Button>
          </div>
        )}
      </section>
    </>
  );
};

export default Testimonials;
