<template>
  <div>
    <SortingTab />
    <div class="">
      <!-- Scroll listener -->
      <div v-if="productStore.isLoading">Loading...</div>
      <div v-else class="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <template v-for="product in productStore.products" :key="product.id">
          <ProductCard :product="product" />
        </template>
      </div>
    </div>

    <!-- Pagination Controls -->
    <!-- <div class="flex justify-center items-center mt-4">
      <button
        @click="productStore.prevPage"
        :disabled="productStore.currentPage === 1"
        class="px-4 py-2 border rounded-md disabled:opacity-50"
      >
        Пред
      </button>
      <span class="ml-4"> Страница {{ productStore.currentPage }} </span>
      <button
        @click="productStore.nextPage"
        class="px-4 py-2 ml-4 border rounded-md disabled:opacity-50"
      >
        След
      </button>
      <div class="my-4 mx-6">
        <label for="limit" class="text-gray-700">Items per page:</label>
        <select
          v-model="productStore.limit"
          id="limit"
          @change="productStore.setLimit(productStore.limit)"
          class="ml-2 border rounded-md"
        >
          <option value="4">4</option>
          <option value="8">8</option>
          <option value="20">20</option>
          <option value="32">32</option>
          <option value="40">40</option>
          <option value="100">100</option>
        </select>
      </div>
    </div> -->
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import { useProductStore } from '@/stores/productStore'
import ProductCard from '../components/ProductCard.vue'
import SortingTab from '../components/SortingTab.vue'

const productStore = useProductStore()
// const handleScroll = (event: Event) => {
//   const target = event.target as HTMLElement
//   if (target.scrollTop + target.clientHeight >= target.scrollHeight - 100) {
//     // Trigger loading when near the bottom
//     if (!productStore.isLoading) {
//       // Check if not already loading
//       productStore.fetchMoreProducts()
//     }
//   }
// }

onMounted(() => {
  productStore.fetchProducts()

  // Handle scroll event on the window
  const handleScroll = () => {
    // Check if the user has scrolled near the bottom of the page
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
      if (!productStore.isLoading) {
        // Prevent multiple fetches
        productStore.fetchMoreProducts()
      }
    }
  }

  // Add scroll event listener
  window.addEventListener('scroll', handleScroll)

  // Cleanup the event listener on component unmount
  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })
})
</script>
