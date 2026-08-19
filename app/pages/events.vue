<script setup lang="ts">
import { scheduleTbdNote } from '~/data/club'
import events from '~~/content/events.json'

function kindColor(kind: string) {
  return kind === 'meeting' ? 'var(--acc)' : 'var(--ok)'
}

const infoCards = [
  {
    title: 'Calendar',
    body: 'Subscribe once and every meeting lands on your phone.',
    cta: 'ADD TO CALENDAR'
  },
  {
    title: 'Slack',
    body: '#dhs-cs-club on the Hack Club Slack. Ask questions between meetings.'
  },
  {
    title: 'Room',
    body: 'D-204, second floor of the D wing. Door stays propped until 3:45.'
  }
]
</script>

<template>
  <main class="wipe">
    <section style="padding: 44px 30px 28px; border-bottom: 1px solid var(--line);">
      <div style="font-size: 11px; letter-spacing: .14em; text-transform: uppercase; color: var(--mut);">// fall 2026</div>
      <h2 style="margin: 14px 0 0; font-size: 34px; font-weight: 700; letter-spacing: -.035em; color: var(--ink);">Meetings &amp; after-school events</h2>
      <p style="margin: 14px 0 0; max-width: 60ch; font-family: 'JetBrains Mono', monospace; font-size: 13px; line-height: 1.7; color: var(--tx2);">Odd weeks are workshops, even weeks are build sessions. Events are open to any Dublin High student, member or not.</p>
    </section>

    <section v-if="events.length">
      <div class="event-header">
        <span>Date</span><span>What</span><span>Where</span><span>Type</span>
      </div>
      <div
        v-for="e in events"
        :key="e.title"
        class="event-row"
      >
        <div>
          <div style="font-size: 13px; font-weight: 700; color: var(--ink);">{{ e.date }}</div>
          <div style="font-size: 11px; color: var(--mut); margin-top: 3px;">{{ e.time }}</div>
        </div>
        <div style="min-width: 0;">
          <div style="font-size: 15px; font-weight: 700; color: var(--ink); letter-spacing: -.02em;">{{ e.title }}</div>
          <div style="margin-top: 6px; font-family: 'JetBrains Mono', monospace; font-size: 12.5px; line-height: 1.6; color: var(--tx2); max-width: 66ch;">{{ e.detail }}</div>
        </div>
        <div style="font-size: 12px; color: var(--tx2);">{{ e.where }}</div>
        <div><span :style="{ fontSize: '10px', letterSpacing: '.1em', textTransform: 'uppercase', border: `1px solid ${kindColor(e.kind)}`, color: kindColor(e.kind), padding: '4px 8px' }">{{ e.kind }}</span></div>
      </div>
    </section>

    <section v-else style="padding: 44px 30px; border-bottom: 1px solid var(--line);">
      <div style="font-size: 15px; font-weight: 700; color: var(--ink);">Schedule to be determined</div>
      <p style="margin: 10px 0 0; max-width: 60ch; font-family: 'JetBrains Mono', monospace; font-size: 13px; line-height: 1.7; color: var(--tx2);">{{ scheduleTbdNote }}</p>
    </section>

    <section class="info-cards">
      <div
        v-for="(card, i) in infoCards"
        :key="card.title"
        class="info-card"
        :style="{ borderRight: i < infoCards.length - 1 ? '1px solid var(--line)' : 'none' }"
      >
        <div style="font-size: 10px; letter-spacing: .12em; text-transform: uppercase; color: var(--mut);">{{ card.title }}</div>
        <p :style="{ margin: card.cta ? '10px 0 14px' : '10px 0 0', fontSize: '12.5px', lineHeight: '1.65', color: 'var(--tx2)' }">{{ card.body }}</p>
        <AppButton v-if="card.cta" variant="dark" size="sm">{{ card.cta }}</AppButton>
      </div>
    </section>
  </main>
</template>

<style scoped>
.event-header,
.event-row {
  display: grid;
  grid-template-columns: 88px minmax(0, 1fr) 108px 84px;
  gap: 16px;
  padding: 11px 30px;
}
.event-header {
  border-bottom: 1px solid var(--line);
  background: var(--bg2);
  font-size: 10px;
  letter-spacing: .12em;
  text-transform: uppercase;
  color: var(--mut);
}
.event-row {
  padding: 18px 30px;
  border-bottom: 1px solid var(--line2);
  align-items: baseline;
}
.event-row:hover { background: var(--bg2); }

.info-cards {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  border-bottom: 1px solid var(--line);
}
.info-card {
  padding: 26px 30px;
  min-width: 0;
}

@media (max-width: 640px) {
  .event-header {
    display: none;
  }
  .event-row {
    grid-template-columns: 1fr;
    gap: 6px;
    padding: 16px 20px;
  }

  .info-cards {
    grid-template-columns: 1fr;
  }
  .info-card {
    border-right: none !important;
    border-bottom: 1px solid var(--line);
    padding: 20px;
  }
}
</style>
