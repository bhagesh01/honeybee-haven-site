import { useState, ImgHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface SmartImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  wrapperClassName?: string;
  aspect?: string; // e.g. "aspect-[4/3]"
  priority?: boolean;
  /** object-fit behaviour. Defaults to "cover" but gallery uses "contain" to avoid pixel-breaking crops. */
  fit?: "cover" | "contain";
}

export const SmartImage = ({
  wrapperClassName,
  aspect,
  className,
  onLoad,
  priority = false,
  loading,
  decoding,
  fit = "cover",
  sizes,
  ...props
}: SmartImageProps) => {
  const [loaded, setLoaded] = useState(false);
  const effectiveLoading = loading ?? (priority ? "eager" : "lazy");
  const effectiveDecoding = decoding ?? (priority ? "sync" : "async");
  const effectiveSizes =
    sizes ?? "(min-width:1024px) 25vw, (min-width:640px) 33vw, 50vw";

  return (
    <div
      className={cn(
        "relative overflow-hidden bg-muted/40",
        aspect,
        wrapperClassName
      )}
    >
      {/* Subtle shimmer placeholder — no harsh flash */}
      {!loaded && (
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-r from-muted/30 via-cream/40 to-muted/30 bg-[length:200%_100%] animate-[shimmer_1.6s_ease-in-out_infinite]"
        />
      )}
      <img
        loading={effectiveLoading}
        decoding={effectiveDecoding}
        sizes={effectiveSizes}
        {...(priority ? { fetchPriority: "high" as any } : {})}
        {...props}
        onLoad={(e) => {
          setLoaded(true);
          onLoad?.(e);
        }}
        className={cn(
          "absolute inset-0 w-full h-full transition-[opacity,filter,transform] duration-700 ease-out",
          fit === "contain" ? "object-contain" : "object-cover",
          loaded
            ? "opacity-100 blur-0 scale-100"
            : "opacity-0 blur-md scale-[1.02]",
          className
        )}
      />
    </div>
  );
};
