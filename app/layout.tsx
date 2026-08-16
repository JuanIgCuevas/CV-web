import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

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
  metadataBase: new URL("https://porfolio-web-sage.vercel.app"),
  title: "Juan Ignacio Cuevas | Portfolio",
  description: "Portfolio profesional de Juan Ignacio Cuevas, Desarrollador Full Stack especializado en React, Supabase, SQL y mejora de procesos.",
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
