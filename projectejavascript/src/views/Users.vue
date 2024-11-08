<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const users = ref([])
const loading = ref(true)
const error = ref(null)

onMounted(async () => {
  try {
    const response = await axios.get('https://dummyjson.com/users')
    users.value = response.data.users
  } catch (e) {
    error.value = e.message
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-6">Usuaris</h1>
    
    <div v-if="loading" class="text-center">
      <p class="text-xl">Carregant usuaris...</p>
    </div>
    
    <div v-else-if="error" class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
      {{ error }}
    </div>
    
    <div v-else class="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div v-for="user in users" :key="user.id" class="bg-white p-4 rounded-lg shadow">
        <img :src="user.image" :alt="user.firstName" class="w-32 h-32 rounded-full mx-auto mb-4 object-cover">
        <h2 class="text-xl font-semibold text-center mb-2">{{ user.firstName }} {{ user.lastName }}</h2>
        <div class="text-gray-600">
          <p><strong>Correu:</strong> {{ user.email }}</p>
          <p><strong>Telèfon:</strong> {{ user.phone }}</p>
          <p><strong>Empresa:</strong> {{ user.company.name }}</p>
          <p><strong>Adreça:</strong> {{ user.address.city }}, {{ user.address.state }}</p>
        </div>
      </div>
    </div>
  </div>
</template>