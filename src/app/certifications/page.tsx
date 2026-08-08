import type { Metadata } from "next";
import { SectionHeader } from "@/components/SectionHeader";
import { certifications } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Certifications",
  description: "Certification roadmap for Shuhong Gu, including CompTIA Security+ and Cisco CCNA."
};

export default function CertificationsPage() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
      <SectionHeader
        eyebrow="Certifications"
        title="Credential path aligned with SOC and network fundamentals"
        description="Security+ validates core security foundations, while CCNA preparation continues to build the networking knowledge needed for alert triage, endpoint analysis, and infrastructure troubleshooting."
      />
      <div className="grid gap-6 md:grid-cols-2">
        {certifications.map((cert) => {
          const Icon = cert.icon;
          return (
            <article key={cert.name} className="rounded border border-line bg-panel/82 p-6 signal-line">
              <div className="flex items-start justify-between gap-4">
                <span className="grid h-12 w-12 place-items-center rounded border border-cyanSignal/30 bg-cyanSignal/10 text-cyanSignal">
                  <Icon size={24} aria-hidden="true" />
                </span>
                <span className="rounded border border-greenSignal/30 bg-greenSignal/10 px-3 py-1 text-xs font-semibold text-greenSignal">
                  {cert.status}
                </span>
              </div>
              <h2 className="mt-5 text-2xl font-semibold text-white">{cert.name}</h2>
              <p className="mt-2 text-sm font-semibold text-cyanSignal">{cert.expected}</p>
              <p className="mt-4 text-sm leading-6 text-slate-400">{cert.focus}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
