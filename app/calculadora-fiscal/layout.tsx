import type { Metadata } from "next";

const SITE_URL = "https://www.encsust4in4ble.earth";

const OG_TITLE = "Calculadora Ley 30309 — ¿Cuánto puede ahorrar tu empresa?";
const OG_DESC =
  "Ingresa tu inversión en I+D+i y calcula en segundos el beneficio tributario real bajo la Ley 30309. MIPYME: deducción del 240%. Gran Empresa: 190%. Ahorra hasta el 70% del costo neto.";

export const metadata: Metadata = {
  title: "Calculadora Fiscal | Beneficio Tributario Ley 30309 — Eduardo Noriega",
  description:
    "Calcula gratis tu beneficio fiscal con la Ley 30309 del Perú. Ahorra hasta el 70% en Impuesto a la Renta invirtiendo en innovación. MIPYME 240% · Gran Empresa 190%.",
  keywords: [
    "calculadora Ley 30309",
    "beneficio tributario innovación Perú",
    "deducción I+D+i impuesto a la renta",
    "MIPYME innovación Perú",
    "CONCYTEC beneficio fiscal",
    "Eduardo Noriega Campos",
    "ahorro fiscal empresa Perú",
  ],
  alternates: {
    canonical: `${SITE_URL}/calculadora-fiscal`,
  },
  openGraph: {
    type: "website",
    locale: "es_PE",
    url: `${SITE_URL}/calculadora-fiscal`,
    title: OG_TITLE,
    description: OG_DESC,
    siteName: "Eduardo Noriega Campos",
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Calculadora Ley 30309 — Beneficio tributario para empresas peruanas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: OG_TITLE,
    description: OG_DESC,
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
