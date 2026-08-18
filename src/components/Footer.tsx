import Link from "next/link";
import { Linkedin, Mail, ShieldCheck } from "lucide-react";
import { navItems, profile } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-line bg-ink/90">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 md:grid-cols-[1.2fr_1fr] lg:px-8">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <ShieldCheck className="text-cyanSignal" size={22} aria-hidden="true" />
            <span className="font-semibold text-white">{profile.name}</span>
          </div>
          <p className="max-w-2xl text-sm leading-6 text-slate-400">
            Built for SOC Analyst, Cybersecurity Intern, Security Operations, IT Support, Network Operations, and Junior
            Security Analyst opportunities.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a className="rounded border border-line p-2 text-slate-300 hover:border-cyanSignal/50 hover:text-cyanSignal" href={`mailto:${profile.email}`} aria-label="Email Shuhong Gu">
              <Mail size={18} />
            </a>
            <a className="rounded border border-line p-2 text-slate-300 hover:border-cyanSignal/50 hover:text-cyanSignal" href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile">
              <Linkedin size={18} />
            </a>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="rounded px-2 py-1 text-sm text-slate-400 hover:text-cyanSignal">
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
