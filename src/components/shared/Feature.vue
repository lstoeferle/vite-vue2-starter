<template>
  <div
    class="flex rounded-lg h-full bg-gray-100 p-8 flex-col items dark:bg-gray-700"
  >
    <Heading3>
      {{ title }}
    </Heading3>

    <div class="flex flex-col flex-grow">
      <p class="flex-grow leading-relaxed text-base dark:text-gray-400">
        {{ text }}
      </p>
      <a
        :href="url"
        target="_blank"
        class="mt-3 text-indigo-500 inline-flex items-center"
        >Learn More
        <svg
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          class="w-4 h-4 ml-2"
          viewBox="0 0 24 24"
        >
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue-demi";

export default defineComponent({
  name: "Feature",
  props: {
    title: { type: String, required: true },
    text: { type: String, required: true },
    url: { type: String, required: true },
  },
});
</script>
