<template>
  <div
    class="mx-auto max-w-7xl px-3 pt-10 pb-16 md:pt-16 md:pb-20 text-slate-900 dark:text-amber-100"
  >
    <main class="mx-auto items-center">
      <div class="flex md:px-36">
        <div class="flex-initial">
          <img
            v-if="themeSelected"
            class="rounded-full h-32 mx-auto"
            :src="currentAvatar"
            alt="Avatar image"
            width="124"
            height="128"
          />
        </div>
        <div class="flex-1">
          <h1
            class="block md:max-w-3xl mx-auto mt-4 mb-4 dark:text-gray-300 text-slate-900 text-xl"
          >
            I'm Guillermo Dutra Martínez
          </h1>
          <h2
            class="text-3xl md:max-w-3xl mx-auto tracking-tight font-extrabold text-gray-900 md:text-5xl"
          >
            <span class="dark:text-white text-slate-900 block xl:inline"
              >Full Stack</span
            >
            <span class="block text-orange-800 xl:inline">Web developer</span>
          </h2>
          <p
            class="mt-3 mx-auto md:max-w-3xl text-base sm:text-lg md:mt-5 md:text-xl dark:text-gray-300 text-slate-900"
          >
            This is my Personal/Professional Website. The purpose of this
            website is to share my work as a Full Stack Website Developer. Here
            you'll find my
            <nuxt-link to="/portfolio"
              ><span class="text-orange-600">portfolio</span></nuxt-link
            >
            along with my
            <nuxt-link to="/resume"
              ><span class="text-orange-600">resume</span></nuxt-link
            >
          </p>
        </div>
      </div>
    </main>
  </div>
</template>
<script setup lang="ts">
import avatarDarkMode from '@/assets/img/avatar-dark-mode.png'
import avatarLightMode from '@/assets/img/avatar-light-mode.png'

const themeSelected = useState('theme-color')
onMounted(() => {
  themeSelected.value === 'dark' ? avatarDarkMode : avatarLightMode
})

const currentAvatar = computed(() =>
  themeSelected.value === 'dark' ? avatarDarkMode : avatarLightMode
)
</script>
