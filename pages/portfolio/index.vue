<template>
  <div>
    <!-- NavBar -->
    <NavBar menu-text="SC" :menu-items="menuItems" />
    <section class="dark:text-gray-500 md:py-10 px-5 py-5 print:bg-white">
      <!-- Portfolio Header -->
      <PortfolioHeaderTop name="Guillermo Dutra" title="Portfolio" />
      <!-- Portfolio List -->
      <PortfolioProjectList :items="projectItems" />
      <!-- end Page -->
    </section>
    <ContactButtons />
  </div>
</template>
<script lang="ts" setup>
import { ResumeItem, Contact, MenuItem, Project, PortfolioItem } from '~/types/'

// Menu items
const menuItems: MenuItem[] = [
  {
    to: '/portfolio',
    text: 'Portfolio',
  },
  {
    to: '/resume',
    text: 'Resume',
  },
]

const projectItems: PortfolioItem[] = [
  {
    name: 'JAMStackPress (Wordpress Plugin)',
    title: 'Creator/Developer',
    description:
      'This plugin extends the WP-JSON API by adding a new useful set of fields to the WP-JSON API response, this new set of fields will make your front-end development easier.',
    date: '01/2021 - ',
    link: 'https://wordpress.org/plugins/jamstackpress/',
  },
  {
    name: 'SilentCode.dev',
    title: 'Full-Stack Web Developer',
    description:
      'This is my Personal/Profesional Website. The porpuose of this website is to share my work as a Full Stack Website Developer. Here youll find my portfolio along with my resume',
    date: '01/2021 - ',
    link: 'https://github.com/guiman87/silentcode-nuxt-3',
  },
  {
    name: 'SpyApps.io',
    title: 'Full-Stack Web Developer',
    description:
      'SpyApps - The web corner for spies with good intentions (Multilingual Blog) Wordpress PHP (WP-JSON API) as Backend + NUXT.js (Vue.js Javascript framework) at the front end',
    date: '01/2021 - ',
    link: 'https://spyapps.io',
  },
  {
    name: 'Ico.uy',
    title: 'Full-Stack Web Developer',
    description:
      'Online store selling wooden made toys and furniture aiming kids. Wordpress (PHP)  Woocommerce web development I was in charge of  buying, customize and installl  the Wordpress website. Setup of initials Gooogle Ads campaings',
    date: '01/2020 - ',
    link: 'https://ico.uy',
  },
  {
    name: 'MutateAPP.com',
    title: 'Full-Stack Web Developer',
    description:
      'Free online tool to convert texts/numbers automatically. From uppercase to lowercase, uppercase only after the point, from numbers to words, from numbers to Roman numerals, lowercase to uppercase, Roman numerals to common numbers, among other conversion options.',
    date: '01/2020 - ',
    link: 'https://mutateapp.com',
  },
  {
    name: 'Aplicativosbr.guru',
    title: 'Full-Stack Web Developer',
    description:
      'This is a web portal that offers updated information about different applications and platforms to work and earn money in Brazil. Wordpress PHP (WP-JSON API) as Backend + NUXT.js (Vue.js Javascript framework) at the front end',
    date: '01/2019 - ',
    link: 'https://aplicativosbr.guru',
  },
  {
    name: 'Aquimequejo.com',
    title: 'Full-Stack Web Developer',
    description:
      'Informative web portal, dedicated to providing up-to-date contact information of recognized companies belonging to a wide variety of fields, so that users from all over the world can make their queries, claims or complaints. Wordpress PHP (WP-JSON API) as Backend + NUXT.js (Vue.js Javascript framework) at the front end',
    date: '01/2018 - ',
    link: 'https://aquimequejo.com/',
  },
  {
    name: 'Capplatam.com',
    title: 'Full-Stack Web Developer',
    description:
      'Latin American community of application drivers News and guides to become a driver / delivery person for Uber, Uber Eats, DiDi, Cabify, Beat, OrdensYa, Glovo, Rappi and many other apps. Wordpress PHP (WP-JSON API) as Backend + NUXT.js (Vue.js Javascript framework) at the front end (HTML, CSS, SASS and HTML5)',
    date: '01/2017 - ',
    link: 'https://capplatam.com',
  },
  {
    name: 'Profesionales.uy',
    title: 'Founder / Developer',
    description:
      'Founder and full stack web developer. Back and front is Wordpress (PHP). Im on the process of decoupling the front end using Vue.js (nuxt.js Javascript framework). Profesionales.Uy is a website to quickly and easily search for and contact Uruguayan professionals in different specialties. very similar to Yelp',
    date: '01/2017 - ',
    link: 'https://profesionales.uy',
  },
  {
    name: 'Criptodinero.es',
    title: 'Co-Owner / Developer',
    description:
      'Bitcoin, Ethereum, ICO, Blockchain and Cryptocurrency Blog News Wordpress PHP (WP-JSON API) as Backend + NUXT.js (Vue.js Javascript framework) at the front end',
    date: '01/2017 - ',
    link: 'https://criptodinero.es',
  },
  // More projects...
]

// Define the layout
definePageMeta({
  layout: 'career',
})

// Head meta and  html attrs
useHead({
  title: 'Portfolio - Guillermo Dutra',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  charset: 'utf-8',
  meta: [
    { name: 'description', content: 'Guillermo Dutra Portfolio in English' },
  ],
  htmlAttrs: {
    lang: 'en',
  },
})
</script>
<style></style>
