<template>
  <div
    class="flex flex-col h-full p-8 bg-gray-100 rounded-lg items dark:bg-gray-700"
  >
    <Heading2>
      {{ title }}
    </Heading2>

    <div class="flex flex-col flex-grow">
      <p class="flex-grow text-base leading-relaxed dark:text-gray-300">
        {{ text }}
      </p>
      <a
        :href="url"
        target="_blank"
        class="inline-flex items-center mt-3 text-green-500"
      >
        Learn More
        <MdiArrowRight class="ml-1" />
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: { type: String, required: true },
  text: { type: String, required: true },
  url: { type: String, required: true },
})
</script>
