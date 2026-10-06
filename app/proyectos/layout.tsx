import type { Metadata } from "next";

const SITE_URL = "https://www.encsust4in4ble.earth";

const TITLE = "Proyectos — Portafolio de iniciativas de impacto";
const DESC =
  "Resumen de los proyectos de bioeconomía, agroindustria, tecnología, clima y ecosistemas de innovación estructurados por ENC Sust4in4ble en Perú y América Latina.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: `${SITE_URL}/proyectos` },
  openGraph: {
    type: "website",
    locale: "es_PE",
    url: `${SITE_URL}/proyectos`,
    title: TITLE,
    description: DESC,
    siteName: "ENC Sust4in4ble",
    images: [{ url: "/opengraph-image.jpg", width: 1200, height: 630, alt: "Proyectos ENC Sust4in4ble" }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESC,
    images: ["/opengraph-image.jpg"],
  },
};

export default function ProyectosLayout({ children }: { children: React.ReactNode }) {
  return children;
}
