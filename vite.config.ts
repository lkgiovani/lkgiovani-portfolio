import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

import { cloudflare } from "@cloudflare/vite-plugin";

export default defineConfig({
  plugins: [react(), tailwindcss(), cloudflare()],
  build: {
    rollupOptions: {
      output: {
        // Separa as bibliotecas em pedaços próprios: o navegador baixa em paralelo e
        // mantém em cache entre deploys, já que só o código do site muda com frequência.
        manualChunks: {
          react: ["react", "react-dom", "react-dom/client"],
          motion: ["framer-motion"],
          i18n: ["i18next", "react-i18next", "i18next-browser-languagedetector"],
        },
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});