import {
  Activity,
  BadgeCheck,
  BookOpenCheck,
  BriefcaseBusiness,
  Contact,
  DatabaseZap,
  GraduationCap,
  Network,
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
    "Information Technology & Informatics student with hands-on experience in endpoint support, campus IT operations, network troubleshooting, and security-focused homelab work. Building practical SOC analyst skills through Splunk, Active Directory, Sysmon telemetry, detection engineering, and adversary simulation."
};

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Skills", href: "/skills" },
  { label: "Experience", href: "/experience" },
  { label: "Certifications", href: "/certifications" },
  { label: "Contact", href: "/contact" }
];

export const focusAreas = [
  "SOC alert triage",
  "Windows event analysis",
  "SIEM dashboards",
  "Active Directory security",
  "Network troubleshooting",
  "Endpoint hardening"
];

export const dashboardStats = [
  { label: "Security+ Certified", value: 100, detail: "Earned" },
  { label: "CCNA Progress", value: 42, detail: "Expected Dec 2026" },
  { label: "Homelab Maturity", value: 68, detail: "AD, Splunk, Sysmon" }
];

export const learningPath = [
  "Splunk SPL detection logic",
  "Windows Security Event IDs",
  "Kerberos and AD attack paths",
  "CCNA routing and switching foundations",
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
  }
];

export const skillGroups = [
  {
    title: "Security",
    icon: ShieldCheck,
    skills: ["Splunk", "SIEM", "Active Directory", "Windows Security", "Network Security", "GPO"]
  },
  {
    title: "Networking",
    icon: Network,
    skills: ["TCP/IP", "DNS", "DHCP", "VPN"]
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
    role: "IT Support Assistant",
    company: "Rutgers, The State University of New Jersey",
    location: "New Brunswick, NJ",
    period: "Oct 2024 - Nov 2025",
    icon: BriefcaseBusiness,
    points: [
      "Delivered first-level support for students and faculty through ServiceNow, following structured ticketing, documentation, and escalation workflows.",
      "Resolved Windows, macOS, application, DNS, DHCP, and connectivity issues in a campus environment with diverse user needs.",
      "Supported secure access workflows including campus Wi-Fi, VPN, Microsoft 365, and MFA configuration.",
      "Performed system maintenance, driver updates, OS updates, basic malware scans, and classroom technology support."
    ]
  },
  {
    role: "Freelance IT Technician",
    company: "Independent Client Support",
    location: "Remote",
    period: "Jan 2022 - Present",
    icon: Activity,
    points: [
      "Provide endpoint support for Windows and macOS systems, identifying hardware, operating system, access, and security-related issues.",
      "Troubleshoot TCP/IP, DNS, DHCP, router configuration, and wireless reliability problems for home and small-office environments.",
      "Configure small-office networks with basic firewall rules, guest isolation, and practical segmentation practices.",
      "Assist users with secure remote access using TeamViewer and AnyDesk, and recover compromised endpoints by isolating systems and restoring data from backups."
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
  },
  {
    name: "Cisco CCNA",
    status: "In Progress",
    expected: "Expected Dec 2026",
    icon: BookOpenCheck,
    focus: "Routing, switching, TCP/IP, network access, IP services, and infrastructure fundamentals."
  }
];

export const contactCards = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, icon: Contact },
  { label: "LinkedIn", value: "linkedin.com/in/shuhonggu", href: profile.linkedin, icon: GraduationCap }
];
