import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "HYA TECH",
    short_name: "HYA TECH",
    description:
      "Precision manufacturing, industrial automation, fixtures, and engineering solutions.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#ffffff",
    icons: [
      {
        src: "/images/logo.jpeg",
        sizes: "591x416",
        type: "image/jpeg",
      },
    ],
  };
}
