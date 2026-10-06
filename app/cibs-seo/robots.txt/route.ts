// robots.txt de cibs.encsust4in4ble.earth (next.config.ts reescribe /robots.txt aquí en ese host)
import { CIBS_URL } from "@/lib/proyectos";

export const dynamic = "force-static";

export function GET() {
  return new Response(`User-agent: *\nAllow: /\n\nSitemap: ${CIBS_URL}/sitemap.xml\n`, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
