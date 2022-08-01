<!-- eslint-disable import/extensions -->
<template>
  <!-- Contacts buttons -->
  <div class="flex fixed inset-x-0 bottom-0">
    <div class="flex-1 py-1 text-center bg-white">
      <a
        href="mailto:guilledutra@gmail.com"
        rel="noopener noreferrer"
        class="text-slate-900 px-3 py-2 text-base font-semibold"
        >Email</a
      >
    </div>
    <div class="flex-1 text-center py-1 bg-orange-300">
      <nuxt-link
        to="/resume/"
        rel="noopener noreferrer"
        class="text-slate-900 block text-base font-semibold"
        >Resume</nuxt-link
      >
    </div>
    <div class="flex-1 text-center py-1 bg-[#0072b1]">
      <a
        href="https://www.linkedin.com/in/guillermodutra/"
        rel="noopener noreferrer"
        class="text-white block text-base font-semibold"
        >Linkedin</a
      >
    </div>

    <div class="flex-1 text-center py-1 bg-black">
      <a
        href="https://github.com/guiman87/"
        rel="noopener noreferrer"
        class="text-white text-base font-semibold"
        >Github</a
      >
    </div>
  </div>
</template>

<script setup lang="ts"></script>
