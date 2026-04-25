import { useEffect, useMemo, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/SectionHeading";
import { SmartImage } from "@/components/site/SmartImage";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
// import g1 from "@/assets/g-paint.webp";
// import g2 from "@/assets/g-blocks.jpg";
// import g3 from "@/assets/g-garden.jpg";
// import g4 from "@/assets/g-reading.jpg";
// import g5 from "@/assets/g-stage.jpg";
// import g6 from "@/assets/g-snack.jpg";

import g1 from "@/assets/gallery_assets/thumbs_Annual-Concert.jpg";
import g2 from "@/assets/gallery_assets/thumbs_ArtClub.jpg";
import g3 from "@/assets/gallery_assets/thumbs_GP.jpg";
import g4 from "@/assets/gallery_assets/thumbs_GP2.jpg";
import g5 from "@/assets/gallery_assets/thumbs_Holi.jpg";
import g6 from "@/assets/gallery_assets/thumbs_Park-Picnic.jpg";
import g7 from "@/assets/gallery_assets/thumbs_Rakhi.jpg";
import g8 from "@/assets/gallery_assets/thumbs_ReadingFun.jpg";
import g9 from "@/assets/gallery_assets/thumbs_ShowTell.jpg";
import g10 from "@/assets/gallery_assets/thumbs_SportsDay.jpg";
import g11 from "@/assets/gallery_assets/thumbs_Summer-Camp.jpg";
import g12 from "@/assets/gallery_assets/thumbs_SummerCamp.jpg";
import g13 from "@/assets/gallery_assets/thumbs_brushingDay.jpg";
import g14 from "@/assets/gallery_assets/thumbs_busRide.jpg";
import g15 from "@/assets/gallery_assets/thumbs_busRide1.jpg";
import g16 from "@/assets/gallery_assets/thumbs_farmPicnic.jpg";
import g17 from "@/assets/gallery_assets/thumbs_field-trip.jpg";
import g18 from "@/assets/gallery_assets/thumbs_horse.jpg";
import g19 from "@/assets/gallery_assets/thumbs_juiceMaking.jpg";
import g20 from "@/assets/gallery_assets/thumbs_market.jpg";
import g21 from "@/assets/gallery_assets/thumbs_meet-the-Santa.jpg";
import g22 from "@/assets/gallery_assets/thumbs_palakhi1.jpg";
import g23 from "@/assets/gallery_assets/thumbs_palakhi2.jpg";
import g24 from "@/assets/gallery_assets/thumbs_palakhi3.jpg";
import g25 from "@/assets/gallery_assets/thumbs_pretendPlay.jpg";



import classroom from "@/assets/classroom.webp";

type Photo = { src: string; alt: string; category: string };

const photos: Photo[] = [
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
  { src: g2, alt: "Block city", category: "Play" },
  { src: g5, alt: "Sports day", category: "Events" },
  { src: g6, alt: "Lunch break", category: "Daily life" },
  { src: g3, alt: "Nature walk", category: "Outdoors" },
  { src: g4, alt: "Library hour", category: "Classroom" },
  { src: g1, alt: "Craft corner", category: "Art" },
  { src: g5, alt: "Dance show", category: "Events" },
  { src: g2, alt: "Puzzle time", category: "Play" },
];

const filters = ["All", "Classroom", "Art", "Outdoors", "Events", "Play", "Daily life"];
const PAGE_SIZE = 12;

const getPageNumbers = (current: number, total: number): (number | "ellipsis")[] => {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
  const pages: (number | "ellipsis")[] = [1];
  if (current > 3) pages.push("ellipsis");
  const start = Math.max(2, current - 1);
  const end = Math.min(total - 1, current + 1);
  for (let i = start; i <= end; i++) pages.push(i);
  if (current < total - 2) pages.push("ellipsis");
  pages.push(total);
  return pages;
};

const Gallery = () => {
  const [filter, setFilter] = useState("All");
  const [page, setPage] = useState(1);
  const [open, setOpen] = useState<number | null>(null);

  const filtered = useMemo(
    () => (filter === "All" ? photos : photos.filter((p) => p.category === filter)),
    [filter]
  );

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const start = (page - 1) * PAGE_SIZE;
  const visible = filtered.slice(start, start + PAGE_SIZE);

  const onFilter = (f: string) => {
    setFilter(f);
    setPage(1);
  };

  const goTo = (p: number) => {
    const next = Math.min(Math.max(1, p), totalPages);
    setPage(next);
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const close = () => setOpen(null);
  const prev = () =>
    setOpen((i) => (i === null ? null : (i - 1 + filtered.length) % filtered.length));
  const next = () =>
    setOpen((i) => (i === null ? null : (i + 1) % filtered.length));

  // Keyboard navigation in lightbox
  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, filtered.length]);

  const pageNumbers = getPageNumbers(page, totalPages);

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
                    ? "bg-ink text-cream border-ink shadow-soft"
                    : "bg-card border-border text-muted-foreground hover:border-honey hover:text-ink"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Meta line */}
          <div className="mt-6 text-center text-sm text-muted-foreground">
            Showing{" "}
            <span className="font-semibold text-ink">
              {filtered.length === 0 ? 0 : start + 1}–{start + visible.length}
            </span>{" "}
            of <span className="font-semibold text-ink">{filtered.length}</span> photos
            {filter !== "All" && <> in <span className="text-honey-dark">{filter}</span></>}
          </div>

          {/* Grid */}
          {visible.length > 0 ? (
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {visible.map((p, i) => {
                const globalIndex = start + i;
                return (
                  <Reveal key={`${p.src}-${globalIndex}`} delay={(i % 6) * 0.04}>
                    <button
                      onClick={() => setOpen(globalIndex)}
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
                        <span className="text-cream text-xs uppercase tracking-wider">
                          {p.category}
                        </span>
                      </div>
                    </button>
                  </Reveal>
                );
              })}
            </div>
          ) : (
            <div className="mt-16 text-center text-muted-foreground">
              No photos in this category yet — check back soon! 🐝
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-12">
              <Pagination>
                <PaginationContent className="flex-wrap gap-1">
                  <PaginationItem>
                    <PaginationPrevious
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        goTo(page - 1);
                      }}
                      className={page === 1 ? "pointer-events-none opacity-50" : ""}
                    />
                  </PaginationItem>

                  {pageNumbers.map((p, idx) =>
                    p === "ellipsis" ? (
                      <PaginationItem key={`e-${idx}`}>
                        <PaginationEllipsis />
                      </PaginationItem>
                    ) : (
                      <PaginationItem key={p}>
                        <PaginationLink
                          href="#"
                          isActive={p === page}
                          onClick={(e) => {
                            e.preventDefault();
                            goTo(p);
                          }}
                          className={
                            p === page
                              ? "bg-honey text-ink border-honey hover:bg-honey/90 hover:text-ink"
                              : ""
                          }
                        >
                          {p}
                        </PaginationLink>
                      </PaginationItem>
                    )
                  )}

                  <PaginationItem>
                    <PaginationNext
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        goTo(page + 1);
                      }}
                      className={page === totalPages ? "pointer-events-none opacity-50" : ""}
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
              <div className="mt-3 text-center text-xs text-muted-foreground">
                Page {page} of {totalPages}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {open !== null && filtered[open] && (
        <div
          className="fixed inset-0 z-[120] bg-ink/90 backdrop-blur-sm grid place-items-center p-4 animate-fade-in"
          onClick={close}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              close();
            }}
            className="absolute top-5 right-5 h-11 w-11 grid place-items-center rounded-full bg-cream text-ink shadow-lift hover:scale-105 transition-transform"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 h-12 w-12 grid place-items-center rounded-full bg-cream text-ink shadow-lift hover:scale-105 transition-transform"
            aria-label="Previous"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 h-12 w-12 grid place-items-center rounded-full bg-cream text-ink shadow-lift hover:scale-105 transition-transform"
            aria-label="Next"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
          <figure
            onClick={(e) => e.stopPropagation()}
            className="flex flex-col items-center gap-3 max-w-[92vw]"
          >
            <img
              src={filtered[open].src}
              alt={filtered[open].alt}
              className="max-h-[80vh] max-w-[92vw] rounded-2xl shadow-lift object-contain"
            />
            <figcaption className="text-cream/90 text-sm">
              <span className="font-medium">{filtered[open].alt}</span>
              <span className="mx-2 opacity-50">·</span>
              <span className="uppercase tracking-wider text-xs text-honey">
                {filtered[open].category}
              </span>
              <span className="mx-2 opacity-50">·</span>
              <span className="opacity-70">
                {open + 1} / {filtered.length}
              </span>
            </figcaption>
          </figure>
        </div>
      )}
    </>
  );
};

export default Gallery;
