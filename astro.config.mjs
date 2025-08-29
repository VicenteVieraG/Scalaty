import { defineConfig, fontProviders } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://www.scalaty.solutions",
  image: {
    responsiveStyles: true,
    layout: "constrained"
  },
  vite: {
    plugins: [tailwindcss()]
  },
  experimental: {
    fonts: [{
      provider: fontProviders.google(),
      name: "Plus Jakarta Sans",
      cssVariable: "--font-pjs",
      weights: ["200 800"]
    }],
    // csp: true
  }
});