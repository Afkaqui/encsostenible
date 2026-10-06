// sitemap.xml de cibs.encsust4in4ble.earth (next.config.ts reescribe /sitemap.xml aquí en ese host)
import { CIBS_URL, proyectos } from "@/lib/proyectos";

export const dynamic = "force-static";

export function GET() {
  const hoy = new Date().toISOString().slice(0, 10);
  const urls = [
    { loc: CIBS_URL, priority: "1.0" },
    { loc: `${CIBS_URL}/proyectos`, priority: "0.9" },
    ...proyectos.map((p) => ({ loc: `${CIBS_URL}/proyectos/${p.slug}`, priority: p.categoria === "cibs" ? "0.8" : "0.7" })),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url><loc>${u.loc}</loc><lastmod>${hoy}</lastmod><priority>${u.priority}</priority></url>`).join("\n")}
</urlset>
`;
  return new Response(xml, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
}
