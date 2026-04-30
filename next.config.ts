import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Permite que Next.js acepte peticiones desde dominios externos como Ngrok */
  allowedDevOrigins: [
    "gauntlet-malt-compacted.ngrok-free.dev",
    "*.ngrok-free.dev", 
    "*.ngrok-free.app", 
    "localhost:3000"
  ],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.ngrok-free.app",
      },
      {
        protocol: "https",
        hostname: "**.ngrok-free.dev", // Lo agregamos aquí también para las imágenes
      },
    ],
  },
};

export default nextConfig;
