import { useEffect, useMemo, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { SmartImage } from "@/components/site/SmartImage";
import { Seo, breadcrumbSchema } from "@/components/site/Seo";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

// Auto-load every image from the gallery_assets folder.
// Vite resolves & optimizes these at build time.
const imageModules = import.meta.glob(
  "@/assets/gallery_assets/*.{jpg,jpeg,png,webp}",
  { eager: true, import: "default" }
) as Record<string, string>;

const prettify = (path: string) => {
  const file = path.split("/").pop() ?? "";
  return file
    .replace(/\.[^.]+$/, "")
    .replace(/^thumbs[_-]?/i, "")
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase())
    .trim();
};

const photos: { src: string; alt: string }[] = Object.entries(imageModules)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([path, src]) => ({ src, alt: prettify(path) }));

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
  const [page, setPage] = useState(1);
  const [open, setOpen] = useState<number | null>(null);
  const [fadeKey, setFadeKey] = useState(0);

  const totalPages = Math.max(1, Math.ceil(photos.length / PAGE_SIZE));
  const start = (page - 1) * PAGE_SIZE;
  const visible = useMemo(() => photos.slice(start, start + PAGE_SIZE), [start]);

  const goTo = (p: number) => {
    const next = Math.min(Math.max(1, p), totalPages);
    if (next === page) return;
    setPage(next);
    setFadeKey((k) => k + 1);
  };

  const close = () => setOpen(null);
  const prev = () =>
    setOpen((i) => (i === null ? null : (i - 1 + photos.length) % photos.length));
  const next = () =>
    setOpen((i) => (i === null ? null : (i + 1) % photos.length));

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const pageNumbers = getPageNumbers(page, totalPages);

  return (
    <>
      <Seo
        title="Photo Gallery — Busy Bees Preschool, Nigdi Pradhikaran"
        description="Peek inside Busy Bees Preschool & Daycare in Nigdi Pradhikaran, Pune — classrooms, play areas, celebrations and everyday joy."
        path="/gallery"
        keywords={["preschool gallery Nigdi", "busy bees photos Pune", "preschool activities Nigdi Pradhikaran"]}
        jsonLd={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Gallery", path: "/gallery" }])}
      />
      <PageHero
        eyebrow="Photo gallery"
        title="Real days,"
        highlight="real smiles"
        description="A peek into the everyday at BusyBees — straight from our teachers' phones, no staging required."
        trail={[{ label: "Home", to: "/" }, { label: "Gallery" }]}
      />

      <section className="py-12 md:py-16">
        <div className="container-wide">
          {/* Meta line */}
          <div className="text-center text-sm text-muted-foreground">
            Showing{" "}
            <span className="font-semibold text-ink">
              {photos.length === 0 ? 0 : start + 1}–{start + visible.length}
            </span>{" "}
            of <span className="font-semibold text-ink">{photos.length}</span> photos
          </div>

          {/* Grid (only this re-renders on page change) */}
          <div
            key={fadeKey}
            className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 animate-fade-in"
          >
            {visible.map((p, i) => {
              const globalIndex = start + i;
              return (
                <button
                  key={`${p.src}-${globalIndex}`}
                  onClick={() => setOpen(globalIndex)}
                  className="block w-full overflow-hidden rounded-2xl group relative shadow-soft transition-transform duration-300 hover:-translate-y-0.5 bg-cream"
                  aria-label={`Open photo: ${p.alt}`}
                >
                  <SmartImage
                    src={p.src}
                    alt={p.alt}
                    aspect="aspect-square"
                    fit="contain"
                    wrapperClassName="rounded-2xl bg-cream"
                    className="p-1 transition-transform duration-700 group-hover:scale-[1.04]"
                    sizes="(min-width:1024px) 25vw, (min-width:640px) 33vw, 50vw"
                  />
                  <div className="absolute inset-0 ring-0 group-hover:ring-2 ring-honey/60 rounded-2xl transition-all pointer-events-none" />
                </button>
              );
            })}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-8">
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
              <div className="mt-2 text-center text-xs text-muted-foreground">
                Page {page} of {totalPages}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {open !== null && photos[open] && (
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
              src={photos[open].src}
              alt={photos[open].alt}
              className="max-h-[80vh] max-w-[92vw] rounded-2xl shadow-lift object-contain"
            />
            <figcaption className="text-cream/90 text-sm">
              <span className="font-medium">{photos[open].alt}</span>
              <span className="mx-2 opacity-50">·</span>
              <span className="opacity-70">
                {open + 1} / {photos.length}
              </span>
            </figcaption>
          </figure>
        </div>
      )}
    </>
  );
};

export default Gallery;
