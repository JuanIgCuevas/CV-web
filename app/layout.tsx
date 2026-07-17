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
  title: "CV | Portfolio profesional",
  description: "Sitio web profesional y sofisticado para mostrar tu CV con animaciones, experiencia, proyectos y contacto.",
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
