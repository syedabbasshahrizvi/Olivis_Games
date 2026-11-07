import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base "./" makes every asset path relative, so the build works on GitHub Pages
// under any repository name (https://user.github.io/<repo>/) without edits.
export default defineConfig({
  base: "./",
  plugins: [react()],
  build: {
    outDir: "dist",
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
          motion: ["framer-motion"],
        },
      },
    },
  },
});
