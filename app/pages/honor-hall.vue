<script setup lang="ts">
import { honorHall } from '~/utils/honorHall'
import { formatDate } from '~/utils/formatDate'
</script>

<template>
  <main class="wipe">
    <section class="pt-11 px-[1.875rem] pb-[1.875rem] border-b border-line">
      <div class="text-[0.6875rem] tracking-[.14em] uppercase text-mut">// honor hall</div>
      <h2 class="mt-3.5 text-[2.125rem] font-bold tracking-[-.035em] text-ink max-w-[24em]">Members recognized</h2>
      <p class="mt-3.5 max-w-[62ch] font-jetbrains text-[0.8125rem] leading-[1.7] text-tx2">Added by officers for shipping, mentoring, or teaching</p>
    </section>

    <section class="grid grid-cols-[repeat(auto-fit,minmax(min(280px,100%),1fr))]">
      <div
        v-for="h in honorHall"
        :key="h.name + h.date"
        class="py-6 px-[1.625rem] border-r border-b border-line2 hover:bg-bg2"
      >
        <div class="flex items-baseline justify-between gap-2.5">
          <div class="text-[0.9375rem] font-bold text-ink tracking-[-.01em]">{{ h.name }}</div>
          <div class="text-[0.625rem] tracking-[.1em] text-mut whitespace-nowrap">{{ formatDate(h.date) }}</div>
        </div>
        <p class="mt-2.5 font-jetbrains text-[0.7813rem] leading-[1.6] text-tx2">{{ h.description }}</p>
        <div v-if="h.links?.length" class="flex flex-wrap gap-2 mt-3.5">
          <a
            v-for="link in h.links"
            :key="link.url"
            :href="link.url"
            target="_blank"
            rel="noopener"
            class="inline-flex text-[0.6875rem] tracking-[.04em] text-tx2 bg-bg2 border border-line py-1.5 px-2.5 hover:text-acc hover:border-acc"
          >{{ link.label }} →</a>
        </div>
      </div>
    </section>

    <section v-if="honorHall.length === 0" class="py-11 px-[1.875rem] text-mut text-[0.8125rem]">
      No one's been added yet — officers add entries to content/honor-hall.json.
    </section>
  </main>
</template>
