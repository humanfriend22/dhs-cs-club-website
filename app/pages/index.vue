<script setup lang="ts">
import type { Component } from 'vue'
import { MessageCircle, Instagram, Mail } from 'lucide-vue-next'
import { facts, sponsors, socials, contactEmail, headlineWords } from '~/data/club'

const socialIcons: Record<string, Component> = { discord: MessageCircle, instagram: Instagram }
</script>

<template>
  <main class="wipe h-full flex flex-col">
    <section class="grid grid-cols-[repeat(auto-fit,minmax(min(430px,100%),1fr))] border-b border-line">
      <div class="py-[var(--py-section)] px-[1.875rem] border-r border-line">
        <div class="up u1 text-[0.6875rem] tracking-[.14em] uppercase text-mut">// computer science club</div>
        <h1 class="up u2 mt-[1rem] text-[clamp(26px,3vw,40px)] leading-[1.15] font-bold tracking-[-.04em] text-ink max-w-[20em]">
          A club for building<br>
          <span class="inline-block h-[1.15em] overflow-hidden align-bottom">
            <span class="cycle block">
              <span v-for="(word, i) in [...headlineWords, headlineWords[0]]" :key="i" class="block leading-[1.15em] text-acc" >{{ word }}</span>
            </span>
          </span><br>at Dublin High School.
        </h1>
        <p class="up u3 mt-3 max-w-[58ch] text-[0.9375rem] leading-[1.5] text-tx2 font-jetbrains" style="text-wrap: pretty;">Beginners and experienced programmers in the same room, in D-204. Workshops one week, open build time the next. No prerequisite class, no dues, no cut list.</p>
        <div class="up u4 flex flex-wrap gap-2.5 mt-[1.125rem]">
          <AppButton to="/join" variant="primary" lift>JOIN US</AppButton>
          <AppButton to="/events" variant="secondary">VIEW SCHEDULE</AppButton>
        </div>
      </div>
      <div class="relative bg-bg3 flex flex-col min-h-[18rem]">
        <div class="pt-[var(--py-section)] px-[1.625rem] pb-1.5 text-[0.6875rem] tracking-[.14em] uppercase text-mut">// what we do</div>
        <DoList />
        <CountdownCard />
      </div>
    </section>

    <section class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-b border-line">
      <div v-for="f in facts" :key="f.title" class="py-[var(--py-section)] px-6 shadow-[1px_0_0_var(--line)]">
        <div class="text-sm font-bold text-ink tracking-[-.02em]">{{ f.title }}</div>
        <div class="mt-1.5 font-jetbrains text-xs leading-[1.5] text-tx2">{{ f.body }}</div>
      </div>
    </section>

    <section class="grid grid-cols-[repeat(auto-fit,minmax(min(320px,100%),1fr))] border-b border-line flex-1 min-h-0">
      <div class="h-full py-[var(--py-section)] px-[1.875rem] border-r border-line bg-bg2">
        <div class="text-[0.6875rem] tracking-[.14em] uppercase text-mut">// sponsors</div>
        <div v-if="sponsors.length" class="grid grid-cols-[repeat(auto-fit,minmax(min(220px,100%),1fr))] gap-px mt-[1.125rem]">
          <a
            v-for="s in sponsors"
            :key="s.name"
            :href="s.url"
            target="_blank"
            rel="noopener"
            class="block py-[0.6875rem] border-b border-dashed border-line2 text-[0.8125rem] font-bold text-ink"
          >{{ s.name }}</a>
        </div>
        <div v-else class="mt-[1.125rem] font-jetbrains text-[0.8125rem] leading-[1.7] text-tx2">No sponsors yet — we're a brand-new chapter.</div>
        <div class="mt-[1.125rem] border border-line bg-bg p-3">
          <div class="text-[0.625rem] tracking-[.12em] uppercase text-mut">Want to sponsor us?</div>
          <div class="mt-[0.5625rem] text-xs leading-[1.7] text-tx">Reach out to our advisor, ms. navarro, to talk about supporting the club.</div>
        </div>
      </div>
      <div class=" h-full py-[var(--py-section)] px-[1.875rem]">
        <div class="text-[0.6875rem] tracking-[.14em] uppercase text-mut">// socials</div>
        <div class="flex flex-col gap-2 mt-[1rem] max-w-[20rem]">
          <SocialButton
            v-for="s in socials"
            :key="s.name"
            :icon="socialIcons[s.icon]!"
            :label="s.name"
            :url="s.url"
            :color="s.color"
          />
          <SocialButton :icon="Mail" label="Email us" :copy-value="contactEmail" />
        </div>
      </div>
    </section>
  </main>
</template>
