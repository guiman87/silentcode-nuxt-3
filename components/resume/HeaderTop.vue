<!-- eslint-disable import/extensions -->
<template>
  <!-- Name -->
  <header class="flex items-center mb-8 md:mb-11">
    <div
      class="initials-container mr-5 text-base leading-none text-white bg-gray-700 font-medium print:bg-black px-3"
      style="padding-bottom: 0.6875rem; padding-top: 0.6875rem; /*11px*/"
    >
      <div
        class="initial text-center"
        style="padding-bottom: 0.1875rem; /*3px*/"
      >
        {{ nameInitials.initials.name }}
      </div>
      <div class="text-center initial">
        {{ nameInitials.initials.lastname }}
      </div>
    </div>
    <h1 class="text-2xl font-semibold text-gray-750 pb-px">
      {{ name }}
    </h1>
  </header>
  <!-- end Name -->
</template>

<script setup lang="ts">
import { Person } from '~/types'

const props = defineProps({
  name: { type: String, required: true },
})

const nameInitials = computed<Person>(() => {
  const nameArray: Array<string> = props.name.trim().split(/\s+/)
  const person: Person = {
    initials: {
      name: nameArray[0].split('')[0],
      lastname: nameArray[1].split('')[0],
    },
    name: nameArray[0],
    lastname: nameArray[1],
  }

  return person
})
</script>
