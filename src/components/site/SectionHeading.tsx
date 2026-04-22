import { motion } from "framer-motion";
import { ReactNode } from "react";

/** Decorative honeycomb dot used as floating accents */
export const HoneyDot = ({ className = "" }: { className?: string }) => (
  <span className={`inline-block h-2.5 w-2.5 rounded-full bg-honey shadow-honey ${className}`} />
);

export const Eyebrow = ({ children, className = "" }: { children: ReactNode; className?: string }) => (
  <div className={`inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.28em] font-semibold text-honey-dark ${className}`}>
    <span className="h-px w-6 bg-honey-dark/60" />
    {children}
  </div>
);

export const SectionHeading = ({
  eyebrow,
  title,
  highlight,
  highlightVariant = "honey",
  description,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  highlight?: string;
  highlightVariant?: "honey" | "coral";
  description?: string;
  align?: "center" | "left";
}) => (
  <div className={align === "center" ? "text-center max-w-2xl mx-auto" : "max-w-2xl"}>
    {eyebrow && <Eyebrow className={align === "center" ? "justify-center" : ""}>{eyebrow}</Eyebrow>}
    <motion.h2
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl font-bold text-ink leading-[1.05]"
    >
      {title}{" "}
      {highlight && (
        <span className={highlightVariant === "honey" ? "marker-honey" : "marker-coral text-accent"}>{highlight}</span>
      )}
    </motion.h2>
    {description && (
      <p className={`mt-4 text-muted-foreground text-base sm:text-lg leading-relaxed ${align === "center" ? "mx-auto" : ""}`}>
        {description}
      </p>
    )}
  </div>
);

/** Reveal wrapper for scroll-in animations */
export const Reveal = ({
  children,
  delay = 0,
  className = "",
  y = 18,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  y?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.6, delay, ease: [0.22, 0.9, 0.32, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);
