import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/SectionHeading";
import { SmartImage } from "@/components/site/SmartImage";
import { Seo, breadcrumbSchema } from "@/components/site/Seo";
import { Button } from "@/components/ui/button";
import { BUSINESS, fullAddress, whatsappLink } from "@/lib/business";
import classroom from "@/assets/classroom.webp";

const Contact = () => {
  return (
    <>
      <Seo
        title="Contact Busy Bees Preschool, Nigdi Pradhikaran, Pune"
        description={`Visit Busy Bees Preschool & Daycare in Nigdi Pradhikaran, Pune. Call ${BUSINESS.phoneDisplay} or email ${BUSINESS.email}. Mon–Fri 9 AM–2 PM, Sat 9 AM–12 PM.`}
        path="/contact"
        keywords={["contact Busy Bees Preschool", "preschool Nigdi contact", "preschool Pradhikaran phone", "Busy Bees admissions Pune"]}
        jsonLd={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }])}
      />
      <PageHero
        eyebrow="Contact us"
        title="Come visit"
        highlight="the hive"
        description="The best way to know if Busy Bees is right for your child? Walk through our doors at Nigdi Pradhikaran. We'd love to host you."
        trail={[{ label: "Home", to: "/" }, { label: "Contact" }]}
      />

      <section className="py-20">
        <div className="container-wide grid lg:grid-cols-12 gap-10">
          {/* Image */}
          <div className="lg:col-span-7">
            <Reveal>
              <SmartImage
                src={classroom}
                alt="A welcoming classroom at BusyBees"
                wrapperClassName="rounded-[2rem] shadow-lift border border-border aspect-[4/3]"
                className="w-full h-full object-cover"
              />
            </Reveal>
            <Reveal delay={0.1}>
              <div className="rounded-[2rem] overflow-hidden border border-border shadow-soft aspect-[16/9] mt-6">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d18842.107907379395!2d73.773602!3d18.653456!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9ddb5c7d137%3A0x1f6d6df1eb86a706!2sBUSY%20BEES%20Preschool%20and%20Daycare%20-%20Where%20Learning%20is%20Un-bee-lievably%20Fun%20*21*21!5e1!3m2!1sen!2sus!4v1777010866898!5m2!1sen!2sus"
    className="w-full h-full border-0"
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>
            </Reveal>
          </div>

          {/* Details */}
          <div className="lg:col-span-5">
            <Reveal delay={0.05}>
              <div className="bg-ink text-cream rounded-[2rem] p-8 sm:p-10 shadow-lift relative overflow-hidden sticky top-28">
                <div className="absolute inset-0 bg-honeycomb-soft opacity-10" />
                <h2 className="relative font-display text-3xl font-bold">Visit, call, or write</h2>
                <p className="relative mt-2 text-cream/70">
                  Drop in for a coffee and a campus tour — or reach us any way you like.
                </p>
                <address className="not-italic">
                  <ul className="relative mt-8 space-y-6">
                    <li className="flex gap-4">
                      <MapPin className="h-5 w-5 text-honey shrink-0 mt-0.5" />
                      <div>
                        <div className="font-medium">Our campus</div>
                        <div className="text-cream/70 text-sm mt-0.5">{BUSINESS.address.street},<br />{BUSINESS.address.locality}, {BUSINESS.address.city} – {BUSINESS.address.postalCode}</div>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <Phone className="h-5 w-5 text-honey shrink-0 mt-0.5" />
                      <div>
                        <div className="font-medium">Call us</div>
                        <a href={`tel:${BUSINESS.phone}`} className="block text-cream/70 text-sm mt-0.5 hover:text-honey">{BUSINESS.phoneDisplay}</a>
                        <a href={`tel:${BUSINESS.phoneAlt}`} className="block text-cream/70 text-sm hover:text-honey">{BUSINESS.phoneAltDisplay}</a>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <MessageCircle className="h-5 w-5 text-honey shrink-0 mt-0.5" />
                      <div>
                        <div className="font-medium">WhatsApp</div>
                        <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="text-cream/70 text-sm mt-0.5 hover:text-honey">{BUSINESS.whatsappDisplay}</a>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <Mail className="h-5 w-5 text-honey shrink-0 mt-0.5" />
                      <div>
                        <div className="font-medium">Email</div>
                        <a href={`mailto:${BUSINESS.email}`} className="text-cream/70 text-sm mt-0.5 hover:text-honey">{BUSINESS.email}</a>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <Clock className="h-5 w-5 text-honey shrink-0 mt-0.5" />
                      <div>
                        <div className="font-medium">Hours</div>
                        <div className="text-cream/70 text-sm mt-0.5">Mon – Fri · 9:00 AM – 2:00 PM<br />Saturday · 9:00 AM – 12:00 PM<br />Sunday · Closed</div>
                      </div>
                    </li>
                  </ul>
                </address>
                <div className="relative mt-8 flex flex-col gap-3">
                  <Button asChild size="lg" className="rounded-full shadow-honey">
                    <a href={`tel:${BUSINESS.phone}`}><Phone className="h-4 w-4" /> Call now</a>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="rounded-full bg-transparent border-cream/30 text-cream hover:bg-cream hover:text-ink">
                    <a href={whatsappLink()} target="_blank" rel="noopener noreferrer"><MessageCircle className="h-4 w-4" /> WhatsApp Us</a>
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
