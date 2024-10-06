<template>
  <div
    v-if="isVisible"
    class="fixed inset-0 flex items-end justify-center z-50 bg-black bg-opacity-30 sm:items-center sm:p-0"
    role="dialog"
  >
    <div
      class="bg-white rounded-t-lg shadow-lg p-8 relative w-full max-w-md text-center sm:rounded-lg"
    >
      <!-- Close Button -->
      <button
        @click="closeDialog"
        class="absolute top-2 right-2 text-gray-500 hover:text-gray-700 focus:outline-none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <!-- Image -->
      <img
        src="../assets/Dialog_Shopping_Cart_Picture.png"
        alt="Product Image"
        class="mx-auto w-36 mb-4 rounded-lg"
      />

      <!-- Title: Спасибо за заказ! -->
      <h2 class="text-2xl font-bold mb-2">Спасибо за заказ!</h2>

      <!-- Subtext: Уже собираем -->
      <p class="text-base font-normal text-gray-700">Уже собираем</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// State for showing or hiding the dialog
const isVisible = ref(true)

// Function to close the dialog
const closeDialog = () => {
  isVisible.value = false
}
</script>

<style scoped>
/* Additional styling if needed */
</style>
