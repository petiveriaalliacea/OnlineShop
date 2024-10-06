<template>
  <Navbar />

  <div class="mx-auto my-8 max-w-screen-xl px-4 sm:px-6 lg:px-8">
    <Breadcrumb />
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import Navbar from './components/Navbar.vue'
import Breadcrumb from './components/Breadcrumbs.vue'
const currentCategory = ref('Electronics') // Replace with your dynamic category
const categoryLink = ref('/category/electronics') // Replace with your dynamic category link
const currentPageTitle = ref('Smartphone Model XYZ') // Replace with your dynamic page title
</script>

<style scoped></style>
