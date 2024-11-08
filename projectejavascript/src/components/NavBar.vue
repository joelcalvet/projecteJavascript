<script setup>
import { ref } from 'vue'

const isOpen = ref(false)
</script>

<template>
  <nav class="bg-gradient-to-r from-purple-800 to-indigo-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center">
          <div class="flex-shrink-0">
            <router-link to="/" class="text-white font-bold">Vue SPA</router-link>
          </div>
          <div class="hidden md:block">
            <div class="ml-10 flex items-baseline space-x-4">
              <router-link to="/" class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Inici</router-link>
              <router-link to="/calculator" class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Calculadora</router-link>
              <router-link to="/comments" class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Comentaris</router-link>
              <router-link to="/users" class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Usuaris</router-link>
            </div>
          </div>
        </div>
        <div class="md:hidden">
          <button @click="isOpen = !isOpen" class="text-gray-300 hover:text-white">
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path v-if="!isOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
    <div v-if="isOpen" class="md:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <router-link to="/" class="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Inici</router-link>
        <router-link to="/calculator" class="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Calculadora</router-link>
        <router-link to="/comments" class="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Comentaris</router-link>
        <router-link to="/users" class="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Usuaris</router-link>
      </div>
    </div>
  </nav>
</template>