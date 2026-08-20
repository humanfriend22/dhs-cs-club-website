<script setup lang="ts">
import { X } from 'lucide-vue-next'
import { scheduleTbdNote } from '~/data/club'
import { hasSchedule, nextEvent } from '~/utils/schedule'

const route = useRoute()
const { open: drawerOpen, close: closeDrawer } = useDrawer()

const links = [
  { to: '/', label: 'overview' },
  { to: '/events', label: 'schedule' },
  { to: '/honor-hall', label: 'honor hall' },
  { to: '/join', label: 'join' }
]

function isActive(to: string) {
  return route.path === to
}
</script>

<template>
   <div
    class="block lg:hidden fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 ease-linear"
    :class="drawerOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'"
    @click="closeDrawer"
  />

  <aside
    class="fixed lg:sticky top-0 left-0 z-50 lg:z-auto h-screen w-64 max-w-[82vw] lg:max-w-none border-r border-line bg-bg py-5 px-[1.125rem] flex flex-col gap-[1.375rem] transition-transform lg:transition-none duration-300 ease-out shadow-2xl lg:shadow-none -translate-x-full lg:translate-x-0"
    :class="drawerOpen && 'translate-x-0'"
  >
    <div class="flex items-center justify-between gap-2.5">
      <div class="flex items-center gap-2.5">
        <img src="/dhs-cs-logo.png" alt="DHS CS Club" class="w-9 h-9 rounded">
        <div class="leading-[1.25]">
          <div class="text-[0.8125rem] font-bold text-ink tracking-[-.02em]">dhs-cs-club</div>
          <div class="text-[0.625rem] text-mut tracking-[.04em]">dublin high school</div>
        </div>
      </div>
      <button
        class="flex lg:hidden items-center justify-center w-7 h-7 flex-none text-sm text-tx2 bg-transparent border border-line cursor-pointer hover:text-ink hover:border-ink"
        aria-label="Close menu"
        @click="closeDrawer"
      >
        <X class="w-4 h-4" />
      </button>
    </div>

    <div class="border border-line bg-bg2 py-[0.6875rem] px-3">
      <div class="flex items-center gap-[0.4375rem] text-[0.625rem] tracking-[.1em] uppercase text-mut">
        <span class="w-1.5 h-1.5 rounded-full" :class="hasSchedule ? 'bg-ok' : 'bg-warn'" />{{ hasSchedule ? 'Next meeting' : 'Schedule' }}
      </div>
      <template v-if="hasSchedule && nextEvent">
        <div class="mt-2 text-[0.8125rem] font-bold text-ink">{{ nextEvent.date }} · {{ nextEvent.time }}</div>
        <div class="mt-[0.1875rem] text-[0.6875rem] text-tx2">{{ nextEvent.where }}</div>
      </template>
      <template v-else>
        <div class="mt-2 text-[0.8125rem] font-bold text-ink">To be determined</div>
        <div class="mt-[0.1875rem] text-[0.6875rem] text-tx2">{{ scheduleTbdNote }}</div>
      </template>
    </div>

    <nav class="flex flex-col gap-0.5">
      <NuxtLink
        v-for="link in links"
        :key="link.to"
        :to="link.to"
        class="flex items-center gap-[0.5625rem] text-left text-[0.8125rem] bg-transparent border-0 border-l-2 border-transparent py-[0.6875rem] px-2.5 min-h-11 text-tx2 hover:bg-bg3 hover:text-ink"
        :class="{ 'text-ink': isActive(link.to) }"
        @click="closeDrawer"
      >
        <span class="text-acc">{{ isActive(link.to) ? '▸ ' : '  ' }}</span>{{ link.label }}
      </NuxtLink>
    </nav>
  </aside>
</template>
