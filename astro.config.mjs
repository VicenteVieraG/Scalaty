import { defineConfig, fontProviders } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://www.scalaty.solutions",
  vite: {
    plugins: [tailwindcss()]
  },
  experimental: {
    fonts: [{
      provider: fontProviders.fontsource(),
      name: "Plus Jakarta Sans Variable",
      cssVariable: "--font-pjs",
      weights: ["100 900"]
    }],
    // csp: true
  }
});