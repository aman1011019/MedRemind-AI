import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout } from "../components/legal-layout";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQS = [
  { q: "How does offline OCR work?", a: "MEDREMIND AI uses an on-device OCR model trained on medical handwriting. Your prescription image is processed locally and never uploaded." },
  { q: "Does the app require internet?", a: "Core features — OCR, reminders, AI therapist, tracking — work fully offline. Optional cloud features are explicitly opt-in." },
  { q: "Can the AI therapist replace a doctor?", a: "No. Safe Space provides emotional support, not medical diagnosis or treatment. Please consult a licensed professional for clinical care." },
  { q: "How is my data stored?", a: "All data is stored locally, encrypted on your device. There is no cloud account or remote backup." },
  { q: "How does smartwatch sync work?", a: "MEDREMIND AI connects to DA FIT-compatible smartwatches via Bluetooth and reads steps, BP, heart rate, SpO₂, calories, distance and sleep." },
  { q: "Can reports be exported?", a: "Yes — PDF, Excel and CSV exports generated on-device. Share them with your doctor at your discretion." },
  { q: "How does emotion analysis work?", a: "MEDREMIND AI analyses tone, frequency and sentiment of journal entries and chats to surface weekly mood, stress and anxiety trends — all locally." },
];

export const Route = createFileRoute("/faq")({
  head: () => ({ meta: [{ title: "FAQ | MEDREMIND AI" }, { name: "description", content: "Common questions about MEDREMIND AI." }] }),
  component: FAQPage,
});

function FAQPage() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <LegalLayout kicker="Help" title="Frequently asked questions">
      <div className="space-y-3 not-prose">
        {FAQS.map((f, i) => {
          const isOpen = open === i;
          return (
            <button key={f.q} onClick={() => setOpen(isOpen ? null : i)} className="block w-full text-left glass rounded-2xl p-5 hover:bg-white/10 transition">
              <div className="flex items-center justify-between gap-4">
                <span className="font-display font-semibold text-foreground">{f.q}</span>
                <ChevronDown className={`h-4 w-4 shrink-0 transition ${isOpen ? "rotate-180" : ""}`} />
              </div>
              {isOpen && <div className="mt-3 text-sm">{f.a}</div>}
            </button>
          );
        })}
      </div>
    </LegalLayout>
  );
}
