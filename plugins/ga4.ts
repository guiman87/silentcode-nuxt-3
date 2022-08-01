export default defineNuxtPlugin((nuxtApp) => {
  const script: string =
    "window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-FJ23YM1HJZ');"

  useHead({
    script: [
      {
        src: 'https://www.googletagmanager.com/gtag/js?id=G-FJ23YM1HJZ',
        async: true,
      },
      { children: script },
    ],
  })
})
