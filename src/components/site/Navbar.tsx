import { Link, NavLink as RouterNavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import bee from "@/assets/bee-mascot.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/programs", label: "Programs" },
  { to: "/events", label: "Events" },
  { to: "/gallery", label: "Gallery" },
  { to: "/partners-corner", label: "Partner's Corner" },
  { to: "/contact", label: "Contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [location.pathname]);

  return (
    <>
      {/* Top bar */}
      <div className="hidden md:block bg-ink text-cream/90 text-xs">
        <div className="container-wide flex items-center justify-between py-2">
          <span className="flex items-center gap-2"><Phone className="h-3 w-3 text-honey" /> +91 (555) BUSY-BEE</span>
          <span className="font-hand text-honey-light text-base">Admissions open for 2025–26 🐝</span>
          <span>hello@busybees.edu</span>
        </div>
      </div>

      <header
        className={cn(
          "sticky top-0 z-50 transition-all",
          scrolled
            ? "bg-background/85 backdrop-blur-xl shadow-soft border-b border-border/60"
            : "bg-background/0"
        )}
      >
        <div className="container-wide flex items-center justify-between py-3">
          <Link to="/" className="flex items-center gap-2 group">
            <img src={bee} alt="" className="h-10 w-10 group-hover:rotate-[-8deg] transition-transform" />
            <div className="leading-none">
              <div className="font-display text-xl font-bold text-ink">BusyBees</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Preschool · Est. 2010</div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <RouterNavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                className={({ isActive }) =>
                  cn(
                    "px-3 py-2 rounded-full text-sm font-medium transition-colors relative",
                    isActive
                      ? "text-ink"
                      : "text-muted-foreground hover:text-ink"
                  )
                }
              >
                {({ isActive }) => (
                  <>
                    {l.label}
                    {isActive && (
                      <span className="absolute left-3 right-3 -bottom-0.5 h-[3px] rounded-full bg-honey" />
                    )}
                  </>
                )}
              </RouterNavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button asChild variant="default" size="sm" className="hidden sm:inline-flex rounded-full px-5 shadow-honey">
              <Link to="/contact">Enroll Now</Link>
            </Button>
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden inline-flex items-center justify-center h-10 w-10 rounded-full bg-cream border border-border"
              aria-label="Menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-xl">
            <nav className="container-wide py-4 flex flex-col gap-1">
              {links.map((l) => (
                <RouterNavLink
                  key={l.to}
                  to={l.to}
                  end={l.to === "/"}
                  className={({ isActive }) =>
                    cn(
                      "px-4 py-3 rounded-2xl text-base font-medium",
                      isActive ? "bg-honey/15 text-ink" : "text-muted-foreground hover:bg-muted"
                    )
                  }
                >
                  {l.label}
                </RouterNavLink>
              ))}
              <Button asChild className="mt-2 rounded-full">
                <Link to="/contact">Enroll Now</Link>
              </Button>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};
