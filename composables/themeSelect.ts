import { selectedTheme } from '~/types/index.ts'
import { useState } from '#app'

export const setTheme = (newTheme: selectedTheme) => {
  const storageKey = 'colorTheme'
  const colorMode = useState<selectedTheme>('theme-color', () => false)
  localStorage.setItem(storageKey, newTheme)
  colorMode.value = newTheme
}

export const getTheme = () => {
  const storageKey = 'colorTheme'
  onMounted(() => {
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const localTheme = localStorage.getItem(storageKey)

    if (localTheme) {
      setTheme(localTheme)
    } else if (!localTheme) {
      setTheme(isDark ? 'dark' : 'light')
    }
  })

  return useState<selectedTheme>('theme-color')
}
