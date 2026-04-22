import { useState } from "react";
import { X } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/SectionHeading";
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
  { src: g3, alt: "Garden play", category: "Outdoors" },
  { src: g1, alt: "Painting", category: "Art" },
];

const filters = ["All", "Classroom", "Art", "Outdoors", "Events", "Play", "Daily life"];

const Gallery = () => {
  const [filter, setFilter] = useState("All");
  const [open, setOpen] = useState<number | null>(null);
  const visible = filter === "All" ? photos : photos.filter((p) => p.category === filter);

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
                onClick={() => setFilter(f)}
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

          {/* Masonry-ish grid */}
          <div className="mt-10 columns-2 md:columns-3 lg:columns-4 gap-4 [column-fill:_balance]">
            {visible.map((p, i) => (
              <Reveal key={`${p.src}-${i}`} delay={(i % 6) * 0.04} className="mb-4 break-inside-avoid">
                <button
                  onClick={() => setOpen(i)}
                  className="block w-full overflow-hidden rounded-2xl group relative shadow-soft"
                >
                  <img src={p.src} alt={p.alt} loading="lazy" className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                    <span className="text-cream text-xs uppercase tracking-wider">{p.category}</span>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {open !== null && (
        <div
          className="fixed inset-0 z-[80] bg-ink/85 backdrop-blur-sm grid place-items-center p-4 animate-fade-in-up"
          onClick={() => setOpen(null)}
        >
          <button
            onClick={() => setOpen(null)}
            className="absolute top-5 right-5 h-11 w-11 grid place-items-center rounded-full bg-cream text-ink shadow-lift"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
          <img src={visible[open].src} alt={visible[open].alt} className="max-h-[85vh] max-w-[90vw] rounded-2xl shadow-lift" />
        </div>
      )}
    </>
  );
};

export default Gallery;
