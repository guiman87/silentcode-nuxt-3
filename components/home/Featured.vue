<template>
  <!-- Gradient Feature Section -->
  <div
    class="bg-gradient-to-b dark:to-black dark:from-[#2a1d1d] from-slate-300 to-white"
  >
    <div class="mx-auto py-16 px-4 lg:max-w-7xl">
      <h2
        class="text-4xl text-center font-extrabold dark:text-white text-slate-900 tracking-tight"
      >
        {{ sectionTitle }}
      </h2>

      <div
        class="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-16"
      >
        <div v-for="(item, index) in items">
          <div>
            <span class="flex justify-center">
              <!-- Heroicon name: outline/inbox -->
              <svg
                class="h-10 w-10 dark:text-white text-slate-900"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                :viewBox="item.viewBox"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path :d="item.icon" />
              </svg>
            </span>
          </div>
          <div class="mt-6">
            <h3
              class="text-lg text-center justify-center items-center font-medium dark:text-white text-slate-900"
            >
              {{ item.title }}
            </h3>
            <p
              class="mt-2 text-base text-center dark:text-white text-slate-900"
            >
              {{ item.content }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Skill } from '~/types/index.ts'

const props = defineProps<{
  sectionTitle: String
  items: Array<Skill>
}>()
</script>
