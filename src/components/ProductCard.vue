<template>
  <div
    @click="goToProduct(product.id)"
    class="border border-[#E7E7E7] bg-[#FFFFFF] rounded-2xl p-4 max-w-64 md:max-w-xs hover:-translate-y-2 hover:shadow-xl transition"
  >
    <!-- Product Image & Heart Icon -->
    <div class="relative">
      <img
        :src="product.image"
        alt="Product Image"
        class="h-full w-64 object-cover rounded-2xl m-auto"
      />
      <button
        class="absolute top-1 right-1 bg-[rgba(84,84,84,0.3)] rounded-full p-2 focus:outline-none hover:bg-[rgba(38,103,255,0.6)]"
      >
        <img src="../assets/icons/Icon_Heart.svg" alt="Icon Heart" />
      </button>
    </div>

    <div class="flex flex-col">
      <!-- Product Title -->
      <h3 class="mt-4 text-sm font-medium">{{ product.title }}</h3>

      <!-- Rating & Reviews -->
      <div class="flex items-center mt-1">
        <div class="flex">
          <template v-for="n in Math.floor(product.rating / 20)" :key="n">
            <img
              src="../assets/icons/Icon_Star.svg"
              alt="Icon Star"
              class="text-[rgba(246,59,0,1)]"
            />
          </template>
          <template v-for="n in 5 - Math.floor(product.rating / 20)" :key="n">
            <img src="../assets/icons/Icon_Star_Empty.svg" alt="Icon Star" />
          </template>
        </div>
        <span class="text-sm ml-2">{{ product.ratesCount }} отзывов</span>
      </div>
    </div>

    <div class="mt-6 flex flex-col md:flex-row items-start md:items-center md:justify-between">
      <!-- Price & Sale Information -->
      <div class="mt-2 md:mt-0">
        <div class="flex items-center">
          <span class="line-through text-gray-500 text-base mr-2">{{ product.price }} ₸ </span>
          <span class="bg-[rgba(246,59,0,1)] text-white text-base rounded-md px-2 py-1">
            -{{ product.discount }}%
          </span>
        </div>
        <div class="text-[2rem] font-bold">
          {{
            (
              Math.round((product.price - (product.price * product.discount) / 100) * 100) / 100
            ).toFixed(2)
          }}
          ₸
        </div>
      </div>

      <!-- Shopping Cart Button -->
      <button
        class="mt-4 md:mt-0 w-full md:w-fit bg-[rgba(38,103,255,1)] text-white p-2 rounded-xl flex justify-center items-center hover:bg-[rgba(38,103,255,0.9)] focus:outline-none self-end"
      >
        <img src="../assets/icons/Icon_Cart.svg" alt="Icon Cart" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import type { Product } from '@/stores/productStore'

const router = useRouter()

const goToProduct = (id: string) => router.push({ name: 'ProductDetails', params: { id } })

const props = defineProps<{ product: Product }>()
// const isLiked = ref(false)

// const toggleLike = () => {
//   isLiked.value = !isLiked.value
// }
</script>
