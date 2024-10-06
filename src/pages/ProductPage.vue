<template>
  <div class="max-w-screen-xl mx-auto p-6">
    <!-- Main Content Section -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div class="flex flex-col">
        <div class="order-2 md:order-1">
          <!-- Product Title and Rating Section -->
          <div class="mb-6">
            <h1 class="text-4xl font-bold">{{ product.title }}</h1>
            <div class="flex items-center mt-2">
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
        </div>
        <div class="order-1 md:order-2">
          <!-- Product Image -->
          <div
            class="flex items-center justify-center border border-gray-200 rounded-xl py-8 md:px-28 px-12"
          >
            <img
              :src="product.image"
              alt="Product Image"
              class="w-full h-full object-cover rounded-lg p-4"
            />
          </div>
        </div>
      </div>
      <!-- Product Description and Price -->
      <div class="md:mt-24">
        <!-- Full Description -->
        <div class="mb-6">
          <p class="text-base font-normal">{{ product.description }}</p>
        </div>

        <!-- "О товаре" and Table -->
        <div class="mb-16">
          <h2 class="text-base font-bold">О товаре</h2>
          <table class="w-full mt-2 text-sm border-b border-gray-200">
            <tbody>
              <tr class="border-b border-gray-200">
                <td class="py-3">Страна-изготовитель</td>
                <td class="py-3 font-bold">{{ product.countryManufacturer }}</td>
              </tr>
              <tr class="border-b border-gray-200">
                <td class="py-3">Материал оправы</td>
                <td class="py-3 font-bold">{{ product.material }}</td>
              </tr>
              <tr class="border-b border-gray-200">
                <td class="py-3">Материал линзы</td>
                <td class="py-3 font-bold">{{ product.lenseMaterial }}</td>
              </tr>
              <tr class="border-b border-gray-200">
                <td class="py-3">Ширина линзы, мм</td>
                <td class="py-3 font-bold">{{ product.lenseWidth }} cm</td>
              </tr>
              <tr>
                <td class="py-3">Разъем</td>
                <td class="py-3 font-bold">{{ product.connector }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- Price and Buy Section -->
        <div class="shadow-3xl p-4 rounded-lg">
          <div class="text-2xl font-bold mb-2">
            {{
              (
                Math.round((product.price - (product.price * product.discount) / 100) * 100) / 100
              ).toFixed(2)
            }}
            ₸
            <span class="text-sm font-normal line-through text-gray-400"
              >{{ product.price }} ₸</span
            >
          </div>
          <div class="flex space-x-4">
            <!-- Buy Button -->
            <button
              @click="isVisible = true"
              class="bg-primary text-white px-6 py-3 rounded-lg w-full hover:bg-[rgba(38,103,255,0.9)]"
            >
              Купить
            </button>
            <!-- Like Button -->
            <button
              @click="toggleLike"
              class="bg-primary/12 p-3 rounded-lg hover:bg-gray-100 focus:outline-none"
            >
              <img src="../assets/icons/Icon_Heart_Blue.svg" alt="Icon Heart Blue" />
            </button>
          </div>
        </div>
      </div>
    </div>
    <AlertDialog v-if="isVisible" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, defineProps } from 'vue'
import AlertDialog from '../components/AlertDialog.vue'
import { getProductById } from '@/services/productService'
import type { Product } from '@/stores/productStore'
const props = defineProps({ id: { type: String, required: true } })
const isVisible = ref(false)

const isLiked = ref(false)
const product = ref<Product>({
  title: '',
  description: '',
  price: 0,
  oldPrice: 0,
  rating: 0,
  ratesCount: 0,
  countryManufacturer: '',
  material: '',
  lenseMaterial: '',
  lenseWidth: '',
  connector: ''
})

onMounted(async () => {
  try {
    product.value = await getProductById(props.id)
  } catch (error) {
    console.error('Failed to fetch product', error)
  }
})

const toggleLike = () => {
  isLiked.value = !isLiked.value
}
</script>
