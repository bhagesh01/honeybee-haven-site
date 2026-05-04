import { Seo, breadcrumbSchema } from "@/components/site/Seo";
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
      <Seo
        title="Busy Bees Preschool — Best Preschool & Daycare in Nigdi Pradhikaran, Pune"
        description="Busy Bees Preschool in Nigdi Pradhikaran, Pune offers play-based learning, daycare, playgroup and summer camps for children aged 1.5–6 years. Admissions open for 2025–26."
        path="/"
        keywords={[
          "preschool in Nigdi",
          "preschool in Nigdi Pune",
          "playgroup in Pradhikaran",
          "daycare in Nigdi",
          "best preschool Nigdi Pradhikaran",
          "Busy Bees Preschool Pune",
          "play school Nigdi",
        ]}
        jsonLd={breadcrumbSchema([{ name: "Home", path: "/" }])}
      />
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
