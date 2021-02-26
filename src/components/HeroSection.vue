<template>
  <section
    class="text-gray-600 body-fontcontainer mx-auto flex py-12 md:flex-row flex-col items-center"
  >
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <img
        class="object-cover object-center rounded"
        alt="Vite logo"
        src="@/assets/logo.svg"
      />
    </div>
    <div
      class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center"
    >
      <Heading1> Vite - Vue 2 example </Heading1>
      <p class="mb-8 leading-relaxed dark:text-gray-400">
        This example project shows how to speed up your Vue 2 application with
        the next generation frontend tooling Vite.
      </p>
      <div class="flex justify-center">
        <a href="https://vitejs.dev/guide/" target="_blank">
          <ButtonPrimary> Vite docs </ButtonPrimary>
        </a>

        <a href="https://vuejs.org/v2/guide/" target="_blank">
          <ButtonSecondary> Vue docs </ButtonSecondary>
        </a>
      </div>
    </div>
  </section>
</template>
