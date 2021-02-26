<template>
  <section
    class="flex flex-col items-center text-gray-600body-font container px-5 py-12 mx-auto"
  >
    <Heading2> Environment Variables </Heading2>
    <p class="dark:text-gray-400">
      To learn more about env variablels in Vite click
      <a
        class="text-purple-500"
        target="_blank"
        href="https://vitejs.dev/guide/env-and-mode.html"
        >here</a
      >
    </p>
    <div class="flex flex-row items-center mt-8">
      <select
        v-model="selectedKey"
        class="bg-purple-500 text-white rounded-lg p-2 focus:outline-none"
      >
        <option v-for="key in Object.keys(env)" :key="key" :value="key">
          {{ key }}
        </option>
      </select>
      <p class="ml-8 dark:text-white">
        {{ env[selectedKey] }}
      </p>
    </div>
  </section>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue-demi";

export default defineComponent({
  name: "EnvComponent",
  setup: () => {
    const env = import.meta.env;
    const selectedKey = ref(Object.keys(env)[0] || "");
    return { env, selectedKey };
  },
});
</script>
