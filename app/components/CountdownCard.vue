<script setup lang="ts">
import { hasSchedule, nextEvent } from '~/utils/schedule'

const countdownTarget = hasSchedule && nextEvent?.datetime ? new Date(nextEvent.datetime) : null
const { remaining } = countdownTarget ? useCountdown(countdownTarget) : { remaining: null }
</script>

<template>
  <div v-if="hasSchedule && nextEvent" class="relative mt-[1rem] m-[1.125rem] border border-ink bg-bg py-3 px-[1.125rem]">
    <div class="text-[0.625rem] tracking-[.12em] uppercase text-mut">Next meeting</div>
    <div v-if="remaining" class="flex gap-4 mt-2.5 items-baseline">
      <div><span class="text-[1.625rem] font-bold text-ink">{{ remaining.d }}</span><span class="text-[0.6875rem] text-mut">d</span></div>
      <div><span class="text-[1.625rem] font-bold text-ink">{{ remaining.h }}</span><span class="text-[0.6875rem] text-mut">h</span></div>
      <div><span class="text-[1.625rem] font-bold text-ink">{{ remaining.m }}</span><span class="text-[0.6875rem] text-mut">m</span></div>
      <div><span class="text-[1.625rem] font-bold text-acc">{{ remaining.s }}</span><span class="text-[0.6875rem] text-mut">s</span></div>
      <span class="ml-auto text-[0.6875rem] text-mut">{{ nextEvent.date }} · {{ nextEvent.time }}</span>
    </div>
    <div v-else class="mt-2.5 text-[0.9375rem] font-bold text-ink">{{ nextEvent.date }} · {{ nextEvent.time }}</div>
  </div>
  <div v-else class="relative mt-[1rem] mx-[1.125rem] mb-[1.125rem] border border-line bg-bg py-3 px-[1.125rem]">
    <div class="text-[0.625rem] tracking-[.12em] uppercase text-mut">Next meeting</div>
    <div class="mt-2.5 text-[0.9375rem] font-bold text-ink">Schedule to be determined</div>
  </div>
</template>
