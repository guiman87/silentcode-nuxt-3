<template>
  <div>
    <NavBar menu-text="SC" :menu-items="menuItems" />
    <section class="dark:text-gray-500 md:py-10 px-5 py-5 print:bg-white">
      <!-- Resume Header -->
      <ResumeHeaderTop
        name="Guillermo Dutra"
        title="Full Stack Web Development"
      />
      <!-- Column -->
      <div class="print:columns-2 md:columns-3 print:gap-1 md:gap-9">
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
          <ResumeInfoSection
            section-title="SKILLS"
            :items="ResumeSkillsItems"
          />
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
  </div>
</template>
<script lang="ts" setup>
import { Contact, MenuItem, ResumeItem } from '~/types/'

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

// Define the layout
definePageMeta({
  layout: 'career',
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
  address: 'Piriapolis, Uruguay',
  phone: '(+598)92720193',
}

// About me data
const ResumeAboutItems: ResumeItem[] = [
  {
    title: 'Senior Full Stack Developer at Boston Globe Media',
    subtitle: 'Since January 2023',
    content:
      'I am a Senior Full Stack Developer at Boston Globe Media with expertise in WordPress development, Linux system administration, and PHP. I have been working remotely for BGMP, since January 2023. My skills include PHP, JavaScript, Jenkins, and automated test development, among others',
  },
  {
    title: 'Full Stack Websites Developer',
    subtitle: 'Since 2013',
    content:
      'I develop both front-end and back-end components for blogs, institutional sites, landing pages, and internal panels. My expertise includes WordPress, JavaScript frameworks, PHP, and migrating traditional websites to JAMSTACK technology.',
  },
  {
    title: 'Project Manager',
    subtitle: '2018 - 2023',
    content:
      'I managed a small network of blogs, overseeing development tasks and delegating to a small team. Additionally, I worked as an SEO specialist and managed Google Ads campaigns.',
  },
  {
    title: 'Owner at Profesionales.uy',
    subtitle: 'Since 2017',
    content:
      'Profesionales.uy is a platform that enables users to quickly and easily search for and contact Uruguayan professionals across various specialties.',
  },
  {
    title: 'IT Support',
    subtitle: '2006 - 2013',
    content:
      'After graduating from high school with a degree in computer science, I provided IT support to several companies of different sizes.',
  },
]

// Experience data
const ResumeExperienceItems: ResumeItem[] = [
  {
    title: 'Full Stack Developer',
    subtitle: '2013 - Present | Freelance',
    content:
      'I specialize in the creation and modification of websites and web applications, developing both front-end and back-end components. My expertise includes custom themes and plugins, as well as extensive experience using and extending various APIs for different applications. I primarily work with local clients and through the Upwork.com platform.',
  },
  {
    title: 'Front-End Developer',
    subtitle: '2013 - Present | Freelance',
    content:
      'I focus on the creation and modification of front-end web interfaces, with expertise in JavaScript frameworks, especially Vue.js and NUXT.js. I have extensive knowledge of HTML, HTML5, CSS, and SASS.',
  },
  {
    title: 'IT Support',
    subtitle: '2006 - 2013 | Several Companies',
    content:
      'During this period, I worked as an IT support specialist for various companies, providing technical assistance and support.',
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
    subtitle: 'Expert',
    content: 'Experience working with JS Frameworks.',
    // link: 'https://projects.com',
    skills: ['CSS', 'JavaScript', 'Vue.js', 'Nuxt 3', 'Nuxt 2', 'TypeScript'],
  },
  {
    title: 'Other',
    // subtitle: '2017 | JavaScript',
    // content: '',
    // link: 'https://projects.com',
    skills: [
      'Git',
      'Linux Server',
      'Google Analytics',
      'REST-API',
      'Search Console',
      'SEO',
      'Typography',
      'Cypress',
      'Jenkins',
      'PHP',
    ],
  },
]
</script>
<style></style>
