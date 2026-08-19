<script setup lang="ts">
import { hasSchedule, nextEvent } from '~/utils/schedule'

const countdownTarget = hasSchedule && nextEvent?.datetime ? new Date(nextEvent.datetime) : null
const { remaining } = countdownTarget ? useCountdown(countdownTarget) : { remaining: null }
</script>

<template>
  <div v-if="hasSchedule && nextEvent" class="relative mt-[22px] mx-[26px] mb-[26px] border border-ink bg-bg py-4 px-[18px]">
    <div class="text-[10px] tracking-[.12em] uppercase text-mut">Next meeting</div>
    <div v-if="remaining" class="flex gap-4 mt-2.5 items-baseline">
      <div><span class="text-[26px] font-bold text-ink">{{ remaining.d }}</span><span class="text-[11px] text-mut">d</span></div>
      <div><span class="text-[26px] font-bold text-ink">{{ remaining.h }}</span><span class="text-[11px] text-mut">h</span></div>
      <div><span class="text-[26px] font-bold text-ink">{{ remaining.m }}</span><span class="text-[11px] text-mut">m</span></div>
      <div><span class="text-[26px] font-bold text-acc">{{ remaining.s }}</span><span class="text-[11px] text-mut">s</span></div>
      <span class="ml-auto text-[11px] text-mut">{{ nextEvent.date }} · {{ nextEvent.time }}</span>
    </div>
    <div v-else class="mt-2.5 text-[15px] font-bold text-ink">{{ nextEvent.date }} · {{ nextEvent.time }}</div>
  </div>
  <div v-else class="relative mt-[22px] mx-[26px] mb-[26px] border border-line bg-bg py-4 px-[18px]">
    <div class="text-[10px] tracking-[.12em] uppercase text-mut">Next meeting</div>
    <div class="mt-2.5 text-[15px] font-bold text-ink">Schedule to be determined</div>
  </div>
</template>
