import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import voie from "vite-plugin-voie";

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: "@import \"./src/assets/styles/_variables.scss\";"
      }
    }
  },
  plugins: [
    vue(),
    voie({
      importMode(path) {
        return path.includes("index") ? "sync" : "async";
      }
    })
  ]
});
