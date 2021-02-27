import path from "path";
import { defineConfig } from "vite";
import { createVuePlugin } from "vite-plugin-vue2";
import ViteComponents from "vite-plugin-components";
import WindiCSS from "vite-plugin-windicss";
import ViteIcons, { ViteIconsResolver } from "vite-plugin-icons";

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
    createVuePlugin(),
    ViteComponents({
      customComponentResolvers: [
        ViteIconsResolver({
          componentPrefix: "",
        }),
      ],
    }),
    ViteIcons({
      defaultStyle: "",
    }),
    WindiCSS(),
  ],

  server: {
    port: 8080,
  },
});

export default config;
