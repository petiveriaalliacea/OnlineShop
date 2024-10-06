<template>
  <nav class="bg-[rgba(38,103,255,1)] text-white p-4">
    <div class="container mx-auto flex justify-center gap-6">
      <!-- Logo -->
      <div class="hidden md:block md:me-20">
        <img src="../assets/Logo.svg" alt="Logo" />
      </div>

      <!-- Search bar -->
      <div class="flex w-1/2">
        <input
          v-model="localSearchQuery"
          type="text"
          placeholder="Search"
          class="w-full py-2 px-4 rounded-l-full border-none outline-none text-black"
          @input="updateSearch"
        />
        <button class="bg-white text-[rgba(38,103,255,1)] px-4 py-2 rounded-r-full">
          <img src="../assets/icons/Icon_18_Search.svg" alt="Icon Search" />
        </button>
      </div>

      <!-- Icons -->
      <div class="flex space-x-4">
        <!-- Heart Icon (Liked Items) -->
        <button class="focus:outline-none">
          <img src="../assets/icons/Icon_32_Heart.svg" alt="Icon Heart" />
        </button>
        <!-- Shopping Cart Icon -->
        <button class="focus:outline-none">
          <img src="../assets/icons/Icon_32_Cart_Filled.svg" alt="Icon Cart" />
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useProductStore } from '@/stores/productStore'

const productStore = useProductStore()
const localSearchQuery = ref(productStore.searchQuery)

// Update the store's searchQuery when the user types in the input
const updateSearch = () => {
  productStore.setSearchQuery(localSearchQuery.value)
}
</script>
