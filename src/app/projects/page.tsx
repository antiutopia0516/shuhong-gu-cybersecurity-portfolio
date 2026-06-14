import type { Metadata } from "next";
import { ProjectFilter } from "@/components/ProjectFilter";
import { SectionHeader } from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "Projects",
  description: "Cybersecurity and software projects by Shuhong Gu, including an Active Directory and Splunk SIEM homelab."
};

export default function ProjectsPage() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
      <SectionHeader
        eyebrow="Projects"
        title="Hands-on labs with security operations relevance"
        description="The projects below are written for hiring managers evaluating analyst readiness: technical scope, operational thinking, and measurable learning outcomes."
      />
      <ProjectFilter />
    </section>
  );
}
