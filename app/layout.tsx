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

const SITE_URL = "https://www.encsust4in4ble.earth";

const SITE_TITLE =
  "Eduardo Noriega Campos — Finanzas Sostenibles | Bioeconomía | América Latina";

const SITE_DESCRIPTION =
  "Ingeniero con 26 años articulando finanzas verdes, bioeconomía e innovación empresarial en América Latina. Calculadora Ley 30309 gratuita para empresas peruanas.";

const OG_DESCRIPTION =
  "Eduardo Noriega Campos conecta innovación, inversión y sostenibilidad en América Latina. Finanzas verdes, bioeconomía y la Hélice Quíntuple aplicada a proyectos reales.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: SITE_TITLE,
    template: "%s | Eduardo Noriega Campos",
  },

  description: SITE_DESCRIPTION,

  keywords: [
    "Eduardo Noriega Campos",
    "finanzas sostenibles Perú",
    "bioeconomía Perú",
    "finanzas verdes América Latina",
    "innovación empresarial sostenible",
    "Hélice Quíntuple",
    "Ley 30309 innovación",
    "beneficio tributario I+D+i",
    "CONCYTEC beneficio tributario",
    "calculadora fiscal Perú",
    "desarrollo sostenible Perú",
    "economía circular",
    "cambio climático América Latina",
    "banca sostenible",
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
    title:       "Eduardo Noriega Campos | Finanzas Sostenibles · Bioeconomía · Innovación",
    description: OG_DESCRIPTION,
    siteName:    "Eduardo Noriega Campos",
    images: [
      {
        url:    "/opengraph-image.jpg",
        width:  1200,
        height: 630,
        alt:    "Eduardo Noriega Campos — Finanzas Sostenibles y Bioeconomía en América Latina",
      },
    ],
  },

  twitter: {
    card:        "summary_large_image",
    title:       "Eduardo Noriega Campos | Finanzas Sostenibles · Bioeconomía",
    description: SITE_DESCRIPTION,
    images:      ["/opengraph-image.jpg"],
  },

  category: "Sostenibilidad · Finanzas · Perú",
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
