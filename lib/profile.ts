export type ProjectCategory = "Producto" | "Automatización" | "Aprendizaje";

const shared = {
  name: "Juan Ignacio Cuevas",
  shortName: "Juan Cuevas",
  location: "Tandil, Buenos Aires, Argentina",
  photo: "/juan-ignacio-cuevas.jpg",
  socialNetworks: [
    {
      network: "LinkedIn",
      username: "juan-ignacio-cuevas-348891284",
      url: "https://www.linkedin.com/in/juan-ignacio-cuevas-348891284",
    },
    {
      network: "GitHub",
      username: "JuanIgCuevas",
      url: "https://github.com/JuanIgCuevas",
    },
  ],
  skills: [
    "React",
    "Supabase",
    "Java",
    "Python",
    "PHP",
    "PostgreSQL",
    "MySQL",
    "SQL",
    "SCRUM",
    "Git & GitHub",
    "JIRA",
    "Asana",
    "Slack",
    "Linux",
    "Visual Studio Code",
  ],
};

export const profile = {
  ...shared,
  role: "Desarrollador Full Stack · React & Supabase",
  availability: "Abierto a oportunidades en desarrollo Full Stack",
  headline: "Construyo soluciones web de punta a punta.",
  summary:
    "Desarrollo aplicaciones e interfaces que conectan una experiencia clara con datos confiables y procesos eficientes.",
  intro:
    "Mi experiencia combina desarrollo, análisis y mejora de procesos. Me interesa entender cada problema desde adentro y construir soluciones completas con criterio técnico, orden y foco en las personas que las usan.",
  focus:
    "React, Supabase, SQL, automatización de procesos, calidad de catálogo e interfaces internas.",
  metrics: [
    { value: "2", label: "roles activos" },
    { value: "5", label: "certificaciones" },
    { value: "19+", label: "tecnologías y herramientas" },
  ],
  education: [
    {
      institution: "Universidad Nacional del Centro de la Provincia de Buenos Aires (UNICEN)",
      area: "Facultad de Ciencias Exactas",
      degree: "Ingeniería de Sistemas",
      startDate: "2020",
      endDate: "En curso",
      location: "Tandil, Buenos Aires",
    },
  ],
  timeline: [
    {
      year: "Ago. 2025 — Actualidad",
      title: "Desarrollador Full Stack · React & Supabase",
      company: "Grupo KELSOFT",
      description:
        "Integro el Equipo de Mejoras del Proyecto Catálogo. Desarrollo herramientas internas que simplifican circuitos de trabajo y automatizan tareas operativas.",
      highlights: ["Herramientas internas", "React + Supabase", "Automatización"],
    },
    {
      year: "Abr. 2025 — Actualidad",
      title: "Analista E-Commerce",
      company: "Grupo KELSOFT",
      description:
        "Reviso publicaciones, aseguro calidad y coherencia, detecto inconsistencias y propongo mejoras sobre procesos, herramientas y metodologías.",
      highlights: ["Calidad de catálogo", "Análisis", "Mejora continua"],
    },
  ],
  services: [
    {
      number: "01",
      title: "Interfaces de producto",
      text: "Construcción de experiencias claras y funcionales, traduciendo necesidades reales en componentes, flujos y mejoras accionables.",
      tags: ["React", "UI", "Experiencia de usuario"],
    },
    {
      number: "02",
      title: "Herramientas internas",
      text: "Interfaces enfocadas en reducir trabajo manual, ordenar circuitos y ayudar a los equipos a operar con mayor claridad.",
      tags: ["React", "UX interna", "Automatización"],
    },
    {
      number: "03",
      title: "Datos e integraciones",
      text: "Modelado y consulta de datos para construir soluciones confiables, trazables y conectadas con la operación real.",
      tags: ["Supabase", "SQL", "PostgreSQL"],
    },
  ],
  certificates: [
    { name: "Curso de IA para Desarrolladores", date: "Abr. 2026", issuer: "IT School · Educación IT" },
    { name: "Certificación en Python", date: "Nov. 2025", issuer: "IT School · Educación IT" },
    {
      name: "Optimización y mejora de procesos con herramientas de IA",
      date: "Ago. 2025",
      issuer: "IT School · Educación IT",
    },
    { name: "Bases de Git y GitHub", date: "May. 2024", issuer: "Desafío Latam" },
    { name: "Un día como Data Analyst", date: "May. 2024", issuer: "Desafío Latam" },
  ],
  languages: ["Español · Nativo", "Inglés · Intermedio"],
  projects: [
    {
      name: "Herramientas para Catálogo",
      category: "Automatización" as ProjectCategory,
      index: "01",
      text: "Soluciones internas para reducir trabajo manual y mejorar el circuito operativo del equipo de catálogo.",
      stack: ["React", "Supabase", "SQL"],
      note: "Proyecto profesional · detalles reservados",
    },
    {
      name: "Sistema de control de calidad",
      category: "Producto" as ProjectCategory,
      index: "02",
      text: "Criterios y flujos de revisión para detectar inconsistencias y sostener publicaciones más claras y confiables.",
      stack: ["Producto", "Análisis", "Procesos"],
      note: "Caso de trabajo · Grupo KELSOFT",
    },
    {
      name: "Laboratorio técnico personal",
      category: "Aprendizaje" as ProjectCategory,
      index: "03",
      text: "Prácticas y prototipos donde aplico Python, IA, Git y desarrollo web para consolidar nuevas habilidades.",
      stack: ["Python", "IA", "GitHub"],
      note: "Evolución continua",
    },
  ],
  faqs: [
    {
      question: "¿Qué tipo de rol estás buscando?",
      answer:
        "Busco una oportunidad full time en desarrollo Full Stack donde pueda seguir creciendo, participar en distintas capas del producto y aportar mi experiencia en análisis y mejora de procesos.",
    },
    {
      question: "¿Cuál es tu modalidad de trabajo?",
      answer:
        "Estoy abierto a propuestas remotas, híbridas o presenciales en Tandil, según el desafío y la dinámica del equipo.",
    },
    {
      question: "¿Qué aportás a un equipo?",
      answer:
        "Una mirada práctica que une operación y tecnología: puedo detectar un problema en el flujo, entender su impacto y acompañar la construcción de una solución clara.",
    },
  ],
};

export const profileEn = {
  ...shared,
  role: "Full Stack Developer · React & Supabase",
  availability: "Open to Full Stack development opportunities",
  headline: "I build end-to-end web solutions.",
  summary:
    "I develop applications and interfaces that connect a clear user experience with reliable data and efficient processes.",
  intro:
    "My experience combines development, analysis, and process improvement. I like to understand each problem from the inside and build complete solutions with technical judgment, structure, and a focus on the people who use them.",
  focus:
    "React, Supabase, SQL, process automation, catalog quality, and internal interfaces.",
  metrics: [
    { value: "2", label: "active roles" },
    { value: "5", label: "certifications" },
    { value: "19+", label: "technologies and tools" },
  ],
  education: [
    {
      institution: "National University of Central Buenos Aires (UNICEN)",
      area: "School of Exact Sciences",
      degree: "Systems Engineering",
      startDate: "2020",
      endDate: "In progress",
      location: "Tandil, Buenos Aires",
    },
  ],
  timeline: [
    {
      year: "Aug. 2025 — Present",
      title: "Full Stack Developer · React & Supabase",
      company: "Grupo KELSOFT",
      description:
        "I am part of the Catalog Improvement Team, where I build internal tools that streamline workflows and automate operational tasks.",
      highlights: ["Internal tools", "React + Supabase", "Automation"],
    },
    {
      year: "Apr. 2025 — Present",
      title: "E-Commerce Analyst",
      company: "Grupo KELSOFT",
      description:
        "I review listings, ensure quality and consistency, identify issues, and propose improvements to processes, tools, and working methods.",
      highlights: ["Catalog quality", "Analysis", "Continuous improvement"],
    },
  ],
  services: [
    {
      number: "01",
      title: "Product interfaces",
      text: "I build clear, functional experiences by turning real needs into components, flows, and actionable improvements.",
      tags: ["React", "UI", "User experience"],
    },
    {
      number: "02",
      title: "Internal tools",
      text: "Interfaces designed to reduce manual work, organize workflows, and help teams operate with greater clarity.",
      tags: ["React", "Internal UX", "Automation"],
    },
    {
      number: "03",
      title: "Data and integrations",
      text: "Data modeling and querying to build reliable, traceable solutions connected to real operational needs.",
      tags: ["Supabase", "SQL", "PostgreSQL"],
    },
  ],
  certificates: [
    { name: "AI for Developers", date: "Apr. 2026", issuer: "IT School · Educación IT" },
    { name: "Python Certification", date: "Nov. 2025", issuer: "IT School · Educación IT" },
    {
      name: "Process Optimization and Improvement with AI Tools",
      date: "Aug. 2025",
      issuer: "IT School · Educación IT",
    },
    { name: "Git and GitHub Fundamentals", date: "May 2024", issuer: "Desafío Latam" },
    { name: "A Day as a Data Analyst", date: "May 2024", issuer: "Desafío Latam" },
  ],
  languages: ["Spanish · Native", "English · Intermediate"],
  projects: [
    {
      name: "Catalog Tools",
      category: "Automatización" as ProjectCategory,
      index: "01",
      text: "Internal solutions that reduce manual work and improve the catalog team's operational workflow.",
      stack: ["React", "Supabase", "SQL"],
      note: "Professional project · confidential details",
    },
    {
      name: "Quality Control System",
      category: "Producto" as ProjectCategory,
      index: "02",
      text: "Review criteria and workflows designed to identify inconsistencies and maintain clearer, more reliable listings.",
      stack: ["Product", "Analysis", "Processes"],
      note: "Work case · Grupo KELSOFT",
    },
    {
      name: "Personal Tech Lab",
      category: "Aprendizaje" as ProjectCategory,
      index: "03",
      text: "Practice projects and prototypes where I apply Python, AI, Git, and web development to strengthen new skills.",
      stack: ["Python", "AI", "GitHub"],
      note: "Continuous evolution",
    },
  ],
  faqs: [
    {
      question: "What kind of role are you looking for?",
      answer:
        "I am looking for a full-time Full Stack development opportunity where I can keep growing, contribute across different product layers, and bring my experience in analysis and process improvement.",
    },
    {
      question: "What work arrangements are you open to?",
      answer:
        "I am open to remote, hybrid, or on-site opportunities in Tandil, depending on the challenge and the team's working dynamics.",
    },
    {
      question: "What do you bring to a team?",
      answer:
        "A practical perspective that connects operations and technology: I can identify a workflow problem, understand its impact, and help build a clear solution.",
    },
  ],
};
