import { createFileRoute } from "@tanstack/react-router";
import { ShieldCheck, Database, Wifi, EyeOff, UserCheck, Lock } from "lucide-react";
import { LegalLayout, InfoBlock, AlertBanner, Li } from "../components/legal-layout";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | MEDREMIND AI" },
      { name: "description", content: "How MEDREMIND AI handles your health data: locally, privately, on-device. No cloud. No tracking. No compromise." },
    ],
  }),
  component: PrivacyPolicyPage,
});

function PrivacyPolicyPage() {
  return (
    <LegalLayout
      kicker="Privacy"
      title="Privacy Policy | MEDREMIND AI"
      headline="Your Privacy Comes First"
      subheading="MedRemind AI is designed with privacy-first architecture where your health data always stays under your control — stored locally, processed on-device, never shared."
      updatedDate="June 2025"
    >
      <AlertBanner
        icon={<ShieldCheck className="h-6 w-6" />}
        title="Zero Cloud Storage Policy"
        body="Every byte of your personal health data stays on your device. We have no servers that store your information — by design."
        color="sky"
      />

      <InfoBlock number={1} title="What Data We Store" icon={<Database className="h-5 w-5" />}>
        <p>MedRemind AI stores the following health data <strong className="text-foreground">locally on your device only</strong>:</p>
        <ul className="mt-3 space-y-1.5">
          <Li>Medicine schedules and reminder configurations</Li>
          <Li>Medicine intake history and adherence logs</Li>
          <Li>Daily water intake logs and hydration history</Li>
          <Li>Sleep records and sleep quality history</Li>
          <Li>Health analytics including heart rate, SpO2, and step counts</Li>
          <Li>Emotion check-in history and mood tracking logs</Li>
          <Li>AI therapist chat conversation history</Li>
          <Li>Prescription OCR scan results and recognized medicine data</Li>
          <Li>Exported health reports (PDF, Excel, CSV files)</Li>
          <Li>Workout session logs and activity records</Li>
        </ul>
        <p className="mt-3 text-sm text-muted-foreground/70">
          All of the above is stored in encrypted local storage on your Android device. None of it leaves your device.
        </p>
      </InfoBlock>

      <InfoBlock number={2} title="Where Data Is Stored" icon={<Lock className="h-5 w-5" />}>
        <p>
          All personal health data is stored <strong className="text-foreground">exclusively on your device</strong>. There is no cloud backend, no remote database, and no sync service.
        </p>
        <ul className="mt-3 space-y-1.5">
          <Li>Data lives in encrypted Android local storage</Li>
          <Li>No cloud storage by default — ever</Li>
          <Li>No hidden servers receive your data</Li>
          <Li>No remote processing of your health information</Li>
          <Li>Uninstalling the app removes all stored data from the device</Li>
        </ul>
      </InfoBlock>

      <InfoBlock number={3} title="Offline Processing" icon={<Wifi className="h-5 w-5" />}>
        <p>
          MedRemind AI is built to work <strong className="text-foreground">completely offline</strong>. Core health features require no internet connection.
        </p>
        <ul className="mt-3 space-y-1.5">
          <Li>Prescription OCR scanning runs entirely on-device using local models</Li>
          <Li>AI emotional support conversations are processed locally</Li>
          <Li>Health reports (PDF/CSV/Excel) are generated on your device</Li>
          <Li>Medicine reminders, sleep tracking, and water logging work without internet</Li>
          <Li>No internet connection needed for any core health processing</Li>
        </ul>
      </InfoBlock>

      <InfoBlock number={4} title="What We Do NOT Collect" icon={<EyeOff className="h-5 w-5" />}>
        <p>MedRemind AI is built on what we <em>don't</em> do:</p>
        <ul className="mt-3 space-y-1.5">
          <Li>We do NOT collect unnecessary personal data</Li>
          <Li>We do NOT use third-party advertising SDKs or tracking pixels</Li>
          <Li>We do NOT require a phone number or email address</Li>
          <Li>We do NOT require a Google login or social account</Li>
          <Li>We do NOT collect biometric data for sale or sharing</Li>
          <Li>We do NOT sell your medical history to any third party</Li>
          <Li>We do NOT perform behavioral profiling on users</Li>
          <Li>We do NOT share health data with insurance companies, advertisers, or data brokers</Li>
        </ul>
      </InfoBlock>

      <InfoBlock number={5} title="User Control Over Your Data" icon={<UserCheck className="h-5 w-5" />}>
        <p>
          You have <strong className="text-foreground">complete control</strong> over every piece of data MedRemind AI stores.
        </p>
        <ul className="mt-3 space-y-1.5">
          <Li>Delete all health data permanently, anytime, from within the app</Li>
          <Li>Delete individual reports, OCR scans, or conversation history selectively</Li>
          <Li>Delete emotional health check-in history independently</Li>
          <Li>Delete medicine history and schedule data at any time</Li>
          <Li>Export all your health data as PDF, Excel, or CSV at any time</Li>
          <Li>No account deletion required — simply uninstall to remove everything</Li>
        </ul>
      </InfoBlock>

      <InfoBlock number={6} title="Changes to This Policy" icon={<ShieldCheck className="h-5 w-5" />}>
        <p>
          If we update this Privacy Policy, the updated version will be published on this page and made available within the app. We encourage you to review this policy periodically.
        </p>
        <p className="mt-2">
          Continued use of MedRemind AI after any policy changes constitutes your acceptance of the updated terms.
        </p>
        <p className="mt-4 text-sm text-muted-foreground/60">
          For privacy-related questions, you may contact us through the <a href="/contact" className="text-sky-400 hover:underline">Contact page</a>.
        </p>
      </InfoBlock>
    </LegalLayout>
  );
}
