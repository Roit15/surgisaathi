/**
 * Render one or more JSON-LD blobs into the document.
 *
 * Usage:
 *   <JsonLd data={organizationSchema()} />
 *   <JsonLd data={[orgSchema(), websiteSchema()]} />
 *
 * Server component. The script tags are inlined into the HTML so the data
 * is available to crawlers without executing client-side JS.
 */
export default function JsonLd({ data }) {
  const blobs = Array.isArray(data) ? data : [data];
  return (
    <>
      {blobs.filter(Boolean).map((blob, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(blob) }}
        />
      ))}
    </>
  );
}
