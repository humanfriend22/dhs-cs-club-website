<script setup lang="ts">
import { Rocket, Users, Wrench } from 'lucide-vue-next'
import { doList } from '~/data/club'

const icons: Record<string, any> = { rocket: Rocket, users: Users, wrench: Wrench }
</script>

<template>
  <div class="flex flex-col px-[1.625rem]">
    <div
      v-for="d in doList"
      :key="d.title"
      class="py-2.5 px-3 border-b border-line2 cursor-default rounded-[0.125rem] ring-1 ring-inset ring-transparent transition duration-150 hover:ring-acc"
    >
      <div class="flex items-center gap-3">
        <component :is="icons[d.icon]" class="text-acc flex-none w-4 h-4" />
        <div class="text-[0.9375rem] font-bold text-ink tracking-[-.02em]">{{ d.title }}</div>
      </div>
      <div class="mt-1 pl-[1.875rem] font-jetbrains text-[0.7813rem] leading-[1.5] text-tx2" style="text-wrap: pretty;">{{ d.body }}</div>
    </div>
  </div>
</template>
