<script setup lang="ts">
const { dark, init } = useTheme()
const { open: drawerOpen } = useDrawer()

onMounted(() => {
  init()
})

const theme = computed(() => (dark.value ? 'dark' : 'light'))

watch(drawerOpen, (isOpen) => {
  if (import.meta.client) {
    document.body.style.overflow = isOpen ? 'hidden' : ''
  }
})
</script>

<template>
  <div :data-theme="theme" class="app-shell">
    <NavSidebar />

    <div style="min-width: 0;">
      <TopBar />

      <slot />

      <footer style="border-top: 1px solid var(--line); padding: 16px 30px; display: flex; justify-content: space-between; gap: 16px; flex-wrap: wrap; font-size: 10px; letter-spacing: .1em; text-transform: uppercase; color: var(--mut);">
        <span>dhs cs club · dublin high school</span>
        <span>hack club chapter</span>
      </footer>
    </div>
  </div>
</template>

<style scoped>
.app-shell {
  min-height: 100vh;
  display: grid;
  grid-template-columns: 246px minmax(0, 1fr);
  background: var(--bg);
  color: var(--tx);
  font-family: 'Space Mono', monospace;
  -webkit-font-smoothing: antialiased;
}

@media (max-width: 780px) {
  .app-shell {
    grid-template-columns: minmax(0, 1fr);
  }
}
</style>
