<template>
  <div class="flex items-center my-4">
    <!-- Desktop Tabs with Underline -->
    <div
      class="hidden md:flex w-full space-x-4 border border-gray-200 rounded-lg px-5 items-center"
    >
      <span>Сортировать: </span>
      <button
        :class="
          selectedTab === 'priceAsc'
            ? 'text-blue-500 text-sm border-b-2 border-blue-500'
            : 'text-gray-700 text-sm border-b-2 border-transparent'
        "
        class="px-4 py-2 hover:text-blue-500"
        @click="setTab('priceAsc')"
      >
        Сначала подешевле
      </button>
      <button
        :class="
          selectedTab === 'priceDesc'
            ? 'text-blue-500 text-sm border-b-2 border-blue-500'
            : 'text-gray-700 text-sm border-b-2 border-transparent'
        "
        class="px-4 py-2 hover:text-blue-500"
        @click="setTab('priceDesc')"
      >
        Сначала подороже
      </button>
      <button
        :class="
          selectedTab === 'ratingDesc'
            ? 'text-blue-500 text-sm border-b-2 border-blue-500'
            : 'text-gray-700 text-sm border-b-2 border-transparent'
        "
        class="px-4 py-2 hover:text-blue-500"
        @click="setTab('ratingDesc')"
      >
        По популярности
      </button>
      <button
        :class="
          selectedTab === 'createdAtAsc'
            ? 'text-blue-500 text-sm border-b-2 border-blue-500'
            : 'text-gray-700 text-sm border-b-2 border-transparent'
        "
        class="px-4 py-2 hover:text-blue-500"
        @click="setTab('createdAtAsc')"
      >
        Сначала новое
      </button>
      <button
        :class="
          selectedTab === 'titleAsc'
            ? 'text-blue-500 text-sm border-b-2 border-blue-500'
            : 'text-gray-700 text-sm border-b-2 border-transparent'
        "
        class="px-4 py-2 hover:text-blue-500"
        @click="setTab('titleAsc')"
      >
        По алфавиту (от А до Я)
      </button>
      <button
        :class="
          selectedTab === 'titleDesc'
            ? 'text-blue-500 text-sm border-b-2 border-blue-500'
            : 'text-gray-700 text-sm border-b-2 border-transparent'
        "
        class="px-4 py-2 hover:text-blue-500"
        @click="setTab('titleDesc')"
      >
        По алфавиту (от Я до А)
      </button>
    </div>

    <!-- Mobile Dropdown -->
    <div class="md:hidden w-full px-4 py-2 border rounded-lg">
      <label for="sort" class="text-gray-700 text-sm ml-1">Сортировать</label>
      <select v-model="selectedTab" class="w-full text-primary focus:outline-none" id="sort">
        <option value="priceAsc">Сначала подешевле</option>
        <option value="priceDesc">Сначала подороже</option>
        <option value="ratingDesc">По популярности</option>
        <option value="createdAtAsc">Сначала новое</option>
        <option value="titleAsc">По алфавиту (от А до Я)</option>
        <option value="titleDesc">По алфавиту (от Я до А)</option>
      </select>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useProductStore } from '@/stores/productStore'

const productStore = useProductStore()
const selectedTab = ref(productStore.sortOption)

// Update the sorting option in the store
const setTab = (tab: string) => {
  selectedTab.value = tab
}

watch(selectedTab, (newTab) => {
  productStore.setSortOption(newTab)
})

if (localStorage.getItem('sortOption')) {
  selectedTab.value = localStorage.getItem('sortOption') || 'asc' // Default to 'asc' if not found
}
</script>
