import { Link, NavLink as RouterNavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { BUSINESS } from "@/lib/business";
import bee from "@/assets/bee-mascot.webp";
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
    label: "Our Programs",
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
    label: "Partner's Corner",
    children: [
      { to: "/testimonials", label: "Testimonials" },
      { to: "/why-busybees", label: "Why BusyBees" },
    ],
  },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact Us" },
  { to: "/admissions", label: "Admissions", highlight: true },
];

type NavItemExt = NavItem & { highlight?: boolean };

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setExpanded(null);
  }, [location.pathname, location.hash]);

  // lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Top bar */}
      <div className="hidden md:block bg-ink text-cream/90 text-xs">
        <div className="container-wide flex items-center justify-between py-2">
          <a href={`tel:${BUSINESS.phone}`} className="flex items-center gap-2 hover:text-honey-light"><Phone className="h-3 w-3 text-honey" /> {BUSINESS.phoneDisplay}</a>
          <span className="font-hand text-honey-light text-base">Admissions open for 2025–26 🐝</span>
          <a href={`mailto:${BUSINESS.email}`} className="hover:text-honey-light">{BUSINESS.email}</a>
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
            <img src={beeLogo} alt="" className="h-20 w-16 group-hover:rotate-[-8deg] transition-transform" />
            <div className="leading-none">
              <div className="font-display text-xl font-bold text-ink">BusyBees</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground ">Preschool and DayCare</div>
            </div>
          </Link>

          {/* Desktop nav with dropdowns */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              if (!item.children) {
                if (item.highlight) {
                  return (
                    <RouterNavLink
                      key={item.label}
                      to={item.to!}
                      className="ml-1 inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-honey text-ink shadow-honey hover:bg-honey-dark hover:text-cream transition-colors"
                    >
                      {item.label}
                      <span className="text-[10px] font-bold uppercase tracking-wider bg-ink text-honey px-2 py-0.5 rounded-full">
                        Open
                      </span>
                    </RouterNavLink>
                  );
                }
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
              return (
                <div key={item.label} className="relative group">
                  <button
                    className="px-3 py-2 rounded-full text-sm font-medium text-muted-foreground hover:text-ink inline-flex items-center gap-1 transition-colors"
                    type="button"
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

          <div className="flex items-center gap-2">
            <Button asChild variant="default" size="sm" className="hidden sm:inline-flex rounded-full px-5 shadow-honey">
              <Link to="/contact">Enroll Now</Link>
            </Button>
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden inline-flex items-center justify-center h-10 w-10 rounded-full bg-cream border border-border relative z-[110]"
              aria-label="Menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile full-screen overlay */}
      <div
        className={cn(
          "lg:hidden fixed inset-0 z-[100] bg-background transition-all duration-300",
          open ? "opacity-100 visible" : "opacity-0 invisible"
        )}
      >
        <div className="absolute inset-0 bg-honeycomb-soft opacity-50 pointer-events-none" />
        <div className="relative h-full flex flex-col pt-20 pb-8 px-6 overflow-y-auto">
          <button
            onClick={() => setOpen(false)}
            className="absolute top-5 right-5 inline-flex items-center justify-center h-11 w-11 rounded-full bg-cream border border-border"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
          <nav className="flex flex-col gap-1.5 mt-2">
            {navItems.map((item) => {
              if (!item.children) {
                return (
                  <Link
                    key={item.label}
                    to={item.to!}
                    onClick={() => setOpen(false)}
                    className="px-5 py-4 rounded-2xl text-lg font-display font-semibold text-ink bg-card border border-border"
                  >
                    {item.label}
                  </Link>
                );
              }
              const isOpen = expanded === item.label;
              return (
                <div key={item.label} className="rounded-2xl bg-card border border-border overflow-hidden">
                  <button
                    onClick={() => setExpanded(isOpen ? null : item.label)}
                    className="w-full flex items-center justify-between px-5 py-4 text-lg font-display font-semibold text-ink"
                  >
                    {item.label}
                    <ChevronDown className={cn("h-5 w-5 transition-transform", isOpen && "rotate-180")} />
                  </button>
                  <div
                    className={cn(
                      "grid transition-all duration-300",
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    )}
                  >
                    <div className="overflow-hidden">
                      <div className="px-3 pb-3 flex flex-col gap-1">
                        {item.children.map((c) => (
                          <Link
                            key={c.to}
                            to={c.to}
                            onClick={() => setOpen(false)}
                            className="px-4 py-3 rounded-xl text-base text-muted-foreground hover:bg-honey/15 hover:text-ink"
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
            <Button asChild className="mt-4 rounded-full h-12 text-base shadow-honey" onClick={() => setOpen(false)}>
              <Link to="/contact">Enroll Now</Link>
            </Button>
          </nav>
          <div className="mt-auto pt-8 text-center text-xs text-muted-foreground">
            {BUSINESS.phoneDisplay} · {BUSINESS.email}
          </div>
        </div>
      </div>
    </>
  );
};
