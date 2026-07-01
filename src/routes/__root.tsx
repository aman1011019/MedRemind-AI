import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { Toaster } from "sonner";

import appCss from "../styles.css?url";
import "@fontsource/space-grotesk/400.css";
import "@fontsource/space-grotesk/500.css";
import "@fontsource/space-grotesk/600.css";
import "@fontsource/space-grotesk/700.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import { SiteNav, SiteFooter } from "../components/site-chrome";
import { onDownload as subscribeDownload } from "../lib/download-bus";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-gradient">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist.
        </p>
        <div className="mt-6">
          <Link to="/" className="btn-liquid">Go home</Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">Something went wrong. Try refreshing.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button onClick={() => { router.invalidate(); reset(); }} className="btn-liquid">Try again</button>
          <a href="/" className="btn-ghost-glass">Go home</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "MEDREMIND AI | AI Powered Healthcare Companion" },
      {
        name: "description",
        content:
          "Your personal AI health companion combining offline prescription scanning, medicine reminders, emotional wellness, preventive healthcare and intelligent health tracking.",
      },
      { name: "author", content: "MEDREMIND AI" },
      { property: "og:title", content: "MEDREMIND AI | AI Powered Healthcare Companion" },
      {
        property: "og:description",
        content:
          "Your personal AI health companion combining offline prescription scanning, medicine reminders, emotional wellness, preventive healthcare and intelligent health tracking.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "theme-color", content: "#0EA5E9" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const [comingSoon, setComingSoon] = useState<null | "android" | "ios" | "beta">(null);
  useEffect(() => {
    const off = subscribeDownload((k) => setComingSoon(k));
    return () => { off(); };
  }, []);
  return (
    <QueryClientProvider client={queryClient}>
      <div className="relative min-h-screen">
        <Toaster position="top-center" theme="dark" richColors />
        <SiteNav />
        <Outlet />
        <SiteFooter />
        <ComingSoonModal kind={comingSoon} onClose={() => setComingSoon(null)} />
      </div>
    </QueryClientProvider>
  );
}

function ComingSoonModal({ kind, onClose }: { kind: null | "android" | "ios" | "beta"; onClose: () => void }) {
  if (!kind) return null;
  const copy = {
    android: { title: "Android APK — Coming Soon", body: "We're finalizing the signed build. Drop your email to be the first to install when it ships." },
    ios: { title: "App Store — Coming Soon", body: "TestFlight beta opens shortly. Join the list to receive your invite." },
    beta: { title: "Join Beta Testing", body: "Get early access to MEDREMIND AI and help shape the future of preventive healthcare." },
  }[kind];
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-in fade-in duration-300" style={{ background: "oklch(0 0 0 / 0.7)", backdropFilter: "blur(8px)" }} onClick={onClose}>
      <div className="glass-strong relative max-w-md w-full rounded-3xl p-8 animate-in zoom-in-95 duration-300" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute right-4 top-4 text-muted-foreground hover:text-foreground" aria-label="Close">✕</button>
        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl" style={{ background: "var(--gradient-primary)" }}>
          <span className="text-2xl">⚡</span>
        </div>
        <h3 className="text-2xl font-display font-bold">{copy.title}</h3>
        <p className="mt-2 text-muted-foreground">{copy.body}</p>
        <form
          className="mt-6 flex gap-2"
          onSubmit={(e) => {
            e.preventDefault();
            const emailInput = (e.currentTarget.elements.namedItem("email") as HTMLInputElement)?.value;
            if (!emailInput) return;
            const subject = encodeURIComponent("MEDREMIND AI - Notification Signup");
            const body = encodeURIComponent(`Please add me to the list for: ${kind}\nEmail: ${emailInput}`);
            window.location.href = `mailto:aks1011019@gmail.com?subject=${subject}&body=${body}`;
            onClose();
          }}
        >
          <input name="email" type="email" required placeholder="you@email.com" className="flex-1 rounded-full bg-white/5 border border-white/15 px-4 py-3 text-sm outline-none focus:border-primary" />
          <button className="btn-liquid">Notify me</button>
        </form>
      </div>
    </div>
  );
}
