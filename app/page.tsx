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
  Sparkles,
  Sun,
  X,
} from "lucide-react";
import { profile, type ProjectCategory } from "@/lib/profile";

const navItems = [
  { label: "Perfil", href: "#perfil" },
  { label: "Experiencia", href: "#experiencia" },
  { label: "Aportes", href: "#aportes" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Contacto", href: "#contacto" },
];

const projectFilters: Array<"Todos" | ProjectCategory> = [
  "Todos",
  "Producto",
  "Automatización",
  "Aprendizaje",
];

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
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState<(typeof projectFilters)[number]>("Todos");
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    setTheme(document.documentElement.dataset.theme === "light" ? "light" : "dark");
  }, []);

  const visibleProjects = profile.projects.filter(
    (project) => activeFilter === "Todos" || project.category === activeFilter,
  );

  function toggleTheme() {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.dataset.theme = next;
    localStorage.setItem("theme", next);
  }

  return (
    <main id="main-content">
      <a className="skip-link" href="#perfil">Saltar al contenido</a>

      <header className="site-header">
        <a className="brand" href="#perfil" aria-label="Ir al inicio">
          <span className="brand-mark">JC</span>
          <span className="brand-copy">
            <strong>{profile.shortName}</strong>
            <small>Portfolio · 2026</small>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Navegación principal">
          {navItems.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
        </nav>

        <div className="header-actions">
          <button className="icon-button" type="button" onClick={toggleTheme} aria-label={theme === "dark" ? "Activar tema claro" : "Activar tema oscuro"}>
            {theme === "dark" ? <Sun /> : <Moon />}
          </button>
          <a className="header-cta" href={`mailto:${profile.contact}`}>Hablemos <ArrowUpRight /></a>
          <button className="icon-button menu-button" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menú" aria-expanded={menuOpen}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {menuOpen ? (
          <nav className="mobile-nav" aria-label="Navegación móvil">
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
            <span className="status-dot" /> {profile.availability}
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            {profile.headline.split(" ").map((word, index) => (
              <span key={`${word}-${index}`} className={index > 1 ? "outline-word" : ""}>{word}{" "}</span>
            ))}
          </motion.h1>
          <motion.p className="hero-summary" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.18, duration: 0.6 }}>
            {profile.summary}
          </motion.p>
          <motion.div className="hero-actions" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
            <a className="button button-primary" href="#proyectos">Explorar mi trabajo <ArrowDown /></a>
            <a className="button button-secondary" href="/juan-ignacio-cuevas-cv.pdf" download="Juan Ignacio Cuevas - CV.pdf">Descargar CV <Download /></a>
          </motion.div>
          <div className="hero-meta">
            <span><MapPin /> {profile.location}</span>
            <span><BriefcaseBusiness /> {profile.role}</span>
          </div>
        </div>

        <motion.div className="portrait-wrap" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.1 }}>
          <div className="portrait-label">Perfil / 01</div>
          <div className="portrait-frame">
            <Image src={profile.photo} alt={`Retrato de ${profile.name}`} fill priority sizes="(max-width: 900px) 90vw, 40vw" />
            <div className="portrait-overlay" />
            <div className="portrait-caption">
              <span>{profile.shortName}</span>
              <small>Analista + Developer</small>
            </div>
          </div>
          <div className="orbit-card"><Sparkles /><span>Mejora continua<br /><strong>como sistema.</strong></span></div>
        </motion.div>
      </section>

      <div className="ticker" aria-label="Áreas principales">
        <div>
          {["E-Commerce", "React", "Supabase", "Automatización", "SQL", "Producto", "E-Commerce", "React"].map((item, index) => (
            <span key={`${item}-${index}`}>{item}<i>✦</i></span>
          ))}
        </div>
      </div>

      <section className="page-shell about-section">
        <Reveal className="about-copy">
          <p className="eyebrow"><span />Sobre mí</p>
          <p className="about-lead">{profile.intro}</p>
          <p className="about-focus">Mi foco actual: {profile.focus}</p>
        </Reveal>
        <div className="metric-grid">
          {profile.metrics.map((metric, index) => (
            <Reveal key={metric.label} className="metric-card" delay={index * 0.08}>
              <strong>{metric.value}</strong><span>{metric.label}</span>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="experiencia" className="page-shell section-block">
        <Reveal><SectionHeading eyebrow="Trayectoria" title="Experiencia con contexto operativo." text="Roles complementarios que me permiten entender el problema, cuidar la calidad y participar en la solución." /></Reveal>
        <div className="timeline">
          {profile.timeline.map((entry, index) => (
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
          <Reveal><SectionHeading eyebrow="Cómo aporto" title="Tres formas de convertir fricción en avance." /></Reveal>
          <div className="services-grid">
            {profile.services.map((service, index) => (
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
            <SectionHeading eyebrow="Trabajo seleccionado" title="Casos que muestran mi manera de pensar." text="Una selección honesta de experiencias profesionales y espacios de aprendizaje." />
            <a href={profile.socialNetworks.find((item) => item.network === "GitHub")?.url} target="_blank" rel="noreferrer">Ver GitHub <ArrowUpRight /></a>
          </div>
        </Reveal>
        <div className="filter-bar" role="group" aria-label="Filtrar proyectos">
          {projectFilters.map((filter) => (
            <button key={filter} type="button" className={activeFilter === filter ? "active" : ""} onClick={() => setActiveFilter(filter)}>{filter}</button>
          ))}
        </div>
        <motion.div layout className="project-list">
          {visibleProjects.map((project) => (
            <motion.article layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} key={project.name} className="project-card">
              <div className="project-index">{project.index}</div>
              <div className="project-main">
                <p className="project-category">{project.category}</p>
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
          <SectionHeading eyebrow="Stack & herramientas" title="Tecnología al servicio del proceso." />
          <div className="skill-cloud">{profile.skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
        </Reveal>
        <Reveal className="education-panel" delay={0.08}>
          <div className="panel-icon"><GraduationCap /></div>
          <p className="eyebrow"><span />Formación</p>
          <h3>{profile.education[0].degree}</h3>
          <p>{profile.education[0].institution}</p>
          <div className="education-meta"><span>{profile.education[0].startDate} — {profile.education[0].endDate}</span><span>{profile.education[0].location}</span></div>
          <div className="language-row">{profile.languages.map((language) => <span key={language}>{language}</span>)}</div>
        </Reveal>
      </section>

      <section className="page-shell certificates-section">
        <Reveal><SectionHeading eyebrow="Formación continua" title="Aprender también es parte del trabajo." /></Reveal>
        <div className="certificate-list">
          {profile.certificates.map((certificate, index) => (
            <Reveal key={certificate.name} className="certificate-row" delay={index * 0.04}>
              <span>0{index + 1}</span><h3>{certificate.name}</h3><p>{certificate.issuer}</p><time>{certificate.date}</time>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="page-shell faq-section">
        <Reveal><SectionHeading eyebrow="Preguntas rápidas" title="Lo importante, sin vueltas." /></Reveal>
        <div className="faq-list">
          {profile.faqs.map((faq, index) => (
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
            <p className="eyebrow light"><span />Contacto</p>
            <h2>¿Hay un problema interesante por resolver?</h2>
            <p className="contact-intro">Estoy abierto a conversar sobre producto, e-commerce, desarrollo y nuevas oportunidades.</p>
            <a className="contact-email" href={`mailto:${profile.contact}`}>{profile.contact}<ArrowUpRight /></a>
          </Reveal>
          <div className="footer-bottom">
            <div><span className="brand-mark dark">JC</span><p>{profile.name}<small>{profile.role}</small></p></div>
            <div className="footer-links">
              {profile.socialNetworks.map((network) => <a key={network.network} href={network.url} target="_blank" rel="noreferrer"><SocialIcon network={network.network} />{network.network}</a>)}
              <a href="/juan-ignacio-cuevas-cv.pdf" download><Download />CV</a>
            </div>
            <p>© 2026 · Construido con Next.js</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
