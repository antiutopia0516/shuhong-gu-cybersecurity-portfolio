import { Activity, AlertTriangle, Eye, LockKeyhole, ShieldCheck, Zap } from "lucide-react";

const signals = [
  { label: "Failed logon burst", value: "43", icon: AlertTriangle, tone: "text-yellow-300" },
  { label: "Sysmon event stream", value: "live", icon: Activity, tone: "text-greenSignal" },
  { label: "Kerberos review", value: "TGS", icon: LockKeyhole, tone: "text-blueSignal" },
  { label: "Detection rules", value: "SPL", icon: Eye, tone: "text-cyanSignal" }
];

export function TelemetryDeck() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
      <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyanSignal">Detection Lab Telemetry</p>
          <h2 className="mt-3 text-2xl font-semibold text-white md:text-3xl">A dashboard that feels like security work</h2>
        </div>
        <p className="max-w-2xl text-sm leading-6 text-slate-400">
          Lightweight animated cards add motion and context while keeping the site professional for SOC managers and recruiters.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {signals.map((signal, index) => {
          const Icon = signal.icon;
          return (
            <div key={signal.label} className="telemetry-card rounded border border-line bg-panel/82 p-5" style={{ animationDelay: `${index * 120}ms` }}>
              <div className="mb-5 flex items-center justify-between">
                <span className={`grid h-10 w-10 place-items-center rounded border border-line bg-ink/70 ${signal.tone}`}>
                  <Icon size={20} aria-hidden="true" />
                </span>
                <Zap className="text-slate-700" size={17} />
              </div>
              <p className="font-mono text-3xl font-semibold text-white">{signal.value}</p>
              <p className="mt-2 text-sm text-slate-400">{signal.label}</p>
            </div>
          );
        })}
      </div>
      <div className="mt-4 rounded border border-greenSignal/20 bg-greenSignal/[0.05] p-4 text-sm text-slate-300">
        <ShieldCheck className="mr-2 inline text-greenSignal" size={16} />
        Recruiter signal: the site now shows monitoring, investigation, and hardening as a visual workflow instead of static resume text.
      </div>
    </section>
  );
}
