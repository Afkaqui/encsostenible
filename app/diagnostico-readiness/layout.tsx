import type { Metadata } from "next";

const SITE_URL = "https://www.encsust4in4ble.earth";

const TITLE = "Diagnóstico de readiness para proyectos de impacto";
const DESC =
  "En siete días identificamos qué está listo en su proyecto, qué falta demostrar y cuál es el siguiente movimiento antes de presentarlo a un comité, fondo o aliado estratégico. Scorecard de 10 dimensiones.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: `${SITE_URL}/diagnostico-readiness` },
  openGraph: {
    type: "website",
    locale: "es_PE",
    url: `${SITE_URL}/diagnostico-readiness`,
    title: TITLE,
    description: DESC,
    siteName: "ENC Sust4in4ble",
    images: [{ url: "/opengraph-image.jpg", width: 1200, height: 630, alt: "Diagnóstico Ejecutivo de Readiness" }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESC,
    images: ["/opengraph-image.jpg"],
  },
};

export default function DiagnosticoLayout({ children }: { children: React.ReactNode }) {
  return children;
}
