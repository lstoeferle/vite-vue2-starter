<template>
  <header class="text-gray-600 body-font dark:bg-gray-800">
    <div
      class="container flex flex-col flex-wrap items-center p-5 mx-auto md:flex-row"
    >
      <RouterLink
        :to="{ name: 'Home' }"
        class="flex items-center mb-4 font-medium text-gray-900 title-font md:mb-0"
      >
        <img alt="Vite logo" src="@/assets/vite-logo.svg" width="36px">
        <span class="ml-3 text-xl dark:text-white">
          {{ appName }}
        </span>
      </RouterLink>
      <nav
        class="flex flex-wrap items-center justify-center text-base md:ml-auto"
      >
        <RouterLink
          v-for="(route, index) in availableRoutes"
          :key="index"
          class="mr-5 font-semibold cursor-pointer"
          :class="{
            'text-green-500 hover:green-500 dark:text-green-500 dark:hover:text-green-500 underline':
              route.name === currentRoute.name,
            'hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200':
              route.name !== currentRoute.name,
          }"
          :to="{ name: route.name }"
        >
          {{ route.name }}
        </RouterLink>
        <RouterLink
          class="flex items-center justify-center mr-2 text-black w-9 h-9 dark:text-white"
          to="/aliens"
        >
          <MdiAlien />
        </RouterLink>
        <a
          href="https://github.com/lstoeferle/vite-vue2-windicss-starter"
          target="_blank"
          class="flex items-center justify-center mr-2 text-black w-9 h-9 dark:text-white"
        >
          <MdiGithub />
        </a>
        <button
          class="flex items-center justify-center w-9 h-9 focus:outline-none"
          @click="toggle"
        >
          <MdiWhiteBalanceSunny v-if="isDark" class="text-yellow-500" />
          <MdiMoonWaningCrescent v-else class="text-gray-800" />
        </button>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { routes } from '@/router'

// Import config from .env
const appName = import.meta.env.VITE_APP_NAME

const availableRoutes = routes.filter(route => route.name !== 'NotFound')
const currentRoute = computed(() => getCurrentInstance()?.proxy?.$route)

const isDark = useDark()
const toggle = useToggle(isDark)
</script>
