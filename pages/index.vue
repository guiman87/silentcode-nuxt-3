<template>
  <div
    class="dark:bg-gradient-to-t dark:from-black dark:to-[#020202] dark:via-[#030120] bg-slate-200"
  >
    <NavBar menu-text="SC" :menu-items="menuItems" />

    <HomeHero />
  </div>
</template>
<script setup lang="ts">
import { MenuItem } from '~/types/index.ts'
// Menu items
const menuItems: MenuItem[] = [
  {
    to: '/resume',
    text: 'Resume',
  },
  {
    to: '/portfolio',
    text: 'Portfolio',
  },
  {
    to: '/projects',
    text: 'Projects',
  },
  {
    href: 'https://github.com/guiman87/wp-decoupled',
    text: 'Github',
  },
]

// Head meta and  html attrs
useHead({
  title: 'Home - Guillermo Dutra - Full Stack Web Developer',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  charset: 'utf-8',
  meta: [{ name: 'description', content: 'Guillermo Dutra Profesional  site' }],
  htmlAttrs: {
    lang: 'en',
  },
})
</script>
