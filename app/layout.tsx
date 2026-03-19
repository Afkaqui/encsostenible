import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// 1. VIEWPORT
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0f172a",
};

// 2. METADATOS SEO
const SITE_URL = "https://www.encsust4in4ble.earth";
const SITE_TITLE = "Eduardo Noriega Campos | Ingeniero de Soluciones Sostenibles";
const SITE_DESCRIPTION =
  "Articulador de ecosistemas sostenibles en América Latina. Especialista en la Hélice Quíntuple, finanzas verdes, política pública y bioeconomía regenerativa.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: SITE_TITLE,
    template: "%s | Eduardo Noriega Campos",
  },

  description: SITE_DESCRIPTION,

  keywords: [
    "Eduardo Noriega Campos",
    "Sostenibilidad",
    "Hélice Quíntuple",
    "Bioeconomía",
    "Finanzas Verdes",
    "Consultoría Ambiental",
    "Política Pública Ambiental",
    "Economía Circular",
    "Parlamento Andino",
    "Perú",
    "América Latina",
    "Ingeniería de Soluciones Sostenibles",
    "ODS",
    "Desarrollo Sostenible",
    "Cambio Climático",
    "Innovación Verde",
  ],

  authors: [{ name: "Eduardo Noriega Campos", url: SITE_URL }],
  creator: "Eduardo Noriega Campos",
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
    type: "website",
    locale: "es_PE",
    url: SITE_URL,
    title: SITE_TITLE,
    description:
      "Conectando finanzas, política y comunidad para construir un futuro regenerativo en América Latina.",
    siteName: "Eduardo Noriega Campos",
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Eduardo Noriega Campos - Ingeniero de Soluciones Sostenibles",
        type: "image/jpeg",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description:
      "Ingeniero articulando la Hélice Quíntuple para la regeneración de América Latina.",
    images: ["/opengraph-image.jpg"],
    // creator: "@tu_usuario_twitter",
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },

  category: "Sostenibilidad",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${inter.variable} font-sans antialiased bg-slate-900 text-white`}
      >
        {children}
      </body>
    </html>
  );
}
