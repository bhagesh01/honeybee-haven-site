import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, X, Send, MapPin, Phone, CalendarDays, LogOut, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import { BUSINESS, fullAddress, whatsappLink } from "@/lib/business";
import { cn } from "@/lib/utils";

type Sender = "bot" | "user";
type QuickAction = { label: string; value: string; icon?: React.ReactNode };
type Message = {
  id: string;
  sender: Sender;
  text?: string;
  actions?: QuickAction[];
  custom?: "calendar" | "datetime" | "locate" | "programs";
};

type Step =
  | "name"
  | "phone"
  | "menu"
  | "programs"
  | "locate"
  | "visit"
  | "call"
  | "exited"
  | "idle";

const AVATAR = "/bee-mascot.png";

const PROGRAMS = [
  { name: "Playgroup (1.5–2.5 yrs)", desc: "Sensory play, songs and gentle routines to build confidence." },
  { name: "Nursery (2.5–3.5 yrs)", desc: "Early literacy, motor skills and joyful social learning." },
  { name: "Junior KG (3.5–4.5 yrs)", desc: "Phonics, numeracy and creative expression through play." },
  { name: "Senior KG (4.5–5.5 yrs)", desc: "School-readiness, reading fluency and curious thinking." },
  { name: "Daycare (1.5–6 yrs)", desc: "Safe, nurturing extended-hours care with meals and naps." },
];

const MAIN_MENU: QuickAction[] = [
  { label: "Our Programs", value: "programs" },
  { label: "Locate Us", value: "locate" },
  { label: "Schedule a Visit", value: "visit" },
  { label: "Schedule a Call", value: "call" },
  { label: "Exit", value: "exit" },
];

const uid = () => Math.random().toString(36).slice(2, 9);

export const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [step, setStep] = useState<Step>("name");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [input, setInput] = useState("");
  const [callDate, setCallDate] = useState<Date | undefined>();
  const [callTime, setCallTime] = useState<string>("");
  const inactivityRef = useRef<number | null>(null);
  const lastInputRef = useRef<{ text: string; at: number }>({ text: "", at: 0 });
  const scrollRef = useRef<HTMLDivElement>(null);

  // initial greeting
  useEffect(() => {
    if (open && messages.length === 0) {
      pushBot("Hi 👋 Welcome to Busy Bees Preschool! What is your good name?");
    }
  }, [open]);

  // scroll to bottom
  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, open]);

  // inactivity timer
  useEffect(() => {
    if (!open) return;
    if (inactivityRef.current) window.clearTimeout(inactivityRef.current);
    if (step === "exited") return;
    inactivityRef.current = window.setTimeout(() => {
      pushBot("Is there anything else I might help you with today?", [
        { label: "Continue chat", value: "continue" },
        { label: "End chat", value: "exit" },
      ]);
    }, 45000);
    return () => {
      if (inactivityRef.current) window.clearTimeout(inactivityRef.current);
    };
  }, [messages, open, step]);

  const pushBot = (text: string, actions?: QuickAction[], custom?: Message["custom"]) =>
    setMessages((m) => [...m, { id: uid(), sender: "bot", text, actions, custom }]);
  const pushUser = (text: string) => setMessages((m) => [...m, { id: uid(), sender: "user", text }]);

  const showMenu = (greet?: string) => {
    if (greet) pushBot(greet);
    pushBot("Kindly choose an option below:", MAIN_MENU);
    setStep("menu");
  };

  const handleSend = (raw?: string) => {
    const text = (raw ?? input).trim();
    if (!text) return;
    // spam guard
    const now = Date.now();
    if (text === lastInputRef.current.text && now - lastInputRef.current.at < 800) return;
    lastInputRef.current = { text, at: now };
    setInput("");

    pushUser(text);

    if (step === "name") {
      if (text.length < 2 || !/[a-zA-Z]/.test(text)) {
        pushBot("Please share your name so I can assist you better. 🌼");
        return;
      }
      setName(text);
      setStep("phone");
      pushBot(`Thank you, ${text}! Kindly enter your contact number.`);
      return;
    }

    if (step === "phone") {
      const digits = text.replace(/\D/g, "");
      if (digits.length !== 10) {
        pushBot("Please enter a valid 10-digit contact number.");
        return;
      }
      setPhone(digits);
      pushBot("Thank you for the details.");
      showMenu();
      return;
    }

    // free text in other steps
    pushBot("Sorry, I didn't understand that. Please choose an option below.", MAIN_MENU);
    setStep("menu");
  };

  const handleAction = (value: string) => {
    if (value === "continue") {
      pushUser("Continue chat");
      showMenu();
      return;
    }
    if (value === "exit") {
      pushUser("Exit");
      pushBot("Thank you for visiting Busy Bees Preschool! 🌼");
      setStep("exited");
      return;
    }
    if (value === "programs") {
      pushUser("Our Programs");
      pushBot("Here are our age-group programs:", undefined, "programs");
      pushBot("Would you like to do anything else?", MAIN_MENU);
      setStep("menu");
      return;
    }
    if (value === "locate") {
      pushUser("Locate Us");
      pushBot("Here's where to find us:", undefined, "locate");
      pushBot("Anything else I can help with?", MAIN_MENU);
      setStep("menu");
      return;
    }
    if (value === "visit") {
      pushUser("Schedule a Visit");
      pushBot("Please pick a date for your visit:", undefined, "calendar");
      setStep("visit");
      return;
    }
    if (value === "call") {
      pushUser("Schedule a Call");
      pushBot("Please pick a date and time for our call:", undefined, "datetime");
      setStep("call");
      return;
    }
    if (value === "whatsapp") {
      window.open(whatsappLink(`Hi, this is ${name || "a parent"} (${phone}). I'd like to know more.`), "_blank");
      return;
    }
  };

  const handleVisitDate = (d?: Date) => {
    if (!d) return;
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (d < today) {
      pushBot("Please select a future date.");
      return;
    }
    pushUser(`Visit on ${d.toDateString()}`);
    pushBot("Thank you! Our team will reach out to confirm your visit.");
    showMenu();
  };

  const confirmCall = () => {
    if (!callDate || !callTime) return;
    const [h, m] = callTime.split(":").map(Number);
    const dt = new Date(callDate);
    dt.setHours(h, m, 0, 0);
    if (dt.getTime() <= Date.now()) {
      pushBot("Please select a future date and time.");
      return;
    }
    pushUser(`Call on ${dt.toLocaleString()}`);
    setCallDate(undefined);
    setCallTime("");
    pushBot("Thank you! You will receive call details on your phone shortly.");
    showMenu();
  };

  const today = useMemo(() => {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    return d;
  }, []);

  return (
    <>
      {/* Launcher */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.6, type: "spring", stiffness: 200, damping: 18 }}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close chat" : "Open chat"}
        className={cn(
          "fixed z-[60] bottom-4 right-4 sm:bottom-6 sm:right-6",
          "h-14 w-14 rounded-full shadow-lg",
          "bg-primary text-primary-foreground",
          "flex items-center justify-center",
          "ring-2 ring-background"
        )}
      >
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
              <X className="h-6 w-6" />
            </motion.span>
          ) : (
            <motion.span key="m" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
              <MessageCircle className="h-6 w-6" />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.25, ease: [0.22, 0.9, 0.32, 1] }}
            className={cn(
              "fixed z-[60] bg-background border border-border rounded-2xl shadow-2xl overflow-hidden flex flex-col",
              "bottom-20 right-2 left-2 sm:left-auto sm:right-6 sm:bottom-24",
              "sm:w-[380px] h-[78vh] sm:h-[560px] max-h-[640px]"
            )}
            role="dialog"
            aria-label="Chat with Busy Bees"
          >
            {/* Header */}
            <div className="flex items-center gap-3 px-4 py-3 border-b bg-primary/5">
              <img src={AVATAR} alt="Busy Bees mascot" className="h-10 w-10 rounded-full object-cover bg-primary/10" />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold leading-tight">Busy Bees Assistant</p>
                <p className="text-xs text-muted-foreground">Friendly help, anytime 🐝</p>
              </div>
              <button onClick={() => setOpen(false)} className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Close">
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto px-3 py-4 space-y-3 bg-muted/30">
              {messages.map((m) => (
                <MessageBubble key={m.id} m={m} onAction={handleAction}>
                  {m.custom === "programs" && <ProgramsCard />}
                  {m.custom === "locate" && <LocateCard />}
                  {m.custom === "calendar" && (
                    <div className="mt-2 rounded-lg border bg-background p-2">
                      <Calendar
                        mode="single"
                        onSelect={handleVisitDate}
                        disabled={(d) => d < today}
                        className="p-2 pointer-events-auto"
                      />
                    </div>
                  )}
                  {m.custom === "datetime" && (
                    <div className="mt-2 space-y-2 rounded-lg border bg-background p-2">
                      <Calendar
                        mode="single"
                        selected={callDate}
                        onSelect={setCallDate}
                        disabled={(d) => d < today}
                        className="p-2 pointer-events-auto"
                      />
                      <div className="flex items-center gap-2 px-1">
                        <Input
                          type="time"
                          value={callTime}
                          onChange={(e) => setCallTime(e.target.value)}
                          className="h-9"
                        />
                        <Button size="sm" onClick={confirmCall} disabled={!callDate || !callTime}>
                          Confirm
                        </Button>
                      </div>
                    </div>
                  )}
                </MessageBubble>
              ))}
            </div>

            {/* Input */}
            <div className="border-t bg-background p-2">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend();
                }}
                className="flex items-center gap-2"
              >
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder={
                    step === "name"
                      ? "Type your name…"
                      : step === "phone"
                        ? "10-digit mobile number"
                        : step === "exited"
                          ? "Chat ended"
                          : "Type a message…"
                  }
                  disabled={step === "exited"}
                  inputMode={step === "phone" ? "numeric" : "text"}
                  maxLength={step === "phone" ? 10 : 120}
                  className="h-10"
                  aria-label="Message"
                />
                <Button type="submit" size="icon" className="h-10 w-10" disabled={step === "exited" || !input.trim()}>
                  <Send className="h-4 w-4" />
                </Button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const MessageBubble = ({
  m,
  onAction,
  children,
}: {
  m: Message;
  onAction: (v: string) => void;
  children?: React.ReactNode;
}) => {
  const isBot = m.sender === "bot";
  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.18 }}
      className={cn("flex gap-2", isBot ? "justify-start" : "justify-end")}
    >
      {isBot && (
        <img src={AVATAR} alt="" className="h-7 w-7 rounded-full object-cover bg-primary/10 mt-1 shrink-0" />
      )}
      <div className={cn("max-w-[80%] space-y-2")}>
        {m.text && (
          <div
            className={cn(
              "px-3 py-2 rounded-2xl text-sm leading-relaxed shadow-sm",
              isBot
                ? "bg-background border border-border text-foreground rounded-tl-sm"
                : "bg-primary text-primary-foreground rounded-tr-sm"
            )}
          >
            {m.text}
          </div>
        )}
        {children}
        {m.actions && (
          <div className="flex flex-wrap gap-1.5">
            {m.actions.map((a) => (
              <button
                key={a.value}
                onClick={() => onAction(a.value)}
                className={cn(
                  "px-3 py-1.5 text-xs font-medium rounded-full border transition-colors",
                  "bg-background hover:bg-primary hover:text-primary-foreground hover:border-primary",
                  "border-border text-foreground"
                )}
              >
                {iconFor(a.value)} {a.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

const iconFor = (v: string) => {
  const cls = "inline h-3.5 w-3.5 mr-1 -mt-0.5";
  switch (v) {
    case "programs":
      return <BookOpen className={cls} />;
    case "locate":
      return <MapPin className={cls} />;
    case "visit":
    case "call":
      return <CalendarDays className={cls} />;
    case "exit":
      return <LogOut className={cls} />;
    case "whatsapp":
      return <Phone className={cls} />;
    default:
      return null;
  }
};

const ProgramsCard = () => (
  <div className="rounded-xl border bg-background p-3 space-y-2">
    {PROGRAMS.map((p) => (
      <div key={p.name} className="border-b last:border-0 pb-2 last:pb-0">
        <p className="text-sm font-semibold text-foreground">{p.name}</p>
        <p className="text-xs text-muted-foreground">{p.desc}</p>
      </div>
    ))}
  </div>
);

const LocateCard = () => (
  <div className="rounded-xl border bg-background p-3 space-y-2">
    <p className="text-sm font-semibold">{BUSINESS.legalName}</p>
    <span className="inline-block text-[10px] uppercase tracking-wide px-2 py-0.5 rounded-full bg-primary/10 text-primary font-semibold">
      Admissions Open
    </span>
    <p className="text-xs text-muted-foreground">Age group: 1.5 – 6 years</p>
    <p className="text-xs text-foreground/80">{fullAddress}</p>
    <a
      href={BUSINESS.mapsLink}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
    >
      <MapPin className="h-3.5 w-3.5" /> Open in Google Maps
    </a>
  </div>
);

export default Chatbot;
