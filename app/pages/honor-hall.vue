<script setup lang="ts">
import honorHallRaw from '~~/content/honor-hall.json'
import { formatDate } from '~/utils/formatDate'

const honorHall = [...honorHallRaw].sort((a, b) => b.date.localeCompare(a.date))
</script>

<template>
  <main class="wipe">
    <section class="pt-11 px-[30px] pb-[30px] border-b border-line">
      <div class="text-[11px] tracking-[.14em] uppercase text-mut">// honor hall</div>
      <h2 class="mt-3.5 text-[34px] font-bold tracking-[-.035em] text-ink max-w-[24em]">Members recognized</h2>
      <p class="mt-3.5 max-w-[62ch] font-jetbrains text-[13px] leading-[1.7] text-tx2">Added by officers for shipping, mentoring, or teaching</p>
    </section>

    <section class="grid grid-cols-[repeat(auto-fit,minmax(min(280px,100%),1fr))]">
      <div
        v-for="h in honorHall"
        :key="h.name + h.date"
        class="py-6 px-[26px] border-r border-b border-line2 hover:bg-bg2"
      >
        <div class="flex items-baseline justify-between gap-2.5">
          <div class="text-[15px] font-bold text-ink tracking-[-.01em]">{{ h.name }}</div>
          <div class="text-[10px] tracking-[.1em] text-mut whitespace-nowrap">{{ formatDate(h.date) }}</div>
        </div>
        <p class="mt-2.5 font-jetbrains text-[12.5px] leading-[1.6] text-tx2">{{ h.description }}</p>
        <div v-if="h.links?.length" class="flex flex-wrap gap-2 mt-3.5">
          <a
            v-for="link in h.links"
            :key="link.url"
            :href="link.url"
            target="_blank"
            rel="noopener"
            class="inline-flex text-[11px] tracking-[.04em] text-tx2 bg-bg2 border border-line py-1.5 px-2.5 hover:text-acc hover:border-acc"
          >{{ link.label }} →</a>
        </div>
      </div>
    </section>

    <section v-if="honorHall.length === 0" class="py-11 px-[30px] text-mut text-[13px]">
      No one's been added yet — officers add entries to content/honor-hall.json.
    </section>
  </main>
</template>
