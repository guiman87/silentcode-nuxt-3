<template>
  <main
    class="font-firago hyphens-manual bg-slate-300 dark:bg-gray-900 print:bg-white"
  >
    <NavBar menu-text="SC" :menu-items="menuItems" />
    <div
      class="mx-auto container print:bg-white dark:bg-gray-800 print:px-0 md:px-10 md:py-4"
    >
      <slot />
    </div>
  </main>
</template>
<style>
body {
  -webkit-print-color-adjust: exact !important;
}
</style>
<script lang="ts" setup>
import { MenuItem } from '~/types/'

// Menu items
const menuItems: MenuItem[] = [
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
</script>
