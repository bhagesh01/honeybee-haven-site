import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Reveal, SectionHeading } from "../SectionHeading";
import g1 from "@/assets/g-paint.webp";
import g2 from "@/assets/g-blocks.jpg";
import g3 from "@/assets/g-garden.jpg";
import g4 from "@/assets/g-reading.jpg";
import g5 from "@/assets/g-stage.jpg";
import g6 from "@/assets/g-snack.jpg";

const shots = [
  { src: g3, alt: "Children playing in the garden", span: "md:col-span-2 md:row-span-2", h: "h-72 md:h-full" },
  { src: g1, alt: "Painting class", span: "", h: "h-56" },
  { src: g4, alt: "Reading corner", span: "", h: "h-56" },
  { src: g2, alt: "Building blocks", span: "md:row-span-2", h: "h-72 md:h-full" },
  { src: g5, alt: "Annual day stage", span: "", h: "h-56" },
  { src: g6, alt: "Snack time", span: "", h: "h-56" },
];

export const GalleryPreview = () => {
  return (
    <section className="py-24 sm:py-28">
      <div className="container-wide">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <SectionHeading
            align="left"
            eyebrow="Inside the hive"
            title="Our"
            highlight="hive life"
            description="Real moments from real days. No filters, no staged shots — just our kids being kids."
          />
          <Link to="/gallery" className="inline-flex items-center gap-2 font-semibold text-honey-dark group">
            View full gallery
            <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 md:grid-rows-2 gap-3 sm:gap-4 md:auto-rows-[180px]">
          {shots.map((s, i) => (
            <Reveal key={i} delay={i * 0.05} className={s.span}>
              <div className={`relative overflow-hidden rounded-3xl group ${s.h} h-full`}>
                <img src={s.src} alt={s.alt} width={800} height={600} loading="lazy" decoding="async" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
