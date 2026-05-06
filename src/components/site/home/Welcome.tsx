import { Link } from "react-router-dom";
import { ArrowRight, Play } from "lucide-react";
import { Reveal } from "../SectionHeading";
import { VideoPlayer } from "@/components/ui/video-thumbnail-player";
import classroom from "@/assets/classroom.webp";
import paint from "@/assets/g-paint.webp";

export const Welcome = () => {
  return (
    <section className="py-24 sm:py-28 relative">
      <div className="container-wide grid lg:grid-cols-12 gap-12 items-center">
        {/* Left — overlapping images */}
        <div className="lg:col-span-5 relative">
          <Reveal>
            <div className="relative">
              <img
                src={paint}
                alt="Child painting at preschool"
                width={896}
                height={896}
                loading="lazy"
                className="rounded-[2rem] w-full max-w-[420px] aspect-square object-cover shadow-lift tilt-l"
              />
              <div className="absolute -bottom-5 left-6 bg-card rounded-2xl px-4 py-2 shadow-soft border border-border">
                <span className="font-hand text-xl text-ink">Little artist at work</span>
              </div>
              {/* Watch a day */}
              <div className="absolute -right-2 sm:right-4 top-4 sm:top-12 bg-card rounded-2xl shadow-lift overflow-hidden w-44 sm:w-56 tilt-r">
                <div className="relative">
                  <img src={classroom} alt="A day at BusyBees" width={400} height={300} loading="lazy" className="w-full h-28 sm:h-32 object-cover" />
                  <button className="absolute inset-0 grid place-items-center bg-ink/30 hover:bg-ink/40 transition-colors">
                    <span className="h-10 w-10 rounded-full bg-honey grid place-items-center text-ink shadow-honey">
                      <Play className="h-4 w-4 ml-0.5" />
                    </span>
                  </button>
                </div>
                <div className="px-3 py-2 text-[11px] uppercase tracking-wider text-muted-foreground">Watch a day in the life</div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Right — text */}
        <div className="lg:col-span-7">
          <Reveal delay={0.1}>
            <span className="text-[11px] uppercase tracking-[0.28em] font-semibold text-honey-dark">Our story</span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl font-bold text-ink leading-[1.05]">
              Welcome to our{" "}
              <span className="marker-honey italic">Hive of Happiness</span>
            </h2>
            <p className="mt-5 text-muted-foreground text-lg leading-relaxed max-w-xl">
              At BusyBees, we believe every child is a natural researcher. Our curriculum blends Montessori principles
              with modern play-based learning, so your little one is always <em className="font-semibold not-italic text-ink">bee bold</em> in their explorations.
            </p>


            {/* Story points instead of generic icon grid */}
            <ul className="mt-8 space-y-5 max-w-lg">
              {[
                ["A teacher who knows your child by name", "Small classes, individual rhythms, real relationships."],
                ["Play that quietly teaches mastery", "Phonics on a swing. Math at snack time. Wonder all day."],
                ["A safe second home", "Warm meals, soft naps, and big hugs from people who genuinely care."],
              ].map(([h, p]) => (
                <li key={h} className="flex gap-4">
                  <span className="mt-2 h-2 w-2 rounded-full bg-honey shrink-0 ring-4 ring-honey/20" />
                  <div>
                    <div className="font-semibold text-ink">{h}</div>
                    <div className="text-sm text-muted-foreground mt-0.5">{p}</div>
                  </div>
                </li>
              ))}
            </ul>

            <Link
              to="/about"
              className="mt-9 inline-flex items-center gap-2 text-honey-dark font-semibold group"
            >
              Discover our story
              <span className="h-9 w-9 rounded-full bg-honey grid place-items-center text-ink shadow-honey group-hover:translate-x-1 transition-transform">
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
