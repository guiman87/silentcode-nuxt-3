<!-- eslint-disable import/extensions -->
<template>
  <!-- Name -->
  <header
    class="flex items-center print:mb-5 mb-8 md:mb-11 border-b-4 print:border-b-2 print:pb-2 pb-8 justify-between"
  >
    <div class="block">
      <h1
        class="mb-0 print:text-2xl md:text-4xl sm:text-lg font-bold text-gray-750 dark:text-gray-100"
      >
        {{ name }}
      </h1>
      <h2
        class="mb-2 md:text-1xl font-semibold text-gray-700 dark:text-gray-500 leading-snugish"
      >
        {{ title }}
      </h2>
    </div>

    <span
      class="inline-flex items-center justify-center h-16 w-16 rounded-full bg-gray-500"
    >
      <span class="text-xl font-bold leading-none text-white"
        >{{ nameInitials.initials.name
        }}{{ nameInitials.initials.lastname }}</span
      >
    </span>
  </header>
  <!-- end Name -->
</template>

<script setup lang="ts">
import { Person } from '~/types'

const props = defineProps<{
  name: String
  title: String
}>()

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
