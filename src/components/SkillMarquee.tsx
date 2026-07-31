import { skillGroups } from "@/data/portfolio";

export function SkillMarquee() {
  const skills = skillGroups.flatMap((group) => group.skills).slice(0, 24);
  const track = [...skills, ...skills];

  return (
    <section className="overflow-hidden border-y border-line bg-ink/70 py-5">
      <div className="skill-marquee flex w-max gap-3">
        {track.map((skill, index) => (
          <span
            key={`${skill}-${index}`}
            className="rounded border border-cyanSignal/20 bg-cyanSignal/[0.06] px-4 py-2 font-mono text-xs uppercase tracking-[0.16em] text-cyanSignal"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
