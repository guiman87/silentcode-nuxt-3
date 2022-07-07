<!-- eslint-disable import/extensions -->
<template>
  <div class="print:mt-1 mt-8 first:mt-0">
    <!-- To keep in the same column -->
    <section class="mb-4 print:mb-1 break-inside-avoid print:break-inside-auto">
      <h2
        class="mb-4 text-md print:mb-2 print:text-md font-bold tracking-normal text-gray-550"
      >
        {{ sectionTitle }}
      </h2>

      <section
        v-for="(item, index) in items"
        class="mb-4 print:mb-1 break-inside-avoid"
      >
        <header>
          <h3
            v-if="item.link"
            class="font-semibold print:text-md text-gray-800"
          >
            <a :href="item.link" class="group">
              {{ item.title }}
              <span
                class="inline-block text-gray-550 print:text-black group-hover:text-gray-700"
                >⤴</span
              >
            </a>
          </h3>
          <h3 v-else class="font-semibold print:text-md text-gray-800">
            {{ item.title }}
          </h3>

          <p
            v-if="item.subtitle"
            class="text-md print:text-sm text-gray-700 print:text-gray-800"
          >
            {{ item.subtitle }}
          </p>
        </header>
        <p
          v-if="item.content"
          class="my-2 print:my-1 text-md print:text-sm leading-snug text-gray-700"
          v-html="item.content"
        ></p>
        <div v-if="item.skills" class="print:my-1 my-3 last:pb-1">
          <ul class="flex flex-wrap print:text-sm text-md leading-relaxed">
            <li
              v-for="(skill, index) in item.skills"
              class="print:py-1 px-3 py-2 rounded-full text-gray-500 print:bg-gray-600 print:text-white bg-gray-200 font-semibold text-xs flex align-center w-max mr-1 my-1"
            >
              {{ skill }}
            </li>
          </ul>
        </div>
      </section>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ResumeItem } from '~/types/index.ts'

const props = defineProps<{
  sectionTitle: String
  items: Array<ResumeItem>
}>()
</script>
