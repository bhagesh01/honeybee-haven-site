import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/SectionHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [sending, setSending] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast({ title: "Buzzing your way 🐝", description: "We'll be in touch within one working day." });
      (e.target as HTMLFormElement).reset();
    }, 800);
  };

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
          {/* Form */}
          <div className="lg:col-span-7">
            <Reveal>
              <div className="bg-card rounded-[2rem] p-7 sm:p-10 border border-border shadow-soft">
                <h2 className="font-display text-3xl font-bold text-ink">Book a private tour</h2>
                <p className="mt-2 text-muted-foreground">Tell us a little about your family — we'll reply with available slots.</p>
                <form onSubmit={onSubmit} className="mt-8 grid sm:grid-cols-2 gap-4">
                  <div className="sm:col-span-1">
                    <label className="text-sm font-medium text-ink">Parent name</label>
                    <Input required placeholder="Your full name" className="mt-2 h-12 rounded-xl bg-background" />
                  </div>
                  <div className="sm:col-span-1">
                    <label className="text-sm font-medium text-ink">Child's age</label>
                    <Input required placeholder="e.g. 3 years" className="mt-2 h-12 rounded-xl bg-background" />
                  </div>
                  <div className="sm:col-span-1">
                    <label className="text-sm font-medium text-ink">Email</label>
                    <Input type="email" required placeholder="you@email.com" className="mt-2 h-12 rounded-xl bg-background" />
                  </div>
                  <div className="sm:col-span-1">
                    <label className="text-sm font-medium text-ink">Phone</label>
                    <Input required placeholder="+91 ..." className="mt-2 h-12 rounded-xl bg-background" />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="text-sm font-medium text-ink">Anything we should know?</label>
                    <Textarea rows={4} placeholder="Allergies, language preference, programme of interest..." className="mt-2 rounded-xl bg-background" />
                  </div>
                  <Button type="submit" disabled={sending} size="lg" className="sm:col-span-2 h-12 rounded-full shadow-honey">
                    {sending ? "Sending..." : (<>Request a tour <Send className="h-4 w-4" /></>)}
                  </Button>
                </form>
              </div>
            </Reveal>
          </div>

          {/* Details + map */}
          <div className="lg:col-span-5 space-y-5">
            <Reveal delay={0.1}>
              <div className="bg-ink text-cream rounded-[2rem] p-8 shadow-lift relative overflow-hidden">
                <div className="absolute inset-0 bg-honeycomb-soft opacity-10" />
                <h3 className="relative font-display text-2xl font-bold">Visit, call, or write</h3>
                <ul className="relative mt-6 space-y-5">
                  <li className="flex gap-4"><MapPin className="h-5 w-5 text-honey shrink-0 mt-0.5" /><div><div className="font-medium">Our campus</div><div className="text-cream/70 text-sm mt-0.5">123 Sunny Lane, Education District, Creative City – 54321</div></div></li>
                  <li className="flex gap-4"><Phone className="h-5 w-5 text-honey shrink-0 mt-0.5" /><div><div className="font-medium">Call us</div><div className="text-cream/70 text-sm mt-0.5">+91 (555) BUSY-BEE</div></div></li>
                  <li className="flex gap-4"><Mail className="h-5 w-5 text-honey shrink-0 mt-0.5" /><div><div className="font-medium">Email</div><div className="text-cream/70 text-sm mt-0.5">hello@busybees.edu</div></div></li>
                  <li className="flex gap-4"><Clock className="h-5 w-5 text-honey shrink-0 mt-0.5" /><div><div className="font-medium">Hours</div><div className="text-cream/70 text-sm mt-0.5">Mon – Fri · 7:30 AM – 6:30 PM<br />Sat · 9 AM – 1 PM (tours only)</div></div></li>
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="rounded-[2rem] overflow-hidden border border-border shadow-soft aspect-[4/3]">
                <iframe
                  title="BusyBees location"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=77.58%2C12.96%2C77.62%2C12.99&layer=mapnik"
                  className="w-full h-full"
                  loading="lazy"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
