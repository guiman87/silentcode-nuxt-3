<template>
  <div>
    <slot />
  </div>
</template>
<script lang="ts" setup>
const themeSelected = getTheme()
// Head meta and  html attrs
useHead({
  bodyAttrs: {
    class: themeSelected,
  },
})
</script>
