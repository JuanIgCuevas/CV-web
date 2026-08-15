export type ProjectCategory = "Producto" | "Automatización" | "Aprendizaje";

export const profile = {
  name: "Juan Ignacio Cuevas",
  shortName: "Juan Cuevas",
  role: "Analista E-Commerce & Desarrollador Full Stack",
  availability: "Disponible para oportunidades full time",
  location: "Tandil, Buenos Aires, Argentina",
  photo: "/juan-ignacio-cuevas.jpg",
  headline: "Conecto producto, datos y desarrollo.",
  summary:
    "Transformo tareas repetitivas y problemas operativos en herramientas claras, medibles y fáciles de usar.",
  intro:
    "Trabajo en la intersección entre operaciones e-commerce y desarrollo. Entiendo el problema desde adentro y construyo soluciones con criterio técnico, orden y foco en las personas que las usan.",
  focus:
    "React, Supabase, SQL, automatización de procesos, calidad de catálogo e interfaces internas.",
  contact: "ig.juancuevas@gmail.com",
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
      title: "Producto e-commerce",
      text: "Análisis de publicaciones y flujos para detectar errores, elevar la calidad y convertir hallazgos en mejoras accionables.",
      tags: ["Catálogo", "Calidad", "Procesos"],
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
      stack: ["E-Commerce", "Análisis", "Procesos"],
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
        "Busco una oportunidad full time donde pueda combinar desarrollo, análisis y mejora de procesos, especialmente en equipos de producto, e-commerce o herramientas internas.",
    },
    {
      question: "¿Cuál es tu modalidad de trabajo?",
      answer:
        "Estoy abierto a propuestas remotas, híbridas o presenciales en Tandil y alrededores, según el desafío y la dinámica del equipo.",
    },
    {
      question: "¿Qué aportás a un equipo?",
      answer:
        "Una mirada práctica que une operación y tecnología: puedo detectar un problema en el flujo, entender su impacto y acompañar la construcción de una solución clara.",
    },
  ],
};
