<script setup>
import { ref, onMounted } from 'vue'

const comments = ref([])
const loading = ref(true)
const error = ref(null)

onMounted(async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/comments')
    if (!response.ok) throw new Error('Error al carregar els comentaris')
    comments.value = await response.json()
  } catch (e) {
    error.value = e.message
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-6">Comentaris</h1>
    
    <div v-if="loading" class="text-center">
      <p class="text-xl">Carregant comentaris...</p>
    </div>
    
    <div v-else-if="error" class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
      {{ error }}
    </div>
    
    <div v-else class="grid gap-4">
      <div v-for="comment in comments" :key="comment.id" class="bg-white p-4 rounded-lg shadow">
        <h2 class="text-xl font-semibold mb-2">{{ comment.name }}</h2>
        <p class="text-gray-600 mb-2">{{ comment.email }}</p>
        <p>{{ comment.body }}</p>
      </div>
    </div>
  </div>
</template>