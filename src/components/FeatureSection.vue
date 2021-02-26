<template>
  <section class="text-gray-600 body-font container px-5 py-12 mx-auto">
    <div class="flex flex-col text-center w-full mb-8">
      <Heading2> Installed Vite plugins </Heading2>
    </div>
    <div class="flex flex-wrap -m-4">
      <div class="pr-4 py-4 md:w-1/3">
        <Feature
          title="vite-plugin-vue2"
          text="Vue 2 support for Vite"
          url="https://github.com/underfin/vite-plugin-vue2"
        />
      </div>
      <div class="p-4 md:w-1/3">
        <Feature
          title="vite-plugin-components"
          text="On demand components auto importing for Vite"
          url="https://github.com/antfu/vite-plugin-components"
        />
      </div>
      <div class="pl-4 py-4 md:w-1/3">
        <Feature
          title="vite-plugin-windicss"
          text="Windi CSS for Vit"
          url="https://github.com/windicss/vite-plugin-windicss"
        />
      </div>
    </div>
  </section>
</template>
