import { useState } from '#app'

type selectedTheme = 'light' | 'dark'

export const setTheme = (newTheme: selectedTheme): void => {
  const storageKey: String = 'colorTheme'
  const colorMode = useState<selectedTheme>('theme-color')

  localStorage.setItem(storageKey, newTheme)

  colorMode.value = newTheme
  useHead({
    htmlAttrs: {
      class: newTheme,
    },
  })
}

export const getTheme = (): void => {
  const isDark: boolean = window.matchMedia(
    '(prefers-color-scheme: dark)'
  ).matches

  const storageKey: String = 'colorTheme'

  const localTheme: String = localStorage.getItem(storageKey)

  if (localTheme) {
    setTheme(localTheme)
  } else if (isDark) {
    setTheme('dark')
  } else {
    setTheme('light')
  }
}

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('app:beforeMount', () => {
    getTheme()
  })
  const script: string =
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
