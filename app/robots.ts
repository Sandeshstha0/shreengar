import type { MetadataRoute } from "next";

const BASE_URL = "https://www.shreengar.com.np";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",

         disallow: [
          "/admin",
          "/dashboard",
          "/api",
          "/login",
          "/register",
         ],
      },
    ],

    sitemap: `${BASE_URL}/sitemap.xml`,

    host: BASE_URL,
  };
}