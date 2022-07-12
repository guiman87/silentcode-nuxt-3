<template>
  <div>
    <slot />
  </div>
</template>
<script lang="ts" setup>
const themeSelected = useState<selectedTheme>('theme-color')

// Head meta and  html attrs
useHead({
  htmlAttrs: {
    class: themeSelected,
  },
})
</script>
