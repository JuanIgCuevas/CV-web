import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const siteUrl = "https://porfolio-web-sage.vercel.app";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Juan Ignacio Cuevas",
      url: siteUrl,
      image: `${siteUrl}/opengraph-image`,
      jobTitle: "Desarrollador Full Stack",
      description: "Desarrollador Full Stack con experiencia en React, Supabase, SQL, automatización y mejora de procesos.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Tandil",
        addressRegion: "Buenos Aires",
        addressCountry: "AR",
      },
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "Universidad Nacional del Centro de la Provincia de Buenos Aires",
        sameAs: "https://www.unicen.edu.ar/",
      },
      knowsAbout: [
        "Full Stack Development",
        "React",
        "Supabase",
        "JavaScript",
        "TypeScript",
        "SQL",
        "PostgreSQL",
        "Python",
        "APIs",
        "Automatización de procesos",
      ],
      sameAs: [
        "https://github.com/JuanIgCuevas",
        "https://www.linkedin.com/in/juan-ignacio-cuevas-348891284",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Portfolio de Juan Ignacio Cuevas",
      description: "Portfolio profesional de Juan Ignacio Cuevas, Desarrollador Full Stack especializado en React, Supabase y SQL.",
      inLanguage: ["es-AR", "en"],
      author: {
        "@id": `${siteUrl}/#person`,
      },
    },
  ],
};

const display = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
});

const sans = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Juan Ignacio Cuevas | Portfolio",
  description: "Portfolio profesional de Juan Ignacio Cuevas, Desarrollador Full Stack especializado en React, Supabase, SQL y mejora de procesos.",
  keywords: [
    "Desarrollador Full Stack",
    "Full Stack Developer",
    "React Developer",
    "Supabase Developer",
    "React Supabase",
    "SQL",
    "PostgreSQL",
    "Desarrollo web",
    "Tandil",
    "Juan Ignacio Cuevas",
  ],
  authors: [{ name: "Juan Ignacio Cuevas", url: siteUrl }],
  creator: "Juan Ignacio Cuevas",
  category: "technology",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Juan Ignacio Cuevas | Desarrollador Full Stack",
    description: "Construyo soluciones web de punta a punta con React, Supabase, SQL y foco en procesos claros.",
    url: "/",
    siteName: "Portfolio de Juan Ignacio Cuevas",
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Juan Ignacio Cuevas | Desarrollador Full Stack",
    description: "Construyo soluciones web de punta a punta con React, Supabase, SQL y foco en procesos claros.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const savedTheme = localStorage.getItem("theme");
                const systemTheme = matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
                document.documentElement.dataset.theme =
                  savedTheme === "light" || savedTheme === "dark" ? savedTheme : systemTheme;
              } catch (_) {
                document.documentElement.dataset.theme = "dark";
              }
            `,
          }}
        />
      </head>
      <body className={`${display.variable} ${sans.variable} bg-background text-foreground antialiased`}>
        {children}
      </body>
    </html>
  );
}
