<script setup lang="ts">
import { MessageCircle, Instagram, Mail } from 'lucide-vue-next'
import { facts, sponsors, socials, contactEmail, headlineWords } from '~/data/club'

const socialIcons: Record<string, object> = { discord: MessageCircle, instagram: Instagram }
</script>

<template>
  <main class="wipe">
    <section class="grid grid-cols-[repeat(auto-fit,minmax(min(430px,100%),1fr))] border-b border-line">
      <div class="pt-[54px] px-[30px] pb-11 border-r border-line">
        <div class="up u1 text-[11px] tracking-[.14em] uppercase text-mut">// computer science club</div>
        <h1 class="up u2 mt-[18px] text-[clamp(28px,3.4vw,44px)] leading-[1.15] font-bold tracking-[-.04em] text-ink max-w-[20em]">
          A club for building<br>
          <span class="inline-block h-[1.15em] overflow-hidden align-bottom">
            <span class="cycle block">
              <span
                v-for="(word, i) in headlineWords"
                :key="i"
                class="block leading-[1.15em] text-acc"
              >{{ word }}</span>
            </span>
          </span><br>at Dublin High School.
        </h1>
        <p class="up u3 mt-5 max-w-[58ch] text-[15px] leading-[1.7] text-tx2 font-jetbrains" style="text-wrap: pretty;">Beginners and experienced programmers in the same room, in D-204. Workshops one week, open build time the next. No prerequisite class, no dues, no cut list.</p>
        <div class="up u4 flex flex-wrap gap-2.5 mt-[30px]">
          <AppButton to="/join" variant="primary" lift>JOIN US</AppButton>
          <AppButton to="/events" variant="secondary">VIEW SCHEDULE</AppButton>
        </div>
      </div>
      <div class="relative bg-bg3 flex flex-col min-h-[340px]">
        <div class="pt-[26px] px-[26px] pb-1.5 text-[11px] tracking-[.14em] uppercase text-mut">// what we do</div>
        <DoList />
        <CountdownCard />
      </div>
    </section>

    <section class="grid grid-cols-[repeat(auto-fit,minmax(min(220px,100%),1fr))] border-b border-line">
      <div
        v-for="f in facts"
        :key="f.title"
        class="py-[26px] px-6 shadow-[1px_0_0_var(--line)]"
      >
        <div class="text-[15px] font-bold text-ink tracking-[-.02em]">{{ f.title }}</div>
        <div class="mt-2 font-jetbrains text-[12.5px] leading-[1.6] text-tx2">{{ f.body }}</div>
      </div>
    </section>

    <section class="grid grid-cols-[repeat(auto-fit,minmax(min(320px,100%),1fr))] border-b border-line">
      <div class="py-[38px] px-[30px] border-r border-line bg-bg2">
        <div class="text-[11px] tracking-[.14em] uppercase text-mut">// sponsors</div>
        <div v-if="sponsors.length" class="grid grid-cols-[repeat(auto-fit,minmax(min(220px,100%),1fr))] gap-px mt-[18px]">
          <a
            v-for="s in sponsors"
            :key="s.name"
            :href="s.url"
            target="_blank"
            rel="noopener"
            class="block py-[11px] border-b border-dashed border-line2 text-[13px] font-bold text-ink"
          >{{ s.name }}</a>
        </div>
        <div v-else class="mt-[18px] font-jetbrains text-[13px] leading-[1.7] text-tx2">No sponsors yet — we're a brand-new chapter.</div>
        <div class="mt-[26px] border border-line bg-bg p-4">
          <div class="text-[10px] tracking-[.12em] uppercase text-mut">Want to sponsor us?</div>
          <div class="mt-[9px] text-xs leading-[1.7] text-tx">Reach out to our advisor, ms. navarro, to talk about supporting the club.</div>
        </div>
      </div>
      <div class="py-[38px] px-[30px]">
        <div class="text-[11px] tracking-[.14em] uppercase text-mut">// socials</div>
        <div class="flex flex-col gap-2.5 mt-[18px] max-w-[320px]">
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
