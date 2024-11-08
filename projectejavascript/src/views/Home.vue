<template>
  <div class="container mx-auto px-4 py-8">
    <div class="text-center">
      <h1 class="text-4xl font-bold mb-4">Benvinguts al Projecte Vue SPA</h1>
      <p class="text-xl mb-8">Una aplicació completa d'una sola pàgina construïda amb Vue 3</p>
      
      <div class="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        <div class="bg-white p-6 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300">
          <h2 class="text-xl font-semibold mb-3">Calculadora</h2>
          <p class="mb-4">Realitza operacions matemàtiques amb la nostra calculadora interactiva</p>
          <router-link to="/calculator" class="inline-block bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4 py-2 rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-all duration-300">Prova la Calculadora</router-link>
        </div>
        
        <div class="bg-white p-6 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300">
          <h2 class="text-xl font-semibold mb-3">Comentaris</h2>
          <p class="mb-4">Visualitza comentaris obtinguts de l'API JSONPlaceholder</p>
          <router-link to="/comments" class="inline-block bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4 py-2 rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-all duration-300">Veure Comentaris</router-link>
        </div>
        
        <div class="bg-white p-6 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300">
          <h2 class="text-xl font-semibold mb-3">Usuaris</h2>
          <p class="mb-4">Explora les dades d'usuaris de l'API DummyJSON</p>
          <router-link to="/users" class="inline-block bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4 py-2 rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-all duration-300">Veure Usuaris</router-link>
        </div>
      </div>
    </div>
  </div>
</template>