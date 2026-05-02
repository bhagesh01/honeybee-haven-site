import { Calendar, MapPin } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal, SectionHeading } from "@/components/site/SectionHeading";
import { Seo, breadcrumbSchema } from "@/components/site/Seo";
import stage from "@/assets/g-stage.jpg";
import garden from "@/assets/g-garden.jpg";
import reading from "@/assets/g-reading.jpg";
import paint from "@/assets/g-paint.webp";

const upcoming = [
  { day: "22", mon: "Oct", title: "Annual Honey Harvest Festival", time: "10 AM – 2 PM", loc: "Main Garden", img: garden, desc: "A day of crafts, honey tasting, story circles and outdoor games for the whole family." },
  { day: "05", mon: "Nov", title: "Parent–Teacher Symposium", time: "5 PM – 7 PM", loc: "Auditorium", img: reading, desc: "A deep-dive into our curriculum and child development milestones with our principal and lead educators." },
  { day: "14", mon: "Nov", title: "Diwali Lantern Workshop", time: "4 PM – 6 PM", loc: "Art Studio", img: paint, desc: "Children craft glowing lanterns from upcycled materials together with their parents." },
];

const past = [
  { title: "Bee Olympics", desc: "Three days of friendly competition across mini sports, puzzles and team challenges." },
  { title: "Annual Day 'Once Upon a Hive'", desc: "A children-led musical retelling of bee folktales from around the world." },
  { title: "Grandparents' Tea", desc: "An afternoon of stories, songs and chai with the people who love our kids the most." },
];

const Events = () => {
  return (
    <>
      <Seo
        title="Events & Celebrations — Busy Bees Preschool, Nigdi Pradhikaran"
        description="Festivals, workshops and celebrations at Busy Bees Preschool, Nigdi Pradhikaran, Pune. See what's happening this season."
        path="/events"
        jsonLd={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Events", path: "/events" }])}
      />
      <PageHero
        eyebrow="Celebrations"
        title="Moments that make a"
        highlight="childhood"
        description="From quiet rituals to big festivals — events at BusyBees are how we mark the milestones of growing up together."
        trail={[{ label: "Home", to: "/" }, { label: "Events" }]}
      />

      <section className="py-20">
        <div className="container-wide">
          <SectionHeading
            align="left"
            eyebrow="Save the date"
            title="Upcoming"
            highlight="happenings"
          />
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcoming.map((e, i) => (
              <Reveal key={e.title} delay={i * 0.07}>
                <article className="bg-card rounded-3xl overflow-hidden border border-border shadow-soft card-lift h-full">
                  <div className="relative h-48 overflow-hidden">
                    <img src={e.img} alt={e.title} loading="lazy" className="w-full h-full object-cover" />
                    <div className="absolute top-4 left-4 bg-card rounded-2xl px-3 py-2 text-center shadow-soft">
                      <div className="font-display text-2xl font-bold text-ink leading-none">{e.day}</div>
                      <div className="text-[10px] uppercase tracking-widest text-muted-foreground mt-0.5">{e.mon}</div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl font-bold text-ink">{e.title}</h3>
                    <div className="mt-3 flex flex-wrap gap-3 text-xs text-muted-foreground">
                      <span className="inline-flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" /> {e.time}</span>
                      <span className="inline-flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5" /> {e.loc}</span>
                    </div>
                    <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{e.desc}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-cream">
        <div className="container-wide grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <img src={stage} alt="Annual day" loading="lazy" className="rounded-[2rem] shadow-lift w-full aspect-[5/4] object-cover tilt-l" />
          </div>
          <div className="lg:col-span-7">
            <SectionHeading
              align="left"
              eyebrow="Recently in the hive"
              title="Looking"
              highlight="back fondly"
            />
            <ul className="mt-8 space-y-5">
              {past.map((e) => (
                <li key={e.title} className="border-b border-border pb-5 last:border-none">
                  <div className="font-display text-lg font-bold text-ink">{e.title}</div>
                  <p className="text-sm text-muted-foreground mt-1">{e.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Events;
