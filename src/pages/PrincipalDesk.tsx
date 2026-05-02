import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/SectionHeading";
import { Seo, breadcrumbSchema } from "@/components/site/Seo";
import { Quote } from "lucide-react";
import principal from "@/assets/principal_desk.png";

const PrincipalDesk = () => {
  return (
    <>
      <PageHero
        eyebrow="Principal's Desk"
        title="Welcome to"
        highlight="Busy Bees"
        description="A personal note from our founder on the joy of early years, the children we serve, and the village we're building together."
        trail={[
          { label: "Home", to: "/" },
          { label: "About", to: "/about" },
          { label: "Principal's Desk" },
        ]}
      />

      {/* Letter section */}
      <section className="py-20 sm:py-24 bg-honeycomb-soft">
        <div className="container-tight grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Image — first on mobile */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 order-1">
            <Reveal>
              <div className="relative">
                <div className="absolute -inset-4 bg-honey/30 rounded-[3rem] blur-2xl -z-10" />
                <img
                  src={principal}
                  alt="Deepa Jawadekar, Principal & Founder of Busy Bees"
                  loading="lazy"
                  className="rounded-[2rem] shadow-lift w-full max-w-md mx-auto aspect-[4/5] object-cover"
                />
                <div className="mt-6 text-center lg:text-left max-w-md mx-auto">
                  <div className="font-display text-2xl font-bold text-ink">Deepa Jawadekar</div>
                  <div className="text-sm text-muted-foreground mt-1">Principal & Founder · Busy Bees Preschool</div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Letter content */}
          <div className="lg:col-span-7 order-2">
            <Reveal delay={0.1}>
              <span className="text-[11px] uppercase tracking-[0.28em] font-semibold text-honey-dark">
                A letter from the founder
              </span>
              <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold text-ink leading-[1.1]">
                Welcome to <span className="marker-honey">Busy Bees</span>
              </h2>

              <div className="mt-8 space-y-5 text-muted-foreground text-lg leading-relaxed">
                <p>
                  I have been working in the pre-school segment for the last{" "}
                  <span className="font-semibold text-ink">15 years</span>. Prior to starting my
                  own venture, I worked with various UK-based schools and renowned Indian
                  preschools. I've also been part of training and knowledge sessions on advanced
                  teaching methods such as{" "}
                  <span className="font-semibold text-ink">Montessori</span> and{" "}
                  <span className="font-semibold text-ink">Phonics</span>.
                </p>

                <p>
                  We provide complete education to children covering five areas of learning —
                  Communication, Literacy, Problem-solving, Reasoning and Numeracy — while caring
                  for their social, emotional and physical development. Beyond regular schooling,
                  we now run various{" "}
                  <span className="marker-honey font-semibold text-ink">Buzzy Club activities</span>{" "}
                  in Gymnastics, Dance and Science, along with a dedicated Daycare for infants
                  and toddlers.
                </p>

                <p>
                  I strongly believe in developing the culture of "giving back to society."
                  Having served as Youth Director with the Rotary Club, I've interacted with many
                  schools and led social events such as the{" "}
                  <span className="font-semibold text-ink">Road Safety Rally</span> with our
                  little Busy Bees.
                </p>

                <p>
                  With Busy Bees Preschool, I look forward to getting associated with your little
                  ones and infusing the skills required for the next generation.
                </p>
              </div>

              {/* Quote highlight */}
              <Reveal delay={0.2}>
                <div className="mt-12 relative bg-card border border-border rounded-[2rem] p-8 sm:p-10 shadow-soft">
                  <div className="absolute -top-5 left-8 bg-honey text-primary-foreground rounded-full p-3 shadow-honey">
                    <Quote className="h-5 w-5" />
                  </div>
                  <p className="font-display text-2xl sm:text-3xl font-bold text-ink leading-tight">
                    Let's <span className="marker-honey">celebrate childhood!</span>
                  </p>
                  <div className="mt-6 flex items-center gap-3">
                    <div className="h-px w-10 bg-honey-dark/60" />
                    <div>
                      <div className="font-display text-base font-semibold text-ink">Deepa Jawadekar</div>
                      <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mt-0.5">
                        Principal & Founder
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrincipalDesk;
