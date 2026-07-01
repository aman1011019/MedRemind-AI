import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/#features", label: "Features" },
  { to: "/#demo", label: "Demo" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
];

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 20);
    f();
    window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);
  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "py-2" : "py-4"}`}>
      <div className="mx-auto max-w-7xl px-4">
        <div className={`flex items-center justify-between rounded-full px-4 sm:px-6 py-3 transition-all ${scrolled ? "glass-strong" : "glass"}`}>
          <Link to="/" className="flex items-center gap-2 font-display font-bold text-lg">
            <span className="relative inline-flex h-8 w-8 items-center justify-center rounded-xl overflow-hidden bg-black/10">
              <img src="/logo.png" className="h-full w-full object-contain" alt="MEDREMIND AI" />
              <span className="absolute inset-0 rounded-xl animate-pulse-glow" />
            </span>
            <span>MEDREMIND <span className="text-gradient">AI</span></span>
          </Link>
          <nav className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
            {NAV.map((n) => (
              <a key={n.to} href={n.to} className="hover:text-foreground transition-colors">{n.label}</a>
            ))}
          </nav>
          <div className="hidden md:flex items-center gap-2">
            <a href="/MEDREMIND-AI.apk" download="MEDREMIND-AI.apk" className="btn-liquid !py-2 !px-4 !text-sm flex items-center justify-center">Download APK</a>
          </div>
          <button className="md:hidden text-foreground" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
        {open && (
          <div className="md:hidden mt-2 glass-strong rounded-3xl p-4 animate-in fade-in slide-in-from-top-4 duration-300">
            <div className="flex flex-col gap-1">
              {NAV.map((n) => (
                <a key={n.to} href={n.to} onClick={() => setOpen(false)} className="px-3 py-2 rounded-xl hover:bg-white/5">{n.label}</a>
              ))}
              <a href="/MEDREMIND-AI.apk" download="MEDREMIND-AI.apk" onClick={() => setOpen(false)} className="btn-liquid mt-2 flex items-center justify-center">Download APK</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="relative border-t border-white/10 mt-32">
      <div className="absolute inset-0 aurora-bg opacity-30 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-20">
        <div className="grid gap-14 md:grid-cols-4">
          {/* Brand column */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 font-display font-bold text-2xl">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl overflow-hidden bg-black/10 border border-white/10">
                <img src="/logo.png" className="h-full w-full object-contain" alt="MEDREMIND AI" />
              </span>
              MEDREMIND <span className="text-gradient">AI</span>
            </div>
            <p className="mt-5 max-w-sm text-base text-muted-foreground leading-relaxed">
              The intelligent healthcare companion that understands body and mind — privacy-first, on-device AI.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 glass rounded-full px-3 py-1.5 text-[11px] tracking-widest uppercase text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-teal animate-pulse" />
              Privacy-First · On-Device · Zero Cloud
            </div>
            <div className="mt-6">
              <a
                href="/MEDREMIND-AI.apk"
                download="MEDREMIND-AI.apk"
                className="btn-liquid !py-2.5 !px-5 !text-sm inline-flex items-center gap-2"
              >
                Download APK
              </a>
            </div>
          </div>

          {/* Product links */}
          <div>
            <div className="text-base font-display font-semibold mb-5 text-foreground">Product</div>
            <ul className="space-y-3 text-base text-muted-foreground">
              <li><a href="/#features" className="hover:text-foreground transition-colors hover:translate-x-0.5 inline-block">Features</a></li>
              <li><a href="/#demo" className="hover:text-foreground transition-colors hover:translate-x-0.5 inline-block">Demo</a></li>
              <li><a href="/#download" className="hover:text-foreground transition-colors hover:translate-x-0.5 inline-block">Download</a></li>
              <li><a href="/#about" className="hover:text-foreground transition-colors hover:translate-x-0.5 inline-block">About</a></li>
              <li><Link to="/faq" className="hover:text-foreground transition-colors hover:translate-x-0.5 inline-block">FAQ</Link></li>
              <li><Link to="/contact" className="hover:text-foreground transition-colors hover:translate-x-0.5 inline-block">Contact</Link></li>
            </ul>
          </div>

          {/* Legal links */}
          <div>
            <div className="text-base font-display font-semibold mb-5 text-foreground">Legal</div>
            <ul className="space-y-3 text-base text-muted-foreground">
              <li>
                <Link to="/privacy-policy" className="hover:text-sky-400 transition-colors hover:translate-x-0.5 inline-block">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-and-conditions" className="hover:text-indigo-400 transition-colors hover:translate-x-0.5 inline-block">
                  Terms &amp; Conditions
                </Link>
              </li>
              <li>
                <Link to="/medical-disclaimer" className="hover:text-amber-400 transition-colors hover:translate-x-0.5 inline-block">
                  Medical Disclaimer
                </Link>
              </li>
            </ul>
            <div className="mt-6 glass rounded-2xl p-4 text-xs text-muted-foreground/60 leading-relaxed">
              MedRemind AI is a wellness companion app and does not provide medical advice. Always consult a qualified healthcare professional.
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} MEDREMIND AI. All rights reserved.
          </div>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <Link to="/privacy-policy" className="hover:text-foreground transition-colors">Privacy</Link>
            <Link to="/terms-and-conditions" className="hover:text-foreground transition-colors">Terms</Link>
            <Link to="/medical-disclaimer" className="hover:text-foreground transition-colors">Disclaimer</Link>
            <span className="hidden md:block">Built for the future of preventive healthcare.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
