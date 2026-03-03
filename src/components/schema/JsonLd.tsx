/**
 * Renders JSON-LD structured data (schema.org).
 * Use in head or body; server-rendered for SEO.
 */
export default function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
