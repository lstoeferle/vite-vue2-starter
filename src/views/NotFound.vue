<template>
  <section class="text-gray-600 body-font">
    <div
      class="container flex flex-col items-center justify-center px-5 py-24 mx-auto"
    >
      <img
        class="object-cover object-center w-5/6 mb-10 rounded lg:w-2/6 md:w-3/6"
        alt="hero"
        src="@/assets/not-found.svg"
      />
      <div class="w-full text-center lg:w-2/3">
        <Heading1 class="text-red-500 dark:text-red-500"
          >404 NOT FOUND</Heading1
        >
        <p class="mb-8 leading-relaxed dark:text-gray-300">
          Oops, looks like you got kidnapped by aliens.
        </p>
        <div class="flex justify-center">
          <RouterLink :to="{ name: 'Home' }">
            <ButtonPrimary> Bring me back Home </ButtonPrimary>
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>
