<script setup>
import { ref, onMounted } from 'vue'

const apiStatus = ref(null)

onMounted(async () => {
  try {
    const response = await fetch('/api/v1/status')
    apiStatus.value = await response.json()
  } catch (error) {
    console.error("API Error:", error)
  }
})
</script>

<template>
  <div class="min-h-screen bg-neutral-950 text-white font-sans flex flex-col">
    <nav class="border-b border-neutral-800 bg-neutral-900/50 backdrop-blur-md sticky top-0">
      <div class="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <router-link to="/" class="text-xl font-bold tracking-wider text-white flex items-center gap-2">
          <span class="text-sky-500">Zyneon</span> Collective
        </router-link>

        <div class="space-x-6">
          <router-link to="/" class="text-neutral-400 hover:text-white transition" active-class="text-sky-400">Start</router-link>
          <router-link to="/teams" class="text-neutral-400 hover:text-white transition" active-class="text-sky-400">Teams</router-link>
          <a href="#" class="text-neutral-400 hover:text-white transition">Projekte</a>
        </div>
      </div>
    </nav>

    <main class="flex-grow max-w-6xl mx-auto px-4 py-12 w-full">
      <router-view></router-view>
    </main>

    <footer class="border-t border-neutral-800 py-6 text-center text-sm text-neutral-500">
      <div class="flex items-center justify-center gap-2 mb-2">
        <span class="h-2 w-2 rounded-full" :class="apiStatus ? 'bg-green-500' : 'bg-red-500'"></span>
        <span>API: {{ apiStatus ? 'Verbunden' : 'Offline' }}</span>
      </div>
      <p>&copy; 2026 Zyneon Studios</p>
    </footer>

  </div>
</template>