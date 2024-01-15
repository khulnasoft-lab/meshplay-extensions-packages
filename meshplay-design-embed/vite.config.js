import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import packageJson from "./package.json";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolve(__dirname, "lib/main.jsx"),
      name: "MeshplayDesignEmbed",
      // the proper extensions will be added
      fileName: "meshplay-design-embed",
    },
    rollupOptions: {
      external: [...Object.keys(packageJson.peerDependencies)],
      output: {
        globals: {
          react: "React",
        },
      },
    },
  },
});
