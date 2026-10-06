import type { NextConfig } from "next";

const securityHeaders = [
  { key: "X-DNS-Prefetch-Control", value: "on" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "Cross-Origin-Opener-Policy",
    value: "same-origin-allow-popups",
  },
];

const CIBS_HOST = "cibs.encsust4in4ble.earth";
const SITE_URL = "https://www.encsust4in4ble.earth";

const nextConfig: NextConfig = {
  // Build autocontenido para el contenedor Docker del VPS (cibs.encsust4in4ble.earth)
  output: "standalone",
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
  async redirects() {
    return [
      // Redirigir sin www a con www
      {
        source: "/:path*",
        has: [{ type: "host", value: "encsust4in4ble.earth" }],
        destination: "https://www.encsust4in4ble.earth/:path*",
        permanent: true,
      },
      // La landing de CIBS y el portafolio de proyectos viven en el subdominio
      {
        source: "/cibs-pucallpa",
        has: [{ type: "host", value: "www.encsust4in4ble.earth" }],
        destination: `https://${CIBS_HOST}`,
        permanent: true,
      },
      {
        source: "/proyectos/:path*",
        has: [{ type: "host", value: "www.encsust4in4ble.earth" }],
        destination: `https://${CIBS_HOST}/proyectos/:path*`,
        permanent: true,
      },
      {
        source: "/cibs-seo/:path*",
        has: [{ type: "host", value: "www.encsust4in4ble.earth" }],
        destination: `https://${CIBS_HOST}/:path*`,
        permanent: true,
      },
      // En el subdominio, la ruta interna se sirve en la raíz
      {
        source: "/cibs-pucallpa",
        has: [{ type: "host", value: CIBS_HOST }],
        destination: "/",
        permanent: true,
      },
      // El resto de páginas del sitio no se duplican en el subdominio
      {
        source:
          "/:path((?!_next/|cibs-pucallpa/|cibs-seo/|proyectos(?:/|$)|robots\\.txt$|sitemap\\.xml$|favicon\\.ico$|icon\\.png$|apple-icon\\.png$).+)",
        has: [{ type: "host", value: CIBS_HOST }],
        destination: `${SITE_URL}/:path`,
        permanent: false,
      },
    ];
  },
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/",
          has: [{ type: "host", value: CIBS_HOST }],
          destination: "/cibs-pucallpa",
        },
        {
          source: "/:archivo(robots\\.txt|sitemap\\.xml)",
          has: [{ type: "host", value: CIBS_HOST }],
          destination: "/cibs-seo/:archivo",
        },
      ],
    };
  },
};

export default nextConfig;
