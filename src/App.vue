<template>
  <div
    :class="{ dark: isDark }"
    class="min-h-screen bg-white text-gray-900 transition-colors duration-300"
  >
    <Header :is-dark="isDark" @toggle-dark="toggleDark" />
    <main class="container mx-auto px-4 py-8 max-w-4xl">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script setup>
  import { ref, onMounted, onUnmounted } from 'vue'
  import Header from './components/Header.vue'
  import Footer from './components/Footer.vue'

  const isDark = ref(false)

  const toggleDark = () => {
    isDark.value = !isDark.value
    if (isDark.value) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  onMounted(() => {
    const savedTheme = localStorage.getItem('theme')
    if (
      savedTheme === 'dark' ||
      (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      isDark.value = true
      document.documentElement.classList.add('dark')
    }
  })

  onUnmounted(() => {})
</script>
