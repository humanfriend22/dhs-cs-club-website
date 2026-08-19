<script setup lang="ts">
import { steps, faq } from '~/data/club'
</script>

<template>
  <main class="wipe" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(min(400px, 100%), 1fr));">
    <div style="padding: 44px 30px 60px; border-right: 1px solid var(--line);">
      <div style="font-size: 11px; letter-spacing: .14em; text-transform: uppercase; color: var(--mut);">// membership form</div>
      <h2 style="margin: 14px 0 0; font-size: clamp(24px, 2.6vw, 32px); font-weight: 700; letter-spacing: -.035em; color: var(--ink); max-width: 20em;">Fill this out and we'll see you in D-204.</h2>
      <JoinForm />
    </div>

    <aside style="background: var(--bg2);">
      <div style="padding: 26px; border-bottom: 1px solid var(--line);">
        <div style="font-size: 10px; letter-spacing: .12em; text-transform: uppercase; color: var(--mut);">What happens next</div>
        <div style="display: flex; flex-direction: column; gap: 16px; margin-top: 16px;">
          <div v-for="s in steps" :key="s.n" style="display: grid; grid-template-columns: 22px 1fr; gap: 11px;">
            <span style="font-size: 12px; font-weight: 700; color: var(--acc);">{{ s.n }}.</span>
            <div>
              <div style="font-size: 13px; font-weight: 700; color: var(--ink);">{{ s.title }}</div>
              <div style="margin-top: 5px; font-family: 'JetBrains Mono', monospace; font-size: 12px; line-height: 1.6; color: var(--tx2);">{{ s.body }}</div>
            </div>
          </div>
        </div>
      </div>
      <div style="padding: 26px;">
        <div style="font-size: 10px; letter-spacing: .12em; text-transform: uppercase; color: var(--mut);">FAQ</div>
        <div style="display: flex; flex-direction: column; gap: 15px; margin-top: 16px;">
          <div v-for="f in faq" :key="f.q">
            <div style="font-size: 12.5px; font-weight: 700; color: var(--ink);">{{ f.q }}</div>
            <div style="margin-top: 5px; font-family: 'JetBrains Mono', monospace; font-size: 12px; line-height: 1.6; color: var(--tx2);">{{ f.a }}</div>
          </div>
        </div>
      </div>
    </aside>
  </main>
</template>
