import { CyberHero } from "@/components/CyberHero";
import { ProgressDashboard } from "@/components/ProgressDashboard";
import { SectionHeader } from "@/components/SectionHeader";
import { SkillMarquee } from "@/components/SkillMarquee";
import { SocTerminal } from "@/components/SocTerminal";
import { TelemetryDeck } from "@/components/TelemetryDeck";
import { projects, skillGroups } from "@/data/portfolio";

export default function Home() {
  return (
    <>
      <CyberHero />
      <SkillMarquee />
      <ProgressDashboard />
      <TelemetryDeck />
      <SocTerminal />
      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <SectionHeader
          eyebrow="Portfolio Snapshot"
          title="Built around the work SOC teams actually evaluate"
          description="This portfolio emphasizes practical security operations signals: logs, identity, endpoints, networks, user support, and clear communication."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {skillGroups.slice(0, 3).map((group) => {
            const Icon = group.icon;
            return (
              <div key={group.title} className="rounded border border-line bg-panel/80 p-5">
                <Icon className="mb-4 text-cyanSignal" size={24} aria-hidden="true" />
                <h2 className="font-semibold text-white">{group.title}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-400">{group.skills.join(" / ")}</p>
              </div>
            );
          })}
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 pb-20 lg:px-8">
        <div className="rounded border border-line bg-panel/80 p-6 md:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyanSignal">Featured Work</p>
          <div className="mt-5 grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <div key={project.title} className="rounded border border-line bg-ink/50 p-5">
                <p className="text-xs text-slate-500">{project.type}</p>
                <h2 className="mt-2 text-lg font-semibold text-white">{project.title}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-400">{project.summary}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
