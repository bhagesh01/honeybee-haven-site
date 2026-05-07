import { Link, NavLink as RouterNavLink, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { BUSINESS } from "@/lib/business";
import beeLogo from "@/assets/beelogo.png";

type SubLink = { to: string; label: string };
type NavItem = { to?: string; label: string; children?: SubLink[]; highlight?: boolean };

const navItems: NavItem[] = [
  { to: "/", label: "Home" },
  {
    label: "About Us",
    children: [
      { to: "/about", label: "About BusyBees" },
      { to: "/principal-desk", label: "Principal Desk" },
    ],
  },
  {
    label: "Programs",
    children: [
      { to: "/programs/preschool", label: "Preschool" },
      { to: "/programs/daycare", label: "Daycare" },
      { to: "/programs/buzzyclub", label: "BuzzyClub" },
      { to: "/programs/be-creative", label: "Be Creative" },
      { to: "/programs/summer-camps", label: "Summer Camps" },
    ],
  },
  {
    label: "Events",
    children: [
      { to: "/events", label: "Celebrations" },
      { to: "/gallery", label: "Photo Gallery" },
    ],
  },
  {
    label: "Partners",
    children: [
      { to: "/testimonials", label: "Testimonials" },
      { to: "/why-busybees", label: "Why BusyBees" },
    ],
  },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
  { to: "/admissions", label: "Admissions", highlight: true },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);
  const location = useLocation();
  const headerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
    setExpanded(null);
  }, [location.pathname, location.hash]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <>
      {/* Top utility bar — desktop only */}
      <div className="hidden md:block bg-ink text-cream/90 text-xs">
        <div className="container-wide flex items-center justify-between py-2">
          <a href={`tel:${BUSINESS.phone}`} className="flex items-center gap-2 hover:text-honey-light">
            <Phone className="h-3 w-3 text-honey" /> {BUSINESS.phoneDisplay}
          </a>
          <span className="font-hand text-honey-light text-base">Admissions open for 2025–26 🐝</span>
          <a href={`mailto:${BUSINESS.email}`} className="hover:text-honey-light">{BUSINESS.email}</a>
        </div>
      </div>

      <header
        ref={headerRef}
        className={cn(
          "sticky top-0 z-50 transition-all border-b",
          scrolled || open
            ? "bg-background/90 backdrop-blur-xl shadow-soft border-border/60"
            : "bg-background/70 backdrop-blur-md border-transparent"
        )}
      >
        {/* Header bar — fixed 64px height */}
        <div className="container-wide flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 group shrink-0">
            <img src={beeLogo} alt="" className="h-10 w-10 object-contain group-hover:rotate-[-8deg] transition-transform" />
            <div className="leading-none">
              <div className="font-display text-lg font-bold text-ink">BusyBees</div>
              <div className="text-[9px] uppercase tracking-[0.2em] text-muted-foreground">Preschool & Daycare</div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1 flex-1 justify-center">
            {navItems.map((item) => {
              if (item.highlight) return null;
              if (!item.children) {
                return (
                  <RouterNavLink
                    key={item.label}
                    to={item.to!}
                    end={item.to === "/"}
                    className={({ isActive }) =>
                      cn(
                        "px-3 py-2 rounded-full text-sm font-medium transition-colors relative",
                        isActive ? "text-ink" : "text-muted-foreground hover:text-ink"
                      )
                    }
                  >
                    {({ isActive }) => (
                      <>
                        {item.label}
                        {isActive && (
                          <span className="absolute left-3 right-3 -bottom-0.5 h-[3px] rounded-full bg-honey" />
                        )}
                      </>
                    )}
                  </RouterNavLink>
                );
              }
              const groupActive = item.children.some((c) => location.pathname.startsWith(c.to));
              return (
                <div key={item.label} className="relative group">
                  <button
                    type="button"
                    className={cn(
                      "px-3 py-2 rounded-full text-sm font-medium inline-flex items-center gap-1 transition-colors",
                      groupActive ? "text-ink" : "text-muted-foreground hover:text-ink"
                    )}
                  >
                    {item.label}
                    <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
                  </button>
                  <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="min-w-[220px] bg-card border border-border rounded-2xl shadow-lift p-2">
                      {item.children.map((c) => (
                        <Link
                          key={c.to}
                          to={c.to}
                          className="block px-4 py-2.5 rounded-xl text-sm text-ink hover:bg-honey/15 hover:text-honey-dark transition-colors"
                        >
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </nav>

          {/* Right cluster */}
          <div className="flex items-center gap-2 shrink-0">
            <Button
              asChild
              size="sm"
              className="hidden sm:inline-flex rounded-full px-5 shadow-honey bg-honey text-ink hover:bg-honey-dark hover:text-cream"
            >
              <Link to="/admissions">Admissions Open</Link>
            </Button>
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden inline-flex items-center justify-center h-10 w-10 rounded-full bg-cream border border-border"
              aria-label="Menu"
              aria-expanded={open}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown — sits under the header bar */}
        <div
          className={cn(
            "lg:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-out border-t",
            open ? "max-h-[80vh] opacity-100 border-border/60" : "max-h-0 opacity-0 border-transparent"
          )}
        >
          <nav className="container-wide py-3 flex flex-col gap-1 overflow-y-auto max-h-[75vh]">
            {navItems.map((item) => {
              if (!item.children) {
                return (
                  <Link
                    key={item.label}
                    to={item.to!}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "px-4 py-3 rounded-xl text-base font-medium flex items-center justify-between transition-colors",
                      item.highlight
                        ? "bg-honey text-ink hover:bg-honey-dark hover:text-cream"
                        : "text-ink hover:bg-honey/10"
                    )}
                  >
                    {item.label}
                    {item.highlight && (
                      <span className="text-[10px] font-bold uppercase tracking-wider bg-ink text-honey px-2 py-0.5 rounded-full">
                        Open
                      </span>
                    )}
                  </Link>
                );
              }
              const isExp = expanded === item.label;
              return (
                <div key={item.label} className="rounded-xl">
                  <button
                    onClick={() => setExpanded(isExp ? null : item.label)}
                    className="w-full flex items-center justify-between px-4 py-3 text-base font-medium text-ink hover:bg-honey/10 rounded-xl"
                  >
                    {item.label}
                    <ChevronDown className={cn("h-4 w-4 transition-transform", isExp && "rotate-180")} />
                  </button>
                  <div
                    className={cn(
                      "grid transition-all duration-300",
                      isExp ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    )}
                  >
                    <div className="overflow-hidden">
                      <div className="pl-4 pb-2 flex flex-col gap-0.5">
                        {item.children.map((c) => (
                          <Link
                            key={c.to}
                            to={c.to}
                            onClick={() => setOpen(false)}
                            className="px-4 py-2.5 rounded-lg text-sm text-muted-foreground hover:bg-honey/10 hover:text-ink"
                          >
                            {c.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </nav>
        </div>
      </header>
    </>
  );
};
