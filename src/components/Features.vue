<template>
  <section class="container px-5 py-12 mx-auto text-gray-600 body-font">
    <div class="flex flex-col w-full mb-8 text-center">
      <Heading1> Installed Vite plugins 📦 </Heading1>
      <p class="dark:text-gray-300">
        You can even find more awesome Vite plugins
        <a
          href="https://github.com/vitejs/awesome-vite"
          target="_blank"
          class="text-green-500"
        >
          here
        </a>
      </p>
    </div>
    <div class="flex flex-wrap -m-2">
      <div class="w-full p-2 md:w-1/2 lg:w-1/3">
        <Feature
          title="⚡️ vite-plugin-vue2"
          text="Vue 2 support for Vite"
          url="https://github.com/underfin/vite-plugin-vue2"
        />
      </div>
      <div class="w-full p-2 md:w-1/2 lg:w-1/3">
        <Feature
          title="🔥 unplugin-vue2-script-setup"
          text="Syntax support for the new script setup"
          url="https://github.com/antfu/unplugin-vue2-script-setup"
        />
      </div>
      <div class="w-full p-2 md:w-1/2 lg:w-1/3">
        <Feature
          title="📦 unplugin-components"
          text="Importing Vue components on-demand"
          url="https://github.com/antfu/unplugin-vue-components"
        />
      </div>
      <div class="w-full p-2 md:w-1/2 lg:w-1/3">
        <Feature
          title="📥 unplugin-auto-import"
          text="Importing APIs like CompositionAPI on-demand"
          url="https://github.com/antfu/unplugin-auto-import"
        />
      </div>
      <div class="w-full p-2 md:w-1/2 lg:w-1/3">
        <Feature
          title="🎨 vite-plugin-windicss"
          text="Easy WindiCSS integration"
          url="https://github.com/windicss/vite-plugin-windicss"
        />
      </div>
      <div class="w-full p-2 md:w-1/2 lg:w-1/3">
        <Feature
          title="😃 unplugin-icons"
          text="Importing icons as Vue components on-demand"
          url="https://github.com/antfu/unplugin-icons"
        />
      </div>
    </div>
  </section>
</template>
