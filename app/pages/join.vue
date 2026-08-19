<script setup lang="ts">
import { steps, faq } from '~/data/club'
</script>

<template>
  <main class="wipe grid grid-cols-[repeat(auto-fit,minmax(min(400px,100%),1fr))]">
    <div class="pt-11 px-[30px] pb-[60px] border-r border-line">
      <div class="text-[11px] tracking-[.14em] uppercase text-mut">// membership form</div>
      <h2 class="mt-3.5 text-[clamp(24px,2.6vw,32px)] font-bold tracking-[-.035em] text-ink max-w-[20em]">Fill this out and we'll see you in D-204.</h2>
      <JoinForm />
    </div>

    <aside class="bg-bg2">
      <div class="p-[26px] border-b border-line">
        <div class="text-[10px] tracking-[.12em] uppercase text-mut">What happens next</div>
        <div class="flex flex-col gap-4 mt-4">
          <div v-for="s in steps" :key="s.n" class="grid grid-cols-[22px_1fr] gap-[11px]">
            <span class="text-xs font-bold text-acc">{{ s.n }}.</span>
            <div>
              <div class="text-[13px] font-bold text-ink">{{ s.title }}</div>
              <div class="mt-[5px] font-jetbrains text-xs leading-[1.6] text-tx2">{{ s.body }}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="p-[26px]">
        <div class="text-[10px] tracking-[.12em] uppercase text-mut">FAQ</div>
        <div class="flex flex-col gap-[15px] mt-4">
          <div v-for="f in faq" :key="f.q">
            <div class="text-[12.5px] font-bold text-ink">{{ f.q }}</div>
            <div class="mt-[5px] font-jetbrains text-xs leading-[1.6] text-tx2">{{ f.a }}</div>
          </div>
        </div>
      </div>
    </aside>
  </main>
</template>
