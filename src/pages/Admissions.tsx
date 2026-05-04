import { Seo, breadcrumbSchema } from "@/components/site/Seo";
import { BUSINESS, whatsappLink } from "@/lib/business";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading, Reveal } from "@/components/site/SectionHeading";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle, Phone, MessageCircle } from "lucide-react";

const programs = [
  { name: "Playgroup", age: "1.5 – 2.5 years", time: "9:00 AM – 12:00 PM", days: "Mon – Sat" },
  { name: "Nursery", age: "2.5 – 3.5 years", time: "9:00 AM – 1:00 PM", days: "Mon – Sat" },
  { name: "Junior KG", age: "3.5 – 4.5 years", time: "9:00 AM – 1:30 PM", days: "Mon – Sat" },
  { name: "Senior KG", age: "4.5 – 5.5 years", time: "9:00 AM – 2:00 PM", days: "Mon – Sat" },
  { name: "Daycare", age: "1.5 – 6 years", time: "8:00 AM – 7:00 PM", days: "Mon – Sat" },
];

const steps = [
  {
    n: "01",
    title: "Visit Our Campus",
    desc: "Schedule a free tour — walk through classrooms, meet our teachers, and feel the BusyBees environment for yourself.",
  },
  {
    n: "02",
    title: "Fill Enquiry Form",
    desc: "Complete our simple enquiry form online or on campus. Our admissions team will contact you within 24 hours.",
  },
  {
    n: "03",
    title: "Confirm Your Seat",
    desc: "Submit the required documents and a nominal registration fee to secure your child's seat for 2025–26.",
  },
];

const documents = [
  "Child's birth certificate (original + photocopy)",
  "Aadhaar card — child's (if issued)",
  "Parent/guardian Aadhaar card (photocopy)",
  "2 recent passport-size photographs of the child",
  "Address proof (electricity bill, rental agreement, or Aadhaar)",
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the age criteria for admission at Busy Bees Preschool?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Playgroup: 1.5–2.5 years. Nursery: 2.5–3.5 years. Junior KG: 3.5–4.5 years. Senior KG: 4.5–5.5 years. Daycare: 1.5–6 years.",
      },
    },
    {
      "@type": "Question",
      name: "What documents are required for preschool admission in Nigdi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Birth certificate, Aadhaar card (child and parent), 2 passport-size photographs, and an address proof document.",
      },
    },
    {
      "@type": "Question",
      name: "When do admissions open for 2025–26 at Busy Bees Preschool?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Admissions are currently open for 2025–26. Seats are limited — contact us on WhatsApp or phone to confirm availability.",
      },
    },
    {
      "@type": "Question",
      name: "Does Busy Bees Preschool offer daycare along with preschool in Nigdi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Busy Bees offers full-day daycare (8 AM – 7 PM) for children aged 1.5–6 years alongside all preschool programmes.",
      },
    },
  ],
};

const Admissions = () => (
  <>
    <Seo
      title="Admissions Open 2025–26 — Busy Bees Preschool, Nigdi Pradhikaran"
      description="Admissions open for Playgroup, Nursery, Junior KG, Senior KG and Daycare at Busy Bees Preschool, Nigdi Pradhikaran, Pune. Apply for 2025–26."
      path="/admissions"
      keywords={[
        "preschool admissions Nigdi",
        "playgroup admission Pradhikaran",
        "nursery admission Pune",
        "Busy Bees admission 2025",
        "daycare admission Nigdi",
      ]}
      jsonLd={[
        faqSchema,
        breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Admissions", path: "/admissions" }]),
      ]}
    />

    <PageHero
      eyebrow="Admissions Open · 2025–26"
      title="Secure your child's"
      highlight="seat at BusyBees"
      description="Limited seats across Playgroup, Nursery, KG and Daycare. Apply today to schedule a campus visit."
      trail={[{ label: "Home", to: "/" }, { label: "Admissions" }]}
    />

    {/* Programs Table */}
    <section className="py-16 md:py-20">
      <div className="container-tight">
        <SectionHeading
          eyebrow="Programmes"
          title="Choose the right"
          highlight="programme"
          description="From first steps in playgroup to confident KG kids ready for big school."
        />
        <Reveal>
          <div className="mt-10 overflow-x-auto rounded-3xl border border-border bg-card shadow-soft">
            <table className="w-full text-left">
              <thead className="bg-honey/15 text-ink">
                <tr>
                  <th className="p-4 font-display font-semibold">Programme</th>
                  <th className="p-4 font-display font-semibold">Age Group</th>
                  <th className="p-4 font-display font-semibold">School Hours</th>
                  <th className="p-4 font-display font-semibold">Days</th>
                </tr>
              </thead>
              <tbody>
                {programs.map((p) => (
                  <tr key={p.name} className="border-t border-border">
                    <td className="p-4 font-semibold text-ink">{p.name}</td>
                    <td className="p-4 text-muted-foreground">{p.age}</td>
                    <td className="p-4 text-muted-foreground">{p.time}</td>
                    <td className="p-4 text-muted-foreground">{p.days}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </div>
    </section>

    {/* Steps */}
    <section className="py-16 md:py-20 bg-honeycomb-soft">
      <div className="container-tight">
        <SectionHeading
          eyebrow="The process"
          title="Three simple"
          highlight="steps"
          description="From your first visit to a confirmed seat — clear, parent-friendly and quick."
        />
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {steps.map((s) => (
            <Reveal key={s.n}>
              <div className="bg-card border border-border rounded-3xl p-7 shadow-soft h-full">
                <div className="font-display text-4xl font-bold text-honey">{s.n}</div>
                <h3 className="mt-3 font-display text-xl font-bold text-ink">{s.title}</h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* Documents */}
    <section className="py-16 md:py-20">
      <div className="container-tight">
        <SectionHeading
          eyebrow="Paperwork"
          title="Documents"
          highlight="required"
          description="Keep these handy when you come for your campus visit."
        />
        <ul className="mt-10 max-w-2xl mx-auto space-y-3">
          {documents.map((d) => (
            <li
              key={d}
              className="flex items-start gap-3 bg-card border border-border rounded-2xl p-4 shadow-soft"
            >
              <CheckCircle className="h-5 w-5 text-honey-dark shrink-0 mt-0.5" />
              <span className="text-ink">{d}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>

    {/* CTA */}
    <section className="py-16 md:py-20 bg-honeycomb-soft">
      <div className="container-tight">
        <div className="bg-card border border-border rounded-3xl p-8 sm:p-12 text-center shadow-lift">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-ink">
            Ready to secure your child's seat?
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Call us, WhatsApp, or visit campus — we're here Mon–Sat, 9 AM to 2 PM.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button asChild size="lg" className="rounded-full px-7 shadow-honey">
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-4 w-4" /> WhatsApp Us
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full px-7 border-2">
              <a href={`tel:${BUSINESS.phone}`}>
                <Phone className="h-4 w-4" /> {BUSINESS.phoneDisplay}
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full px-7 border-2">
              <Link to="/contact">Visit Campus</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default Admissions;
