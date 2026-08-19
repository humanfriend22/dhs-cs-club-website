<script setup lang="ts">
import { scheduleTbdNote } from '~/data/club'
import { hasSchedule, nextEvent } from '~/utils/schedule'

const route = useRoute()
const { open: drawerOpen, close: closeDrawer } = useDrawer()

const links = [
  { to: '/', label: 'overview' },
  { to: '/events', label: 'schedule' },
  { to: '/honor-hall', label: 'honor hall' },
  { to: '/join', label: 'join' }
]

function isActive(to: string) {
  return route.path === to
}
</script>

<template>
  <div class="backdrop" :class="{ open: drawerOpen }" @click="closeDrawer" />

  <aside class="sidebar" :class="{ open: drawerOpen }">
    <div style="display: flex; align-items: center; justify-content: space-between; gap: 10px;">
      <div style="display: flex; align-items: center; gap: 10px;">
        <img src="/dhs-cs-logo.png" alt="DHS CS Club" style="width: 36px; height: 36px; border-radius: 4px;">
        <div style="line-height: 1.25;">
          <div style="font-size: 13px; font-weight: 700; color: var(--ink); letter-spacing: -.02em;">dhs-cs-club</div>
          <div style="font-size: 10px; color: var(--mut); letter-spacing: .04em;">dublin high school</div>
        </div>
      </div>
      <button class="close-btn" aria-label="Close menu" @click="closeDrawer">✕</button>
    </div>

    <div style="border: 1px solid var(--line); background: var(--bg2); padding: 11px 12px;">
      <div style="display: flex; align-items: center; gap: 7px; font-size: 10px; letter-spacing: .1em; text-transform: uppercase; color: var(--mut);">
        <span :style="{ width: '6px', height: '6px', background: hasSchedule ? 'var(--ok)' : 'var(--warn)', borderRadius: '50%' }" />{{ hasSchedule ? 'Next meeting' : 'Schedule' }}
      </div>
      <template v-if="hasSchedule && nextEvent">
        <div style="margin-top: 8px; font-size: 13px; font-weight: 700; color: var(--ink);">{{ nextEvent.date }} · {{ nextEvent.time }}</div>
        <div style="margin-top: 3px; font-size: 11px; color: var(--tx2);">{{ nextEvent.where }}</div>
      </template>
      <template v-else>
        <div style="margin-top: 8px; font-size: 13px; font-weight: 700; color: var(--ink);">To be determined</div>
        <div style="margin-top: 3px; font-size: 11px; color: var(--tx2);">{{ scheduleTbdNote }}</div>
      </template>
    </div>

    <nav style="display: flex; flex-direction: column; gap: 2px;">
      <NuxtLink
        v-for="link in links"
        :key="link.to"
        :to="link.to"
        class="nav-link"
        @click="closeDrawer"
      >
        <span style="color: var(--acc);">{{ isActive(link.to) ? '▸ ' : '  ' }}</span>{{ link.label }}
      </NuxtLink>
    </nav>

    <div style="margin-top: auto; display: flex; flex-direction: column; gap: 7px; font-size: 10px; color: var(--mut); letter-spacing: .04em;">
      <div style="border-top: 1px solid var(--line); padding-top: 12px;">HACK CLUB CHAPTER</div>
      <div>advisor: ms. navarro</div>
    </div>
  </aside>
</template>

<style scoped>
.sidebar {
  border-right: 1px solid var(--line);
  padding: 20px 18px;
  display: flex;
  flex-direction: column;
  gap: 22px;
  position: sticky;
  top: 0;
  height: 100vh;
  background: var(--bg);
}

.close-btn {
  display: none;
}

.backdrop {
  display: none;
}

.nav-link {
  display: flex;
  align-items: center;
  gap: 9px;
  text-align: left;
  font-family: inherit;
  font-size: 13px;
  background: none;
  border: 0;
  border-left: 2px solid transparent;
  border-bottom: none;
  padding: 11px 10px;
  color: var(--tx2);
  min-height: 44px;
}
.nav-link:hover {
  background: var(--bg3);
  color: var(--ink);
}
.nav-link.router-link-exact-active {
  color: var(--ink);
}

@media (max-width: 780px) {
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 260px;
    max-width: 82vw;
    z-index: 50;
    transform: translateX(-100%);
    transition: transform .25s cubic-bezier(.16, .84, .24, 1);
    box-shadow: 2px 0 24px rgba(0, 0, 0, .25);
  }
  .sidebar.open {
    transform: translateX(0);
  }

  .close-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
    flex: none;
    font-family: inherit;
    font-size: 14px;
    color: var(--tx2);
    background: transparent;
    border: 1px solid var(--line);
    cursor: pointer;
  }
  .close-btn:hover { color: var(--ink); border-color: var(--ink); }

  .backdrop {
    display: block;
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, .5);
    z-index: 40;
    opacity: 0;
    pointer-events: none;
    transition: opacity .25s ease;
  }
  .backdrop.open {
    opacity: 1;
    pointer-events: auto;
  }
}
</style>
