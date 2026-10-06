import type { Metadata } from "next";
import { CIBS_URL } from "@/lib/proyectos";

const TITLE = "Portafolio de proyectos e iniciativas de impacto";
const DESC =
  "Más de 50 iniciativas de bioeconomía amazónica, agroindustria, tecnología, clima y ecosistemas de innovación en Perú y América Latina, articuladas desde CIBS Pucallpa y ENC Sust4in4ble.";

export const metadata: Metadata = {
  metadataBase: new URL(CIBS_URL),
  title: { absolute: `${TITLE} | CIBS Pucallpa` },
  description: DESC,
  alternates: { canonical: "/proyectos" },
  openGraph: {
    type: "website",
    locale: "es_PE",
    url: "/proyectos",
    title: TITLE,
    description: DESC,
    siteName: "CIBS Pucallpa · ENC Sust4in4ble",
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESC },
};

export default function ProyectosLayout({ children }: { children: React.ReactNode }) {
  return children;
}
