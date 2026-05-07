import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Reveal } from "../SectionHeading";
import { VideoPlayer } from "@/components/ui/video-thumbnail-player";
import { useState, useEffect } from "react";

import classroom from "@/assets/classroom.webp";
import paint from "@/assets/gallery_assets/thumbs_trip2.jpg";
import watchDay from "@/assets/gallery_assets/thumbs_welcome1.jpg";

export const Welcome = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  // Close on ESC
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        setIsVideoOpen(false);
      }
    };

    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, []);

  return (
    <>
      <section className="py-24 sm:py-28 relative">
        <div className="container-wide grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left — overlapping images */}
          <div className="lg:col-span-5 relative">
            <Reveal>
              <div className="relative">
                
                {/* Main Image */}
                <img
                  src={paint}
                  alt="Child painting at preschool"
                  width={896}
                  height={896}
                  loading="lazy"
                  className="rounded-[2rem] w-full max-w-[420px] aspect-square object-cover shadow-lift tilt-l"
                />

                {/* Floating Label */}
                <div className="absolute -bottom-5 left-6 bg-card rounded-2xl px-4 py-2 shadow-soft border border-border">
                  <span className="font-hand text-xl text-ink">
                    Little artist at work
                  </span>
                </div>

                {/* Watch A Day Card */}
                <div
  className="
    absolute
    right-[-10px] sm:right-[-20px]
    top-[-90px] sm:top-[-140px]
    w-48 sm:w-64
    z-20
    tilt-r
  "
>
                  
                  {/* Clickable Wrapper */}
                  <div
  onClick={() => setIsVideoOpen(true)}
  className="
    group
    cursor-pointer
    rounded-3xl
    overflow-hidden
    bg-white/90
    backdrop-blur-md
    border border-white/40
    shadow-2xl
    hover:scale-[1.03]
    transition-all duration-500
  "
>
  {/* Thumbnail */}
  <div className="relative aspect-[4/3] overflow-hidden">
    
    <img
      src={watchDay}
      alt="Watch a day in hive"
      className="
        w-full h-full object-cover
        group-hover:scale-110
        transition-transform duration-700
      "
    />

    {/* Dark Overlay */}
    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-500" />

    {/* Play Button */}
    <div className="absolute inset-0 flex items-center justify-center">
      <div
        className="
          h-16 w-16
          rounded-full
          bg-white/90
          backdrop-blur-md
          flex items-center justify-center
          shadow-2xl
          group-hover:scale-110
          transition-transform duration-300
        "
      >
        <div className="ml-1 border-l-[14px] border-l-black border-y-[9px] border-y-transparent" />
      </div>
    </div>
  </div>

  {/* Bottom Text */}
  <div className="px-4 py-3">
    <p className="text-sm font-semibold text-ink">
      Watch a day in hive
    </p>

    <p className="text-xs text-muted-foreground mt-1">
      Follow our little bees from playtime to discovery.
    </p>
  </div>
</div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right — text */}
          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              
              <span className="text-[11px] uppercase tracking-[0.28em] font-semibold text-honey-dark">
                Our story
              </span>

              <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl font-bold text-ink leading-[1.05]">
                Welcome to our{" "}
                <span className="marker-honey italic">
                  Hive of Happiness
                </span>
              </h2>

              <p className="mt-5 text-muted-foreground text-lg leading-relaxed max-w-xl">
                At BusyBees, we believe every child is a natural researcher.
                Our curriculum blends Montessori principles with modern
                play-based learning, so your little one is always{" "}
                <em className="font-semibold not-italic text-ink">
                  bee bold
                </em>{" "}
                in their explorations.
              </p>

              {/* Story Points */}
              <ul className="mt-8 space-y-5 max-w-lg">
                {[
                  [
                    "A teacher who knows your child by name",
                    "Small classes, individual rhythms, real relationships.",
                  ],
                  [
                    "Play that quietly teaches mastery",
                    "Phonics on a swing. Math at snack time. Wonder all day.",
                  ],
                  [
                    "A safe second home",
                    "Warm meals, soft naps, and big hugs from people who genuinely care.",
                  ],
                ].map(([h, p]) => (
                  <li key={h} className="flex gap-4">
                    <span className="mt-2 h-2 w-2 rounded-full bg-honey shrink-0 ring-4 ring-honey/20" />

                    <div>
                      <div className="font-semibold text-ink">{h}</div>

                      <div className="text-sm text-muted-foreground mt-0.5">
                        {p}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              {/* CTA */}
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

      {/* ================= FULLSCREEN VIDEO MODAL ================= */}

      {isVideoOpen && (
  <div
    onClick={() => setIsVideoOpen(false)}
    className="
      fixed inset-0 z-[999]
      flex items-center justify-center
      bg-black/60
      backdrop-blur-xl
      p-4
      animate-in fade-in duration-300
    "
  >
    
    {/* Close Button OUTSIDE */}
    <button
      onClick={() => setIsVideoOpen(false)}
      className="
        absolute top-6 right-6
        h-11 w-11
        rounded-full
        bg-white/10
        backdrop-blur-md
        border border-white/20
        text-white
        text-xl
        flex items-center justify-center
        hover:bg-white/20
        transition-all duration-300
      "
    >
      ✕
    </button>

    {/* Video Container */}
    <div
      onClick={(e) => e.stopPropagation()}
      className="
        relative
        w-full
        max-w-4xl
        aspect-video
        rounded-3xl
        overflow-hidden
        bg-black
        shadow-2xl
        border border-white/10
        animate-in zoom-in-95 duration-300
      "
    >
      <iframe
        key={isVideoOpen ? "open" : "closed"}
        className="w-full h-full"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&rel=0"
        title="A Day in the Hive"
        allow="autoplay; encrypted-media"
        allowFullScreen
      />
    </div>
  </div>
)}
    </>
  );
};