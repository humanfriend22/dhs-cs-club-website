<script setup lang="ts">
import { facts, pillars, sponsors, headlineWords } from '~/data/club'
</script>

<template>
  <main class="wipe">
    <section style="display: grid; grid-template-columns: repeat(auto-fit, minmax(min(430px, 100%), 1fr)); border-bottom: 1px solid var(--line);">
      <div style="padding: 54px 30px 44px; border-right: 1px solid var(--line);">
        <div class="up u1" style="font-size: 11px; letter-spacing: .14em; text-transform: uppercase; color: var(--mut);">// computer science club</div>
        <h1 class="up u2" style="margin: 18px 0 0; font-size: clamp(28px, 3.4vw, 44px); line-height: 1.15; font-weight: 700; letter-spacing: -.04em; color: var(--ink); max-width: 20em;">
          A club for building<br>
          <span style="display: inline-block; height: 1.15em; overflow: hidden; vertical-align: bottom;">
            <span class="cycle" style="display: block;">
              <span
                v-for="(word, i) in headlineWords"
                :key="i"
                style="display: block; line-height: 1.15em; color: var(--acc);"
              >{{ word }}</span>
            </span>
          </span><br>every other Tuesday at 3:30.
        </h1>
        <p class="up u3" style="margin: 20px 0 0; max-width: 58ch; font-size: 15px; line-height: 1.7; color: var(--tx2); font-family: 'JetBrains Mono', monospace; text-wrap: pretty;">Beginners and experienced programmers in the same room, in D-204. Workshops one week, open build time the next. No prerequisite class, no dues, no cut list.</p>
        <div class="up u4" style="display: flex; flex-wrap: wrap; gap: 10px; margin-top: 30px;">
          <AppButton to="/join" variant="primary" lift>JOIN US</AppButton>
          <AppButton to="/events" variant="secondary">VIEW SCHEDULE</AppButton>
        </div>
      </div>
      <div style="position: relative; background: var(--bg3); display: flex; flex-direction: column; min-height: 340px;">
        <div style="padding: 26px 26px 6px; font-size: 11px; letter-spacing: .14em; text-transform: uppercase; color: var(--mut);">// what we do</div>
        <DoList />
        <CountdownCard />
      </div>
    </section>

    <section style="display: grid; grid-template-columns: repeat(auto-fit, minmax(min(155px, 100%), 1fr)); border-bottom: 1px solid var(--line);">
      <div
        v-for="f in facts"
        :key="f.title"
        style="padding: 22px 24px; box-shadow: 1px 0 0 var(--line);"
      >
        <div style="font-size: 14px; font-weight: 700; color: var(--ink); letter-spacing: -.02em;">{{ f.title }}</div>
        <div style="margin-top: 7px; font-family: 'JetBrains Mono', monospace; font-size: 12px; line-height: 1.6; color: var(--tx2);">{{ f.body }}</div>
      </div>
    </section>

    <section style="display: grid; grid-template-columns: repeat(auto-fit, minmax(min(320px, 100%), 1fr)); border-bottom: 1px solid var(--line);">
      <div style="padding: 38px 30px; border-right: 1px solid var(--line);">
        <div style="font-size: 11px; letter-spacing: .14em; text-transform: uppercase; color: var(--mut);">// what a semester looks like</div>
        <div style="display: flex; flex-direction: column; margin-top: 20px;">
          <div
            v-for="[i, pillar] of pillars.entries()"
            :key="i"
            style="display: grid; grid-template-columns: 46px 1fr; gap: 18px; padding: 20px 0; border-top: 1px solid var(--line2);"
          >
            <span style="font-size: 12px; color: var(--acc); font-weight: 700;">{{ i }}</span>
            <div>
              <div style="font-size: 16px; font-weight: 700; color: var(--ink); letter-spacing: -.02em;">{{ pillar.title }}</div>
              <p style="margin: 8px 0 0; font-family: 'JetBrains Mono', monospace; font-size: 13px; line-height: 1.65; color: var(--tx2); max-width: 62ch; text-wrap: pretty;">{{ pillar.body }}</p>
            </div>
          </div>
        </div>
      </div>
      <div style="padding: 38px 30px; background: var(--bg2);">
        <div style="font-size: 11px; letter-spacing: .14em; text-transform: uppercase; color: var(--mut);">// sponsors</div>
        <div v-if="sponsors.length" style="display: flex; flex-direction: column; gap: 1px; margin-top: 18px;">
          <a
            v-for="s in sponsors"
            :key="s.name"
            :href="s.url"
            target="_blank"
            rel="noopener"
            style="display: block; padding: 11px 0; border-bottom: 1px dashed var(--line2); font-size: 13px; font-weight: 700; color: var(--ink);"
          >{{ s.name }}</a>
        </div>
        <div v-else style="margin-top: 18px; font-family: 'JetBrains Mono', monospace; font-size: 13px; line-height: 1.7; color: var(--tx2);">No sponsors yet — we're a brand-new chapter.</div>
        <div style="margin-top: 26px; border: 1px solid var(--line); background: var(--bg); padding: 16px;">
          <div style="font-size: 10px; letter-spacing: .12em; text-transform: uppercase; color: var(--mut);">Want to sponsor us?</div>
          <div style="margin-top: 9px; font-size: 12px; line-height: 1.7; color: var(--tx);">Reach out to our advisor, ms. navarro, to talk about supporting the club.</div>
        </div>
      </div>
    </section>
  </main>
</template>
