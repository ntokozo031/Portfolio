export const PROFILE = {
  name: "Ntokozo Ngcobo",
  initials: "NN",
  title: "Full-Stack Software Developer",
  location: "Durban, South Africa",
  email: "ntokozongcobo010@gmail.com",
  phone: "+27 73 105 4539",
  github: "https://github.com/NTOKOZOTK",
  githubHandle: "github.com/NTOKOZOTK",
  linkedin: "https://linkedin.com/in/ntokozo-ngcobo",
  linkedinHandle: "linkedin.com/in/ntokozo-ngcobo",
  resumeUrl: "/Ntokozo_Ngcobo_CV.pdf",
  photo: "/images/profile.jpg",
  summary:
    "Versatile Full-Stack Software Developer with 3+ years of hands-on experience delivering production-ready web and mobile applications across fintech, healthcare, logistics, and government sectors. Holds a Bachelor of ICT Honours from Durban University of Technology, with strong command of modern JavaScript frameworks, mobile development, relational and NoSQL databases, and cloud platforms.",
  tagline:
    "I build production-ready web & mobile applications — from requirements to deployment.",
  availability: "Available for contract & remote engagements",
};

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const SOCIAL_LINKS = [
  { label: "GitHub", href: PROFILE.github, icon: "github" as const },
  { label: "LinkedIn", href: PROFILE.linkedin, icon: "linkedin" as const },
  { label: "Email", href: `mailto:${PROFILE.email}`, icon: "mail" as const },
];

export interface SkillGroup {
  category: string;
  skills: string[];
}

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: "Languages",
    skills: ["JavaScript", "TypeScript", "C#", "Python", "Dart", "HTML & CSS"],
  },
  {
    category: "Frontend",
    skills: ["React.js", "Flutter", "EJS", "Bootstrap", "HTML5 & CSS3"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express.js", "ASP.NET MVC", "RESTful APIs", "OAuth 2.0"],
  },
  {
    category: "Databases",
    skills: ["PostgreSQL", "Firebase Firestore", "MSSQL", "Azure Blob Storage"],
  },
  {
    category: "Cloud & Tools",
    skills: ["AWS (SES, S3, ML)", "Firebase", "Microsoft Azure", "Git / GitHub", "Render"],
  },
  {
    category: "Practices",
    skills: ["Agile / SDLC", "OOP", "Design Patterns", "RBAC", "CI/CD basics"],
  },
];

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  points: string[];
}

export const EXPERIENCE: ExperienceItem[] = [
  {
    role: "Software Developer & Lab Technician",
    company: "Durban University of Technology",
    period: "Feb 2024 – Present",
    points: [
      "Design and maintain internal software solutions supporting academic and research operations across DUT departments.",
      "Managed ICT lab environments for 100+ students, providing technical support and mentoring on full-stack development best practices.",
      "Collaborated with faculty to implement technology solutions streamlining administrative and academic workflows.",
      "Currently leading full-stack development of a Flutter/Firebase QR-based payment platform targeting South African micro-enterprises.",
    ],
  },
  {
    role: "Applied Researcher / Software Developer",
    company: "Durban University of Technology (Honours Research)",
    period: "Apr 2023 – Dec 2023",
    points: [
      "Contracted by a Government Sector Training Authority (SETA) to research and resolve document management inefficiencies.",
      "Designed and independently delivered a full-stack web portal integrated with a Microsoft Azure Data Lakehouse, significantly reducing document processing turnaround time.",
      "Managed the full project lifecycle: requirements gathering, system design, development, testing, deployment, and stakeholder handover.",
      "Stack: C#, HTML, CSS, JavaScript, Microsoft Azure Blob Storage.",
    ],
  },
];

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  tech: string[];
  featured?: boolean;
}

export const PROJECTS: ProjectItem[] = [
  {
    id: "business-management-app",
    title: "Business Management App",
    description:
      "QR-based digital payment & business management platform for micro-enterprises. Leading full frontend, backend, and cloud database architecture.",
    tech: ["Flutter", "Firebase", "Node.js", "Firestore"],
    featured: true,
  },
  {
    id: "pharmacy-management-system",
    title: "Pharmacy Management System",
    description:
      "Full-stack pharmacy operations system covering inventory, dispensing, and reporting modules for clinical workflows.",
    tech: ["React", "Node.js", "PostgreSQL", "AWS"],
    featured: true,
  },
  {
    id: "payroll-management-system",
    title: "Payroll Management System",
    description:
      "Automated payroll processing system with role-based access, a calculation engine, and audit logging for compliance.",
    tech: ["React", "Node.js", "PostgreSQL", "AWS"],
  },
  {
    id: "logistics-application",
    title: "Logistics Application",
    description:
      "End-to-end React frontend with authentication/authorisation flows and complete data management across all system processes.",
    tech: ["Node.js", "Express", "PostgreSQL", "React"],
  },
  {
    id: "event-management",
    title: "Event Management",
    description:
      "Automated email ticket notifications on booking confirmation via AWS SES, with OAuth 2.0 for secure user authentication.",
    tech: ["Node.js", "Express", "PostgreSQL", "AWS SES"],
  },
  {
    id: "research-management-platform",
    title: "Research Management Platform",
    description:
      "Role-based auth system with approval workflows and reporting modules for academic research administration.",
    tech: ["Node.js", "Express", "PostgreSQL"],
  },
  {
    id: "sports-management-system",
    title: "Sports Management System",
    description:
      "Digitised a paper-based sports admin system into a full web app, eliminating manual tracking and improving reporting accuracy.",
    tech: ["C# ASP.NET MVC", "MSSQL", "Bootstrap"],
  },
  {
    id: "gov-seta-web-portal",
    title: "Gov SETA Web Portal",
    description:
      "Document management portal integrated with Azure Data Lakehouse, reducing processing bottlenecks for a government training authority.",
    tech: ["C#", "JavaScript", "Azure Blob Storage"],
  },
];

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
}

export const EDUCATION: EducationItem[] = [
  {
    degree: "Bachelor of ICT Honours",
    institution: "Durban University of Technology",
    period: "Jan 2023 – Dec 2023",
  },
  {
    degree: "Advanced Diploma in ICT",
    institution: "Durban University of Technology",
    period: "Jan 2022 – Dec 2022",
  },
  {
    degree: "Diploma in ICT – Applications Development",
    institution: "Durban University of Technology",
    period: "Jan 2019 – Dec 2021",
  },
];

export const CERTIFICATIONS: string[] = [
  "KOENIG Solutions: DP-200 Azure Data Solution",
  "Udacity: AWS Machine Learning Foundations",
  "365 Data Science: Python Programmer Bootcamp",
  "DataCamp: Introduction to Data Science in Python",
  "Cisco: Introduction to Cybersecurity",
  "Cisco: Cybersecurity Essentials",
  "Cisco: Introduction to IoT",
  "Cisco: NDG Linux Unhatched",
  "DUT Young Leaders Academy: Leadership & Workplace Readiness",
  "Huawei: HCIA-AI V3.0",
];

export const LANGUAGES = [
  { name: "English", level: "Professional (C1)" },
  { name: "IsiZulu", level: "Native" },
];
