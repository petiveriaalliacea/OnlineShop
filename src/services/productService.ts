// src/services/productService.ts

import axiosInstance from './axiosInstance'
import type { GetProductsParams } from '@/stores/productStore'

// Fetch all products with optional filters
export const getProducts = async (params: GetProductsParams) => {
  const response = await axiosInstance.get('/products', { params })
  return response.data
}
// Fetch a single product by ID
export const getProductById = async (productId: string) => {
  const response = await axiosInstance.get(`/products/${productId}`)
  return response.data
}
