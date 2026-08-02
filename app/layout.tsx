import "./polyfills";
import type { Metadata, Viewport } from "next";
import { Inter, Manrope } from "next/font/google";
import StructuredData from "./structured-data";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["600", "700", "800"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0b2e29",
};

const SITE_URL = "https://www.encsust4in4ble.earth";

const SITE_TITLE =
  "ENC Sust4in4ble — Arquitectura de proyectos de impacto bankable";

const SITE_DESCRIPTION =
  "Firma boutique que convierte iniciativas sostenibles complejas en proyectos listos para decisión, financiamiento y ejecución. Diagnóstico Ejecutivo de Readiness y calculadora Ley 30309.";

const OG_DESCRIPTION =
  "ENC Sust4in4ble integra evidencia, modelo económico, gobernanza y articulación institucional para preparar proyectos ante comités, fondos, empresas y entidades públicas.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: SITE_TITLE,
    template: "%s | ENC Sust4in4ble",
  },

  description: SITE_DESCRIPTION,

  keywords: [
    "ENC Sust4in4ble",
    "arquitectura de impacto bankable",
    "proyectos sostenibles financiables",
    "diagnóstico de readiness",
    "inversión de impacto Perú",
    "estructuración de proyectos",
    "finanzas sostenibles Perú",
    "bioeconomía Perú",
    "Hélice Quíntuple",
    "Ley 30309 innovación",
    "beneficio tributario I+D+i",
    "CONCYTEC beneficio tributario",
    "economía circular",
    "Eduardo Noriega Campos",
  ],

  authors:   [{ name: "Eduardo José Noriega Campos", url: SITE_URL }],
  creator:   "Eduardo José Noriega Campos",
  publisher: "ENC Sust4in4ble",

  alternates: {
    canonical: SITE_URL,
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  verification: {
    google: "z1zYMkXnh7qXBMDRkHfZA26u-X3pwO-5Iijr2-6ztu4",
  },

  openGraph: {
    type:        "website",
    locale:      "es_PE",
    url:         SITE_URL,
    title:       "ENC Sust4in4ble | Arquitectura de proyectos de impacto bankable",
    description: OG_DESCRIPTION,
    siteName:    "ENC Sust4in4ble",
    images: [
      {
        url:    "/opengraph-image.jpg",
        width:  1200,
        height: 630,
        alt:    "ENC Sust4in4ble — Arquitectura de proyectos y ecosistemas de impacto",
      },
    ],
  },

  twitter: {
    card:        "summary_large_image",
    title:       "ENC Sust4in4ble | Arquitectura de proyectos de impacto bankable",
    description: SITE_DESCRIPTION,
    images:      ["/opengraph-image.jpg"],
  },

  category: "Consultoría · Inversión de impacto · Perú",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <StructuredData />
      </head>
      <body
        className={`${inter.variable} ${manrope.variable} font-sans antialiased bg-enc-forest-900 text-white`}
      >
        {children}
      </body>
    </html>
  );
}
