<script setup lang="ts">
import { Rocket, Users, Wrench } from 'lucide-vue-next'
import { doList } from '~/data/club'

const icons: Record<string, any> = { rocket: Rocket, users: Users, wrench: Wrench }
</script>

<template>
  <div class="flex flex-col px-[26px]">
    <div
      v-for="d in doList"
      :key="d.title"
      class="row grid grid-cols-[18px_1fr] gap-3 py-4 px-3 border-b border-line2 cursor-default rounded-[2px] ring-1 ring-inset ring-transparent transition duration-150 hover:ring-acc"
    >
      <component :is="icons[d.icon]" class="mark text-acc transition-transform duration-[180ms]" :size="16" />
      <div>
        <div class="text-[15px] font-bold text-ink tracking-[-.02em]">{{ d.title }}</div>
        <div class="mt-1.5 font-jetbrains text-[12.5px] leading-[1.6] text-tx2" style="text-wrap: pretty;">{{ d.body }}</div>
      </div>
    </div>
  </div>
</template>
