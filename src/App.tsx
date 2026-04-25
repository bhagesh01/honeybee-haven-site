import { lazy, Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SiteLayout } from "@/components/site/SiteLayout";
import { LoadingScreen } from "@/components/site/LoadingScreen";
import { RouteFallback } from "@/components/site/RouteFallback";
import Index from "./pages/Index.tsx";

const About = lazy(() => import("./pages/About.tsx"));
const PrincipalDesk = lazy(() => import("./pages/PrincipalDesk.tsx"));
const Programs = lazy(() => import("./pages/Programs.tsx"));
const ProgramDetail = lazy(() => import("./pages/ProgramDetail.tsx"));
const Preschool = lazy(() => import("./pages/Preschool.tsx"));
const Daycare = lazy(() => import("./pages/Daycare.tsx"));
const Events = lazy(() => import("./pages/Events.tsx"));
const Gallery = lazy(() => import("./pages/Gallery.tsx"));
const Testimonials = lazy(() => import("./pages/Testimonials.tsx"));
const WhyBusyBees = lazy(() => import("./pages/WhyBusyBees.tsx"));
const Contact = lazy(() => import("./pages/Contact.tsx"));
const NotFound = lazy(() => import("./pages/NotFound.tsx"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LoadingScreen />
      <Toaster />
      <Sonner />
      <BrowserRouter>
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
