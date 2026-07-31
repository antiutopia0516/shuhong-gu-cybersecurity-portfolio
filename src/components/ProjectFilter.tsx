"use client";

import { useMemo, useState } from "react";
import { Filter } from "lucide-react";
import { projects } from "@/data/portfolio";

const filters = ["All", "Security Lab", "Software Project"];

export function ProjectFilter() {
  const [active, setActive] = useState("All");
  const visibleProjects = useMemo(
    () => (active === "All" ? projects : projects.filter((project) => project.type === active)),
    [active]
  );

  return (
    <div>
      <div className="mb-8 flex flex-wrap items-center justify-center gap-2">
        <Filter className="text-cyanSignal" size={18} aria-hidden="true" />
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActive(filter)}
            className={`rounded border px-4 py-2 text-sm font-semibold transition ${
              active === filter
                ? "border-cyanSignal/60 bg-cyanSignal text-ink"
                : "border-line bg-white/[0.03] text-slate-300 hover:border-cyanSignal/50 hover:text-cyanSignal"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>
      <div className="grid gap-6 lg:grid-cols-2">
        {visibleProjects.map((project) => {
          const Icon = project.icon;
          return (
            <article key={project.title} className="moving-border-card rounded border border-line bg-panel/82 p-6 shadow-glow signal-line">
              <div className="mb-5 flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded border border-cyanSignal/30 bg-cyanSignal/10 text-cyanSignal">
                    <Icon size={22} aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">{project.type}</p>
                    <h2 className="mt-1 text-xl font-semibold text-white">{project.title}</h2>
                  </div>
                </div>
                <span className="rounded border border-greenSignal/30 bg-greenSignal/10 px-2.5 py-1 text-xs font-semibold text-greenSignal">
                  {project.status}
                </span>
              </div>
              <p className="text-sm leading-6 text-slate-300">{project.summary}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="rounded border border-line bg-white/[0.03] px-2.5 py-1 text-xs text-slate-300">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-6">
                <h3 className="text-sm font-semibold text-white">Technical Scope</h3>
                <ul className="mt-3 space-y-3">
                  {project.highlights.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-6 text-slate-400">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyanSignal" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-6 rounded border border-line bg-ink/60 p-4">
                <h3 className="text-sm font-semibold text-white">Recruiter-Relevant Outcomes</h3>
                <ul className="mt-3 space-y-2">
                  {project.outcomes.map((item) => (
                    <li key={item} className="text-sm leading-6 text-slate-400">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
