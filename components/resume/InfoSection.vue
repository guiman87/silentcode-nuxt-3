<!-- eslint-disable import/extensions -->
<template>
  <section class="mt-8 first:mt-0">
    <!-- To keep in the same column -->
    <section class="break-inside-avoid mb-4.5">
      <h2
        class="mb-4 font-bold tracking-widest text-sm2 text-gray-550 print:font-normal"
      >
        {{ sectionTitle }}
      </h2>

      <section v-for="(item, index) in items" class="mb-4.5 break-inside-avoid">
        <header>
          <h3
            v-if="item.link"
            class="text-lg font-semibold text-gray-700 leading-snugish"
          >
            <a :href="item.link" class="group">
              {{ item.title }}
              <span
                class="inline-block text-gray-550 print:text-black group-hover:text-gray-700 transition duration-100 ease-in"
                >↗</span
              >
            </a>
          </h3>
          <h3
            v-else
            class="text-lg font-semibold text-gray-700 leading-snugish"
          >
            {{ item.title }}
          </h3>

          <p v-if="item.subtitle" class="leading-normal text-md text-gray-650">
            {{ item.subtitle }}
          </p>
        </header>
        <p
          v-if="item.content"
          class="mt-2.1 text-md text-gray-700 leading-normal"
          v-html="item.content"
        ></p>
        <div v-if="item.skills" class="my-3.2 last:pb-1.5">
          <ul class="flex flex-wrap text-md leading-relaxed -mr-1.6 -mb-1.6">
            <li
              v-for="(skill, index) in item.skills"
              class="px-2.5 mr-1.6 mb-1.6 text-base text-gray-750 print:bg-white print:border-inset bg-gray-200"
            >
              {{ skill }}
            </li>
          </ul>
        </div>
      </section>
    </section>
  </section>
</template>

<script setup lang="ts">
import { ResumeItem } from '~/types/index.ts'

const props = defineProps({
  sectionTitle: { type: String, required: true },
  items: { type: Array as () => Array<ResumeItem> },
})
</script>
