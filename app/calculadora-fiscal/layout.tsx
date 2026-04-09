import type { Metadata } from "next";

const SITE_URL = "https://www.encsust4in4ble.earth";

export const metadata: Metadata = {
  title: "Calculadora Fiscal | Beneficio Tributario Ley 30309",
  description:
    "Calcula tu beneficio fiscal con la Ley 30309 del Perú. Descubre cuánto puede ahorrar tu empresa en impuestos invirtiendo en innovación y desarrollo sostenible.",
  keywords: [
    "Calculadora Fiscal",
    "Ley 30309",
    "Beneficio Tributario Perú",
    "Innovación Empresarial",
    "I+D+i",
    "Deducción Tributaria",
    "Eduardo Noriega Campos",
  ],
  alternates: {
    canonical: `${SITE_URL}/calculadora-fiscal`,
  },
  openGraph: {
    type: "website",
    locale: "es_PE",
    url: `${SITE_URL}/calculadora-fiscal`,
    title: "Calculadora Fiscal | Beneficio Tributario Ley 30309",
    description:
      "Calcula cuánto puede ahorrar tu empresa en impuestos con la Ley 30309 de innovación.",
    siteName: "Eduardo Noriega Campos",
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Calculadora Fiscal - Ley 30309",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Calculadora Fiscal | Ley 30309",
    description:
      "Descubre tu beneficio tributario invirtiendo en innovación.",
    images: ["/opengraph-image.jpg"],
  },
};

export default function CalculadoraFiscalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
