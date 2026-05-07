import { Link } from "react-router-dom";
import { Quote, ArrowRight, MessageCircle, Baby, Users } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/SectionHeading";
import { Seo, breadcrumbSchema } from "@/components/site/Seo";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { whatsappLink } from "@/lib/business";

const mix = [
  { emoji: "🎨", title: "Art & Crafts", desc: "Hands-on creating with diverse materials and techniques." },
  { emoji: "🎭", title: "Drama & Storytelling", desc: "Role-play, character work and tales that come alive on stage." },
  { emoji: "🎵", title: "Music & Dance", desc: "Rhythm, movement and joyful self-expression." },
  { emoji: "🚌", title: "Field Trips", desc: "Real-world adventures with partner clubs for outdoor day sessions." },
  { emoji: "👨‍🍳", title: "Fireless Cooking", desc: "Safe, no-flame recipes that build independence and confidence." },
];

const SummerCamps = () => {
  return (
    <>
      <Seo
        title="Summer Camps for Kids in Nigdi Pune — Busy Bees Preschool"
        description="Busy Bees summer camps in Nigdi Pradhikaran, Pune — art, drama, music, field trips, fireless cooking and expert workshops for children aged 2 and above. Register now."
        path="/programs/summer-camps"
        keywords={[
          "summer camp Nigdi Pune",
          "kids summer camp Pradhikaran",
          "summer programme Pune children",
          "summer camp preschool Nigdi",
          "children activities summer Pune",
        ]}
        jsonLd={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Programs", path: "/programs" },
          { name: "Summer Camps", path: "/programs/summer-camps" },
        ])}
      />
      <PageHero
        eyebrow="Seasonal · Ages 2+"
        title="Summer Camps —"
        highlight="fun all the way"
        description="A colourful mix of art, performance, exploration and play — the highlight of every BusyBees year."
        trail={[
          { label: "Home", to: "/" },
          { label: "Programs", to: "/programs" },
          { label: "Summer Camps" },
        ]}
      />

      {/* In the mix */}
      <section className="py-16 sm:py-24">
        <div className="container-wide">
          <Reveal>
            <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-honey-dark">
              01 · The Programme
            </span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-ink leading-tight">
              What's in the <span className="marker-honey">Mix</span>
            </h2>
          </Reveal>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {mix.map((m, i) => (
              <Reveal key={m.title} delay={0.05 * i}>
                <Card className="card-lift bg-card border-border rounded-2xl h-full">
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl">{m.emoji}</div>
                    <h3 className="mt-4 font-display text-lg font-bold text-ink">
                      {m.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      {m.desc}
                    </p>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Age groups */}
      <section className="py-16 sm:py-24 bg-honeycomb-soft">
        <div className="container-wide">
          <Reveal>
            <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-honey-dark">
              02 · Designed for Every Age
            </span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-ink leading-tight">
              Age-grouped <span className="marker-honey">activities</span>
            </h2>
          </Reveal>
          <div className="mt-10 grid md:grid-cols-2 gap-6">
            <Reveal>
              <div className="bg-cream rounded-[2rem] p-8 border border-border shadow-soft h-full">
                <div className="h-12 w-12 rounded-xl gradient-honey flex items-center justify-center shadow-honey">
                  <Baby className="h-6 w-6 text-ink" />
                </div>
                <h3 className="mt-5 font-display text-2xl font-bold text-ink">
                  Ages 2 – 6
                </h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  Activities lean towards art, craft and music — gentle, joyful
                  introductions to creative play that build confidence and
                  curiosity in our youngest campers.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="bg-cream rounded-[2rem] p-8 border border-border shadow-soft h-full">
                <div className="h-12 w-12 rounded-xl gradient-honey flex items-center justify-center shadow-honey">
                  <Users className="h-6 w-6 text-ink" />
                </div>
                <h3 className="mt-5 font-display text-2xl font-bold text-ink">
                  Ages 6+
                </h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  Focus shifts to drama, storytelling and skill workshops. We
                  also partner with various clubs for day-wise outdoor
                  sessions that broaden young horizons.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Expert sessions */}
      <section className="py-16 sm:py-24">
        <div className="container-tight">
          <Reveal>
            <div className="bg-honey/15 border border-honey/40 rounded-[2rem] p-10 sm:p-14">
              <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-honey-dark">
                03 · Expert Sessions
              </span>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold text-ink leading-tight">
                Specialised <span className="marker-honey">Expert Sessions</span>
              </h2>
              <p className="mt-5 text-lg text-ink/80 leading-relaxed max-w-2xl">
                One- and two-day specialised sessions in dance and yoga,
                conducted by expert teachers in their respective fields —
                giving children a taste of skills they may want to pursue
                later. Included as part of the regular camp programme.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Grand finale */}
      <section className="py-16 sm:py-24 bg-honeycomb-soft">
        <div className="container-wide">
          <Reveal>
            <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-honey-dark">
              04 · The Showcase
            </span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-ink leading-tight">
              The Grand Finale 🏆
            </h2>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed max-w-3xl">
              Little ones explore poetry, word games, role-play and puzzles.
              We run get-crafty sessions, knot-tying, map-making and more —
              culminating in <strong className="text-ink">'A Performance'</strong>: a showcase of music,
              dance and drama as the camp's unforgettable closing event.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Closing quote */}
      <section className="py-20">
        <div className="container-tight">
          <Reveal>
            <blockquote className="border-l-4 border-honey pl-6 py-2 italic font-display text-2xl sm:text-3xl text-ink leading-snug">
              <Quote className="h-7 w-7 text-honey mb-3" />
              "Six weeks of summer your child will still talk about in October."
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-ink text-cream">
        <div className="container-tight text-center">
          <Reveal>
            <h3 className="font-display text-3xl sm:text-4xl font-bold">
              Register for this year's camp
            </h3>
            <p className="mt-3 text-lg text-cream/80 max-w-xl mx-auto">
              Seats fill fast — enquire early to avoid disappointment.
            </p>
            <div className="mt-7 flex flex-wrap gap-3 justify-center">
              <Button asChild className="rounded-full h-12 px-7 shadow-honey">
                <a
                  href={whatsappLink("Hi! I'd like to know about the Busy Bees summer camp.")}
                  target="_blank"
                  rel="noreferrer"
                >
                  <MessageCircle className="mr-2 h-4 w-4" /> WhatsApp us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="rounded-full h-12 px-7 bg-transparent border-cream/40 text-cream hover:bg-cream hover:text-ink"
              >
                <Link to="/contact">Contact us</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
};

export default SummerCamps;
