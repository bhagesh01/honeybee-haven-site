import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/SectionHeading";
import { SmartImage } from "@/components/site/SmartImage";
import classroom from "@/assets/classroom.jpg";

const Contact = () => {
  return (
    <>
      <PageHero
        eyebrow="Contact us"
        title="Come visit"
        highlight="the hive"
        description="The best way to know if BusyBees is right for your child? Walk through our doors. We'd love to host you."
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
                  title="BusyBees location"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=77.58%2C12.96%2C77.62%2C12.99&layer=mapnik"
                  className="w-full h-full"
                  loading="lazy"
                />
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
                <ul className="relative mt-8 space-y-6">
                  <li className="flex gap-4">
                    <MapPin className="h-5 w-5 text-honey shrink-0 mt-0.5" />
                    <div>
                      <div className="font-medium">Our campus</div>
                      <div className="text-cream/70 text-sm mt-0.5">123 Sunny Lane, Education District,<br />Creative City – 54321</div>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <Phone className="h-5 w-5 text-honey shrink-0 mt-0.5" />
                    <div>
                      <div className="font-medium">Call us</div>
                      <a href="tel:+915552879233" className="text-cream/70 text-sm mt-0.5 hover:text-honey">+91 (555) BUSY-BEE</a>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <Mail className="h-5 w-5 text-honey shrink-0 mt-0.5" />
                    <div>
                      <div className="font-medium">Email</div>
                      <a href="mailto:hello@busybees.edu" className="text-cream/70 text-sm mt-0.5 hover:text-honey">hello@busybees.edu</a>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <Clock className="h-5 w-5 text-honey shrink-0 mt-0.5" />
                    <div>
                      <div className="font-medium">Hours</div>
                      <div className="text-cream/70 text-sm mt-0.5">Mon – Fri · 7:30 AM – 6:30 PM<br />Sat · 9 AM – 1 PM (tours only)</div>
                    </div>
                  </li>
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
