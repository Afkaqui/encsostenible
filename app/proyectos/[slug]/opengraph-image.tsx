import { ImageResponse } from "next/og";
import { CATEGORIAS, getProyecto, proyectos } from "@/lib/proyectos";

export const alt = "Ficha de proyecto — CIBS Pucallpa";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return proyectos.map((p) => ({ slug: p.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const p = getProyecto((await params).slug);
  const titulo = p?.titulo ?? "Portafolio de proyectos";
  const categoria = p ? CATEGORIAS[p.categoria].nombre : "CIBS Pucallpa";
  const meta = p ? [p.tipo, ...p.regiones.slice(0, 3)].join("  ·  ") : "";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          background: "linear-gradient(135deg, #0b2e29 0%, #1a2523 55%, #155a4a 100%)",
          color: "#faf8f5",
        }}
      >
        <div style={{ display: "flex", fontSize: 26, letterSpacing: 4, textTransform: "uppercase", color: "#c6a65b" }}>
          {categoria}
        </div>
        <div style={{ display: "flex", fontSize: titulo.length > 70 ? 54 : 66, fontWeight: 700, lineHeight: 1.12 }}>
          {titulo}
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", fontSize: 26 }}>
          <div style={{ display: "flex", color: "#5ca9a8" }}>{meta}</div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
            <div style={{ display: "flex", fontSize: 32, fontWeight: 700 }}>CIBS Pucallpa</div>
            <div style={{ display: "flex", fontSize: 20, color: "rgba(250,248,245,0.55)" }}>cibs.encsust4in4ble.earth</div>
          </div>
        </div>
      </div>
    ),
    size
  );
}
