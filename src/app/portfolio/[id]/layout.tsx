import type { Metadata } from "next";
import projects from "@/data/projects.json";
import JsonLd from "@/components/JsonLd";
import { SITE_URL, ORG_ID } from "@/lib/site";

type Params = { id: string };

const findProject = (id: string) => projects.find((p) => p.id === id);

/** Pre-render every portfolio page at build time (faster + fully crawlable). */
export function generateStaticParams(): Params[] {
  return projects.map((p) => ({ id: p.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { id } = await params;
  const project = findProject(id);

  if (!project) {
    return { title: "ไม่พบผลงาน", robots: { index: false, follow: true } };
  }

  const title = `${project.title.th} — ตัวอย่างผลงาน`;
  const description = `${project.description.th} | ผลงานรับทำเว็บไซต์และระบบโดย BigHero Studio พร้อม Interactive Demo ให้ทดลองใช้งาน`;
  const image = project.image?.startsWith("http") ? project.image : project.image || "/logo.png";

  return {
    title,
    description,
    keywords: [...project.tags, "ตัวอย่างเว็บไซต์", "ผลงานรับทำเว็บไซต์", project.title.th, project.title.en],
    alternates: { canonical: `/portfolio/${project.id}` },
    openGraph: {
      title,
      description,
      url: `/portfolio/${project.id}`,
      type: "article",
      images: [{ url: image, alt: project.title.th }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export default async function ProjectLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<Params>;
}) {
  const { id } = await params;
  const project = findProject(id);

  const url = `${SITE_URL}/portfolio/${id}`;
  const image = project?.image
    ? project.image.startsWith("http")
      ? project.image
      : `${SITE_URL}${project.image}`
    : `${SITE_URL}/logo.png`;

  const features = (project as { features?: { th: string[] } } | undefined)?.features?.th;

  const jsonLd = project
    ? {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "CreativeWork",
            "@id": `${url}#work`,
            name: project.title.th,
            alternateName: project.title.en,
            headline: project.title.th,
            description: project.description.th,
            url,
            image,
            inLanguage: "th-TH",
            keywords: project.tags.join(", "),
            genre: project.category,
            creator: { "@id": ORG_ID },
            publisher: { "@id": ORG_ID },
            ...(features ? { abstract: features.join(" • ") } : {}),
          },
          {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "หน้าแรก", item: `${SITE_URL}/` },
              { "@type": "ListItem", position: 2, name: "ผลงาน", item: `${SITE_URL}/portfolio` },
              { "@type": "ListItem", position: 3, name: project.title.th, item: url },
            ],
          },
        ],
      }
    : null;

  return (
    <>
      {jsonLd && <JsonLd data={jsonLd} />}
      {children}
    </>
  );
}

