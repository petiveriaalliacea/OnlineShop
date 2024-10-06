// src/services/axiosInstance.ts

import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'https://665801795c36170526468b7c.mockapi.io/api/v1', // Replace with your base API URL
  headers: {
    'Content-Type': 'application/json'
  },
  timeout: 10000 // 10 seconds timeout
})

// Optional: Add interceptors for requests and responses
axiosInstance.interceptors.request.use(
  (config) => {
    // Do something before the request is sent (e.g., add an auth token)
    return config
  },
  (error) => {
    // Handle the request error
    return Promise.reject(error)
  }
)

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle the response error (e.g., show notifications)
    return Promise.reject(error)
  }
)

export default axiosInstance
