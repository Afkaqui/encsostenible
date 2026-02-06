import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Configuración de la fuente (Optimizada por Google Fonts)
const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap", // Mejora la carga visual
});

// 1. CONFIGURACIÓN DEL VIEWPORT (Móviles)
// En Next.js 14+, esto se separa de 'metadata'
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0f172a", // Color de la barra del navegador en móviles (coincide con tu dark mode)
};

// 2. METADATOS PARA SEO (Google y Redes Sociales)
export const metadata: Metadata = {
  // URL Base: Vital para que las imágenes de redes sociales funcionen
  metadataBase: new URL("https://encsust4in4ble.earth "), 

  title: {
    default: "Eduardo Noriega Campos | Ingeniero de Soluciones Sostenibles",
    template: "%s | Eduardo Noriega Campos", // Para sub-páginas: "Blog | Eduardo Noriega..."
  },
  
  description: "Articulador de ecosistemas sostenibles en América Latina. Especialista en la Hélice Quíntuple, finanzas verdes, política pública y bioeconomía regenerativa.",
  
  keywords: [
    "Eduardo Noriega Campos",
    "Sostenibilidad",
    "Hélice Quíntuple",
    "Bioeconomía",
    "Finanzas Verdes",
    "Consultoría Ambiental",
    "Perú",
    "América Latina",
    "Ingeniería de Soluciones",
    "ODS"
  ],

  authors: [{ name: "Eduardo Noriega Campos" }],
  creator: "Eduardo Noriega Campos",
  
  // Configuración para Robots (GoogleBot)
  robots: {
    index: true,   // Permite que Google te encuentre
    follow: true,  // Permite que Google siga los enlaces internos
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Open Graph (Cómo se ve en Facebook, LinkedIn, WhatsApp)
  openGraph: {
    type: "website",
    locale: "es_PE", // Español de Perú (o es_LA para Latinoamérica)
    url: "https://encsust4in4ble.earth ",
    title: "Eduardo Noriega Campos | Ingeniero de Soluciones Sostenibles",
    description: "Conectando finanzas, política y comunidad para construir un futuro regenerativo.",
    siteName: "Eduardo Noriega Campos Portfolio",
    images: [
      {
        url: "/opengraph-image.jpg", // Asegúrate de poner esta imagen en 'public'
        width: 1200,
        height: 630,
        alt: "Eduardo Noriega Campos - Perfil Profesional",
      },
    ],
  },

  // Twitter Card (Cómo se ve en X/Twitter)
  twitter: {
    card: "summary_large_image",
    title: "Eduardo Noriega Campos | Soluciones Sostenibles",
    description: "Ingeniero articulando la Hélice Quíntuple para la regeneración de América Latina.",
    images: ["/opengraph-image.jpg"],
    // creator: "@tu_usuario_twitter", // Descomenta y pon tu usuario si tienes
  },

  // Iconos (Favicon)
  icons: {
    icon: "/favicon.ico", // Puedes poner tu logo aquí
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <meta name="google-site-verification" content="z1zYMkXnh7qXBMDRkHfZA26u-X3pwO-5Iijr2-6ztu4" />
      <body className={`${inter.variable} font-sans antialiased bg-slate-900 text-white`}>
        {children}
      </body>
    </html>
  );
}