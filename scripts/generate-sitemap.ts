import fs from "fs";
import path from "path";

const DOMAIN = "https://www.ramferno.com";

export const routes = [
  "/",
  "/robots",
  "/competition",
  "/outreach",
  "/sponsorship",
  "/contact",
];

const urls = routes
  .map((route) => {
    return `
  <url>
    <loc>${DOMAIN}${route}</loc>
    <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
    <priority>${route === "/" ? "1.0" : "0.8"}</priority>
  </url>`;
  })
  .join("");

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

const outputPath = path.join("public", "sitemap.xml");
fs.writeFileSync(outputPath, sitemap, { encoding: "utf-8" });
