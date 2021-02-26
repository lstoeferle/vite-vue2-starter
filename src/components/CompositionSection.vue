<template>
  <section
    class="flex flex-col items-center text-gray-600 body-font container px-5 py-12 mx-auto"
  >
    <Heading2> Composition API </Heading2>
    <p class="mt-8 dark:text-gray-400">
      Switch to the dark side
      <ButtonPrimary class="ml-4" @click.native="toggle">Toggle</ButtonPrimary>
    </p>
  </section>
</template>

<script lang="ts">
import { useDark, useToggle } from "@vueuse/core";
import { defineComponent } from "vue-demi";

export default defineComponent({
  name: "CompositionSection",
  setup: () => {
    const toggle = useToggle(useDark());
    return { toggle };
  },
});
</script>
