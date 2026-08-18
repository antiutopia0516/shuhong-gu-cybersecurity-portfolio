import type { Metadata } from "next";
import { GraduationCap, ShieldQuestion, Target } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { education, profile } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "About",
  description: "About Shuhong Gu, an aspiring SOC Analyst focused on security operations, network security, and infrastructure fundamentals."
};

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
      <SectionHeader
        eyebrow="About"
        title="A Security+ certified IT student building toward SOC operations"
        description={profile.summary}
      />
      <div className="grid gap-6 lg:grid-cols-3">
        <article className="rounded border border-line bg-panel/80 p-6">
          <GraduationCap className="mb-4 text-cyanSignal" size={28} aria-hidden="true" />
          <h2 className="text-xl font-semibold text-white">Education</h2>
          <p className="mt-4 text-sm leading-6 text-slate-300">{education.school}</p>
          <p className="mt-2 text-sm leading-6 text-slate-400">
            {education.degree}, {education.minor}. {education.expected}.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {education.focus.map((item) => (
              <span key={item} className="rounded border border-line bg-white/[0.03] px-2.5 py-1 text-xs text-slate-300">
                {item}
              </span>
            ))}
          </div>
        </article>
        <article className="rounded border border-line bg-panel/80 p-6">
          <Target className="mb-4 text-greenSignal" size={28} aria-hidden="true" />
          <h2 className="text-xl font-semibold text-white">Career Goals</h2>
          <p className="mt-4 text-sm leading-6 text-slate-400">
            Shuhong is targeting SOC Analyst, Cybersecurity Intern, Security Operations, IT Support, and Junior Security
            Analyst roles where he can combine network fundamentals, log analysis, incident triage, and hands-on security
            lab experience.
          </p>
        </article>
        <article className="rounded border border-line bg-panel/80 p-6">
          <ShieldQuestion className="mb-4 text-blueSignal" size={28} aria-hidden="true" />
          <h2 className="text-xl font-semibold text-white">Why Cybersecurity</h2>
          <p className="mt-4 text-sm leading-6 text-slate-400">
            Cybersecurity connects technical problem solving with real operational impact. Shuhong is especially drawn to
            the analyst workflow: understand the environment, collect reliable telemetry, recognize suspicious behavior,
            and communicate clearly enough for teams to act.
          </p>
        </article>
      </div>
      <div className="mt-8 rounded border border-line bg-white/[0.03] p-6">
        <h2 className="text-xl font-semibold text-white">Professional Summary</h2>
        <p className="mt-4 text-sm leading-7 text-slate-400">
          Shuhong's current portfolio is built around security and network operations projects: an Active Directory and
          Splunk monitoring lab, a network segmentation and Wireshark traffic analysis lab, and a JavaFX tracker project
          focused on structured records and validation. Together, these projects show practical readiness for entry-level
          SOC, cybersecurity, network operations, and IT support roles.
        </p>
      </div>
    </section>
  );
}
