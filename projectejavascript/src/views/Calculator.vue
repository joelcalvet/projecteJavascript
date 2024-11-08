<script setup>
import { ref } from 'vue'

const display = ref('0')
const currentNumber = ref('')
const previousNumber = ref('')
const operation = ref(null)
const newNumber = ref(true)

const appendNumber = (number) => {
  if (newNumber.value) {
    currentNumber.value = number.toString()
    newNumber.value = false
  } else {
    currentNumber.value += number.toString()
  }
  display.value = currentNumber.value
}

const appendDecimal = () => {
  if (!currentNumber.value.includes('.')) {
    currentNumber.value += '.'
    display.value = currentNumber.value
  }
}

const setOperation = (op) => {
  if (operation.value && !newNumber.value) {
    calculate()
  }
  previousNumber.value = currentNumber.value
  operation.value = op
  newNumber.value = true
}

const calculate = () => {
  if (!operation.value || newNumber.value) return

  const prev = parseFloat(previousNumber.value)
  const current = parseFloat(currentNumber.value)
  let result

  switch (operation.value) {
    case '+':
      result = prev + current
      break
    case '-':
      result = prev - current
      break
    case '*':
      result = prev * current
      break
    case '/':
      result = prev / current
      break
    default:
      return
  }

  currentNumber.value = result.toString()
  display.value = currentNumber.value
  operation.value = null
  newNumber.value = true
}

const clear = () => {
  display.value = '0'
  currentNumber.value = ''
  previousNumber.value = ''
  operation.value = null
  newNumber.value = true
}
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-900 to-fuchsia-900 flex items-center justify-center px-4 py-12">
    <div class="w-full max-w-md">
      <div class="bg-gray-900/80 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden border border-purple-500/30">
        <div class="p-8">
          <!-- Display -->
          <div class="bg-gray-950/70 p-6 mb-8 rounded-2xl border border-purple-400/20 shadow-inner">
            <div class="text-6xl font-digital text-right text-purple-300 glow tracking-wider">
              {{ display }}
            </div>
          </div>
          
          <!-- Keypad Grid -->
          <div class="grid grid-cols-4 gap-3">
            <!-- Clear i Operadors superiors -->
            <button @click="clear" 
                    class="col-span-2 h-16 bg-gradient-to-br from-red-600 to-red-800 text-white rounded-2xl hover:from-red-700 hover:to-red-900 transform hover:scale-105 transition-all duration-300 shadow-lg text-xl font-bold border border-red-500/30">
              Esborrar
            </button>
            <button @click="() => setOperation('/')" 
                    class="h-16 bg-gradient-to-br from-violet-600 to-violet-800 text-white rounded-2xl hover:from-violet-700 hover:to-violet-900 transform hover:scale-105 transition-all duration-300 shadow-lg text-2xl border border-violet-500/30">
              ÷
            </button>
            <button @click="() => setOperation('*')" 
                    class="h-16 bg-gradient-to-br from-violet-600 to-violet-800 text-white rounded-2xl hover:from-violet-700 hover:to-violet-900 transform hover:scale-105 transition-all duration-300 shadow-lg text-2xl border border-violet-500/30">
              ×
            </button>

            <!-- Números 7-9 -->
            <button v-for="n in [7,8,9]" :key="n" @click="() => appendNumber(n)"
                    class="h-16 bg-gradient-to-br from-gray-700 to-gray-800 text-white rounded-2xl hover:from-gray-600 hover:to-gray-700 transform hover:scale-105 transition-all duration-300 shadow-lg text-2xl border border-gray-600/30">
              {{ n }}
            </button>
            <button @click="() => setOperation('-')" 
                    class="h-16 bg-gradient-to-br from-violet-600 to-violet-800 text-white rounded-2xl hover:from-violet-700 hover:to-violet-900 transform hover:scale-105 transition-all duration-300 shadow-lg text-2xl border border-violet-500/30">
              −
            </button>

            <!-- Números 4-6 -->
            <button v-for="n in [4,5,6]" :key="n" @click="() => appendNumber(n)"
                    class="h-16 bg-gradient-to-br from-gray-700 to-gray-800 text-white rounded-2xl hover:from-gray-600 hover:to-gray-700 transform hover:scale-105 transition-all duration-300 shadow-lg text-2xl border border-gray-600/30">
              {{ n }}
            </button>
            <button @click="() => setOperation('+')" 
                    class="h-16 bg-gradient-to-br from-violet-600 to-violet-800 text-white rounded-2xl hover:from-violet-700 hover:to-violet-900 transform hover:scale-105 transition-all duration-300 shadow-lg text-2xl border border-violet-500/30">
              +
            </button>

            <!-- Números 1-3 -->
            <button v-for="n in [1,2,3]" :key="n" @click="() => appendNumber(n)"
                    class="h-16 bg-gradient-to-br from-gray-700 to-gray-800 text-white rounded-2xl hover:from-gray-600 hover:to-gray-700 transform hover:scale-105 transition-all duration-300 shadow-lg text-2xl border border-gray-600/30">
              {{ n }}
            </button>
            <button @click="calculate" 
                    class="h-16 row-span-2 bg-gradient-to-br from-fuchsia-600 to-fuchsia-800 text-white rounded-2xl hover:from-fuchsia-700 hover:to-fuchsia-900 transform hover:scale-105 transition-all duration-300 shadow-lg text-2xl font-bold border border-fuchsia-500/30">
              =
            </button>

            <!-- Zero i Decimal -->
            <button @click="() => appendNumber(0)" 
                    class="h-16 col-span-2 bg-gradient-to-br from-gray-700 to-gray-800 text-white rounded-2xl hover:from-gray-600 hover:to-gray-700 transform hover:scale-105 transition-all duration-300 shadow-lg text-2xl border border-gray-600/30">
              0
            </button>
            <button @click="appendDecimal" 
                    class="h-16 bg-gradient-to-br from-gray-700 to-gray-800 text-white rounded-2xl hover:from-gray-600 hover:to-gray-700 transform hover:scale-105 transition-all duration-300 shadow-lg text-2xl border border-gray-600/30">
              .
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.glow {
  text-shadow: 0 0 10px rgba(167, 139, 250, 0.5),
               0 0 20px rgba(167, 139, 250, 0.3),
               0 0 30px rgba(167, 139, 250, 0.2);
}

@font-face {
  font-family: 'Digital';
  src: url('https://fonts.gstatic.com/s/share/v14/i7dJIFliZjKNF63xM56-WkJUQUq7.woff2') format('woff2');
}

.font-digital {
  font-family: 'Digital', monospace;
}
</style>