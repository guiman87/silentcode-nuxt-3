<!-- eslint-disable import/extensions -->
<template>
  <button :show="themeSelected" @click="changeColor" class="inline-block">
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      class="-ml-1 mr-2 h-8 w-8 dark:text-gray-300 text-slate-900"
      viewBox="0 0 576 512"
    >
      <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
      <path :d="themeIcon" />
    </svg>
  </button>
</template>

<script setup lang="ts">
// Get Selected theme
const themeSelected = useState('theme-color')

// Declared  icon selection
const themeIcon = ref()

// Load  provider added by dark mode plugin
const { $setTheme } = useNuxtApp()

const darkIcon: string =
  'M384 64C490 64 576 149.1 576 256C576 362 490 448 384 448H192C85.96 448 0 362 0 256C0 149.1 85.96 64 192 64H384zM384 352C437 352 480 309 480 256C480 202.1 437 160 384 160C330.1 160 288 202.1 288 256C288 309 330.1 352 384 352z'
const lightIcon: string =
  'M192 352C138.1 352 96 309 96 256C96 202.1 138.1 160 192 160C245 160 288 202.1 288 256C288 309 245 352 192 352zM384 448H192C85.96 448 0 362 0 256C0 149.1 85.96 64 192 64H384C490 64 576 149.1 576 256C576 362 490 448 384 448zM384 128H192C121.3 128 64 185.3 64 256C64 326.7 121.3 384 192 384H384C454.7 384 512 326.7 512 256C512 185.3 454.7 128 384 128z'

onMounted(() => {
  themeIcon.value = themeSelected.value === 'dark' ? darkIcon : lightIcon
})

watch(themeSelected, (newValue) => {
  themeIcon.value = newValue === 'dark' ? darkIcon : lightIcon
})

function changeColor(): void {
  if (themeSelected.value === 'dark') {
    $setTheme('light')
  } else {
    $setTheme('dark')
  }
}
</script>
