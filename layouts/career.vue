<template>
  <div
    class="font-firago hyphens-manual print:bg-white dark:bg-gradient-to-t dark:from-black dark:to-[#020202] dark:via-[#030120]"
  >
    <main>
      <div class="max-w-7xl mx-auto print:bg-white print:px-0 md:px-10 md:py-4">
        <slot />
      </div>
    </main>
  </div>
</template>
<style>
body {
  -webkit-print-color-adjust: exact !important;
}
</style>
<script lang="ts" setup></script>
