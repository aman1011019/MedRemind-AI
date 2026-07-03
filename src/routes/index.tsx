import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import {
  Camera, Pill, Calendar, Droplets, Moon, Footprints, HeartPulse, Activity,
  Brain, MessageCircle, Mic, FileText, BellRing, Watch, ShieldCheck, Lock,
  Sparkles, Apple, Download, Play, ArrowRight, CheckCircle2, FileScan,
  TrendingUp, AlertTriangle, Zap, Stethoscope, Scale, ExternalLink, Siren,
} from "lucide-react";
import { toast } from "sonner";
import heroPhone from "../assets/hero-phone.png";
import auroraBg from "../assets/aurora-bg.jpg";
import ocrImg from "../assets/ocr-scan.jpg";
import watchImg from "../assets/smartwatch.jpg";
import { openDownload } from "../lib/download-bus";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MEDREMIND AI | AI Powered Healthcare Companion" },
      { name: "description", content: "Your personal AI health companion combining offline prescription scanning, medicine reminders, emotional wellness, preventive healthcare and intelligent health tracking." },
      { property: "og:title", content: "MEDREMIND AI | AI Powered Healthcare Companion" },
      { property: "og:description", content: "Your personal AI health companion combining offline prescription scanning, medicine reminders, emotional wellness, preventive healthcare and intelligent health tracking." },
    ],
  }),
  component: Home,
});

function Home() {
  const [isVoiceOpen, setIsVoiceOpen] = useState(false);
  const [pdfPreviewUrl, setPdfPreviewUrl] = useState<string | null>(null);
  const [isExportOpen, setIsExportOpen] = useState(false);

  return (
    <main className="relative overflow-hidden">
      <Hero />
      <WhySection />
      <OcrSection />
      <MedicineSection />
      <SafeSpaceSection />
      <VoiceSection onOpenVoice={() => setIsVoiceOpen(true)} />
      <HealthDashboardSection />
      <SmartwatchSection />
      <EmotionalAnalyticsSection />
      <ReportSection
        onPreviewPdf={(url) => setPdfPreviewUrl(url)}
        onOpenExport={() => setIsExportOpen(true)}
      />
      <NotificationsSection />
      <FeaturesGrid />
      <PrivacySection />
      <LegalCenterSection />
      <DownloadSection />
      <AboutSection />

      {isVoiceOpen && <VoiceModal onClose={() => setIsVoiceOpen(false)} />}
      {pdfPreviewUrl && <PdfPreviewModal fileUrl={pdfPreviewUrl} onClose={() => setPdfPreviewUrl(null)} />}
      {isExportOpen && <ExportOptionsModal onClose={() => setIsExportOpen(false)} />}
    </main>
  );
}

/* ---------- HERO ---------- */
function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  return (
    <section ref={ref} className="relative min-h-screen flex items-center pt-32 pb-20">
      <div className="absolute inset-0 -z-10">
        <img src={auroraBg} alt="" className="w-full h-full object-cover opacity-60" />
        <div className="absolute inset-0 aurora-bg" />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, transparent 0%, var(--background) 80%)" }} />
      </div>
      <ParticleField />

      <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-12 items-center relative">
        <motion.div style={{ y, opacity }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs tracking-wide text-muted-foreground mb-6"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-teal animate-pulse" />
            INTRODUCING MEDREMIND AI · v1.0
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold leading-[1.05]"
          >
            Your Personal{" "}
            <span className="text-gradient">AI Health Companion</span>{" "}
            <span className="text-muted-foreground">that understands both body and mind.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed"
          >
            MEDREMIND AI combines offline prescription scanning, medicine scheduling, an AI therapist,
            preventive healthcare monitoring, emotional intelligence, voice therapy and wearable health
            tracking — into one complete on-device ecosystem.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a href="https://github.com/aman1011019/MedRemind-AI/raw/refs/heads/apk/MEDREMIND-AI-1.0.1.apk" download="MEDREMIND-AI-1.0.1.apk" className="btn-liquid flex items-center justify-center gap-2">
              <Download className="h-4 w-4" /> Download Android APK
            </a>
            <button onClick={() => openDownload("ios")} className="btn-ghost-glass">
              <Apple className="h-4 w-4" /> Download on App Store
            </button>
            <a href="#demo" className="btn-ghost-glass">
              <Play className="h-4 w-4" /> Watch Live Demo
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9, duration: 1 }}
            className="mt-10 flex items-center gap-6 text-xs text-muted-foreground"
          >
            <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-teal" /> 100% On-Device</div>
            <div className="flex items-center gap-2"><Lock className="h-4 w-4 text-teal" /> No Cloud, No Login</div>
            <div className="flex items-center gap-2"><Sparkles className="h-4 w-4 text-teal" /> Offline OCR</div>
          </motion.div>
        </motion.div>

        <FloatingPhone />
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs text-muted-foreground flex flex-col items-center gap-2 animate-bounce">
        <span>Scroll</span>
        <div className="h-8 w-[1px] bg-gradient-to-b from-foreground/50 to-transparent" />
      </div>
    </section>
  );
}

function FloatingPhone() {
  const screens = ["Dashboard", "Prescription Scanner", "Medicine Reminder", "Safe Space AI", "Voice Therapy", "Sleep Tracking", "Mood Analytics"];
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % screens.length), 2200);
    return () => clearInterval(t);
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.4 }}
      className="relative flex justify-center"
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-[420px] w-[420px] rounded-full blur-3xl opacity-60" style={{ background: "var(--gradient-mesh)" }} />
      </div>
      <motion.div
        animate={{ y: [0, -16, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="relative"
      >
        <img src={heroPhone} alt="MEDREMIND AI on phone" width={420} height={520} className="relative z-10 drop-shadow-[0_30px_80px_rgba(14,165,233,0.4)] max-w-[420px] w-full" />
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
          className="absolute -right-4 top-1/3 glass-strong rounded-2xl px-4 py-3 text-xs font-medium hidden sm:block"
        >
          <div className="text-[10px] text-muted-foreground uppercase tracking-wider">Now showing</div>
          <div className="mt-1 text-sm">{screens[idx]}</div>
        </motion.div>
        <motion.div
          animate={{ y: [0, 10, 0] }} transition={{ duration: 4, repeat: Infinity, delay: 1 }}
          className="absolute -left-6 top-1/4 glass-strong rounded-2xl px-3 py-2 text-xs hidden sm:flex items-center gap-2"
        >
          <HeartPulse className="h-4 w-4 text-teal" /> 72 BPM
        </motion.div>
        <motion.div
          animate={{ y: [0, -10, 0] }} transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
          className="absolute -left-2 bottom-20 glass-strong rounded-2xl px-3 py-2 text-xs hidden sm:flex items-center gap-2"
        >
          <Droplets className="h-4 w-4 text-sky-400" /> 1.8L today
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

function ParticleField() {
  const dots = Array.from({ length: 28 });
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {dots.map((_, i) => (
        <motion.span
          key={i}
          className="absolute h-1 w-1 rounded-full bg-white/40"
          style={{ left: `${(i * 37) % 100}%`, top: `${(i * 53) % 100}%` }}
          animate={{ y: [0, -30, 0], opacity: [0.2, 0.8, 0.2] }}
          transition={{ duration: 4 + (i % 5), repeat: Infinity, delay: i * 0.2 }}
        />
      ))}
    </div>
  );
}

/* ---------- Generic section pieces ---------- */
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }}
      className="inline-flex items-center gap-2 glass rounded-full px-3 py-1 text-[11px] tracking-widest uppercase text-muted-foreground mb-5"
    >
      <span className="h-1 w-1 rounded-full bg-teal" /> {children}
    </motion.div>
  );
}

function Heading({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }}
      className={`text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-[1.05] ${className}`}
    >
      {children}
    </motion.h2>
  );
}

/* ---------- WHY ---------- */
function WhySection() {
  const problems = [
    { icon: Pill, t: "People forget their medicines", d: "Skipped doses lead to relapse and hospital visits." },
    { icon: FileScan, t: "Prescriptions are hard to read", d: "Handwritten scripts cost time and confusion." },
    { icon: Brain, t: "Mental health is ignored", d: "Stress, anxiety and burnout build silently." },
    { icon: Droplets, t: "Poor hydration & sleep", d: "Small daily habits decide long-term health." },
    { icon: TrendingUp, t: "No preventive awareness", d: "We wait until something breaks to act." },
    { icon: AlertTriangle, t: "Healthcare is reactive", d: "Treatment after illness, not before." },
  ];
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-7xl px-4">
        <div className="max-w-3xl">
          <SectionLabel>Why MEDREMIND AI</SectionLabel>
          <Heading>
            Healthcare should <span className="text-gradient">prevent</span> problems before they become serious.
          </Heading>
          <p className="mt-6 text-lg text-muted-foreground">
            Today's healthcare reacts. We built MEDREMIND AI to anticipate — combining physical and emotional
            wellbeing in one intelligent companion that lives entirely on your device.
          </p>
        </div>
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {problems.map((p, i) => (
            <motion.div
              key={p.t}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="glass rounded-3xl p-6 hover:bg-white/5 transition group"
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl mb-4 group-hover:scale-110 transition" style={{ background: "var(--gradient-primary)" }}>
                <p.icon className="h-5 w-5 text-white" />
              </div>
              <div className="font-display font-semibold text-lg">{p.t}</div>
              <div className="mt-2 text-sm text-muted-foreground">{p.d}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- OCR ---------- */
function OcrSection() {
  const steps = [
    { icon: Camera, t: "Take photo or upload prescription" },
    { icon: Zap, t: "Offline OCR reads doctor's handwriting" },
    { icon: Brain, t: "AI extracts medicine, dose, schedule" },
    { icon: Calendar, t: "Schedule generated automatically" },
    { icon: BellRing, t: "Reminders activated" },
  ];
  return (
    <section id="demo" className="relative py-32">
      <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <SectionLabel>Offline OCR</SectionLabel>
          <Heading>From a blurry script to a clean schedule — <span className="text-gradient">in seconds.</span></Heading>
          <p className="mt-6 text-muted-foreground text-lg">
            Hospital-grade prescription understanding running entirely on your phone. No internet, no upload,
            no API dependency. Your prescription never leaves your device.
          </p>
          <ul className="mt-8 space-y-4">
            {steps.map((s, i) => (
              <motion.li
                key={s.t}
                initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="flex items-start gap-3"
              >
                <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full glass">
                  <s.icon className="h-4 w-4 text-teal" />
                </div>
                <div className="pt-1">{s.t}</div>
              </motion.li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-2">
            {["100% offline", "No cloud", "Hospital-grade"].map((c) => (
              <span key={c} className="glass rounded-full px-3 py-1 text-xs">{c}</span>
            ))}
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
          className="relative"
        >
          <div className="glass-strong rounded-3xl overflow-hidden p-2">
            <img src={ocrImg} alt="Prescription being scanned by AI" width={1280} height={960} loading="lazy" className="rounded-2xl w-full" />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}
            className="absolute -bottom-6 -right-2 sm:right-6 glass-strong rounded-2xl p-4 max-w-[220px]"
          >
            <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Detected</div>
            <div className="mt-1 font-display font-semibold">Amoxicillin 500mg</div>
            <div className="text-xs text-muted-foreground mt-1">1 tab · 3× daily · 7 days</div>
            <div className="mt-3 flex items-center gap-1 text-xs text-teal">
              <CheckCircle2 className="h-3 w-3" /> Schedule created
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------- MEDICINE ---------- */
function MedicineSection() {
  const meds = [
    { t: "08:00", n: "Metformin", d: "500mg · with breakfast", c: "from-sky-500 to-indigo-500" },
    { t: "13:00", n: "Vitamin D3", d: "60,000 IU · weekly", c: "from-teal-400 to-sky-500" },
    { t: "21:00", n: "Atorvastatin", d: "10mg · after dinner", c: "from-indigo-500 to-violet-500" },
  ];
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-7xl px-4">
        <div className="max-w-3xl">
          <SectionLabel>Medicine Management</SectionLabel>
          <Heading>Never miss a dose — <span className="text-gradient">again.</span></Heading>
          <p className="mt-6 text-muted-foreground text-lg">
            Auto-generated schedules, refill reminders, adherence scoring and a calendar that finally tells you
            the truth about how you're actually doing.
          </p>
        </div>

        <div className="mt-16 grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 glass-strong rounded-3xl p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">Today · Tuesday</div>
                <div className="font-display font-semibold text-2xl">3 reminders</div>
              </div>
              <div className="glass rounded-full px-3 py-1 text-xs">Adherence 96%</div>
            </div>
            <div className="space-y-3">
              {meds.map((m, i) => (
                <motion.div
                  key={m.n}
                  initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4 rounded-2xl p-4 bg-white/5 hover:bg-white/10 transition"
                >
                  <div className={`h-12 w-12 rounded-2xl bg-gradient-to-br ${m.c} flex items-center justify-center`}>
                    <Pill className="h-5 w-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="font-medium">{m.n}</div>
                    <div className="text-xs text-muted-foreground">{m.d}</div>
                  </div>
                  <div className="text-sm font-mono text-muted-foreground">{m.t}</div>
                  <CheckCircle2 className="h-5 w-5 text-teal" />
                </motion.div>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            {[
              { i: Calendar, t: "Calendar tracking", d: "See adherence patterns over time." },
              { i: BellRing, t: "Smart refill alerts", d: "Re-order before you run out." },
              { i: TrendingUp, t: "Adherence score", d: "A single number that captures progress." },
            ].map((c) => (
              <div key={c.t} className="glass rounded-3xl p-5">
                <c.i className="h-5 w-5 text-teal mb-3" />
                <div className="font-display font-semibold">{c.t}</div>
                <div className="text-sm text-muted-foreground mt-1">{c.d}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- SAFE SPACE ---------- */
function SafeSpaceSection() {
  const messages = [
    { from: "user", text: "I feel lonely." },
    { from: "ai", text: "Hmm…" },
    { from: "ai", text: "I hear you." },
    { from: "ai", text: "Sometimes loneliness is less about being alone — sometimes it comes from feeling disconnected." },
    { from: "ai", text: "Has something changed recently?" },
  ];
  const [shown, setShown] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setShown((s) => (s + 1) % (messages.length + 2)), 1600);
    return () => clearInterval(t);
  }, []);
  return (
    <section className="relative py-32">
      <div className="absolute inset-0 -z-10 aurora-bg opacity-40" />
      <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1 relative">
          <div className="glass-strong rounded-3xl p-5 max-w-md mx-auto">
            <div className="flex items-center gap-3 pb-4 border-b border-white/10">
              <div className="h-9 w-9 rounded-full flex items-center justify-center" style={{ background: "var(--gradient-primary)" }}>
                <Sparkles className="h-4 w-4 text-white" />
              </div>
              <div>
                <div className="font-medium text-sm">Safe Space</div>
                <div className="text-[10px] text-teal flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-teal animate-pulse" /> Listening
                </div>
              </div>
            </div>
            <div className="space-y-2 mt-4 min-h-[280px]">
              {messages.slice(0, shown).map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                  className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm ${m.from === "user" ? "bg-gradient-to-br from-sky-500 to-indigo-500 text-white rounded-br-sm" : "glass rounded-bl-sm"}`}>
                    {m.text}
                  </div>
                </motion.div>
              ))}
              {shown <= messages.length && (
                <div className="flex gap-1 pt-1">
                  <span className="h-2 w-2 rounded-full bg-muted-foreground/60 animate-bounce" style={{ animationDelay: "0ms" }} />
                  <span className="h-2 w-2 rounded-full bg-muted-foreground/60 animate-bounce" style={{ animationDelay: "150ms" }} />
                  <span className="h-2 w-2 rounded-full bg-muted-foreground/60 animate-bounce" style={{ animationDelay: "300ms" }} />
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <SectionLabel>Safe Space · AI Therapist</SectionLabel>
          <Heading>AI that listens like a <span className="text-gradient">human therapist.</span></Heading>
          <p className="mt-6 text-muted-foreground text-lg">
            Trained to hold space, not give scripted answers. Safe Space picks up on emotional tone, asks
            grounded follow-ups, and never judges. Available 24/7 — privately, on your device.
          </p>
          <div className="mt-8 grid sm:grid-cols-2 gap-3">
            {[
              "Emotional tone detection",
              "Natural typing rhythm",
              "Voice mode included",
              "Conversations stored locally",
            ].map((f) => (
              <div key={f} className="flex items-center gap-2 text-sm">
                <CheckCircle2 className="h-4 w-4 text-teal" /> {f}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- VOICE ---------- */
function VoiceSection({ onOpenVoice }: { onOpenVoice: () => void }) {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-7xl px-4 text-center">
        <SectionLabel>Human-level Voice AI</SectionLabel>
        <Heading className="max-w-4xl mx-auto">A voice that <span className="text-gradient">pauses, listens, and feels human.</span></Heading>
        <p className="mt-6 text-muted-foreground text-lg max-w-2xl mx-auto">
          Natural cadence. Real interruptions. Emotion-adaptive tone. Talk to MEDREMIND AI the way you'd
          talk to someone who actually cares.
        </p>
        <div className="mt-16 mx-auto max-w-2xl glass-strong rounded-3xl p-10">
          <div className="flex items-center justify-center gap-2 h-32">
            {Array.from({ length: 32 }).map((_, i) => (
              <motion.span
                key={i}
                className="w-1.5 rounded-full"
                style={{ background: "var(--gradient-primary)" }}
                animate={{ height: [`${20 + Math.random() * 60}%`, `${20 + Math.random() * 80}%`, `${20 + Math.random() * 60}%`] }}
                transition={{ duration: 0.8 + Math.random(), repeat: Infinity, delay: i * 0.04 }}
              />
            ))}
          </div>
          <div className="mt-6 flex items-center justify-center gap-3">
            <button onClick={onOpenVoice} className="btn-liquid flex items-center justify-center gap-2"><Mic className="h-4 w-4" /> Try voice mode</button>
            <span className="text-xs text-muted-foreground">Tap to speak — interruptible, real-time</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- HEALTH DASHBOARD ---------- */
function HealthDashboardSection() {
  const stats = [
    { i: Droplets, l: "Water", v: "1.8L", s: "+12%" },
    { i: Moon, l: "Sleep", v: "7h 24m", s: "Good" },
    { i: Footprints, l: "Steps", v: "8,420", s: "+8%" },
    { i: HeartPulse, l: "Resting HR", v: "62 bpm", s: "Stable" },
    { i: Activity, l: "Wellness", v: "82 / 100", s: "Improving" },
    { i: Pill, l: "Adherence", v: "96%", s: "Excellent" },
  ];
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-7xl px-4">
        <div className="max-w-3xl">
          <SectionLabel>Health Tracking</SectionLabel>
          <Heading>One dashboard. <span className="text-gradient">Every signal.</span></Heading>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {stats.map((s, i) => (
            <motion.div
              key={s.l}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
              className="glass rounded-3xl p-6 relative overflow-hidden group"
            >
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full opacity-20 blur-2xl group-hover:opacity-40 transition" style={{ background: "var(--gradient-primary)" }} />
              <div className="flex items-center justify-between">
                <s.i className="h-5 w-5 text-teal" />
                <div className="text-[10px] text-teal uppercase tracking-wider">{s.s}</div>
              </div>
              <div className="mt-6 text-xs text-muted-foreground uppercase tracking-wider">{s.l}</div>
              <div className="text-3xl font-display font-bold mt-1">{s.v}</div>
              <Sparkline />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Sparkline() {
  const pts = Array.from({ length: 24 }).map((_, i) => `${(i / 23) * 100},${30 - (Math.sin(i / 2) * 10 + Math.random() * 8)}`).join(" ");
  return (
    <svg viewBox="0 0 100 30" className="mt-4 w-full h-10">
      <defs>
        <linearGradient id="sg" x1="0" x2="1">
          <stop offset="0" stopColor="#0EA5E9" />
          <stop offset="1" stopColor="#14B8A6" />
        </linearGradient>
      </defs>
      <polyline points={pts} fill="none" stroke="url(#sg)" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

/* ---------- SMARTWATCH ---------- */
function SmartwatchSection() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <SectionLabel>Smartwatch Integration</SectionLabel>
          <Heading>Your smart watch becomes <span className="text-gradient">smarter</span> with MEDREMIND AI.</Heading>
          <p className="mt-6 text-muted-foreground text-lg">
            Connect any DA FIT-compatible smartwatch. Steps, BP, heart rate, SpO₂, calories, distance and
            sleep stages — synced automatically and translated into actionable insights.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-3">
            {["Steps", "Blood Pressure", "Heart Rate", "SpO₂", "Calories", "Distance", "Sleep Quality", "Live Sync"].map((c) => (
              <div key={c} className="glass rounded-2xl px-4 py-3 text-sm flex items-center gap-2">
                <Watch className="h-4 w-4 text-teal" /> {c}
              </div>
            ))}
          </div>
          <div className="mt-6 text-xs text-muted-foreground flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-teal animate-pulse" /> Last synced 2 minutes ago
          </div>
        </div>
        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="glass-strong rounded-3xl overflow-hidden p-2">
          <img src={watchImg} alt="Smartwatch synced with MEDREMIND AI" width={1280} height={960} loading="lazy" className="rounded-2xl w-full" />
        </motion.div>
      </div>
    </section>
  );
}

/* ---------- EMOTIONAL ANALYTICS ---------- */
function EmotionalAnalyticsSection() {
  const bars = [
    { l: "Stress", v: 35, t: "down" },
    { l: "Anxiety", v: 28, t: "down" },
    { l: "Mood", v: 78, t: "up" },
    { l: "Hydration", v: 64, t: "down" },
    { l: "Sleep", v: 82, t: "up" },
  ];
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-5 gap-12 items-center">
        <div className="lg:col-span-2">
          <SectionLabel>Weekly Emotional Intelligence</SectionLabel>
          <Heading>Your mind, <span className="text-gradient">measured kindly.</span></Heading>
          <p className="mt-6 text-muted-foreground text-lg">
            MEDREMIND AI translates mood, stress, sleep and hydration into a weekly story you can actually
            act on — no spreadsheets, no jargon.
          </p>
          <div className="mt-6 glass rounded-2xl p-4 text-sm">
            <div className="text-xs uppercase tracking-wider text-muted-foreground mb-2">AI summary</div>
            Stress reduced by 15% this week. Sleep improved. Hydration slightly lower than normal — try a
            morning glass of water before coffee.
          </div>
        </div>
        <div className="lg:col-span-3 glass-strong rounded-3xl p-8">
          <div className="space-y-5">
            {bars.map((b, i) => (
              <div key={b.l}>
                <div className="flex justify-between text-sm mb-1.5">
                  <span>{b.l}</span>
                  <span className="text-muted-foreground">{b.v}%</span>
                </div>
                <div className="h-2.5 w-full rounded-full bg-white/5 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }} whileInView={{ width: `${b.v}%` }} viewport={{ once: true }} transition={{ duration: 1.2, delay: i * 0.1, ease: "easeOut" }}
                    className="h-full rounded-full"
                    style={{ background: b.t === "up" ? "linear-gradient(90deg,#14B8A6,#0EA5E9)" : "linear-gradient(90deg,#6366F1,#0EA5E9)" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- REPORTS ---------- */
function ReportSection({ onPreviewPdf, onOpenExport }: { onPreviewPdf: (url: string) => void; onOpenExport: () => void }) {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <div className="glass-strong rounded-3xl p-6 max-w-sm relative">
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Weekly Report · Confidential</div>
            <div className="font-display font-bold text-xl mt-1">Health Summary</div>
            <div className="text-xs text-muted-foreground">Sep 23 — Sep 29</div>
            <div className="mt-5 space-y-3 text-sm">
              {[
                ["Medicine adherence", "96%"],
                ["Avg sleep", "7h 24m"],
                ["Water intake", "1.8 L/day"],
                ["Workout sessions", "4"],
                ["Stress score", "↓ 15%"],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-muted-foreground">{k}</span>
                  <span className="font-medium">{v}</span>
                </div>
              ))}
            </div>
            <div className="mt-5 rounded-2xl p-4 text-xs" style={{ background: "var(--gradient-primary)" }}>
              <div className="font-semibold mb-1">AI insight</div>
              You're trending upward. Hold sleep above 7h next week and stress drops further.
            </div>
            <div className="mt-4 flex gap-2 text-[10px]">
              {["PDF", "Excel", "CSV"].map((t) => (
                <button
                  key={t}
                  onClick={() => {
                    const ext = t === "Excel" ? "xlsx" : t.toLowerCase();
                    verifyAndDownload(`/reports/daily_report.${ext}`, `daily_report.${ext}`);
                  }}
                  className="glass rounded-full px-3 py-1 hover:bg-white/10 transition cursor-pointer text-foreground text-[10px] font-medium"
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
        </motion.div>
        <div>
          <SectionLabel>Daily & Weekly Reports</SectionLabel>
          <Heading>Hospital-grade reports, <span className="text-gradient">one tap away.</span></Heading>
          <p className="mt-6 text-muted-foreground text-lg">
            Export beautifully designed PDFs to share with your doctor — adherence, vitals, mood and an
            AI-written narrative your physician will actually read.
          </p>
          <div className="mt-6 flex gap-3">
            <button onClick={() => onPreviewPdf("/reports/daily_report.pdf")} className="btn-liquid flex items-center justify-center gap-2"><FileText className="h-4 w-4" /> Preview PDF</button>
            <button onClick={onOpenExport} className="btn-ghost-glass">Export Options</button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- NOTIFICATIONS ---------- */
function NotificationsSection() {
  const notes = [
    { t: "9:00 AM", title: "Good morning 🌞", body: "How are you feeling today?" },
    { t: "11:30 AM", title: "Hydration time 💧", body: "Drink 250 ml now." },
    { t: "3:00 PM", title: "Quick vibe check ⚡", body: "How has your day been going?" },
    { t: "8:00 PM", title: "Time for your medicine 💊", body: "Atorvastatin · 10mg" },
    { t: "9:30 PM", title: "Before you sleep 🌙", body: "Tell me how today really felt." },
  ];
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-7xl px-4">
        <div className="max-w-3xl mx-auto text-center">
          <SectionLabel>Smart Notifications</SectionLabel>
          <Heading>Reminders that <span className="text-gradient">actually feel human.</span></Heading>
          <p className="mt-6 text-muted-foreground text-lg">
            No more sterile alerts. MEDREMIND AI writes nudges with warmth — tuned to your day, your mood
            and your goals.
          </p>
        </div>
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {notes.map((n, i) => (
            <motion.div
              key={n.title}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              className="glass-strong rounded-2xl p-4"
            >
              <div className="flex items-center gap-2 text-[10px] text-muted-foreground">
                <BellRing className="h-3 w-3" /> MEDREMIND AI · {n.t}
              </div>
              <div className="mt-2 font-medium text-sm">{n.title}</div>
              <div className="text-xs text-muted-foreground mt-1">{n.body}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- FEATURES GRID ---------- */
function FeaturesGrid() {
  const features = [
    { i: FileScan, t: "Offline OCR" }, { i: Pill, t: "Medicine Reminder" }, { i: BellRing, t: "Refill Alerts" },
    { i: Calendar, t: "Calendar Tracking" }, { i: Droplets, t: "Water Reminder" }, { i: Moon, t: "Sleep Tracking" },
    { i: Activity, t: "Food Tracking" }, { i: Footprints, t: "Workout Tracking" }, { i: TrendingUp, t: "Step Counter" },
    { i: Watch, t: "DA FIT Sync" }, { i: HeartPulse, t: "Heart Rate" }, { i: Stethoscope, t: "Blood Pressure" },
    { i: Sparkles, t: "SpO₂ Tracking" }, { i: Brain, t: "AI Therapist" }, { i: Mic, t: "Voice Therapy" },
    { i: MessageCircle, t: "Emotion Analytics" }, { i: FileText, t: "Weekly Reports" }, { i: Zap, t: "Health Dashboard" },
    { i: ShieldCheck, t: "Preventive AI" }, { i: AlertTriangle, t: "Emergency SOS" },
  ];
  return (
    <section id="features" className="relative py-32">
      <div className="mx-auto max-w-7xl px-4">
        <div className="max-w-3xl">
          <SectionLabel>Everything in one app</SectionLabel>
          <Heading>An entire <span className="text-gradient">healthcare ecosystem</span> in your pocket.</Heading>
        </div>
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {features.map((f, i) => (
            <motion.div
              key={f.t}
              initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
              transition={{ delay: (i % 10) * 0.04 }}
              className="glass rounded-2xl p-5 hover:bg-white/10 hover:-translate-y-1 transition group"
            >
              <f.i className="h-5 w-5 text-teal mb-3 group-hover:scale-110 transition" />
              <div className="text-sm font-medium">{f.t}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- PRIVACY ---------- */
function PrivacySection() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
          className="relative flex justify-center"
        >
          <div className="relative h-72 w-72">
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} className="absolute inset-0 rounded-full border border-white/10" />
            <motion.div animate={{ rotate: -360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute inset-6 rounded-full border border-white/10" />
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }} className="absolute inset-12 rounded-full border border-teal/30" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-24 w-24 rounded-full flex items-center justify-center animate-pulse-glow" style={{ background: "var(--gradient-primary)" }}>
                <Lock className="h-10 w-10 text-white" />
              </div>
            </div>
          </div>
        </motion.div>
        <div>
          <SectionLabel>Privacy First</SectionLabel>
          <Heading>Your health data <span className="text-gradient">belongs only to you.</span></Heading>
          <ul className="mt-8 space-y-3">
            {[
              "No login. No Google. No phone number.",
              "Everything stored locally, encrypted on-device.",
              "No cloud storage. No third-party tracking.",
              "AI chat stays on your device — always.",
              "Prescription OCR processed locally.",
              "We never sell user data. Ever.",
            ].map((p) => (
              <li key={p} className="flex items-start gap-2 text-sm">
                <CheckCircle2 className="h-4 w-4 text-teal mt-0.5 shrink-0" /> {p}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ---------- DOWNLOAD ---------- */
function DownloadSection() {
  return (
    <section id="download" className="relative py-32">
      <div className="absolute inset-0 -z-10 aurora-bg opacity-50" />
      <div className="mx-auto max-w-5xl px-4 text-center">
        <SectionLabel>Get the app</SectionLabel>
        <Heading className="max-w-3xl mx-auto">Download <span className="text-gradient">MEDREMIND AI.</span></Heading>
        <p className="mt-6 text-muted-foreground text-lg">Version 1.0.1 · 59 MB · Android 10+ supported</p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <a href="https://github.com/aman1011019/MedRemind-AI/raw/refs/heads/apk/MEDREMIND-AI-1.0.1.apk" download="MEDREMIND-AI-1.0.1.apk" className="btn-liquid flex items-center justify-center gap-2"><Download className="h-4 w-4" /> Download Android APK</a>
          <button onClick={() => openDownload("ios")} className="btn-ghost-glass"><Apple className="h-4 w-4" /> Download on App Store</button>
          <button onClick={() => openDownload("beta")} className="btn-ghost-glass"><Sparkles className="h-4 w-4" /> Join Beta Testing</button>
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {["Virus Scanned", "SHA256 Verified", "Signed Build"].map((b) => (
            <span key={b} className="glass rounded-full px-3 py-1 text-xs flex items-center gap-1.5">
              <ShieldCheck className="h-3 w-3 text-teal" /> {b}
            </span>
          ))}
        </div>

        <div className="mt-16 glass-strong rounded-3xl p-8 text-left">
          <div className="font-display font-semibold text-xl mb-4">Install on Android</div>
          <ol className="grid sm:grid-cols-5 gap-3 text-sm">
            {["Download APK", "Open file", "Allow install unknown apps", "Install MEDREMIND AI", "Start using app"].map((s, i) => (
              <li key={s} className="glass rounded-2xl p-4">
                <div className="text-xs text-teal mb-1">Step {i + 1}</div>
                {s}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

/* ---------- ABOUT ---------- */
function AboutSection() {
  return (
    <section id="about" className="relative py-32">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <SectionLabel>Our mission</SectionLabel>
        <Heading>Healthcare today fixes problems. <span className="text-gradient">We prevent them.</span></Heading>
        <p className="mt-8 text-lg text-muted-foreground leading-relaxed">
          MEDREMIND AI was created because healthcare focuses on treatment after people become sick.
          Mental health gets ignored. Medicine management becomes difficult. Preventive care is missing.
          We're combining physical and emotional health into one intelligent AI ecosystem — privately,
          on your device, available to everyone.
        </p>
        <div className="mt-10 flex justify-center">
          <a href="#download" className="btn-liquid">Get MEDREMIND AI <ArrowRight className="h-4 w-4" /></a>
        </div>
      </div>
    </section>
  );
}

/* ---------- REPORT & EXPORT HELPERS ---------- */
async function verifyAndDownload(filePath: string, fileName: string) {
  try {
    const res = await fetch(filePath, { method: "HEAD" });
    if (!res.ok) {
      toast.error("Report file not found. Please upload file to reports folder.");
      return;
    }
    const link = document.createElement("a");
    link.href = filePath;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } catch (err) {
    toast.error("Report file not found. Please upload file to reports folder.");
  }
}

function PdfPreviewModal({ fileUrl, onClose }: { fileUrl: string; onClose: () => void }) {
  const [zoom, setZoom] = useState(100);
  const fileName = fileUrl.split("/").pop();

  const handleDownload = () => {
    verifyAndDownload(fileUrl, fileName || "report.pdf");
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-in fade-in duration-300" style={{ background: "oklch(0 0 0 / 0.7)", backdropFilter: "blur(8px)" }} onClick={onClose}>
      <div className="glass-strong relative max-w-4xl w-full h-[85vh] rounded-3xl p-6 flex flex-col animate-in zoom-in-95 duration-300" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
          <div>
            <h3 className="text-xl font-display font-bold text-foreground">PDF Report Preview</h3>
            <p className="text-xs text-muted-foreground">{fileName}</p>
          </div>
          <div className="flex items-center gap-3">
            <button onClick={() => setZoom(z => Math.max(50, z - 10))} className="glass rounded-xl p-2 text-sm hover:bg-white/10 transition text-foreground" title="Zoom Out">Zoom -</button>
            <span className="text-sm font-mono text-foreground">{zoom}%</span>
            <button onClick={() => setZoom(z => Math.min(200, z + 10))} className="glass rounded-xl p-2 text-sm hover:bg-white/10 transition text-foreground" title="Zoom In">Zoom +</button>
            <button onClick={handleDownload} className="btn-liquid !py-2 !px-4 !text-sm">Download</button>
            <button onClick={onClose} className="text-muted-foreground hover:text-foreground text-xl ml-2" aria-label="Close">✕</button>
          </div>
        </div>
        <div className="flex-1 rounded-2xl overflow-hidden bg-black/40 border border-white/10 relative">
          <iframe
            src={`${fileUrl}#toolbar=1`}
            className="w-full h-full border-none transition-transform duration-200"
            style={{ transform: `scale(${zoom / 100})`, transformOrigin: "top center", width: `${100 / (zoom / 100)}%`, height: `${100 / (zoom / 100)}%` }}
            title="PDF Preview"
          />
        </div>
        <div className="flex justify-between items-center text-xs text-muted-foreground mt-4 pt-2 border-t border-white/5">
          <span>Premium dark UI theme</span>
          <span>Page 1 of 1</span>
        </div>
      </div>
    </div>
  );
}

function ExportOptionsModal({ onClose }: { onClose: () => void }) {
  const handleDownload = (format: "pdf" | "xlsx" | "csv") => {
    const ext = format === "xlsx" ? "xlsx" : format;
    verifyAndDownload(`/reports/daily_report.${ext}`, `daily_report.${ext}`);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-in fade-in duration-300" style={{ background: "oklch(0 0 0 / 0.7)", backdropFilter: "blur(8px)" }} onClick={onClose}>
      <div className="glass-strong relative max-w-sm w-full rounded-3xl p-8 animate-in zoom-in-95 duration-300" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute right-4 top-4 text-muted-foreground hover:text-foreground" aria-label="Close">✕</button>
        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl" style={{ background: "var(--gradient-primary)" }}>
          <span className="text-2xl">📊</span>
        </div>
        <h3 className="text-2xl font-display font-bold text-foreground">Export Options</h3>
        <p className="mt-2 text-muted-foreground text-sm">Select your preferred format to download the daily healthcare report.</p>
        <div className="mt-6 flex flex-col gap-3">
          <button onClick={() => handleDownload("pdf")} className="btn-liquid flex justify-between items-center !py-3 !px-5 w-full">
            <span>Daily Report (PDF)</span>
            <span className="text-xs bg-white/20 px-2 py-0.5 rounded text-white">PDF</span>
          </button>
          <button onClick={() => handleDownload("xlsx")} className="btn-ghost-glass flex justify-between items-center !py-3 !px-5 text-foreground hover:bg-white/10 w-full">
            <span>Daily Report (Excel)</span>
            <span className="text-xs bg-white/10 px-2 py-0.5 rounded text-muted-foreground">XLSX</span>
          </button>
          <button onClick={() => handleDownload("csv")} className="btn-ghost-glass flex justify-between items-center !py-3 !px-5 text-foreground hover:bg-white/10 w-full">
            <span>Daily Report (CSV)</span>
            <span className="text-xs bg-white/10 px-2 py-0.5 rounded text-muted-foreground">CSV</span>
          </button>
        </div>
      </div>
    </div>
  );
}

/* ---------- VOICE MODAL ---------- */
function VoiceModal({ onClose }: { onClose: () => void }) {
  const [status, setStatus] = useState<"idle" | "requesting" | "listening" | "thinking" | "speaking" | "paused">("idle");
  const [transcript, setTranscript] = useState("");
  const [aiResponse, setAiResponse] = useState("");
  const [vol, setVol] = useState(0);

  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const rafRef = useRef<number | null>(null);
  const recognitionRef = useRef<any>(null);
  const synthesisUtteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  const startVolumeAnalysis = async (stream: MediaStream) => {
    try {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      const ctx = new AudioContextClass();
      const analyser = ctx.createAnalyser();
      analyser.fftSize = 64;
      const source = ctx.createMediaStreamSource(stream);
      source.connect(analyser);
      audioContextRef.current = ctx;
      analyserRef.current = analyser;

      const bufferLength = analyser.frequencyBinCount;
      const dataArray = new Uint8Array(bufferLength);

      const update = () => {
        if (!analyserRef.current) return;
        analyserRef.current.getByteFrequencyData(dataArray);
        let sum = 0;
        for (let i = 0; i < bufferLength; i++) {
          sum += dataArray[i];
        }
        const average = sum / bufferLength;
        setVol(average);
        rafRef.current = requestAnimationFrame(update);
      };
      update();
    } catch (err) {
      console.error(err);
    }
  };

  const stopVolumeAnalysis = () => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    if (audioContextRef.current) audioContextRef.current.close().catch(() => {});
    analyserRef.current = null;
    audioContextRef.current = null;
  };

  const startRecording = async () => {
    setStatus("requesting");
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;
      startVolumeAnalysis(stream);

      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

      if (SpeechRecognition) {
        const rec = new SpeechRecognition();
        rec.continuous = false;
        rec.interimResults = true;
        rec.lang = "en-US";

        rec.onstart = () => {
          setStatus("listening");
          setTranscript("");
          setAiResponse("");
        };

        rec.onresult = (e: any) => {
          let current = "";
          for (let i = e.resultIndex; i < e.results.length; ++i) {
            current += e.results[i][0].transcript;
          }
          setTranscript(current);
        };

        rec.onerror = (err: any) => {
          console.error(err);
          setStatus("idle");
          stopVolumeAnalysis();
        };

        rec.onend = () => {
          setStatus("thinking");
          stopVolumeAnalysis();
          if (streamRef.current) {
            streamRef.current.getTracks().forEach((track) => track.stop());
          }
          simulateAiResponse();
        };

        recognitionRef.current = rec;
        rec.start();
      } else {
        // Fallback for browsers without speech recognition
        setStatus("listening");
        setTimeout(() => {
          setTranscript("I'm feeling a bit anxious about my health schedules.");
          setStatus("thinking");
          stopVolumeAnalysis();
          simulateAiResponse();
        }, 3000);
      }
    } catch (err) {
      console.error(err);
      toast.error("Microphone permission denied or unavailable.");
      setStatus("idle");
    }
  };

  const simulateAiResponse = () => {
    setTimeout(() => {
      setStatus("speaking");
      const responseText = "I hear you. It sounds like today may have been mentally exhausting. Would you like to talk about what happened?";
      setAiResponse(responseText);
      speakAloud(responseText);
    }, 2500);
  };

  const speakAloud = (text: string) => {
    if (typeof window === "undefined" || !window.speechSynthesis) return;
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    const voices = window.speechSynthesis.getVoices();
    const googleVoice = voices.find((v) => v.name.includes("Google US English") || v.name.includes("Natural"));
    const femaleVoice = voices.find((v) => v.name.toLowerCase().includes("female") || v.name.toLowerCase().includes("zira") || v.name.toLowerCase().includes("samantha"));
    utterance.voice = googleVoice || femaleVoice || voices[0] || null;
    utterance.rate = 0.95;
    utterance.pitch = 1.05;

    utterance.onend = () => {
      setStatus("idle");
    };

    utterance.onerror = () => {
      setStatus("idle");
    };

    synthesisUtteranceRef.current = utterance;
    window.speechSynthesis.speak(utterance);
  };

  const handlePause = () => {
    if (window.speechSynthesis.speaking && !window.speechSynthesis.paused) {
      window.speechSynthesis.pause();
      setStatus("paused");
    }
  };

  const handleResume = () => {
    if (window.speechSynthesis.paused) {
      window.speechSynthesis.resume();
      setStatus("speaking");
    }
  };

  const handleStop = () => {
    window.speechSynthesis.cancel();
    if (recognitionRef.current) {
      recognitionRef.current.abort();
    }
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
    }
    stopVolumeAnalysis();
    setStatus("idle");
  };

  const handleClose = () => {
    window.speechSynthesis.cancel();
    if (recognitionRef.current) {
      recognitionRef.current.abort();
    }
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
    }
    stopVolumeAnalysis();
    onClose();
  };

  useEffect(() => {
    if (typeof window !== "undefined" && window.speechSynthesis) {
      window.speechSynthesis.getVoices();
    }
    return () => {
      window.speechSynthesis.cancel();
      if (recognitionRef.current) {
        recognitionRef.current.abort();
      }
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((track) => track.stop());
      }
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-in fade-in duration-300" style={{ background: "oklch(0 0 0 / 0.7)", backdropFilter: "blur(8px)" }} onClick={handleClose}>
      <div className="glass-strong relative max-w-lg w-full rounded-3xl p-8 flex flex-col items-center animate-in zoom-in-95 duration-300" onClick={(e) => e.stopPropagation()}>
        <button onClick={handleClose} className="absolute right-5 top-5 text-muted-foreground hover:text-foreground text-xl" aria-label="Close">✕</button>
        
        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl animate-pulse-glow" style={{ background: "var(--gradient-primary)" }}>
          <Mic className="h-5 w-5 text-white" />
        </div>

        <h3 className="text-2xl font-display font-bold text-center text-foreground">Voice Therapy Session</h3>
        <p className="mt-1.5 text-xs text-muted-foreground text-center max-w-sm">Talk to your MEDREMIND AI therapist. Completely private and running on your device.</p>

        {/* Live Visualizer Area */}
        <div className="my-8 w-full glass rounded-2xl p-6 flex flex-col justify-center items-center min-h-[140px]">
          {status === "listening" && (
            <div className="text-[10px] text-teal uppercase tracking-widest mb-4 flex items-center gap-1.5 animate-pulse">
              <span className="h-2 w-2 rounded-full bg-teal animate-ping" /> Listening
            </div>
          )}
          {status === "thinking" && (
            <div className="text-[10px] text-indigo-400 uppercase tracking-widest mb-4 flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-indigo-400 animate-ping" /> AI Thinking
            </div>
          )}
          {status === "speaking" && (
            <div className="text-[10px] text-sky-400 uppercase tracking-widest mb-4 flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-sky-400 animate-bounce" /> AI Speaking
            </div>
          )}
          {status === "idle" && (
            <div className="text-[10px] text-muted-foreground uppercase tracking-widest mb-4">
              Tap mic to begin
            </div>
          )}
          {status === "paused" && (
            <div className="text-[10px] text-amber-500 uppercase tracking-widest mb-4">
              Playback Paused
            </div>
          )}

          {/* Waveform visualizer */}
          <div className="flex items-center justify-center gap-1.5 h-16 w-full">
            {Array.from({ length: 19 }).map((_, i) => {
              const factor = Math.sin((i / 18) * Math.PI);
              let h = 8;
              if (status === "listening") {
                h = Math.max(8, (vol / 128) * 80 * factor + Math.random() * 8);
              } else if (status === "speaking") {
                h = Math.max(8, (40 + Math.sin(Date.now() / 100 + i) * 20) * factor);
              } else if (status === "thinking") {
                h = Math.max(8, (12 + Math.sin(Date.now() / 200 + i) * 8) * factor);
              }
              return (
                <div
                  key={i}
                  className="w-1.5 rounded-full transition-all duration-75"
                  style={{
                    height: `${h}px`,
                    background: status === "listening"
                      ? "linear-gradient(to top, #14B8A6, #0EA5E9)"
                      : status === "speaking"
                      ? "linear-gradient(to top, #0EA5E9, #6366F1)"
                      : "linear-gradient(to top, #6366F1, #3b82f6)",
                  }}
                />
              );
            })}
          </div>
        </div>

        {/* Dialog bubble area */}
        <div className="w-full space-y-4 max-h-[160px] overflow-y-auto pr-1">
          {transcript && (
            <div className="flex justify-end">
              <div className="max-w-[85%] bg-gradient-to-br from-teal/30 to-sky/30 border border-teal/15 rounded-2xl rounded-tr-sm px-4 py-2.5 text-sm text-foreground">
                <span className="text-[10px] text-teal block uppercase font-semibold mb-0.5">You</span>
                {transcript}
              </div>
            </div>
          )}
          {status === "thinking" && (
            <div className="flex justify-start">
              <div className="max-w-[85%] glass rounded-2xl rounded-tl-sm px-4 py-2.5 text-sm text-muted-foreground flex items-center gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground/60 animate-bounce" style={{ animationDelay: "0ms" }} />
                <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground/60 animate-bounce" style={{ animationDelay: "150ms" }} />
                <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground/60 animate-bounce" style={{ animationDelay: "300ms" }} />
              </div>
            </div>
          )}
          {aiResponse && (
            <div className="flex justify-start">
              <div className="max-w-[85%] glass rounded-2xl rounded-tl-sm px-4 py-2.5 text-sm text-foreground">
                <span className="text-[10px] text-indigo-400 block uppercase font-semibold mb-0.5">AI Therapist</span>
                {aiResponse}
              </div>
            </div>
          )}
        </div>

        {/* Action Controls */}
        <div className="mt-8 flex flex-col items-center gap-4 w-full">
          {status === "idle" && (
            <button onClick={startRecording} className="btn-liquid !py-4 !px-8 rounded-full flex items-center justify-center gap-2 text-base font-semibold shadow-lg">
              <Mic className="h-5 w-5" /> Start Speaking
            </button>
          )}

          {status === "requesting" && (
            <button disabled className="btn-ghost-glass !py-4 !px-8 rounded-full flex items-center justify-center gap-2 text-base font-semibold text-muted-foreground">
              Requesting Permission...
            </button>
          )}

          {status === "listening" && (
            <button onClick={handleStop} className="btn-liquid !bg-red-500 hover:!bg-red-600 !py-4 !px-8 rounded-full flex items-center justify-center gap-2 text-base font-semibold shadow-lg">
              <span className="h-3 w-3 rounded-full bg-white animate-ping" /> Stop Recording
            </button>
          )}

          {(status === "speaking" || status === "paused") && (
            <div className="flex items-center gap-3">
              {status === "speaking" ? (
                <button onClick={handlePause} className="btn-ghost-glass !py-2.5 !px-5 rounded-full text-sm font-medium flex items-center gap-1.5 text-foreground hover:bg-white/10">
                  Pause Speech
                </button>
              ) : (
                <button onClick={handleResume} className="btn-liquid !py-2.5 !px-5 rounded-full text-sm font-medium flex items-center gap-1.5">
                  Resume Speech
                </button>
              )}
              <button onClick={handleStop} className="btn-ghost-glass !py-2.5 !px-5 rounded-full text-sm font-medium flex items-center gap-1.5 text-red-400 border-red-500/25 hover:bg-red-500/10">
                Stop
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* ─── LEGAL CENTER SECTION ─── */
function LegalCenterSection() {
  const cards = [
    {
      to: "/privacy-policy" as const,
      icon: <ShieldCheck className="h-7 w-7" />,
      iconBg: "from-sky-500/20 to-indigo-500/20",
      iconColor: "text-sky-400",
      glow: "hover:shadow-[0_0_40px_-8px_oklch(0.72_0.16_230/0.5)]",
      border: "hover:border-sky-500/30",
      label: "Privacy Policy",
      description: "Protecting your personal health data with privacy-first, on-device architecture.",
      badge: "Zero Cloud Storage",
    },
    {
      to: "/terms-and-conditions" as const,
      icon: <Scale className="h-7 w-7" />,
      iconBg: "from-indigo-500/20 to-purple-500/20",
      iconColor: "text-indigo-400",
      glow: "hover:shadow-[0_0_40px_-8px_oklch(0.6_0.18_285/0.5)]",
      border: "hover:border-indigo-500/30",
      label: "Terms & Conditions",
      description: "Clear usage rules, user responsibilities, and legal agreements.",
      badge: "6 Sections",
    },
    {
      to: "/medical-disclaimer" as const,
      icon: <Siren className="h-7 w-7" />,
      iconBg: "from-amber-500/20 to-red-500/20",
      iconColor: "text-amber-400",
      glow: "hover:shadow-[0_0_40px_-8px_oklch(0.72_0.13_65/0.5)]",
      border: "hover:border-amber-500/30",
      label: "Medical Disclaimer",
      description: "Important healthcare safety information every user should read.",
      badge: "Safety First",
    },
  ];

  return (
    <section className="relative py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10 aurora-bg opacity-25" />
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 50%, oklch(0.72 0.16 230 / 0.07), transparent 70%)",
        }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 glass rounded-full px-3 py-1 text-[11px] tracking-widest uppercase text-muted-foreground mb-5">
            <span className="h-1.5 w-1.5 rounded-full bg-teal animate-pulse" />
            Legal & Compliance
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold leading-tight">
            Built On{" "}
            <span className="text-gradient">Trust, Privacy</span>
            <br />
            And Safety
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto text-base leading-relaxed">
            MedRemind AI is designed with legal transparency at its core. Read our full legal documents below.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {cards.map((card) => (
            <Link
              key={card.to}
              to={card.to}
              className={`group block glass-strong rounded-3xl p-7 transition-all duration-300 hover:scale-[1.025] border border-white/10 ${card.glow} ${card.border}`}
            >
              {/* Icon */}
              <div
                className={`mb-5 h-14 w-14 rounded-2xl bg-gradient-to-br ${card.iconBg} border border-white/10 flex items-center justify-center ${card.iconColor} transition-transform duration-300 group-hover:scale-110`}
              >
                {card.icon}
              </div>

              {/* Badge */}
              <div className="mb-3">
                <span className="inline-flex items-center gap-1.5 text-[10px] tracking-widest uppercase text-muted-foreground glass rounded-full px-2.5 py-1">
                  <span className="h-1 w-1 rounded-full bg-teal" />
                  {card.badge}
                </span>
              </div>

              {/* Content */}
              <h3 className="font-display font-bold text-xl text-foreground mb-2 leading-snug">
                {card.label}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                {card.description}
              </p>

              {/* CTA */}
              <div className={`flex items-center gap-1.5 text-sm font-medium ${card.iconColor} transition-all duration-200 group-hover:gap-2.5`}>
                Read full document
                <ExternalLink className="h-3.5 w-3.5" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
