<template>
  <nav aria-label="Breadcrumb" class="flex items-center space-x-2 text-gray-500">
    <!-- Home Breadcrumb -->
    <router-link to="/" class="text-blue-500 hover:underline">Home</router-link>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-4 w-4 text-gray-400"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      stroke-width="2"
    >
      <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
    </svg>

    <!-- Category Breadcrumb -->
    <template v-if="$route.path.split('/').length > 2">
      <router-link :to="`/${$route.path.split('/')[1]}`" class="text-blue-500 hover:underline">
        {{ $route.path.split('/')[1] }}
      </router-link>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-4 w-4 text-gray-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </template>

    <!-- Current Page (active) -->
    <span class="text-gray-500">{{ $route.name }}</span>
  </nav>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
</script>
