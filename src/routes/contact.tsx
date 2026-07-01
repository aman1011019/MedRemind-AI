import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout } from "../components/legal-layout";
import { Mail, MessageSquare, Bug, Sparkles } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [{ title: "Contact | MEDREMIND AI" }, { name: "description", content: "Get in touch with the MEDREMIND AI team." }] }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <LegalLayout kicker="Get in touch" title="We'd love to hear from you">
      <div className="grid sm:grid-cols-2 gap-3 not-prose">
        {[
          { i: Mail, t: "Support", v: "aks1011019@gmail.com" },
          { i: MessageSquare, t: "Business", v: "aks1011019@gmail.com" },
          { i: Bug, t: "Bug reports", v: "aks1011019@gmail.com" },
          { i: Sparkles, t: "Beta access", v: "aks1011019@gmail.com" },
        ].map((c) => (
          <a key={c.t} href={`mailto:${c.v}`} className="glass rounded-2xl p-5 hover:bg-white/10 transition flex items-start gap-3">
            <c.i className="h-5 w-5 text-teal mt-0.5" />
            <div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">{c.t}</div>
              <div className="font-medium text-foreground">{c.v}</div>
            </div>
          </a>
        ))}
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.currentTarget);
          const name = formData.get("name");
          const email = formData.get("email");
          const message = formData.get("message");
          const subject = encodeURIComponent("MEDREMIND AI - Message from " + name);
          const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
          window.location.href = `mailto:aks1011019@gmail.com?subject=${subject}&body=${body}`;
          setSent(true);
        }}
        className="mt-8 glass-strong rounded-3xl p-6 not-prose space-y-3"
      >
        <div className="font-display font-semibold text-foreground text-lg">Send us a message</div>
        <input name="name" className="w-full rounded-xl bg-white/5 border border-white/15 px-4 py-3 text-sm outline-none focus:border-primary" placeholder="Your name" required />
        <input name="email" type="email" className="w-full rounded-xl bg-white/5 border border-white/15 px-4 py-3 text-sm outline-none focus:border-primary" placeholder="Your email" required />
        <textarea name="message" rows={4} className="w-full rounded-xl bg-white/5 border border-white/15 px-4 py-3 text-sm outline-none focus:border-primary" placeholder="Feature request, bug report, or general message…" required />
        <div className="flex items-center justify-between">
          <button className="btn-liquid">Send message</button>
          {sent && <span className="text-xs text-teal">Thanks — we'll get back to you shortly.</span>}
        </div>
      </form>
    </LegalLayout>
  );
}
