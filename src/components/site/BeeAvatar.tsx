import { cn } from "@/lib/utils";
import bee1 from "@/assets/bees/bee-1.png";
import bee2 from "@/assets/bees/bee-2.png";
import bee3 from "@/assets/bees/bee-3.png";
import bee4 from "@/assets/bees/bee-4.png";
import bee5 from "@/assets/bees/bee-5.png";
import bee6 from "@/assets/bees/bee-6.png";
import bee7 from "@/assets/bees/bee-7.png";
import bee8 from "@/assets/bees/bee-8.png";
import bee9 from "@/assets/bees/bee-9.png";

export const BEES = [bee1, bee2, bee3, bee4, bee5, bee6, bee7, bee8, bee9];

/** Pick a stable bee by index (cycles through the 9). */
export const beeFor = (key: string | number) => {
  const k = typeof key === "number" ? key : Array.from(key).reduce((a, c) => a + c.charCodeAt(0), 0);
  return BEES[Math.abs(k) % BEES.length];
};

type Props = {
  index?: number;
  seed?: string;
  alt?: string;
  className?: string;
  /** Subtle float animation */
  float?: boolean;
  /** Slight tilt (deg) */
  tilt?: number;
};

/** Reusable bee avatar/illustration. */
export const BeeAvatar = ({ index, seed, alt = "", className, float, tilt = 0 }: Props) => {
  const src = index !== undefined ? BEES[Math.abs(index) % BEES.length] : beeFor(seed ?? 0);
  return (
    <img
      src={src}
      alt={alt}
      aria-hidden={!alt}
      loading="lazy"
      style={tilt ? { transform: `rotate(${tilt}deg)` } : undefined}
      className={cn(
        "select-none pointer-events-none drop-shadow-md",
        float && "animate-float",
        className,
      )}
    />
  );
};

/** Decorative bee divider between sections. */
export const BeeDivider = ({ index = 3 }: { index?: number }) => (
  <div className="relative flex items-center justify-center py-2" aria-hidden>
    <span className="h-px w-16 bg-honey/40" />
    <BeeAvatar index={index} float className="mx-4 h-10 w-10" />
    <span className="h-px w-16 bg-honey/40" />
  </div>
);
