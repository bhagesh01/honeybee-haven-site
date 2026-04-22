import { Link } from "react-router-dom";
import { ArrowUpRight, Calendar } from "lucide-react";
import { Reveal, SectionHeading } from "../SectionHeading";

const events = [
  { day: "22", mon: "Oct", title: "Annual Honey Harvest Festival", desc: "A day of crafts, honey tasting, and outdoor games for the whole family.", color: "bg-honey text-ink" },
  { day: "05", mon: "Nov", title: "Parent–Teacher Symposium", desc: "A deep-dive into our curriculum and child development milestones.", color: "bg-accent/15 text-accent" },
  { day: "14", mon: "Nov", title: "Diwali Lantern Workshop", desc: "Children craft glowing lanterns from upcycled materials with parents.", color: "bg-leaf/15 text-leaf" },
];

export const EventsPreview = () => {
  return (
    <section className="py-24 sm:py-28 bg-cream relative overflow-hidden">
      <div className="container-wide grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <SectionHeading
            align="left"
            eyebrow="On the calendar"
            title="Upcoming"
            highlight="happenings"
            description="Open days, parent meet-ups, and seasonal celebrations — there's always something buzzing."
          />
          <Link to="/events" className="mt-6 inline-flex items-center gap-2 font-semibold text-honey-dark group">
            See all events
            <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        <div className="lg:col-span-8 space-y-4">
          {events.map((e, i) => (
            <Reveal key={e.title} delay={i * 0.08}>
              <article className="group bg-card rounded-3xl p-5 sm:p-6 border border-border shadow-soft card-lift flex items-center gap-5">
                <div className={`shrink-0 h-16 w-16 sm:h-20 sm:w-20 rounded-2xl grid place-items-center ${e.color}`}>
                  <div className="text-center">
                    <div className="font-display text-2xl sm:text-3xl font-bold leading-none">{e.day}</div>
                    <div className="text-[10px] uppercase tracking-widest mt-1">{e.mon}</div>
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-display text-lg sm:text-xl font-bold text-ink">{e.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{e.desc}</p>
                </div>
                <Calendar className="hidden sm:block h-5 w-5 text-muted-foreground shrink-0" />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
