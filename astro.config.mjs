import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import vercel from "@astrojs/vercel";

export default defineConfig({
  site:"https://portfehv.github.io",
  vite: {
    plugins: [tailwindcss()],
  },
  output: "server",
  adapter: vercel(),
});
