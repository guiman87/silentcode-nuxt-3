export default defineNuxtPlugin((nuxtApp) => {
  const loadAdsScript = document.createElement('script')
  // /loadAdsScript.setAttribute('async', true)
  loadAdsScript.type = 'text/javascript'
  loadAdsScript.setAttribute('crossorigin', 'anonymous')
  const scriptContent = `
  const root = document.getElementsByTagName( 'html' )[0];
  const storageKey = 'colorTheme'
  const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  const localTheme = localStorage.getItem(storageKey)

  if (localTheme) {
    root.className = localTheme
  } else if (!localTheme) {
    root.className = isDark ? 'dark' : 'light'

  }`
  loadAdsScript.append(scriptContent)
  document.head.appendChild(loadAdsScript)
})
