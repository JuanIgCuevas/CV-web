"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  BriefcaseBusiness,
  Check,
  ChevronDown,
  Code2,
  Download,
  Github,
  GraduationCap,
  Layers3,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Moon,
  RefreshCw,
  Sun,
  X,
} from "lucide-react";
import { profile, profileEn, type ProjectCategory } from "@/lib/profile";

const navHrefs = ["#perfil", "#experiencia", "#aportes", "#proyectos", "#contacto"];

const projectFilters: Array<"Todos" | ProjectCategory> = [
  "Todos",
  "Producto",
  "Automatización",
  "Aprendizaje",
];

const copy = {
  es: {
    nav: ["Perfil", "Experiencia", "Aportes", "Proyectos", "Contacto"],
    skip: "Saltar al contenido",
    home: "Ir al inicio",
    mainNav: "Navegación principal",
    mobileNav: "Navegación móvil",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    lightTheme: "Activar tema claro",
    darkTheme: "Activar tema oscuro",
    switchLanguage: "Ver portfolio en inglés",
    talk: "Hablemos",
    explore: "Explorar mi trabajo",
    download: "Descargar CV",
    portraitAlt: "Retrato de Juan Ignacio Cuevas",
    portraitRole: "Analista + Developer",
    improvement: "Mejora continua",
    asSystem: "como sistema.",
    mainAreas: "Áreas principales",
    about: "Sobre mí",
    currentFocus: "Mi foco actual:",
    journey: "Trayectoria",
    experienceTitle: "Experiencia con contexto operativo.",
    experienceText: "Roles complementarios que me permiten entender el problema, cuidar la calidad y participar en la solución.",
    contribution: "Cómo aporto",
    contributionTitle: "Tres formas de convertir fricción en avance.",
    selectedWork: "Trabajo seleccionado",
    projectsTitle: "Casos que muestran mi manera de pensar.",
    projectsText: "Una selección honesta de experiencias profesionales y espacios de aprendizaje.",
    viewGithub: "Ver GitHub",
    filterProjects: "Filtrar proyectos",
    filters: { Todos: "Todos", Producto: "Producto", Automatización: "Automatización", Aprendizaje: "Aprendizaje" },
    stack: "Stack & herramientas",
    stackTitle: "Tecnología al servicio del proceso.",
    education: "Formación",
    continuousLearning: "Formación continua",
    learningTitle: "Aprender también es parte del trabajo.",
    quickQuestions: "Preguntas rápidas",
    faqTitle: "Lo importante, sin vueltas.",
    contact: "Contacto",
    contactTitle: "¿Hay un problema interesante por resolver?",
    contactText: "Estoy abierto a conversar sobre desarrollo Full Stack, productos digitales y nuevas oportunidades.",
    sendEmail: "Enviar un correo",
    builtWith: "Construido con Next.js",
  },
  en: {
    nav: ["Profile", "Experience", "Contribution", "Projects", "Contact"],
    skip: "Skip to content",
    home: "Go to the top",
    mainNav: "Main navigation",
    mobileNav: "Mobile navigation",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    lightTheme: "Enable light theme",
    darkTheme: "Enable dark theme",
    switchLanguage: "View portfolio in Spanish",
    talk: "Let's talk",
    explore: "Explore my work",
    download: "Download CV (ES)",
    portraitAlt: "Portrait of Juan Ignacio Cuevas",
    portraitRole: "Analyst + Developer",
    improvement: "Continuous improvement",
    asSystem: "as a system.",
    mainAreas: "Main areas",
    about: "About me",
    currentFocus: "Current focus:",
    journey: "Career",
    experienceTitle: "Experience grounded in operations.",
    experienceText: "Complementary roles that help me understand the problem, protect quality, and contribute to the solution.",
    contribution: "How I contribute",
    contributionTitle: "Three ways to turn friction into progress.",
    selectedWork: "Selected work",
    projectsTitle: "Cases that show how I think.",
    projectsText: "An honest selection of professional experiences and learning spaces.",
    viewGithub: "View GitHub",
    filterProjects: "Filter projects",
    filters: { Todos: "All", Producto: "Product", Automatización: "Automation", Aprendizaje: "Learning" },
    stack: "Stack & tools",
    stackTitle: "Technology in service of the process.",
    education: "Education",
    continuousLearning: "Continuous learning",
    learningTitle: "Learning is part of the work.",
    quickQuestions: "Quick questions",
    faqTitle: "What matters, clearly stated.",
    contact: "Contact",
    contactTitle: "Have an interesting problem to solve?",
    contactText: "I am open to conversations about Full Stack development, digital products, and new opportunities.",
    sendEmail: "Send an email",
    builtWith: "Built with Next.js",
  },
} as const;

type Language = keyof typeof copy;

const protectedEmail = [105, 103, 46, 106, 117, 97, 110, 99, 117, 101, 118, 97, 115, 64, 103, 109, 97, 105, 108, 46, 99, 111, 109];

function openEmailClient() {
  const address = protectedEmail.map((character) => String.fromCharCode(character)).join("");
  window.location.href = `mailto:${address}`;
}

function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function SectionHeading({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <div className="section-heading">
      <p className="eyebrow"><span />{eyebrow}</p>
      <h2>{title}</h2>
      {text ? <p className="section-intro">{text}</p> : null}
    </div>
  );
}

function SocialIcon({ network }: { network: string }) {
  return network === "LinkedIn" ? <Linkedin aria-hidden="true" /> : <Github aria-hidden="true" />;
}

export default function HomePage() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [language, setLanguage] = useState<Language>("es");
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState<(typeof projectFilters)[number]>("Todos");
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    setTheme(document.documentElement.dataset.theme === "light" ? "light" : "dark");
    const savedLanguage = localStorage.getItem("language") === "en" ? "en" : "es";
    setLanguage(savedLanguage);
    document.documentElement.lang = savedLanguage;
  }, []);

  const content = language === "es" ? profile : profileEn;
  const ui = copy[language];
  const navItems = navHrefs.map((href, index) => ({ href, label: ui.nav[index] }));

  const visibleProjects = content.projects.filter(
    (project) => activeFilter === "Todos" || project.category === activeFilter,
  );

  function toggleTheme() {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.dataset.theme = next;
    localStorage.setItem("theme", next);
  }

  function toggleLanguage() {
    const next = language === "es" ? "en" : "es";
    setLanguage(next);
    document.documentElement.lang = next;
    localStorage.setItem("language", next);
  }

  return (
    <main id="main-content">
      <a className="skip-link" href="#perfil">{ui.skip}</a>

      <header className="site-header">
        <a className="brand" href="#perfil" aria-label={ui.home}>
          <span className="brand-mark">JC</span>
          <span className="brand-copy">
            <strong>{content.shortName}</strong>
            <small>Portfolio · 2026</small>
          </span>
        </a>

        <nav className="desktop-nav" aria-label={ui.mainNav}>
          {navItems.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
        </nav>

        <div className="header-actions">
          <button className="icon-button language-button" type="button" onClick={toggleLanguage} aria-label={ui.switchLanguage} title={ui.switchLanguage}>
            {language === "es" ? "EN" : "ES"}
          </button>
          <button className="icon-button" type="button" onClick={toggleTheme} aria-label={theme === "dark" ? ui.lightTheme : ui.darkTheme}>
            {theme === "dark" ? <Sun /> : <Moon />}
          </button>
          <button className="header-cta" type="button" onClick={openEmailClient}>{ui.talk} <ArrowUpRight /></button>
          <button className="icon-button menu-button" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? ui.closeMenu : ui.openMenu} aria-expanded={menuOpen}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {menuOpen ? (
          <nav className="mobile-nav" aria-label={ui.mobileNav}>
            {navItems.map((item, index) => (
              <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
                <span>0{index + 1}</span>{item.label}
              </a>
            ))}
          </nav>
        ) : null}
      </header>

      <section id="perfil" className="hero page-shell">
        <div className="hero-copy">
          <motion.p className="availability" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <span className="status-dot" /> {content.availability}
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            {content.headline.split(" ").map((word, index) => (
              <span key={`${word}-${index}`} className={index > 1 ? "outline-word" : ""}>{word}{" "}</span>
            ))}
          </motion.h1>
          <motion.p className="hero-summary" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.18, duration: 0.6 }}>
            {content.summary}
          </motion.p>
          <motion.div className="hero-actions" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
            <a className="button button-primary" href="#proyectos">{ui.explore} <ArrowDown /></a>
            <a className="button button-secondary" href="/juan-ignacio-cuevas-cv.pdf" download="Juan Ignacio Cuevas - CV.pdf">{ui.download} <Download /></a>
          </motion.div>
          <div className="hero-meta">
            <span><MapPin /> {content.location}</span>
            <span><BriefcaseBusiness /> {content.role}</span>
          </div>
        </div>

        <motion.div className="portrait-wrap" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.1 }}>
          <div className="portrait-frame">
            <Image src={content.photo} alt={ui.portraitAlt} fill priority sizes="(max-width: 900px) 90vw, 40vw" />
            <div className="portrait-overlay" />
            <div className="portrait-caption">
              <span>{content.shortName}</span>
              <small>{ui.portraitRole}</small>
            </div>
          </div>
          <div className="orbit-card"><RefreshCw aria-hidden="true" /><span>{ui.improvement}<br /><strong>{ui.asSystem}</strong></span></div>
        </motion.div>
      </section>

      <div className="ticker" aria-label={ui.mainAreas}>
        <div className="ticker-track">
          {[0, 1].map((group) => (
            <div className="ticker-group" aria-hidden={group === 1 ? "true" : undefined} key={group}>
              {content.skills.map((item) => <span key={item}>{item}<i aria-hidden="true" /></span>)}
            </div>
          ))}
        </div>
      </div>

      <section className="page-shell about-section">
        <Reveal className="about-copy">
          <p className="eyebrow"><span />{ui.about}</p>
          <p className="about-lead">{content.intro}</p>
          <p className="about-focus">{ui.currentFocus} {content.focus}</p>
        </Reveal>
        <div className="metric-grid">
          {content.metrics.map((metric, index) => (
            <Reveal key={metric.label} className="metric-card" delay={index * 0.08}>
              <strong>{metric.value}</strong><span>{metric.label}</span>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="experiencia" className="page-shell section-block">
        <Reveal><SectionHeading eyebrow={ui.journey} title={ui.experienceTitle} text={ui.experienceText} /></Reveal>
        <div className="timeline">
          {content.timeline.map((entry, index) => (
            <Reveal key={entry.title} className="timeline-item" delay={index * 0.1}>
              <div className="timeline-index">0{index + 1}</div>
              <div className="timeline-date">{entry.year}</div>
              <article>
                <p>{entry.company}</p>
                <h3>{entry.title}</h3>
                <p className="timeline-description">{entry.description}</p>
                <div className="tag-list">{entry.highlights.map((tag) => <span key={tag}>{tag}</span>)}</div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="aportes" className="services-section">
        <div className="page-shell">
          <Reveal><SectionHeading eyebrow={ui.contribution} title={ui.contributionTitle} /></Reveal>
          <div className="services-grid">
            {content.services.map((service, index) => (
              <Reveal key={service.title} className="service-card" delay={index * 0.08}>
                <div className="service-top"><span>{service.number}</span>{index === 0 ? <Layers3 /> : index === 1 ? <Code2 /> : <Check />}</div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <div className="tag-list">{service.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="proyectos" className="page-shell section-block">
        <Reveal>
          <div className="projects-heading">
            <SectionHeading eyebrow={ui.selectedWork} title={ui.projectsTitle} text={ui.projectsText} />
            <a href={content.socialNetworks.find((item) => item.network === "GitHub")?.url} target="_blank" rel="noreferrer">{ui.viewGithub} <ArrowUpRight /></a>
          </div>
        </Reveal>
        <div className="filter-bar" role="group" aria-label={ui.filterProjects}>
          {projectFilters.map((filter) => (
            <button key={filter} type="button" className={activeFilter === filter ? "active" : ""} onClick={() => setActiveFilter(filter)}>{ui.filters[filter]}</button>
          ))}
        </div>
        <motion.div layout className="project-list">
          {visibleProjects.map((project) => (
            <motion.article layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} key={project.name} className="project-card">
              <div className="project-index">{project.index}</div>
              <div className="project-main">
                <p className="project-category">{ui.filters[project.category]}</p>
                <h3>{project.name}</h3>
                <p>{project.text}</p>
                <small>{project.note}</small>
              </div>
              <div className="project-stack">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
            </motion.article>
          ))}
        </motion.div>
      </section>

      <section className="page-shell knowledge-grid">
        <Reveal className="skills-panel">
          <SectionHeading eyebrow={ui.stack} title={ui.stackTitle} />
          <div className="skill-cloud">{content.skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
        </Reveal>
        <Reveal className="education-panel" delay={0.08}>
          <div className="panel-icon"><GraduationCap /></div>
          <p className="eyebrow"><span />{ui.education}</p>
          <h3>{content.education[0].degree}</h3>
          <p>{content.education[0].institution}</p>
          <div className="education-meta"><span>{content.education[0].startDate} — {content.education[0].endDate}</span><span>{content.education[0].location}</span></div>
          <div className="language-row">{content.languages.map((spokenLanguage) => <span key={spokenLanguage}>{spokenLanguage}</span>)}</div>
        </Reveal>
      </section>

      <section className="page-shell certificates-section">
        <Reveal><SectionHeading eyebrow={ui.continuousLearning} title={ui.learningTitle} /></Reveal>
        <div className="certificate-list">
          {content.certificates.map((certificate, index) => (
            <Reveal key={certificate.name} className="certificate-row" delay={index * 0.04}>
              <span>0{index + 1}</span><h3>{certificate.name}</h3><p>{certificate.issuer}</p><time>{certificate.date}</time>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="page-shell faq-section">
        <Reveal><SectionHeading eyebrow={ui.quickQuestions} title={ui.faqTitle} /></Reveal>
        <div className="faq-list">
          {content.faqs.map((faq, index) => (
            <div className={`faq-item ${openFaq === index ? "open" : ""}`} key={faq.question}>
              <button type="button" onClick={() => setOpenFaq(openFaq === index ? -1 : index)} aria-expanded={openFaq === index}>
                <span>0{index + 1}</span><strong>{faq.question}</strong><ChevronDown />
              </button>
              <div className="faq-answer"><p>{faq.answer}</p></div>
            </div>
          ))}
        </div>
      </section>

      <footer id="contacto" className="contact-section">
        <div className="page-shell">
          <Reveal>
            <p className="eyebrow light"><span />{ui.contact}</p>
            <h2>{ui.contactTitle}</h2>
            <p className="contact-intro">{ui.contactText}</p>
            <button className="contact-email" type="button" onClick={openEmailClient}>
              {ui.sendEmail} <Mail aria-hidden="true" /><ArrowUpRight aria-hidden="true" />
            </button>
          </Reveal>
          <div className="footer-bottom">
            <div><span className="brand-mark dark">JC</span><p>{content.name}<small>{content.role}</small></p></div>
            <div className="footer-links">
              {content.socialNetworks.map((network) => <a key={network.network} href={network.url} target="_blank" rel="noreferrer"><SocialIcon network={network.network} />{network.network}</a>)}
              <a href="/juan-ignacio-cuevas-cv.pdf" download><Download />CV</a>
            </div>
            <p>© 2026 · {ui.builtWith}</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
