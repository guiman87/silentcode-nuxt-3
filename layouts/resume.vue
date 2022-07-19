<template>
  <main
    class="font-firago hyphens-manual print:bg-white dark:bg-gradient-to-t dark:from-black dark:to-[#020202] dark:via-[#030120]"
  >
    <NavBar menu-text="SC" :menu-items="menuItems" />
    <div class="max-w-7xl mx-auto print:bg-white print:px-0 md:px-10 md:py-4">
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
    href: 'https://github.com/guiman87/',
    text: 'Github',
  },
]
</script>
