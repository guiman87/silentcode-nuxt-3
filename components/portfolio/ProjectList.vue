<!-- eslint-disable import/extensions -->

<template>
  <div class="">
    <div class="mt-8 overflow-hidden shadow ring-1 ring-black ring-opacity-5">
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
          <tr v-for="project in items" :key="project.title">
            <td
              class="w-full max-w-0 py-4 px-2 font-semibold print:text-md text-gray-800 dark:text-gray-400 sm:w-auto sm:max-w-none sm:pl-3"
            >
              <a target="_blank" href="project.link">
                {{ project.name }}
              </a>
              <dl class="font-normal lg:hidden">
                <dd
                  class="mt-1 truncate text-gray-700 dark:text-gray-400 font-semibold"
                >
                  {{ project.title }}
                </dd>
                <dd
                  class="mt-1 sm:hidden text-md print:text-sm leading-snug text-gray-700 dark:text-gray-400"
                >
                  {{ project.description }}
                </dd>
              </dl>
            </td>
            <td
              class="hidden px-3 py-4 text-sm text-gray-500 dark:text-gray-400 lg:table-cell"
            >
              {{ project.title }}
            </td>
            <td
              class="hidden px-3 py-4 text-md print:text-sm leading-snug text-gray-700 dark:text-gray-400 sm:table-cell"
            >
              {{ project.description }}
            </td>
            <td class="px-3 py-4 text-sm text-gray-500 dark:text-gray-400">
              {{ project.date }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PortfolioItem } from '~/types/index.ts'

const props = defineProps<{
  items: Array<PortfolioItem>
}>()
</script>
