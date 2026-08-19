<script setup lang="ts">
import { grades, levels, interests } from '~/data/club'

const name = ref('')
const email = ref('')
const grade = ref(grades[2])
const level = ref(levels[0].label)
const picks = ref<string[]>(['web apps', 'game dev'])

function toggleInterest(label: string) {
  const idx = picks.value.indexOf(label)
  if (idx === -1) picks.value.push(label)
  else picks.value.splice(idx, 1)
}

function onSubmit() {
  // no backend wired up yet — placeholder for future submit handler
}
</script>

<template>
  <form class="flex flex-col gap-6 mt-8 max-w-[620px]" @submit.prevent="onSubmit">
    <div class="grid grid-cols-[repeat(auto-fit,minmax(min(200px,100%),1fr))] gap-3.5">
      <label class="flex flex-col gap-[7px]">
        <span class="text-[10px] tracking-[.12em] uppercase text-mut">Full name</span>
        <input v-model="name" type="text" placeholder="avery rodriguez" class="font-jetbrains text-sm text-ink bg-bg2 border border-line p-3 outline-none w-full min-w-0 focus:border-acc">
      </label>
      <label class="flex flex-col gap-[7px]">
        <span class="text-[10px] tracking-[.12em] uppercase text-mut">School email</span>
        <input v-model="email" type="email" placeholder="you@dublinusd.org" class="font-jetbrains text-sm text-ink bg-bg2 border border-line p-3 outline-none w-full min-w-0 focus:border-acc">
      </label>
    </div>

    <div class="flex flex-col gap-[9px]">
      <span class="text-[10px] tracking-[.12em] uppercase text-mut">Grade</span>
      <div class="flex gap-2">
        <button
          v-for="g in grades"
          :key="g"
          type="button"
          class="flex-1 text-[13px] font-bold py-[13px] cursor-pointer min-h-11 border"
          :class="grade === g ? 'text-bg bg-ink border-ink' : 'text-tx2 bg-bg2 border-line'"
          @click="grade = g"
        >{{ g }}</button>
      </div>
    </div>

    <div class="flex flex-col gap-[9px]">
      <span class="text-[10px] tracking-[.12em] uppercase text-mut">Experience</span>
      <div class="flex flex-col gap-[7px]">
        <button
          v-for="l in levels"
          :key="l.label"
          type="button"
          class="flex items-center gap-[11px] text-left text-[13px] text-ink bg-bg2 border p-[13px] cursor-pointer min-h-11"
          :class="level === l.label ? 'border-acc' : 'border-line'"
          @click="level = l.label"
        >
          <span
            class="w-[13px] h-[13px] flex-none border"
            :class="level === l.label ? 'border-acc bg-acc' : 'border-mut bg-transparent'"
          />
          <span class="font-bold">{{ l.label }}</span>
          <span class="text-mut text-xs">{{ l.hint }}</span>
        </button>
      </div>
    </div>

    <div class="flex flex-col gap-[9px]">
      <span class="text-[10px] tracking-[.12em] uppercase text-mut">Interests — pick any</span>
      <div class="flex flex-wrap gap-[7px]">
        <button
          v-for="i in interests"
          :key="i"
          type="button"
          class="text-xs border py-2.5 px-3 cursor-pointer min-h-10 whitespace-nowrap"
          :class="picks.includes(i) ? 'text-ink bg-bg3 border-ink' : 'text-tx2 bg-bg2 border-line'"
          @click="toggleInterest(i)"
        >{{ picks.includes(i) ? '[x] ' : '[ ] ' }}{{ i }}</button>
      </div>
    </div>

    <AppButton type="submit" variant="primary" block>SUBMIT →</AppButton>
    <p class="m-0 text-[11px] text-mut">Your email is used for meeting reminders only.</p>
  </form>
</template>
