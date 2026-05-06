import * as React from "react";
import { cn } from "@/lib/utils";
import { Play, X } from "lucide-react";

interface VideoPlayerProps extends React.HTMLAttributes<HTMLDivElement> {
  thumbnailUrl: string;
  videoUrl: string;
  title: string;
  description?: string;
  aspectRatio?: "16/9" | "4/3" | "1/1";
}

const aspectClass = {
  "16/9": "aspect-video",
  "4/3": "aspect-[4/3]",
  "1/1": "aspect-square",
};

const VideoPlayer = React.forwardRef<HTMLDivElement, VideoPlayerProps>(
  (
    {
      className,
      thumbnailUrl,
      videoUrl,
      title,
      description,
      aspectRatio = "16/9",
      ...props
    },
    ref
  ) => {
    const [isModalOpen, setIsModalOpen] = React.useState(false);

    React.useEffect(() => {
      const handleEsc = (event: KeyboardEvent) => {
        if (event.key === "Escape") setIsModalOpen(false);
      };
      window.addEventListener("keydown", handleEsc);
      return () => window.removeEventListener("keydown", handleEsc);
    }, []);

    React.useEffect(() => {
      document.body.style.overflow = isModalOpen ? "hidden" : "";
      return () => {
        document.body.style.overflow = "";
      };
    }, [isModalOpen]);

    return (
      <>
        <div
          ref={ref}
          role="button"
          onClick={() => setIsModalOpen(true)}
          onKeyDown={(e) => e.key === "Enter" && setIsModalOpen(true)}
          tabIndex={0}
          aria-label={`Play video: ${title}`}
          className={cn(
            "group relative w-full overflow-hidden cursor-pointer shadow-lift focus:outline-none focus:ring-2 focus:ring-honey",
            aspectClass[aspectRatio],
            className
          )}
          {...props}
        >
          <img
            src={thumbnailUrl}
            alt={title}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />

          <div className="absolute inset-0 grid place-items-center">
            <span className="h-16 w-16 sm:h-20 sm:w-20 rounded-full bg-honey grid place-items-center text-ink shadow-honey transition-transform duration-300 group-hover:scale-110">
              <Play className="h-7 w-7 ml-1" fill="currentColor" />
            </span>
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 text-cream">
            <h3 className="font-display text-xl sm:text-2xl font-bold">{title}</h3>
            {description && (
              <p className="mt-1 text-sm sm:text-base text-cream/85">{description}</p>
            )}
          </div>
        </div>

        {isModalOpen && (
          <div
            className="fixed inset-0 z-[200] grid place-items-center bg-ink/90 backdrop-blur-sm p-4 animate-in fade-in duration-200"
            onClick={() => setIsModalOpen(false)}
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute right-4 top-4 z-50 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
              aria-label="Close video player"
            >
              <X className="h-6 w-6" />
            </button>
            <div
              className="relative w-full max-w-5xl aspect-video"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                src={videoUrl}
                title={title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="h-full w-full rounded-2xl"
              />
            </div>
          </div>
        )}
      </>
    );
  }
);
VideoPlayer.displayName = "VideoPlayer";

export { VideoPlayer };
