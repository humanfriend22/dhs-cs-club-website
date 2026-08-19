<script setup lang="ts">
import { doList } from '~/data/club'
</script>

<template>
  <div style="display: flex; flex-direction: column; padding: 0 26px;">
    <div
      v-for="d in doList"
      :key="d.title"
      class="row"
      style="display: grid; grid-template-columns: 14px 1fr; gap: 12px; padding: 16px 0; border-bottom: 1px solid var(--line2); cursor: default;"
    >
      <span class="mark" style="font-size: 13px; font-weight: 700; color: var(--acc); transition: transform .18s ease;">›</span>
      <div>
        <div style="font-size: 15px; font-weight: 700; color: var(--ink); letter-spacing: -.02em;">{{ d.title }}</div>
        <div style="margin-top: 6px; font-family: 'JetBrains Mono', monospace; font-size: 12.5px; line-height: 1.6; color: var(--tx2); text-wrap: pretty;">{{ d.body }}</div>
      </div>
    </div>
  </div>
</template>
