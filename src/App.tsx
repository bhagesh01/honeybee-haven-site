import { lazy, Suspense, useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SiteLayout } from "@/components/site/SiteLayout";
import { LoadingScreen } from "@/components/site/LoadingScreen";
import { RouteFallback } from "@/components/site/RouteFallback";
import { Seo, localBusinessSchema } from "@/components/site/Seo";
import Index from "./pages/Index.tsx";

// Lazy route loaders kept as references so we can prefetch them on idle / hover.
const loadAbout = () => import("./pages/About.tsx");
const loadPrincipalDesk = () => import("./pages/PrincipalDesk.tsx");
const loadPrograms = () => import("./pages/Programs.tsx");
const loadProgramDetail = () => import("./pages/ProgramDetail.tsx");
const loadPreschool = () => import("./pages/Preschool.tsx");
const loadDaycare = () => import("./pages/Daycare.tsx");
const loadEvents = () => import("./pages/Events.tsx");
const loadGallery = () => import("./pages/Gallery.tsx");
const loadTestimonials = () => import("./pages/Testimonials.tsx");
const loadWhyBusyBees = () => import("./pages/WhyBusyBees.tsx");
const loadContact = () => import("./pages/Contact.tsx");
const loadNotFound = () => import("./pages/NotFound.tsx");
const loadLocation = () => import("./pages/LocationLanding.tsx");
const Location = lazy(loadLocation);

const About = lazy(loadAbout);
const PrincipalDesk = lazy(loadPrincipalDesk);
const Programs = lazy(loadPrograms);
const ProgramDetail = lazy(loadProgramDetail);
const Preschool = lazy(loadPreschool);
const Daycare = lazy(loadDaycare);
const Events = lazy(loadEvents);
const Gallery = lazy(loadGallery);
const Testimonials = lazy(loadTestimonials);
const WhyBusyBees = lazy(loadWhyBusyBees);
const Contact = lazy(loadContact);
const NotFound = lazy(loadNotFound);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
      gcTime: 30 * 60 * 1000,
      refetchOnWindowFocus: false,
    },
  },
});

const prefetchAllRoutes = () => {
  // Critical pages first
  loadAbout();
  loadPrograms();
  loadContact();
  // Secondary in next idle slice
  const idle = (cb: () => void) =>
    "requestIdleCallback" in window
      ? (window as any).requestIdleCallback(cb)
      : setTimeout(cb, 200);
  idle(() => {
    loadPrincipalDesk();
    loadPreschool();
    loadDaycare();
    loadProgramDetail();
    loadEvents();
    loadGallery();
    loadTestimonials();
    loadWhyBusyBees();
    loadNotFound();
  });
};

const RoutePrefetcher = () => {
  useEffect(() => {
    const idle = (cb: () => void) =>
      "requestIdleCallback" in window
        ? (window as any).requestIdleCallback(cb)
        : setTimeout(cb, 300);
    idle(prefetchAllRoutes);
  }, []);
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LoadingScreen />
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <RoutePrefetcher />
        <Suspense fallback={<RouteFallback />}>
          <Routes>
            <Route element={<SiteLayout />}>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/principal-desk" element={<PrincipalDesk />} />
              <Route path="/programs" element={<Programs />} />
              <Route path="/programs/preschool" element={<Preschool />} />
              <Route path="/programs/daycare" element={<Daycare />} />
              <Route path="/programs/:slug" element={<ProgramDetail />} />
              <Route path="/events" element={<Events />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/testimonials" element={<Testimonials />} />
              <Route path="/why-busybees" element={<WhyBusyBees />} />
              <Route path="/contact" element={<Contact />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
