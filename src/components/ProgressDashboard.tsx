import { Activity, BookOpenCheck, Crosshair, ServerCog } from "lucide-react";
import { dashboardStats, focusAreas, learningPath } from "@/data/portfolio";

export function ProgressDashboard() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
      <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyanSignal">Readiness Dashboard</p>
          <h2 className="mt-3 text-2xl font-semibold text-white md:text-3xl">Security Operations Focus</h2>
        </div>
        <p className="max-w-2xl text-sm leading-6 text-slate-400">
          A practical snapshot of the skills and lab work currently supporting Shuhong's SOC analyst preparation.
        </p>
      </div>
      <div className="grid gap-4 lg:grid-cols-3">
        <div className="rounded border border-line bg-panel/80 p-5 signal-line">
          <div className="mb-4 flex items-center gap-2 text-white">
            <Crosshair className="text-cyanSignal" size={20} />
            <h3 className="font-semibold">Security Focus Areas</h3>
          </div>
          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
            {focusAreas.map((area) => (
              <span key={area} className="rounded border border-line bg-white/[0.03] px-3 py-2 text-sm text-slate-300">
                {area}
              </span>
            ))}
          </div>
        </div>
        <div className="rounded border border-line bg-panel/80 p-5 signal-line">
          <div className="mb-4 flex items-center gap-2 text-white">
            <BookOpenCheck className="text-greenSignal" size={20} />
            <h3 className="font-semibold">Current Learning Path</h3>
          </div>
          <div className="space-y-3">
            {learningPath.map((item) => (
              <div key={item} className="flex items-start gap-3 text-sm text-slate-300">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-greenSignal" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded border border-line bg-panel/80 p-5 signal-line">
          <div className="mb-4 flex items-center gap-2 text-white">
            <Activity className="text-blueSignal" size={20} />
            <h3 className="font-semibold">Progress Signals</h3>
          </div>
          <div className="space-y-5">
            {dashboardStats.map((stat) => (
              <div key={stat.label}>
                <div className="mb-2 flex items-center justify-between text-sm">
                  <span className="text-slate-200">{stat.label}</span>
                  <span className="text-slate-500">{stat.value}%</span>
                </div>
                <div className="h-2 rounded-full bg-slate-800">
                  <div className="h-2 rounded-full bg-gradient-to-r from-cyanSignal via-blueSignal to-greenSignal" style={{ width: `${stat.value}%` }} />
                </div>
                <p className="mt-1 text-xs text-slate-500">{stat.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-4 rounded border border-line bg-white/[0.03] p-4 text-sm text-slate-400">
        <ServerCog className="mr-2 inline text-cyanSignal" size={16} />
        Homelab activities include Active Directory deployment, Splunk log onboarding, Sysmon collection, brute-force telemetry generation, Kerberoasting simulation, SPL dashboards, and GPO hardening.
      </div>
    </section>
  );
}
