import {
  BadgeCheck,
  Contact,
  DatabaseZap,
  GraduationCap,
  Network,
  Route,
  Radar,
  ServerCog,
  ShieldCheck,
  TerminalSquare,
  Wrench
} from "lucide-react";

export const profile = {
  name: "Shuhong Gu",
  role: "Aspiring SOC Analyst | IT Support & Security Operations",
  location: "Plano, TX",
  email: "ShuhongG0516@gmail.com",
  phone: "(469) 367-8300",
  linkedin: "https://www.linkedin.com/in/shuhonggu/",
  resumePath: "/resume.pdf",
  summary:
    "Information Technology & Informatics student with a Computer Science minor and CompTIA Security+ certification. Seeking entry-level opportunities in IT support, cybersecurity, SOC, and network operations with hands-on project experience in Splunk, Active Directory, Sysmon, traffic analysis, and network security fundamentals."
};

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Skills", href: "/skills" },
  { label: "Lab Experience", href: "/experience" },
  { label: "Certifications", href: "/certifications" },
  { label: "Contact", href: "/contact" }
];

export const focusAreas = [
  "SOC alert triage",
  "Windows event analysis",
  "SIEM dashboards",
  "Active Directory security",
  "Network traffic analysis",
  "Firewall and ACL controls"
];

export const dashboardStats = [
  { label: "Security+ Certified", value: 100, detail: "Earned" },
  { label: "Network Lab Coverage", value: 76, detail: "VLAN, ACL, NAT, DNS" },
  { label: "Homelab Maturity", value: 68, detail: "AD, Splunk, Sysmon" }
];

export const learningPath = [
  "Splunk SPL detection logic",
  "Windows Security Event IDs",
  "Kerberos and AD attack paths",
  "Wireshark packet analysis",
  "VLAN, routing, DHCP, DNS, and NAT",
  "Security+ certified security foundations"
];

export const projects = [
  {
    title: "Enterprise Security Monitoring & Active Directory Lab",
    type: "Security Lab",
    status: "Active Homelab",
    icon: Radar,
    tags: ["Splunk", "Active Directory", "Sysmon", "Hydra", "Kerberoasting", "GPO"],
    summary:
      "A virtual enterprise lab designed to practice SOC workflows from telemetry collection through detection, alerting, and domain hardening.",
    highlights: [
      "Deployed a simulated corporate domain using Windows Server 2022, Active Directory, VirtualBox, and Kali Linux.",
      "Integrated Splunk SIEM with Windows Security, System, and Sysmon logs for host-level monitoring and investigation.",
      "Generated realistic adversary telemetry through Hydra brute-force testing and Kerberoasting attack simulation.",
      "Built SPL dashboards and alert logic to identify authentication anomalies, unauthorized access attempts, and attack indicators.",
      "Applied Group Policy hardening to enforce password complexity and reduce unnecessary administrative exposure."
    ],
    outcomes: [
      "Practiced the full SOC loop: log source onboarding, event normalization, dashboarding, alert logic, and response review.",
      "Strengthened understanding of Windows Event IDs, AD authentication flows, and detection engineering tradeoffs.",
      "Created a repeatable lab environment for testing detections against controlled attack activity."
    ]
  },
  {
    title: "Job Application Tracker",
    type: "Software Project",
    status: "Completed",
    icon: DatabaseZap,
    tags: ["Java", "JavaFX", "MVC", "CSV Storage", "Validation", "Dashboard"],
    summary:
      "A JavaFX desktop application for structured application tracking, designed with maintainable MVC architecture and data integrity controls.",
    highlights: [
      "Built a desktop workflow in Java and JavaFX using MVC separation for cleaner state management.",
      "Implemented CSV-based persistent storage for durable local records without database overhead.",
      "Added input validation and error handling to prevent malformed records and protect data quality.",
      "Created administrative record management and filtering features similar to operational monitoring views."
    ],
    outcomes: [
      "Demonstrated software engineering discipline, user-centered workflow design, and practical data handling.",
      "Built a foundation for dashboard-style interfaces useful in security operations and IT service workflows."
    ]
  },
  {
    title: "Network Security & Traffic Analysis Lab",
    type: "Security Lab",
    status: "Completed Lab",
    icon: Route,
    tags: ["VLANs", "Routing", "DHCP", "DNS", "NAT", "ACLs", "Wireshark"],
    summary:
      "A segmented network security lab focused on traffic visibility, access-control enforcement, and root-cause troubleshooting.",
    highlights: [
      "Designed a segmented network environment with multiple VLANs, routing, DHCP, DNS, NAT, and access-control policies.",
      "Configured firewall and ACL rules to restrict inter-VLAN communication and enforce least-privilege network access.",
      "Captured and analyzed TCP/IP, DNS, ICMP, and HTTP/S traffic using Wireshark to identify normal and anomalous communication patterns.",
      "Troubleshot simulated connectivity, DNS resolution, and access-control failures using packet captures and command-line network utilities.",
      "Documented network topology, security controls, and root-cause analysis for each troubleshooting scenario."
    ],
    outcomes: [
      "Strengthened practical understanding of network segmentation, traffic behavior, and security policy validation.",
      "Practiced packet-level troubleshooting workflows relevant to SOC, NOC, IT support, and network operations teams.",
      "Built documentation habits around topology, control intent, observed traffic, and incident-style root-cause findings."
    ]
  }
];

export const skillGroups = [
  {
    title: "Security",
    icon: ShieldCheck,
    skills: ["Splunk", "SIEM", "Active Directory", "Windows Security", "Network Security", "GPO", "Wireshark"]
  },
  {
    title: "Networking",
    icon: Network,
    skills: ["TCP/IP", "DNS", "DHCP", "VPN", "VLANs", "NAT", "ACLs"]
  },
  {
    title: "Operating Systems",
    icon: ServerCog,
    skills: ["Windows", "macOS", "Linux"]
  },
  {
    title: "Programming",
    icon: TerminalSquare,
    skills: ["Python", "Java", "SQL", "C", "C++", "JavaScript", "HTML/CSS"]
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: ["ServiceNow", "Jira", "TeamViewer", "AnyDesk", "Microsoft 365"]
  }
];

export const experience = [
  {
    role: "Enterprise Security Monitoring & Active Directory Lab",
    company: "Independent Security Homelab",
    location: "Virtual Lab",
    period: "SIEM & Identity Security",
    icon: Radar,
    points: [
      "Built a virtualized Active Directory environment using VirtualBox, Windows Server 2022, and Kali Linux to simulate a small enterprise network.",
      "Configured Splunk to ingest Windows Security/System logs and Sysmon telemetry for centralized monitoring and event analysis.",
      "Simulated RDP/SSH brute-force attempts and Kerberoasting activity to generate realistic authentication and Kerberos-related telemetry.",
      "Created SPL searches, dashboards, and alerts for repeated authentication failures, suspicious login activity, and potential Kerberos abuse.",
      "Applied Group Policy settings to strengthen password requirements and restrict administrative privileges within the domain."
    ]
  },
  {
    role: "Network Security & Traffic Analysis Lab",
    company: "Independent Networking Lab",
    location: "Virtual Lab",
    period: "Network Security",
    icon: Route,
    points: [
      "Designed a segmented network environment with multiple VLANs, routing, DHCP, DNS, NAT, and access-control policies.",
      "Configured firewall and ACL rules to restrict inter-VLAN communication and enforce least-privilege network access.",
      "Captured and analyzed TCP/IP, DNS, ICMP, and HTTP/S traffic with Wireshark to identify expected and anomalous communication patterns.",
      "Troubleshot simulated connectivity, DNS resolution, and access-control failures using packet captures and command-line network utilities.",
      "Documented network topology, security controls, and root-cause analysis for each troubleshooting scenario."
    ]
  },
  {
    role: "Job Application Tracker",
    company: "Java Desktop Application",
    location: "Software Project",
    period: "JavaFX & MVC",
    icon: DatabaseZap,
    points: [
      "Built a JavaFX desktop application with MVC architecture, CSV-based persistent storage, input validation, and error handling.",
      "Developed administrative record management and filtering features that mirror operational dashboard workflows.",
      "Practiced maintainable application structure, state handling, and data integrity controls."
    ]
  }
];

export const education = {
  school: "Rutgers, The State University of New Jersey",
  degree: "B.S. Information Technology & Informatics",
  minor: "Minor in Computer Science",
  expected: "Expected May 2027",
  focus: ["Networking Fundamentals", "Operating Systems", "IT Infrastructure", "Security Fundamentals"]
};

export const certifications = [
  {
    name: "CompTIA Security+",
    status: "Earned",
    expected: "Certified",
    icon: BadgeCheck,
    focus: "Security concepts, threat analysis, identity, risk, architecture, and operations."
  }
];

export const contactCards = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, icon: Contact },
  { label: "LinkedIn", value: "linkedin.com/in/shuhonggu", href: profile.linkedin, icon: GraduationCap }
];
