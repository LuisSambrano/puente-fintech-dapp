import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Puente: Bóveda Digital",
    short_name: "Puente",
    description:
      "Envía, Ahorra y Gasta sin fronteras. La evolución de las remesas en Venezuela.",
    start_url: "/",
    display: "standalone",
    background_color: "#F9FAFB",
    theme_color: "#2EB078",
    icons: [
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    orientation: "portrait-primary",
    categories: ["finance", "productivity", "social"],
  };
}
