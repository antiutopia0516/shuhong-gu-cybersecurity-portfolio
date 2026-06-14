import type { Metadata } from "next";
import { SectionHeader } from "@/components/SectionHeader";
import { skillGroups } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Skills",
  description: "Cybersecurity, networking, operating system, programming, and support tool skills for Shuhong Gu."
};

export default function SkillsPage() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
      <SectionHeader
        eyebrow="Skills"
        title="Technical skills mapped to security operations work"
        description="A practical mix of security monitoring, identity infrastructure, troubleshooting, programming, and support platforms."
      />
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => {
          const Icon = group.icon;
          return (
            <article key={group.title} className="rounded border border-line bg-panel/80 p-6 signal-line">
              <Icon className="mb-5 text-cyanSignal" size={28} aria-hidden="true" />
              <h2 className="text-xl font-semibold text-white">{group.title}</h2>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span key={skill} className="rounded border border-line bg-white/[0.03] px-3 py-2 text-sm text-slate-300">
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
