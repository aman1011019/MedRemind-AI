import { createFileRoute } from "@tanstack/react-router";
import {
  Scale, Target, ScanLine, Pill, Brain, Activity, Watch, FileBarChart,
  Lock, ShieldOff, AlertTriangle, KeyRound, Code2, RefreshCw, Ban, Mail,
} from "lucide-react";
import { LegalLayout, InfoBlock, AlertBanner, Li } from "../components/legal-layout";

export const Route = createFileRoute("/terms-and-conditions")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions | MEDREMIND AI" },
      {
        name: "description",
        content:
          "Read the full Terms & Conditions for MEDREMIND AI. Understand your rights, responsibilities, and limitations when using our healthcare assistance platform.",
      },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <LegalLayout
      kicker="Legal Agreement"
      title="Terms & Conditions | MEDREMIND AI"
      headline="Terms & Conditions"
      subheading="Please read these terms carefully before using MedRemind AI and its healthcare assistance features. By using the app, you agree to be bound by all the conditions described below."
      updatedDate="June 2025"
    >
      {/* Top notice */}
      <AlertBanner
        icon={<Scale className="h-6 w-6" />}
        title="Agreement Notice"
        body="By downloading, installing, or using MedRemind AI, you confirm that you have read, understood, and agreed to these Terms & Conditions in their entirety. If you do not agree, please discontinue use immediately."
        color="sky"
      />

      {/* ── 1. Acceptance of Terms ── */}
      <InfoBlock number={1} title="Acceptance Of Terms" icon={<Scale className="h-5 w-5" />}>
        <p>
          By downloading, installing, or using MedRemind AI in any capacity, you confirm that you have read,
          understood, and agree to comply with all the terms described on this page.
        </p>
        <ul className="mt-3 space-y-1.5">
          <Li>Acceptance is effective from the moment you first launch the application</Li>
          <Li>These terms apply to all users regardless of device, region, or usage frequency</Li>
          <Li>If you disagree with any condition on this page, discontinue usage immediately</Li>
          <Li>Continued use after any policy update constitutes acceptance of the revised terms</Li>
          <Li>These terms supersede any prior agreement or verbal understanding</Li>
        </ul>
      </InfoBlock>

      {/* ── 2. Application Purpose ── */}
      <InfoBlock number={2} title="Purpose Of The Application" icon={<Target className="h-5 w-5" />}>
        <p>
          MedRemind AI is built as a <strong className="text-foreground">healthcare assistance platform</strong> designed
          to help users manage their medicine schedules, track wellness, monitor emotional health, and
          organize preventive healthcare habits.
        </p>
        <ul className="mt-3 space-y-1.5">
          <Li>The application is designed for <strong className="text-foreground">assistance and wellness organization only</strong></Li>
          <Li>It is NOT a hospital system or clinical management platform</Li>
          <Li>It is NOT a replacement for a licensed doctor, physician, or medical professional</Li>
          <Li>It is NOT a substitute for professional medical diagnosis or treatment</Li>
          <Li>It is a digital companion that supports, not replaces, professional healthcare</Li>
        </ul>
      </InfoBlock>

      {/* ── 3. Prescription OCR ── */}
      <InfoBlock number={3} title="Prescription Scanning Responsibility" icon={<ScanLine className="h-5 w-5" />}>
        <p>
          MedRemind AI includes an <strong className="text-foreground">on-device prescription OCR system</strong> that
          helps users interpret handwritten or printed prescriptions using local machine learning models.
        </p>
        <ul className="mt-3 space-y-1.5">
          <Li>OCR results may vary depending on handwriting quality, image clarity, and prescription structure</Li>
          <Li>Users must manually verify all medicine names, dosages, and schedules before taking any medication</Li>
          <Li>Doctor instructions always take absolute priority over any OCR-generated interpretation</Li>
          <Li>MedRemind AI is <strong className="text-foreground">NOT responsible</strong> for incorrect medicine usage arising from unverified OCR results</Li>
          <Li>Always cross-reference OCR output against the original physical prescription document</Li>
          <Li>Poor image quality, unusual handwriting, or non-standard prescription formats may reduce accuracy</Li>
        </ul>
      </InfoBlock>

      {/* ── 4. Medication Responsibility ── */}
      <InfoBlock number={4} title="Medication Responsibility" icon={<Pill className="h-5 w-5" />}>
        <p>
          Users remain <strong className="text-foreground">fully and solely responsible</strong> for all medication
          decisions. MedRemind AI helps you organize — it does not advise or prescribe.
        </p>
        <ul className="mt-3 space-y-1.5">
          <Li>Confirming the correct medicine name before consumption</Li>
          <Li>Verifying the exact dosage as prescribed by your doctor</Li>
          <Li>Confirming consumption timing and meal-relation instructions</Li>
          <Li>Following the prescribed duration of the medication course</Li>
          <Li>Understanding food restrictions and drug interaction warnings</Li>
          <Li>Adhering to all instructions written on the original prescription</Li>
        </ul>
        <p className="mt-3 text-sm text-amber-400/80">
          The application only helps organize and remind. It does NOT prescribe, recommend, or adjust any
          medication regimen under any circumstance.
        </p>
      </InfoBlock>

      {/* ── 5. AI Therapist ── */}
      <InfoBlock number={5} title="Emotional Support AI Usage" icon={<Brain className="h-5 w-5" />}>
        <p>
          MedRemind AI includes a <strong className="text-foreground">Safe Space AI conversation system</strong> that
          provides emotional support and wellness conversations powered entirely by on-device AI.
        </p>
        <ul className="mt-3 space-y-1.5">
          <Li>The AI therapist is <strong className="text-foreground">NOT a licensed psychologist, psychiatrist, or counselor</strong></Li>
          <Li>Conversations are for personal wellness, reflection, and emotional support only</Li>
          <Li>AI conversations do not constitute professional medical treatment or psychiatric care</Li>
          <Li>The AI system should not replace licensed therapy for serious mental health conditions</Li>
          <Li>For severe emotional distress, crisis situations, or suicidal thoughts — contact licensed professionals immediately</Li>
          <Li>Conversation history is stored locally on-device only and is never transmitted</Li>
        </ul>
        <p className="mt-3 text-sm text-amber-400/80">
          If you are experiencing a mental health emergency, please call your local crisis helpline or emergency services immediately. Do NOT rely on the app in crisis situations.
        </p>
      </InfoBlock>

      {/* ── 6. Health Tracking ── */}
      <InfoBlock number={6} title="Health Monitoring Limitations" icon={<Activity className="h-5 w-5" />}>
        <p>
          MedRemind AI provides <strong className="text-foreground">wellness tracking and health monitoring tools</strong> including
          a range of metrics. These are supportive estimates — not clinical measurements.
        </p>
        <ul className="mt-3 space-y-1.5">
          <Li>Sleep duration and quality tracking</Li>
          <Li>Daily water intake logging and hydration goals</Li>
          <Li>Step count and walking distance</Li>
          <Li>Workout session tracking and activity summaries</Li>
          <Li>Food habit tracking and nutrition awareness</Li>
          <Li>Heart rate readings (via connected wearables)</Li>
          <Li>Blood pressure awareness tracking (estimation only)</Li>
          <Li>SpO2 (blood oxygen saturation) readings</Li>
          <Li>Smartwatch analytics and health score aggregation</Li>
        </ul>
        <p className="mt-3">
          All values above are <strong className="text-foreground">wellness estimates only</strong>. They should NOT be
          considered hospital-grade medical diagnosis. Always consult medical professionals for clinical decisions.
        </p>
      </InfoBlock>

      {/* ── 7. Smartwatch ── */}
      <InfoBlock number={7} title="Third Party Device Connectivity" icon={<Watch className="h-5 w-5" />}>
        <p>
          MedRemind AI may connect with third-party wearable devices and health platforms to enrich your
          health tracking experience.
        </p>
        <ul className="mt-3 space-y-1.5">
          <Li>DA FIT smartwatches and compatible wearable devices</Li>
          <Li>Google Fit health platform integration</Li>
          <Li>Samsung Health data connectivity</Li>
          <Li>Apple Health framework (where supported)</Li>
          <Li>Other Bluetooth health monitoring wearables</Li>
        </ul>
        <p className="mt-3">
          The <strong className="text-foreground">accuracy of all health readings depends entirely on the quality and
          calibration of third-party device sensors</strong>. MedRemind AI is not responsible for inaccurate,
          incomplete, or misleading readings generated by connected wearable devices.
        </p>
        <p className="mt-2 text-sm text-muted-foreground/70">
          Always refer to manufacturer specifications for the accuracy limitations of your wearable device.
        </p>
      </InfoBlock>

      {/* ── 8. Report Export ── */}
      <InfoBlock number={8} title="Health Report Usage" icon={<FileBarChart className="h-5 w-5" />}>
        <p>
          MedRemind AI enables users to generate and export comprehensive health reports in multiple formats
          including PDF, Excel, and CSV.
        </p>
        <p className="mt-2">Exported reports may include:</p>
        <ul className="mt-3 space-y-1.5">
          <Li>Medicine adherence and compliance logs</Li>
          <Li>Daily and weekly water intake summaries</Li>
          <Li>Sleep duration, quality, and trend analytics</Li>
          <Li>Mood and emotional wellness analytics</Li>
          <Li>Overall health score and wellness index</Li>
          <Li>Workout and physical activity summaries</Li>
        </ul>
        <p className="mt-3 text-sm text-amber-400/80">
          These reports are <strong className="text-foreground">informational and organizational only</strong>. They are
          not official hospital or clinical documents, and should not be used as substitutes for professional
          medical diagnosis, prescriptions, or health records.
        </p>
      </InfoBlock>

      {/* ── 9. User Privacy Responsibility ── */}
      <InfoBlock number={9} title="Personal Data Responsibility" icon={<Lock className="h-5 w-5" />}>
        <p>
          All health data collected by MedRemind AI is stored <strong className="text-foreground">locally on your device</strong>.
          This means data security is also partially a user responsibility.
        </p>
        <ul className="mt-3 space-y-1.5">
          <Li>Users are responsible for protecting physical and digital access to their device</Li>
          <Li>Enabling device lock screen, PIN, or biometric security is strongly recommended</Li>
          <Li>Uninstalling the application may permanently delete all locally stored health data</Li>
          <Li>Users should regularly export reports as backups before device changes or app removal</Li>
          <Li>MedRemind AI cannot recover deleted local data — there is no cloud backup</Li>
          <Li>Sharing your device with others may expose your health data to unintended access</Li>
        </ul>
      </InfoBlock>

      {/* ── 10. Prohibited Use ── */}
      <InfoBlock number={10} title="Restricted Usage" icon={<ShieldOff className="h-5 w-5" />}>
        <p>
          The following uses of MedRemind AI are <strong className="text-foreground">strictly prohibited</strong> and
          may result in legal action:
        </p>
        <ul className="mt-3 space-y-1.5">
          <Li>Reverse engineering, decompiling, or disassembling any part of the application</Li>
          <Li>Modifying or altering source code, assets, or binary files without authorization</Li>
          <Li>Copying, cloning, or reproducing proprietary UI design, branding, or product architecture</Li>
          <Li>Using the application for any unlawful, harmful, or malicious purpose</Li>
          <Li>Redistributing modified or unmodified versions of the app without explicit written permission</Li>
          <Li>Abusing or exploiting any backend or API service connected to the application</Li>
          <Li>Entering false or fabricated health data with malicious intent</Li>
          <Li>Creating unauthorized commercial versions, white-labels, or derivatives</Li>
          <Li>Misrepresenting MedRemind AI as a clinical or hospital-grade system</Li>
        </ul>
        <p className="mt-3 text-sm text-red-400/80">
          Violations of these restrictions may result in immediate termination of access and potential legal proceedings.
        </p>
      </InfoBlock>

      {/* ── 11. Liability ── */}
      <AlertBanner
        icon={<AlertTriangle className="h-6 w-6" />}
        title="Limitation Of Liability"
        body="MedRemind AI and its developers are not liable for harm resulting from user negligence, misuse of app features, incorrect medication decisions, or reliance on health estimates for clinical purposes."
        color="amber"
      />

      <InfoBlock number={11} title="Liability Disclaimer" icon={<AlertTriangle className="h-5 w-5" />}>
        <p>
          MedRemind AI and its developers <strong className="text-foreground">shall not be held responsible</strong> for
          any health consequences arising from the following situations:
        </p>
        <ul className="mt-3 space-y-1.5">
          <Li>Incorrect medicine intake caused by user negligence or failure to verify OCR results</Li>
          <Li>Ignoring doctor instructions and relying on app suggestions instead</Li>
          <Li>Incorrect OCR interpretation due to poor prescription image quality</Li>
          <Li>Missed notifications or reminders caused by device battery, Do Not Disturb, or system settings</Li>
          <Li>Incorrect smartwatch or wearable device sensor readings beyond our control</Li>
          <Li>Health issues caused by misuse of app health monitoring features</Li>
          <Li>Data loss due to device failure, app uninstall, or OS updates</Li>
          <Li>Decisions made by users based on health score estimates rather than clinical assessment</Li>
        </ul>
        <p className="mt-3">
          Users remain <strong className="text-foreground">fully responsible</strong> for all their personal healthcare
          decisions. The app is a tool, not an authority.
        </p>
      </InfoBlock>

      {/* ── 12. Account & Access ── */}
      <InfoBlock number={12} title="No Account Requirement" icon={<KeyRound className="h-5 w-5" />}>
        <p>
          MedRemind AI operates on a <strong className="text-foreground">zero-account, privacy-first model</strong>.
          No personal identity verification is required to use the application.
        </p>
        <ul className="mt-3 space-y-1.5">
          <Li>No Google login or OAuth authentication required</Li>
          <Li>No phone number registration or SMS verification</Li>
          <Li>No email address collection or account creation</Li>
          <Li>No username or password system</Li>
          <Li>All user data remains exclusively local to the device</Li>
          <Li>Users are responsible for maintaining their own device access security</Li>
          <Li>If your device is accessed by others, your health data may be visible to them</Li>
        </ul>
      </InfoBlock>

      {/* ── 13. Intellectual Property ── */}
      <InfoBlock number={13} title="Intellectual Property Rights" icon={<Code2 className="h-5 w-5" />}>
        <p>
          All components of MedRemind AI are protected as <strong className="text-foreground">intellectual property</strong>.
          Unauthorized reproduction or use is strictly prohibited.
        </p>
        <ul className="mt-3 space-y-1.5">
          <Li>All software code, algorithms, and AI models are proprietary and protected</Li>
          <Li>All UI design, user experience flows, and visual branding are protected intellectual property</Li>
          <Li>The MedRemind AI name, logo, and brand identity may not be replicated</Li>
          <Li>Product architecture, feature design, and innovation concepts are original works</Li>
          <Li>Unauthorized copying, duplication, or imitation is prohibited under applicable IP laws</Li>
          <Li>Commercial reproduction or resale of any component is strictly forbidden</Li>
          <Li>Source code theft or unauthorized access to proprietary assets is a legal offense</Li>
        </ul>
      </InfoBlock>

      {/* ── 14. Updates ── */}
      <InfoBlock number={14} title="Application Updates" icon={<RefreshCw className="h-5 w-5" />}>
        <p>
          MedRemind AI is continuously improved. The application may receive updates that enhance existing
          features or introduce new capabilities.
        </p>
        <p className="mt-2">Updates may include improvements to:</p>
        <ul className="mt-3 space-y-1.5">
          <Li>Prescription OCR accuracy and recognition models</Li>
          <Li>Health analytics engine and scoring algorithms</Li>
          <Li>Voice AI features and conversational capabilities</Li>
          <Li>Emotional AI therapist conversation quality</Li>
          <Li>Bug fixes and stability improvements</Li>
          <Li>Security patches and data protection enhancements</Li>
          <Li>New health tracking integrations and wearable support</Li>
        </ul>
        <p className="mt-3">
          Users are strongly encouraged to keep the application updated to the latest version to benefit from
          improvements and security patches. Older versions may have reduced functionality.
        </p>
      </InfoBlock>

      {/* ── 15. Termination ── */}
      <InfoBlock number={15} title="Termination Rights" icon={<Ban className="h-5 w-5" />}>
        <p>
          MedRemind AI reserves the right to restrict or terminate access to connected services or features
          under specific circumstances.
        </p>
        <ul className="mt-3 space-y-1.5">
          <Li>Users who violate these Terms & Conditions may lose access to connected backend services</Li>
          <Li>Illegal or malicious use of the application may result in immediate termination of permissions</Li>
          <Li>Attempts to reverse engineer, clone, or abuse the platform will be subject to legal action</Li>
          <Li>MedRemind AI reserves the right to discontinue any feature at any time for any reason</Li>
          <Li>Termination does not affect locally stored user data, which remains on the user's device</Li>
        </ul>
      </InfoBlock>

      {/* ── 16. Contact ── */}
      <InfoBlock number={16} title="Contact Information" icon={<Mail className="h-5 w-5" />}>
        <p>
          For legal questions, product inquiries, support requests, or any concerns regarding these Terms &
          Conditions, please reach out through the following official contact:
        </p>
        <div className="mt-5 glass rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center gap-4">
          <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-sky-500/20 to-indigo-500/20 border border-white/10 flex items-center justify-center text-sky-400 shrink-0">
            <Mail className="h-5 w-5" />
          </div>
          <div>
            <div className="text-xs text-muted-foreground uppercase tracking-widest mb-1">Official Contact</div>
            <a
              href="mailto:aks1011019@gmail.com"
              className="text-lg font-display font-semibold text-sky-400 hover:text-sky-300 transition-colors hover:underline underline-offset-4"
            >
              aks1011019@gmail.com
            </a>
            <p className="text-sm text-muted-foreground mt-1">
              We aim to respond to all legal and support inquiries within 48–72 business hours.
            </p>
          </div>
        </div>
        <p className="mt-4 text-sm text-muted-foreground/70">
          You can also reach us through the{" "}
          <a href="/contact" className="text-sky-400 hover:underline underline-offset-2">
            Contact page
          </a>{" "}
          on this website.
        </p>
      </InfoBlock>
    </LegalLayout>
  );
}
