import { useEffect, useState } from "react";

/**
 * Delayed fallback: only renders after 300ms so fast route transitions
 * don't flash a loader. Keeps previous page visible until then.
 */
export const RouteFallback = ({ delay = 300 }: { delay?: number }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  if (!show) return null;

  return (
    <div
      role="status"
      aria-label="Loading page"
      className="min-h-[60vh] grid place-items-center bg-background animate-fade-in"
    >
      <div className="flex flex-col items-center gap-4">
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-honey/40 blur-2xl animate-pulse" />
          <div className="relative h-12 w-12 rounded-full border-4 border-honey/30 border-t-honey animate-spin" />
        </div>
        <div className="flex gap-1.5">
          <span className="h-2 w-2 rounded-full bg-honey animate-bounce" style={{ animationDelay: "0ms" }} />
          <span className="h-2 w-2 rounded-full bg-honey animate-bounce" style={{ animationDelay: "120ms" }} />
          <span className="h-2 w-2 rounded-full bg-honey animate-bounce" style={{ animationDelay: "240ms" }} />
        </div>
        <span className="sr-only">Loading…</span>
      </div>
    </div>
  );
};
