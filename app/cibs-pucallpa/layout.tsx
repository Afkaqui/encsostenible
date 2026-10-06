import type { Metadata } from "next";
import { CIBS_URL } from "@/lib/proyectos";

const TITLE = "CIBS Pucallpa — Centro de Innovación de Biodiversidad Sostenible";
const DESC =
  "Hub Green Tech de bioeconomía en Ucayali: poscosecha estandarizada de cacao nativo, pasaportes digitales por lote libres de deforestación (EUDR), biochar e ingeniería financiera con la Ley 30309.";

export const metadata: Metadata = {
  metadataBase: new URL(CIBS_URL),
  title: { absolute: TITLE },
  description: DESC,
  alternates: { canonical: CIBS_URL },
  openGraph: {
    type: "website",
    locale: "es_PE",
    url: CIBS_URL,
    title: TITLE,
    description: DESC,
    siteName: "CIBS Pucallpa · ENC Sust4in4ble",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESC,
  },
};

export default function CibsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
