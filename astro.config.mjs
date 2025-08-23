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
      provider: fontProviders.fontsource(),
      name: "Plus Jakarta Sans Variable",
      cssVariable: "--font-pjs",
      weights: ["100 800"]
    }],
    // csp: true
  }
});