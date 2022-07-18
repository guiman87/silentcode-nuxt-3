import { useState } from '#app'

type selectedTheme = 'light' | 'dark'
export const getTheme = () => {
  const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  const storageKey = 'colorTheme'

  const localTheme: selectedTheme = localStorage.getItem(storageKey)

  if (localTheme) {
    setTheme(localTheme)
  } else if (isDark) {
    setTheme('dark')
  } else {
    setTheme('light')
  }
}

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

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('app:beforeMount', () => {
    getTheme()
  })
  const script =
    '(()=>{const e=localStorage.getItem("colorTheme");(!e||e==="auto"?window.matchMedia("(prefers-color-scheme: dark)").matches:e==="dark")&&document.documentElement.classList.add("dark")})();'
  useHead({
    script: [{ children: script }],
  })
  return {
    provide: {
      setTheme,
    },
  }
})