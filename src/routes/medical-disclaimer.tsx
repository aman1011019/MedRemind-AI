import { createFileRoute } from "@tanstack/react-router";
import {
  Stethoscope, ScanLine, HeartHandshake, Siren, Watch, UserCheck, AlertTriangle,
} from "lucide-react";
import { LegalLayout, InfoBlock, AlertBanner, Li } from "../components/legal-layout";

export const Route = createFileRoute("/medical-disclaimer")({
  head: () => ({
    meta: [
      { title: "Medical Disclaimer | MEDREMIND AI" },
      { name: "description", content: "MEDREMIND AI is not a substitute for professional medical care. Read our full medical disclaimer." },
    ],
  }),
  component: MedicalDisclaimerPage,
});

function MedicalDisclaimerPage() {
  return (
    <LegalLayout
      kicker="Important"
      title="Medical Disclaimer | MEDREMIND AI"
      headline="Important Medical Information"
      subheading="MedRemind AI supports healthcare management but is NOT a replacement for medical professionals, licensed therapists, or clinical diagnostic tools."
      updatedDate="June 2025"
    >
      {/* Emergency banner — most prominent element */}
      <AlertBanner
        icon={<Siren className="h-6 w-6" />}
        title="Emergency Warning"
        body="Do NOT use MedRemind AI during a medical emergency. Call your local emergency services (112 / 911 / 108) immediately. The app is not designed for emergency response."
        color="red"
      />

      <AlertBanner
        icon={<AlertTriangle className="h-6 w-6" />}
        title="MedRemind AI is not a replacement for a doctor."
        body="Always consult a qualified healthcare professional for diagnosis, treatment decisions, and prescription changes."
        color="amber"
      />

      <InfoBlock number={1} title="Not A Doctor Replacement" icon={<Stethoscope className="h-5 w-5" />}>
        <p>
          MedRemind AI is a <strong className="text-foreground">wellness companion application</strong>. It is explicitly not a medical device or a physician substitute.
        </p>
        <ul className="mt-3 space-y-1.5">
          <Li>The app does not replace licensed doctors or medical practitioners</Li>
          <Li>The app does not provide medical diagnosis of any condition or disease</Li>
          <Li>Health scores and wellness indicators are not clinical assessments</Li>
          <Li>No content within MedRemind AI should be treated as medical advice</Li>
          <Li>Always consult a doctor before making any medical decisions</Li>
        </ul>
      </InfoBlock>

      <InfoBlock number={2} title="Not A Prescription Authority" icon={<ScanLine className="h-5 w-5" />}>
        <p>
          The OCR prescription scanning feature is designed to help you <strong className="text-foreground">read and organize</strong> existing prescriptions — not to create, recommend, or validate them.
        </p>
        <ul className="mt-3 space-y-1.5">
          <Li>MedRemind AI does not and cannot prescribe any medicine</Li>
          <Li>OCR-recognized medicine names and dosages must be verified against the original prescription</Li>
          <Li>Doctor instructions always take absolute priority over any app interpretation</Li>
          <Li>Never self-medicate based on app suggestions alone</Li>
          <Li>If an OCR result seems incorrect, always defer to the physical prescription document</Li>
        </ul>
      </InfoBlock>

      <InfoBlock number={3} title="Mental Health Safety" icon={<HeartHandshake className="h-5 w-5" />}>
        <p>
          The AI therapist feature provides <strong className="text-foreground">supportive emotional conversations</strong> to help you process day-to-day stress and emotional wellbeing.
        </p>
        <ul className="mt-3 space-y-1.5">
          <Li>AI therapist conversations are NOT a substitute for professional mental healthcare</Li>
          <Li>The AI is not a licensed psychologist, psychiatrist, or clinical counselor</Li>
          <Li>If you notice significant decline in your emotional or mental health, seek a licensed therapist</Li>
          <Li>Do not rely solely on the app for managing depression, anxiety disorders, or trauma</Li>
          <Li>In case of suicidal thoughts or mental health crisis, contact emergency services immediately</Li>
        </ul>
        <p className="mt-3 text-sm text-amber-400/80">
          Mental health crises require human professional intervention. Please seek help.
        </p>
      </InfoBlock>

      <InfoBlock number={4} title="Emergency Situations" icon={<Siren className="h-5 w-5" />}>
        <p>
          MedRemind AI is <strong className="text-foreground">not designed for emergency medical situations</strong>. In any life-threatening scenario:
        </p>
        <ul className="mt-3 space-y-1.5">
          <Li>Call emergency services immediately — 112 (India), 911 (USA), or your local number</Li>
          <Li>Do not attempt to use the app to manage a medical emergency</Li>
          <Li>The app has no real-time vital monitoring or emergency alert capabilities</Li>
          <Li>Do not delay seeking emergency care to consult the app</Li>
          <Li>Alert family members or caregivers and seek in-person medical attention</Li>
        </ul>
      </InfoBlock>

      <InfoBlock number={5} title="Health Metrics Accuracy" icon={<Watch className="h-5 w-5" />}>
        <p>
          Health metrics tracked via MedRemind AI depend on the accuracy of your device and smartwatch sensors. They are <strong className="text-foreground">wellness estimates</strong>, not hospital-grade measurements.
        </p>
        <ul className="mt-3 space-y-1.5">
          <Li>Heart rate readings depend on wearable sensor quality and placement</Li>
          <Li>Blood pressure monitoring is not supported directly — smartwatch values are approximate</Li>
          <Li>SpO2 (blood oxygen) values should not replace certified pulse oximeter readings</Li>
          <Li>Sleep tracking is an estimation based on motion data and user input</Li>
          <Li>Smartwatch readings depend entirely on the accuracy of the paired wearable device</Li>
          <Li>None of these metrics should be treated as hospital-grade diagnostic data</Li>
          <Li>Always consult a doctor if you notice concerning health metric trends</Li>
        </ul>
      </InfoBlock>

      <InfoBlock number={6} title="Professional Recommendation" icon={<UserCheck className="h-5 w-5" />}>
        <p>
          MedRemind AI strongly recommends working alongside qualified healthcare professionals for all health decisions.
        </p>
        <ul className="mt-3 space-y-1.5">
          <Li>Always consult a licensed doctor for treatment, diagnosis, and prescription decisions</Li>
          <Li>Always consult a licensed therapist or psychiatrist for severe mental health conditions</Li>
          <Li>Use MedRemind AI as a supplement to professional healthcare, not a replacement</Li>
          <Li>Regular medical check-ups are strongly encouraged alongside app usage</Li>
          <Li>Share your health data exports with your doctor for more informed consultations</Li>
        </ul>
        <p className="mt-4 text-sm text-muted-foreground/70">
          MedRemind AI is a wellness companion. Your health decisions should always be guided by qualified medical professionals who know your complete health history.
        </p>
      </InfoBlock>
    </LegalLayout>
  );
}
