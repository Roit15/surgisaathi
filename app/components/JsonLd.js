/**
 * Render JSON-LD blob into the document.
 *
 * Usage:
 *   <JsonLd data={organizationSchema()} />
 *   <JsonLd data={[orgSchema(), websiteSchema()]} />
 *
 * Server component. The script tags are inlined into the HTML so the data
 * is available to crawlers without executing client-side JS.
 */
export default function JsonLd({ data }) {
  if (!data) return null;
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
