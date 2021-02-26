import path from "path";
import { defineConfig } from "vite";
import { createVuePlugin } from "vite-plugin-vue2";
import ViteComponents from "vite-plugin-components";
import WindiCSS from "vite-plugin-windicss";

const config = defineConfig({
  resolve: {
    alias: {
      "@": `${path.resolve(__dirname, "src")}`,
    },
    dedupe: ["vue-demi"],
  },

  build: {
    minify: true,
  },

  plugins: [
    createVuePlugin({}),
    ViteComponents({ transformer: "vue2" }),
    WindiCSS(),
  ],

  server: {
    port: 8080,
  },
});

export default config;
