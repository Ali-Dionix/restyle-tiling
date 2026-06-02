import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Restyle Wall & Floor Tiling",
    short_name: "Restyle Tiling",
    description:
      "Professional wall and floor tiling services with clean workmanship, careful preparation, and high-quality finishing.",
    start_url: "/",
    display: "standalone",
    background_color: "#092B4F",
    theme_color: "#092B4F",
    icons: [
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
