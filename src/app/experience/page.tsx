import type { Metadata } from "next";
import { SectionHeader } from "@/components/SectionHeader";
import { experience } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Experience",
  description: "IT support and freelance technician experience for Shuhong Gu, written for SOC and cybersecurity hiring teams."
};

export default function ExperiencePage() {
  return (
    <section className="mx-auto max-w-5xl px-5 py-16 lg:px-8">
      <SectionHeader
        eyebrow="Experience"
        title="Operational support experience with security relevance"
        description="Experience translating user issues, endpoint problems, network failures, and access workflows into documented, supportable outcomes."
      />
      <div className="relative space-y-6 before:absolute before:left-5 before:top-4 before:h-[calc(100%-2rem)] before:w-px before:bg-line md:before:left-7">
        {experience.map((item) => {
          const Icon = item.icon;
          return (
            <article key={`${item.company}-${item.role}`} className="relative pl-14 md:pl-20">
              <span className="absolute left-0 top-0 grid h-10 w-10 place-items-center rounded border border-cyanSignal/30 bg-cyanSignal/10 text-cyanSignal md:h-14 md:w-14">
                <Icon size={22} aria-hidden="true" />
              </span>
              <div className="rounded border border-line bg-panel/82 p-6 signal-line">
                <div className="flex flex-col justify-between gap-3 md:flex-row md:items-start">
                  <div>
                    <p className="text-sm font-semibold text-cyanSignal">{item.period}</p>
                    <h2 className="mt-2 text-xl font-semibold text-white">{item.role}</h2>
                    <p className="mt-1 text-sm text-slate-400">
                      {item.company} | {item.location}
                    </p>
                  </div>
                </div>
                <ul className="mt-5 space-y-3">
                  {item.points.map((point) => (
                    <li key={point} className="flex gap-3 text-sm leading-6 text-slate-400">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyanSignal" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
