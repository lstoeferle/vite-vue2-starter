<template>
  <div id="app" class="pt-15 flex flex-col items-center">
    <img alt="Vue logo" src="@/assets/logo.svg" width="200" />
    <MyComponent />
    <p class="mt-8">
      {{ timestamp }}
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue-demi";
import { useTimestamp } from "@vueuse/core";

export default defineComponent({
  name: "App",
  setup: () => {
    const { timestamp } = useTimestamp();
    return { timestamp };
  },
});
</script>
