import type { Metadata } from "next";

const SITE_URL = "https://www.encsust4in4ble.earth";

export const metadata: Metadata = {
  title: "Videos | Integridad Democrática",
  description:
    "Videos de campaña, debates presidenciales y entrevistas de Integridad Democrática. Wolfgang Grozo y Eduardo Noriega Campos.",
  keywords: [
    "Videos Integridad Democrática",
    "Wolfgang Grozo",
    "Eduardo Noriega Campos",
    "Debate Presidencial 2026",
    "Elecciones Perú 2026",
    "Campaña Electoral",
  ],
  alternates: {
    canonical: `${SITE_URL}/videos`,
  },
  openGraph: {
    type: "website",
    locale: "es_PE",
    url: `${SITE_URL}/videos`,
    title: "Videos | Integridad Democrática",
    description:
      "Videos de campaña, debates presidenciales y entrevistas de Integridad Democrática.",
    siteName: "Eduardo Noriega Campos",
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Videos - Integridad Democrática",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Videos | Integridad Democrática",
    description:
      "Videos de campaña, debates y entrevistas de Integridad Democrática.",
    images: ["/opengraph-image.jpg"],
  },
};

export default function VideosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
