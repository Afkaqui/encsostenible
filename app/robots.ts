import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/_next/",
          "/intranet/",
          "/videos",
          "/propuesta-parlamento-andino",
          "/integridad-democratica",
        ],
      },
    ],
    sitemap: "https://www.encsust4in4ble.earth/sitemap.xml",
  };
}
