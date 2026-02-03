import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "E.M.E.I.E.F. Roberto Turbay",
    short_name: "Roberto Turbay",
    description:
      "Escola Municipal de Ensino Infantil e Fundamental Roberto Turbay - Ariquemes, RO",
    start_url: "/",
    display: "standalone",
    background_color: "#2563EB",
    theme_color: "#2563EB",
    orientation: "portrait-primary",
    categories: ["education"],
    lang: "pt-BR",
    icons: [
      {
        src: "/images/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/images/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
