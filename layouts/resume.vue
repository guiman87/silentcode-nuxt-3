<template>
  <main
    class="font-firago hyphens-manual bg-slate-300 dark:bg-gray-900 print:bg-white"
  >
    <div
      class="mx-auto container print:bg-white dark:bg-gray-800 print:px-0 px-10 py-4"
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
<script lang="ts" setup></script>
