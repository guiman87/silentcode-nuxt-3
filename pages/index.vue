<template>
  <div class="bg-gradient-to-t from-black to-[#020202] via-[#030120]">
    <div class="mx-auto max-w-7xl px-3 py-6">
      <div
        class="flex flex-col gap-y-3 sm:flex-row sm:items-center sm:justify-between"
      >
        <a href="/demo/astro-boilerplate"
          ><div
            class="flex items-center bg-gradient-to-t from-[#ef6837] to-[#f1781b] bg-clip-text text-2xl font-bold text-transparent"
          >
            <img
              class="rounded-full h-12"
              src="~/assets/img/avatar.jpg"
              alt="Avatar image"
              loading="lazy"
            /></div
        ></a>
        <nav>
          <ul class="flex gap-x-3 font-medium text-gray-200">
            <li class="hover:text-white">
              <nuxt-link to="/resume">Resume</nuxt-link>
            </li>
            <li class="hover:text-white">
              <a href="/demo/astro-boilerplate">GitHub</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    <div class="mx-auto max-w-7xl px-3 pt-12 pb-16 text-amber-100">
      <div class="lg:grid lg:grid-cols-12 lg:gap-8">
        <div class="md:mx-auto lg:col-span-9">
          <div class="">
            <a
              href="#"
              class="inline-flex items-center text-white bg-black rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200"
            >
              <span
                class="px-3 py-0.5 text-white text-xs md:font-semibold leading-5 uppercase tracking-wide bg-orange-900 rounded-full"
                >I'm Guillermo Dutra</span
              >
              <span class="ml-4 text-sm"
                ><nuxt-link to="/resume">Check my resume</nuxt-link></span
              >
              <svg
                class="ml-2 w-5 h-5 text-gray-500"
                x-description="Heroicon name: solid/chevron-right"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
            <h1
              class="mt-4 text-3xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-5xl"
            >
              <span class="block">Full Stack</span>
              <span class="block text-orange-800">web developer</span>
            </h1>
            <p
              class="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl"
            >
              This is my Personal/Profesional Website. The porpuose of this
              website is to share my work as a Full Stack Website Developer.
              Here you'll find my
              <nuxt-link to="/resume"
                ><span class="">portfolio</span></nuxt-link
              >
              along with my
              <nuxt-link to="/resume"><span class="">resume</span></nuxt-link
              >. I'm also planning to add a blog in order to documentate and
              share usefull stuff I do
            </p>
          </div>
        </div>
        <div class="md:mx-auto"></div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
// Head meta and  html attrs
useHead({
  title: 'Resume - Guillermo Dutra',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  charset: 'utf-8',
  meta: [{ name: 'description', content: 'Guillermo Dutra Resume in English' }],
  htmlAttrs: {
    lang: 'en',
    class: 'dark',
  },
  bodyAttrs: {
    class: '',
  },
})
</script>
