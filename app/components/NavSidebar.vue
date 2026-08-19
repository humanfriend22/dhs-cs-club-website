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
    class="hidden max-[780px]:block fixed inset-0 z-40 bg-black/50 transition-opacity duration-[250ms] ease-linear"
    :class="drawerOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'"
    @click="closeDrawer"
  />

  <aside
    class="border-r border-line py-5 px-[18px] flex flex-col gap-[22px] sticky top-0 h-screen bg-bg max-[780px]:fixed max-[780px]:top-0 max-[780px]:left-0 max-[780px]:w-[260px] max-[780px]:max-w-[82vw] max-[780px]:z-50 max-[780px]:transition-transform max-[780px]:duration-[250ms] max-[780px]:ease-[cubic-bezier(.16,.84,.24,1)] max-[780px]:shadow-[2px_0_24px_rgba(0,0,0,.25)]"
    :class="drawerOpen ? 'max-[780px]:translate-x-0' : 'max-[780px]:-translate-x-full'"
  >
    <div class="flex items-center justify-between gap-2.5">
      <div class="flex items-center gap-2.5">
        <img src="/dhs-cs-logo.png" alt="DHS CS Club" class="w-9 h-9 rounded">
        <div class="leading-[1.25]">
          <div class="text-[13px] font-bold text-ink tracking-[-.02em]">dhs-cs-club</div>
          <div class="text-[10px] text-mut tracking-[.04em]">dublin high school</div>
        </div>
      </div>
      <button
        class="hidden max-[780px]:flex items-center justify-center w-7 h-7 flex-none text-sm text-tx2 bg-transparent border border-line cursor-pointer hover:text-ink hover:border-ink"
        aria-label="Close menu"
        @click="closeDrawer"
      >
        <X :size="16" />
      </button>
    </div>

    <div class="border border-line bg-bg2 py-[11px] px-3">
      <div class="flex items-center gap-[7px] text-[10px] tracking-[.1em] uppercase text-mut">
        <span class="w-1.5 h-1.5 rounded-full" :class="hasSchedule ? 'bg-ok' : 'bg-warn'" />{{ hasSchedule ? 'Next meeting' : 'Schedule' }}
      </div>
      <template v-if="hasSchedule && nextEvent">
        <div class="mt-2 text-[13px] font-bold text-ink">{{ nextEvent.date }} · {{ nextEvent.time }}</div>
        <div class="mt-[3px] text-[11px] text-tx2">{{ nextEvent.where }}</div>
      </template>
      <template v-else>
        <div class="mt-2 text-[13px] font-bold text-ink">To be determined</div>
        <div class="mt-[3px] text-[11px] text-tx2">{{ scheduleTbdNote }}</div>
      </template>
    </div>

    <nav class="flex flex-col gap-0.5">
      <NuxtLink
        v-for="link in links"
        :key="link.to"
        :to="link.to"
        class="flex items-center gap-[9px] text-left text-[13px] bg-transparent border-0 border-l-2 border-transparent py-[11px] px-2.5 min-h-11 text-tx2 hover:bg-bg3 hover:text-ink"
        :class="{ 'text-ink': isActive(link.to) }"
        @click="closeDrawer"
      >
        <span class="text-acc">{{ isActive(link.to) ? '▸ ' : '  ' }}</span>{{ link.label }}
      </NuxtLink>
    </nav>

    <div class="mt-auto flex flex-col gap-[7px] text-[10px] text-mut tracking-[.04em]">
      <div class="border-t border-line pt-3">HACK CLUB CHAPTER</div>
      <div>advisor: ms. navarro</div>
    </div>
  </aside>
</template>
