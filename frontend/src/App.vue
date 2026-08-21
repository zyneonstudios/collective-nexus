<script setup>
import { ref, onMounted } from 'vue'
import './assets/zyneon/css/banner.css';

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
    <nav class="border-b border-neutral-800 bg-neutral-900/50 backdrop-blur-md sticky top-0 select-none shadow-2xl">
      <div class="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <router-link to="/" class="text-xl font-bold tracking-wider text-white flex items-center gap-2 excluded animate">
          <span class="text-sky-500">Zyneon</span> Collective
        </router-link>

        <div class="space-x-6">
          <!--router-link to="/" class="text-neutral-400 hover:text-sky-200 transition" active-class="text-sky-200">Start</router-link-->
          <router-link to="/dashboard" class="text-neutral-400 hover:text-sky-400 transition hidden" active-class="text-sky-200">Dashboard</router-link>
          <router-link to="/login" class="text-neutral-400 hover:text-sky-400 transition" active-class="text-sky-400">Login</router-link>
          <router-link to="/register" class="text-neutral-400 hover:text-sky-400 transition" active-class="text-sky-400">Registrieren</router-link>
        </div>
      </div>
    </nav>

    <div class="text-center banner">
      <h1 class="text-4xl font-bold excluded"><span class="text-sky-500">Zyneon</span> Collective</h1>
    </div>
    <div class="banner-background">
      <div class="banner-bgimg"/>
    </div>
    <main class="max-w-7xl grow mx-auto">
      <router-view></router-view>
    </main>
  </div>

  <div class="bg-neutral-950 text-white font-sans">
    <footer class="border-t py-6 text-center text-sm text-neutral-500 select-none border-neutral-800 bg-neutral-900/50">
      <div class="flex items-center justify-center gap-2 mb-3">
        <span class="h-2 w-2 rounded-full" :class="apiStatus ? 'bg-green-500' : 'bg-red-500'"></span>
        <span>API: {{ apiStatus ? 'Verbunden' : 'Offline' }}</span>
      </div>
      <div class="flex items-center justify-center gap-2 mb-1">
        <router-link to="/imprint" class="text-neutral-400 hover:text-white transition" active-class="text-white">Impressum</router-link>
        <router-link to="/privacy" class="text-neutral-400 hover:text-white transition" active-class="text-white">Datenschutzerklärung</router-link>
      </div>

      <div class="flex items-center justify-center gap-2 mb-1">
        <router-link to="/legal" class="text-neutral-400 hover:text-white transition" active-class="text-white">Legal, Credits & Attribution</router-link>
      </div>
      <div class="flex items-center justify-center gap-2 mb-0">
        <a class="text-neutral-400 hover:text-white transition" href="https://github.com/zyneonstudios" target="_blank">GitHub</a>
        <a class="text-neutral-400 hover:text-white transition" href="https://github.com/zyneonstudios/collective-nexus" target="_blank">Source</a>
      </div>
      <br>
      <strong>Das Zyneon Collective ist Teil der <a class="text-neutral-400 hover:text-white transition" href="https://www.zyneonstudios.com" target="_blank">Zyneon Studios</a></strong>
      <p>&copy; 2026 <a class="text-neutral-400 hover:text-white transition" href="https://www.zyneonstudios.com" target="_blank">Zyneon Studios</a>. Alle Rechte vorbehalten.</p>
    </footer>
  </div>
</template>

<style scoped>
.animate {
  animation: banner-color 1s ease;
}
</style>