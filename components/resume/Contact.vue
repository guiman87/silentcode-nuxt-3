<!-- eslint-disable import/extensions -->
<template>
  <section class="mt-8 first:mt-0">
    <!-- To keep in the same column -->
    <div class="break-inside-avoid">
      <h2
        class="mb-4 font-bold tracking-widest text-sm2 text-gray-550 print:font-normal"
      >
        {{ sectionTitle }}
      </h2>

      <section class="mb-4.5 break-inside-avoid">
        <ul class="list-inside pr-7">
          <li
            v-if="web"
            class="mt-1.5 leading-normal dark:text-gray-400 text-gray-700 text-md"
          >
            <a :href="'https://' + web" class="group">
              {{ web }}
              <span
                class="inline-block text-gray-550 print:text-black dark:text-gray-400 font-normal group-hover:text-gray-700 transition duration-100 ease-in"
                >↗</span
              >
            </a>
          </li>
          <li
            class="mt-1.5 leading-normal dark:text-gray-400 text-gray-700 text-md"
          >
            {{ address }}
          </li>
          <li
            class="mt-1.5 leading-normal dark:text-gray-400 text-gray-700 text-md"
          >
            {{ email }}
          </li>
          <li
            class="mt-1.5 leading-normal dark:text-gray-400 text-gray-700 text-md"
          >
            {{ phone }}
          </li>
        </ul>
      </section>
    </div>
  </section>
</template>

<script setup lang="ts">
const props = defineProps<{
  sectionTitle: String
  web: String
  address: String
  email: String
  phone: String
  items: Array<ResumeItem>
}>()
</script>
