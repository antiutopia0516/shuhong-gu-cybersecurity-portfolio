"use client";

import { useEffect, useState } from "react";
import { TerminalSquare } from "lucide-react";

const terminalLines = [
  "analyst@corp-lab:~$ splunk search index=wineventlog EventCode=4625",
  "found 43 failed logons across 2 hosts in 10m window",
  "analyst@corp-lab:~$ correlate user=svc_backup sourcetype=XmlWinEventLog",
  "kerberos signal: unusual service ticket volume detected",
  "analyst@corp-lab:~$ review sysmon process_tree host=WIN10-CLIENT",
  "triage note: brute-force simulation contained; alert logic updated"
];

export function SocTerminal() {
  const [visible, setVisible] = useState(1);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(terminalLines.length);
      return;
    }

    const timer = window.setInterval(() => {
      setVisible((value) => (value >= terminalLines.length ? 1 : value + 1));
    }, 1450);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
      <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
        <div className="rounded border border-line bg-panel/82 p-6 signal-line">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyanSignal">SOC Command Console</p>
          <h2 className="mt-3 text-2xl font-semibold text-white md:text-3xl">Interactive lab narrative without the gimmicks</h2>
          <p className="mt-4 text-sm leading-7 text-slate-400">
            This console-style section makes the homelab feel alive: failed logons, Kerberos telemetry, Sysmon process
            review, and alert tuning. It gives recruiters a quick mental model of what Shuhong practices in the lab.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {["4625", "Sysmon", "Kerberos"].map((item) => (
              <div key={item} className="rounded border border-line bg-ink/70 p-3">
                <p className="font-mono text-lg font-semibold text-cyanSignal">{item}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.16em] text-slate-500">signal</p>
              </div>
            ))}
          </div>
        </div>
        <div className="overflow-hidden rounded border border-cyanSignal/25 bg-[#02060b] shadow-glow">
          <div className="flex items-center justify-between border-b border-cyanSignal/15 bg-cyanSignal/[0.06] px-4 py-3">
            <div className="flex items-center gap-2 text-sm font-semibold text-white">
              <TerminalSquare className="text-cyanSignal" size={18} />
              shuhong-lab terminal
            </div>
            <div className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-300/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-greenSignal/80" />
            </div>
          </div>
          <div className="min-h-80 p-5 font-mono text-sm leading-7 text-slate-300">
            {terminalLines.slice(0, visible).map((line) => {
              const command = line.includes("$");
              return (
                <p key={line} className={command ? "text-cyanSignal" : "text-slate-400"}>
                  <span className="mr-2 text-greenSignal">{command ? ">" : "::"}</span>
                  {line}
                </p>
              );
            })}
            <span className="terminal-cursor mt-3 inline-block h-5 w-2 bg-cyanSignal align-middle" />
          </div>
        </div>
      </div>
    </section>
  );
}
