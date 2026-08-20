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
  <div :data-theme="theme" class="h-screen overflow-hidden grid grid-rows-[1fr] grid-cols-1 lg:grid-cols-[16rem_1fr] bg-bg text-tx font-mono antialiased">
    <NavSidebar />

    <div class="min-w-0 min-h-0 flex flex-col h-full">
      <TopBar />

      <div class="flex-1 min-h-0 overflow-y-auto">
        <slot />
      </div>

      <footer class="flex-none border-t border-line py-[0.9375rem] px-[1.875rem] flex justify-between gap-4 flex-wrap text-[0.625rem] tracking-[.1em] text-mut">
        <span>stay fly, dublin high</span>
        <span>{{ $config.public.GIT_COMMIT.slice(0, 7) }}</span>
      </footer>
    </div>
  </div>
</template>
