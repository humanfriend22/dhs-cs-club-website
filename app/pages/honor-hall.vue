<script setup lang="ts">
import honorHallRaw from '~~/content/honor-hall.json'
import { formatDate } from '~/utils/formatDate'

const honorHall = [...honorHallRaw].sort((a, b) => b.date.localeCompare(a.date))
</script>

<template>
  <main class="wipe">
    <section style="padding: 44px 30px 30px; border-bottom: 1px solid var(--line);">
      <div style="font-size: 11px; letter-spacing: .14em; text-transform: uppercase; color: var(--mut);">// honor hall</div>
      <h2 style="margin: 14px 0 0; font-size: 34px; font-weight: 700; letter-spacing: -.035em; color: var(--ink); max-width: 24em;">Members recognized by officers</h2>
      <p style="margin: 14px 0 0; max-width: 62ch; font-family: 'JetBrains Mono', monospace; font-size: 13px; line-height: 1.7; color: var(--tx2);">Added by officers for shipping, mentoring, or teaching — not everyone, and not automatic.</p>
    </section>

    <section style="display: grid; grid-template-columns: repeat(auto-fit, minmax(min(280px, 100%), 1fr));">
      <div
        v-for="h in honorHall"
        :key="h.name + h.date"
        class="honor-cell"
        style="padding: 24px 26px; border-right: 1px solid var(--line2); border-bottom: 1px solid var(--line2);"
      >
        <div style="display: flex; align-items: baseline; justify-content: space-between; gap: 10px;">
          <div style="font-size: 15px; font-weight: 700; color: var(--ink); letter-spacing: -.01em;">{{ h.name }}</div>
          <div style="font-size: 10px; letter-spacing: .1em; color: var(--mut); white-space: nowrap;">{{ formatDate(h.date) }}</div>
        </div>
        <p style="margin: 10px 0 0; font-family: 'JetBrains Mono', monospace; font-size: 12.5px; line-height: 1.6; color: var(--tx2);">{{ h.description }}</p>
        <div v-if="h.links?.length" style="display: flex; flex-wrap: wrap; gap: 8px; margin-top: 14px;">
          <a
            v-for="link in h.links"
            :key="link.url"
            :href="link.url"
            target="_blank"
            rel="noopener"
            class="link-btn"
          >{{ link.label }} →</a>
        </div>
      </div>
    </section>

    <section v-if="honorHall.length === 0" style="padding: 44px 30px; color: var(--mut); font-size: 13px;">
      No one's been added yet — officers add entries to content/honor-hall.json.
    </section>
  </main>
</template>

<style scoped>
.honor-cell:hover { background: var(--bg2); }

.link-btn {
  display: inline-flex;
  font-size: 11px;
  letter-spacing: .04em;
  color: var(--tx2);
  background: var(--bg2);
  border: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
  padding: 6px 10px;
}
.link-btn:hover { color: var(--acc); border-color: var(--acc); background: var(--bg2); }
</style>
