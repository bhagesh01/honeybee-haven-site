import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BeeAvatar } from "@/components/site/BeeAvatar";

export const CtaSection = () => {
  return (
    <section className="py-24 sm:py-28">
      <div className="container-wide">
        <div className="relative overflow-hidden rounded-[2.5rem] gradient-honey p-10 sm:p-16 text-ink shadow-lift">
          <div className="absolute inset-0 bg-honeycomb-soft opacity-30" />
          <BeeAvatar index={8} className="absolute -right-4 -bottom-6 w-56 sm:w-72 animate-float-slow" />
          <BeeAvatar index={6} className="hidden md:block absolute right-1/3 top-6 w-16 animate-wiggle" />
          <div className="relative max-w-2xl">
            <span className="font-hand text-3xl text-honey-dark">Ready to visit?</span>
            <h2 className="mt-2 font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05]">
              Come see the hive in person.
            </h2>
            <p className="mt-5 text-ink/80 text-lg max-w-lg">
              Book a personal tour with our principal — meet the teachers, walk the classrooms, and feel the warmth.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-full bg-ink text-cream hover:bg-ink/90 px-7 h-12">
                <Link to="/contact">Book a Private Tour <ArrowRight className="h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full bg-cream/90 backdrop-blur border-ink/10 hover:bg-cream px-7 h-12">
                <Link to="/programs">Explore Programs</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
