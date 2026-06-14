import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { profile } from "@/data/portfolio";

export const metadata: Metadata = {
  metadataBase: new URL("https://shuhong-gu.vercel.app"),
  title: {
    default: "Shuhong Gu | Cybersecurity Portfolio",
    template: "%s | Shuhong Gu"
  },
  description:
    "Cybersecurity portfolio for Shuhong Gu, an aspiring SOC Analyst with hands-on Splunk, Active Directory, Sysmon, IT support, and network troubleshooting experience.",
  keywords: [
    "Shuhong Gu",
    "SOC Analyst",
    "Cybersecurity Intern",
    "Security Operations",
    "IT Support",
    "Splunk",
    "Active Directory",
    "Junior Security Analyst"
  ],
  authors: [{ name: profile.name }],
  openGraph: {
    title: "Shuhong Gu | Cybersecurity Portfolio",
    description:
      "Aspiring SOC Analyst focused on SIEM monitoring, Active Directory security, endpoint troubleshooting, and practical detection engineering.",
    url: "https://shuhong-gu.vercel.app",
    siteName: "Shuhong Gu Cybersecurity Portfolio",
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Shuhong Gu | Cybersecurity Portfolio",
    description:
      "Cybersecurity portfolio for SOC Analyst, Security Operations, IT Support, and Junior Security Analyst roles."
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <div className="fixed inset-0 -z-10 grid-scan opacity-60" />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
