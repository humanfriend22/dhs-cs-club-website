<script setup lang="ts">
import { scheduleTbdNote } from '~/data/club'
import events from '~~/content/events.json'

function kindColor(kind: string) {
  return kind === 'meeting' ? 'var(--acc)' : 'var(--ok)'
}

const infoCards = [
  {
    title: 'Discord',
    body: 'Join our Discord server. Ask questions between meetings.'
  },
  {
    title: 'Room',
    body: 'D-204, second floor of the D wing. Door stays propped until 3:45.'
  }
]
</script>

<template>
  <main class="wipe">
    <section class="pt-11 px-[1.875rem] pb-7 border-b border-line">
      <div class="text-[0.6875rem] tracking-[.14em] uppercase text-mut">// fall 2026</div>
      <h2 class="mt-3.5 text-[2.125rem] font-bold tracking-[-.035em] text-ink">Meetings &amp; after-school events</h2>
    </section>

    <section v-if="events.length">
      <div class="hidden sm:grid grid-cols-[88px_minmax(0,1fr)_108px_84px] gap-4 py-[0.6875rem] px-[1.875rem] border-b border-line bg-bg2 text-[0.625rem] tracking-[.12em] uppercase text-mut">
        <span>Date</span><span>What</span><span>Where</span><span>Type</span>
      </div>
      <div
        v-for="e in events"
        :key="e.title"
        class="grid grid-cols-1 gap-1.5 py-4 px-5 sm:grid-cols-[88px_minmax(0,1fr)_108px_84px] sm:gap-4 sm:py-[1.125rem] sm:px-[1.875rem] sm:items-baseline border-b border-line2 hover:bg-bg2"
      >
        <div>
          <div class="text-[0.8125rem] font-bold text-ink">{{ e.date }}</div>
          <div class="text-[0.6875rem] text-mut mt-[0.1875rem]">{{ e.time }}</div>
        </div>
        <div class="min-w-0">
          <div class="text-[0.9375rem] font-bold text-ink tracking-[-.02em]">{{ e.title }}</div>
          <div class="mt-1.5 font-jetbrains text-[0.7813rem] leading-[1.6] text-tx2 max-w-[66ch]">{{ e.detail }}</div>
        </div>
        <div class="text-xs text-tx2">{{ e.where }}</div>
        <div>
          <span
            class="text-[0.625rem] tracking-[.1em] uppercase py-1 px-2 border"
            :style="{ borderColor: kindColor(e.kind), color: kindColor(e.kind) }"
          >{{ e.kind }}</span>
        </div>
      </div>
    </section>

    <section v-else class="py-11 px-[1.875rem] border-b border-line">
      <div class="text-[0.9375rem] font-bold text-ink">Schedule to be determined</div>
      <p class="mt-2.5 max-w-[60ch] font-jetbrains text-[0.8125rem] leading-[1.7] text-tx2">{{ scheduleTbdNote }}</p>
    </section>

    <section class="grid grid-cols-1 sm:grid-cols-2 border-b border-line">
      <div
        v-for="(card, i) in infoCards"
        :key="card.title"
        class="p-5 border-b border-line min-w-0 sm:border-b-0 sm:py-[1.625rem] sm:px-[1.875rem]"
        :class="i < infoCards.length - 1 ? 'sm:border-r sm:border-line' : ''"
      >
        <div class="text-[0.625rem] tracking-[.12em] uppercase text-mut">{{ card.title }}</div>
        <p class="mt-2.5 text-[0.7813rem] leading-[1.65] text-tx2">{{ card.body }}</p>
      </div>
    </section>
  </main>
</template>
