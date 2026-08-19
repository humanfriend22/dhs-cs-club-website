<script setup lang="ts">
import { scheduleTbdNote } from '~/data/club'
import { hasSchedule, nextEvent } from '~/utils/schedule'

const countdownTarget = hasSchedule && nextEvent?.datetime ? new Date(nextEvent.datetime) : null
const { remaining } = countdownTarget ? useCountdown(countdownTarget) : { remaining: null }
</script>

<template>
  <div v-if="hasSchedule && nextEvent" style="position: relative; margin: 22px 26px 26px; border: 1px solid var(--ink); background: var(--bg); padding: 16px 18px;">
    <div style="font-size: 10px; letter-spacing: .12em; text-transform: uppercase; color: var(--mut);">Kickoff meeting in</div>
    <div v-if="remaining" style="display: flex; gap: 16px; margin-top: 10px; align-items: baseline;">
      <div><span style="font-size: 26px; font-weight: 700; color: var(--ink);">{{ remaining.d }}</span><span style="font-size: 11px; color: var(--mut);">d</span></div>
      <div><span style="font-size: 26px; font-weight: 700; color: var(--ink);">{{ remaining.h }}</span><span style="font-size: 11px; color: var(--mut);">h</span></div>
      <div><span style="font-size: 26px; font-weight: 700; color: var(--ink);">{{ remaining.m }}</span><span style="font-size: 11px; color: var(--mut);">m</span></div>
      <div><span style="font-size: 26px; font-weight: 700; color: var(--acc);">{{ remaining.s }}</span><span style="font-size: 11px; color: var(--mut);">s</span></div>
      <span style="margin-left: auto; font-size: 11px; color: var(--mut);">{{ nextEvent.date }} · {{ nextEvent.time }}</span>
    </div>
    <div v-else style="margin-top: 10px; font-size: 15px; font-weight: 700; color: var(--ink);">{{ nextEvent.date }} · {{ nextEvent.time }}</div>
  </div>
  <div v-else style="position: relative; margin: 22px 26px 26px; border: 1px solid var(--line); background: var(--bg); padding: 16px 18px;">
    <div style="font-size: 10px; letter-spacing: .12em; text-transform: uppercase; color: var(--mut);">Kickoff meeting</div>
    <div style="margin-top: 10px; font-size: 15px; font-weight: 700; color: var(--ink);">Schedule to be determined</div>
    <div style="margin-top: 6px; font-size: 12px; line-height: 1.6; color: var(--tx2);">{{ scheduleTbdNote }}</div>
  </div>
</template>
