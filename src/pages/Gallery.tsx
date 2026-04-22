import { useMemo, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/SectionHeading";
import { SmartImage } from "@/components/site/SmartImage";
import { Button } from "@/components/ui/button";
import g1 from "@/assets/g-paint.jpg";
import g2 from "@/assets/g-blocks.jpg";
import g3 from "@/assets/g-garden.jpg";
import g4 from "@/assets/g-reading.jpg";
import g5 from "@/assets/g-stage.jpg";
import g6 from "@/assets/g-snack.jpg";
import classroom from "@/assets/classroom.jpg";

const photos = [
  { src: g3, alt: "Garden play", category: "Outdoors" },
  { src: g1, alt: "Painting", category: "Art" },
  { src: classroom, alt: "Classroom", category: "Classroom" },
  { src: g2, alt: "Building blocks", category: "Play" },
  { src: g4, alt: "Reading corner", category: "Classroom" },
  { src: g5, alt: "Annual day", category: "Events" },
  { src: g6, alt: "Snack time", category: "Daily life" },
  { src: g3, alt: "Garden walk", category: "Outdoors" },
  { src: g1, alt: "Watercolour", category: "Art" },
  { src: g2, alt: "Tower building", category: "Play" },
  { src: g4, alt: "Story time", category: "Classroom" },
  { src: g5, alt: "Stage night", category: "Events" },
  { src: g6, alt: "Healthy snacks", category: "Daily life" },
  { src: g3, alt: "Sandbox fun", category: "Outdoors" },
  { src: classroom, alt: "Math corner", category: "Classroom" },
  { src: g1, alt: "Finger paints", category: "Art" },
];

const filters = ["All", "Classroom", "Art", "Outdoors", "Events", "Play", "Daily life"];
const PAGE_SIZE = 8;

const Gallery = () => {
  const [filter, setFilter] = useState("All");
  const [shown, setShown] = useState(PAGE_SIZE);
  const [open, setOpen] = useState<number | null>(null);

  const filtered = useMemo(
    () => (filter === "All" ? photos : photos.filter((p) => p.category === filter)),
    [filter]
  );
  const visible = filtered.slice(0, shown);
  const hasMore = shown < filtered.length;

  const onFilter = (f: string) => {
    setFilter(f);
    setShown(PAGE_SIZE);
  };

  const close = () => setOpen(null);
  const prev = () => setOpen((i) => (i === null ? null : (i - 1 + filtered.length) % filtered.length));
  const next = () => setOpen((i) => (i === null ? null : (i + 1) % filtered.length));

  return (
    <>
      <PageHero
        eyebrow="Photo gallery"
        title="Real days,"
        highlight="real smiles"
        description="A peek into the everyday at BusyBees — straight from our teachers' phones, no staging required."
        trail={[{ label: "Home", to: "/" }, { label: "Gallery" }]}
      />

      <section className="py-16">
        <div className="container-wide">
          {/* Filters */}
          <div className="flex flex-wrap gap-2 justify-center">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => onFilter(f)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all border ${
                  filter === f
                    ? "bg-ink text-cream border-ink"
                    : "bg-card border-border text-muted-foreground hover:border-honey hover:text-ink"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Responsive grid */}
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {visible.map((p, i) => (
              <Reveal key={`${p.src}-${i}`} delay={(i % 6) * 0.04}>
                <button
                  onClick={() => setOpen(i)}
                  className="block w-full overflow-hidden rounded-2xl group relative shadow-soft card-lift"
                >
                  <SmartImage
                    src={p.src}
                    alt={p.alt}
                    aspect="aspect-square"
                    wrapperClassName="rounded-2xl"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3 pointer-events-none">
                    <span className="text-cream text-xs uppercase tracking-wider">{p.category}</span>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>

          {/* Load more */}
          {hasMore && (
            <div className="mt-10 flex justify-center">
              <Button
                onClick={() => setShown((s) => s + PAGE_SIZE)}
                size="lg"
                className="rounded-full px-8 shadow-honey"
              >
                Load more photos
              </Button>
            </div>
          )}
          {!hasMore && filtered.length > PAGE_SIZE && (
            <div className="mt-10 text-center text-sm text-muted-foreground">
              You've reached the end · {filtered.length} photos
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {open !== null && (
        <div
          className="fixed inset-0 z-[120] bg-ink/90 backdrop-blur-sm grid place-items-center p-4 animate-fade-in"
          onClick={close}
        >
          <button
            onClick={(e) => { e.stopPropagation(); close(); }}
            className="absolute top-5 right-5 h-11 w-11 grid place-items-center rounded-full bg-cream text-ink shadow-lift"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 h-12 w-12 grid place-items-center rounded-full bg-cream text-ink shadow-lift"
            aria-label="Previous"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 h-12 w-12 grid place-items-center rounded-full bg-cream text-ink shadow-lift"
            aria-label="Next"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
          <img
            src={filtered[open].src}
            alt={filtered[open].alt}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[85vh] max-w-[90vw] rounded-2xl shadow-lift object-contain"
          />
        </div>
      )}
    </>
  );
};

export default Gallery;
