import { ArrowRight, Download, FolderKanban, Mail, ShieldCheck } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { CyberBackground } from "@/components/CyberBackground";
import { DecryptedText } from "@/components/DecryptedText";
import { profile } from "@/data/portfolio";

export function CyberHero() {
  return (
    <section className="relative overflow-hidden border-b border-line">
      <CyberBackground />
      <div className="mx-auto grid min-h-[calc(100vh-73px)] max-w-7xl items-center gap-12 px-5 py-16 md:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded border border-cyanSignal/30 bg-cyanSignal/10 px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-cyanSignal">
            <ShieldCheck size={16} />
            <DecryptedText text="SOC Analyst Candidate" />
          </div>
          <h1 className="max-w-4xl text-4xl font-semibold tracking-normal text-white md:text-6xl">
            Security operations portfolio for practical detection, support, and infrastructure work.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            I am {profile.name}, an IT and cybersecurity candidate focused on Splunk monitoring, Active Directory security,
            Windows endpoint analysis, and reliable technical support. I build labs that connect security theory to the
            daily workflows of SOC and IT operations teams.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href={profile.resumePath} download>
              <Download className="mr-2" size={17} />
              View Resume
            </ButtonLink>
            <ButtonLink href="/projects" variant="secondary">
              <FolderKanban className="mr-2" size={17} />
              View Projects
            </ButtonLink>
            <ButtonLink href="/contact" variant="secondary">
              <Mail className="mr-2" size={17} />
              Contact Me
            </ButtonLink>
          </div>
          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {["SIEM Monitoring", "Endpoint Support", "AD Security"].map((item) => (
              <div key={item} className="rounded border border-line bg-white/[0.03] px-4 py-3 text-sm text-slate-300">
                <ArrowRight className="mr-2 inline text-cyanSignal" size={15} />
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-lg">
          <div className="absolute -inset-1 rounded bg-gradient-to-r from-cyanSignal/20 via-blueSignal/10 to-greenSignal/20 blur-xl" />
          <div className="relative rounded border border-line bg-panel/90 p-5 shadow-glow signal-line">
            <div className="mb-5 flex items-center justify-between border-b border-line pb-4">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-slate-500">Analyst Console</p>
                <h2 className="mt-1 text-lg font-semibold text-white">Shuhong Gu</h2>
              </div>
              <div className="grid h-20 w-20 place-items-center rounded border border-cyanSignal/30 bg-cyanSignal/10 text-center text-xs font-semibold text-cyanSignal pulse-node">
                Headshot
                <br />
                Placeholder
              </div>
            </div>
            <div className="space-y-4">
              {[
                ["Telemetry", "Windows Event Logs, Sysmon, Splunk"],
                ["Detection", "SPL dashboards, brute-force alerts, Kerberos indicators"],
                ["Hardening", "GPO controls, password policy, admin exposure reduction"],
                ["Support", "ServiceNow, VPN, MFA, Windows/macOS troubleshooting"]
              ].map(([label, value], index) => (
                <div key={label} className="console-card rounded border border-line bg-ink/60 p-4" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="mb-2 flex items-center justify-between">
                    <span className="font-mono text-xs text-cyanSignal">0{index + 1}</span>
                    <span className="h-2 w-2 rounded-full bg-greenSignal" />
                  </div>
                  <p className="text-sm font-semibold text-white">{label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-400">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
