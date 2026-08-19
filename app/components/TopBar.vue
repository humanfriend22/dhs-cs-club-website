<script setup lang="ts">
import { Menu, Moon, Sun } from 'lucide-vue-next'

const { dark, toggle } = useTheme()
const { toggle: toggleDrawer } = useDrawer()
const route = useRoute()

const paths: Record<string, string> = {
  '/': 'overview',
  '/events': 'schedule',
  '/honor-hall': 'honor-hall',
  '/join': 'join'
}

const path = computed(() => paths[route.path] ?? '')
const themeLabel = computed(() => (dark.value ? 'Switch to light mode' : 'Switch to dark mode'))
</script>

<template>
  <div class="border-b border-line py-3 px-[30px] flex items-center justify-between gap-4 bg-bg2 sticky top-0 z-20">
    <div class="flex items-center gap-3.5 min-w-0">
      <button
        class="hidden max-[780px]:flex items-center justify-center w-9 h-9 flex-none text-[16px] text-ink bg-transparent border border-line cursor-pointer hover:border-ink"
        aria-label="Open menu"
        @click="toggleDrawer"
      >
        <Menu :size="18" />
      </button>
      <div class="text-xs text-tx2 whitespace-nowrap overflow-hidden text-ellipsis"><span class="text-acc">~/dhs-cs</span>/{{ path }}<span class="cursor text-ink">_</span></div>
    </div>
    <div class="flex items-center gap-2.5">
      <AppButton variant="ghost" size="icon" :aria-label="themeLabel" @click="toggle">
        <Sun v-if="dark" :size="16" />
        <Moon v-else :size="16" />
      </AppButton>
      <AppButton to="/join" variant="dark" size="sm" class="max-[780px]:hidden">JOIN THE CLUB →</AppButton>
    </div>
  </div>
</template>
