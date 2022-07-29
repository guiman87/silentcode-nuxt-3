<!-- eslint-disable import/extensions -->

<template>
  <div class="">
    <div
      class="-mx-4 mt-8 overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:-mx-6 md:mx-0"
    >
      <table class="min-w-full divide-y divide-gray-300">
        <thead class="bg-gray-50 dark:bg-transparent">
          <tr>
            <th
              scope="col"
              class="py-3.5 pl-4 pr-3 text-left font-semibold print:text-md text-gray-800 dark:text-gray-400 sm:pl-6"
            >
              Project
            </th>
            <th
              scope="col"
              class="hidden px-3 py-3.5 text-left font-semibold print:text-md text-gray-800 dark:text-gray-400 lg:table-cell"
            >
              Role
            </th>
            <th
              scope="col"
              class="hidden px-3 py-3.5 text-left font-semibold print:text-md text-gray-800 dark:text-gray-400 sm:table-cell"
            >
              Description
            </th>
            <th
              scope="col"
              class="px-3 py-3.5 text-left font-semibold print:text-md text-gray-800 dark:text-gray-400"
            >
              Date
            </th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-200 bg-white dark:bg-transparent">
          <tr v-for="project in projects" :key="project.title">
            <td
              class="w-full max-w-0 py-4 pr-3 font-semibold print:text-md text-gray-800 dark:text-gray-400 sm:w-auto sm:max-w-none sm:pl-3"
            >
              <a :href="project.link">
                {{ project.name }}
              </a>
              <dl class="font-normal lg:hidden">
                <dd class="mt-1 truncate text-gray-700">
                  {{ project.title }}
                </dd>
                <dd
                  class="mt-1 truncate sm:hidden text-md print:text-sm leading-snug text-gray-700 dark:text-gray-400"
                >
                  {{ project.description }}
                </dd>
              </dl>
            </td>
            <td class="hidden px-3 py-4 text-sm text-gray-500 lg:table-cell">
              {{ project.title }}
            </td>
            <td
              class="hidden px-3 py-4 text-md print:text-sm leading-snug text-gray-700 dark:text-gray-400 sm:table-cell"
            >
              {{ project.description }}
            </td>
            <td class="px-3 py-4 text-sm text-gray-500">{{ project.date }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ResumeItem } from '~/types/index.ts'

const projects = [
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

const props = defineProps<{
  sectionTitle: String
  items: Array<ResumeItem>
}>()
</script>
