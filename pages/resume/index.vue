<template>
  <section class="bg-white px-10 py-10">
    <!-- Resume Header -->
    <ResumeHeaderTop
      name="Guillermo Dutra"
      title="Full Stack Web Development"
    />
    <!-- Column -->
    <div class="print:columns-2 md:columns-3 print:gap-2 md:gap-9">
      <!-- Resume About Me -->
      <ResumeInfoSection section-title="ABOUT ME" :items="ResumeAboutItems" />

      <!-- Resume Experience -->
      <ResumeInfoSection
        section-title="EXPERIENCE"
        :items="ResumeExperienceItems"
      />

      <!-- Resume Education -->
      <ResumeInfoSection
        section-title="EDUCATION"
        :items="ResumeEducationItems"
      />
      <!-- <ResumeInfoSection section-title="PROJECTS" :items="ResumeProjectsItems" /> -->

      <!-- Resume Skills -->
      <section class="mt-8 first:mt-0">
        <ResumeInfoSection section-title="SKILLS" :items="ResumeSkillsItems" />
      </section>

      <!-- Resume Contact -->
      <ResumeContact
        sectionTitle="CONTACT"
        :web="contactInfo.web"
        :address="contactInfo.address"
        :email="contactInfo.email"
        :phone="contactInfo.phone"
      />
    </div>
    <!-- end Column -->
    <!-- end Page -->
  </section>
</template>
<script lang="ts" setup>
import { ResumeItem, Contact } from '~/types/'

// Define the layout
definePageMeta({
  layout: 'resume',
})

// Head meta and  html attrs
useHead({
  title: 'Resume - Guillermo Dutra',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  charset: 'utf-8',
  meta: [{ name: 'description', content: 'Guillermo Dutra Resume in English' }],
  htmlAttrs: {
    lang: 'en',
  },
})

// Contact info
const contactInfo: Ref<Contact> = {
  web: 'silentcode.dev',
  email: 'info@silentcode.dev',
  address: 'Calle 4, Entre Ruta 72 y calle 12, Playa Verde Uruguay',
  phone: '(+598)92720193',
}

// About me data
const ResumeAboutItems: ResumeItem[] = [
  {
    title: 'Full Stack Websites developer',
    subtitle: 'Since 2013',
    content:
      'Front and backend.Blogs, institutional sites, landing pages and internal panels. Wordpress, Javascript Frameworks, PHP. Migration of traditional websites to JAMSTACK technology',
  },
  {
    title: 'Project Manager',
    subtitle: 'Since 2018',
    content:
      'In charge of a small network of blogs. Tasks related to development and delegation of tasks to a small team. I also work as an SEO specialist and manage Google Ads Campaings.',
  },
  {
    title: 'IT Support',
    subtitle: '2006 - 2013',
  },
]

// Experience data
const ResumeExperienceItems: ResumeItem[] = [
  {
    title: 'Wordpress/PHP Developer',
    subtitle: '2013 - Present | Freelance',
    content:
      'Creation and modification of websites. Development of themes and plugins. Experience using and extending the WP-API JSON for different types of uses. Mainly working for local clients and trough the Upwork.com platform',
  },
  {
    title: 'Front-End Developer',
    subtitle: '2013 - Present | Freelance',
    content:
      'Creation and modification of front end web. Experience with JavaScript frameworks, especially Vue.js and NUXT.js. Extensive domain of HTML, HTML5, CSS, SASS',
  },
  {
    title: 'IT Support',
    subtitle: '2006 - 2013 | Several Companies',
    content:
      'Stage in which I worked as an IT support specialist in different companies.',
  },
]

// Education info
const ResumeEducationItems: ResumeItem[] = [
  {
    title: 'Taller Informático Uruguay',
    subtitle: 'Sep 2015 – Dec 2015| PHP and MySQL Web Development',
    link: 'https://www.tallerdeinformatica.edu.uy/Cursos/detalle/programador-web-phpmysql',
  },
  {
    title: 'O.R.T University Uruguay',
    subtitle: '2008 – 2008 | Linux Server Administrator',
    link: 'https://fi.ort.edu.uy/certificado-en-administracion-de-servidores-linux',
  },
  {
    title: 'First (FCE) - Cambridge English',
    subtitle: 'December 2006 | Cambridge English',
    link: 'https://www.cambridgeenglish.org/exams-and-tests/first/',
  },
  {
    title: 'UTU (Universidad del Trabajo del Uruguay)',
    subtitle: '2003 – 2006 | Bachelor’s Degree in Computer Sciences',
    link: 'https://www.utu.edu.uy/',
  },
]
// Projects info
const ResumeProjectsItems: ResumeItem[] = [
  {
    title: 'Universal Resume',
    subtitle: 'Since 2019 | HTML CSS',
    content:
      'Good design is as little design as possible. Less, but better — because it concentrates on the essential aspects, and the pro­ducts are not burdened with non-essentials.',
    link: 'https://projects.com',
  },
  {
    title: 'tailwindcss-rich-docsy',
    subtitle: '2017 | JavaScript',
    content:
      'Good design is long-lasting. It avoids being fashionable and therefore never appears antiquated. Good design is honest. It does not make a product more innovative, powerful or valuable than it really is.',
    link: 'https://projects.com',
  },
  {
    title: 'Third One',
    subtitle: '2013 – 2014 | Vue',
    content:
      'Good design is innovative. Technological development is always offering new opportunities for innovative design.',
    link: 'https://projects.com',
  },
]
// Skills info
const ResumeSkillsItems: ResumeItem[] = [
  {
    title: 'Wordpress',
    subtitle: 'Expert',
    content: 'Wordpress themes and plugins development',
    // link: 'https://projects.com',
    skills: ['Woocommerce', 'WP-JSON', 'Plugins'],
  },
  {
    title: 'JavaScript',
    subtitle: 'Advanced Level',
    content: 'Experience working with JS Frameworks. JAMSTACK Technology',
    // link: 'https://projects.com',
    skills: ['css', 'JavaScript', 'Vue.js', 'Nuxt 3', 'Nuxt 2'],
  },
  {
    title: 'Other',
    // subtitle: '2017 | JavaScript',
    // content: '',
    // link: 'https://projects.com',
    skills: [
      'JavaScript',
      'Vue.js',
      'Nuxt 3',
      'CSS',
      'Git',
      'Linux Server',
      'Google Analytics',
      'REST-API',
      'Search Console',
      'SEO',
      'Typography',
    ],
  },
]
</script>
<style></style>
