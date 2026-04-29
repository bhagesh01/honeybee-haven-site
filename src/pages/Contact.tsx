import { MapPin, Phone, Mail, Clock, GraduationCap, PhoneCall } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/SectionHeading";
import { SmartImage } from "@/components/site/SmartImage";
import classroom from "@/assets/classroom.webp";

const admissionPrograms = [
  { name: "Toddlers", age: "1 – 2 years old" },
  { name: "Playgroup", age: "2 – 3 years old" },
  { name: "Nursery", age: "3 – 4 years old" },
  { name: "Jr. Kindergarten", age: "4 – 5 years old" },
  { name: "Sr. Kindergarten", age: "5 – 6 years old" },
];

const phoneNumbers = ["+91 9011551028", "+91 9011588424"];

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

      {/* Admissions Open */}
      <section className="pt-16 sm:pt-20">
        <div className="container-wide">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] gradient-honey p-6 sm:p-10 lg:p-14 shadow-lift border border-honey/30">
              <div className="absolute inset-0 bg-honeycomb-soft opacity-30 pointer-events-none" />
              <div className="relative grid lg:grid-cols-12 gap-8 lg:gap-10 items-start">
                <div className="lg:col-span-5">
                  <span className="inline-flex items-center gap-2 rounded-full bg-ink text-cream px-4 py-1.5 text-xs font-semibold uppercase tracking-wider">
                    <GraduationCap className="h-3.5 w-3.5 text-honey" /> Now Enrolling
                  </span>
                  <h2 className="mt-4 font-display text-4xl sm:text-5xl font-bold text-ink leading-tight">
                    Admissions <span className="text-honey-dark">Open</span>
                  </h2>
                  <p className="mt-3 text-ink/80 max-w-md">
                    Reserve your child's spot for the upcoming session. Limited seats — call us today!
                  </p>

                  <div className="mt-6 rounded-2xl bg-cream/95 backdrop-blur p-5 border border-ink/10">
                    <div className="text-xs uppercase tracking-wider text-muted-foreground font-semibold flex items-center gap-2">
                      <PhoneCall className="h-3.5 w-3.5 text-honey-dark" /> Call us now
                    </div>
                    <div className="mt-3 flex flex-col gap-2">
                      {phoneNumbers.map((p) => (
                        <a
                          key={p}
                          href={`tel:${p.replace(/\s/g, "")}`}
                          className="font-display text-2xl sm:text-3xl font-bold text-ink hover:text-honey-dark transition-colors"
                        >
                          {p}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-7">
                  <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                    {admissionPrograms.map((p, i) => (
                      <div
                        key={p.name}
                        className="group rounded-2xl bg-cream/95 backdrop-blur border border-ink/10 p-4 sm:p-5 flex items-center gap-4 hover:shadow-honey hover:-translate-y-0.5 transition-all"
                      >
                        <div className="h-11 w-11 shrink-0 rounded-xl bg-honey text-ink font-display font-bold flex items-center justify-center shadow-soft">
                          {i + 1}
                        </div>
                        <div className="min-w-0">
                          <div className="font-display font-semibold text-ink">{p.name}</div>
                          <div className="text-sm text-muted-foreground">Age — {p.age}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

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
                      <div className="flex flex-col mt-0.5">
                        <a href="tel:+919011551028" className="text-cream/70 text-sm hover:text-honey">+91 9011551028</a>
                        <a href="tel:+919011588424" className="text-cream/70 text-sm hover:text-honey">+91 9011588424</a>
                      </div>
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
