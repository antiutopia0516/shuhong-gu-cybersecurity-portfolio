import type { Metadata } from "next";
import { Download, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { SectionHeader } from "@/components/SectionHeader";
import { profile } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Shuhong Gu for SOC Analyst, cybersecurity intern, security operations, junior analyst, and IT support opportunities."
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-5xl px-5 py-16 lg:px-8">
      <SectionHeader
        eyebrow="Contact"
        title="Available for SOC, cybersecurity, and IT support opportunities"
        description="For recruiter screens, internship opportunities, analyst roles, or technical support positions, use the contact options below."
      />
      <div className="rounded border border-line bg-panel/82 p-6 shadow-glow signal-line md:p-8">
        <div className="grid gap-4 md:grid-cols-2">
          <a href={`mailto:${profile.email}`} className="rounded border border-line bg-ink/60 p-5 transition hover:border-cyanSignal/50">
            <Mail className="mb-4 text-cyanSignal" size={24} aria-hidden="true" />
            <p className="text-sm text-slate-500">Email</p>
            <p className="mt-1 break-words font-semibold text-white">{profile.email}</p>
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="rounded border border-line bg-ink/60 p-5 transition hover:border-cyanSignal/50">
            <Linkedin className="mb-4 text-cyanSignal" size={24} aria-hidden="true" />
            <p className="text-sm text-slate-500">LinkedIn</p>
            <p className="mt-1 break-words font-semibold text-white">linkedin.com/in/shuhonggu</p>
          </a>
          <div className="rounded border border-line bg-ink/60 p-5">
            <Phone className="mb-4 text-greenSignal" size={24} aria-hidden="true" />
            <p className="text-sm text-slate-500">Phone</p>
            <p className="mt-1 font-semibold text-white">{profile.phone}</p>
          </div>
          <div className="rounded border border-line bg-ink/60 p-5">
            <MapPin className="mb-4 text-greenSignal" size={24} aria-hidden="true" />
            <p className="text-sm text-slate-500">Location</p>
            <p className="mt-1 font-semibold text-white">{profile.location}</p>
          </div>
        </div>
        <div className="mt-8 flex flex-wrap gap-3 border-t border-line pt-6">
          <ButtonLink href={profile.resumePath} download>
            <Download className="mr-2" size={17} />
            Download Resume
          </ButtonLink>
          <ButtonLink href={`mailto:${profile.email}`} variant="secondary">
            <Mail className="mr-2" size={17} />
            Email Me
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
