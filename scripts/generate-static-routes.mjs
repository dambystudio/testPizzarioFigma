import { mkdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";

const outputDirectory = "dist/spa";
const source = await readFile(join(outputDirectory, "index.html"), "utf8");

const escapeAttribute = (value) =>
  value.replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");

function replaceMeta(html, selector, value) {
  const escaped = escapeAttribute(value);
  const expression = new RegExp(`(<meta\\s+(?:name|property)="${selector}"\\s+content=")[^"]*("\\s*\\/?>)`, "i");
  return html.replace(expression, `$1${escaped}$2`);
}

function createPage({ title, description, canonical, robots = "index, follow", ogType = "website" }) {
  let html = source.replace(/<title>[^<]*<\/title>/i, `<title>${title}</title>`);
  html = replaceMeta(html, "title", title);
  html = replaceMeta(html, "description", description);
  html = replaceMeta(html, "robots", robots);
  html = replaceMeta(html, "og:type", ogType);
  html = replaceMeta(html, "og:url", `https://pizzariosgr.it${canonical}`);
  html = replaceMeta(html, "og:title", title);
  html = replaceMeta(html, "og:description", description);
  html = replaceMeta(html, "twitter:url", `https://pizzariosgr.it${canonical}`);
  html = replaceMeta(html, "twitter:title", title);
  html = replaceMeta(html, "twitter:description", description);
  html = html.replace(/<link rel="canonical" href="[^"]*"\s*\/>/i, `<link rel="canonical" href="https://pizzariosgr.it${canonical}" />`);
  return html;
}

const menuDirectory = join(outputDirectory, "menu");
await mkdir(menuDirectory, { recursive: true });
const menuBreadcrumb = `
  <script type="application/ld+json">
    ${JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://pizzariosgr.it/" },
        { "@type": "ListItem", position: 2, name: "Menu", item: "https://pizzariosgr.it/menu/" },
      ],
    })}
  </script>`;

const menuPage = createPage({
  title: "Menu PizzaRio: pizze, panini e prezzi | San Giovanni Rotondo",
  description: "Consulta il menu PizzaRio con pizze, panini, panzerotti, bevande e prezzi. Pizzeria italo-brasiliana a San Giovanni Rotondo: chiama e prenota.",
  canonical: "/menu/",
}).replace("</head>", `${menuBreadcrumb}\n</head>`);
await writeFile(join(menuDirectory, "index.html"), menuPage);

let notFound = createPage({
  title: "Pagina non trovata | PizzaRio",
  description: "La pagina richiesta non è disponibile.",
  canonical: "/404",
  robots: "noindex, nofollow",
});
notFound = notFound
  .replace(/\s*<link rel="canonical"[^>]*>/i, "")
  .replace(/\s*<!-- Schema\.org Structured Data[\s\S]*?<\/script>/i, "\n\n  <!-- Structured data omitted on the 404 response -->");
await writeFile(join(outputDirectory, "404.html"), notFound);
