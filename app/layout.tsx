import "./polyfills";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import StructuredData from "./structured-data";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0f172a",
};

const SITE_URL  = "https://www.encsust4in4ble.earth";

// ─── Títulos y descripciones optimizados para búsqueda y compartir ─────────────

// Título principal: incluye el término más buscado ("Parlamento Andino 2026")
const SITE_TITLE =
  "Eduardo Noriega Campos — Candidato al Parlamento Andino 2026 | Integridad Democrática";

// Descripción Google (~150 chars): responde a la búsqueda directamente
const SITE_DESCRIPTION =
  "Candidato al Parlamento Andino 2026 por Integridad Democrática. 26 años en finanzas verdes, bioeconomía e innovación empresarial para América Latina.";

// Descripción OG (WhatsApp / Facebook / LinkedIn): un poco más extensa, genera curiosidad
const OG_DESCRIPTION =
  "Conoce la propuesta de Eduardo Noriega al Parlamento Andino 2026: finanzas verdes, bioeconomía y política pública sostenible al servicio de América Latina. Candidato por Integridad Democrática.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: SITE_TITLE,
    template: "%s | Eduardo Noriega Campos",
  },

  description: SITE_DESCRIPTION,

  keywords: [
    // Electoral — términos con intención de búsqueda clara
    "Eduardo Noriega Campos",
    "Parlamento Andino 2026",
    "candidato Parlamento Andino Perú",
    "Integridad Democrática candidato",
    "Wolfgang Grozo",
    "elecciones Perú 2026",
    "Eduardo Noriega Parlamento Andino",
    // Temáticos — finanzas y sostenibilidad
    "finanzas sostenibles Perú",
    "bioeconomía Perú",
    "finanzas verdes América Latina",
    "Ley 30309 innovación",
    "beneficio tributario I+D+i",
    "CONCYTEC beneficio tributario",
    "calculadora fiscal Perú",
    // Generales
    "desarrollo sostenible Perú",
    "política pública ambiental",
    "economía circular",
    "cambio climático América Latina",
  ],

  authors:   [{ name: "Eduardo Noriega Campos", url: SITE_URL }],
  creator:   "Eduardo Noriega Campos",
  publisher: "Eduardo Noriega Campos",

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
    title:       "Eduardo Noriega Campos | Candidato Parlamento Andino 2026",
    description: OG_DESCRIPTION,
    siteName:    "Eduardo Noriega Campos",
    images: [
      {
        url:    "/opengraph-image.jpg",
        width:  1200,
        height: 630,
        alt:    "Eduardo Noriega Campos — Candidato al Parlamento Andino 2026 por Integridad Democrática",
      },
    ],
  },

  twitter: {
    card:        "summary_large_image",
    title:       "Eduardo Noriega Campos | Candidato Parlamento Andino 2026",
    description: SITE_DESCRIPTION,
    images:      ["/opengraph-image.jpg"],
  },

  category: "Política · Sostenibilidad · Perú",
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
        className={`${inter.variable} font-sans antialiased bg-slate-900 text-white`}
      >
        {children}
      </body>
    </html>
  );
}
