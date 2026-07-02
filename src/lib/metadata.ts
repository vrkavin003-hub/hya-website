import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

export function createMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const url = new URL(path, siteConfig.url).toString();
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      type: "website",
      locale: "en_IN",
      images: [
        {
          url: `${siteConfig.url}/images/factory-team.jpg`,
          width: 1500,
          height: 844,
          alt: "HYA Tech precision manufacturing and automation",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${siteConfig.url}/images/factory-team.jpg`],
    },
  };
}
