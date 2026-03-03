import { siteConfig } from "@/config/site.config";
import JsonLd from "./JsonLd";

const base = siteConfig.siteUrl.replace(/\/$/, "");

interface CourseSchemaProps {
  name: string;
  description: string;
  url: string;
}

/**
 * Course JSON-LD for course/education pages.
 * Skill: schema-markup – name, description, provider (Organization).
 */
export default function CourseSchema({ name, description, url }: CourseSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name,
    description,
    url,
    provider: {
      "@type": "Organization",
      "@id": `${base}/#organization`,
      name: siteConfig.seoBrand,
    },
  };

  return <JsonLd data={schema} />;
}
