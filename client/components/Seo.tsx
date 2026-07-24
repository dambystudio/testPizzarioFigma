import { useEffect } from "react";

type SeoProps = {
  title: string;
  description: string;
  canonical?: string;
  robots?: string;
  ogType?: "website" | "restaurant";
};

const siteUrl = "https://pizzariosgr.it";

function setMeta(selector: string, attribute: "name" | "property", key: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(selector);

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  element.content = content;
}

export function Seo({
  title,
  description,
  canonical,
  robots = "index, follow",
  ogType = "website",
}: SeoProps) {
  useEffect(() => {
    document.title = title;
    setMeta('meta[name="title"]', "name", "title", title);
    setMeta('meta[name="description"]', "name", "description", description);
    setMeta('meta[name="robots"]', "name", "robots", robots);

    const canonicalElement = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (canonical) {
      const link = canonicalElement ?? document.createElement("link");
      link.rel = "canonical";
      link.href = `${siteUrl}${canonical}`;
      if (!canonicalElement) document.head.appendChild(link);
    } else {
      canonicalElement?.remove();
    }

    const absoluteUrl = canonical ? `${siteUrl}${canonical}` : siteUrl;
    setMeta('meta[property="og:type"]', "property", "og:type", ogType);
    setMeta('meta[property="og:url"]', "property", "og:url", absoluteUrl);
    setMeta('meta[property="og:title"]', "property", "og:title", title);
    setMeta('meta[property="og:description"]', "property", "og:description", description);
    setMeta('meta[property="twitter:url"]', "property", "twitter:url", absoluteUrl);
    setMeta('meta[property="twitter:title"]', "property", "twitter:title", title);
    setMeta('meta[property="twitter:description"]', "property", "twitter:description", description);
  }, [canonical, description, ogType, robots, title]);

  return null;
}
