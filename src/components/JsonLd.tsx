import { jsonLdString } from "@/lib/site";

/** Renders schema.org structured data as a native <script> tag (server-rendered). */
export default function JsonLd({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: jsonLdString(data) }}
    />
  );
}

