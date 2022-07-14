import { selectedTheme } from '~/types/index.ts'
import { useState } from '#app'

export const setTheme = (newTheme: selectedTheme) => {
  const storageKey = 'colorTheme'
  const colorMode = useState<selectedTheme>('theme-color')
  localStorage.setItem(storageKey, newTheme)
  colorMode.value = newTheme
  useHead({
    htmlAttrs: {
      class: newTheme,
    },
  })
}
