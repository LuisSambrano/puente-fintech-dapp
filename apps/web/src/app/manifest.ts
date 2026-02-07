/*
 * Copyright (c) 2026 Luis Sambrano.
 * Licensed under the Business Source License 1.1 (BSL 1.1).
 * See LICENSE file for details.
 *
 * COMMERCIAL USE PROHIBITED without express permission.
 */

import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Puente: Remesas Sin Intermediarios",
    short_name: "Puente",
    description:
      "Envía dinero a Venezuela por <$0.01 en 5 segundos. Sin intermediarios. Blockchain Celo.",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#2ECC71",
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
