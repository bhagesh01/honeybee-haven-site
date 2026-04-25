import { useState, ImgHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface SmartImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  wrapperClassName?: string;
  aspect?: string; // e.g. "aspect-[4/3]"
  priority?: boolean;
}

export const SmartImage = ({
  wrapperClassName,
  aspect,
  className,
  onLoad,
  priority = false,
  loading,
  decoding,
  ...props
}: SmartImageProps) => {
  const [loaded, setLoaded] = useState(false);
  const effectiveLoading = loading ?? (priority ? "eager" : "lazy");
  const effectiveDecoding = decoding ?? (priority ? "sync" : "async");
  return (
    <div className={cn("relative overflow-hidden bg-muted", aspect, wrapperClassName)}>
      {!loaded && <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-muted via-cream to-muted" />}
      <img
        loading={effectiveLoading}
        decoding={effectiveDecoding}
        {...(priority ? { fetchPriority: "high" as any } : {})}
        {...props}
        onLoad={(e) => {
          setLoaded(true);
          onLoad?.(e);
        }}
        className={cn(
          "transition-opacity duration-500",
          loaded ? "opacity-100" : "opacity-0",
          className
        )}
      />
    </div>
  );
};
