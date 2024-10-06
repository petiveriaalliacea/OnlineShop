// stores/productStore.ts
import { defineStore } from 'pinia'
import { ref, computed, watch } from 'vue'
import { getProducts } from '@/services/productService'

export interface Product {
  title: string
  image: string
  description: string
  reviews: number
  price: number
  oldPrice: number
  countryManufacturer: string
  material: string
  lenseMaterial: string
  lenseWidth: string
  connector: string
  rating: number
  ratesCount: number
}

export interface GetProductsParams {
  order?: 'asc' | 'desc'
  orderBy?: string
  page?: number
  limit?: number
  search?: string
}

export const useProductStore = defineStore('productStore', () => {
  const products = ref<Array<Product>>([])
  const isLoading = ref(true)
  const sortOption = ref('priceAsc') // Default to ascending price
  const currentPage = ref(1)
  const limit = ref(8)
  const searchQuery = ref()

  // Fetch products from the server with filters
  const fetchProducts = async () => {
    isLoading.value = true
    try {
      const params: GetProductsParams = {
        order: sortOption.value.includes('Asc') ? 'asc' : 'desc',
        orderBy: sortOption.value.includes('price')
          ? 'price'
          : sortOption.value.includes('rating')
            ? 'rating'
            : sortOption.value.includes('createdAt')
              ? 'createdAt'
              : 'title', // Default to title for alphabetical sorting
        page: currentPage.value,
        limit: limit.value,
        search: searchQuery.value // Adjust the API to handle the search
      }
      const response = await getProducts(params)
      products.value = response
    } catch (error) {
      console.error('Failed to fetch products:', error)
    } finally {
      isLoading.value = false
    }
  }
  const fetchMoreProducts = async () => {
    try {
      const params: GetProductsParams = {
        order: sortOption.value.includes('Asc') ? 'asc' : 'desc',
        orderBy: sortOption.value.includes('price')
          ? 'price'
          : sortOption.value.includes('rating')
            ? 'rating'
            : sortOption.value.includes('createdAt')
              ? 'createdAt'
              : 'title', // Default to title for alphabetical sorting
        page: currentPage.value,
        limit: limit.value,
        search: searchQuery.value // Adjust the API to handle the search
      }
      const response = await getProducts(params)
      products.value.push(...response) // Append the new products to the existing list
      currentPage.value++ // Increment the current page for the next fetch
      isLoading.value = false
    } catch (error) {
      console.error('Failed to fetch more products:', error)
      isLoading.value = false
    }
  }

  const setSortOption = (newSortOption: string) => {
    sortOption.value = newSortOption
    localStorage.setItem('sortOption', newSortOption) // Store the selected filter value in local storage
    currentPage.value = 1 // Reset to the first page when sorting changes
    fetchProducts()
  }

  const setSearchQuery = (query: string) => {
    searchQuery.value = query
    localStorage.setItem('searchQuery', query) // Store the search query in local storage
    currentPage.value = 1 // Reset to the first page when searching
    fetchProducts()
  }

  // When initializing the store, retrieve the stored filter values from local storage
  const storedSortOption = localStorage.getItem('sortOption')
  if (storedSortOption) {
    sortOption.value = storedSortOption
  }

  const storedSearchQuery = localStorage.getItem('searchQuery')
  if (storedSearchQuery) {
    searchQuery.value = storedSearchQuery
  }

  return {
    products,
    isLoading,
    currentPage,
    limit,
    fetchProducts,
    setSortOption,
    setSearchQuery,
    fetchMoreProducts
  }
})
