import { Hero } from "@/components/site/home/Hero";
import { Welcome } from "@/components/site/home/Welcome";
import { ProgramsPreview } from "@/components/site/home/ProgramsPreview";
import { Testimonials } from "@/components/site/home/Testimonials";
import { EventsPreview } from "@/components/site/home/EventsPreview";
import { GalleryPreview } from "@/components/site/home/GalleryPreview";
import { CtaSection } from "@/components/site/home/CtaSection";

const Index = () => {
  return (
    <>
      <Hero />
      <Welcome />
      <ProgramsPreview />
      <Testimonials />
      <EventsPreview />
      <GalleryPreview />
      <CtaSection />
    </>
  );
};

export default Index;
