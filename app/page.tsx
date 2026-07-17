"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Download,
  Github,
  GraduationCap,
  LayoutPanelLeft,
  Mail,
  MapPin,
  Linkedin,
  School2,
  BookCheck,
  Sparkles,
  Moon,
  Sun,
  Zap,
} from "lucide-react";
import { profile } from "@/lib/profile";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.09,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

function SectionLabel({ icon: Icon, title }: { icon: React.ComponentType<{ className?: string }>; title: string }) {
  return (
    <div className="mb-5 flex items-center gap-3 text-sm uppercase tracking-[0.28em] text-white/60">
      <span className="rounded-full border border-white/10 bg-white/5 p-2 text-accent-soft">
        <Icon className="h-4 w-4" />
      </span>
      <span>{title}</span>
    </div>
  );
}

function formatDate(date: string) {
  return date.replace("-", "/");
}

function getInitials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

export default function HomePage() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const initialTheme = document.documentElement.dataset.theme === "light" ? "light" : "dark";
    setTheme(initialTheme);
  }, []);

  function toggleTheme() {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    localStorage.setItem("theme", nextTheme);
  }

  const sectionAnimation = prefersReducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: 14 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.12 },
        transition: { duration: 0.45 },
      };

  return (
    <main id="main-content" className="relative overflow-hidden">
      <a href="#main-content" className="skip-link">Saltar al contenido principal</a>
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(206,167,90,0.16),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.08),transparent_20%),linear-gradient(180deg,rgba(255,255,255,0.02),transparent_20%)]" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-radial-grid bg-[size:100%_100%,22px_22px,22px_22px] opacity-20 [mask-image:linear-gradient(180deg,white,transparent_92%)]" />

      <section className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col px-4 py-4 sm:px-6 sm:py-8 lg:px-10">
        <header className="mb-8 flex items-center justify-between gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 backdrop-blur-xl sm:mb-10 sm:px-4 sm:py-3">
          <div className="flex min-w-0 items-center gap-2 sm:gap-3">
            <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full border border-white/15 bg-white/5 p-0.5 shadow-lg shadow-black/20 sm:h-12 sm:w-12">
              <Image
                src={profile.photo}
                alt={`Foto de ${profile.name}`}
                fill
                priority
                sizes="48px"
                className="rounded-full object-cover object-[50%_18%]"
              />
            </div>
            <div className="min-w-0">
              <p className="hidden text-xs uppercase tracking-[0.35em] text-white/60 sm:block">Portfolio CV</p>
              <p className="truncate text-xs text-white/80 sm:mt-1 sm:text-sm">{profile.name}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={theme === "dark" ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
              title={theme === "dark" ? "Modo claro" : "Modo oscuro"}
              className="theme-toggle inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white transition hover:border-accent hover:bg-accent/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            <a
              href="#contact"
              aria-label="Ir a la sección de contacto"
              className="inline-flex h-11 items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 text-sm text-white transition hover:border-accent hover:bg-accent/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent sm:px-4"
            >
              <span className="hidden sm:inline">Contacto</span> <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
            </a>
          </div>
        </header>

        <motion.div
          className="grid flex-1 gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start"
          variants={container}
          initial={prefersReducedMotion ? false : "hidden"}
          animate="show"
        >
          <motion.div variants={item} className="max-w-3xl pb-4 lg:pb-16">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white/65">
              <Sparkles className="h-4 w-4 text-accent-soft" />
              {profile.availability}
            </p>
            <h1 className="font-display text-6xl leading-[0.92] tracking-tight text-white sm:text-7xl lg:text-[7.5rem]">
              {profile.headline}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-white/72 sm:text-lg">
              {profile.summary}
            </p>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-white/60 sm:text-base">
              {profile.about}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-[#15120d] transition hover:translate-y-[-1px] hover:shadow-glow"
              >
                Ver proyectos <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="#experience"
                className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:border-white/20 hover:bg-white/8"
              >
                Experiencia <BriefcaseBusiness className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {profile.highlights.map((highlight) => (
                <div key={highlight.label} className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                  <p className="text-3xl font-semibold text-white">{highlight.value}</p>
                  <p className="mt-2 text-sm text-white/60">{highlight.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.aside variants={item} className="relative pb-4 lg:pb-16">
            <div className="absolute inset-x-8 -top-10 h-44 rounded-full bg-accent/10 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-6 shadow-2xl shadow-black/30 backdrop-blur-xl">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-accent/70 to-transparent" />
              <div className="relative mx-auto mb-6 flex h-[min(16rem,75vw)] w-[min(16rem,75vw)] items-center justify-center overflow-hidden rounded-full border border-white/10 bg-[#14110d] sm:h-72 sm:w-72 lg:h-80 lg:w-80">
                <Image
                  src={profile.photo}
                  alt={`Foto de ${profile.name}`}
                  fill
                  priority
                  sizes="(max-width: 640px) 75vw, (max-width: 1024px) 288px, 320px"
                  className="object-cover object-[50%_18%]"
                />
              </div>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.28em] text-white/50">Perfil profesional</p>
                  <p className="mt-2 font-display text-3xl text-white">{profile.role}</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-3 text-accent-soft">
                  <Zap className="h-5 w-5" />
                </div>
              </div>

              <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-black/20 p-4">
                <div className="flex items-center gap-3 text-white/80">
                  <MapPin className="h-4 w-4 text-accent-soft" />
                  {profile.location}
                </div>
                <p className="mt-3 text-sm leading-6 text-white/60">
                  {profile.intro}
                </p>
              </div>

              <div className="mt-8 space-y-4">
                <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <div className="flex items-center gap-3 text-white/80">
                    <LayoutPanelLeft className="h-4 w-4 text-accent-soft" />
                    Enfoque principal
                  </div>
                  <p className="mt-3 text-sm leading-6 text-white/60">
                    {profile.focus}
                  </p>
                </div>
              </div>
            </div>
          </motion.aside>
        </motion.div>
      </section>

      <motion.section {...sectionAnimation} id="experience" className="relative mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-10 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionLabel icon={BriefcaseBusiness} title="Experiencia" />
            <h2 className="font-display text-4xl text-white sm:text-5xl">Experiencia reciente orientada a mejora y ejecución.</h2>
            <p className="mt-4 max-w-md text-white/65">
              Este bloque resume tu recorrido laboral con foco en impacto, calidad y herramientas reales.
            </p>
          </div>

          <div className="space-y-4">
            {profile.timeline.map((entry) => (
              <article key={entry.year} className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition hover:-translate-y-0.5 hover:border-white/20">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <p className="text-sm uppercase tracking-[0.28em] text-accent-soft">{entry.year}</p>
                  <p className="text-sm text-white/60">{entry.company}</p>
                </div>
                <h3 className="mt-3 text-2xl font-semibold text-white">{entry.title}</h3>
                <p className="mt-3 max-w-2xl text-white/65">{entry.description}</p>
              </article>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section {...sectionAnimation} className="relative mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-10 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionLabel icon={School2} title="Educación" />
            <h2 className="font-display text-4xl text-white sm:text-5xl">Base académica en sistemas y formación continua.</h2>
          </div>

          <div className="space-y-4">
            {profile.education.map((item) => (
              <article key={item.institution} className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition hover:-translate-y-0.5 hover:border-white/20">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <p className="text-sm uppercase tracking-[0.28em] text-accent-soft">{item.degree}</p>
                  <p className="text-sm text-white/60">{item.startDate} - {item.endDate}</p>
                </div>
                <h3 className="mt-3 text-2xl font-semibold text-white">{item.summary}</h3>
                <p className="mt-2 text-white/70">{item.institution}</p>
                <p className="mt-2 text-sm text-white/55">{item.area} · {item.location}</p>
              </article>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section {...sectionAnimation} className="relative mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-10 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <div id="projects">
            <SectionLabel icon={Code2} title="Proyectos" />
            <div className="grid gap-4">
              {profile.projects.map((project) => (
                <article key={project.name} className="rounded-[1.75rem] border border-white/10 bg-[#17130f]/85 p-6 transition hover:border-accent/50 hover:bg-[#1b1611]">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-sm uppercase tracking-[0.28em] text-white/60">{project.tag}</p>
                      <h3 className="mt-2 text-2xl font-semibold text-white">{project.name}</h3>
                    </div>
                    <ArrowUpRight className="h-5 w-5 text-accent-soft" />
                  </div>
                  <p className="mt-4 max-w-2xl text-white/65">{project.text}</p>
                </article>
              ))}
            </div>
          </div>

          <div>
            <SectionLabel icon={Sparkles} title="Competencias" />
            <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <div className="flex flex-wrap gap-3">
                {profile.skills.map((skill) => (
                  <span key={skill} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/75">
                    {skill}
                  </span>
                ))}
              </div>
              <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-black/20 p-5">
                <p className="text-sm uppercase tracking-[0.28em] text-white/60">Valor diferencial</p>
                <p className="mt-3 text-white/75 leading-7">
                  Un enfoque que combina mejora continua, criterio técnico y una ejecución cuidada para aportar valor concreto al equipo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section {...sectionAnimation} className="relative mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-10 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
          <div>
            <SectionLabel icon={BookCheck} title="Certificados" />
            <div className="space-y-4">
              {profile.certificates.map((certificate) => (
                <article key={certificate.name} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-lg font-semibold text-white">{certificate.name}</h3>
                      <p className="mt-2 text-sm text-white/60">{certificate.issuer}</p>
                    </div>
                    <p className="text-xs uppercase tracking-[0.28em] text-accent-soft">{formatDate(certificate.date)}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div>
            <SectionLabel icon={GraduationCap} title="Idiomas" />
            <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <div className="flex flex-wrap gap-3">
                {profile.languages.map((language) => (
                  <span key={language} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/75">
                    {language}
                  </span>
                ))}
              </div>

              <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-black/20 p-5">
                <p className="text-sm uppercase tracking-[0.28em] text-white/60">Disponibilidad</p>
                <p className="mt-3 text-white/75 leading-7">{profile.availability}</p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section {...sectionAnimation} id="contact" className="relative mx-auto w-full max-w-7xl scroll-mt-6 px-4 py-10 pb-16 sm:px-6 lg:px-10 lg:py-20">
        <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-8 backdrop-blur-xl lg:p-10">
          <SectionLabel icon={Mail} title="Contacto" />
          <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
            <div>
              <h2 className="font-display text-4xl text-white sm:text-5xl">
                Si quieres una presentación que proyecte más valor, este es un buen punto de partida.
              </h2>
              <p className="mt-4 max-w-2xl text-white/65">
                Podemos adaptar este proyecto con tu nombre, foto, experiencia real, enlaces y paleta personal para dejarlo listo como CV online.
              </p>
            </div>

            <div className="w-fit lg:ml-auto">
              <a
                href="/juan-ignacio-cuevas-cv.pdf"
                download="Juan Ignacio Cuevas - CV.pdf"
                className="mb-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-[#15120d] transition hover:-translate-y-0.5 hover:shadow-glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-[#14110d]"
              >
                Descargar CV <Download className="h-4 w-4" />
              </a>
              <p className="mb-4 text-center text-sm font-semibold uppercase tracking-[0.22em] text-white/60">
                Contáctame
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <a
                  href={`mailto:${profile.contact}`}
                  aria-label="Enviar un correo"
                  title="Enviar un correo"
                  className="group inline-flex h-14 w-14 items-center justify-center rounded-full border border-white/15 bg-white text-[#14110d] shadow-lg shadow-black/10 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#14110d]"
                >
                  <Mail className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" aria-hidden="true" />
                </a>

                {profile.socialNetworks.map((network) => (
                  <a
                    key={network.network}
                    href={network.url}
                    aria-label={`Visitar mi perfil de ${network.network}`}
                    title={network.network}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex h-14 w-14 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/80 transition duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#14110d]"
                  >
                    {network.network === "LinkedIn" ? (
                      <Linkedin className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" aria-hidden="true" />
                    ) : (
                      <Github className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" aria-hidden="true" />
                    )}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </main>
  );
}
