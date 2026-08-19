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
  <div :data-theme="theme" class="min-h-screen grid grid-cols-[246px_minmax(0,1fr)] max-[780px]:grid-cols-[minmax(0,1fr)] bg-bg text-tx font-mono antialiased">
    <NavSidebar />

    <div class="min-w-0">
      <TopBar />

      <slot />

      <footer class="border-t border-line py-4 px-[30px] flex justify-between gap-4 flex-wrap text-[10px] tracking-[.1em] uppercase text-mut">
        <span>dhs cs club · dublin high school</span>
        <span>hack club chapter</span>
      </footer>
    </div>
  </div>
</template>
