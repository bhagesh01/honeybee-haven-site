import { useEffect, useState } from "react";
import bee from "@/assets/bee-mascot.png";

export const LoadingScreen = () => {
  const [hidden, setHidden] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("bb_loaded") === "1") {
      setHidden(true);
      setGone(true);
      return;
    }
    const t1 = window.setTimeout(() => {
      setHidden(true);
      sessionStorage.setItem("bb_loaded", "1");
    }, 900);
    const t2 = window.setTimeout(() => setGone(true), 1500);
    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
  }, []);

  if (gone) return null;

  return (
    <div
      aria-hidden
      className={`fixed inset-0 z-[200] grid place-items-center bg-honeycomb transition-opacity duration-500 ${
        hidden ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center gap-5">
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-honey/40 blur-2xl animate-pulse" />
          <img src={bee} alt="" className="relative h-20 w-20 animate-float" />
        </div>
        <div className="font-display text-2xl font-bold text-ink">BusyBees</div>
        <div className="flex gap-1.5">
          <span className="h-2 w-2 rounded-full bg-honey animate-bounce" style={{ animationDelay: "0ms" }} />
          <span className="h-2 w-2 rounded-full bg-honey animate-bounce" style={{ animationDelay: "120ms" }} />
          <span className="h-2 w-2 rounded-full bg-honey animate-bounce" style={{ animationDelay: "240ms" }} />
        </div>
      </div>
    </div>
  );
};
