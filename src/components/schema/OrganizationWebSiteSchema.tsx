import { siteConfig } from "@/config/site.config";
import JsonLd from "./JsonLd";

/**
 * Organization + WebSite JSON-LD for layout (all pages).
 * Skill: schema-markup – required: name, url; recommended: logo, contactPoint.
 */
export default function OrganizationWebSiteSchema() {
  const base = siteConfig.siteUrl.replace(/\/$/, "");

  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${base}/#organization`,
        name: siteConfig.seoBrand,
        alternateName: siteConfig.companyLegalName,
        url: base,
        logo: `${base}/logo.png`,
        email: siteConfig.footer.email,
        contactPoint: {
          "@type": "ContactPoint",
          email: siteConfig.footer.email,
          contactType: "customer service",
          areaServed: "DE",
        },
      },
      {
        "@type": "WebSite",
        "@id": `${base}/#website`,
        url: base,
        name: siteConfig.seoBrand,
        publisher: { "@id": `${base}/#organization` },
      },
    ],
  };

  return <JsonLd data={graph} />;
}
