<!-- eslint-disable import/extensions -->
<template>
  <div
    class="mx-auto max-w-7xl px-3 pt-16 pb-16 text-slate-900 dark:text-amber-100"
  >
    <main class="mx-auto px-4 4">
      <a href="/demo/astro-boilerplate"
        ><div
          class="flex items-center bg-gradient-to-t from-[#ef6837] to-[#f1781b] bg-clip-text text-2xl font-bold text-transparent"
        >
          <img
            class="rounded-full h-32 mx-auto"
            src="~/assets/img/avatar.jpg"
            alt="Avatar image"
            loading="lazy"
          /></div
      ></a>
      <div class="text-center">
        <h1 class="block mt-4 mb-4 dark:text-gray-300 text-slate-900 text-xl">
          I'm Guillermo Dutra Martínez
        </h1>
        <h2
          class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl"
        >
          <span class="dark:text-white text-slate-900 block xl:inline"
            >Full Stack</span
          >
          <span class="block text-orange-800 xl:inline">Web developer</span>
        </h2>

        <p
          class="mt-3 max-w-md mx-auto text-base sm:text-lg md:mt-5 md:text-xl md:max-w-3xl dark:text-gray-300 text-slate-900"
        >
          This is my Personal/Profesional Website. The porpuose of this website
          is to share my work as a Full Stack Website Developer. Here you'll
          find my
          <nuxt-link to="/resume"
            ><span class="text-orange-600">portfolio</span></nuxt-link
          >
          along with my
          <nuxt-link to="/resume"
            ><span class="text-orange-600">resume</span></nuxt-link
          >
        </p>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts"></script>
